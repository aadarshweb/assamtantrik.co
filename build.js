// build.js - the generator. Single source of truth for every HTML file.
//
// NEVER hand-edit anything in the output. Content lives in content/. A hand-edit
// is silently discarded on the next build, which is how the v3 bug log happened.
//
//   node build.js
//
// Then: node verify.js && node audit.js

const fs = require('fs');
const path = require('path');

const SITE = require('./content/site');
const UI = require('./content/ui');
const { RENDERERS, notFoundPage } = require('./content/render');

const ROOT = __dirname;
const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);

// ---------------------------------------------------------------------------
// head() - every SEO-critical tag in one place.
// ---------------------------------------------------------------------------
function head(page, kind) {
  const hi = UI.isHi(page.slug);
  const canonical = SITE.url(page.slug);
  const og = SITE.domain + SITE.ogImage;
  const fontCss = hi ? SITE.fontCssHi : SITE.fontCss;
  const twin = UI.twinOf(page.slug);

  // hreflang. Reciprocal, self-referencing, x-default, and ONLY for languages
  // that exist. v3 pointed every page at /hi/ and /bn/ URLs that 404'd; those
  // URLs are now guarded by UI.twinOf, which returns null when there is no
  // translation, in which case the hi entry is omitted entirely.
  //
  // Every page must name ITSELF for its own language. Omitting the self-entry
  // on a Hindi page was a real bug caught by verify.js section 6.
  const enSelf = hi ? SITE.url(page.slug.slice(3)) : canonical;
  const hreflang = [
    `<link rel="alternate" hreflang="en" href="${enSelf}">`,
    hi ? '' : twin ? `<link rel="alternate" hreflang="hi" href="${twin}">` : '',
    hi ? `<link rel="alternate" hreflang="hi" href="${canonical}">` : '',
    `<link rel="alternate" hreflang="x-default" href="${enSelf}">`,
  ]
    .filter(Boolean)
    .join('\n  ');

  return `<!DOCTYPE html>
<html lang="${hi ? 'hi' : 'en'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${page.title}</title>
  <meta name="description" content="${page.desc}">
  <meta name="keywords" content="${page.keywords.join(', ')}">
  <meta name="author" content="${SITE.name}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="geo.region" content="IN-AS">
  <meta name="geo.placename" content="Mayong, Morigaon, Assam">
  <link rel="canonical" href="${canonical}">
  ${hi ? '<meta name="google" content="notranslate">' : ''}
  ${hreflang}

  <meta property="og:type" content="${kind === 'article' ? 'article' : 'website'}">
  <meta property="og:site_name" content="${SITE.name}">
  <meta property="og:locale" content="${hi ? SITE.altLocale : SITE.locale}">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.desc}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${og}">
  <meta property="og:image:width" content="${SITE.ogWidth}">
  <meta property="og:image:height" content="${SITE.ogHeight}">
  <meta property="og:image:alt" content="${SITE.name} - best tantrik in Kamakhya Temple and Mayong, Assam">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.desc}">
  <meta name="twitter:image" content="${og}">

  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" href="/favicon.png" sizes="48x48">
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48">
  <link rel="icon" type="image/png" href="/favicon-192.png" sizes="192x192">
  <link rel="apple-touch-icon" href="/favicon-192.png">
  <link rel="manifest" href="/manifest.json">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" href="${fontCss}" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="${fontCss}"></noscript>

  <link rel="stylesheet" href="/css/style.css">
  <link rel="preload" as="image" href="/images/logo.png" fetchpriority="high">
  <link rel="preload" as="image" href="${SITE.ogImage}" fetchpriority="high">

${UI.schemaFor(page.slug, kind)}
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
${UI.header(page.slug)}

<div id="main">
${RENDERERS[kind](page)}
</div>

${UI.footer(page.slug)}

  <script src="/js/script.js" defer></script>
</body>
</html>
`;
}

// ---------------------------------------------------------------------------
function notFound() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page not found | ${SITE.name}</title>
  <meta name="description" content="That page does not exist. Reach Deepak Tantrik, best tantrik in Kamakhya Temple and Mayong, Assam, on +91 9706801250 or visit our main pages.">
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="${SITE.url('404')}">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" href="/favicon.png" sizes="48x48">
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48">
  <link rel="icon" type="image/png" href="/favicon-192.png" sizes="192x192">
  <link rel="apple-touch-icon" href="/favicon-192.png">
  <link rel="manifest" href="/manifest.json">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="/css/style.css">
${UI.schemaLocalBusiness()}
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
${UI.header('404')}
<div id="main">
${notFoundPage()}
</div>
${UI.footer('404')}
  <script src="/js/script.js" defer></script>
</body>
</html>
`;
}

// ---------------------------------------------------------------------------
// sitemap. Canonical URLs only. /index.html NEVER appears - v3 listed both and
// submitted a URL that Cloudflare 307-redirects, which is a Search Console
// "Redirect error" (see ai_build_postmortem.md section 2).
// ---------------------------------------------------------------------------
function sitemap(pages) {
  const urls = pages
    .map((p) => {
      const alts = [];
      const twin = UI.twinOf(p.slug);
      const enSelf = UI.isHi(p.slug) ? SITE.url(p.slug.slice(3)) : SITE.url(p.slug);
      if (twin) {
        alts.push(`    <xhtml:link rel="alternate" hreflang="en" href="${enSelf}"/>`);
        alts.push(`    <xhtml:link rel="alternate" hreflang="hi" href="${twin}"/>`);
        alts.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${enSelf}"/>`);
      } else {
        alts.push(`    <xhtml:link rel="alternate" hreflang="en" href="${enSelf}"/>`);
        alts.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${enSelf}"/>`);
      }
      return `  <url>
    <loc>${SITE.url(p.slug)}</loc>
    <lastmod>${p.dateModified || BUILD_DATE}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
${alts.join('\n')}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

const robots = () => `User-agent: *
Allow: /

Sitemap: ${SITE.url('sitemap.xml')}
`;

const manifest = () =>
  JSON.stringify(
    {
      name: `${SITE.name} - Best Tantrik in Kamakhya Temple and Mayong`,
      short_name: SITE.name,
      description: 'Best tantrik in Kamakhya Temple and Mayong, Assam. Black magic removal, vashikaran, love problem solution.',
      icons: [
        { src: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
        { src: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      ],
      start_url: '/',
      scope: '/',
      display: 'browser',
      lang: 'en',
      theme_color: SITE.theme,
      background_color: SITE.theme,
    },
    null,
    2
  ) + '\n';

// ---------------------------------------------------------------------------
// _redirects.
//
// Cloudflare Pages serves "/about" from "about.html" AND "/about.html" from
// "about.html" with a 200 by default, so both URLs are reachable. Without an
// explicit hop Google can index the .html form as a separate URL, which
// duplicates the page and splits its signals. Every .html path therefore
// 301s to its clean URL.
//
// The rules are ENUMERATED rather than written as a splat. Cloudflare's splat
// cannot strip a filename suffix, and an unparseable line makes Cloudflare
// reject the whole file.
// ---------------------------------------------------------------------------
function redirects(pages) {
  const rules = [
    '# Cloudflare Pages redirects. Clean URLs are canonical; the .html hop is a 301.',
    '# Generated by build.js - do not hand-edit.',
    '',
  ];
  const seen = new Set();
  for (const p of pages) {
    const clean = p.slug === '' ? '/' : '/' + p.slug;
    const from = '/' + p.file + '.html';
    if (seen.has(from)) continue; // the homepage would otherwise appear twice
    seen.add(from);
    rules.push(`${from}\t${clean}\t301`);
  }
  rules.push('');
  return rules.join('\n');
}

// ---------------------------------------------------------------------------
function rmrf(p) {
  fs.rmSync(p, { recursive: true, force: true });
}

function write(rel, content) {
  const full = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  return Buffer.byteLength(content, 'utf8');
}

function main() {
  const pages = UI.allPages();
  const written = [];

  // Clear previously generated output so a removed page cannot linger.
  for (const f of fs.readdirSync(ROOT)) {
    if (f.endsWith('.html') && f !== '_headers') fs.unlinkSync(path.join(ROOT, f));
  }
  rmrf(path.join(ROOT, 'hi'));

  for (const p of pages) {
    const found = UI.sourceFor(p.slug);
    if (!found) throw new Error(`no source object for slug "${p.slug}"`);
    written.push([`${p.file}.html`, write(`${p.file}.html`, head(p, found.kind))]);
  }
  written.push(['404.html', write('404.html', notFound())]);
  written.push(['sitemap.xml', write('sitemap.xml', sitemap(pages))]);
  written.push(['robots.txt', write('robots.txt', robots())]);
  written.push(['manifest.json', write('manifest.json', manifest())]);
  written.push(['_redirects', write('_redirects', redirects(pages))]);

  const total = written.reduce((a, [, b]) => a + b, 0);
  console.log(`build: ${pages.length} pages + 404 + sitemap + robots + manifest`);
  console.log(`  indexable pages : ${pages.length}`);
  console.log(`  english pages   : ${pages.filter((p) => !p.slug.startsWith('hi/')).length}`);
  console.log(`  hindi pages     : ${pages.filter((p) => p.slug.startsWith('hi/')).length}`);
  console.log(`  total html      : ${(total / 1024).toFixed(1)} KB`);
  const big = written.filter(([, b]) => b > 90 * 1024);
  if (big.length) console.log(`  WARNING over 90KB: ${big.map(([n, b]) => `${n} ${(b / 1024).toFixed(0)}KB`).join(', ')}`);
}

if (require.main === module) main();
module.exports = { head, notFound, sitemap, robots, manifest, redirects, BUILD_DATE };
