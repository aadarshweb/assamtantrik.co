// content/locations.js
// Location and trust pages. Each owns exactly one cluster, disjoint from
// services.js. `hasHi: false` means: no Hindi page exists, so NO hi hreflang is
// emitted. Never point hreflang at a URL that does not resolve (v4 Step 11.5).

const LOCATIONS = [
  // =====================================================================
  {
    slug: 'best-tantrik-mayong',
    file: 'best-tantrik-mayong',
    kind: 'location',
    priority: '0.9',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Best Tantrik in Mayong, Assam | Deepak Tantrik',
    desc:
      'Best tantrik in Mayong, Assam. Seven-generation Mayong tantra lineage, initiated at Kamakhya. 25+ years. Call +91 9706801250 for a free consultation.',
    keywords: [
      'best tantrik in mayong',
      'best mayong tantrik',
      'mayong best tantrik',
      'top tantrik in mayong',
      'mayong famous tantrik',
      'mayong tantrik reviews',
      'mayong tantrik contact number',
    ],
    h1: 'Best Tantrik in Mayong, Assam',
    sub: "A family practice in Mayong, Assam, with initiation at Kamakhya Temple in Guwahati.",
    h2: 'The Ancient Power of Mayong',
    intro: [
      'Mayong in Morigaon district has a long association with tantra in Assamese folklore, and families there have practised it for generations. Deepak Tantrik was born into one of those families. The practice is not a performance: it is a working tradition of assessment, protection and repair, carried out from the family ashram.',
      'People bring a range of problems: relationships under pressure, business difficulties, family conflict, and situations they describe as a heavy or negative presence. Not all of these call for a remedy. The first conversation is used to separate an ordinary cause from a spiritual one and to explain honestly what, if anything, can be done.',
      'Consultations are confidential and can be taken by phone or WhatsApp. If you plan to visit, the ashram is in Mayong and the other office is at Kamakhya Temple in Guwahati, about 80 kilometres apart. The contact number is +91 9706801250.',
    ],
    image: '/images/religious.jpg',
    imageAlt: 'Mayong tantra ritual lamps and vermilion at the family seat in Mayong',
    deep: [
      {
        h2: 'The Mayong Lineage',
        p: [
          'Mayong\'s reputation rests on a long oral tradition rather than on a single written text. Families in the area preserved practices for protection, healing and conflict resolution, and some of that material was later recorded on palm leaves. Deepak Tantrik\'s training comes from that family line. It is a practical tradition, and it is presented here without the claim that it can explain everything or solve every problem.',
          'Clients come from Assam and from other parts of India, and some consult remotely. The number on this page reaches Deepak Tantrik directly. There is no call centre and no middleman, and the first conversation is free. What you will not hear is a promise of a guaranteed outcome, because no honest practitioner can make one.',
        ],
      },
      {
        h2: 'From Mayong to Kamakhya',
        p: [
          'Deepak Tantrik was born and trained in Mayong and later moved to Guwahati, where he was initiated at Kamakhya Temple. The two locations are part of one practice rather than two competing ones. Where a remedy is appropriate, he will tell you which location suits the case and why. He will also tell you when a problem is not a spiritual one.',
        ],
      },
      {
        h2: 'Distance, Access and How to Contact',
        p: [
          'The practical questions people ask before visiting are usually about distance and access. Mayong is approximately 80 kilometres from Kamakhya Temple in Guwahati, and Deepak Tantrik practises at both locations. His family has practised in Mayong for seven generations, and he was initiated at Kamakhya. For a consultation, call or message +91 9706801250. WhatsApp and voice calls are both available. If you are travelling, say so when you call and you will be told which location is appropriate.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Who is Deepak Tantrik?',
        a: 'Deepak Tantrik was born into a family that has practised Mayong tantra for seven generations and was initiated at the Kamakhya Temple. He works from the family ashram in Mayong and an office at Kamakhya Temple in Guwahati. Contact: +91 9706801250.',
      },
      {
        q: 'What is the distance from Mayong to Kamakhya Temple?',
        a: 'Approximately 80 kilometres. Deepak Tantrik practices at both locations, so you can consult him at the Kamakhya Temple in Guwahati or at his Mayong Ashram in Morigaon, whichever suits you.',
      },
      {
        q: 'Can I consult remotely?',
        a: 'Yes. The first consultation can be taken by phone or WhatsApp on +91 9706801250. The remedy is then performed at whichever of the two locations is appropriate for the case.',
      },
    ],
    testimonial: null,
    related: ['tantrik-baba-guwahati', 'vashikaran-specialist-mayong', 'black-magic-removal-kamakhya', 'husband-wife-dispute-mayong'],

    hi: {
      title: 'मायोंग, असम के सर्वश्रेष्ठ तांत्रिक | दीपक तांत्रिक',
      desc:
        'मायोंग, असम के सर्वश्रेष्ठ तांत्रिक। सात पीढ़ियों की मायोंग तंत्र वंश, कामाख्या से दीक्षित। 25+ वर्ष। +91 9706801250 पर मुफ्त परामर्श लें।',
      keywords: [
        'मायोंग के सर्वश्रेष्ठ तांत्रिक',
        'मायोंग तांत्रिक',
        'मायोंग के प्रमुख तांत्रिक',
        'मायोंग में शीर्ष तांत्रिक',
        'मायोंग प्रसिद्ध तांत्रिक',
        'मायोंग तांत्रिक समीक्षा',
      ],
      h1: 'मायोंग, असम के सर्वश्रेष्ठ तांत्रिक',
      sub: 'मायोंग के प्राचीन और असली आध्यात्मिक उपायों का अनुभव करें, इस क्षेत्र के भरोसेमंद चिकित्सक के साथ।',
      h2: 'मायोंग की प्राचीन शक्ति',
      intro: [
        'मायोंग, असम में तंत्र परंपरा से जुड़ा स्थान, अपनी गहन आध्यात्मिक परंपराओं के लिए जाना जाता है है। लेकिन यहाँ असली मार्गदर्शन पाना कठिन हो सकता है। अपनी गहरी पूर्वज वंश और इन प्राचीन विद्याओं में विशेष विशेषज्ञता के कारण दीपक तांत्रिक को मायोंग के सर्वश्रेष्ठ तांत्रिक के रूप में व्यापक रूप से माना जाता है।',
        'दशकों से मायोंग और उससे आगे के लोगों की सेवा करते हुए, दीपक तांत्रिक सुनिश्चित करते हैं कि मायोंग की पवित्र शक्ति का उपयोग केवल जीवन को बेहतर बनाने के लिए हो। चाहे आप अनसुलझे रिश्तों के संकट, व्यापार में अचानक गिरावट या नकारात्मक ऊर्जा का भारी बोझ झेल रहे हों, उनके मायोंग-विशिष्ट अनुष्ठान तेज़ और राहत देते हैं।',
        'असम की शुद्ध आध्यात्मिक सार से जुड़ें। आज ही गोपनीय परामर्श के लिए दीपक तांत्रिक से संपर्क करें और अंधकार से बाहर निकलकर शांत और समृद्ध जीवन की ओर बढ़ें।',
      ],
      deep: [
        {
          h2: 'मायोंग: जहाँ जादू का जन्म हुआ',
          p: [
            'मायोंग असम की तंत्र परंपरा से जुड़ा है और इसका उल्लेख लोक-परंपरा में मिलता है। मायोंग असम की तांत्रिक परंपरा की अपनी पहचान है। ताड़पत्रों पर लिखित ग्रंथों में बदलाव, उपचार और सुरक्षा से जुड़े अनुष्ठानों का वर्णन है। दीपक तांत्रिक इसी पारिवारिक परंपरा से जुड़े हैं।',
            'दिल्ली, मुंबई, कोलकाता और अन्य राज्यों से लोग उनका मायोंग तांत्रिक कांटैक्ट खोजते हैं। इस पृष्ठ पर दिए नंबर पर फोन करने पर आप सीधे दीपक तांत्रिक से जुड़ते हैं, बीच में कोई बिचौलिया नहीं है।',
          ],
        },
        {
          h2: 'मायोंग से कामाख्या तक: एक पवित्र यात्रा',
          p: [
            'दीपक तांत्रिक मायोंग में पले-बढ़े और बाद में उन्होंने कामाख्या मंदिर में दीक्षा ली। वे गुवाहाटी और मायोंग दोनों स्थानों पर परामर्श देते हैं। प्रेम, विवाह, व्यापार या आध्यात्मिक आक्रमण से जुड़ी समस्याओं में पहले स्थिति का आकलन किया जाता है।',
          ],
        },
        {
          h2: 'मायोंग में तांत्रिक: कामाख्या से दूरी और संपर्क कैसे करें',
          p: [
            'दीपक तांत्रिक का परिवार सात पीढ़ियों से मायोंग में रहा है। परामर्श के लिए यात्रा करने वाले अनेक लोग मायोंग से कामाख्या मंदिर की दूरी पूछते हैं: यह लगभग 80 किलोमीटर है। दीपक तांत्रिक दोनों स्थानों पर सेवा देते हैं, इसलिए आप कहीं से भी परामर्श ले सकते हैं। संपर्क के लिए मायोंग असम तांत्रिक कांटैक्ट नंबर व्हाट्सएप का उपयोग करें: +91 9706801250। व्हाट्सएप और वॉइस कॉल दोनों उपलब्ध हैं।',
          ],
        },
      ],
      faqs: [
        {
          q: 'मायोंग के सर्वश्रेष्ठ तांत्रिक कौन हैं?',
          a: 'दीपक तांत्रिक को मायोंग के सर्वश्रेष्ठ तांत्रिक के रूप में माना जाता है। उनका परिवार सात पीढ़ियों से मायोंग तंत्र में रहा है और उनके पास कामाख्या मंदिर से आधिकारिक दीक्षा है, इसलिए वे दोनों परंपराओं से जुड़े हैं। संपर्क: +91 9706801250।',
        },
        {
          q: 'मायोंग से कामाख्या मंदिर कितनी दूर है?',
          a: 'लगभग 80 किलोमीटर। दीपक तांत्रिक दोनों स्थानों पर अभ्यास करते हैं, इसलिए आप गुवाहाटी के कामाख्या मंदिर या मोरिगांव के मायोंग आश्रम, जो सुविधा हो, वहाँ परामर्श ले सकते हैं।',
        },
        {
          q: 'क्या मैं मायोंग के सर्वश्रेष्ठ तांत्रिक से दूर से परामर्श ले सकता हूं?',
          a: 'हां। पहली बातचीत +91 9706801250 पर फोन या व्हाट्सएप से हो सकती है। इसके बाद उपाय मामले के अनुसार इन दोनों में से उपयुक्त स्थान पर किया जाता है।',
        },
      ],
      testimonial: null,
    },
  },

  // =====================================================================
  {
    slug: 'tantrik-baba-guwahati',
    file: 'tantrik-baba-guwahati',
    kind: 'location',
    priority: '0.9',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Tantrik Baba in Guwahati & Kamakhya | Deepak Tantrik',
    desc:
      'Tantrik baba in Guwahati at Kamakhya Temple. 25+ years of Vedic practice, seven-generation Mayong lineage. Call +91 9706801250 for a free consultation.',
    keywords: [
      'tantrik baba in guwahati',
      'tantrik in guwahati',
      'best tantrik in guwahati',
      'kamakhya mandir tantrik',
      'kamakhya mandir ke tantrik ka number',
      'kamakhya mandir tantrik baba',
      'aghori tantrik in guwahati',
    ],
    h1: 'Authentic Tantrik Baba in Guwahati & Mayong',
    sub: "A Mayong lineage practice, with initiation at Kamakhya Temple in Guwahati.",
    h2: 'A Practice Based at Kamakhya',
    intro: [
      'People in Guwahati bring relationship problems, business difficulties and family conflict to a consultation for reasons that are often practical as well as spiritual. Deepak Tantrik practises at Kamakhya Temple and at his family ashram in Mayong. The first step is a conversation about what is actually happening, not a ritual booked in advance.',
      'He has practised for more than 25 years and was initiated at Kamakhya Temple. The approach is rooted in Jyotish and the Mayong family tradition, and it is deliberately plain: an assessment first, an explanation of what a remedy can and cannot do, and a fixed fee quoted before anything begins. No outcome is guaranteed.',
      'If you are unsure whether your problem is appropriate for a consultation, describe it in your own words. The first consultation is free, and the answer may be that you need a different kind of help. You will be told that honestly rather than sold a remedy.',
    ],
    image: '/images/portrait.jpg',
    imageAlt: 'Deepak Tantrik, tantrik baba in Guwahati practicing near the Kamakhya Temple, Nilachal Hill',
    deep: [
      {
        h2: 'The Kamakhya Temple',
        p: [
          'Kamakhya Temple sits on Nilachal Hill in Guwahati and is one of the 51 Shakti Peethas. The annual Ambubachi Mela draws large numbers of pilgrims, and the site has been central to tantric practice in the region for centuries. Deepak Tantrik was initiated here, and he maintains an office near the temple at Malakhuwa, Guwahati 781010.',
          'His distinctive position comes from the combination of that initiation and his Mayong family lineage. The two are treated as one practice, not as competing claims. Where a case calls for work at the temple, it is done there; where the family tradition is more appropriate, it is done at the Mayong ashram. You will be told which and why.',
        ],
      },
      {
        h2: 'How to Check a Practitioner Before You Pay',
        p: [
          'Guwahati has many people offering spiritual services, and it is reasonable to be cautious. The useful checks are simple: a physical address you can visit, a stated lineage, a free first conversation, and a refusal to promise a guaranteed result. Deepak Tantrik publishes both addresses on this site, and the number reaches him directly rather than an assistant.',
        ],
      },
      {
        h2: 'The Kamakhya Practice',
        p: [
          'The Kamakhya practice is centred on the rituals associated with the temple and the family tradition, and it is described in plain language rather than with superlatives. If you are looking for a specific ritual, describe it when you call and you will be told whether it is something he performs, where it would take place, and what it involves. The direct number is +91 9706801250.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Who is Deepak Tantrik?',
        a: 'Deepak Tantrik has practised for more than 25 years and was initiated at the Kamakhya Temple. He was born into a seven-generation Mayong tantra lineage and works at both Kamakhya and Mayong. Call +91 9706801250.',
      },
      {
        q: 'Where can I meet a tantrik baba in Guwahati in person?',
        a: 'He practises at the Kamakhya Temple in Malakhuwa, Guwahati (pin 781010) and at his Mayong Ashram in Morigaon (pin 782411). Both are walk-in locations. You can also call or WhatsApp +91 9706801250 to fix a time.',
      },
      {
        q: 'What does a tantrik baba in Guwahati charge?',
        a: 'Fees depend on the remedy required and are explained fully before any work begins. The first consultation is free, and the mayong assam tantrik contact number on this page reaches him directly, with no middleman adding a fee.',
      },
    ],
    testimonial: null,
    related: ['best-tantrik-mayong', 'black-magic-removal-kamakhya', 'love-problem-solution-kamakhya', 'husband-wife-dispute-mayong'],

    hi: {
      title: 'गुवाहाटी में तांत्रिक बाबा दीपक तांत्रिक | कामाख्या मंदिर',
      desc:
        'कामाख्या मंदिर में गुवाहाटी के तांत्रिक बाबा। 25+ वर्ष का वैदिक अभ्यास, सात पीढ़ियों की मायोंग वंश। प्रेम, काला जादू, विवाह। +91 9706801250।',
      keywords: [
        'गुवाहाटी में तांत्रिक बाबा',
        'गुवाहाटी में तांत्रिक',
        'गुवाहाटी के प्रमुख तांत्रिक',
        'कामाख्या मंदिर तांत्रिक',
        'कामाख्या मंदिर तांत्रिक बाबा',
        'कामाख्या मंदिर के प्रमुख तांत्रिक',
        'अघोरी तांत्रिक गुवाहाटी',
      ],
      h1: 'गुवाहाटी और मायोंग में प्रामाणिक तांत्रिक बाबा',
      sub: 'गुवाहाटी और मायोंग में भरोसेमंद तांत्रिक मार्गदर्शन के लिए परामर्श लें।',
      h2: 'गुवाहाटी में असली आध्यात्मिक चिकित्सा',
      intro: [
        'गुवाहाटी जैसे तेज़ रफ़्तार शहर में तनाव, रिश्तों में टूटना और व्यापार में असफलता आम बात है। जब ये समस्याएं आपकी कोशिशों के बावजूद बनी रहती हैं, तो आध्यात्मिक मार्गदर्शन लिया जा सकता है। दीपक तांत्रिक गुवाहाटी और मायोंग दोनों स्थानों पर परामर्श देते हैं।',
        '25 वर्षों से अधिक के अनुभव में उन्होंने कामाख्या और मायोंग की परंपरा के अनुसार परामर्श दिया है। उनका दृष्टिकोण ज्योतिष और पारिवारिक परंपरा पर आधारित है।',
        'प्रेम, सुरक्षा या करियर से जुड़ी समस्या में पहले स्थिति का आकलन किया जाता है और फिर बताया जाता है कि उपाय उपयुक्त है या नहीं। परामर्श के लिए संपर्क करें।',
      ],
      deep: [
        {
          h2: 'कामाख्या मंदिर के बारे में: शक्ति का स्रोत',
          p: [
            'गुवाहाटी के नीलाचल पहाड़ी पर स्थित कामाख्या मंदिर भारत के 51 शक्ति पीठों में से एक है, देवी उपासना के पवित्र स्थलों में से एक। यह शक्ति का प्रमुख स्थान है, और वार्षिक अम्बुबाची मेला लाखों भक्तों को आकर्षित करता है। यहाँ की आध्यात्मिक परंपरा इस क्षेत्र की पहचान है।',
            'दीपक तांत्रिक की परंपरा मायोंग और कामाख्या दोनों से जुड़ी है। वे दोनों स्थानों पर परामर्श देते हैं। काला जादू, प्रेम या व्यापार से जुड़ी समस्या में पहले स्थिति का आकलन किया जाता है।',
          ],
        },
        {
          h2: 'गुवाहाटी के सर्वश्रेष्ठ तांत्रिक को क्यों चुनें?',
          p: [
            'गुवाहाटी आध्यात्मिक महत्व का शहर है। लेकिन कई लोग गुवाहाटी के प्रमुख तांत्रिक होने का दावा करते हैं, इसलिए असली चिकित्सक ढूंढना एक चुनौती है। कामाख्या मंदिर में 25+ वर्षों के अभ्यास और मायोंग असम तांत्रिक के रूप में पूर्वजों की जड़ों के कारण दीपक तांत्रिक पूरी तरह अलग हैं। इस वेबसाइट पर दिया मायोंग असम तांत्रिक कांटैक्ट नंबर आपको सीधे उनसे जोड़ता है। कोई सहायक नहीं, कोई देरी नहीं।',
          ],
        },
        {
          h2: 'कामाख्या मंदिर तांत्रिक: गुवाहाटी के सुलभ आध्यात्मिक प्राधिकारी',
          p: [
            'दीपक तांत्रिक 25 वर्षों से अधिक समय से कामाख्या और मायोंग की परंपरा में काम कर रहे हैं। वे कामाख्या मंदिर के पास और मायोंग आश्रम में परामर्श देते हैं। किसी भी समस्या में पहले स्थिति का आकलन किया जाता है और फिर उपाय, स्थान और लागत स्पष्ट बताई जाती है। संपर्क: +91 9706801250।',
          ],
        },
      ],
      faqs: [
        {
          q: 'गुवाहाटी में प्रमुख तांत्रिक बाबा कौन हैं?',
          a: 'दीपक तांत्रिक के पास 25+ वर्ष का अनुभव है और वे सात पीढ़ियों की मायोंग तंत्र वंश में जन्मे हैं। वे गुवाहाटी और मायोंग दोनों स्थानों पर परामर्श देते हैं। +91 9706801250 पर कॉल करें।',
        },
        {
          q: 'क्या मैं गुवाहाटी में तांत्रिक बाबा से व्यक्तिगत रूप से मिल सकता हूं?',
          a: 'वे गुवाहाटी के मलाखुवा में कामाख्या मंदिर (पिन 781010) और मोरिगांव के मायोंग आश्रम (पिन 782411) में अभ्यास करते हैं। दोनों स्थानों पर सीधे जा सकते हैं। आप +91 9706801250 पर कॉल या व्हाट्सएप करके समय भी तय कर सकते हैं।',
        },
        {
          q: 'गुवाहाटी में तांत्रिक बाबा की कितनी फीस होती है?',
          a: 'शुल्क आवश्यक उपाय के अनुसार तय होता है और कार्य शुरू होने से पहले पूरी तरह बता दिया जाता है। पहली बातचीत निःशुल्क है, और यहां दिया मायोंग असम तांत्रिक कांटैक्ट नंबर सीधे उनसे जोड़ता है, बीच में कोई बिचौलिया शुल्क नहीं जोड़ता।',
        },
      ],
      testimonial: null,
    },
  },
];

module.exports = LOCATIONS;
