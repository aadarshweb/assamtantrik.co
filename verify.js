// verify.js - STRUCTURAL gate. Must pass before a build is shippable.
//
//   node verify.js
//
// These are not "nice to have" lint rules. Checks 6 and 7 in particular convert
// a SILENT failure into a build failure: a malformed CSS value or a truncated
// stylesheet does not error, it just discards every rule after it, so the page
// looks partly styled and nobody notices for months.

const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

const UI = require('./content/ui');
const SITE = require('./content/site');
const { RENDERERS } = require('./content/render');

let failures = 0;
let checks = 0;
const fail = (msg) => {
  failures++;
  console.log('  FAIL ' + msg);
};
const ok = (label) => {
  checks++;
  console.log('  ok   ' + label);
};
const section = (n) => console.log('\n' + n);

const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(ROOT, p));

// Map a public URL to the file that serves it. Cloudflare Pages serves
// "/about" from "about.html" and "/" from "index.html"; "/hi/" is served by
// "hi/index.html". Return whichever actually exists so the site keeps working
// if the layout is ever restructured.
function fileForUrl(url) {
  const rel = (url.replace(SITE.domain, '') || '/').replace(/^\//, '').replace(/\/$/, '');
  if (rel === '' || rel === 'index') return 'index.html';
  const candidates = [rel + '.html', path.join(rel, 'index.html')];
  for (const c of candidates) if (exists(c)) return c;
  return candidates[0];
}

const pages = UI.allPages();
// The sitemap contract is defined against these, NOT against `pages`. A page
// marked noindex is built, linked and crawlable but is never submitted.
const indexable = UI.indexablePages();
const noindex = pages.filter((p) => p.noindex);
const norm = (p) => p.replace(/\\/g, '/');
const noindexFiles = new Set(noindex.map((p) => norm(p.file + '.html')));

const htmlFiles = [];
(function walk(dir, base) {
  for (const f of fs.readdirSync(dir)) {
    if (f === 'node_modules' || f === '.git' || f === '.kilo' || f === 'content') continue;
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full, path.join(base, f));
    else if (f.endsWith('.html')) htmlFiles.push(path.join(base, f));
  }
})(ROOT, '');

// ---------------------------------------------------------------------------
section('1. Support files');
for (const f of ['robots.txt', 'sitemap.xml', 'manifest.json', '_redirects', 'css/style.css', 'js/script.js', '404.html', 'favicon.ico', 'favicon.png', 'favicon-48.png', 'favicon-192.png', 'images/og-cover.jpg']) {
  if (exists(f)) ok(f);
  else fail('missing ' + f);
}

// ---------------------------------------------------------------------------
section('2. Every JSON-LD block parses');
let ldCount = 0;
for (const f of htmlFiles) {
  const c = read(f);
  const blocks = [...c.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  let bad = 0;
  for (const b of blocks) {
    ldCount++;
    try {
      JSON.parse(b[1]);
    } catch (e) {
      bad++;
      console.log('       ' + f + ': ' + e.message);
    }
  }
  if (bad) fail(f + ': ' + bad + ' unparseable JSON-LD block(s)');
}
if (!failures) ok(ldCount + ' JSON-LD blocks parse');

// ---------------------------------------------------------------------------
section('3. Sitemap');
const sm = read('sitemap.xml');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length === indexable.length) ok('loc count ' + locs.length + ' === indexable page count ' + indexable.length);
else fail('loc count ' + locs.length + ' !== indexable page count ' + indexable.length);

if (new Set(locs).size !== locs.length) fail('sitemap contains duplicate <loc> values');
else ok('no duplicate <loc>');

if (locs.some((l) => l.endsWith('.html'))) fail('sitemap contains a .html URL (Cloudflare 307-redirects these)');
else ok('no .html in sitemap');

if (locs.includes(SITE.url('index.html'))) fail('sitemap contains /index.html - this is the v3 redirect error');
else ok('no /index.html in sitemap');

if (locs.some((l) => !l.startsWith(SITE.domain))) fail('sitemap <loc> not absolute against the canonical domain');
else ok('all <loc> absolute on ' + SITE.domain);

// Every loc must resolve to a real file on disk.
for (const l of locs) {
  const file = fileForUrl(l);
  if (!exists(file)) fail('sitemap <loc> has no file: ' + l + ' (expected ' + file + ')');
}

// Every indexable page must be in the sitemap. The mirror of the assertion
// above, and the one that catches a page silently lost from the build.
for (const p of indexable) {
  if (!locs.includes(SITE.url(p.slug))) fail('indexable page is missing from the sitemap: ' + SITE.url(p.slug));
}

// And the reverse, which did not exist before noindex pages did. A sitemap is
// an explicit request to index, and it is a stronger signal than a robots meta
// tag, so listing a URL whose own meta says noindex asks Google to honour one
// instruction or the other. The page must simply be absent.
for (const p of noindex) {
  if (locs.includes(SITE.url(p.slug))) {
    fail('noindex page is listed in the sitemap: ' + SITE.url(p.slug) + ' - a sitemap entry overrides the page\'s own noindex meta');
  }
}
if (noindex.length) ok(noindex.length + ' noindex page(s) correctly absent from the sitemap');

// _redirects must 301 every .html path to its clean URL, or Google can index
// both forms and split the page signals.
{
  const rd = read('_redirects');
  for (const p of pages) {
    const from = '/' + p.file + '.html';
    const clean = p.slug === '' ? '/' : '/' + p.slug;
    const line = rd.split('\n').find((l) => l.startsWith(from + '\t'));
    if (!line) fail('_redirects: no rule for ' + from);
    else if (!line.includes('\t' + clean + '\t301')) fail('_redirects: ' + from + ' does not 301 to ' + clean);
  }
  ok('_redirects covers all ' + pages.length + ' .html paths');
}

// ---------------------------------------------------------------------------
section('4. Every referenced asset exists');
const assets = new Set();
for (const f of htmlFiles) {
  const c = read(f);
  for (const m of c.matchAll(/(?:src|href)="(\/(?:images|css|js)\/[^"?#]+)"/g)) assets.add(m[1]);
  for (const m of c.matchAll(/"contentUrl":\s*"https?:[^"]*\/(\/[^"]+)"/g)) assets.add(m[1]);
}
for (const a of assets) {
  if (!exists(a.replace(/^\//, ''))) fail('referenced asset missing: ' + a);
}
if (!failures) ok(assets.size + ' referenced assets present');

// ---------------------------------------------------------------------------
section('5. CSS');
const css = read('css/style.css');
const open = (css.match(/{/g) || []).length;
const close = (css.match(/}/g) || []).length;
if (open === close) ok('balanced braces (' + open + ')');
else fail('unbalanced braces: ' + open + ' open vs ' + close + ' close');

if (/background-attachment\s*:\s*fixed/.test(css)) fail('background-attachment: fixed - mobile jank and repaint storms (v4 anti-pattern)');
else ok('no background-attachment: fixed');

// HIGH VALUE: an undefined custom property does not error, it silently
// invalidates the declaration. Catch typos.
const defined = new Set([...css.matchAll(/^\s*(--[a-zA-Z0-9-]+)\s*:/gm)].map((m) => m[1]));
const used = new Set([...css.matchAll(/var\(\s*(--[a-zA-Z0-9-]+)/g)].map((m) => m[1]));
const undef = [...used].filter((v) => !defined.has(v));
if (undef.length) fail('var() references undefined custom properties: ' + undef.join(', '));
else ok('all ' + used.size + ' var() references are defined');

// HIGH VALUE: every class used in the HTML needs a rule. A truncated sheet
// otherwise shows up only as "the page looks a bit off".
const cssClasses = new Set([...css.matchAll(/\.([a-zA-Z][a-zA-Z0-9_-]*)/g)].map((m) => m[1]));
const usedClasses = new Set();
for (const f of htmlFiles) {
  const c = read(f);
  for (const m of c.matchAll(/class="([^"]+)"/g)) m[1].split(/\s+/).forEach((x) => x && usedClasses.add(x));
}
const unstyled = [...usedClasses].filter((x) => !cssClasses.has(x));
if (unstyled.length) fail('HTML classes with no CSS rule: ' + unstyled.join(', '));
else ok('all ' + usedClasses.size + ' HTML classes have CSS rules');

// ---------------------------------------------------------------------------
section('6. hreflang resolves and is reciprocal');
const hreflangTargets = new Map();
for (const f of htmlFiles) {
  const c = read(f);

  // The 404 is noindex. hreflang on a noindex page is meaningless noise: it is
  // a request to index this URL and to treat it as the language alternate for a
  // set, which is the opposite of what the page asks for. build.js omits it and
  // this check skips those pages for the same reason.
  if (f === '404.html' || noindexFiles.has(norm(f))) continue;

  const self = (c.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  const alts = [...c.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
  if (!alts.some((a) => a[1] === 'x-default')) fail(f + ': no x-default hreflang');

  for (const m of alts) {
    const lang = m[1];
    const href = m[2];
    const file = fileForUrl(href);
    if (!exists(file)) fail(f + ': hreflang ' + lang + ' -> ' + href + ' does not resolve to a file (' + file + ' missing)');
    hreflangTargets.set(href, f);
  }
  if (alts.length && self) {
    const selfLang = (c.match(/<html lang="([^"]+)"/) || [])[1];
    const pointsToSelf = alts.some((a) => a[1] === selfLang && a[2] === self);
    if (!pointsToSelf) fail(f + ': no hreflang entry naming its own canonical for lang=' + selfLang);
  }
}
if (!failures) ok(hreflangTargets.size + ' hreflang targets resolve');

// Reciprocity: if A links to B, B must link back to A.
for (const [href, from] of hreflangTargets) {
  const file = fileForUrl(href);
  if (!exists(file)) continue;
  if (file === from) continue;
  const c = read(file);
  const fromSelf = (read(from).match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (!c.includes(`href="${fromSelf}"`)) fail(file + ': does not link back to ' + from + ' (hreflang not reciprocal)');
}
if (!failures) ok('hreflang is reciprocal');

// The VISIBLE language switcher, which is a separate code path from the
// rel=alternate links above and used to be built unconditionally as '/hi/' +
// slug. Every English page without a Hindi translation therefore shipped a
// language link to a 404, and neither gate caught it: audit section 8 only
// matches root-relative hrefs, and this one is an absolute URL. Asserted over
// ALL pages, noindex included, because the untranslated guides and the
// governance documents are exactly the pages that hit it.
{
  let broken = 0;
  for (const f of htmlFiles) {
    const c = read(f);
    for (const m of c.matchAll(/<a class="lang-link" href="([^"]+)"/g)) {
      const target = fileForUrl(m[1]);
      if (!exists(target)) {
        broken++;
        fail(f + ': language switcher points at ' + m[1] + ' which has no file (' + target + ' missing)');
      }
    }
  }
  if (!broken) ok('every visible language switcher resolves to a real page');
}

// ---------------------------------------------------------------------------
section('7. Encoding: no BOM, no mojibake, no replacement chars');
const MOJIBAKE = /[\u00C2\u00C3\u00E2][\u0080-\u00BF]|[\uFFFD]|â€|Ã¢/;
for (const f of [...htmlFiles, 'css/style.css', 'js/script.js', 'sitemap.xml', 'robots.txt', 'manifest.json']) {
  const buf = fs.readFileSync(path.join(ROOT, f));
  if (buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) fail(f + ': has a UTF-8 BOM');
  const text = buf.toString('utf8');
  const m = text.match(MOJIBAKE);
  if (m) {
    const at = text.indexOf(m[0]);
    fail(f + ': mojibake "' + m[0] + '" near char ' + at + ' -> ' + JSON.stringify(text.slice(Math.max(0, at - 40), at + 20)));
  }
}
if (!failures) ok('no BOM, no mojibake, no U+FFFD');

// UI glyphs must be entities, so a shell round-trip cannot corrupt them.
for (const f of htmlFiles) {
  const text = read(f);
  if (/<div class="hamburger">[^\x00-\x7F]/.test(text)) fail(f + ': raw non-ASCII in the hamburger glyph - use an HTML entity');
  if (/<div class="stars">[^\x00-\x7F]/.test(text)) fail(f + ': raw non-ASCII in the star glyphs - use an HTML entity');
}
if (!failures) ok('UI glyphs use HTML entities');

// ---------------------------------------------------------------------------
section('8. No legacy v3 artefacts');
for (const f of htmlFiles) {
  const c = read(f);
  if (c.includes('data-i18n')) fail(f + ': data-i18n present - the JS translation layer is the v3 multilingual bug');
  const js = read('js/script.js');
  if (/translations\[|setLanguage\(/.test(js)) fail('js/script.js still contains a translation dictionary');
}
if (!failures) ok('no data-i18n, no translation dictionary in site JS');

// ---------------------------------------------------------------------------
section('9. Registry integrity');
for (const src of [...UI.services, ...UI.locations, ...UI.guides, ...UI.legal, UI.core.about, UI.core.servicesPage, UI.core.contact, UI.core.home]) {
  const id = src.slug === '' ? '(home)' : src.slug;
  if (typeof src.slug !== 'string') fail('a registry entry has a non-string slug: ' + id);
  // Body copy can be intro, lead, or a renderer-specific field.
  const hasBody = src.intro || src.lead || src.about || src.narrative || src.deep || src.form;
  if (!hasBody) fail(id + ': no body copy');
  if (!src.h1) fail(id + ': no h1');
  if (!src.title) fail(id + ': no title');
  if (!src.desc) fail(id + ': no description');
  if (src.hasHi && !src.hi) fail(id + ': hasHi is true but no hi content');
  if (src.hasHi && !src.hi.title) fail(id + ': hi content has no title');
  for (const r of src.related || []) {
    if (!UI.sourceFor(r)) fail(id + ': related link "' + r + '" resolves to no page');
  }
}
const slugs = pages.map((p) => p.slug);
if (new Set(slugs).size !== slugs.length) fail('duplicate slugs in the page index');
else ok(slugs.length + ' unique slugs, ' + pages.length + ' pages');
if (!failures) ok('registry entries are complete');

// ---------------------------------------------------------------------------
section('10. Renderers');
for (const [k, fn] of Object.entries(RENDERERS)) {
  if (typeof fn !== 'function') fail('renderer "' + k + '" is not a function');
}
if (!failures) ok(Object.keys(RENDERERS).length + ' renderers registered');

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
section('11. Review data is real, not invented');
{
  const R = SITE.reviews;
  if (R.enabled) {
    if (!R.ratingValue || !R.reviewCount) fail('content/site.js', 'reviews.enabled is true but ratingValue/reviewCount are missing');
    if (!R.source) {
      fail('content/site.js',
        'aggregateRating is enabled with no `source` URL. Google requires review markup to be verifiable by a visitor. Enable it only with figures a user can see on a page you can link to, otherwise leave reviews.enabled = false');
    }
    const num = parseFloat(R.ratingValue);
    if (!(num >= 0 && num <= 5)) fail('content/site.js', 'ratingValue ' + R.ratingValue + ' is outside 0-5');
  } else {
    ok('aggregateRating is OFF - no unverifiable review claim in machine-readable data');
  }

  // The visible testimonials must not be presented as a review count.
  for (const f of htmlFiles) {
    const c = read(f);
    for (const m of c.matchAll(/"reviewCount":\s*"([^"]+)"/g)) {
      fail(f, 'reviewCount ' + m[1] + ' present while SITE.reviews.enabled is false');
    }
    // "387 reviews", "1,248 ratings" and similar claims in visible copy
    for (const m of c.matchAll(/(\d[\d,]{2,})\s*\+?\s*(?:reviews|ratings|clients served)/gi)) {
      fail(f, 'visible copy claims "' + m[0] + '" - a count that large must be verifiable or removed');
    }
  }
}

// ---------------------------------------------------------------------------
section('12. Mobile conversion: sticky call/WhatsApp bar');
{
  for (const p of pages) {
    const c = read(p.file + '.html');
    if (!c.includes('class="mobile-cta-bar"')) fail(p.file, 'no sticky mobile call/WhatsApp bar');
  }
  const css = read('css/style.css');
  if (!/\.mobile-cta-bar\s*\{/.test(css)) fail('css/style.css', 'no .mobile-cta-bar rule');
  else ok('sticky mobile CTA bar present on all ' + pages.length + ' pages');
}

// ---------------------------------------------------------------------------
// The noindex contract, asserted in full. Four pages are built, linked from
// every English page, crawlable, noindex, and absent from the sitemap. Any one
// half of that can be broken silently: drop the footer link and the page
// becomes orphaned, drop the meta and it starts competing for queries, list it
// in the sitemap and the sitemap wins. None of those raise an error anywhere
// else in the build, so they are checked here against the SERVED html rather
// than against the registry that produced it.
// ---------------------------------------------------------------------------
section('13. noindex governance pages: unindexed, out of the sitemap, linked everywhere');
{
  if (!noindex.length) {
    fail('no page is marked noindex - the privacy / terms / disclaimer / developer-declaration pages have gone missing');
  }

  for (const p of noindex) {
    const c = read(p.file + '.html');
    const directives = ((c.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || '')
      .split(',')
      .map((d) => d.trim());
    if (!directives.includes('noindex')) {
      fail(p.file, 'is marked noindex in the registry but the served robots meta is "' + directives.join(',') + '"');
    }
    // A stray bare `index` next to `noindex` is a contradiction a crawler has
    // to resolve, and it does not always resolve the way we want.
    if (directives.includes('index')) {
      fail(p.file, 'robots meta carries both index and noindex');
    }
    if (!directives.includes('follow')) {
      fail(p.file, 'robots meta has no `follow` - the footer links that make this page reachable would be wasted');
    }
    if (/<link rel="alternate" hreflang=/.test(c)) {
      fail(p.file, 'emits hreflang - that is a request to index, contradicting its own noindex');
    }
  }

  // Crawlable, not blocked. A noindex page hidden behind a robots.txt Disallow
  // is never fetched, so the noindex is never read and the URL can still turn
  // up in results as "indexed, though blocked by robots.txt" - a worse outcome
  // than being absent. These pages are meant to be fetched and then declined.
  {
    const rb = read('robots.txt');
    for (const p of noindex) {
      const blocked = rb
        .split('\n')
        .map((l) => l.trim())
        .some((l) => new RegExp('^Disallow:\\s*' + p.slug + '\\s*$').test(l));
      if (blocked) fail('robots.txt', 'Disallows /' + p.slug + ' - a noindex page must stay crawlable');
    }
  }

  // Linked from every ENGLISH page. Asserted against the built html, so this
  // catches the footer block being dropped, filtered out, or scoped to the
  // wrong locale, none of which would fail anything else.
  const en = pages.filter((p) => !UI.isHi(p.slug));
  for (const p of en) {
    const c = read(p.file + '.html');
    for (const l of noindex) {
      if (!c.includes('href="/' + l.slug + '"')) {
        fail(p.file, 'does not link to the governance page /' + l.slug);
      }
    }
  }
  if (!failures) ok('all ' + noindex.length + ' governance pages linked from all ' + en.length + ' English pages');

  // And English ONLY, which is a decision rather than an omission. None of
  // these documents has a Hindi translation, so hasHi is false, no hi hreflang
  // is emitted and /hi/privacy-policy does not exist. A Hindi page linking to
  // an English-only legal document would be a half-finished localisation; the
  // scope is pinned here so it cannot drift quietly.
  for (const p of pages.filter((x) => UI.isHi(x.slug))) {
    const c = read(p.file + '.html');
    for (const l of noindex) {
      if (c.includes('href="/' + l.slug + '"')) {
        fail(p.file, 'links to /' + l.slug + ', which has no Hindi version');
      }
    }
  }
  const hiNoindex = noindex.filter((p) => UI.isHi(p.slug));
  if (hiNoindex.length) fail('a Hindi page is marked noindex: ' + hiNoindex.map((p) => '/' + p.slug).join(', '));
  else ok('governance pages stay English-only; no Hindi twin is emitted');

  // Each governance page must link to the other three, so a reader who lands on
  // one can reach the rest without going back to the footer.
  for (const p of noindex) {
    const c = read(p.file + '.html');
    for (const l of noindex) {
      if (l.slug !== p.slug && !c.includes('href="/' + l.slug + '"')) {
        fail(p.file, 'does not cross-link to the sibling document /' + l.slug);
      }
    }
  }
  if (!failures) ok('each governance page cross-links the other three');
}

console.log('\n' + '-'.repeat(60));
console.log(
  failures
    ? `verify: ${failures} FAILURE(S), ${checks} checks passed`
    : `verify: PASS  (${checks} checks, ${pages.length} pages, ${ldCount} schema blocks, ${assets.size} assets)`
);
process.exit(failures ? 1 : 0);
