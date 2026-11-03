// content/core.js
// Homepage, About, Services hub and Contact.
//
// These four carry the brand cluster and the whole Hindi contact-intent cluster
// (kamakhya tantrik contact number, kamakhya mandir ke tantrik ka number), so
// their Hindi versions are the highest-value pages on the site.
//
// v4 Step 10: word count is a PROXY, not a target. Never pad. But note that on
// the live site contact.html was the thinnest page at 373 words and services.html
// at 434 - both are grown here because they carry commercial intent.

module.exports = {
  // =====================================================================
  home: {
    slug: '',
    file: 'index',
    kind: 'home',
    priority: '1.0',
    changefreq: 'weekly',
    hasHi: true,

    title: 'Best Tantrik in Kamakhya Temple & Mayong | Deepak Tantrik',
    desc:
      'Best tantrik in Kamakhya Temple and Mayong, Assam. 25+ years, seven-generation Mayong lineage. Black magic removal, vashikaran, love. Call +91 9706801250.',
    keywords: [
      'best tantrik in kamakhya temple',
      'best tantrik in kamakhya',
      'best tantrik in mayong',
      'kamakhya mandir tantrik',
      'kamakhya tantrik contact number',
      'assam tantrik',
      'tantrik in guwahati',
      'best tantrik in assam',
    ],
    h1: 'Best Tantrik in Kamakhya Temple and Mayong, Assam',
    sub: 'Genuine guidance for relationship issues, vashikaran, and protection from black magic in Mayong, Assam.',

    // About split section
    about: {
      h2: 'Deepak Tantrik: Born in Mayong, Initiated at Kamakhya',
      img: '/images/portrait.jpg',
      imgAlt: 'Deepak Tantrik, best tantrik in Kamakhya Temple and Mayong, during a ritual in Guwahati',
      p: [
        'Deepak Tantrik was born in Mayong, Assam, a place long associated with tantra in Assamese tradition. He was trained in the family practice there and later initiated at Kamakhya Temple in Guwahati. The work he does covers relationship and marriage problems, family conflict, business difficulties, and situations people describe as a negative or harmful presence.',
        'He does not promise a guaranteed result, and the first consultation is free so that you can decide whether the practice is right for your situation. If a remedy is appropriate, it is described in full and quoted before anything begins. If the honest answer is that you need a doctor, a lawyer or a different kind of help, you will be told that instead.',
      ],
      linkText: 'Learn about Deepak Tantrik, Mayong tantra lineage',
    },

    // Service cards shown on the homepage. Titles and blurbs come from the
    // service registry where a page exists, so the homepage can never drift
    // from the page it links to.
    cards: [
      { slug: 'love-problem-solution-kamakhya', icon: 'heart' },
      { slug: 'husband-wife-dispute-mayong', icon: 'users' },
      { slug: 'black-magic-removal-kamakhya', icon: 'shield' },
      { slug: 'vashikaran-specialist-mayong', icon: 'check' },
      { slug: 'best-tantrik-mayong', icon: 'star' },
      { slug: 'tantrik-baba-guwahati', icon: 'sun' },
    ],

    // Two unique narrative blocks. These REPLACE the boilerplate block that
    // was duplicated verbatim on every inner page in v3.
    narrative: [
      {
        h2: 'Training in Mayong, Initiation at Kamakhya',
        p: [
          'Deepak Tantrik\'s training began in Mayong, Assam, in a family that has practised tantra for seven generations. He learned Jyotish and the family ritual tradition there before moving to Guwahati. That early training is the basis of the practice: a careful reading of the situation first, and a remedy only where one is appropriate.',
          'He later moved to Guwahati and was initiated at Kamakhya Temple, where he now maintains an office near the temple. He practises at both locations, and the choice of location is part of the assessment rather than a marketing detail. Clients who want to understand the Mayong lineage can read the Mayong page; clients who want the temple practice can read the Kamakhya page.',
        ],
      },
      {
        h2: 'What the Practice Actually Covers',
        p: [
          'The problems most often brought to him are relationship breakdowns, family disputes, business difficulties and a persistent sense that something is wrong. Not all of them are spiritual, and the practice is organised around sorting that out. Where a spiritual cause is assessed as present, the remedy is specific and explained in advance. Where it is not, you will be told.',
          'The first consultation is free and carries no obligation. Bring your date and time of birth where astrology is relevant, and a plain description of what has happened. You will get an assessment, an explanation of what a remedy would involve, and a clear statement of its limits. The contact number is +91 9706801250.',
        ],
      },
    ],

    faqs: [
      {
        q: 'Who is the best tantrik in Kamakhya?',
        a: 'Deepak Tantrik has practised for more than 25 years. He was born into a seven-generation Mayong tantra lineage and received formal diksha at Kamakhya Temple. Contact: +91 9706801250.',
      },
      {
        q: 'Can kamakhya temple black magic be removed?',
        a: 'A remedy may be appropriate where an ordinary cause has been ruled out and a spiritual cause is assessed as present. No honest practitioner can promise a guaranteed outcome. The first consultation is free and is used to decide whether a remedy makes sense.',
      },
      {
        q: 'Where does Deepak Tantrik practice?',
        a: 'He practises at two walk-in locations: the Kamakhya Temple in Malakhuwa, Guwahati (pin 781010) and his Mayong Ashram in Morigaon (pin 782411). He is available on call and WhatsApp at +91 9706801250.',
      },
      {
        q: 'What is Mayong, Assam famous for?',
        a: 'Mayong, in Morigaon district, has a long association with tantra in Assamese folklore, and families there have practised it for generations. Deepak Tantrik was born into one of those families.',
      },
      {
        q: 'How do I get the Mayong tantrik contact number?',
        a: 'The mayong tantrik contact number is +91 9706801250. You can call or WhatsApp directly on that number. He is also reachable in person at the Kamakhya Temple office in Guwahati and at the Mayong Ashram.',
      },
      {
        q: 'How much does a consultation cost?',
        a: 'The first consultation is free and there is no obligation. Fees for a specific remedy are explained in full before any work begins. Calling +91 9706801250 reaches Deepak Tantrik directly, with no middleman.',
      },
    ],

    testimonials: [],

    // --- HINDI ---
    hi: {
      title: 'कामाख्या मंदिर तांत्रिक और मायोंग के सर्वश्रेष्ठ तांत्रिक',
      desc:
        'कामाख्या मंदिर और मायोंग, असम में सर्वश्रेष्ठ तांत्रिक। 25+ वर्ष, सात पीढ़ियों की मायोंग वंश। काला जादू, वशीकरण, प्रेम समस्या। +91 9706801250।',
      keywords: [
        'कामाख्या मंदिर में सर्वश्रेष्ठ तांत्रिक',
        'कामाख्या में सर्वश्रेष्ठ तांत्रिक',
        'मायोंग के सर्वश्रेष्ठ तांत्रिक',
        'कामाख्या मंदिर तांत्रिक',
        'कामाख्या तांत्रिक कांटैक्ट नंबर',
        'असम तांत्रिक',
        'गुवाहाटी में तांत्रिक',
      ],
      h1: 'कामाख्या मंदिर और मायोंग, असम के सर्वश्रेष्ठ तांत्रिक',
      sub: 'मायोंग, असम में रिश्तों की समस्याओं, वशीकरण और काले जादू से बचाव के लिए वास्तविक मार्गदर्शन।',
      about: {
        h2: 'दीपक तांत्रिक: मायोंग में जन्म, कामाख्या से दीक्षित',
        img: '/images/portrait.jpg',
        imgAlt: 'दीपक तांत्रिक, कामाख्या मंदिर और मायोंग के सर्वश्रेष्ठ तांत्रिक, गुवाहाटी में एक अनुष्ठान के दौरान',
        p: [
          'दीपक तांत्रिक का जन्म मायोंग, असम में सात पीढ़ियों के तंत्र परिवार में हुआ और उन्हें कामाख्या मंदिर, गुवाहाटी में दीक्षा मिली। उनका अभ्यास ज्योतिष और मायोंग की पारिवारिक परंपरा पर आधारित है, और वे काला जादू, विवाह, पारिवारिक क्लेश, व्यापार और संतान से जुड़ी समस्याओं पर परामर्श देते हैं।',
          'यदि आप किसी नकारात्मक ऊर्जा से जूझ रहे हैं या जीवन में बिना वजह रुकावट महसूस कर रहे हैं, तो पहली बातचीत में स्थिति को समझा जाता है। किसी परिणाम की गारंटी नहीं दी जाती; जहां उपाय उपयुक्त हो, वहां उसकी व्याख्या और लागत पहले बता दी जाती है।',
        ],
        linkText: 'दीपक तांत्रिक और मायोंग तंत्र वंश के बारे में जानें',
      },
      narrative: [
        {
          h2: 'विरासत: मायोंग में जन्म, कामाख्या से सशक्त',
          p: [
            'दीपक तांत्रिक का जन्म मायोंग, असम में हुआ, जो तंत्र परंपरा से जुड़ा स्थान माना जाता है। उनका परिवार सात पीढ़ियों से तंत्र का अभ्यास कर रहा है। उन्होंने बचपन में परिवार से ज्योतिष और तंत्र की परंपरा सीखी, और आगे की शिक्षा गुवाहाटी में प्राप्त की।',
            'बाद में उन्होंने कामाख्या मंदिर में औपचारिक दीक्षा ली। आज वे गुवाहाटी के कामाख्या मंदिर और मायोंग आश्रम, दोनों स्थानों पर परामर्श देते हैं। कामाख्या के बारे में जानने आने वाले लोग अक्सर उनसे मार्गदर्शन मांगते हैं।',
          ],
        },
        {
          h2: 'काला जादू हटाने और वशीकरण में मास्टर',
          p: [
            'अंधकारी ऊर्जा जीवन, व्यापार और विवाह को नष्ट कर सकती है। कामाख्या मंदिर में तांत्रिक के रूप में प्रमुख, दीपक तांत्रिक कामाख्या मंदिर के काले जादू को दूर करने में विशेषज्ञ हैं। उनके प्रामाणिक अनुष्ठान कामाख्या काला जादू के सभी रूपों से निपटते हैं और परिवारों को बुरी नज़र और ईर्ष्या से बचाते हैं। उनकी दक्षता केवल कामाख्या तक सीमित नहीं है: उनकी जड़ें उन्हें इन गहन आध्यात्मिक शुद्धियों के लिए मायोंग असम तांत्रिक बनाती हैं।',
            'असम और अन्य राज्यों के ग्राहक जटिल प्रेम विवाद और व्यापार की विफलता हल करने के लिए कामाख्या के सर्वश्रेष्ठ तांत्रिक की तलाश करते हैं। यदि आपने कभी मायोंग असम काला जादू वीडियो देखा है, तो आप जानते हैं कि इस भूमि की क्या प्रतिष्ठा है। दीपक तांत्रिक उसी ज्ञान का उपयोग केवल सकारात्मक परिणामों के लिए करते हैं। यदि आप संघर्ष में हैं, तो इस साइट पर दिए मायोंग तांत्रिक कांटैक्ट नंबर या मायोंग असम तांत्रिक कांटैक्ट नंबर ढूंढें और असम के भरोसेमंद तांत्रिक तक पहुँचें। भरोसेमंद मायोंग तांत्रिक कांटैक्ट की आपकी खोज यहीं समाप्त होती है।',
          ],
        },
      ],
      faqs: [
        {
          q: 'कामाख्या में सबसे अच्छे तांत्रिक कौन हैं?',
          a: 'दीपक तांत्रिक के पास 25+ वर्ष का अनुभव है, वे सात पीढ़ियों की मायोंग तंत्र वंश में जन्मे हैं, और कामाख्या मंदिर से औपचारिक दीक्षा प्राप्त है। संपर्क: +91 9706801250।',
        },
        {
          q: 'क्या कामाख्या मंदिर का काला जादू हटाया जा सकता है?',
          a: 'हां। दीपक जी जैसे प्रामाणिक कामाख्या मंदिर तांत्रिक की मदद से गंभीर काला जादू और नकारात्मक ऊर्जा हटाने का प्रयास किया जा सकता है, और आपके परिवार के लिए सुरक्षा कवच बनाया जाता है।',
        },
        {
          q: 'दीपक तांत्रिक कहाँ अभ्यास करते हैं?',
          a: 'वे दो स्थानों पर अभ्यास करते हैं: गुवाहाटी के मलाखुवा में कामाख्या मंदिर (पिन 781010) और मोरिगांव के मायोंग आश्रम (पिन 782411)। वे +91 9706801250 पर कॉल और व्हाट्सएप पर उपलब्ध हैं।',
        },
        {
          q: 'मायोंग, असम किस बात के लिए प्रसिद्ध है?',
          a: 'मोरिगांव जिले का मायोंग भारत में तंत्र और ओकल्ट साधना की प्राचीन राजधानी है, जिसका उल्लेख कलिका पुराण और योगिनी तंत्र में मिलता है और जो सदियों पुराने ताड़पत्र ग्रंथों में सुरक्षित है। दीपक तांत्रिक इसी वंश में जन्मे हैं।',
        },
        {
          q: 'मायोंग तांत्रिक का कांटैक्ट नंबर कैसे मिलेगा?',
          a: 'मायोंग तांत्रिक कांटैक्ट नंबर +91 9706801250 है। आप उसी नंबर पर सीधे कॉल या व्हाट्सएप कर सकते हैं। गुवाहाटी के कामाख्या मंदिर कार्यालय और मायोंग आश्रम में भी वे व्यक्तिगत रूप से उपलब्ध हैं।',
        },
        {
          q: 'परामर्श की फीस कितनी है?',
          a: 'पहली बातचीत निःशुल्क है और कोई बाध्यता नहीं है। किसी विशेष उपाय की शुल्क कार्य शुरू होने से पूरी तरह बता दी जाती है। +91 9706801250 पर कॉल करने पर आप सीधे दीपक तांत्रिक तक पहुँचते हैं, बीच में कोई बिचौलिया नहीं।',
        },
      ],
      testimonials: [],
    },
  },

  // =====================================================================
  about: {
    slug: 'about',
    file: 'about',
    kind: 'default',
    priority: '0.8',
    changefreq: 'monthly',
    hasHi: true,

    title: 'About Deepak Tantrik: Mayong Lineage, Kamakhya',
    desc:
      'About Deepak Tantrik: seventh-generation Mayong tantra practitioner, initiated at Kamakhya Temple, 25+ years of practice. Call +91 9706801250.',
    keywords: [
      'about deepak tantrik',
      'mayong tantra expert',
      'real tantrik assam',
      'kamakhya temple tantriks',
      'best tantrik in mayong',
      'assam tantrik',
      'mayong tantrik contact number',
    ],
    h1: 'About Deepak Tantrik',
    sub: 'The journey of a genuine Mayong tantra practitioner, born in Mayong and initiated at Kamakhya Temple, Guwahati.',

    lead: {
      h2: 'The Journey of a True Vedic Master',
      img: '/images/portrait.jpg',
      imgAlt: 'Deepak Tantrik, Mayong tantra practitioner initiated at Kamakhya Temple, Guwahati',
      p: [
        'Deepak Tantrik\'s journey began in the ancient, sacred lands of Mayong and Kamakhya Temple, Assam. Born into a long lineage of powerful tantrik practitioners, he was introduced to the mysteries of Vedic astrology and spiritual healing from a very young age. His early years were spent mastering complex mantras, rituals, and the science of cosmic energies under the guidance of elder masters.',
        'He has practised for more than 25 years and works with clients from Assam and other parts of India. People travel to Guwahati and Mayong for consultations, and some consult by phone or WhatsApp.',
        'The practice is presented as ethical and non-harmful: it is used for protection and repair, not for harming anyone. It is rooted in Jyotish and the family tradition, and it does not replace medical, legal or financial advice.',
        'A consultation is a conversation about what is actually happening. If a remedy is appropriate, it is explained and quoted before anything begins. No outcome is guaranteed, and the limits are stated before you commit.',
      ],
    },

    // This REPLACES the block that was duplicated verbatim on about, services,
    // contact and every service page in v3. Each page now has its own copy.
    deep: [
      {
        h2: 'Lineage, Training and Limits',
        p: [
          'Deepak Tantrik was born in Mayong, Assam, into a family that has practised tantra for seven generations. He later moved to Guwahati and was initiated at Kamakhya Temple. His practice is based on both locations, and the two are treated as one tradition rather than as competing claims. This page sets out the lineage, the training and the limits of the practice.',
          'The work covers relationship and marriage problems, family conflict, business difficulties and situations described as a negative presence. It is rooted in Jyotish and the Mayong family tradition. The practice does not promise guaranteed results, and it does not claim to replace medical, legal or financial advice. Those limits are stated here because they are part of how the work is done.',
        ],
      },
      {
        h2: 'Born in Mayong, Empowered at Kamakhya',
        p: [
          'Deepak Tantrik\'s family has practised in Mayong for seven generations. The name Mayong is traditionally linked to maya, or illusion, and the families there grew up with the sacred and the supernatural as ordinary parts of life. He was trained by his elders in assessment, protection and ritual, and he continues to work from the family ashram.',
          'He later moved to Guwahati and received formal diksha at Kamakhya Temple, which joined the family lineage with the temple tradition. Clients contact him from Assam and from other parts of India. The combination of the two locations is the practical basis of the practice, not a claim of exclusivity.',
        ],
      },
      {
        h2: 'What the Practice Does and Does Not Claim',
        p: [
          'The practice has run for more than 25 years, and clients come from Assam and from other parts of India. Consultations are confidential as a working rule, not as a marketing promise. The two locations allow the work to be matched to the case: Kamakhya for the temple practice, Mayong for the family tradition. What is not offered is a generic remedy applied to every problem.',
        ],
      },
    ],

    faqs: [
      {
        q: 'How long has Deepak Tantrik been practising?',
        a: 'Over 25 years. He belongs to a seven-generation family tantra lineage in Mayong and received formal diksha at the Kamakhya Temple, Guwahati.',
      },
      {
        q: 'Is Deepak Tantrik a genuine Mayong tantra practitioner?',
        a: 'Yes. His family has practised tantra in Mayong, Morigaon for seven generations, which local elders can verify, and he holds formal initiation from the Kamakhya Temple. He is also the author of no scripts and claims none; his practice is traditional and lineage-based.',
      },
      {
        q: 'Does Deepak Tantrik guarantee results?',
        a: 'No genuine practitioner can guarantee a specific outcome, and he will not claim to. What he does commit to is an honest assessment of your situation, a clear explanation of what a remedy can and cannot achieve, transparent pricing before any work begins, and strict confidentiality.',
      },
    ],
    testimonial: null,
    related: ['best-tantrik-mayong', 'tantrik-baba-guwahati', 'real-tantrik-astrologer-assam', 'black-magic-removal-kamakhya'],

    hi: {
      title: 'मायोंग तंत्र आचार्य दीपक तांत्रिक के बारे में | 25 वर्ष',
      desc:
        'दीपक तांत्रिक के बारे में: सात पीढ़ियों के मायोंग तंत्र वंश, कामाख्या मंदिर से दीक्षित, 25+ वर्ष का अभ्यास। +91 9706801250 पर कॉल करें।',
      keywords: [
        'दीपक तांत्रिक के बारे में',
        'मायोंग तंत्र विशेषज्ञ',
        'असली असम तांत्रिक',
        'कामाख्या मंदिर तांत्रिक',
        'मायोंग के सर्वश्रेष्ठ तांत्रिक',
        'मायोंग तांत्रिक कांटैक्ट नंबर',
      ],
      h1: 'दीपक तांत्रिक के बारे में',
      sub: 'एक असली मायोंग तंत्र आचार्य की यात्रा, जिनका जन्म मायोंग में हुआ और दीक्षा कामाख्या मंदिर, गुवाहाटी में।',
      lead: {
        h2: 'एक सच्चे वैदिक गुरु की यात्रा',
        img: '/images/portrait.jpg',
        imgAlt: 'दीपक तांत्रिक, मायोंग तंत्र आचार्य, कामाख्या मंदिर गुवाहाटी से दीक्षित',
        p: [
          'दीपक तांत्रिक की यात्रा मायोंग और कामाख्या मंदिर, असम के प्राचीन पवित्र भूमि में शुरू हुई। शक्तिशाली तांत्रिक चिकित्सकों की लंबी वंश में जन्मे, उन्हें बहुत कम उम्र से ही वैदिक ज्योतिष और आध्यात्मिक चिकित्सा के रहस्यों से परिचित किया गया। उनके प्रारंभिक वर्ष वरिष्ठ गुरुओं के मार्गदर्शन में जटिल मंत्र, अनुष्ठान और ब्रह्मांडीय ऊर्जा का विज्ञान सीखने में बीते।',
          '25 वर्षों से अधिक के निरंतर अभ्यास के साथ, वे असम और देश के अन्य हिस्सों से आने वाले लोगों का मार्गदर्शन करते हैं। लोग गुवाहाटी और मायोंग दोनों जगह परामर्श के लिए आते हैं।',
          'दीपक तांत्रिक नैतिक अभ्यास में दृढ़ विश्वास रखते हैं। वे अपने ज्ञान का उपयोग हानि पहुँचाने के लिए नहीं, उपचार के लिए करते हैं। चाहे नकारात्मक ऊर्जा हटाना हो, गहरे पारिवारिक संघर्ष सुलझाना हो, या व्यापार में समृद्धि चाहिए, उनके उपाय सुरक्षित, प्रभावी और प्राचीन धर्मग्रंथों पर आधारित हैं।',
          'जब आप दीपक तांत्रिक से परामर्श करते हैं, तो आप केवल किसी ज्योतिषी से बात नहीं कर रहे होते। आप एक मार्गदर्शक से जुड़ रहे हैं जो सबसे कठिन समय में भी आपके साथ रहता है जब तक परिस्थिति नहीं बदलती।',
        ],
      },
      deep: [
        {
          h2: 'कामाख्या और मायोंग की तांत्रिक परंपरा',
          p: [
            'दीपक तांत्रिक का जन्म मायोंग में हुआ और बाद में उन्होंने कामाख्या मंदिर में दीक्षा ली। वे गुवाहाटी और मायोंग दोनों स्थानों पर परामर्श देते हैं, इसलिए असम और अन्य राज्यों से लोग उनसे संपर्क करते हैं।',
            'वे काला जादू हटाने और सकारात्मक वशीकरण से जुड़े परामर्श देते हैं। हर अनुष्ठान से पहले स्थिति का आकलन किया जाता है और उसकी सीमाएं स्पष्ट बताई जाती हैं।',
          ],
        },
        {
          h2: 'मायोंग में जन्म, कामाख्या से सशक्त',
          p: [
            'कामाख्या मंदिर के बारे में और उसके तांत्रिकों को समझने के लिए उनकी वंश जानना आवश्यक है। दीपक तांत्रिक का परिवार मायोंग असम में सात पीढ़ियों से अभ्यास कर रहा है। "मायोंग" शब्द स्वयं <em>माया</em>, यानी माया/मोह, से संबंधित है, और हर मायोंग असम तांत्रिक ऐसी संस्कृति में जन्मता है जहां पवित्र और अलौकिक दैनिक वास्तविकताएं हैं। वे बड़े हुए तो अपने बड़ों को बीमारों का इलाज करते, झगड़े सुलझाते और परिवारों को कामाख्या काला जादू के हमलों से बचाते देखते थे।',
            'वयस्क होने पर वे कामाख्या मंदिर में औपचारिक दीक्षा के लिए गुवाहाटी गए। आज उनके मायोंग तांत्रिक कांटैक्ट नंबर पर भारत के विभिन्न हिस्सों से कॉल आती हैं। वे कामाख्या और मायोंग दोनों स्थानों पर परामर्श देते हैं।',
          ],
        },
        {
          h2: 'जो बातें जांची जा सकती हैं',
          p: [
            '25 वर्षों से अधिक का अभ्यास, दो स्थायी पते और एक सीधा फोन नंबर। परामर्श गोपनीय है और पहली बातचीत निःशुल्क है। गुवाहाटी के कामाख्या मंदिर और मायोंग के पारिवारिक आश्रम, दोनों जगह की साधना एक ही परंपरा का हिस्सा है। किसी भी उपाय का परिणाम पहले से तय नहीं किया जा सकता।',
          ],
        },
      ],
      faqs: [
        {
          q: 'दीपक तांत्रिक कितने वर्षों से अभ्यास कर रहे हैं?',
          a: '25 वर्षों से अधिक। वे मायोंग में सात पीढ़ियों के पारिवारिक तंत्र वंश से हैं और उन्हें कामाख्या मंदिर, गुवाहाटी से आधिकारिक दीक्षा मिली है।',
        },
        {
          q: 'क्या दीपक तांत्रिक असली मायोंग तंत्र आचार्य हैं?',
          a: 'हां। उनका परिवार मोरिगांव के मायोंग में सात पीढ़ियों से तंत्र का अभ्यास कर रहा है, जिसे स्थानीय बुज़ुर्ग सत्यापित कर सकते हैं, और उनके पास कामाख्या मंदिर से औपचारिक दीक्षा भी है।',
        },
        {
          q: 'क्या दीपक तांत्रिक परिणाम की गारंटी देते हैं?',
          a: 'कोई असली चिकित्सक किसी विशेष परिणाम की गारंटी नहीं दे सकता और वे ऐसा दावा नहीं करते। वे यह प्रतिबद्ध करते हैं कि आपकी स्थिति का ईमानदार आकलन करेंगे, उपाय की सीमा स्पष्ट बताएंगे, कार्य शुरू होने से पहले शुल्क पारदर्शिता से बताएंगे, और गोपनीयता बनाए रखेंगे।',
        },
      ],
      testimonial: null,
      related: ['best-tantrik-mayong', 'tantrik-baba-guwahati', 'real-tantrik-astrologer-assam', 'black-magic-removal-kamakhya'],
    },
  },

  // =====================================================================
  servicesPage: {
    slug: 'services',
    file: 'services',
    kind: 'default',
    priority: '0.9',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Tantrik Services in Kamakhya and Mayong | Deepak',
    desc:
      'Tantrik services in Kamakhya and Mayong, Assam: black magic removal, love problems, vashikaran and husband wife disputes. 25+ years. Call +91 9706801250.',
    keywords: [
      'tantrik services kamakhya',
      'tantrik in guwahati',
      'best tantrik in kamakhya',
      'mayong tantrik services',
      'kamakhya mandir tantrik puja',
      'kamakhya tantrik contact number',
      'assam tantrik',
    ],
    h1: 'Our Spiritual Services',
    sub: 'Every remedy below is performed at the Kamakhya Temple, Guwahati or the Mayong Ashram, Assam, by Deepak Tantrik personally.',

    // Blurbs here, one line per service, in the order they should render.
    // Titles are pulled from each service's own page so the hub can never drift.
    order: [
      'love-problem-solution-kamakhya',
      'black-magic-removal-kamakhya',
      'vashikaran-specialist-mayong',
      'husband-wife-dispute-mayong',
      'business-problem-solution',
      'kundli-consultation',
      'childless-problem-solution',
      'evil-eye-removal',
    ],

    deep: [
      {
        h2: 'Which Remedy Fits Your Situation?',
        p: [
          'Most people arrive unsure which service they need, and that is a reasonable place to start. The four remedies below cover the situations that account for the overwhelming majority of consultations: a relationship that has broken or is under pressure, a persistent sense of something wrong that has no medical or logical explanation, a partner or family member whose behaviour has changed against your wishes, and a marriage in danger.',
          'If your situation does not obviously match one of these, <a href="/contact">contact Deepak Tantrik</a> and describe what is happening. He will tell you honestly whether a remedy is appropriate, which one, and what it can realistically achieve. Nobody is ever charged for that assessment.',
        ],
      },
      {
        h2: 'What Happens at Your First Consultation',
        p: [
          'The first consultation is free and carries no obligation. It begins with your situation in your own words, followed by astrological reading of your kundli where relevant, and then a plain explanation of what is causing the difficulty and what a remedy would involve. Fees are quoted in full before anything begins, and the number on this site reaches Deepak Tantrik directly, with no middleman adding a commission.',
          'Rituals are performed in person, at the Kamakhya Temple in Guwahati or at the Mayong Ashram in Morigaon, depending on which is appropriate for the case. You are told in advance where and when, and what to bring.',
        ],
      },
      {
        h2: 'Why the Location Matters as Much as the Ritual',
        p: [
          'The same ritual performed in an ordinary room and the same ritual performed at a Shakti Peetha are not equivalent. Kamakhya is one of the 51 Shakti Peethas and a major seat of Shakti in the region; Mayong has a long association with tantra in Assamese tradition, and its palm-leaf texts are part of that history. Deepak Tantrik holds a Mayong family lineage and formal initiation at Kamakhya, so he can draw on both.',
          'That is also the practical reason <a href="/best-tantrik-mayong">the best tantrik in Mayong</a> and the best tantrik in kamakhya can often be the same person, and why clients travelling from outside Assam frequently ask about the mayong to kamakhya temple distance before they visit. It is about 80 kilometres, and he practises at both ends.',
        ],
      },
    ],

    faqs: [
      {
        q: 'Do you perform the rituals yourself?',
        a: 'Yes. Every remedy on this page is performed by Deepak Tantrik personally. There are no assistants carrying out the work and no agents taking a commission. Calling +91 9706801250 reaches him directly.',
      },
      {
        q: 'Where are rituals performed?',
        a: 'In person, at either the Kamakhya Temple in Malakhuwa, Guwahati (pin 781010) or the Mayong Ashram in Morigaon (pin 782411). Which one is used depends on the remedy, and you are told in advance.',
      },
      {
        q: 'Is the first consultation really free?',
        a: 'Yes, and there is no obligation to proceed afterwards. During it you get an honest assessment of your situation and a full explanation of cost. If a remedy is not appropriate, he will say so.',
      },
    ],
    testimonial: null,
    related: ['black-magic-removal-kamakhya', 'love-problem-solution-kamakhya', 'vashikaran-specialist-mayong', 'husband-wife-dispute-mayong'],

    hi: {
      title: 'कामाख्या और मायोंग में तांत्रिक सेवाएं | दीपक तांत्रिक',
      desc:
        'कामाख्या और मायोंग, असम में तांत्रिक सेवाएं: काला जादू हटाना, प्रेम समस्या, वशीकरण और पति-पत्नी झगड़े। 25+ वर्ष। +91 9706801250।',
      keywords: [
        'कामाख्या में तांत्रिक सेवाएं',
        'गुवाहाटी में तांत्रिक',
        'कामाख्या में सर्वश्रेष्ठ तांत्रिक',
        'मायोंग तांत्रिक सेवाएं',
        'कामाख्या मंदिर तांत्रिक पूजा',
        'कामाख्या तांत्रिक कांटैक्ट नंबर',
        'असम तांत्रिक',
      ],
      h1: 'हमारी आध्यात्मिक सेवाएं',
      sub: 'नीचे दी गई हर सेवा दीपक तांत्रिक द्वारा व्यक्तिगत रूप से कामाख्या मंदिर, गुवाहाटी या मायोंग आश्रम, असम में की जाती है।',
      deep: [
        {
          h2: 'आपकी स्थिति के लिए कौन सा उपाय उपयुक्त है?',
          p: [
            'अधिकांश लोग यह नहीं जानते कि उन्हें किस सेवा की आवश्यकता है, और यह एक उचित शुरुआत है। नीचे दिए चार उपाय उन स्थितियों को कवर करते हैं जो परामर्श के विशाल बहुमत का हिस्सा हैं: टूटा या दबाव में रहा रिश्ता, कोई लगातार बेचैनी जिसका चिकित्सकीय या तार्किक स्पष्टीकरण न हो, कोई साथी या परिवार का सदस्य जिसका व्यवहार आपकी इच्छा के विरुद्ध बदल गया हो, और खतरे में मौजूद विवाह।',
            'यदि आपकी स्थिति इनमें से स्पष्ट रूप से मेल नहीं खाती, तो <a href="/hi/contact">दीपक तांत्रिक से संपर्क करें</a> और बताएं कि क्या हो रहा है। वे ईमानदारी से बताएंगे कि उपाय उपयुक्त है या नहीं, कौन सा, और वह वास्तव में क्या हासिल कर सकता है। इस मूल्यांकन के लिए कभी भी कोई शुल्क नहीं लिया जाता।',
          ],
        },
        {
          h2: 'पहली बातचीत में क्या होता है',
          p: [
            'पहली बातचीत निःशुल्क है और कोई बाध्यता नहीं है। इसमें आपकी स्थति आपके ही शब्दों में सुनी जाती है, जहां उपयुक्त हो वहां आपकी कुंडली का ज्योतिषीय पठन होता है, और फिर स्पष्ट रूप से बताया जाता है कि कठिनाई का कारण क्या है और उपाय में क्या शामिल होगा। कुछ भी शुरू होने से पहले शुल्क पूरा बता दिया जाता है, और इस साइट पर दिया नंबर सीधे दीपक तांत्रिक तक पहुँचाता है, बीच में कोई बिचौलिया कमीशन नहीं जोड़ता।',
            'अनुष्ठान व्यक्तिगत रूप से किए जाते हैं, गुवाहाटी के कामाख्या मंदिर या मोरिगांव के मायोंग आश्रम में, यह इस पर निर्भर करता है कि मामले के लिए कौन सा उपयुक्त है। आपको पहले ही बता दिया जाता है कि कहां और कब, और साथ में क्या ले जाना है।',
          ],
        },
        {
          h2: 'अनुष्ठान जितना महत्वपूर्ण स्थान भी उतना',
          p: [
            'एक सामान्य कमरे में किया गया वही अनुष्ठान और शक्ति पीठ पर किया गया वही अनुष्ठान समतुल्य नहीं होते। कामाख्या 51 शक्ति पीठों में से एक है और इस क्षेत्र में शक्ति का प्रमुख स्थान है; मायोंग असम की तंत्र परंपरा से जुड़ा है और उसके ताड़पत्र ग्रंथ इस परंपरा का हिस्सा हैं। दीपक तांत्रिक के पास मायोंग का पारिवारिक वंश और कामाख्या की औपचारिक दीक्षा दोनों हैं।',
            'यह व्यावहारिक कारण भी है कि <a href="/hi/best-tantrik-mayong">मायोंग के सर्वश्रेष्ठ तांत्रिक</a> और कामाख्या में सर्वश्रेष्ठ तांत्रिक अक्सर एक ही व्यक्ति हो सकते हैं, और यह भी कि असम से बाहर से आने वाले ग्राहक आने से पहले मायोंग से कामाख्या मंदिर की दूरी पूछते हैं। यह लगभग 80 किलोमीटर है, और वे दोनों स्थानों पर अभ्यास करते हैं।',
          ],
        },
      ],
      faqs: [
        {
          q: 'क्या आप अनुष्ठान स्वयं करते हैं?',
          a: 'हां। इस पृष्ठ पर दी गई हर सेवा दीपक तांत्रिक व्यक्तिगत रूप से करते हैं। कोई सहायक कार्य नहीं करता और कोई एजेंट कमीशन नहीं लेता। +91 9706801250 पर कॉल करने पर आप सीधे उनसे जुड़ते हैं।',
        },
        {
          q: 'अनुष्ठान कहां किए जाते हैं?',
          a: 'व्यक्तिगत रूप से, गुवाहाटी के मलाखुवा में कामाख्या मंदिर (पिन 781010) या मोरिगांव के मायोंग आश्रम (पिन 782411) में। कौन सा उपयोग होगा यह उपाय पर निर्भर करता है, और आपको पहले बता दिया जाता है।',
        },
        {
          q: 'क्या पहली बातचीत वाकई निःशुल्क है?',
          a: 'हां, और उसके बाद कोई बाध्यता नहीं है। इसमें आपको अपनी स्थिति का ईमानदार आकलन और लागत का पूर्ण विवरण मिलता है। यदि कोई उपाय उपयुक्त नहीं है, तो वे यह कहेंगे।',
        },
      ],
      testimonial: null,
      related: ['black-magic-removal-kamakhya', 'love-problem-solution-kamakhya', 'vashikaran-specialist-mayong', 'husband-wife-dispute-mayong'],
    },
  },

  // =====================================================================
  contact: {
    slug: 'contact',
    file: 'contact',
    kind: 'default',
    priority: '0.9',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Kamakhya Tantrik Contact Number | Deepak Tantrik',
    desc:
      'The kamakhya tantrik contact number and the mayong assam tantrik contact number are the same: +91 9706801250. Call or WhatsApp. Free first consultation.',
    keywords: [
      'kamakhya tantrik contact number',
      'kamakhya mandir tantrik contact number',
      'mayong tantrik contact number',
      'mayong assam tantrik contact number whatsapp number',
      'assam tantrik contact number',
      'kamakhya best tantrik contact number',
      'tantrik in guwahati',
    ],
    h1: 'Contact Deepak Tantrik',
    sub: 'One number reaches him directly, at both the Kamakhya Temple office in Guwahati and the Mayong Ashram in Assam.',

    lead: {
      h2: 'Get in Touch with Deepak Tantrik',
      p: [
        'The kamakhya tantrik contact number and the mayong assam tantrik contact number are the same number, because there is only one practitioner: +91 9706801250. Call it or WhatsApp it and you reach Deepak Tantrik directly. There is no assistant, no call centre, and no agent taking a cut of any fee.',
        'Do not suffer in silence. The ancient wisdom of Kamakhya and Mayong has the power to solve many difficult problems, but only if it is applied correctly to your situation. The first consultation is free and carries no obligation. Use it.',
      ],
    },

    form: {
      title: 'Send a Message',
      name: 'Your Name',
      phone: 'Your Phone Number',
      select: 'Select Problem',
      desc: 'Describe your problem briefly',
      btn: 'Request a Free Consultation',
      note: 'This form does not submit anywhere yet. Please call or WhatsApp +91 9706801250 for the fastest response, or email deepaktantrik@assamtantrik.co.',
    },

    // Grown deliberately: on the live site this page was 373 words, the
    // thinnest on the site, while carrying the highest commercial intent.
    deep: [
      {
        h2: 'Both Locations, One Number',
        p: [
          'Deepak Tantrik practises at two physical locations and both are walk-in. The first is the kamakhya mandir tantrik office at Malakhuwa, Guwahati, postal code 781010, a short walk from the temple on Nilachal Hill. The second is his ancestral mayong assam tantrik ashram in Mayong, Morigaon, postal code 782411, about 80 kilometres away.',
          'Because the kamakhya mandir tantrik contact number and the mayong assam tantrik contact number whatsapp number are both +91 9706801250, you do not need to work out which location suits you. Describe the problem, and he will tell you where the remedy should be performed and why.',
        ],
      },
      {
        h2: 'What to Expect When You Call',
        p: [
          'The first call is a consultation, not a transaction. Expect to describe what is happening in your own words, to be asked about how long it has been going on and what has already been tried, and to be asked for your date and time of birth where astrology is relevant. You will then get an honest assessment and, if a remedy makes sense, a clear explanation of what it involves and what it costs.',
          'Be aware of one thing. If a caller demands a large sum before speaking to you, promises results in 24 hours, claims to be the only powerful practitioner, or has no physical address you can visit, that is a warning sign. A genuine kamakhya mandir tantrik and a genuine assam tantrik will give you a lineage, a location, and an honest explanation of what the practice can and cannot do. The guide on how to identify a real tantrik in Assam sets out these checks in detail before you pay anyone.',
        ],
      },
      {
        h2: 'What to Have Ready Before You Call',
        p: [
          'The more specific you are, the faster a useful answer is possible. Have to hand: your full name and date of birth, the phone number you can be reached on, the location where you are calling from, a short factual description of the problem, roughly when it started, and anything you have already tried. For a marriage or love matter, both partners\' dates of birth are needed for an accurate reading.',
          'If your problem involves something unexplained happening in your home, a sudden and sustained change in your circumstances, or illness that doctors have not been able to explain, say so plainly. That pattern is specific and it is worth describing accurately rather than vaguely.',
        ],
      },
      {
        h2: 'Confidentiality',
        p: [
          'Everything you discuss is confidential, and this is not a courtesy but a working rule of the practice. Most people who contact a tantra practitioner are dealing with a relationship, a marriage or a family problem, and none of it is discussed with anyone else. You do not need to worry about being recognised if you visit either location.',
        ],
      },
    ],

    faqs: [
      {
        q: 'What is the kamakhya tantrik contact number?',
        a: 'It is +91 9706801250. The same number also serves as the mayong tantrik contact number and the mayong assam tantrik contact number, because Deepak Tantrik practises at both locations. You can call or WhatsApp it directly.',
      },
      {
        q: 'Can I visit in person instead of calling?',
        a: 'Yes. Both locations are walk-in: the office near the Kamakhya Temple at Malakhuwa, Guwahati (pin 781010), and the Mayong Ashram in Morigaon (pin 782411). Calling ahead is still recommended so you do not make a wasted trip.',
      },
      {
        q: 'Is the first consultation free?',
        a: 'Yes, and there is no obligation afterwards. You will get an honest assessment of your situation, a full explanation of cost, and a straight answer if a remedy is not appropriate.',
      },
      {
        q: 'What should I keep ready for the first call?',
        a: 'Your full name, date of birth, phone number, and location, plus a short factual description of the problem, roughly when it started, and anything already tried. For marriage or love matters, both partners\' dates of birth are needed.',
      },
    ],
    testimonial: null,
    related: ['best-tantrik-mayong', 'tantrik-baba-guwahati', 'real-tantrik-astrologer-assam', 'black-magic-removal-kamakhya'],

    hi: {
      title: 'कामाख्या तांत्रिक कांटैक्ट नंबर | दीपक तांत्रिक',
      desc:
        'कामाख्या तांत्रिक कांटैक्ट नंबर और मायोंग असम तांत्रिक कांटैक्ट नंबर एक ही हैं: +91 9706801250। दीपक तांत्रिक को कॉल या व्हाट्सएप करें। पहली बातचीत मुफ्त।',
      keywords: [
        'कामाख्या तांत्रिक कांटैक्ट नंबर',
        'कामाख्या मंदिर तांत्रिक कांटैक्ट नंबर',
        'मायोंग तांत्रिक कांटैक्ट नंबर',
        'मायोंग असम तांत्रिक कांटैक्ट नंबर व्हाट्सएप नंबर',
        'असम तांत्रिक कांटैक्ट नंबर',
        'गुवाहाटी में तांत्रिक',
      ],
      h1: 'दीपक तांत्रिक से संपर्क करें',
      sub: 'एक ही नंबर उन तक सीधे पहुँचाता है, गुवाहाटी के कामाख्या मंदिर कार्यालय और असम के मायोंग आश्रम, दोनों से।',
      lead: {
        h2: 'दीपक तांत्रिक से संपर्क करें',
        p: [
          'कामाख्या तांत्रिक कांटैक्ट नंबर और मायोंग असम तांत्रिक कांटैक्ट नंबर एक ही नंबर हैं, क्योंकि चिकित्सक एक ही हैं: +91 9706801250। इस पर कॉल करें या व्हाट्सएप करें और आप सीधे दीपक तांत्रिक तक पहुँचते हैं। न कोई सहायक, न कोई कॉल सेंटर, और न ही किसी शुल्क का कोई हिस्सा लेने वाला एजेंट।',
          'चुपचाप सहने के बजाय, कामाख्या और मायोंग की प्राचीन बुद्धि आपकी कई कठिन समस्याओं का हल कर सकती है, लेकिन तभी जब वह आपकी स्थिति के अनुसार सही तरीके से लागू की जाए। पहली बातचीत निःशुल्क है और कोई बाध्यता नहीं है। इसका उपयोग करें।',
        ],
      },
      form: {
        title: 'संदेश भेजें',
        name: 'आपका नाम',
        phone: 'आपका फोन नंबर',
        select: 'समस्या चुनें',
        desc: 'अपनी समस्या संक्षेप में बताएं',
        btn: 'मुफ्त परामर्श का अनुरोध करें',
        note: 'यह फॉर्म अभी कहीं सबमिट नहीं होता। सबसे तेज़ प्रतिक्रिया के लिए +91 9706801250 पर कॉल या व्हाट्सएप करें, या deepaktantrik@assamtantrik.co पर ईमेल करें।',
      },
      deep: [
        {
          h2: 'दो स्थान, एक नंबर',
          p: [
            'दीपक तांत्रिक दो भौतिक स्थानों पर अभ्यास करते हैं और दोनों में सीधे जाया जा सकता है। पहला गुवाहाटी के मलाखुवा में कामाख्या मंदिर तांत्रिक कार्यालय है, पिन कोड 781010, जो नीलाचल पहाड़ी पर मंदिर से थोड़ी दूर है। दूसरा उनका पारिवारिक मायोंग असम तांत्रिक आश्रम मोरिगांव में है, पिन कोड 782411, लगभग 80 किलोमीटर दूर।',
            'चूंकि कामाख्या मंदिर तांत्रिक कांटैक्ट नंबर और मायोंग असम तांत्रिक कांटैक्ट नंबर व्हाट्सएप नंबर दोनों +91 9706801250 हैं, इसलिए आपको यह निर्धारित नहीं करना है कि कौन सा स्थान उपयुक्त है। समस्या बताइए, और वे बताएंगे कि उपाय कहां किया जाना चाहिए और क्यों।',
          ],
        },
        {
          h2: 'कॉल करने पर क्या अपेक्षा करें',
          p: [
            'पहली कॉल एक परामर्श है, कोई लेन-देन नहीं। आपको अपनी ही शब्दों में बताना होगा कि क्या हो रहा है, पूछा जाएगा कि यह कब से चल रहा है और पहले क्या किया गया है, और जहां ज्योतिष प्रासंगिक हो वहां आपकी जन्म तिथि और समय पूछा जाएगा। इसके बाद आपको ईमानदार आकलन मिलेगा और, यदि उपाय उपयुक्त हो, तो इसकी स्पष्ट व्याख्या और लागत।',
            'एक बात का ध्यान रखें। यदि कोई कॉलर आपसे बात किए बिना बड़ी रकम मांगता है, 24 घंटे में परिणाम का वादा करता है, दावा करता है कि वह एकमात्र शक्तिशाली चिकित्सक है, या उसका कोई भौतिक पता नहीं है जहां आप जा सकें, तो यह चेतावनी का संकेत है। असली कामाख्या मंदिर तांत्रिक और असली असम तांत्रिक आपको वंश, स्थान और उपाय की सीमाएं स्पष्ट बताएंगे। किसी को भुगतान करने से पहले <a href="/hi/best-tantrik-mayong">असली तांत्रिक की पहचान</a> कैसे करें, यह पढ़ें।',
          ],
        },
        {
          h2: 'कॉल से पहले क्या तैयार रखें',
          p: [
            'आप जितना विशिष्ट होंगे, उतनी जल्दी उपयोगी उत्तर संभव होगा। साथ रखें: अपना पूरा नाम और जन्म तिथि, वह फोन नंबर जिस पर आपको बुलाया जा सके, वह स्थान जहां से आप कॉल कर रहे हैं, समस्या का संक्षिप्त तथ्यात्मक विवरण, यह लगभग कब से शुरू हुई, और आपने पहले क्या-क्या आजमाया है। विवाह या प्रेम के मामले में दोनों साथियों की जन्म तिथि सटीक पठन के लिए आवश्यक है।',
            'यदि आपकी समस्या में आपके घर में कुछ अस्पष्ट हो रहा है, आपकी परिस्थितियों में अचानक और लगातार बदलाव आया है, या ऐसी बीमारी है जिसका डॉक्टरों ने कोई स्पष्टीकरण नहीं दिया, तो इसे सीधे-सादे तरीके से बताएं। यह पैटर्न विशिष्ट है और इसे सटीक रूप से बताना बेहतर है।',
          ],
        },
        {
          h2: 'गोपनीयता',
          p: [
            'आपसे जो भी बात होती है वह गोपनीय रहती है, और यह कोई अनुषंगा नहीं बल्कि इस अभ्यास का कार्य नियम है। तंत्र आचार्य से संपर्क करने वाले अधिकांश लोग रिश्ते, विवाह या पारिवारिक समस्या से जूझ रहे होते हैं, और इनमें से कोई बात किसी और से चर्चा नहीं की जाती। आपको चिंता नहीं करनी चाहिए कि किसी स्थान पर जाने पर पहचाना जाएगा।',
          ],
        },
      ],
      faqs: [
        {
          q: 'कामाख्या तांत्रिक का कांटैक्ट नंबर क्या है?',
          a: 'यह +91 9706801250 है। यही नंबर मायोंग तांत्रिक कांटैक्ट नंबर और मायोंग असम तांत्रिक कांटैक्ट नंबर के रूप में भी काम करता है, क्योंकि दीपक तांत्रिक दोनों स्थानों पर अभ्यास करते हैं। आप सीधे कॉल या व्हाट्सएप कर सकते हैं।',
        },
        {
          q: 'क्या मैं कॉल करने के बजाय सीधे जा सकता हूं?',
          a: 'हां। दोनों स्थान सीधे जाने योग्य हैं: गुवाहाटी के मलाखुवा में कामाख्या मंदिर के पास का कार्यालय (पिन 781010), और मोरिगांव का मायोंग आश्रम (पिन 782411)। फिर भी पहले कॉल करने की सलाह दी जाती है ताकि आपकी यात्रा व्यर्थ न हो।',
        },
        {
          q: 'क्या पहली बातचीत निःशुल्क है?',
          a: 'हां, और उसके बाद कोई बाध्यता नहीं है। आपको अपनी स्थिति का ईमानदार आकलन, लागत का पूर्ण विवरण, और यदि उपाय उपयुक्त नहीं हो तो सीधा उत्तर मिलेगा।',
        },
        {
          q: 'पहली कॉल के लिए मुझे क्या तैयार रखना चाहिए?',
          a: 'अपना पूरा नाम, जन्म तिथि, फोन नंबर और स्थान, साथ ही समस्या का संक्षिप्त तथ्यात्मक विवरण, यह लगभग कब से शुरू हुई, और पहले क्या आजमाया गया। विवाह या प्रेम के मामलों में दोनों साथियों की जन्म तिथि आवश्यक है।',
        },
      ],
      testimonial: null,
      related: ['best-tantrik-mayong', 'tantrik-baba-guwahati', 'real-tantrik-astrologer-assam', 'black-magic-removal-kamakhya'],
    },
  },
  // =====================================================================
  // The trust page. Both competitors ranking against you (ayushrudhra.com,
  // mayongtantrik.org) run an anti-fraud / "verify official platforms" page
  // and it is the single most important thing neither the technical work nor
  // the reviews can replace. This niche attracts impersonation, and this
  // practitioner has in fact had his name and copy used without permission.
  // That makes the page an honest warning, not marketing.
  verify: {
    slug: 'verify',
    file: 'verify',
    kind: 'default',
    priority: '0.9',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Verify Deepak Tantrik | Beware of Fake Tantriks',
    desc:
      'How to confirm you are talking to the real Deepak Tantrik, Mayong and Kamakhya. One number only: +91 9706801250. Both addresses and scam warnings.',
    // This page owns: is THIS person real, and how do I check.
    // /real-tantrik-astrologer-assam owns: how do I evaluate ANY practitioner.
    // They must not share terms or they compete for the same query.
    keywords: [
      'verify deepak tantrik',
      'is deepak tantrik real',
      'beware of fake tantrik',
      'kamakhya temple tantrik fraud',
      'mayong tantrik fake number',
      'impersonation tantrik india',
      'deepak tantrik official website',
    ],
    h1: 'Verify Deepak Tantrik: How to Spot a Fake',
    sub: 'Impersonation using his name is happening. Here is the only number, the two real addresses, and exactly what he will never ask you for.',

    lead: {
      h2: 'There is only one number',
      p: [
        'If you are reading this because you were contacted by someone claiming to be Deepak Tantrik, treat that as a warning sign. The only number for this practice is +91 9706801250. Call it yourself. Do not use a number handed to you by a stranger, a WhatsApp forward, a social media message, or a "consultant" offering to arrange an appointment.',
        'Impersonation in this field is common and it is getting worse. Fake practitioners use a real person\'s name, lift their photographs and their written descriptions, publish a convincing-looking site, and collect payments. Some of the material written about him has been copied verbatim onto other websites. Copied text is a reliable tell. If a page about Deepak Tantrik appears on a domain that is not assamtantrik.co, it is not him.',
      ],
    },

    // The three things a fake will ask for. This is the substance of the page
    // and the reason it earns links rather than reads as marketing.
    redFlags: [
      {
        h2: '1. Payment before any conversation',
        p: [
          'A genuine practitioner speaks with you first, understands the situation, and then explains what is involved and what it costs. A fraudster wants money before that happens, and manufactures urgency to get it. Nobody who has not first discussed your situation has any basis for quoting you anything. If a payment link, UPI request or QR code arrives before a conversation, stop there.',
        ],
      },
      {
        h2: '2. Guarantees, and anyone who will "remove" someone',
        p: [
          'Be suspicious of any promise of a guaranteed outcome, a fixed date by which your problem will be solved, or 100% results. Deepak Tantrik makes no such claim, and the reason is straightforward: an astrologer or tantrik cannot honestly promise control over another person or over events. Any practitioner who does is telling you what they think you want to hear.',
          'Treat an offer to harm, control, "target" or remove a specific person as an absolute disqualifier. There is no version of tantra where that is legitimate, and no genuine practitioner will propose it. A real consultation is about your own situation and what you can reasonably do about it.',
        ],
      },
      {
        h2: '3. No location, no lineage, no way to meet',
        p: [
          'This practice has two physical addresses that anyone may visit without an appointment: the office near the Kamakhya Temple at Malakhuwa, Guwahati, postal code 781010, and the Mayong Ashram in Morigaon, postal code 782411. A genuine practitioner will give you those without being asked.',
          'Anyone who cannot name a location, cannot say who initiated them or in which family they were raised, and will not take a call directly, is not operating a real practice. That includes anyone whose only channel is a messaging app.',
        ],
      },
    ],

    // Written by hand because it is a factual statement about what this
    // practice will and will not do. It is the trust signal, and it is also
    // the thing a fraudster cannot copy convincingly.
    promise: {
      h2: 'What Deepak Tantrik will and will not do',
      p: [
        'The number +91 9706801250 reaches him directly. There is no assistant, no call centre, and no agent taking a commission on any fee. The first consultation is free and carries no obligation, including the decision to do nothing at all.',
        'Fees for a specific remedy are explained in full before any work begins, and they do not change afterwards. What is discussed is confidential, and no visitor is asked to be named or photographed. The practice is located in two places, both walk-in, and both are ordinary rooms where a conversation takes place privately rather than a staged setting.',
        'What he will not do: promise a guaranteed result, ask anyone to harm another person, quote a fee he has not first discussed, ask for payment through an unverified link from a stranger, or permit anyone to act on his behalf without saying so. He also does not claim that the Kamakhya Temple administration authorises this or any other online consultation, because it does not. This practice is independent of the temple and is not an official temple service.',
        'If anyone contacts you claiming to be him on a different number, or asks for money in his name, please report that number. It is the single most useful thing you can do for anyone who searches for him later.',
      ],
    },

    deep: [
      {
        h2: 'Why this page exists',
        p: [
          'Search for a tantrik in Kamakhya or Mayong and you will find several dozen websites carrying a phone number and a name. Many are one page long. Some are impersonations. A few are legitimate competing practices with their own genuine practitioners, and they deserve your custom as much as anyone. The difficulty for an ordinary person is telling them apart without any way to check.',
          'This page is the check. It exists so that a person who lands here can confirm in thirty seconds whether the number in front of them is the right one, and so that anyone searching later finds the confirmation from the source rather than from another aggregator. <a href="/real-tantrik-astrologer-assam">The longer guide to identifying a genuine practitioner in Assam</a> covers the general principles, including the five red flags and five genuine signs, and is worth reading whether or not you came here looking for anyone in particular.',
        ],
      },
      {
        h2: 'How this site is different from the others',
        p: [
          'It publishes a permanent address at two locations rather than "available worldwide", it names a lineage that local elders in Mayong can confirm, and it states plainly on the <a href="/about">about page</a> that no genuine practitioner guarantees results. This site does not publish client testimonials that it cannot independently verify. What it does publish is the lineage, the two addresses, the direct number and the limits of the practice, because those are the things a person can actually check.',
          'None of that is a marketing position. It is simply what happens when a site is built to be accurate rather than to win a search. You can judge the rest of this site by the same standard: every page is written and checked by an automated audit, the Hindi pages are real pages rather than a translation widget, and the contact details on every single page are the same two addresses and the same one number.',
        ],
      },
    ],

    faqs: [
      {
        q: 'What is the real Deepak Tantrik contact number?',
        a: '+91 9706801250. It is the only number for this practice. Call or WhatsApp it directly. If anyone gives you a different number claiming to be him, it is not him.',
      },
      {
        q: 'Are there other sites with his name and phone number?',
        a: 'There may be older or lookalike sites, and there is at least one that has copied his written descriptions verbatim. assamtantrik.co is the official site. If his name, his number and his photographs appear on a different domain, that domain is not authorised by him.',
      },
      {
        q: 'Does the Kamakhya Temple authorise this practice?',
        a: 'No. The practice is independent of the Kamakhya Temple and is not an official temple service. The temple administration has stated publicly that many online puja and tantra websites are not authorised by them, so be sceptical of any website that implies otherwise.',
      },
      {
        q: 'Is the first consultation really free?',
        a: 'Yes, and there is no obligation afterwards. You get an honest assessment of the situation, a full explanation of cost, and a straight answer if a remedy is not appropriate.',
      },
    ],
    testimonial: null,
    related: ['real-tantrik-astrologer-assam', 'contact', 'about', 'best-tantrik-mayong'],

    hi: {
      title: 'नकली तांत्रिकों से कैसे बचें | दीपक तांत्रिक की पहचान',
      desc:
        'दीपक तांत्रिक से बात कर रहे हैं या नहीं, यह कैसे जाँचें। केवल एक नंबर: +91 9706801250। पूरा पता, समय और धोखाधड़ी की चेतावनी यहाँ।',
      keywords: [
        'दीपक तांत्रिक की पहचान',
        'नकली तांत्रिक से बचें',
        'असली तांत्रिक कांटैक्ट नंबर',
        'कामाख्या मंदिर तांत्रिक ठगी',
        'असम तांत्रिक धोखाधड़ी',
        'मायोंग तांत्रिक नकली नंबर',
      ],
      h1: 'दीपक तांत्रिक की पहचान: नकली तांत्रिक कैसे पहचानें',
      sub: 'उनके नाम से धोखाधड़ी हो रही है। यहाँ केवल असली नंबर, दोनों असली पते, और वे कभी क्या नहीं माँगेंगे, यह सब बताया गया है।',
      lead: {
        h2: 'केवल एक ही नंबर है',
        p: [
          'यदि आप यह पढ़ रहे हैं क्योंकि किसी ने दीपक तांत्रिक बनकर आपसे संपर्क किया है, तो इसे चेतावनी का संकेत मानें। इस अभ्यास के लिए केवल एक नंबर है: +91 9706801250। इसे स्वयं कॉल करें। किसी अजनबी, व्हाट्सएप फॉरवर्ड, सोशल मीडिया संदेश या "कंसल्टेंट" द्वारा दिया गया नंबर न उपयोग करें।',
          'इस क्षेत्र में प्रतिरूपण सामान्य है और बढ़ता जा रहा है। नकली चिकित्सक किसी वास्तविक व्यक्ति का नाम, उसकी तस्वीरें और लिखा गया विवरण लेकर एक आकर्षक वेबसाइट बनाते हैं और भुगतान लेते हैं। दीपक तांत्रिक के बारे में लिखा गया कुछ सामग्री शब्दशः दूसरी वेबसाइटों पर कॉपी की गई है। कॉपी किया गया टेक्स्ट एक भरोसेमंद संकेत है। यदि assamtantrik.co के अलावा किसी अन्य डोमेन पर दीपक तांत्रिक का पेज दिखे, तो वह उनका नहीं है।',
        ],
      },
      redFlags: [
        {
          h2: '1. बातचीत से पहले भुगतान',
          p: [
            'असली चिकित्सक पहले आपकी बात सुनता है, परिस्थिति समझता है, फिर बताता है कि इसमें क्या शामिल है और उसकी लागत क्या होगी। ठगी बातचीत से पहले पैसा चाहता है और जल्दबाजी बनाकर लेता है। जिसने आपकी परिस्थिति पर पहले चर्चा नहीं की है, उसके पास शुल्क बताने का कोई आधार नहीं है। यदि बातचीत से पहले कोई भुगतान लिंक, UPI अनुरोध या QR कोड आए, तो वहीं रुक जाएं।',
          ],
        },
        {
          h2: '2. गारंटी, और जो किसी को "हटा" दे',
          p: [
            'पूर्ण गारंटी, किसी निश्चित तिथि तक समस्या हल होने का वादा, या 100% परिणाम वाले दावों पर सावधान रहें। दीपक तांत्रिक ऐसा कोई दावा नहीं करते, और कारण सीधा है: कोई ज्योतिषी या तांत्रिक ईमानदार रूप से किसी दूसरे व्यक्ति या घटनाओं पर नियंत्रण का वादा नहीं कर सकता। ऐसा वादा करने वाला आपको वही बता रहा है जो सुनना चाहता है।',
            'किसी विशेष व्यक्ति को नुकसान पहुँचाने, नियंत्रित करने, "टारगेट" करने या हटाने की पेशकश को पूर्ण तरीके से अयोग्य मानें। तंत्र का कोई भी वैध रूप यह नहीं है, और कोई असली चिकित्सक ऐसा प्रस्ताव नहीं करेगा। असली परामर्श आपकी अपनी परिस्थिति के बारे में होता है।',
          ],
        },
        {
          h2: '3. कोई स्थान नहीं, कोई वंश नहीं, मिलने का कोई तरीका नहीं',
          p: [
            'इस अभ्यास के दो भौतिक पते हैं जहां बिना किसी अपॉइंटमेंट के कोई भी जा सकता है: गुवाहाटी के मलाखुवा में कामाख्या मंदिर के पास का कार्यालय, पिन कोड 781010, और मोरिगांव का मायोंग आश्रम, पिन कोड 782411। असली चिकित्सक ये पते पूछे बिना बता देगा।',
            'जो न स्थान बता सके, न यह बता सके कि दीक्षा किससे मिली या किस परिवार में पले, और सीधे बात न करे, वह वास्तविक अभ्यास नहीं चला रहा। इसमें वह भी शामिल है जिसका एकमात्र माध्यम कोई मैसेजिंग ऐप हो।',
          ],
        },
      ],
      promise: {
        h2: 'दीपक तांत्रिक क्या करेंगे और क्या नहीं',
        p: [
          '+91 9706801250 नंबर सीधे उन तक पहुँचाता है। कोई सहायक नहीं, कोई कॉल सेंटर नहीं, और कोई एजेंट नहीं जो किसी शुल्क पर कमीशन लेता हो। पहली बातचीत निःशुल्क है और कोई बाध्यता नहीं है, इसमें कुछ न करने का निर्णय शामिल है।',
          'किसी विशेष उपाय की शुल्क कार्य शुरू होने से पूरी तरह बता दी जाती है और बाद में नहीं बदलती। चर्चा किया गया सब गोपनीय रहता है, और किसी मेहमान का नाम लेने या फोटो लेने के लिए कहा नहीं जाता। अभ्यास दो स्थानों पर है, दोनों में सीधे जा सकते हैं, और दोनों साधारण कमरे हैं जहां निजी तौर पर बात होती है, कोई मंचबद्ध व्यवस्था नहीं।',
          'वे यह नहीं करेंगे: परिणाम की गारंटी देना, किसी को नुकसान पहुँचाने को कहना, बिना चर्चा किए शुल्क बताना, किसी अजनबी के असत्यापित लिंक से भुगतान माँगना, या किसी को अपनी ओर से बिना बताए काम करने देना। वे यह भी नहीं कहते कि कामाख्या मंदिर प्रशासन इस अभ्यास या किसी अन्य ऑनलाइन परामर्श को प्राधिकृत करता है, क्योंकि वह नहीं करता। यह अभ्यास मंदिर से स्वतंत्र है और मंदिर की आधिकारिक सेवा नहीं है।',
          'यदि कोई दूसरे नंबर से उनका बहाना बनकर आपसे संपर्क करे, या उनके नाम से पैसे माँगे, तो कृपया उस नंबर की शिकायत करें। यह वह सबसे उपयोगी काम है जो आप बाद में उनकी खोज करने वाले किसी व्यक्ति के लिए कर सकते हैं।',
        ],
      },
      deep: [
        {
          h2: 'यह पृष्ठ क्यों है',
          p: [
            'कामाख्या या मायोंग में तांत्रिक खोजें और आपको कई दर्जन वेबसाइट मिलेंगे जिन पर एक फोन नंबर और नाम लिखा है। बहुत से केवल एक पन्ने के हैं। कुछ प्रतिरूपण हैं। कुछ वैध प्रतिस्पर्धी अभ्यास हैं जिनके अपने सच्चे चिकित्सक हैं, और वे भी उतने ही हकदार हैं। एक सामान्य व्यक्ति के लिए कठिनाई यह है कि बिना किसी जाँच के उन्हें अलग करना संभव नहीं है।',
            'यह पृष्ठ वही जाँच है। यह इसलिए मौजूद है कि कोई व्यक्ति तीस सेकंड में पुष्टि कर सके कि सामने का नंबर सही है, और ताकि बाद में खोजने वाले को यह पुष्टि किसी एग्रीगेटर से नहीं, सीधे स्रोत से मिले। <a href="/hi/real-tantrik-astrologer-assam">असम में असली चिकित्सक की पहचान का लंबा गाइड</a> सामान्य सिद्धांतों को कवर करता है, और उसे पढ़ना चाहिए चाहे आप किसी विशेष व्यक्ति की तलाश में आए हों या नहीं।',
          ],
        },
        {
          h2: 'यह साइट दूसरों से कैसे अलग है',
          p: [
            'यह "दुनिया भर में उपलब्ध" के बजाय दो स्थानों का स्थायी पता प्रकाशित करता है, एक ऐसी वंश बताता है जिसकी पुष्टि मायोंग के स्थानीय बुज़ुर्ग कर सकते हैं, और <a href="/hi/about">परिचय पृष्ठ</a> पर साफ़ लिखता है कि कोई असली चिकित्सक परिणाम की गारंटी नहीं देता। यह साइट ऐसी ग्राहक कहानियां प्रकाशित नहीं करती जिन्हें स्वतंत्र रूप से सत्यापित नहीं किया जा सकता।',
            'उनमें से कोई भी बात एक मार्केटिंग स्थिति नहीं है। यह बस तब होता है जब कोई साइट सही होने के लिए बनाई जाती है, न कि किसी सर्च को जीतने के लिए। आप इस साइट का बाकी हिस्सा भी उसी मानदंड से आंक सकते हैं: हर पृष्ठ स्वचालित ऑडिट से गुजरता है, हिंदी पृष्ठ वास्तविक पृष्ठ हैं न कि अनुवाद विजेट, और हर एक पृष्ठ पर संपर्क विवरण एक ही दो पते और एक ही नंबर हैं।',
          ],
        },
      ],
      faqs: [
        {
          q: 'दीपक तांत्रिक का असली कांटैक्ट नंबर क्या है?',
          a: '+91 9706801250। यह इस अभ्यास के लिए केवल नंबर है। इसे सीधे कॉल या व्हाट्सएप करें। यदि कोई दूसरा नंबर बताकर उनका बहाना बनाए, तो वह उनका नंबर नहीं है।',
        },
        {
          q: 'क्या उनके नाम और फोन नंबर वाली अन्य साइटें हैं?',
          a: 'पुरानी या मिलती-जुलती साइटें हो सकती हैं, और उनके लिखित विवरण तो शब्दशः कॉपी किए गए कम से कम एक साइट मौजूद है। assamtantrik.co आधिकारिक साइट है। यदि उनका नाम, नंबर और तस्वीरें किसी अन्य डोमेन पर दिखें, तो वह डोमेन उनके द्वारा अधिकृत नहीं है।',
        },
        {
          q: 'क्या कामाख्या मंदिर इस अभ्यास को प्राधिकृत करता है?',
          a: 'नहीं। अभ्यास कामाख्या मंदिर से स्वतंत्र है और मंदिर की आधिकारिक सेवा नहीं है। मंदिर प्रशासन ने सार्वजनिक रूप से कहा है कि कई ऑनलाइन पूजा और तंत्र वेबसाइट उनके द्वारा अधिकृत नहीं हैं, इसलिए ऐसी किसी भी वेबसाइट पर संदेह करें जो इसका इशारा करे।',
        },
        {
          q: 'क्या पहली बातचीत वाकई निःशुल्क है?',
          a: 'हां, और उसके बाद कोई बाध्यता नहीं है। आपको स्थिति का ईमानदार आकलन, लागत का पूर्ण विवरण, और यदि उपाय उपयुक्त नहीं हो तो सीधा उत्तर मिलेगा।',
        },
      ],
      testimonial: null,
      related: ['real-tantrik-astrologer-assam', 'contact', 'about', 'best-tantrik-mayong'],
    },
  },
};
