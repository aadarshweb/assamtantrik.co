// content/render.js
// Page body renderers. Services, locations and guides all share one shape
// (hero -> lead split -> deep narrative -> testimonial -> FAQ -> related links),
// so they share a single renderer. Only home, about, services hub, contact and
// 404 need their own.

const UI = require('./ui');
const SITE = require('./site');
const { GLYPH, ICONS, esc, rich, stars, isHi, L } = UI;
const ALL_SERVICES = [...UI.services, ...UI.servicesExtended];

const cta = (hi) => `
    <div class="cta-group">
      <a href="${SITE.phoneHref}" class="btn-primary">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
        <span>${hi ? 'अभी कॉल करें' : 'Call Now'}</span>
      </a>
      <a href="${isHi('') ? '/hi/contact' : '/contact'}" class="btn-outline">${hi ? 'संपर्क करें' : 'Contact'}</a>
    </div>`;

// The FAQ accordion and the FAQPage schema are generated from the SAME array
// (see ui.schemaFaqPage). Divergence between visible and marked-up FAQ is a
// manual-action risk (v4 Step 8.4). <details> is native: it works with JS off.
function faqBlock(faqs, hi) {
  if (!faqs || !faqs.length) return '';
  return `
  <section class="faq-section">
    <div class="container">
      <div class="section-header">
        <h2>${hi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}</h2>
      </div>
      <div class="faq-list">
        ${faqs
          .map(
            (f, i) => `<details class="faq-item"${i === 0 ? '' : ''}>
          <summary class="faq-question"><h3>${rich(f.q)}</h3><span aria-hidden="true">+</span></summary>
          <div class="faq-answer"><p>${rich(f.a)}</p></div>
        </details>`
          )
          .join('\n        ')}
      </div>
    </div>
  </section>`;
}

function testimonialBlock(t, titleHi) {
  if (!t) return '';
  return `
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2>${esc(titleHi)}</h2>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-text">${rich(t.text)}</div>
          <div class="testimonial-author">
            <div class="author-avatar" aria-hidden="true">${esc(t.initial)}</div>
            <div class="author-info">
              <p class="author-name">${esc(t.name)}</p>
              <div class="stars" aria-label="5 out of 5 stars">${stars(5)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

const story = (t) =>
  t
    .map(
      (t) => `<div class="testimonial-card">
        <div class="testimonial-text">${rich(t.text)}</div>
        <div class="testimonial-author">
          <div class="author-avatar" aria-hidden="true">${esc(t.initial)}</div>
          <div class="author-info">
            <p class="author-name">${esc(t.name)}</p>
            <div class="stars" aria-label="5 out of 5 stars">${stars(5)}</div>
          </div>
        </div>
      </div>`
    )
    .join('\n        ');

// Related-internal links. Every page links to home, the services hub, at least
// three related pages and contact (v4 Step 12).
function relatedBlock(related, hi) {
  const items = related
    .map((slug) => {
      const found = UI.sourceFor(slug);
      if (!found) return '';
      const text = UI.anchorFor(found.src, hi);
      if (!text) return '';
      return `<a href="${UI.localizedPath(slug, hi)}">${rich(text)} ${GLYPH.arrow}</a>`;
    })
    .filter(Boolean)
    .join('\n          ');

  return `
  <section class="related-section">
    <div class="container">
      <div class="panel">
        <h2>${hi ? 'और भी देखें' : 'Related Guidance'}</h2>
        <div class="related-links">
          ${items}
        </div>
      </div>
    </div>
  </section>`;
}

const deepBlock = (deep) =>
  deep
    .map(
      (d) => `<h2>${rich(d.h2)}</h2>
        ${d.p.map((x) => `<p>${rich(x)}</p>`).join('\n        ')}`
    )
    .join('\n        ');

// ---------------------------------------------------------------------------
// Generic page: service, location, guide.
// ---------------------------------------------------------------------------
function genericPage(page) {
  const hi = isHi(page.slug);
  const found = UI.sourceFor(page.slug);
  const s = found.src;
  const c = hi ? s.hi : s;
  const path = (p) => (hi ? L(p) : p);

  const images = {
    portrait: [200, 200],
    'hero_bg': [1000, 558],
    'religious.jpg': [800, 800],
    'mandala.png': [300, 300],
  };
  const imgFile = s.image.replace('/images/', '');
  const dims = images[imgFile] || [800, 800];

  return `<main>
  <section class="hero hero--page">
    <div class="container hero-content">
      <h1>${rich(c.h1)}</h1>
      <p>${rich(c.sub)}</p>${cta(hi)}
    </div>
  </section>

  <section class="about-section">
    <div class="container about-split">
      <div class="about-text">
        <h2>${rich(c.h2)}</h2>
        <div class="about-divider"></div>
        ${c.intro.map((p) => `<p>${rich(p)}</p>`).join('\n        ')}
      </div>
      <div class="about-image">
        <img src="${s.image}" width="${dims[0]}" height="${dims[1]}" alt="${esc(s.imageAlt)}" loading="lazy" decoding="async">
      </div>
    </div>
  </section>

  <section class="seo-narrative">
    <div class="container">
      <div class="panel">
        ${deepBlock(c.deep)}
      </div>
    </div>
  </section>
${testimonialBlock(c.testimonial, hi ? 'सफलता की कहानियां' : 'Success Stories')}
${faqBlock(c.faqs, hi)}
${relatedBlock(s.related, hi)}
</main>`;
}

// ---------------------------------------------------------------------------
// Homepage
// ---------------------------------------------------------------------------
function homePage(page) {
  const hi = isHi(page.slug);
  const s = UI.core.home;
  const c = hi ? s.hi : s;
  const path = (p) => (hi ? L(p) : p);
  const all = [...UI.services, ...UI.locations];
  const lookup = Object.fromEntries(all.map((x) => [x.slug, x]));

  return `<main>
  <section class="hero">
    <div class="container hero-content">
      <h1>${rich(c.h1)}</h1>
      <p>${rich(c.sub)}</p>${cta(hi)}
    </div>
  </section>

  <section class="about-section">
    <div class="container about-split">
      <div class="about-image">
        <img src="${c.about.img}" width="600" height="804" alt="${esc(c.about.imgAlt)}" fetchpriority="high" decoding="async">
      </div>
      <div class="about-text">
        <h2>${rich(c.about.h2)}</h2>
        <div class="about-divider"></div>
        ${c.about.p.map((p) => `<p>${rich(p)}</p>`).join('\n        ')}
        <a href="${path('/about')}" class="learn-more-link">${rich(c.about.linkText)} ${GLYPH.arrow}</a>
      </div>
    </div>
  </section>

  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <h2>${hi ? 'हमारी सेवाएं' : 'Our Services'}</h2>
      </div>
      <div class="services-grid">
        ${s.cards
          .map((card) => {
            const e = lookup[card.slug];
            const text = hi ? e.hi.h1 : e.h1;
            return `<a class="service-card" href="${path('/' + card.slug)}">
          <div class="service-icon-wrapper" aria-hidden="true">
            <svg viewBox="0 0 24 24">${ICONS[card.icon] || ICONS.star}</svg>
          </div>
          <h3>${rich(text)}</h3>
          <span class="card-more">${hi ? 'विस्तार से पढ़ें' : 'Read more'} ${GLYPH.arrow}</span>
        </a>`;
          })
          .join('\n        ')}
      </div>
      <div class="view-all-link">
        <a href="${path('/services')}">${hi ? 'सभी सेवाएं देखें' : 'View All Services'} ${GLYPH.arrow}</a>
      </div>
    </div>
  </section>

  <section class="seo-narrative">
    <div class="container">
      <div class="panel">
        ${deepBlock(c.narrative)}
      </div>
    </div>
  </section>

${faqBlock(c.faqs, hi)}

  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2>${hi ? 'लोग क्या कहते हैं' : 'What People Say'}</h2>
        <p>${hi ? 'उन लोगों की वास्तविक कहानियां जिनके जीवन को बदला गया।' : 'Real stories from people whose lives were transformed.'}</p>
      </div>
      <div class="testimonials-grid">
        ${story(c.testimonials)}
      </div>
    </div>
  </section>

${relatedBlock(s.about ? ['black-magic-removal-kamakhya', 'love-problem-solution-kamakhya', 'vashikaran-specialist-mayong', 'husband-wife-dispute-mayong', 'best-tantrik-mayong', 'tantrik-baba-guwahati'] : [], hi)}
</main>`;
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
function aboutPage(page) {
  const hi = isHi(page.slug);
  const s = UI.core.about;
  const c = hi ? s.hi : s;
  const path = (p) => (hi ? L(p) : p);

  return `<main>
  <section class="hero hero--page">
    <div class="container hero-content">
      <h1>${rich(c.h1)}</h1>
      <p>${rich(c.sub)}</p>${cta(hi)}
    </div>
  </section>

  <section class="about-section">
    <div class="container about-split">
      <div class="about-text">
        <h2>${rich(c.lead.h2)}</h2>
        <div class="about-divider"></div>
        ${c.lead.p.map((p) => `<p>${rich(p)}</p>`).join('\n        ')}
      </div>
      <div class="about-image">
        <img src="${c.lead.img}" width="600" height="804" alt="${esc(c.lead.imgAlt)}" loading="lazy" decoding="async">
      </div>
    </div>
  </section>

  <section class="seo-narrative">
    <div class="container">
      <div class="panel">
        ${deepBlock(c.deep)}
      </div>
    </div>
  </section>

${faqBlock(c.faqs, hi)}
${relatedBlock(s.related, hi)}
</main>`;
}

// ---------------------------------------------------------------------------
// Services hub
// ---------------------------------------------------------------------------
function servicesHub(page) {
  const hi = isHi(page.slug);
  const s = UI.core.servicesPage;
  const c = hi ? s.hi : s;
  const lookup = Object.fromEntries(ALL_SERVICES.map((x) => [x.slug, x]));
  const ICON_BY_SLUG = {
    'love-problem-solution-kamakhya': 'heart',
    'black-magic-removal-kamakhya': 'shield',
    'vashikaran-specialist-mayong': 'check',
    'husband-wife-dispute-mayong': 'users',
    'business-problem-solution': 'briefcase',
    'childless-problem-solution': 'heart',
    'evil-eye-removal': 'shield',
    'kundli-consultation': 'star',
  };

  return `<main>
  <section class="hero hero--page">
    <div class="container hero-content">
      <h1>${rich(c.h1)}</h1>
      <p>${rich(c.sub)}</p>${cta(hi)}
    </div>
  </section>

  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <h2>${hi ? 'उपलब्ध उपाय' : 'Remedies available'}</h2>
        <p>${hi ? 'नीचे दी गई हर सेवा का पूरा विवरण अपने पृष्ठ पर है।' : 'Each of these has a full page of its own with the process, the timeline and the cost explained.'}</p>
      </div>
      <div class="services-grid">
        ${s.order
          .map((slug) => {
            const e = lookup[slug];
            if (!e) return '';
            const icon = ICON_BY_SLUG[slug] || 'star';
            return `<div class="service-card">
          <div class="service-icon-wrapper" aria-hidden="true">
            <svg viewBox="0 0 24 24">${ICONS[icon]}</svg>
          </div>
          <h3>${rich(hi ? e.hi.h1 : e.h1)}</h3>
          <p>${rich(e.desc.split('. ').slice(0, 2).join('. '))}.</p>
          <a href="${UI.localizedPath(slug, hi)}">${hi ? 'विस्तार से पढ़ें' : 'Read the full service page'} ${GLYPH.arrow}</a>
        </div>`;
          })
          .join('\n        ')}
      </div>
      <div class="view-all-link">
        <a href="${UI.localizedPath('contact', hi)}">${hi ? 'मुफ्त परामर्श लें' : 'Request a free consultation'} ${GLYPH.arrow}</a>
      </div>
    </div>
  </section>

  <section class="seo-narrative">
    <div class="container">
      <div class="panel">
        ${deepBlock(c.deep)}
      </div>
    </div>
  </section>

${faqBlock(c.faqs, hi)}
${relatedBlock(s.related, hi)}
</main>`;
}

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
function contactPage(page) {
  const hi = isHi(page.slug);
  const s = UI.core.contact;
  const c = hi ? s.hi : s;

  return `<main>
  <section class="hero hero--page">
    <div class="container hero-content">
      <h1>${rich(c.h1)}</h1>
      <p>${rich(c.sub)}</p>
      <div class="cta-group">
        <a href="${SITE.phoneHref}" class="btn-primary">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
          <span>${hi ? 'अभी कॉल करें' : 'Call Now'}</span>
        </a>
        <a href="${SITE.wa('Hello Deepak Tantrik Ji, I need help')}" target="_blank" rel="noopener" class="btn-outline">${hi ? 'व्हाट्सएप करें' : 'WhatsApp'}</a>
      </div>
    </div>
  </section>

  <section class="about-section">
    <div class="container about-split">
      <div class="about-text">
        <h2>${rich(c.lead.h2)}</h2>
        <div class="about-divider"></div>
        ${c.lead.p.map((p) => `<p>${rich(p)}</p>`).join('\n        ')}
        <ul class="contact-list contact-list--page">
          <li><i class="ci" aria-hidden="true">${GLYPH.pin}</i><div><strong>${hi ? 'कामाख्या मंदिर कार्यालय' : 'Kamakhya Temple Office'}</strong>
            <span>${esc(SITE.addresses[0].street)}, ${esc(SITE.addresses[0].locality)} ${SITE.addresses[0].postal}</span>
          </div></li>
          <li><i class="ci" aria-hidden="true">${GLYPH.pin}</i><div><strong>${hi ? 'मायोंग आश्रम' : 'Mayong Ashram'}</strong>
            <span>${esc(SITE.addresses[1].street)}, ${esc(SITE.addresses[1].locality)} ${SITE.addresses[1].postal}</span>
          </div></li>
          <li><i class="ci" aria-hidden="true">${GLYPH.phone}</i><div><strong>${hi ? 'फोन और व्हाट्सएप' : 'Phone and WhatsApp'}</strong>
            <a href="${SITE.phoneHref}">${esc(SITE.phone)}</a>
          </div></li>
          <li><i class="ci" aria-hidden="true">${GLYPH.mail}</i><div><strong>${hi ? 'ईमेल' : 'Email'}</strong>
            <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
          </div></li>
        </ul>
      </div>
      <div class="about-image">
        <form class="contact-form" action="#" method="POST">
          <h2>${rich(c.form.title)}</h2>
          <label class="sr-only" for="cf-name">${esc(c.form.name)}</label>
          <input id="cf-name" name="name" type="text" placeholder="${esc(c.form.name)}" required>
          <label class="sr-only" for="cf-phone">${esc(c.form.phone)}</label>
          <input id="cf-phone" name="phone" type="tel" placeholder="${esc(c.form.phone)}" required>
          <label class="sr-only" for="cf-topic">${esc(c.form.select)}</label>
          <select id="cf-topic" name="topic">
            <option>${esc(c.form.select)}</option>
            <option>${hi ? 'प्रेम समस्या' : 'Love problem'}</option>
            <option>${hi ? 'काला जादू' : 'Black magic'}</option>
            <option>${hi ? 'पति-पत्नी झगड़ा' : 'Marriage dispute'}</option>
            <option>${hi ? 'व्यापार और नौकरी' : 'Business or career'}</option>
            <option>${hi ? 'अन्य' : 'Other'}</option>
          </select>
          <label class="sr-only" for="cf-msg">${esc(c.form.desc)}</label>
          <textarea id="cf-msg" name="message" placeholder="${esc(c.form.desc)}" rows="4"></textarea>
          <button type="submit">${rich(c.form.btn)}</button>
          <p class="form-note">${rich(c.form.note)}</p>
        </form>
      </div>
    </div>
  </section>

  <section class="seo-narrative">
    <div class="container">
      <div class="panel">
        ${deepBlock(c.deep)}
      </div>
    </div>
  </section>

${faqBlock(c.faqs, hi)}
${relatedBlock(s.related, hi)}
</main>`;
}

// ---------------------------------------------------------------------------
// Verify / anti-fraud page. The red-flags block and the promises block are
// rendered from the same arrays the copy came from, so they cannot drift.
// ---------------------------------------------------------------------------
function verifyPage(page) {
  const hi = isHi(page.slug);
  const s = UI.core.verify;
  const c = hi ? s.hi : s;

  return `<main>
  <section class="hero hero--page">
    <div class="container hero-content">
      <h1>${rich(c.h1)}</h1>
      <p>${rich(c.sub)}</p>
      <div class="cta-group">
        <a href="${SITE.phoneHref}" class="btn-primary">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
          <span>${hi ? 'अभी कॉल करें' : 'Call now'}</span>
        </a>
        <a href="${SITE.wa('Hello, I want to verify I am talking to the real Deepak Tantrik')}" target="_blank" rel="noopener" class="btn-outline">${hi ? 'व्हाट्सएप करें' : 'WhatsApp'}</a>
      </div>
    </div>
  </section>

  <section class="about-section">
    <div class="container">
      <div class="panel">
        <h2>${rich(c.lead.h2)}</h2>
        ${c.lead.p.map((p) => `<p>${rich(p)}</p>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="seo-narrative">
    <div class="container">
      <div class="panel">
        ${c.redFlags.map((r) => `<h2>${rich(r.h2)}</h2>\n        ${r.p.map((p) => `<p>${rich(p)}</p>`).join('\n        ')}`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="about-section">
    <div class="container">
      <div class="panel panel--accent">
        <h2>${rich(c.promise.h2)}</h2>
        ${c.promise.p.map((p) => `<p>${rich(p)}</p>`).join('\n        ')}
        <ul class="verify-facts">
          <li><strong>${hi ? 'केवल यही नंबर' : 'Only number'}</strong> <a href="${SITE.phoneHref}">${esc(SITE.phone)}</a></li>
          <li><strong>${hi ? 'कामाख्या मंदिर कार्यालय' : 'Kamakhya Temple office'}</strong> ${esc(SITE.addresses[0].street)}, ${esc(SITE.addresses[0].locality)} ${esc(SITE.addresses[0].postal)}</li>
          <li><strong>${hi ? 'मायोंग आश्रम' : 'Mayong Ashram'}</strong> ${esc(SITE.addresses[1].street)}, ${esc(SITE.addresses[1].locality)} ${esc(SITE.addresses[1].postal)}</li>
          <li><strong>${hi ? 'ईमेल' : 'Email'}</strong> <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></li>
          <li><strong>${hi ? 'आधिकारिक साइट' : 'Official site'}</strong> ${esc(SITE.domain)}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="seo-narrative">
    <div class="container">
      <div class="panel">
        ${deepBlock(c.deep)}
      </div>
    </div>
  </section>

${faqBlock(c.faqs, hi)}
${relatedBlock(s.related, hi)}
</main>`;
}

// ---------------------------------------------------------------------------
// 404. Never in the sitemap, noindex, still fully branded and navigable.
// ---------------------------------------------------------------------------
function notFoundPage() {
  return `<main>
  <section class="hero hero--page">
    <div class="container hero-content">
      <h1>Page not found</h1>
      <p>That page does not exist on this site. Here is where you probably wanted to go.</p>
    </div>
  </section>

  <section class="seo-narrative">
    <div class="container">
      <div class="panel">
        <h2>Popular pages</h2>
        <p>If you were looking for the best tantrik in Kamakhya Temple or Mayong, these are the pages that will help. Deepak Tantrik practises at the Kamakhya Temple in Guwahati and at his Mayong Ashram in Assam, and he can be reached directly on <a href="${SITE.phoneHref}">${esc(SITE.phone)}</a> or on WhatsApp.</p>
        <div class="related-links">
          <a href="/">Best tantrik in Kamakhya Temple and Mayong ${GLYPH.arrow}</a>
          <a href="/best-tantrik-mayong">Best tantrik in Mayong ${GLYPH.arrow}</a>
          <a href="/black-magic-removal-kamakhya">Black magic removal Kamakhya ${GLYPH.arrow}</a>
          <a href="/love-problem-solution-kamakhya">Love problem solution Kamakhya ${GLYPH.arrow}</a>
          <a href="/vashikaran-specialist-mayong">Vashikaran specialist Mayong ${GLYPH.arrow}</a>
          <a href="/husband-wife-dispute-mayong">Husband wife dispute Mayong ${GLYPH.arrow}</a>
          <a href="/tantrik-baba-guwahati">Tantrik baba in Guwahati ${GLYPH.arrow}</a>
          <a href="/services">All spiritual services ${GLYPH.arrow}</a>
          <a href="/about">About Deepak Tantrik ${GLYPH.arrow}</a>
          <a href="/contact">Contact and free consultation ${GLYPH.arrow}</a>
        </div>
      </div>
    </div>
  </section>
</main>`;
}

// ---------------------------------------------------------------------------
// Legal / governance pages: privacy, terms, disclaimer, developer declaration.
//
// Only classes that already have a CSS rule elsewhere are used, so verify.js
// section 5 (every HTML class used in the HTML has a rule) cannot be broken by
// adding a document to the registry.
//
// The document index is what links these four pages to each other. ui.rich()
// escapes anything that is not <strong> or <em>, so an authored <a href> in the
// copy renders as literal text - a live bug on five pages today. Cross-
// references in the copy therefore name the document in prose, and this block
// does the actual linking.
//
// The shared text in that block is deliberately kept under 40 words. audit.js
// section 11 fails the build on a 40-word run repeated verbatim between two
// pages, and four legal pages sharing a footer strip is exactly how that
// assertion would be tripped by a paragraph written out of habit.
// ---------------------------------------------------------------------------
function legalPage(page) {
  const hi = isHi(page.slug);
  const s = UI.sourceFor(page.slug).src;
  const other = UI.legal.filter((p) => p.slug !== page.slug);

  return `<main>
  <section class="hero hero--page">
    <div class="container hero-content">
      <h1>${rich(s.h1)}</h1>
      <p>${rich(s.sub)}</p>
      <p>Effective from ${esc(s.effectiveDate)}.</p>${cta(hi)}
    </div>
  </section>

  <section class="about-section">
    <div class="container">
      <div class="panel">
        <h2>${rich(s.lead.h2)}</h2>
        ${s.lead.p.map((p) => `<p>${rich(p)}</p>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="seo-narrative">
    <div class="container">
      <div class="panel">
        ${deepBlock(s.deep)}
      </div>
    </div>
  </section>

  <section class="about-section">
    <div class="container">
      <div class="panel panel--accent">
        <h2>The other documents on this site</h2>
        <p>Each of these is linked from the footer of every page here, and none of them is indexed or in the sitemap.</p>
        <div class="related-links">
          ${other.map((p) => `<a href="/${p.slug}">${esc(p.navLabel)} ${GLYPH.arrow}</a>`).join('\n          ')}
        </div>
      </div>
    </div>
  </section>
</main>`;
}

const RENDERERS = {
  home: homePage,
  about: aboutPage,
  services: servicesHub,
  contact: contactPage,
  verify: verifyPage,
  legal: legalPage,
  service: genericPage,
  location: genericPage,
  article: genericPage,
};

module.exports = { RENDERERS, notFoundPage };
