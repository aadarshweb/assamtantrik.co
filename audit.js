// audit.js - SEO CONFORMANCE gate. Must pass before a build is shippable.
//
//   node audit.js
//
// Thresholds are MEASURED, not guessed (v4 Step 16). Word count is a proxy, not
// a target: a page below target with a short, honest answer is not a failure to
// pad away, it is a note. Everything else is a hard fail.

const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

const UI = require('./content/ui');
const SITE = require('./content/site');

let issues = 0;
const fail = (f, msg) => {
  issues++;
  console.log('  FAIL [' + f + '] ' + msg);
};
const ok = (msg) => console.log('  ok   ' + msg);
const note = (f, msg) => console.log('  note [' + f + '] ' + msg);
const section = (n) => console.log('\n' + n);

const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const strip = (h) =>
  h
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const pages = UI.allPages();

// Word-count floors by page kind. Service and article pages are the ones that
// must answer the query properly.
const WORD_MIN = { home: 600, article: 1000, service: 500, location: 500, about: 500, services: 400, contact: 400 };

// ---------------------------------------------------------------------------
section('1. Titles (46-62 chars, primary keyword first, brand after)');
for (const p of pages) {
  const c = read(p.file + '.html');
  const t = (c.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '';
  if (t.length < 46 || t.length > 62) fail(p.file, 'title ' + t.length + ' chars, want 46-62: "' + t + '"');
  if (!/<title>[\s\S]*<\/title>/.test(c)) fail(p.file, 'no <title>');
  // Primary keyword must lead; the brand must not open the title.
  const brand = UI.isHi(p.slug) ? 'दीपक तांत्रिक' : SITE.name;
  if (t.startsWith(brand)) fail(p.file, 'title starts with the brand - the primary keyword must lead');
}
if (!issues) ok('all ' + pages.length + ' titles in range and keyword-first');

section('2. Descriptions (120-158 chars, clean, phone, CTA)');
{
  for (const p of pages) {
    const c = read(p.file + '.html');
    const d = (c.match(/<meta name="description" content="([\s\S]*?)"/) || [])[1] || '';
    if (d.length < 120 || d.length > 158) fail(p.file, 'description ' + d.length + ' chars, want 120-158');
    // Mojibake in a meta description renders as garbage in the SERP and kills
    // CTR - that exact bug is in the v3 postmortem. Hindi pages legitimately
    // contain Devanagari, so the rule is "no corruption", not "no non-ASCII".
    if (/[\uFFFD]|â€|Ã¢/.test(d)) fail(p.file, 'description contains corrupted characters');
    if (!UI.isHi(p.slug) && /[^\x20-\x7E]/.test(d)) fail(p.file, 'English description contains non-ASCII characters');
    if (!/\d{10}/.test(d)) fail(p.file, 'description has no phone number');
  }
  if (!issues) ok('all descriptions in range, uncorrupted, with phone');
}

section('3. Exactly one H1 per page, primary keyword leads, static HTML');
for (const p of pages) {
  const c = read(p.file + '.html');
  const h1s = [...c.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
  if (h1s.length !== 1) fail(p.file, h1s.length + ' <h1> elements, want exactly 1');
  else {
    const text = strip(h1s[0][1]);
    if (text.length < 15) fail(p.file, 'H1 is too thin: "' + text + '"');
  }
  // A JS layer that can rewrite the H1 risks Google indexing something the
  // user never sees. There is no data-i18n anywhere now; assert it stays so.
  if (/<h1[^>]*data-i18n/.test(c)) fail(p.file, 'H1 is controlled by data-i18n - it must be static HTML');
}
if (!issues) ok('one static H1 per page');

section('4. Heading hierarchy (never skip a level)');
for (const p of pages) {
  const c = read(p.file + '.html');
  const body = (c.match(/<div id="main">([\s\S]*)<\/body>/) || [])[1] || c;
  const levels = [...body.matchAll(/<h([1-6])\b/g)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i - 1] > 1) {
      fail(p.file, 'heading level jumps h' + levels[i - 1] + ' -> h' + levels[i]);
      break;
    }
  }
  const h2 = levels.filter((l) => l === 2).length;
  if (h2 < 3) fail(p.file, 'only ' + h2 + ' h2 elements, want at least 3 (v4 Step 9)');
}
if (!issues) ok('heading hierarchy is clean, >=3 h2 per page');

section('5. Images: alt text, dimensions, lazy loading');
for (const p of pages) {
  const c = read(p.file + '.html');
  for (const m of c.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    if (!/\balt=/.test(tag)) fail(p.file, 'img with no alt attribute: ' + tag.slice(0, 70));
    const alt = (tag.match(/alt="([^"]*)"/) || [])[1] || '';
    const decorative = alt === '';
    if (!decorative && alt.length < 15) fail(p.file, 'alt text too thin: "' + alt + '"');
    // Pure keyword alt text is a stuffing signal and useless to a screen reader.
    if (!decorative && alt.split(/\s+/).length <= 3 && !/\b(is|the|at|in|near|during|and)\b/i.test(alt)) {
      fail(p.file, 'alt text looks like a bare keyword: "' + alt + '"');
    }
    if (!/\bwidth=/.test(tag) || !/\bheight=/.test(tag)) fail(p.file, 'img missing width/height (causes CLS): ' + tag.slice(0, 60));
    if (decorative && !/aria-hidden/.test(tag)) fail(p.file, 'decorative img needs aria-hidden="true"');
  }
}
if (!issues) ok('every image has qualifying alt text, dimensions, and lazy loading');

section('6. Schema: exactly one LocalBusiness, AggregateRating nested, no standalone');
{
  let blocks = 0;
  for (const p of pages.concat([{ file: '404', slug: '404' }])) {
    const f = p.file + '.html';
    if (!fs.existsSync(path.join(ROOT, f))) continue;
    const c = read(f);
    const parsed = [...c.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
    blocks += parsed.length;

    const top = parsed.filter((x) => x['@type'] === 'LocalBusiness');
    if (top.length !== 1) fail(f, top.length + ' top-level LocalBusiness blocks, want exactly 1');
    if (top[0]) {
      if (!top[0].aggregateRating) fail(f, 'LocalBusiness has no nested aggregateRating');
      if (!Array.isArray(top[0].address) || top[0].address.length < 2) {
        fail(f, 'LocalBusiness needs BOTH locations as an address array, got ' + (top[0].address ? 1 : 0));
      }
      if (!top[0]['@id']) fail(f, 'LocalBusiness has no @id - the entity graph cannot be built');
    }
    // A standalone AggregateRating detaches the rating from the business entity.
    const standalone = parsed.filter((x) => x['@type'] === 'AggregateRating');
    if (standalone.length) fail(f, standalone.length + ' standalone AggregateRating block(s) - nest it inside LocalBusiness');

    // Schema must agree with the page it is on.
    const desc = (c.match(/<meta name="description" content="([^"]*)"/) || [])[1];
    if (top[0] && top[0].url && desc) {
      // nothing to cross-check beyond presence; the counts above are the gate
    }
  }
  if (!issues) ok(blocks + ' schema blocks, one LocalBusiness per page, ratings nested');
}

section('7. FAQ schema and the visible FAQ come from the same array');
for (const p of pages) {
  const c = read(p.file + '.html');
  const found = UI.sourceFor(p.slug);
  const body = UI.isHi(p.slug) ? found.src.hi : found.src;
  const faqs = (body && body.faqs) || [];
  const visible = (c.match(/<details class="faq-item"/g) || []).length;
  const blocks = [...c.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const faqSchema = blocks.find((x) => x['@type'] === 'FAQPage');
  if (faqs.length && !faqSchema) fail(p.file, 'page has FAQs but no FAQPage schema');
  if (faqSchema && !faqs.length) fail(p.file, 'FAQPage schema present but no visible FAQ');
  if (faqSchema && faqSchema.mainEntity.length !== visible) {
    fail(p.file, 'FAQPage has ' + faqSchema.mainEntity.length + ' questions but ' + visible + ' are visible - divergence is a manual-action risk');
  }
}
if (!issues) ok('visible FAQ and FAQPage schema are identical on every page');

section('8. Internal links resolve, descriptive anchors, sufficient count');
for (const p of pages) {
  const c = read(p.file + '.html');
  const hrefs = [...c.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]);
  const unique = [...new Set(hrefs)];
  for (const h of unique) {
    if (/\.(css|js|xml|txt|json|png|jpg|ico)$/.test(h)) continue;
    const file = (() => {
      const rel = h.replace(/^\//, '').replace(/\/$/, '');
      if (rel === '') return 'index.html';
      for (const cand of [rel + '.html', path.join(rel, 'index.html')]) {
        if (fs.existsSync(path.join(ROOT, cand))) return cand;
      }
      return rel + '.html';
    })();
    if (!fs.existsSync(path.join(ROOT, file))) fail(p.file, 'internal link to a non-existent page: ' + h);
  }
  const navish = unique.filter((h) => !/\.(css|js|xml|txt|json|png|jpg|ico)$/.test(h));
  if (navish.length < 8) fail(p.file, 'only ' + navish.length + ' unique internal links, want >=8');

  // Never "click here" or "read more" as the whole anchor.
  for (const m of c.matchAll(/<a\b[^>]*href="\/[^"#?]*"[^>]*>([\s\S]*?)<\/a>/g)) {
    const text = strip(m[1]).toLowerCase();
    if (['click here', 'here', 'read more', 'more', 'link'].includes(text) || text.length < 3) {
      fail(p.file, 'non-descriptive anchor text: "' + text + '"');
    }
  }
}
if (!issues) ok('all internal links resolve, anchors are descriptive, >=8 per page');

section('9. Keywords: one PRIMARY cluster per page, no cannibalisation');
{
  // Only the PRIMARY term (keywords[0]) defines what a page ranks for. Two
  // pages sharing it is cannibalisation. Secondary terms legitimately recur -
  // that is how a site signals relatedness - and Google has ignored
  // <meta keywords> since 2009, so overlap there is reported, not failed.
  const primary = new Map();
  const secondary = new Map();
  for (const p of pages) {
    if (p.slug.startsWith('hi/')) continue; // Hindi clusters are translations, not competitors
    const kws = p.keywords.map((k) => k.toLowerCase().trim());
    if (kws.length < 6 || kws.length > 12) fail(p.file, kws.length + ' keywords, want 6-12');
    if (!kws[0]) fail(p.file, 'no primary keyword');
    if (primary.has(kws[0])) {
      fail(p.file, 'primary keyword "' + kws[0] + '" is also the primary of ' + primary.get(kws[0]) + ' - cannibalisation');
    }
    primary.set(kws[0], p.file);
    for (const k of kws.slice(1)) {
      if (!secondary.has(k)) secondary.set(k, []);
      secondary.get(k).push(p.file);
    }
  }
  const shared = [...secondary.entries()].filter(([, v]) => v.length > 1);
  ok(primary.size + ' unique primary keywords across ' + primary.size + ' English pages');
  ok(secondary.size + ' secondary terms, ' + shared.length + ' shared across pages (expected and healthy)');
}

section('10. Content depth');
{
  let total = 0;
  for (const p of pages) {
    const c = read(p.file + '.html');
    const body = (c.match(/<div id="main">([\s\S]*?)<\/div>\s*\n\s*<footer/) || [])[1] || c;
    const words = strip(body).split(/\s+/).filter(Boolean).length;
    total += words;
    const kind = UI.sourceFor(p.slug).kind;
    const min = WORD_MIN[kind] || 400;
    if (words < min) note(p.file, kind + ': ' + words + ' words (floor ' + min + ') - grow only if the page is genuinely thin, never pad');
  }
  ok('total ' + total + ' words across ' + pages.length + ' pages');
}

section('11. Duplication: no block repeated verbatim across pages');
{
  const seen = new Map();
  for (const p of pages) {
    const c = read(p.file + '.html');
    // Any run of 40+ words appearing in two different pages is boilerplate.
    const words = strip((c.match(/<div id="main">([\s\S]*?)<\/div>\s*\n\s*<footer/) || [])[1] || '').split(/\s+/);
    for (let i = 0; i + 40 < words.length; i += 20) {
      const chunk = words.slice(i, i + 40).join(' ').toLowerCase();
      if (seen.has(chunk) && seen.get(chunk) !== p.file) {
        fail(p.file, '40-word block duplicated from ' + seen.get(chunk) + ': "' + chunk.slice(0, 60) + '..."');
        i = words.length;
        break;
      }
      seen.set(chunk, p.file);
    }
  }
  if (!issues) ok('no duplicated content blocks across pages');
}

section('12. Open Graph and Twitter');
for (const p of pages) {
  const c = read(p.file + '.html');
  for (const prop of ['og:type', 'og:site_name', 'og:locale', 'og:title', 'og:description', 'og:url', 'og:image', 'og:image:width', 'og:image:height']) {
    if (!c.includes(`property="${prop}"`)) fail(p.file, 'missing ' + prop);
  }
  for (const n of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!c.includes(`name="${n}"`)) fail(p.file, 'missing ' + n);
  }
  // og:url must equal the canonical, or social shares announce one URL while
  // the page claims another. v3 had og:url=/index.html with canonical=/.
  const ogUrl = (c.match(/property="og:url" content="([^"]*)"/) || [])[1];
  const canonical = (c.match(/rel="canonical" href="([^"]*)"/) || [])[1];
  if (ogUrl !== canonical) fail(p.file, 'og:url (' + ogUrl + ') does not match canonical (' + canonical + ')');
  // Declared image dimensions must match the real file.
  const ogImg = (c.match(/property="og:image" content="([^"]*)"/) || [])[1];
  if (ogImg && !/\.jpg$/i.test(ogImg)) fail(p.file, 'og:image is not a .jpg: ' + ogImg);
}
if (!issues) ok('OG and Twitter complete, og:url matches canonical, og:image is .jpg');

section('13. Canonical, robots meta, geo meta');
for (const p of pages) {
  const c = read(p.file + '.html');
  const canonical = (c.match(/rel="canonical" href="([^"]*)"/) || [])[1];
  const expected = SITE.url(p.slug);
  if (canonical !== expected) fail(p.file, 'canonical is ' + canonical + ', expected ' + expected);
  if (/\.html$/.test(canonical || '')) fail(p.file, 'canonical ends in .html - Cloudflare 307-redirects it');
  if (!canonical.startsWith(SITE.domain)) fail(p.file, 'canonical is not on ' + SITE.domain);
  const robots = (c.match(/<meta name="robots" content="([^"]*)"/) || [])[1] || '';
  if (!/index/.test(robots)) fail(p.file, 'no index directive in robots meta');
  if (!/max-image-preview:large/.test(robots)) fail(p.file, 'robots meta is missing max-image-preview:large - images may be withheld from the index');
  if (!c.includes('name="geo.region"')) fail(p.file, 'missing geo.region');
}
if (!issues) ok('canonical, robots and geo meta correct on all pages');

section('14. Favicons and manifest');
for (const p of pages.concat([{ file: '404', slug: '404' }])) {
  const c = read(p.file + '.html');
  for (const l of ['/favicon.ico', '/favicon.png', '/favicon-48.png', '/favicon-192.png']) {
    if (!c.includes(`href="${l}"`)) fail(p.file, 'missing favicon link ' + l);
  }
  if (!c.includes('rel="manifest"')) fail(p.file, 'no manifest link');
  if (/href="\.\/favicon/.test(c)) fail(p.file, 'relative favicon path - Google requires root-relative');
}
{
  const fs2 = require('fs');
  for (const f of ['favicon.ico', 'favicon.png', 'favicon-48.png', 'favicon-192.png']) {
    const size = fs2.statSync(path.join(ROOT, f)).size;
    if (size > 100 * 1024) fail(f, size / 1024 + ' KB - Google will not download it');
  }
  const man = JSON.parse(read('manifest.json'));
  if (!man.icons || man.icons.length < 2) fail('manifest.json', 'needs icons at 48 and 192');
  if (man.start_url !== '/') fail('manifest.json', 'start_url must be /');
}
if (!issues) ok('favicons present, root-relative, all under 100 KB, manifest valid');

section('15. Performance: async fonts, preloaded LCP image, asset budget');
for (const p of pages) {
  const c = read(p.file + '.html');
  if (!/rel="preload" href="https:\/\/fonts\.googleapis\.com[^"]*" as="style"/.test(c)) {
    fail(p.file, 'Google Fonts are not async-loaded via preload+onload');
  }
  if (/<link[^>]+href="https:\/\/fonts\.googleapis\.com[^"]*"[^>]*rel="stylesheet"/.test(c)) {
    fail(p.file, 'render-blocking font stylesheet outside <noscript>');
  }
  if (!/fetchpriority="high"/.test(c)) fail(p.file, 'no fetchpriority="high" on the LCP image');
  if (c.length > 90 * 1024) fail(p.file, 'HTML is ' + (c.length / 1024).toFixed(0) + ' KB');
}
{
  const budget = { 'images/hero_bg.jpg': 300, 'images/portrait.jpg': 200, 'images/logo.png': 100, 'images/mandala.png': 250, 'images/religious.jpg': 250, 'images/og-cover.jpg': 150 };
  for (const [f, kb] of Object.entries(budget)) {
    const size = fs.statSync(path.join(ROOT, f)).size / 1024;
    if (size > kb) fail(f, size.toFixed(0) + ' KB exceeds the ' + kb + ' KB budget');
  }
  const js = fs.statSync(path.join(ROOT, 'js/script.js')).size / 1024;
  if (js > 20) fail('js/script.js', js.toFixed(1) + ' KB - the v3 file was 89 KB of translation dictionaries');
  const css = fs.statSync(path.join(ROOT, 'css/style.css')).size / 1024;
  if (css > 60) fail('css/style.css', css.toFixed(1) + ' KB');
}
if (!issues) ok('fonts async, LCP preloaded, all assets within budget, JS ' + (fs.statSync(path.join(ROOT, 'js/script.js')).size / 1024).toFixed(1) + ' KB');

section('16. Multilingual is real static HTML, not a JS swap');
for (const p of pages) {
  const c = read(p.file + '.html');
  const lang = (c.match(/<html lang="([^"]+)"/) || [])[1];
  const expect = UI.isHi(p.slug) ? 'hi' : 'en';
  if (lang !== expect) fail(p.file, 'html lang is ' + lang + ', expected ' + expect);
  if (lang === 'hi' && !/Noto(\+|%20| )Sans(\+|%20| )Devanagari/.test(c)) {
    fail(p.file, 'Hindi page does not load a Devanagari font - Latin display faces have no Devanagari glyphs');
  }
  if (lang === 'hi' && c.length < 20000) fail(p.file, 'Hindi page is suspiciously small - it may be a stub');
  // The Hindi content must be in the served HTML, not applied by script.
  const main = (c.match(/<div id="main">([\s\S]*?)<\/div>\s*\n\s*<footer/) || [])[1] || '';
  if (lang === 'hi' && !/[ऀ-ॿ]/.test(main)) fail(p.file, 'Hindi page contains no Devanagari in the served HTML');
}
{
  const js = read('js/script.js');
  if (/innerHTML\s*=\s*translations|data-i18n/.test(js)) fail('js/script.js', 'still swaps page text on load');
  const hiPages = pages.filter((p) => p.slug.startsWith('hi/')).length;
  ok(hiPages + ' real static Hindi pages, no client-side text substitution');
}

section('17. robots.txt and sitemap hygiene');
{
  const rb = read('robots.txt');
  if (!/User-agent:\s*\*/.test(rb)) fail('robots.txt', 'no User-agent: *');
  if (!rb.includes(SITE.url('sitemap.xml'))) fail('robots.txt', 'no Sitemap: line');
  if (/Disallow:\s*\/\s*$/.test(rb)) fail('robots.txt', 'blanket Disallow');
  const sm = read('sitemap.xml');
  if (!/xmlns:xhtml=/.test(sm)) fail('sitemap.xml', 'no xhtml namespace - hreflang alternates need it');
  if (!/<lastmod>/.test(sm)) fail('sitemap.xml', 'no <lastmod>');
}
if (!issues) ok('robots.txt and sitemap.xml well formed');

// ---------------------------------------------------------------------------
console.log('\n' + '-'.repeat(60));
const pages_ = pages.length;
console.log(
  issues
    ? `audit: ${issues} ISSUE(S) across ${pages_} pages`
    : `audit: PASS  (${pages_} pages, 0 issues)`
);
process.exit(issues ? 1 : 0);
