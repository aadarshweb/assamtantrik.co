// content/site.js
// Single source of truth for site-wide constants. Every fact here already
// appears on the live site - nothing is invented. See "Final VIP SEO.md" Step 1.

const SITE = {
  // --- Identity ---
  name: 'Deepak Tantrik',
  domain: 'https://assamtantrik.co',
  lang: 'en',
  locale: 'en_IN',
  altLang: 'hi',
  altLocale: 'hi_IN',

  // --- Contact ---
  phone: '+91 9706801250',
  phoneHref: 'tel:+919706801250',
  telDigits: '919706801250',
  waHref: 'https://wa.me/919706801250',
  email: 'deepaktantrik@assamtantrik.co',

  // --- Credentials (all previously published on the site) ---
  jobTitle: 'Tantrik and Vedic Astrologer',
  experience: '25+ years',
  founded: '2001',
  casesSolved: '10,000+',
  lineage: 'Seven-generation Mayong tantra lineage',

  // --- Locations: TWO physical addresses. Both are PostalAddress objects,
  //     never a single mashed-together string. (v4 Step 8.1) ---
  addresses: [
    {
      street: 'Kamakhya Temple Road, Malakhuwa',
      locality: 'Guwahati',
      region: 'Assam',
      postal: '781010',
      country: 'IN',
      label: 'Kamakhya Temple, Guwahati',
      labelHi: 'कामाख्या मंदिर, गुवाहाटी',
    },
    {
      street: 'Mayong Ashram, Morigaon',
      locality: 'Mayong',
      region: 'Assam',
      postal: '782411',
      country: 'IN',
      label: 'Mayong Ashram, Assam',
      labelHi: 'मायोंग आश्रम, असम',
    },
  ],
  geo: { lat: '26.1445', lng: '92.1018' },
  areaServed: ['Guwahati', 'Mayong', 'Morigaon', 'Assam', 'Kamakhya'],
  hours: { opens: '06:00', closes: '22:00' },

  // --- SEO / entity description, woven with the primary keyword cluster ---
  description:
    'Deepak Tantrik is a best tantrik in Kamakhya Temple and Mayong, Assam. Born into a seven-generation Mayong tantra lineage and initiated at Kamakhya Temple, Guwahati, he offers black magic removal, vashikaran, love problem solutions and husband wife dispute help with 25+ years of experience. Call +91 9706801250.',

  knowsAbout: [
    'Tantra Shastra',
    'Kamakhya Tantra',
    'Mayong Tantra',
    'Vedic Astrology',
    'Vashikaran',
    'Black Magic Removal',
    'Nadi Palm Leaf Reading',
  ],

  // --- Theme (mirrors css/style.css :root) ---
  theme: '#0b121e',
  accent: '#ff6600',

  // --- Social share image. Must be exactly 1200x630, because every page
  //     declares og:image:width/height and a mismatch makes social platforms
  //     crop or letterbox. portrait.jpg is 600x804, the wrong shape entirely.
  ogImage: '/images/og-cover.jpg',
  ogWidth: 1200,
  ogHeight: 630,

  // --- Font CSS, async-loaded in every page head ---
  fontCss:
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap',
  fontCssHi:
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Noto+Sans+Devanagari:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap',

  // --- Canonical URL for a slug. Homepage is "/" (never "/index.html").
  //     Cloudflare 307s "/x.html" -> "/x", so every canonical uses clean URLs
  //     and the sitemap submits no URL that redirects. (v4 Step 6) ---
  url: (slug) => (slug === '' ? `${SITE.domain}/` : `${SITE.domain}/${slug}`),

  wa: (text) => `https://wa.me/${SITE.telDigits}?text=${encodeURIComponent(text)}`,
};

// Stable @id anchors. Google builds its entity graph from these cross-references,
// so they must never change. (v4 Step 8.2)
SITE.ids = {
  business: `${SITE.domain}/#business`,
  person: `${SITE.domain}/#deepak-tantrik`,
  website: `${SITE.domain}/#website`,
  gallery: `${SITE.domain}/#gallery`,
};

module.exports = SITE;
