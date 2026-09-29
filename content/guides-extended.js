// content/guides-extended.js
// Two informational pages targeting queries with real search volume where the
// entire competitive set is thin. These are the cheapest rankings available,
// because nobody has written them properly.
//
// Ambubachi Mela in particular: the single highest-volume informational term
// in the Kamakhya cluster, and the four pages currently ranking for it are
// either a shop selling puja packages or a paragraph of copied temple
// description. An honest, genuinely useful guide is a realistic page 1.
//
// hasHi is false on both. No Hindi translation exists, so no hi hreflang is
// emitted - pointing hreflang at a URL that does not resolve is the v3 bug.

const GUIDES_EXT = [
  // =====================================================================
  {
    slug: 'ambubachi-mela-kamakhya',
    file: 'ambubachi-mela-kamakhya',
    kind: 'article',
    priority: '0.8',
    changefreq: 'monthly',
    hasHi: false,
    hiAnchor: 'कामाख्या अंबुबाची मेला',
    datePublished: '2026-04-18',
    dateModified: '2026-09-29',

    title: 'Ambubachi Mela Kamakhya: Dates, Rules, and Guide',
    desc:
      'Ambubachi Mela at Kamakhya Temple, Guwahati: what it is, when it falls, temple rules and how to reach Nilachal Hill. Guide. +91 9706801250.',
    keywords: [
      'ambubachi mela kamakhya',
      'ambubachi mela 2026 dates',
      'kamakhya temple ambubachi mela rules',
      'kamakhya temple mela guide',
      'nilachal hill temple visit',
      'ambubachi mela darshan',
      'kamakhya temple visiting hours',
    ],
    h1: 'Ambubachi Mela at Kamakhya Temple, Guwahati',
    sub: 'What the Mela is, when it falls in 2026, the rules on Nilachal Hill, and what to actually plan for.',
    h2: 'What the Ambubachi Mela Is',
    intro: [
      'The Ambubachi Mela marks the annual menstruation of the goddess, and it is the most important festival in the Kamakhya calendar. The temple closes for four days while the Mela runs, then reopens for the Bahagata Mela, when the goddess is bathed and the temple is rededicated before a large crowd. Because so many people come to the temple specifically for the Mela, the whole area of Nilachal Hill changes character for those four days.',
      'The festival is also the largest annual gathering of tantrik practitioners in the world, which is why it is often called the Tantrik Kumbh Mela. Practitioners who normally work in private come to perform public rituals and to meet each other. If you are visiting for a consultation, this is a busy and expensive period and not the easiest time to arrange one.',
    ],
    image: '/images/religious.jpg',
    imageAlt: 'Devotees gathering at Kamakhya Temple during the Ambubachi Mela on Nilachal Hill, Guwahati',
    deep: [
      {
        h2: 'When it falls, and how to plan around it',
        p: [
          'The Mela is tied to the lunar calendar, so it shifts each year and cannot be fixed to a Gregorian date in advance. It normally falls in the month of Jyeshtha, which is May or June, and runs for roughly four days. Dates are announced by the temple authorities each year, so treat any date published well in advance with caution and confirm nearer the time.',
          'Planning matters more than the date. The days immediately before and after the Mela are the busiest of the year for Guwahati. Guwahati is a city of well under a million people, and the crowd on Nilachal Hill during those days is a genuine logistical problem rather than an inconvenience: buses are diverted, parking is effectively nonexistent, and the approach roads are closed for long stretches. If you can choose your date, avoid the Mela days unless the Mela is the reason you are coming.',
          'If you do come during the Mela, plan to arrive a day early, stay somewhere within walking distance rather than planning to drive in, and expect to walk the last stretch uphill. Many visitors who book accommodation near the temple for the Mela discover on arrival that their hotel is actually on the far side of the city.',
        ],
      },
      {
        h2: 'Rules on Nilachal Hill, and what they actually mean',
        p: [
          'The main rules are simple and strictly enforced. **Modest dress** is required throughout the temple complex; for women, clothing that covers the shoulders and knees. **Footwear is removed** before entering the sanctum, so wear something you can take off easily and bring socks for the walk back. **Phones and cameras are not permitted** inside the sanctum area, and this is enforced at the entrance rather than afterwards. **Smoking, alcohol and meat** are not permitted anywhere on the hill.',
          'Photography is the one most people get wrong. Photography of the temple exterior and of the Mela crowd in the public areas is generally fine. Photography of the sanctum, the deity, and the inner temple is not. Volunteers at the entrance will tell you, and the rule is not negotiable, so it is worth asking rather than assuming.',
          'The Ambubachi Mela also has a rule specific to the festival: during the four days the temple is closed for the general public, entry is not available at all. What draws a very large crowd during those days is the temple\'s own darshan arrangements for specific devotees, and the area around it fills with people who are waiting rather than entering.',
        ],
      },
      {
        h2: 'Getting there, and what to carry',
        p: [
          'Nilachal Hill is in central Guwahati. The temple is a short distance from the main city and can be approached on foot, by auto-rickshaw, or by taxi, and the hill itself is climbed on foot in about ten to fifteen minutes depending on your pace and the crowd. There is no parking at the top. Buses that would normally pass through the area are diverted during Mela days.',
          'If you are coming from outside Guwahati, the city is connected by rail and by air, and the onward journey to the temple area is straightforward by road except during the Mela. Plan to allow a good deal of extra time for the final approach during those days and accept that you may not be able to get a vehicle close to the hill at peak times.',
          'Carry water, something for shade if you are there in the middle of the day, a cloth bag for anything you remove at the entrance, and a light cotton shawl or scarf, which is useful both for the sun and for covering shoulders on the way in. Cash is needed for offerings and for prasad. Avoid carrying leather items.',
        ],
      },
      {
        h2: 'If you are coming for a consultation rather than darshan',
        p: [
          'During the Mela it is the busiest time of the year for practitioners, and also the least convenient. If you want to be consulted, tell us in advance and we will fix a time outside the temple closure rather than expecting you to find someone at a moment when the temple is shut.',
          'A consultation can equally well be taken by phone or WhatsApp on +91 9706801250, and for most people that is the more practical option, particularly if the Mela is your reason for being in Guwahati rather than a remedy. The first consultation is free, and it is a conversation about your situation rather than an appointment for a ritual.',
        ],
      },
    ],
    faqs: [
      {
        q: 'When is the Ambubachi Mela in 2026?',
        a: 'It follows the lunar calendar and normally falls in May or June, so the exact Gregorian dates shift each year and are announced by the temple authorities. Confirm the dates nearer the time rather than relying on a date published well in advance.',
      },
      {
        q: 'Can I enter the temple during the Ambubachi Mela?',
        a: 'No. The temple is closed to the general public for roughly four days while the Mela runs. What draws a large crowd in that period is people waiting in the surrounding area rather than entering, so plan accordingly.',
      },
      {
        q: 'Is photography allowed at Kamakhya Temple?',
        a: 'Photography of the exterior and the public areas is generally fine. Photography of the sanctum, the deity and the inner temple is not permitted, and this is enforced at the entrance. Volunteers at the gate will tell you what is and is not allowed.',
      },
      {
        q: 'Is there parking at Nilachal Hill?',
        a: 'Effectively no. The hill is climbed on foot in about ten to fifteen minutes and there is no parking at the top. During the Mela, buses are diverted and the approach roads close, so plan to arrive early and walk.',
      },
    ],
    testimonial: null,
    related: ['about-kamakhya-temple-guwahati', 'tantrik-baba-guwahati', 'black-magic-removal-kamakhya', 'mayong-to-kamakhya-distance'],
  },

  // =====================================================================
  {
    slug: 'mayong-to-kamakhya-distance',
    file: 'mayong-to-kamakhya-distance',
    kind: 'article',
    priority: '0.7',
    changefreq: 'monthly',
    hasHi: false,
    hiAnchor: 'मायोंग से कामाख्या मंदिर की दूरी',
    datePublished: '2026-05-22',
    dateModified: '2026-09-29',

    title: 'Mayong to Kamakhya Temple Distance | Travel Guide',
    desc:
      'Mayong to Kamakhya Temple distance and travel time in Assam. How far it really is, how to reach both, and when you need not travel. +91 9706801250.',
    keywords: [
      'mayong to kamakhya temple distance',
      'mayong kamakhya distance',
      'how to reach mayong assam',
      'kamakhya temple how to reach',
      'mayong morigaon distance guwahati',
      'mayong ashram location',
    ],
    h1: 'Mayong to Kamakhya Temple: Distance and How to Reach Both',
    sub: 'The actual distance, roughly how long it takes, and why most people never need to make the trip twice.',
    h2: 'The Short Answer',
    intro: [
      'Mayong and the Kamakhya Temple are about **80 kilometres apart** by road, which is a little under two hours in ordinary traffic and closer to two and a half during the Ambubachi Mela or the Guwahati evening peak. They are in different districts: Mayong is in Morigaon, and the Kamakhya Temple is in Guwahati, on Nilachal Hill.',
      'That distance is the single most common practical question people have, and the reason it matters is this: Deepak Tantrik practises at both. The Kamakhya office is at Malakhuwa, Guwahati, pin 781010. The Mayong Ashram is in Morigaon, pin 782411. In most cases you are asked to come to one, not both, and the choice is made after the first consultation based on which remedy the situation calls for.',
    ],
    image: '/images/portrait.jpg',
    imageAlt: 'Map of Assam showing Mayong in Morigaon district and the Kamakhya Temple in Guwahati, about 80 km apart',
    deep: [
      {
        h2: 'Reaching the Kamakhya Temple, Guwahati',
        p: [
          'Guwahati is the larger city and the usual arrival point, connected by rail and by air from across India. From the city, Nilachal Hill is a short journey: the temple is a ten to fifteen minute walk uphill from where you can be dropped off, and there is effectively no parking at the top. Autos and taxis cover the approach, though on Mela days the roads around the hill close to through traffic and you may be walking the last stretch.',
          'If you are coming by train, the city\'s main station is in the middle of town and the temple area is a reasonable distance from it, so a taxi or auto for the final leg is normal. The station area is a common arrival point for people who book accommodation in the city centre and then walk or take an auto to the hill.',
        ],
      },
      {
        h2: 'Reaching Mayong, Morigaon',
        p: [
          'Mayong is a small village in Morigaon district, so there is no station or airport to speak of. It is reached by road from Guwahati, which is why the road distance rather than the straight-line distance is the number that matters in practice. Road connections in the region vary with the season and with construction work, so allow for the journey taking longer than the map suggests.',
          'Mayong is best approached knowing in advance that you are going there. There is no reason to arrive in the village without a confirmed time and a confirmed person to meet, because it is a small place and the ashram is not a walk-in attraction in the way the temple is.',
        ],
      },
      {
        h2: 'Why you may not need to make the journey at all',
        p: [
          'This is the practical point that most travel guides miss. The first consultation does not require travel. It can be taken by phone or WhatsApp on +91 9706801250, and in many cases that conversation resolves the question: the situation is assessed, the remedy is described, the cost is stated, and in a number of instances the honest answer is that no remedy is needed.',
          'Where a remedy is required, it is performed in person, but at one location rather than both. Remedies tied to the temple are done at Kamakhya, which is where the site-specific authority is. Work that draws on the Mayong lineage tradition is done at the ashram, which is where that authority is. Travelling to both would mean paying for a journey twice to receive an assessment you can have in five minutes on a phone.',
        ],
      },
      {
        h2: 'If you are coming for the Mela and the ashram',
        p: [
          'Some people come to Guwahati for the Ambubachi Mela and want to visit the Mayong Ashram as well, which is entirely reasonable given the distance. Two things make that straightforward. First, fix the ashram visit for a different day from the Mela, since the temple is closed to the public for roughly four days and the roads are unusable then. Second, plan the ashram visit before or after rather than during the busy period, when every road around Nilachal Hill is congested.',
          'Tell us both dates in advance on +91 9706801250 and the arrangement can be made sensibly rather than discovered on the day.',
        ],
      },
      {
        h2: 'Which location suits which kind of work',
        p: [
          'Because both are within reach of the other, people often assume the location is arbitrary. It is not, and the reason is that the remedy has to be performed where the relevant authority sits.',
          'Work tied to the temple is done at Kamakhya. That includes remedies that depend on the site itself, the Ambubachi period, and anything involving the temple as a Shakti Peetha. Work that draws on the Mayong lineage tradition is done at the ashram, which is where the seven-generation practice, the palm-leaf materials and the family puja are. A black magic removal may involve elements of both, in which case the location is chosen on the assessment rather than by default, and you will be told which and why before travelling.',
          'What is done at neither, because it needs no location at all, is the first consultation. That conversation is the whole of the assessment, and it can happen on the phone. If the honest outcome is that nothing needs doing, that is the end of the matter rather than the start of a second journey.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the distance from Mayong to Kamakhya Temple?',
        a: 'About 80 kilometres by road. It is a little under two hours in ordinary traffic and can be closer to two and a half during the Ambubachi Mela or the Guwahati evening peak. Mayong is in Morigaon district, the temple is in Guwahati.',
      },
      {
        q: 'Do I need to visit both Mayong and Kamakhya?',
        a: 'Usually not. The first consultation can be taken by phone or WhatsApp on +91 9706801250, and a remedy is performed at one location, chosen according to the case. Travelling to both usually means paying for the journey twice to get an assessment you can have by phone in five minutes.',
      },
      {
        q: 'Is there parking at the Kamakhya Temple?',
        a: 'Effectively no. Nilachal Hill is climbed on foot in about ten to fifteen minutes. During the Ambubachi Mela the approach roads close to through traffic, so expect to walk the final stretch.',
      },
      {
        q: 'How do I reach Mayong from Guwahati?',
        a: 'By road. Mayong is a small village in Morigaon district with no station or airport, so it is reached from Guwahati by car. Road conditions vary by season, so allow more time than the map suggests, and arrange the visit in advance rather than arriving without a confirmed time.',
      },
    ],
    testimonial: null,
    related: ['best-tantrik-mayong', 'ambubachi-mela-kamakhya', 'about-kamakhya-temple-guwahati', 'tantrik-baba-guwahati'],
  },
];

module.exports = GUIDES_EXT;
