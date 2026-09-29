// preview.js - local preview that behaves like the real Cloudflare Pages host.
//
//   node preview.js          -> http://localhost:8080
//   node preview.js 3000     -> http://localhost:3000
//
// WHY THIS FILE EXISTS
// Every asset path in the site is ROOT-RELATIVE (/css/style.css), which is
// required: the 10 Hindi pages live in hi/, so a relative ./css/style.css
// would resolve to /hi/css/style.css and 404. Root-relative paths only work
// when the site is served over HTTP from a domain root.
//
// That means double-clicking index.html shows unstyled HTML, because the
// browser looks for file:///C:/css/style.css. The markup is fine. The
// preview is not. Run this instead.

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = Number(process.argv[2]) || 8080;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

// Mirrors Cloudflare Pages: "/about" is served by "about.html" with a 200,
// and "/hi/" is served by "hi/index.html".
function resolve(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  const target = path.join(ROOT, clean);
  const rel = path.relative(ROOT, target);
  if (rel.startsWith('..')) return null; // refuse to serve outside the project

  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    const idx = path.join(target, 'index.html');
    return fs.existsSync(idx) ? idx : null;
  }
  if (fs.existsSync(target)) return target;
  if (fs.existsSync(target + '.html')) return target + '.html';
  return null;
}

const server = http.createServer((req, res) => {
  const file = resolve(req.url);

  if (!file) {
    const notFound = path.join(ROOT, '404.html');
    res.writeHead(404, { 'Content-Type': MIME['.html'] });
    res.end(fs.existsSync(notFound) ? fs.readFileSync(notFound) : '404');
    return;
  }

  res.writeHead(200, {
    'Content-Type': MIME[path.extname(file)] || 'application/octet-stream',
    'Cache-Control': 'no-store',
  });
  res.end(fs.readFileSync(file));
});

server.listen(PORT, () => {
  const pageCount = fs
    .readdirSync(ROOT)
    .filter((f) => f.endsWith('.html')).length;
  const hiCount = fs.existsSync(path.join(ROOT, 'hi'))
    ? fs.readdirSync(path.join(ROOT, 'hi')).filter((f) => f.endsWith('.html')).length
    : 0;

  console.log('');
  console.log('  assamtantrik.co local preview');
  console.log('  ' + '-'.repeat(46));
  console.log('  Home        http://localhost:' + PORT + '/');
  console.log('  English     http://localhost:' + PORT + '/about');
  console.log('  Hindi       http://localhost:' + PORT + '/hi/');
  console.log('  Contact     http://localhost:' + PORT + '/contact');
  console.log('  Not found   http://localhost:' + PORT + '/this-does-not-exist');
  console.log('  ' + '-'.repeat(46));
  console.log('  ' + pageCount + ' root html + ' + hiCount + ' hindi html served');
  console.log('  Ctrl+C to stop');
  console.log('');
});
