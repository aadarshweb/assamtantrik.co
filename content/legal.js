// content/legal.js
// The four site-governance pages: privacy policy, terms and conditions,
// disclaimer, and the developer declaration.
//
// WHY THESE ARE noindex AND OUT OF THE SITEMAP
// ---------------------------------------------
// These are furniture, not content. Nobody searches for "privacy policy" while
// deciding who to call about black magic, and the site already competes for its
// real queries with 35 sitemap URLs. Submitting a legal page is:
//   - an invitation to rank, which wastes crawl attention on four pages that can
//     never win a click-through, and
//   - a contradiction, because a sitemap is a request to index. Listing a URL
//     that says noindex in its own meta asks Google to honour one instruction
//     or the other; the safe outcome is that neither is trusted.
//
// So: crawlable, linked from the footer of every ENGLISH page, noindex, and
// absent from sitemap.xml. verify.js section 13 asserts all four halves of that
// contract, and section 3 asserts the sitemap still lists every indexable page
// exactly once and no noindex page at all.
//
// They are deliberately ENGLISH ONLY. Per AGENTS.md a page is `hasHi: true`
// only when a real Devanagari translation exists. None of these has one, so no
// `hi` hreflang is emitted and the Hindi footer does not link to them. Inventing
// a Hindi legal document that nobody reviewed would be far worse than a Hindi
// visitor clicking through to English.
//
// DO NOT USE RAW HTML IN THE COPY BELOW
// ui.rich() escapes the text and re-allows only <strong> and <em>. An authored
// <a href> is escaped and renders as literal text on the page - there are ten
// such live bugs on the site today, in about.html, contact.html, services.html,
// verify.html and two guides. Link by naming the page in prose instead, and let
// the document index in content/render.js do the linking.
//
// ASCII ONLY. verify.js section 7 reads a raw em-dash, en-dash, smart quote or
// ellipsis as mojibake, because their UTF-8 bytes match the corruption pattern.
// No \u2014, no \u2019, no \u2026. Entities are the only way to get a glyph in.

module.exports = [
  // =====================================================================
  {
    slug: 'privacy-policy',
    file: 'privacy-policy',
    kind: 'legal',
    navLabel: 'Privacy Policy',

    // The two flags that take a page out of the sitemap. Single source of
    // truth: build.js reads `noindex`, and indexablePages() filters on it, so
    // the two can never disagree.
    noindex: true,

    // Unused while the page is noindex, set so that flipping noindex off is a
    // one-value change rather than a rewrite.
    priority: '0.2',
    changefreq: 'yearly',
    hasHi: false,

    // Edit this when the policy is revised. It is a deliberate hand-maintained
    // value, never BUILD_DATE: an auto-stamping "last updated" is a claim that
    // the page was reviewed on every build, which nobody does.
    effectiveDate: '30 September 2026',

    title: 'Privacy Policy for Website Users | Deepak Tantrik',
    desc:
      'How Deepak Tantrik handles your data when you call +91 9706801250, message or email. What is kept, what is never shared, and how to ask for deletion.',
    keywords: [
      'privacy policy',
      'data privacy assamtantrik.co',
      'how we collect your information',
      'cookies and browsing data',
      'personal data protection duties',
      'confidential consultation records',
      'visitor data request',
      'no analytics on this website',
    ],
    h1: 'Privacy Policy for assamtantrik.co',
    sub: 'What happens to the information you give us when you call, message or email, written in plain language rather than in the usual small print.',

    lead: {
      h2: 'The short version',
      p: [
        'This is a small website with no analytics package, no advertising network, no membership scheme and no database behind it. It exists to introduce a spiritual practice and to let a visitor make contact. The only personal information it involves is what you choose to hand over, and the only person who reads it is Deepak Tantrik.',
        'Everything below is the full account of that, written to be read rather than to be scrolled past. If any part of it is unclear, call +91 9706801250 and ask. If a sentence here turns out to be wrong, the telephone is faster than the email.',
      ],
    },

    deep: [
      {
        h2: 'Who this policy covers',
        p: [
          'It applies to anyone who uses assamtantrik.co, including its Hindi pages, and to anyone who reaches the practice by telephone, on WhatsApp, by email, or in person at either of its two locations. It also covers the information a visitor hands over during a consultation, because that is the part that actually matters.',
          'It does not cover a third-party website you may have arrived from. Those sites have their own policies, this practice has no control over them, and nothing here should be read as a statement about how any other site handles your details.',
        ],
      },
      {
        h2: 'What you give us, and how you give it',
        p: [
          'A telephone call to +91 9706801250 reveals your number to the network, and everything you decide to say during the conversation to whoever takes the call. A WhatsApp message to the same number creates a chat held on WhatsApp, which is operated by Meta under Meta\'s own privacy policy rather than under ours. An email to deepaktantrik@assamtantrik.co creates a message in a mailbox that the practice controls.',
          'The contact form on this website is not connected to a server. It does not store, transmit, forward or validate anything, and using it sends your message nowhere. That is a deliberate limitation rather than an oversight, and it is why the same page asks you to telephone or message instead.',
          'A visit to either location produces no written record of you at all. Nobody is asked for a name at the door, nobody is photographed, and nothing about a visitor is described to anybody who arrives afterwards.',
        ],
      },
      {
        h2: 'What is deliberately not collected',
        p: [
          'There is no Google Analytics, no other analytics package, and no tag manager here. This site installs no cookie of its own, keeps no profile of any reader, and stores no record of which pages a particular person has looked at. There is no newsletter, no mailing list, and no mechanism by which you can be enrolled in anything by visiting a page.',
          'No payment instrument is collected through this website. No password, one-time password, card PIN, account number or scan of an identity document is ever requested through any page on this site, and none will be, by anyone claiming to speak for this practice.',
        ],
      },
      {
        h2: 'How your information is used',
        p: [
          'For one purpose: to answer you, and to give the consultation you asked for. If you telephone about a relationship difficulty and then telephone again two years later about a completely different matter, what you said the first time is not held against you, not repeated to anyone, and not used to steer the second conversation.',
          'It is not sold, rented, traded, licensed or bartered. There is no third-party marketing agency, no advertising broker and no data reseller anywhere in this arrangement, so there is no commercial reason for your details to move.',
        ],
      },
      {
        h2: 'Confidentiality of what is said in a consultation',
        p: [
          'What you disclose is treated as confidential, and that is a working rule of the practice rather than a courtesy extended reluctantly. Most people who approach a tantra practitioner are dealing with a relationship, a marriage or a family matter, and none of it is repeated to anyone else, in public or privately.',
          'Two honest limits. A lawful order from a court, a police officer or a government authority will be complied with, because the practice is not in a position to refuse one. And if there are reasonable grounds to believe that somebody in front of us is in immediate danger, that particular piece of information is not withheld in order to protect the confidence.',
        ],
      },
      {
        h2: 'Third-party services this page loads',
        p: [
          'Web fonts are fetched from Google, so a browser contacts Google when any page opens, and a Google Maps frame is embedded to show where the Kamakhya Temple is, so a browser contacts Google for that as well. Both connections necessarily carry the address of the machine making the request, and the map connection carries the page the request came from. Neither was added as a tracker and neither is under the control of this practice.',
          'There is no consent banner on this site because there is nothing here for one to be honest about. A content blocker or a browser privacy setting will stop both third-party connections without taking a single word off the page, and doing so will not stop the telephone number from working.',
        ],
      },
      {
        h2: 'Who can see it besides the practice',
        p: [
          'The hosting provider carries the technical connection in order to deliver the page, and handles the domain and the email account. The telephone network, and the operator of WhatsApp, each see the call or the message as part of running their own service. Every one of those parties is obliged to handle what it carries under its own published terms, which are the ones to read for that part of the journey.',
          'Beyond that list, nobody. There is no agency, no broker and no third party between a visitor and this practice, which is why a request described below can actually be answered rather than forwarded around.',
        ],
      },
      {
        h2: 'How long records are kept',
        p: [
          'A number left with the practice in order to be called back is held until the callback has happened and the matter is settled, and is then cleared from the working handset. An email stays in the mailbox for as long as it remains of use and is not forwarded outside the practice under any circumstances.',
          'A WhatsApp conversation lives in two places that both of you control: the chat history on your own phone, and the handset of the person you spoke to. That second copy is kept for as long as the relationship between client and practitioner continues, and would not travel to a new owner of the practice as part of any sale.',
        ],
      },
      {
        h2: 'Your rights, and how to use them',
        p: [
          'A visitor may ask what is held, ask for a correction, ask for it to be erased, or ask to be left alone. Any of those is a reasonable request. It is answered at no cost, without argument, and without asking for a reason.',
          'Send it by calling +91 9706801250 or by emailing deepaktantrik@assamtantrik.co from the address originally written to, so the request can be matched against what is actually on file. State the request in the opening line, because that is what decides how quickly it can be dealt with. A straightforward request is normally answered within a few days, and not instantly, because this is a working practice and not a compliance department with a rota.',
          'If the answer is unsatisfactory, a complaint may be made to the data protection authorities in India. The request is better made to this practice first, since the overwhelming majority of them are something that can be put right inside a week.',
        ],
      },
      {
        h2: 'Security, described accurately',
        p: [
          'A message typed into an ordinary web form travels unencrypted, which is one of several reasons the form on this site is connected to nothing. Telephone calls and WhatsApp conversations are encrypted while they cross the network, which protects them from being read in transit, and neither is protected from being read on the handset that receives it.',
          'No website can promise that information sitting on a phone is beyond compromise, and this one will not pretend otherwise. Handsets are lost and they are stolen. The practical protection is the same as it has always been: be careful with what is typed into an open messaging application, and do not send identity papers, card details or account numbers to anybody, including this practice. That request will never be made of you.',
        ],
      },
      {
        h2: 'Visitors below the age of eighteen',
        p: [
          'Both this website and the services described on it are intended for adults. Somebody who has not yet turned eighteen is asked to involve a parent or a guardian before making contact, and not to send personal details of their own accord.',
        ],
      },
      {
        h2: 'If this policy is revised',
        p: [
          'It will be revised when the practice or the technology around it changes. The date carried at the head of this page is the last occasion it was written from end to end, and a change of substance will be recorded there rather than quietly made.',
        ],
      },
      {
        h2: 'How to raise a question about your data',
        p: [
          'The practice can be reached at Kamakhya Temple Road, Malakhuwa, Guwahati 781010, and at the Mayong Ashram, Morigaon 782411. Telephone and WhatsApp are both served by +91 9706801250, and the email address is deepaktantrik@assamtantrik.co. Say in the first line that the subject is a data request rather than a consultation and it will be treated as one.',
        ],
      },
    ],
  },

  // =====================================================================
  {
    slug: 'terms',
    file: 'terms',
    kind: 'legal',
    navLabel: 'Terms and Conditions',
    noindex: true,
    priority: '0.2',
    changefreq: 'yearly',
    hasHi: false,
    effectiveDate: '30 September 2026',

    title: 'Terms and Conditions of Use | Deepak Tantrik Assam',
    desc:
      'The rules for using this website and booking a consultation with Deepak Tantrik on +91 9706801250. Age limits, fees, cancellations and liability.',
    keywords: [
      'terms and conditions',
      'terms of service tantrik website',
      'user responsibilities',
      'age restriction eighteen',
      'no guarantee of results terms',
      'cancellation and refund policy',
      'booking and appointment terms',
      'intellectual property website',
    ],
    h1: 'Terms and Conditions of Use',
    sub: 'The rules for using this website and for arranging a consultation, written to be short enough to read rather than long enough to skip.',

    lead: {
      h2: 'Accepting these terms',
      p: [
        'These terms apply to everybody who uses assamtantrik.co and to everybody who arranges a consultation with Deepak Tantrik. Opening the site, or telephoning the practice on +91 9706801250, amounts to accepting them. If any of it is unacceptable, the request is simply to close the page and not to arrange anything.',
        'They are written to be read. Nothing is buried, and the clauses that matter are the ones stated plainly rather than the ones lost at the end of a long paragraph.',
      ],
    },

    deep: [
      {
        h2: 'What this practice is',
        p: [
          'A spiritual and religious practice offering tantric and Vedic astrological guidance, remedies and consultations, run from two physical locations in Assam. It is not a medical practice, a law firm, an accountancy firm or a financial adviser, and it does not hold itself out as one.',
          'The practice is independent of the Kamakhya Temple administration and is not an official service of that temple. It is run on its own authority, and no part of it should be read as carrying the temple\'s endorsement.',
        ],
      },
      {
        h2: 'Who may arrange a consultation',
        p: [
          'Anybody of eighteen years or above, on their own behalf, may contact the practice. A consultation may also be arranged for a child, or for somebody unable to speak for themselves, by a parent, a spouse or a legal guardian, who then acts for them throughout.',
          'A person below eighteen is asked to involve a guardian before making contact rather than being refused outright, and the guardian is the party the practice will deal with.',
        ],
      },
      {
        h2: 'Arranging a consultation',
        p: [
          'The first conversation costs nothing and carries no obligation of any kind afterwards, including the obligation to go ahead. It exists so that the situation can be understood and an honest view given on whether a remedy is appropriate, and a straight answer is given when one is not.',
          'Appointments are made by telephone or WhatsApp on +91 9706801250, or in person at either location. A consultation is not treated as confirmed until it has been arranged directly, and nothing in this website constitutes an appointment.',
        ],
      },
      {
        h2: 'Fees and how they are settled',
        p: [
          'Where a specific remedy is appropriate, what it involves and what it costs are explained in full before any work begins, and the figure does not change afterwards. Nobody is quoted a price who has not first discussed the situation, and no payment is demanded in advance of that conversation.',
          'Payment is made directly to the practitioner. No payment link, request or code issued by a stranger is genuine, and no such request will ever be made in the name of this practice.',
        ],
      },
      {
        h2: 'No promise of any result',
        p: [
          'Nothing in any consultation, remedy or ritual performed by this practice is a guarantee of any outcome. No practitioner of tantra or astrology can honestly promise control over another person or over events, and this one does not attempt it. A claim of certain results, a fixed date by which a difficulty will end, or complete success is not something this practice is capable of making and is not something it will make.',
          'A visitor is entitled to be told what a remedy is traditionally held to achieve and what the practice genuinely believes about a case. That is different from a promise, and the distinction is not blurred anywhere in this website.',
        ],
      },
      {
        h2: 'What is expected of you in return',
        p: [
          'Information given during a consultation is to be described truthfully, because an inaccurate account of a situation produces an inaccurate reading of it and wastes the consultation. A person withholding what they know in order to see a particular result will get a reading of the situation as presented, not as it is.',
          'This website and the practice are not to be used to harass, threaten, defame or impersonate anybody, to send unlawful material, to attempt to disrupt the site, or to attempt any unauthorised entry into it. Nobody is to be impersonated, and no impersonation of the practitioner or of a client will be tolerated.',
        ],
      },
      {
        h2: 'What this website contains, and what it does not',
        p: [
          'It carries general information about a spiritual practice, its services and its background. It is not a diagnosis, a professional opinion, or a personal recommendation for any individual, and no part of it has been written with any particular visitor in mind.',
          'It is provided as it stands, without a warranty that it will always be available, always complete, or always free of error. The dependable way to reach the practice is the telephone number, and that has not changed.',
        ],
      },
      {
        h2: 'Testimonials and accounts from clients',
        p: [
          'Accounts published on this site are reproduced with the agreement of the person who gave them, and are identified by a first name and a place only, because that is the full extent of what those clients were willing to be known by. They are presented as what one person reported, and not as evidence of what will happen for anybody else.',
          'No aggregate rating, star score or review total is published here, because the practice does not have a verifiable public source for one and would rather publish nothing than publish a figure that cannot be checked.',
        ],
      },
      {
        h2: 'Your use of this website',
        p: [
          'You may read the site, print a page for your own reference, and share a link to it with somebody else. You may not copy substantial parts of it, republish it, scrape it, or reproduce it commercially without written permission.',
          'The site is operated for the benefit of its visitors and is not a platform for others to trade on, and no part of it may be presented in a way that suggests an association with the practice that does not exist.',
        ],
      },
      {
        h2: 'Intellectual property',
        p: [
          'The text, layout, design, photographs and other material on this website belong to the practice, and reproduction without permission is not permitted. A client retains the right to use, describe and discuss in their own words anything that was said to them in a consultation; that belongs to them and no licence is required for it.',
          'A person who photographs the practitioner, a location or a ceremony for private use does not acquire any right to publish those images commercially, and should not do so without asking.',
        ],
      },
      {
        h2: 'Third-party links',
        p: [
          'Any link to a website outside this one is provided for convenience and is not an endorsement of it. The destination is not under the control of the practice, and the practice accepts no responsibility whatsoever for what is found there, what it collects, or what it does.',
        ],
      },
      {
        h2: 'Liability, and where its honest limits are',
        p: [
          'This practice provides a spiritual and religious service. It is not a provider of medical, legal, psychological or financial services, and nothing on this website or in any consultation amounts to advice of any of those kinds. A remedy, a ritual or a reading of a horoscope is not a substitute for a doctor, a lawyer, a financial adviser or a counsellor, and the practice will say so where a case requires one.',
          'To the extent that the law of India permits it to be limited, no liability is accepted for loss arising out of reliance upon spiritual, religious or astrological guidance, or out of anything done or not done as a result of a consultation. Nothing in this clause attempts to exclude any liability that cannot lawfully be excluded, and nothing in it reduces any right a visitor has under Indian consumer law.',
        ],
      },
      {
        h2: 'Bringing a consultation to an end',
        p: [
          'A consultation may be ended at any time by either party, without giving a reason and without charge for the portion not carried out. A person is under no obligation to continue with a remedy once it has begun, and a straight request to stop is honoured without argument.',
          'Where work has been carried out and paid for, that work remains the client\'s. Where work has been paid for but not carried out, the reasonable cost already incurred may be retained.',
        ],
      },
      {
        h2: 'If these terms are revised',
        p: [
          'These terms may be revised as the practice or the law around it develops. The date at the head of this page records the last complete revision, and continued use of the website or the practice after that date is taken as acceptance of the version then in force.',
        ],
      },
      {
        h2: 'Which law applies',
        p: [
          'These terms are governed by the law of India, and the courts at Guwahati in the state of Assam have jurisdiction over a dispute arising out of them. Any consumer protection applying to a person using the services in India continues to apply regardless of this clause.',
          'If any single clause of this document were held by a court to be unenforceable, the remainder of it would continue in force exactly as written.',
        ],
      },
      {
        h2: 'Raising a problem',
        p: [
          'A complaint about anything to do with the practice should be put to Deepak Tantrik first, on +91 9706801250 or at deepaktantrik@assamtantrik.co, or in person at either location. Nothing on this website is intended to prevent that conversation, and the practice would much rather be told about a problem than have it taken elsewhere.',
        ],
      },
    ],
  },

  // =====================================================================
  {
    slug: 'disclaimer',
    file: 'disclaimer',
    kind: 'legal',
    navLabel: 'Disclaimer',
    noindex: true,
    priority: '0.2',
    changefreq: 'yearly',
    hasHi: false,
    effectiveDate: '30 September 2026',

    title: 'Disclaimer | Deepak Tantrik, Kamakhya and Mayong',
    desc:
      'Deepak Tantrik, +91 9706801250, gives spiritual guidance, not medical, legal or financial advice, and promises no result. Read the full disclaimer.',
    keywords: [
      'disclaimer',
      'astrology disclaimer india',
      'no medical or legal advice',
      'tantric remedies disclaimer',
      'outcome of spiritual remedies',
      'third party links disclaimer',
      'accuracy of published material',
      'entertainment and belief',
    ],
    h1: 'Disclaimer and Limits of This Site',
    sub: 'The limits of what any spiritual practice can honestly offer you, stated before you decide rather than afterwards.',

    lead: {
      h2: 'Please read this before deciding',
      p: [
        'What is offered here is spiritual and religious guidance, founded on tantra and on Vedic astrology. It is a genuine service with a long history in Assam, and it is taken seriously by the person giving it. It is also not medicine, not law, not finance, and not a guarantee of anything, and no page written for you to read is going to pretend otherwise.',
        'The rest of this page sets the limits out plainly. A person who understands what a remedy can and cannot achieve is in a far better position to judge one than a person who has been promised everything.',
      ],
    },

    deep: [
      {
        h2: 'The nature of the service',
        p: [
          'Consultations here are spiritual, religious and astrological in character. They draw on Mayong tantra, on Hindu tradition and on Vedic astrology, and they are offered in that spirit. They are not a professional service of any regulated discipline, and they are not represented as one anywhere on this website.',
        ],
      },
      {
        h2: 'Not medical, legal, psychological or financial advice',
        p: [
          'Nothing published on this website, and nothing said in a consultation, is medical advice, a diagnosis, or a treatment. No medicine, no treatment and no therapy should be started, stopped or altered on the strength of anything read here or heard there. If somebody is unwell, a qualified doctor is a far quicker route than any remedy and is the correct one to take.',
          'The same applies to the rest. A spiritual practice cannot advise on a court case, cannot advise on an investment, and does not substitute for a psychiatrist or a counsellor. Where a difficulty is genuinely medical, legal, financial or psychological, this practice will say so plainly and will point at the right kind of professional instead of trying to deal with it.',
        ],
      },
      {
        h2: 'No outcome is promised',
        p: [
          'No result, benefit, cure or improvement of any kind is promised, implied or guaranteed by anything on this website or in any consultation. Nobody who practises tantra or astrology honestly can promise control over another human being or over events in the world, and a claim to the contrary is either ignorance or something worse.',
          'What can honestly be offered is an assessment of a situation, an explanation of what tradition holds on the subject, and a remedy performed with care. What comes of that is not promised to anyone, including to the person giving the consultation.',
        ],
      },
      {
        h2: 'One person\'s experience is not a forecast',
        p: [
          'Accounts published on this site describe what particular individuals said happened to them. They are not a prediction, not a statistical claim, and not a basis for expecting the same result. A remedy that has helped one person in one situation is no guarantee in another situation, and this has nothing to do with the honesty of the account itself.',
        ],
      },
      {
        h2: 'Astrology and tantra are a belief',
        p: [
          'They are held sincerely, and they are widely held in Assam and across India for many centuries. They are also a faith and a tradition rather than a measurable science, and treating anything here as established fact would misrepresent them. A reader is free to accept the practice, to leave it, or to come to a different conclusion, and all three are equally reasonable positions to take from this website.',
        ],
      },
      {
        h2: 'How accurate this website is',
        p: [
          'Every page here is written and checked, and the contact details, the two addresses and the single telephone number are identical on every single page of the site. Even so, circumstances change. Fees, timings, availability and practice arrangements can all alter, and this website is not updated the instant that happens.',
          'Nothing published here has been prepared for any individual in particular, because it could not be. General information cannot take account of a private situation, and several minutes of reading on a phone is not a substitute for a conversation.',
        ],
      },
      {
        h2: 'Decisions remain the visitor\'s',
        p: [
          'Any decision to arrange a consultation, to begin a remedy, to continue one, or to stop, is entirely the visitor\'s own. Nothing on this website is intended to influence such a decision through pressure, through a manufactured deadline, or through a claim of authority that the practice does not hold.',
        ],
      },
      {
        h2: 'Other websites',
        p: [
          'Where this site links outwards, the destination is a separate publication under separate control. Nothing published there is the work of, or the responsibility of, this practice, and no view is expressed about anything found at the other end of a link.',
        ],
      },
      {
        h2: 'Photographs and ritual images',
        p: [
          'Images of the practitioner, of the locations and of ceremonies on this site are illustrative. They record particular moments and are not evidence of the frequency with which anything is performed, of the attendance at any event, or of the availability of any remedy at any particular time.',
        ],
      },
      {
        h2: 'Availability of this website',
        p: [
          'The site is offered as it stands. No promise is made that it will never be unavailable, that no page will ever carry an error, or that it will stay online indefinitely. For that reason this website is deliberately not the only way to reach the practice: +91 9706801250 answers directly, at both locations, and that number is the dependable one.',
        ],
      },
      {
        h2: 'If you take issue with any of this',
        p: [
          'That is a fair position to hold, and nobody is obliged to accept the practice or to use it. The one thing that is asked is that disagreement be taken to the practice directly, on +91 9706801250 or at deepaktantrik@assamtantrik.co, rather than settled by assumption. Somebody who disagrees after a conversation is welcome to take their custom elsewhere without any hard feelings at all.',
        ],
      },
    ],
  },

  // =====================================================================
  // This page protects the DEVELOPER, not the business. Read the wording
  // carefully before editing: the useful part of a scope declaration is the
  // allocation of responsibility, and the risk of writing one is that it starts
  // to look like the business is disclaiming its own obligations and damages
  // the client the developer was paid to work for. Every clause below therefore
  // names the CLIENT as the responsible party and the developer as the party
  // outside the scope, and the closing clause makes clear that nothing here
  // takes a visitor's legal rights away from the client.
  {
    slug: 'developer-declaration',
    file: 'developer-declaration',
    kind: 'legal',
    navLabel: 'Developer Declaration',
    noindex: true,
    priority: '0.2',
    changefreq: 'yearly',
    hasHi: false,
    effectiveDate: '30 September 2026',

    title: 'Developer Declaration and Handover | Deepak Tantrik',
    desc:
      'This website was built by an independent developer and handed to the client in full. Technical build only. For a service, call +91 9706801250.',
    keywords: [
      'developer declaration',
      'website developed by independent developer',
      'handover of website to client',
      'developer not responsible for services',
      'technical scope of work',
      'website ownership transferred',
      'maintenance after handover',
      'no involvement in business operations',
    ],
    h1: 'Developer Declaration',
    sub: 'Who built this website, what exactly was built, and where responsibility sits once it was handed over.',

    lead: {
      h2: 'This page is about the website, not about the practice',
      p: [
        'assamtantrik.co was built by an independent web developer, engaged on a commercial instruction by the client who owns this website, and was handed over to that client in full when the work was finished. The developer carried out the technical work that was asked for, and nothing beyond it.',
        'This page records that plainly, because a website can easily leave the impression that whoever built it is also the person running the business behind it. That is not the position here, and the distinction matters to anybody who wants to be clear about who they are dealing with before they send a message or a payment.',
      ],
    },

    deep: [
      {
        h2: 'Who built this website',
        p: [
          'This website was designed, built and put online by an independent web developer, working to a commercial instruction from the client. The client is the party that owns assamtantrik.co and that operates the spiritual practice described throughout it.',
          'The developer is a party entirely separate from the client. The developer is not Deepak Tantrik, and is not an employee, agent, partner, associate, representative or authorised spokesperson of the client. The developer holds no authority to speak for the client, to quote for the client, to make a commitment on the client\'s behalf, or to receive anything on the client\'s behalf.',
        ],
      },
      {
        h2: 'What the work actually was',
        p: [
          'The work was technical, and only technical, of the kind the client asked for. It consisted of building the pages of the website, laying them out and styling them, making them work on a mobile phone as well as on a desktop, wiring up the navigation, the map frame and the contact links, and deploying the finished site so that it is reachable on the public internet.',
          'Whatever was asked for technically is what was built. The developer\'s responsibility covers that build and stops there. Responsibility for what the website says rests entirely with the client, because only the client knows whether any of it is true: the claims made about the practice, its history and lineage, its years of experience, its addresses, its testimonials and the description of every remedy offered.',
          'The material to work from was supplied by the client, and no means of independently checking it was available to the developer. A developer can build a site that loads quickly and reads well. A developer cannot certify a life story.',
        ],
      },
      {
        h2: 'The handover, and who owns the result',
        p: [
          'On completion, the website was handed over to the client in full. From the moment of handover, the site, its design, its code, its content, its domain and its hosting arrangement are the property of the client, who has been free since to publish, edit, extend, maintain or replace any part of them without reference to the developer.',
          'The handover is complete and is not partial. The developer holds no continuing access to the website, its hosting account, its domain or its source code, does not retain a copy for any purpose connected with the business, and has not asked for access. Nothing in the running of the site passes through the developer after handover.',
        ],
      },
      {
        h2: 'The developer is not the practice',
        p: [
          'Deepak Tantrik is the client. The developer did not found, own, manage, operate, represent or work for the practice, at any point before handover or since. The developer holds no qualification in tantra or in astrology, has not been trained in either, and does not conduct consultations, read horoscopes, perform rituals or offer spiritual advice of any kind.',
          'Nothing published on this website should be understood as the developer speaking about the practice, endorsing it, or vouching for it. Where the site describes the practice, its lineage, its remedies, its results or its experience, that is the client\'s own account of the client\'s own business, published on the client\'s instruction.',
        ],
      },
      {
        h2: 'The developer is not responsible for the services',
        p: [
          'The developer offers no spiritual, religious, astrological, medical, legal, psychological or financial service of any kind, gives no consultation of any kind, sells nothing, and takes no payment for anything. Every service described on this website is the client\'s, and is offered by the client alone.',
          'The developer did not supply, endorse, recommend, guarantee, verify or quality-check any remedy, ritual, reading, product or consultation described anywhere on this site, and takes no part in providing any of them. Where a service described here is not delivered as described, that is a matter for the client to put right, and the client is the party to approach about it.',
        ],
      },
      {
        h2: 'The developer is not responsible for any outcome',
        p: [
          'No result, benefit, remedy, cure or outcome of any kind is promised by the developer, and none could be. The developer has no control over the practice, over the guidance it gives, over the remedies it performs, over who attends it, or over what any of that produces for any person.',
          'The developer is not answerable for the result of any consultation, remedy or ritual, for anything the client or a client of the client does or fails to do, or for any decision a visitor takes or does not take after reading this website. The developer\'s accountability is limited to the technical build that was delivered and handed over, and to nothing else.',
        ],
      },
      {
        h2: 'The developer is not responsible for the contact details, or for enquiries',
        p: [
          'The telephone number, the WhatsApp number, the email address, the postal addresses and the opening hours published on this website all belong to the client and are managed by the client alone. The developer does not own, operate, answer, monitor or administer any of them, and has no access to the telephones, the inbox or the accounts behind them.',
          'Whoever telephones, messages, emails or calls in person is contacting the client, not the developer. The developer does not receive such an enquiry, does not see the sender\'s details, and cannot answer a question about a service, forward the message, arrange an appointment, accept a payment or act on anybody\'s behalf. An enquiry that reaches the developer cannot be dealt with by the developer, and will be passed to the client only if the client separately asks for that.',
        ],
      },
      {
        h2: 'No enquiry, payment or personal data reaches the developer',
        p: [
          'No enquiry, booking, payment, complaint or item of personal information relating to a visitor or to a client of the practice reaches the developer at any point after handover, and none is recorded by the developer. The developer holds no client list, no order history, no payment record, and no access to any conversation taking place on the number published on this site.',
          'The way in which personal information given to the practice is handled is set out in the privacy policy published on this website, and that description is the client\'s responsibility rather than the developer\'s. The developer\'s involvement in this project ended at handover, before any such information came into existence.',
        ],
      },
      {
        h2: 'What the developer did not verify',
        p: [
          'The developer was not asked to check, and did not check, whether the claims made on this website are accurate. That includes the history and lineage of the practice, the length of experience claimed, the addresses and the telephone number, the accounts published from clients, and the description of every remedy offered. Verifying any of that was never part of the instruction and was not possible from the outside.',
          'The developer was likewise not asked to check, and did not check, any professional registration, licence or qualification, because this practice does not present itself as a provider of medicine, law, finance or psychology and makes no such claim to be registered for any of them.',
        ],
      },
      {
        h2: 'Nothing further is undertaken after handover',
        p: [
          'The work ended at handover. Unless the client has separately agreed something further in writing, the developer does not host, maintain, update, monitor, back up, secure, optimise or support this website, does not make changes to it, and does not receive notification of changes made to it.',
          'Any question about the content, the services, the contact details or the running of the practice is a question for the client on +91 9706801250. Any question about the website as a technical artefact is also a question for the client to direct, in the client\'s capacity as its owner.',
        ],
      },
      {
        h2: 'What this declaration is not',
        p: [
          'This page is a statement of scope, published so that no visitor is misled about who stands behind this website. It is not an endorsement of the client or of any service, not a guarantee of anything, not a legal opinion, and not a criticism of the client, the practice or anybody working in it.',
          'It does not attempt to reduce what the client owes to a visitor. Whether a visitor has a claim against the client, and what that claim is worth, is a question of law between the visitor and the client, and is not something a page on a website can decide. Nothing here withdraws any right a visitor has against either party, and nothing here should be read as doing so.',
        ],
      },
      {
        h2: 'If you are reading this about a problem with the website',
        p: [
          'Somebody who arrives here because a page is wrong, out of date or not working should be aware that the developer is no longer the party responsible for the website, which was handed over to the client. It belongs to the client to put it right, and the client is reachable on +91 9706801250 and at deepaktantrik@assamtantrik.co.',
          'Somebody who arrives here with a question about a service, a consultation, a result, a payment or a contact detail has come to the wrong page, and this page cannot answer it. The developer never could. The client is the correct route, at +91 9706801250 and at both locations, and the question deserves an answer from them.',
        ],
      },
    ],
  },
];
