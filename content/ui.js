// content/ui.js
// Shared components and the schema emitters.
//
// RULE (v4 Step 8): schema is emitted by a FLAG gated on a page property, never
// hand-placed per page. That makes "duplicate LocalBusiness on one page"
// structurally impossible rather than something an auditor has to catch.

const SITE = require('./site');
const SERVICES = require('./services');
const LOCATIONS = require('./locations');
const GUIDES = require('./guides');
const CORE = require('./core');

// ---------------------------------------------------------------------------
// Glyphs. HTML entities only, never raw Unicode (v4 Step 14 - the v3 postmortem
// records a page shipping "a-o" instead of the hamburger glyph because a shell
// rewrote the bytes). Entities cannot be corrupted by a round-trip.
// ---------------------------------------------------------------------------
const GLYPH = {
  menu: '&#9776;',
  star: '&#9733;',
  arrow: '&rarr;',
  pin: '&#x1F4CD;',
  phone: '&#x1F4DE;',
  mail: '&#9993;',
  emDash: '&mdash;',
};

// Icon set. Inlined so no extra network request and no icon font.
const ICONS = {
  heart: '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
  shield: '<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>',
  check: '<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>',
  users: '<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>',
  star: '<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>',
  sun: '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>',
  briefcase: '<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>',
};

const esc = (s) =>
  String(s)
    .replace(/&(?!#\d+;|#x[0-9a-fA-F]+;|amp;|lt;|gt;|quot;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Content strings in the registries intentionally contain <strong> markup.
// Escape the text, then re-allow the one inline tag we author ourselves.
const rich = (s) => esc(s).replace(/&lt;(\/?strong|em)&gt;/g, '<$1>');

const stars = (n = 5) => GLYPH.star.repeat(n);

// ---------------------------------------------------------------------------
// Page index: every generated page, in one place, so nav/footer/sitemap/link
// counts can all be derived and cross-checked.
// ---------------------------------------------------------------------------
function allPages() {
  const list = [];
  const push = (src, kind) => {
    list.push({
      kind,
      slug: src.slug,
      file: src.file,
      title: src.title,
      desc: src.desc,
      h1: src.h1,
      keywords: src.keywords,
      priority: src.priority,
      changefreq: src.changefreq,
      hasHi: src.hasHi,
      hasEn: true,
      datePublished: src.datePublished,
      dateModified: src.dateModified,
    });
    if (src.hasHi) {
      list.push({
        kind: src.kind,
        slug: 'hi/' + src.slug,
        file: 'hi/' + src.file,
        title: src.hi.title,
        desc: src.hi.desc,
        h1: src.hi.h1,
        keywords: src.hi.keywords,
        priority: src.priority,
        changefreq: src.changefreq,
        hasHi: false,
        hasEn: false,
        pair: 'en:' + src.slug,
        datePublished: src.datePublished,
        dateModified: src.dateModified,
      });
    }
  };

  push(CORE.home, 'home');
  push(CORE.about, 'default');
  push(CORE.servicesPage, 'default');
  push(CORE.contact, 'default');
  SERVICES.forEach((s) => push(s, 'default'));
  LOCATIONS.forEach((l) => push(l, 'default'));
  GUIDES.forEach((g) => push(g, 'article'));

  return list;
}

// Given a page slug, find its source object (for body rendering). The Hindi
// twin resolves to the same source object; the locale is carried by the slug,
// not by the source, so English and Hindi can never drift apart.
function sourceFor(slug) {
  const plain = slug.replace(/^hi\//, '');
  if (plain === CORE.home.slug) return { kind: 'home', src: CORE.home };
  if (plain === CORE.about.slug) return { kind: 'about', src: CORE.about };
  if (plain === CORE.servicesPage.slug) return { kind: 'services', src: CORE.servicesPage };
  if (plain === CORE.contact.slug) return { kind: 'contact', src: CORE.contact };
  for (const s of SERVICES) if (s.slug === plain) return { kind: 'service', src: s };
  for (const l of LOCATIONS) if (l.slug === plain) return { kind: 'location', src: l };
  for (const g of GUIDES) if (g.slug === plain) return { kind: 'article', src: g };
  return null;
}

const isHi = (slug) => slug.startsWith('hi/');
// Localised path used inside body copy (links, hrefs) on a Hindi page.
const L = (enPath) => (enPath === '/' ? '/hi/' : '/hi' + enPath);

// The twin page in the other language, or null when there is no translation.
// Never returns a URL that would 404 - that is the v3 hreflang bug.
function twinOf(slug) {
  if (isHi(slug)) {
    const en = slug.slice(3);
    const s = sourceFor(en);
    return s && s.src.hasHi ? SITE.url(en) : null;
  }
  const s = sourceFor(slug);
  return s && s.src.hasHi ? SITE.url('hi/' + slug) : null;
}

// ---------------------------------------------------------------------------
// SCHEMA EMITTERS. One @type per call, gated by a page flag.
// ---------------------------------------------------------------------------
const ld = (obj) =>
  '<script type="application/ld+json">\n' + JSON.stringify(obj, null, 2) + '\n</script>';

function schemaLocalBusiness() {
  return ld({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE.ids.business,
    name: SITE.name,
    alternateName: [
      'Best Tantrik in Kamakhya Temple',
      'Best Tantrik in Mayong',
      'Tantrik Baba in Guwahati',
    ],
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url(''),
    priceRange: 'Rs-Rs',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
    foundingDate: SITE.founded,
    image: SITE.domain + '/images/logo.png',
    logo: SITE.domain + '/images/logo.png',
    address: SITE.addresses.map((a) => ({
      '@type': 'PostalAddress',
      streetAddress: a.street,
      addressLocality: a.locality,
      addressRegion: a.region,
      postalCode: a.postal,
      addressCountry: a.country,
    })),
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: 'https://www.google.com/maps/search/?api=1&query=Kamakhya+Temple+Guwahati',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: SITE.hours.opens,
        closes: SITE.hours.closes,
      },
    ],
    areaServed: SITE.areaServed.map((a) => ({ '@type': 'Place', name: a })),
    sameAs: [SITE.waHref],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '387',
      bestRating: '5',
      worstRating: '1',
    },
  });
}

function schemaWebSite() {
  return ld({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE.ids.website,
    name: SITE.name,
    url: SITE.url(''),
    description: SITE.description,
    inLanguage: 'en',
    publisher: { '@id': SITE.ids.business },
  });
}

function schemaPerson() {
  return ld({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': SITE.ids.person,
    name: SITE.name,
    jobTitle: SITE.jobTitle,
    description:
      'Deepak Tantrik is the best tantrik in Kamakhya Temple and Mayong, Assam. Born into a seven-generation Mayong tantra lineage and formally initiated at Kamakhya Temple, Guwahati, he has 25+ years of experience in black magic removal, vashikaran, love problem solutions and husband wife dispute work.',
    url: SITE.url('about'),
    telephone: SITE.phone,
    knowsAbout: SITE.knowsAbout,
    worksFor: { '@id': SITE.ids.business },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Guwahati',
      addressRegion: 'Assam',
      addressCountry: 'IN',
    },
    sameAs: [SITE.waHref, SITE.url('about')],
  });
}

function schemaBreadcrumb(slug) {
  const label = sourceFor(slug).src.h1.replace(/&amp;/g, '&');
  const trail = [{ name: 'Home', item: SITE.url('') }];
  if (slug !== '') {
    trail.push({ name: label, item: SITE.url(slug) });
  }
  return ld({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: t.item,
    })),
  });
}

function schemaFaqPage(faqs) {
  return ld({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: esc(f.q),
      acceptedAnswer: { '@type': 'Answer', text: esc(f.a).replace(/&amp;(strong|em);/g, '') },
    })),
  });
}

function schemaArticle(slug) {
  const s = sourceFor(slug).src;
  return ld({
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': SITE.url(slug) + '#article',
    headline: s.h1.replace(/&amp;/g, '&'),
    description: s.desc,
    author: { '@id': SITE.ids.person },
    publisher: {
      '@id': SITE.ids.business,
      logo: { '@type': 'ImageObject', url: SITE.domain + '/images/logo.png' },
    },
    datePublished: s.datePublished,
    dateModified: s.dateModified,
    inLanguage: 'en',
    mainEntityOfPage: { '@type': 'WebPage', '@id': SITE.url(slug) },
    image: SITE.domain + '/images/og-cover.jpg',
  });
}

function schemaItemList(slug) {
  const s = sourceFor(slug).src;
  const items = (s.cards || s.order || []).map((c, i) => {
    const slugOf = typeof c === 'string' ? c : c.slug;
    const entry = [...SERVICES, ...LOCATIONS].find((x) => x.slug === slugOf);
    return {
      '@type': 'ListItem',
      position: i + 1,
      name: entry ? entry.h1.replace(/&amp;/g, '&') : slugOf,
      url: SITE.url(slugOf),
    };
  });
  if (!items.length) return '';
  return ld({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: s.h1.replace(/&amp;/g, '&'),
    itemListElement: items,
  });
}

// One call, one flag set. This is the whole point of the v4 architecture.
function schemaFor(slug, kind) {
  const s = sourceFor(slug).src;
  const body = s.hi && isHi(slug) ? s.hi : s;
  const blocks = [schemaLocalBusiness()];
  if (kind === 'home') blocks.push(schemaWebSite(), schemaPerson());
  if (kind === 'home' || kind === 'about' || kind === 'article') blocks.push(schemaPerson());
  if (slug !== '') blocks.push(schemaBreadcrumb(slug));
  if (body.faqs && body.faqs.length) blocks.push(schemaFaqPage(body.faqs));
  if (kind === 'article' && !isHi(slug)) blocks.push(schemaArticle(slug));
  const il = schemaItemList(slug);
  if (il) blocks.push(il);
  return blocks.join('\n');
}

// ---------------------------------------------------------------------------
// HEADER / FOOTER
// ---------------------------------------------------------------------------
const NAV = [
  { slug: '', label: 'Home', labelHi: 'मुख्य पृष्ठ' },
  { slug: 'about', label: 'About', labelHi: 'हमारे बारे में' },
  { slug: 'services', label: 'Services', labelHi: 'सेवाएं' },
  { slug: 'contact', label: 'Contact', labelHi: 'संपर्क करें' },
];

function header(slug) {
  const hi = isHi(slug);
  const plain = hi ? slug.slice(3) : slug;
  const home = hi ? '/hi/' : '/';
  // NOTE: nav slugs are stored WITHOUT a leading slash, so the prefix must
  // carry one. '/hi' + 'about' produced '/hiabout', which 404s.
  const link = (n) => (hi ? '/hi/' + n.slug : n.slug ? n.slug : '/');

  const twin = twinOf(slug);
  const langLinks = [
    hi
      ? `<a class="lang-link" href="${SITE.url(plain)}" hreflang="en" lang="en">English</a>`
      : `<a class="lang-link" href="${SITE.url('hi/' + plain)}" hreflang="hi" lang="hi">हिन्दी</a>`,
  ].join('\n      ');

  return `<header>
    <div class="container header-container">
      <div class="header-left">
        <a href="${home}" class="logo-wrapper">
          <img src="/images/logo.png" width="200" height="200" alt="${esc(SITE.name)} - Best Tantrik in Kamakhya Temple and Mayong, Assam" fetchpriority="high" decoding="async">
          <span class="brand-name">${esc(hi ? 'दीपक तांत्रिक' : SITE.name)}</span>
        </a>
        <nav class="lang-switch" aria-label="Language">
      ${langLinks}
    </nav>
      </div>

      <nav class="nav-links" aria-label="Main">
        ${NAV.map(
          (n) =>
            `<a href="${link(n)}"${n.slug === plain ? ' aria-current="page"' : ''}>${hi ? n.labelHi : n.label}</a>`
        ).join('\n        ')}
      </nav>

      <button class="hamburger" type="button" aria-label="Menu" aria-expanded="false">${GLYPH.menu}</button>
    </div>
  </header>`;
}

// Localised path to ANOTHER page. Falls back to the English URL when the target
// has no Hindi translation, so a Hindi page never links to a URL that 404s.
// The three guides are untranslated, so from /hi/ they correctly point at the
// English article with a Hindi anchor.
function localizedPath(slug, hi) {
  if (!hi) return slug === '' ? '/' : '/' + slug;
  const s = sourceFor(slug);
  if (s && s.src.hasHi) return slug === '' ? '/hi/' : '/hi/' + slug;
  return slug === '' ? '/' : '/' + slug;
}

// Anchor text for a target page, in the requested locale. A page with no
// translation of its own still gets a Hindi anchor string, so a Hindi page can
// link to the English guide without falling back to English anchor text.
function anchorFor(src, hi) {
  if (hi) return src.hi ? src.hi.h1 : src.hiAnchor || null;
  return src.h1;
}
// The footer link grid is DERIVED from the registries, never hand-maintained.
function linkIndex(slug) {
  const hi = isHi(slug);
  const all = [
    ...SERVICES,
    ...LOCATIONS,
    ...GUIDES,
    CORE.about,
    CORE.servicesPage,
    CORE.contact,
  ];
  return all
    .map((src) => {
      const text = anchorFor(src, hi);
      if (!text) return '';
      return `<a href="${localizedPath(src.slug, hi)}">${rich(text)}</a>`;
    })
    .filter(Boolean)
    .join('\n        ');
}

function footer(slug) {
  const hi = isHi(slug);
  const home = hi ? '/hi/' : '/';
  const link = (p) => (hi ? '/hi' + p : p);
  const addrs = hi ? SITE.addresses.map((a) => a.labelHi) : SITE.addresses.map((a) => a.label);

  return `<footer>
    <div class="container">
      <div class="section-header">
        <h2>${hi ? 'अधिक आध्यात्मिक मार्गदर्शन खोजें' : 'Explore More Spiritual Guidance'}</h2>
      </div>

      <nav class="seo-links-grid" aria-label="All services and guides">
        ${linkIndex(slug)}
      </nav>

      <div class="map-wrapper">
        <iframe title="Kamakhya Temple, Guwahati, location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14321.464731872393!2d91.69671971708892!3d26.16450626027581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5ad8fdb30e79%3A0xc4eb786fec74bd18!2sKamakhya%20Temple!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>

      <div class="footer-main">
        <div class="footer-col">
          <div class="footer-brand">
            <img src="/images/logo.png" width="200" height="200" alt="${esc(SITE.name)} logo - Tantrik Baba in Guwahati and Mayong" loading="lazy" decoding="async">
            <span class="brand-name">${esc(hi ? 'दीपक तांत्रिक' : SITE.name)}</span>
          </div>
          <p>${rich(
            hi
              ? 'आध्यात्मिक दुनिया में प्रसिद्ध, तांत्रिक दीपक तांत्रिक की जड़ें मायोंग में हैं, भारत की प्राचीन तंत्र राजधानी में। सालों की गहरी साधना और शक्तिशाली देवताओं के आशीर्वाद से, उन्होंने हजारों लोगों के लिए शांति और सफलता के उपायों में दक्षता हासिल की है।'
              : 'Renowned in the spiritual world, Tantrik Deepak Tantrik has roots in Mayong, the ancient tantra capital of India. With years of deep sadhana and the blessings of powerful deities, he has mastered spiritual remedies that have brought peace and success to thousands.'
          )}</p>
        </div>

        <div class="footer-col">
          <h3>${hi ? 'त्वरित लिंक' : 'Quick Links'}</h3>
          <ul class="footer-links">
            ${NAV.map((n) => `<li><a href="${link(n.slug ? '/' + n.slug : '/')}">${hi ? n.labelHi : n.label}</a></li>`).join('\n            ')}
          </ul>
        </div>

        <div class="footer-col">
          <h3>${hi ? 'संपर्क करें' : 'Contact Us'}</h3>
          <ul class="contact-list">
            <li><i class="ci" aria-hidden="true">${GLYPH.pin}</i><div><strong>${hi ? 'मुख्य कार्यालय और आश्रम' : 'Head Office &amp; Ashram'}</strong>
                <span>${esc(addrs[0])} ${GLYPH.emDash} ${esc(SITE.addresses[0].postal)}</span>
              </div>
            </li>
            <li><i class="ci" aria-hidden="true">${GLYPH.pin}</i><div><strong>${hi ? 'मायोंग आश्रम' : 'Mayong Ashram'}</strong>
                <span>${esc(addrs[1])} ${GLYPH.emDash} ${esc(SITE.addresses[1].postal)}</span>
              </div>
            </li>
            <li><i class="ci" aria-hidden="true">${GLYPH.phone}</i><div><strong>${hi ? 'फोन' : 'Phone'}</strong>
                <a href="${SITE.phoneHref}">${esc(SITE.phone)}</a>
              </div>
            </li>
            <li><i class="ci" aria-hidden="true">${GLYPH.mail}</i><div><strong>${hi ? 'ईमेल' : 'Email'}</strong>
                <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        ${GAME_COPYRIGHT(hi)}
      </div>
    </div>
  </footer>

  <div class="floating-buttons">
    <a href="${SITE.phoneHref}" class="float-btn float-call" aria-label="${hi ? 'अभी कॉल करें' : 'Call now'}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
    </a>
    <a href="${SITE.wa('Hello Deepak Tantrik Ji, I need help')}" target="_blank" rel="noopener" class="float-btn float-wa" aria-label="${hi ? 'व्हाट्सएप पर चैट करें' : 'Chat on WhatsApp'}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.373-.043c.098-.115.427-.497.543-.668.115-.173.231-.144.391-.087.159.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
    </a>
  </div>`;
}

const GAME_COPYRIGHT = (hi) =>
  hi
    ? `&copy; 2026 दीपक तांत्रिक। सर्वाधिकार सुरक्षित।`
    : `&copy; 2026 ${SITE.name}. All rights reserved.`;

module.exports = {
  GLYPH,
  ICONS,
  esc,
  rich,
  stars,
  allPages,
  sourceFor,
  isHi,
  L,
  twinOf,
  anchorFor,
  localizedPath,
  schemaFor,
  schemaLocalBusiness,
  header,
  footer,
  NAV,
  site: SITE,
  services: SERVICES,
  locations: LOCATIONS,
  guides: GUIDES,
  core: CORE,
};
