# assamtantrik.co — how to work on this site

## The one rule that matters

**Never hand-edit an `.html` file in the repository root or in `hi/`.**
Every one of them is a build artifact. A hand-edit is silently discarded on the
next `node build.js`. That is how the entire bug log in `ai_build_postmortem.md`
and `Final VIP SEO.md` §21 got written.

Content lives in `content/`. Change it there.

## Build and gate

```
node build.js     # generate every HTML file, sitemap, robots, manifest, _redirects
node verify.js    # structural gate  - must pass
node audit.js     # SEO gate         - must pass
```

Do not merge or deploy unless all three are green. Do not relax an assertion in
`verify.js` or `audit.js` to make a build pass — the assertions encode real past
failures. If one is genuinely wrong, change it deliberately and say why.

## Layout

```
build.js              generator. Writes all output.
verify.js             structural gate
audit.js              SEO gate
content/
  site.js             site-wide constants: name, phone, addresses, geo, credentials
  services.js         THE SERVICE REGISTRY (4 service pages, EN + HI)
  locations.js        location pages (Mayong, Guwahati) - EN + HI
  guides.js           3 long-form articles - ENGLISH ONLY, no Hindi page
  core.js             homepage, about, services hub, contact - EN + HI
  ui.js               shared components + the schema emitters
  render.js           page body renderers
  legal.js            4 governance documents - noindex, OUT of the sitemap
css/style.css         hand-maintained
js/script.js          hand-maintained, ~3 KB, no translation data
images/               hand-maintained
index.html, about.html, ...   GENERATED - do not edit
hi/index.html, ...            GENERATED - do not edit
sitemap.xml robots.txt manifest.json _redirects   GENERATED - do not edit
```

## Adding a page

Add ONE object to the relevant registry in `content/`. The nav, the services
hub, the footer link grid, the related-links block, the breadcrumb, the
`ItemList` schema, the sitemap entry and the `_redirects` rule are all computed
from it. Do not add a page to any of those by hand.

A page must declare:

| field | meaning |
|---|---|
| `slug` | clean URL segment, no leading slash, no `.html` |
| `file` | output filename without `.html` |
| `title` | 46–62 characters, primary keyword FIRST, brand after |
| `desc` | 120–158 characters, includes `+91 9706801250` |
| `h1` | one per page, primary keyword leads, static HTML |
| `keywords` | 6–12 terms; `keywords[0]` is the PRIMARY and must be unique site-wide |
| `intro` / `lead` / `deep` | body copy |
| `hasHi` | `true` only if a real `hi` translation object exists |
| `related` | 3+ slugs that resolve to real pages |
| `priority`, `changefreq` | sitemap hints |

Set `hasHi: false` if there is no Hindi translation. Do **not** invent a Hindi
page and do **not** emit a `hi` hreflang that points at a 404 — that is exactly
the bug the live site had. `UI.twinOf()` returns `null` when there is no
translation and the `hi` hreflang is then omitted.

## noindex pages (`content/legal.js`)

`/privacy-policy`, `/terms`, `/disclaimer`, `/developer-declaration`. Set
`noindex: true` on the registry entry. That ONE flag is the whole contract:

- `noindex` in the robots meta (`noindex, follow`), and **no** hreflang —
  hreflang is a request to index, so it contradicts the meta
- **absent** from `sitemap.xml`; a sitemap entry is a stronger index request
  than the meta tag, and listing both asks Google to pick one
- **crawlable** — never add these to a `Disallow`. A page hidden from crawlers
  is never fetched, so the `noindex` is never read and the URL can still appear
  as "indexed, though blocked"
- linked from the footer of every **English** page, and from no Hindi page,
  because none of them has a translation
- still in `_redirects`, so `/terms.html` 301s to `/terms` and the `.html` form
  can never be indexed separately

`UI.indexablePages()` is the only definition of "may appear in the sitemap".
Never read `noindex` anywhere else. `verify.js` §3 and §13 and `audit.js` §13
assert every clause of the list above against the served HTML.

Related trap, already fixed once: `ui.rich()` escapes anything that is not
`<strong>` or `<em>`, so an authored `<a href>` in content copy renders as
literal text. Cross-reference a document by naming it in prose, or add it to
the `related` list. Ten such links are still broken on the live pages listed in
`content/legal.js`'s header comment.

## Multilingual

Each language is a **real static page** at its own URL (`/hi/contact`), not a
JavaScript text swap. There is no `data-i18n` and no translation dictionary any
more. The v3 approach shipped 89 KB of dictionary and Googlebot may never have
seen the Hindi content.

If you add a Hindi page, the content must be real Devanagari in the served HTML,
`js/script.js` must stay free of translation data, and the page must have a
`hi` hreflang naming itself plus a reciprocal `en` on the English page.

## Encoding

- UTF-8, **no BOM**.
- UI glyphs are HTML **entities**, never raw Unicode: `&#9776;` menu,
  `&#9733;` star, `&rarr;` arrow, `&mdash;`. A raw `☰` was corrupted into
  `â˜°` by a shell round-trip and shipped live.
- Write Devanagari through an editor or Node. Never through a PowerShell
  pipeline — the console corrupts it even when the file on disk is fine.
- English `<meta name="description">` must be clean ASCII. One mojibake
  character in a SERP description destroys click-through.

`verify.js` §7 asserts all of this. If it fires, the file is already broken.

## Cloudflare

Deployed on Cloudflare Pages. Clean URLs are canonical: `/about` is the real
URL and `/about.html` 301s to it. So:

- Canonical tags use clean URLs. **Never** put `/index.html` in a canonical or
  in the sitemap.
- The sitemap lists each canonical URL exactly once. `verify.js` asserts
  `loc count === page count`, which is what stops a duplicate-URL regression.
- `_redirects` is generated. Do not hand-edit it; Cloudflare rejects the whole
  file if any line fails to parse.

## Business facts

Every fact in `content/site.js` already appears on the live site: Deepak
Tantrik, `+91 9706801250`, `deepaktantrik@assamtantrik.co`, 25+ years, a
seven-generation Mayong tantra lineage, initiated at the Kamakhya Temple, born
in Mayong, Kamakhya Temple Guwahati pin 781010 and Mayong Ashram Morigaon pin
782411.

**Do not invent new claims.** The site is YMYL-adjacent and closely policed.
`about.html` explicitly does *not* promise results, and a testimonial must not
be invented. If a fact changes, change it in `content/site.js` and everywhere it
is asserted in the copy.
