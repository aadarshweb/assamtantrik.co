// content/guides.js
// Long-form informational pages. `hasHi: false` on all three: no Hindi
// translation exists, so NO hi hreflang is emitted. Pointing hreflang at a
// non-existent page is an explicit Google error (v4 Step 11.5 / anti-patterns).
//
// These are the three pages that answer research-phase queries, and the three
// that carry the E-E-A-T trust cluster. Word target: 1000+ (v4 Step 10).

const GUIDES = [
  // =====================================================================
  {
    slug: 'about-kamakhya-temple-guwahati',
    hiAnchor: 'कामाख्या मंदिर, गुवाहाटी के बारे में',
    file: 'about-kamakhya-temple-guwahati',
    kind: 'article',
    priority: '0.8',
    changefreq: 'monthly',
    hasHi: false,
    datePublished: '2026-01-15',
    dateModified: '2026-09-29',

    title: 'About Kamakhya Temple, Guwahati | Complete Guide',
    desc:
      'About Kamakhya Temple, Guwahati: the Shakti Peetha on Nilachal Hill, the Ambubachi Mela, its tantrik tradition and how to spot a fake. Call +91 9706801250.',
    keywords: [
      'about kamakhya temple',
      'kamakhya temple guwahati',
      'kamakhya temple tantriks',
      'kamakhya mandir tantrik',
      'kamakhya temple shakti peetha',
      'best kamakhya tantrik',
    ],
    h1: 'About Kamakhya Temple, Guwahati',
    sub: "The sacred seat of Shakti in Guwahati, and a guide to its history, its festivals and the tantric practice associated with it.",
    h2: 'About Kamakhya Temple: The Shakti Peetha of Assam',
    intro: [
      'Kamakhya Temple, located atop Nilachal Hill in Guwahati, Assam, is one of the 51 Shakti Peethas, the most sacred sites of goddess worship in Hinduism. According to the <em>Kalika Purana</em>, this is the spot where the <em>yoni</em> (womb) of the goddess Sati fell to earth after Lord Vishnu used his Sudarshana Chakra to dismember her body. That origin is why the site is treated as one of the most important Shakti centres in eastern India.',
      'The temple complex is also the historic centre of tantric practice in the region. The Ambubachi Mela, held annually in June, draws large numbers of devotees and is sometimes called the Tantrik Kumbh Mela. If you are visiting for a consultation rather than darshan, the Mela is the busiest and most expensive period of the year.',
    ],
    image: '/images/religious.jpg',
    imageAlt: 'Shrine lamps burning at Kamakhya Temple on Nilachal Hill, Guwahati, Assam',
    deep: [
      {
        // Deliberately short. /black-magic-removal-kamakhya owns the
        // "kamakhya temple black magic" intent. This page states the position
        // and links; it does not compete for the term.
        h2: 'On Claims of "Kamakhya Temple Black Magic"',
        p: [
          'The phrase generates enormous curiosity and fear in equal measure, and it is worth being clear about what it means. Kamakhya is a site of very great power that can be directed either way. Authentic kamakhya temple tantriks use it for healing and protection. The dark reputation comes from its misuse by a small number of unscrupulous practitioners, not from the temple itself.',
          'Whether you are looking for kamakhya black magic removal specifically, what the warning signs are, and how the process works is set out on the <a href="/black-magic-removal-kamakhya">black magic removal page</a>. If you want to check that a practitioner is legitimate before approaching anyone, start with the <a href="/verify">verification page</a> instead.',
        ],
      },
      {
        // Short by design. /ambubachi-mela-kamakhya owns the festival intent
        // and ranks for it; this page owns what the temple IS. Two pages
        // writing 700 words each about the Mela compete with each other.
        h2: 'The Ambubachi Mela, in Brief',
        p: [
          'Once a year the kamakhya temple tantriks who normally work in private emerge to perform public rituals during the Ambubachi Mela, which is the largest annual gathering of practitioners anywhere in the world. Deepak Tantrik takes part every year. The dates, the rules on Nilachal Hill and how to plan a visit are covered in full on the <a href="/ambubachi-mela-kamakhya">Ambubachi Mela guide</a> rather than repeated here.',
        ],
      },
      {
        h2: 'How to Find a Genuine Tantrik at Kamakhya',
        p: [
          'Finding a genuine tantrik at Kamakhya is harder than it looks. The area around the temple hosts many people claiming to be spiritual guides. The useful checks are a lineage of at least two or three generations, initiation from a named guru, a physical address, and a track record that can be verified rather than simply asserted.',
          'Deepak Tantrik\'s family has practised in Mayong for seven generations, and he was initiated at Kamakhya Temple. Both facts are stated on the about page, and both can be checked against the two addresses published on this site. His phone number is the same one used for every kind of consultation.',
        ],
      },
      {
        // A list here duplicates the service pages it should be linking to.
        // Point at them instead of restating them.
        h2: 'What Is Performed at Kamakhya, and Where',
        p: [
          'Remedies are performed at one of two locations depending on the case: the Kamakhya Temple in Malakhuwa, Guwahati, or the Mayong Ashram in Morigaon. Work tied to the site itself is done at the temple; work drawing on the Mayong lineage tradition is done at the ashram. The <a href="/services">services page</a> sets out each remedy, what it involves, and what it costs, and every one has its own page linked from there.',
        ],
      },
      {
        h2: 'What to Expect at a Kamakhya Tantrik Consultation',
        p: [
          'If you have never visited a practitioner before, it helps to know what actually happens. A consultation at the Kamakhya Temple is a conversation before it is anything else. You describe the situation in your own words, you are asked how long it has been going on and what has been tried already, and where astrology is relevant your date and time of birth are read. The practitioner then explains what they believe is happening and what a remedy would involve.',
          'Nothing about that first conversation should involve money, and a genuine practitioner will tell you plainly if your problem is not something they work on. If a remedy does make sense, the cost is stated in full before any work begins, and the location and timing of the ritual are agreed with you in advance. Both walk-in locations, the temple office in Malakhuwa and the Mayong Ashram, are ordinary rooms where you speak privately, not a staged setting.',
        ],
      },
      {
        h2: 'Visiting Kamakhya Temple: Practical Notes',
        p: [
          'The temple sits on Nilachal Hill in Guwahati and the surrounding area is a working religious site rather than a tourist attraction, so ordinary temple etiquette applies: modest dress, shoes removed before entering the sanctum, and photography only where it is explicitly permitted. The main shrine closes for ritual periods, and the complex has its own schedule during the Ambubachi Mela in June, when the city fills with visitors and access is slower than usual.',
          'Guwahati is well connected by rail and air, and the Kamakhya area is reachable from the main city by road. If you are travelling from outside Assam specifically to be consulted, arrange the appointment by calling first rather than arriving and waiting, because during Mela week that can mean a long unplanned stay. If you cannot travel, the first consultation can be taken by phone on +91 9706801250, and the remedy can then be performed at whichever of the two locations suits the case.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why is Kamakhya Temple called a Shakti Peetha?',
        a: 'The Kalika Purana records that the yoni of the goddess Sati fell here after Vishnu dismembered her body with the Sudarshana Chakra. Kamakhya is therefore one of the 51 Shakti Peethas, a major site of goddess worship in Hinduism and a seat of Shakti.',
      },
      {
        q: 'What happens at the Ambubachi Mela?',
        a: 'Held every June, the Ambubachi Mela is the annual festival marking the annual menstruation of the goddess. It draws hundreds of thousands of devotees and is also called the Tantrik Kumbh Mela because of its importance to tantrik practitioners.',
      },
      {
        q: 'Is black magic really practised at Kamakhya Temple?',
        a: 'Kamakhya is a site of very great power, and that power can be directed either way. Authentic kamakhya temple tantriks use it exclusively for healing and protection. It is this misuse by a small number of unscrupulous practitioners that gives the site its dark reputation.',
      },
    ],
    testimonial: null,
    related: ['black-magic-removal-kamakhya', 'tantrik-baba-guwahati', 'history-of-mayong-black-magic-assam', 'real-tantrik-astrologer-assam'],
  },

  // =====================================================================
  {
    slug: 'history-of-mayong-black-magic-assam',
    hiAnchor: 'मायोंग काला जादू का इतिहास',
    file: 'history-of-mayong-black-magic-assam',
    kind: 'article',
    priority: '0.8',
    changefreq: 'monthly',
    hasHi: false,
    datePublished: '2026-02-02',
    dateModified: '2026-09-29',

    title: 'History of Mayong Black Magic in Assam | Guide',
    desc:
      'History of Mayong black magic in Assam: the ancient capital of tantra, its palm-leaf manuscripts, and how to find a real Mayong tantrik. Call +91 9706801250.',
    keywords: [
      'mayong is famous for',
      'history of mayong tantrik',
      'mayong black magic history',
      'mayong assam black magic video',
      'mayong tantra history',
      'mayong assam tantrik',
      'real mayong tantrik',
    ],
    h1: 'History of Mayong Black Magic in Assam',
    sub: "The complete story of India's most mysterious village, the ancient capital of tantra and black magic.",
    h2: 'What is Mayong, Assam?',
    intro: [
      'Mayong is a village in the Morigaon district of Assam with a long reputation in Assamese folklore as a place associated with tantra and the occult. The name is traditionally linked to maya, meaning illusion. The historical record is thinner than the popular stories suggest, and that gap is worth understanding before treating any claim about the village as fact.',
      'The useful history is not the dramatic footage but the surviving material: palm-leaf manuscripts, family oral traditions, and a continuous practice that has been passed down in the area. Some of that material is held by families, some is in the Mayong Museum, and some claims about it are exaggerated.',
    ],
    image: '/images/religious.jpg',
    imageAlt: 'Palm-leaf tantra manuscripts and ritual lamps from the Mayong tantra tradition in Assam',
    deep: [
      {
        h2: 'Ancient History of Mayong Black Magic',
        p: [
          'Archaeological evidence suggests that the occult tradition of Mayong dates back to the pre-Vedic era. References to Mayong appear in the <em>Kalika Purana</em> and the <em>Yogini Tantra</em>, two of the most sacred texts of Tantrik Hinduism. These texts describe Mayong as a seat of <em>Kamakhya Shakti</em>, linking it directly to the Kamakhya Temple tradition in Guwahati.',
          'Medieval traders and explorers from China, Tibet and Southeast Asia wrote with awe about visiting Mayong and witnessing healers who could cure diseases, control animals, make objects float in the air, and neutralize the most potent poisons simply by touch. Marco Polo\'s contemporaries referenced "the magicians of lower Assam" in their journals.',
          'The mayong assam tantrik contact number you find on modern websites like this one represents the end of a very long chain of transmission. Every authentic mayong tantrik is a living archive of this ancient knowledge.',
        ],
      },
      {
        h2: 'The Palm Leaf Manuscripts of Mayong',
        p: [
          'Mayong has a substantial body of palm-leaf material associated with the tantric tradition, and some of it is held by families and by the Mayong Museum. The more dramatic claims made about these manuscripts are difficult to verify, and it is worth treating them with caution rather than as settled history.',
          'The museum houses part of the material, while other texts remain with lineage holders. Deepak Tantrik is one of the practitioners who can still read the script and apply the family method. The number on this site reaches him directly.',
        ],
      },
      {
        h2: 'Mayong and Kamakhya: A Sacred Twin Power',
        p: [
          'To understand Mayong fully, one must understand its relationship with the Kamakhya Temple in Guwahati. Scholars of assam tantrik tradition describe these two sites as the two poles of a single spiritual axis. Kamakhya is the goddess-force (Shakti), and Mayong is where that force is channeled through human practitioners.',
          'Deepak Tantrik was born in Mayong and initiated at Kamakhya, and the two locations are the basis of his practice. That combination is the claim the site makes; the reader can check the addresses and the lineage against it.',
        ],
      },
      {
        h2: 'Modern Mayong: Tourism, Documentaries, and Authenticity',
        p: [
          'In recent years, Mayong has attracted significant media attention. Documentaries, travel shows, and countless mayong assam black magic video recordings have been made here. While this tourism is welcome, it has also created a problem: a flood of fake practitioners claiming to be mayong assam tantrik guides who perform theatrical shows for visitors with no genuine knowledge.',
          'Finding a real mayong tantrik contact number is now harder than ever. If you are seeking genuine help, for love problems, black magic protection, or spiritual guidance, always verify the lineage of the person you consult. Deepak Tantrik\'s family has lived and practiced in Mayong for seven generations. His initiation at the Kamakhya Temple adds an additional layer of authentic authority that no theatrical performer can replicate.',
        ],
      },
      {
        h2: 'Mayong Today: What the Village Is Actually Like',
        p: [
          'Because the village has become a subject of online curiosity, it is worth being clear about what it is. Mayong remains a small settlement in Morigaon district with a population counted in a few hundred households, and the overwhelming majority of residents are ordinary families living ordinary lives. The rituals associated with the place are performed by lineage families, not as a public performance, and are not staged for visitors.',
          'The Mayong Museum holds a collection of the palm-leaf manuscripts and related artefacts, and is the one place where the written tradition can be seen properly. Outside the museum and the ashram of a lineage practitioner, there is very little to see, and anyone promising you a guided experience of live magic is not being straight with you. That gap between the online image and the real place is precisely why so many fraudulent mayong assam tantrik operators operate under the name.',
        ],
      },
      {
        h2: 'Questions Worth Asking Before You Pay Anyone',
        p: [
          'If you are considering a Mayong practitioner, the questions you ask and the answers you get will tell you more than any claim on a website. Ask where they were born and which family they belong to, then ask who initiated them and where. A genuine practitioner answers both without hesitation, because both are matters of public record in a community this small. Ask what the remedy involves, how long it takes, what it costs, and what happens if it does not work.',
          'The answers that should end the conversation are evasive ones: lineage that cannot be named, a guru who will not be identified, a fee that will only be known after you travel, a guarantee, or any suggestion that you would need to harm someone to fix your own problem. Read <a href="/real-tantrik-astrologer-assam">how to identify a genuine tantrik in Assam</a> before your first appointment, and keep the mayong tantrik contact number for every practitioner you speak to so you can compare what you are told.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why is Mayong called the land of black magic?',
        a: 'Mayong has been associated with tantra and occult practice for over two millennia, and references to it appear in the Kalika Purana and the Yogini Tantra. The name is widely believed to derive from the Sanskrit "maya", meaning illusion or supernatural power.',
      },
      {
        q: 'What are the palm leaf manuscripts of Mayong?',
        a: 'They are centuries-old texts inscribed on palm leaves that document the Mayong tantra tradition in detail, including healing rituals, methods for identifying curses, and Tantrik ceremonies. The most sensitive manuscripts remain with lineage holders, and Deepak Tantrik is among the few who can still read and apply them.',
      },
      {
        q: 'How is Mayong connected to Kamakhya Temple?',
        a: 'Scholars treat them as two poles of one spiritual axis: Kamakhya is the seat of the goddess-force, and Mayong is where that force is worked through human practitioners. Deepak Tantrik is born in Mayong and initiated at Kamakhya, so he spans both.',
      },
    ],
    testimonial: null,
    related: ['best-tantrik-mayong', 'black-magic-removal-kamakhya', 'real-tantrik-astrologer-assam', 'about-kamakhya-temple-guwahati'],
  },

  // =====================================================================
  {
    slug: 'real-tantrik-astrologer-assam',
    hiAnchor: 'असली तांत्रिक कैसे पहचानें',
    file: 'real-tantrik-astrologer-assam',
    kind: 'article',
    priority: '0.8',
    changefreq: 'monthly',
    hasHi: false,
    datePublished: '2026-03-10',
    dateModified: '2026-09-29',

    title: 'How to Find a Real Tantrik & Astrologer in Assam',
    desc:
      'How to find a real tantrik and astrologer in Assam: 5 red flags of a fraud, 5 signs of a genuine one, and how lineages are verified. Call +91 9706801250.',
    keywords: [
      'how to find a real tantrik',
      'real tantrik assam',
      'how to spot a fake tantrik',
      'genuine tantrik kamakhya',
      'identify a legitimate astrologer',
      'tantrik red flags',
      'best tantrik in guwahati',
    ],
    h1: 'How to Find a Real Tantrik and Astrologer in Assam',
    sub: 'Your complete guide to identifying genuine practitioners in Kamakhya Temple and Mayong, and avoiding fraud.',
    h2: 'Why Finding a Real Assam Tantrik Is So Difficult',
    intro: [
      'The demand for spiritual help is high, and so is the number of people willing to exploit it. Anyone searching for a tantrik in Assam will find hundreds of results, many of them fake. This guide sets out the checks that separate a genuine practitioner from a fraudulent one, and it applies to this site as much as to any other.',
      'The Kamakhya and Mayong traditions deserve to be approached with discernment. The checks below are practical: a physical address, a stated lineage, a free first conversation, a fixed fee, and a refusal to promise a guaranteed result.',
    ],
    image: '/images/portrait.jpg',
    imageAlt: 'Deepak Tantrik, seventh-generation Mayong tantra practitioner and Kamakhya initiated, Assam',
    deep: [
      {
        h2: '5 Red Flags of a Fake Tantrik or Astrologer',
        p: [
          '1. Upfront money demands before any consultation. A genuine Kamakhya tantrik will speak with you first to understand your situation before discussing any fees. Fraudsters demand large sums immediately, claiming the ritual is urgent.',
          '2. Guaranteed results in unrealistically short times. A real tantrik in kamakhya temple will give you an honest assessment and explain that timing depends on the situation, rather than promising a fix in 24 hours.',
          '3. No verifiable lineage or location. Any authentic mayong assam tantrik will be able to state their family background, their guru\'s name, and their physical location clearly. Ask for these before paying anything.',
          '4. Claims to be the only or most powerful. Genuine practitioners of tantrik in assam tradition are deeply humble. Arrogant claims of exclusive power are a hallmark of fraud.',
          '5. No physical office or verifiable address. A genuine tantrik in Guwahati will have a real, physical location, at the Kamakhya Temple, in Mayong, or elsewhere, that you can visit in person.',
        ],
      },
      {
        h2: '5 Signs of a Genuine Assam Tantrik or Astrologer',
        p: [
          '1. Multi-generational family lineage. The more trustworthy mayong tantrik practitioners have been in the same family for generations. Deepak Tantrik\'s family has practiced in Mayong for seven generations, verifiable through community elders.',
          '2. Formal initiation (diksha) from a recognized guru. Deepak Tantrik received his formal initiation at the Kamakhya Temple.',
          '3. Claims that can be checked. A genuine tantrik in Kamakhya can name a lineage, a guru and a physical address. Those are stronger evidence than a page of testimonials that cannot be verified.',
          '4. Ethical framework and confidentiality. A real tantrik in guwahati will never ask you to harm anyone, never perform unethical rituals, and will maintain absolute confidentiality about your personal situation.',
          '5. Transparent pricing with no hidden escalation. A genuine assam tantrik explains all costs upfront. No surprise escalations or "extra rituals needed" after you have paid.',
        ],
      },
      {
        h2: 'What Can Be Checked About Deepak Tantrik',
        p: [
          'Deepak Tantrik has practised for more than 25 years. He was born into a seven-generation Mayong tantra lineage and was initiated at Kamakhya Temple. He publishes two physical addresses and a direct phone number, and he states plainly that no genuine practitioner can guarantee a result. The number +91 9706801250 reaches him directly rather than an intermediary.',
          'The practice covers relationship and marriage problems, family conflict, business difficulties and situations described as a negative presence. The combination of the Mayong lineage and the Kamakhya initiation is the basis of the practice, not a claim of exclusivity.',
        ],
      },
      {
        h2: 'What a Legitimate Fee Structure Looks Like',
        p: [
          'Pricing in this tradition is not regulated, which is precisely why the pattern below is worth recognising. A genuine practitioner quotes a figure for the specific remedy required, states it before the work begins, and it does not change afterwards. The first consultation is normally free or nominal, because the practitioner needs to understand the situation before knowing what remedy it calls for. Fees vary legitimately with the remedy, with the complexity of the case and with the time the work takes.',
          'The patterns to distrust are different: an open-ended monthly arrangement, a figure that is only revealed after you have travelled, a price that rises each time you return, or any request for a sum that is out of proportion to the remedy. A remedy described vaguely enough that no price can be attached to it is usually a remedy that does not exist. Ask for the fee, get it in writing or repeated back to you, and if it is not stated plainly before you commit, walk away.',
        ],
      },
      {
        h2: 'Red Flags Beyond the Individual Practitioner',
        p: [
          'Fraud in this field is usually organised rather than individual, and it is worth knowing the common structures. The most frequent is a group of fake practitioners operating in loose association around a genuine site such as the Kamakhya Temple, each referring people to the next so that a bad experience at one door becomes a warm introduction to the next. The second is the social-media intermediary who takes a percentage for arranging a consultation. The third is the long-distance "guru" who will not name a location, because there is no location to name.',
          'If a consultation requires you to pay someone other than the person who performs the work, that arrangement is the problem regardless of how sincere the person in front of you seems. And if you cannot reach the practitioner directly on a phone number, you are talking to a broker. The mayong assam tantrik contact number published on a practitioner\'s own site should be a direct line, and it should be the same number whether you call about love, marriage, black magic or a free consultation.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I know if an Assam tantrik is genuine?',
        a: 'Look for three things: a multi-generational family lineage, formal diksha from a recognized guru, and a verifiable track record of resolved cases. Anyone who demands large sums upfront, promises instant results, or claims to be the only powerful one is a red flag.',
      },
      {
        q: 'How much does a real tantrik in Kamakhya charge?',
        a: 'A genuine practitioner explains all costs upfront before any work begins, with no surprise escalations afterwards. The first consultation is free. If you are on assamtantrik.co, the number listed reaches Deepak Tantrik directly, with no middleman fee.',
      },
      {
        q: 'Can I verify a Mayong tantrik lineage?',
        a: 'Yes, through community elders. Deepak Tantrik\'s family has practised in Mayong for seven generations, which local elders in Mayong and Morigaon can confirm. He also holds formal initiation from the Kamakhya Temple.',
      },
    ],
    testimonial: null,
    related: ['best-tantrik-mayong', 'history-of-mayong-black-magic-assam', 'tantrik-baba-guwahati', 'black-magic-removal-kamakhya'],
  },
];

module.exports = GUIDES;
