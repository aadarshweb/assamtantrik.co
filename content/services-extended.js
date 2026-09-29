// content/services-extended.js
// Four service lines the site already sells in its own copy but had no page
// for. Adding these is filling a gap, not inventing a service:
//
//   business / career   -> named in the homepage testimonials and in the
//                          "Services Performed at Kamakhya Temple" list
//   childlessness       -> same list: "childlessness resolution rituals"
//   evil eye            -> named repeatedly in the FAQ and footer
//   kundli              -> every page already says the kundli is read in the
//                          first consultation
//
// Each carries a real Hindi translation, because the Hindi service cluster is
// the one part of the market no competitor has.

const SERVICES_EXT = [
  // =====================================================================
  {
    slug: 'business-problem-solution',
    file: 'business-problem-solution',
    icon: 'briefcase',
    priority: '0.9',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Business Problem Solution Kamakhya | Deepak Tantrik',
    desc:
      'Business problem solution by Deepak Tantrik at Kamakhya Temple, Guwahati and Mayong. Vastu, muhurat and mantra guidance. Call +91 9706801250 free.',
    keywords: [
      'business problem solution tantrik',
      'business failure tantrik kamakhya',
      'vastu correction guwahati',
      'muhurat for business',
      'business growth tantra',
      'financial problem tantrik assam',
      'kamakhya tantrik contact number',
    ],
    h1: 'Business Problem Solution in Kamakhya and Mayong',
    sub: 'Financial remedies, muhurat selection and Vastu correction for business that has stalled or turned.',
    h2: 'When a Business Stalls, Something Usually Changed',
    intro: [
      'A business that was working and then stopped is the pattern that brings most people to a tantrik, and it is worth taking the pattern seriously rather than reaching for a ritual. Revenue falls, staff leave, a supplier relationship breaks, a partner withdraws, premises that used to work stop working. Each of these has an ordinary explanation, and the ordinary explanations are usually correct.',
      'What a consultation adds is the timing. Deepak Tantrik looks at what changed and when, reads the kundli of the person running the business for the periods of stress in the chart, and considers whether the premises, the direction of movement, or the timing of a decision is working against the venture. Where a remedy is appropriate it is specific: a muhurat, a Vastu correction in the building, a mantra practice, or a change in the decision itself.',
      'He will also tell you when not to do a remedy. If the honest answer is that a contract needs renegotiating or a partner needs replacing, that is what you will hear, because a ritual performed over an unresolved commercial problem only delays the problem and costs you the fee.',
    ],
    image: '/images/portrait.jpg',
    imageAlt: 'Deepak Tantrik, business problem solution specialist at Kamakhya Temple and Mayong, Assam',
    deep: [
      {
        h2: 'What the consultation actually covers',
        p: [
          'The first conversation establishes the shape of the problem: which part of the business is failing, over what period, what has already been tried, and what the person is hoping to change. Only then is the kundli read, because the chart is read against a specific question. A generic horoscope reading is of no use to anyone, and a practitioner who offers one is selling a report rather than an assessment.',
          'From there the work is usually one or more of four things. <strong>Muhurat selection</strong> means choosing a date and time for a launch, a registration, a move, a loan discussion or a product launch where the chart and the panchang are favourable, which is a scheduling decision rather than a ritual. <strong>Vastu correction</strong> means assessing the actual premises, direction of the main door, the position of the cash locker or accounting point, and the kitchen, and fixing what can be fixed cheaply. <strong>Mantra practice</strong> means a daily practice the proprietor performs themselves, which is only useful if it is one they will actually do. And sometimes the recommendation is a change of approach rather than a remedy at all.',
        ],
      },
      {
        h2: 'Signs people bring this in for',
        p: [
          'Revenue that fell sharply and has not recovered despite changed effort. A business that was profitable and stopped being profitable at a specific point, usually after a move, a change of partner, a change of name, or a change of premises. Persistent cash flow problems where the accounts look correct. Difficulty in finalising deals that are otherwise agreed. Staff turnover that keeps rising. A venture where the owner works constantly and the return does not follow.',
          'Two cautions worth stating plainly. First, a business problem is rarely only a spiritual one; if there is a cash flow or accounting fault, that has to be fixed by a competent accountant, not by a ritual. Second, nothing in this line of work substitutes for professional advice on tax, company law or financial planning. Deepak Tantrik works within the tantra and Jyotish tradition and says so rather than implying otherwise.',
        ],
      },
      {
        h2: 'What this cannot do',
        p: [
          'No practitioner can make a loss-making business profitable through ritual. What can sometimes be identified and corrected are the specific obstacles: a badly placed entrance, a decision made in a hostile period, a partnership that was never sound, a name or direction that is generating friction in practice, or a proprietor whose own timing is persistently against the venture.',
          'If the assessment is that the business is structurally unsound, that is what you will be told, and the fee for the consultation is the only charge. Deepak Tantrik does not take a percentage of turnover, does not require ongoing monthly payments, and does not sell bundles of remedies. The consultation is free; the remedy, if there is one worth doing, is quoted before it is performed.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a tantrik actually fix a failing business?',
        a: 'Not in the sense of making an unsound business sound. What can be identified and corrected are specific obstacles: unfavourable premises, a decision taken in a hostile period, a partnership that was never viable, or a launch date badly chosen. If the assessment is that the business is structurally unsound, you will be told that instead of being sold a remedy.',
      },
      {
        q: 'What is muhurat and do I need it?',
        a: 'Muhrats are auspicious dates and times. Selecting one for a registration, launch, move or major decision is a scheduling decision based on your chart and the panchang, not a ritual. It is often the least expensive and most practical part of the whole consultation.',
      },
      {
        q: 'Is Vastu correction expensive?',
        a: 'It depends entirely on the building. Many corrections are planning, placement or a change of use and cost nothing but attention. Some require physical work. You are told what is needed and what it costs before anything is arranged, and no work is started without your agreement.',
      },
      {
        q: 'Do you take a percentage of my business?',
        a: 'No. There is no percentage, no commission, no ongoing monthly arrangement and no bundle. The first consultation is free and any remedy is quoted as a fixed amount before it is performed.',
      },
    ],
    testimonial: {
      text: 'I had given up hope on my career but with his powerful remedies, I found the success I was searching for.',
      name: 'Amit Kumar, Guwahati',
      initial: 'A',
    },
    related: ['vashikaran-specialist-mayong', 'tantrik-baba-guwahati', 'contact', 'kundli-consultation'],

    hi: {
      title: 'कामाख्या में व्यापार समस्या का समाधान | दीपक तांत्रिक',
      desc:
        'कामाख्या मंदिर, गुवाहाटी और मायोंग में व्यापार समस्या का समाधान। वास्तु, मुहूर्त और मंत्र मार्गदर्शन। +91 9706801250 पर मुफ्त कॉल करें।',
      keywords: [
        'व्यापार समस्या समाधान तांत्रिक',
        'व्यापार में असफलता तांत्रिक कामाख्या',
        'वास्तु सुधार गुवाहाटी',
        'व्यापार के लिए मुहूर्त',
        'वित्तीय समस्या तांत्रिक असम',
        'कामाख्या तांत्रिक कांटैक्ट नंबर',
      ],
      h1: 'कामाख्या और मायोंग में व्यापार समस्या का समाधान',
      sub: 'आर्थिक उपाय, मुहूर्त चयन और व्यापार के लिए वास्तु सुधार।',
      h2: 'जब व्यापार रुक जाता है, तो कुछ बदला होता है',
      intro: [
        'जो व्यापार चल रहा था और फिर रुक गया, यही वह पैटर्न है जिसकी वजह से लोग तांत्रिक के पास पहुँचते हैं। और इस पैटर्न को गंभीरता से लेना चाहिए, तुरंत अनुष्ठान के लिए दौड़ने से पहले। आमदनी गिरती है, कर्मचारी जाते हैं, आपूर्तिकारी का रिश्ता टूटता है, साथेदार अलग हो जाता है, वह जगह जहां पहले काम चलता था अब नहीं चलती। इनमें से हर एक की सामान्य व्याख्या होती है, और सामान्य व्याख्या आमतौर पर सही होती है।',
        'परामर्श में जोड़ना यह है कि समय की जांच। दीपक तांत्रिक देखते हैं कि क्या और कब बदला, व्यापार चलाने वाले की कुंडली में तनाव के अवधि पढ़ते हैं, और यह देखते हैं कि क्या परिस्थित, आवागमन की दिशा या निर्णय का समय व्यापार के खिलाफ जा रहा है। जहां उपाय उपयुक्त हो, वह विशिष्ट होता है: मुहूर्त, भवन में वास्तु सुधार, मंत्र साधना, या निर्णय में ही बदलाव।',
        'वे यह भी बताएंगे कि कब अनुष्ठान न करें। यदि सच्चा उत्तर यह है कि अनुबंध पुनः वार्ता करने या साथेदार बदलने की जरूरत है, तो वही सुनाई देंगे, क्योंकि अनसुलझे व्यावसायिक समस्या पर अनुष्ठान समस्या को केवल टालता है और शुल्क भी लेता है।',
      ],
      deep: [
        {
          h2: 'परामर्श में वास्तव में क्या शामिल होता है',
          p: [
            'पहली बातचीत समस्या का आकार तय करती है: व्यापार का कौन सा हिस्सा विफल है, कितने समय से, पहले क्या आजमाया गया, और व्यक्ति क्या बदलना चाहता है। तभी कुंडली पढ़ी जाती है, क्योंकि कुंडली किसी विशेष प्रश्न के संदर्भ में पढ़ी जाती है। सामान्य जन्मपत्री रीडिंग किसी के काम नहीं आती, और जो चिकित्सक ऐसा देता है वह रिपोर्ट बेच रहा है, आकलन नहीं।',
            'इसके बाद काम आमतौर पर इन चार में से एक या अधिक होता है। <strong>मुहूर्त चयन</strong> का अर्थ है पंचांग और कुंडली के अनुकूल दिन-समय चुनना पंजीकरण, उद्घाटन, स्थानांतरण, ऋण वार्ता या उत्पादन शुरू करने के लिए, यह अनुष्ठान नहीं, निर्धारण का निर्णय है। <strong>वास्तु सुधार</strong> का अर्थ है वास्तविक भवन, मुख्य द्वार की दिशा, तिजोरी या लेखा स्थान, और रसोई की स्थिति का आकलन करना और सस्ते में जो सुधार हो सकता है वह करना। <strong>मंत्र साधना</strong> का अर्थ है मालिक द्वारा रोज की जाने वाली साधना, जो तभी काम की है जब वह वास्तव में की जाए। और कभी-कभी सिफारिश अनुष्ठान नहीं, दृष्टिकोण बदलने की होती है।',
          ],
        },
        {
          h2: 'लोग किन बातों के लिए आते हैं',
          p: [
            'अचानक गिरी आमदनी जो बदली कोशिश के बावजूद नहीं सुधरी। वह व्यापार जो लाभदायक था और किसी विशेष बिंदु पर लाभदायक नहीं रहा, आमतौर पर स्थान बदलने, साथेदार बदलने, नाम बदलने या जगह बदलने के बाद। वह लगातार नकदी की कमी जहां हिसाब सही दिखते हैं। तय हो चुसे सौदे पूरा होने में कठिनाई। कर्मचारियों का लगातार बदलना। ऐसा व्यापार जहां मालिक लगातार मेहनत करता है पर लाभ नहीं आता।',
            'दो स्पष्ट चेतावनियां कहने योग्य हैं। पहली, व्यापारी समस्या शायद ही केवल आध्यात्मिक हो; यदि नकदी प्रवाह या हिसाब में कोई गड़बड़ी है, तो वह योग्य लेखाकार से ठीक होनी चाहिए, अनुष्ठान से नहीं। दूसरी, इस क्षेत्र की कुछ भी कर, विशेष या बित्तीय योजना पर पेशेवर सलाह का विकल्प नहीं है। दीपक तांत्रिक तंत्र और ज्योतिष परंपरा में काम करते हैं और यह बात स्पष्ट कहते हैं।',
          ],
        },
        {
          h2: 'यह क्या नहीं कर सकता',
          p: [
            'कोई चिकित्सक केवल अनुष्ठान से घाटे वाले व्यापार को लाभदायक नहीं बना सकता। जो बाधाएं पहचानी और ठीक की जा सकती हैं वे विशिष्ट हैं: अनुकूल नहीं जगह, प्रतिकूल अवधि में लिया गया निर्णय, कभी ठीक से न रहा साझेदारी, या बुरे समय में चुना गया शुभारंभ।',
            'यदि आकलन यह निकले कि व्यापार की संरचना ही खराब है, तो यही बताया जाएगा, और परामर्श की एकमात्र शुल्क लिया जाएगा। दीपक तांत्रिक आय का प्रतिशत नहीं लेते, मासिक भुगतान नहीं मांगते, और उपायों के बंडल नहीं बेचते। परामर्श निःशुल्क है; उपाय, यदि करने योग्य हो, तो निश्चित राशि पहले बताई जाती है।',
          ],
        },
      ],
      faqs: [
        {
          q: 'क्या तांत्रिक वाकई विफल व्यापार ठीक कर सकता है?',
          a: 'इस अर्थ में नहीं कि संरचना रूप से असफल व्यापार को सफल बना दिया जाए। जो बाधाएं पहचानी और ठीक की जा सकती हैं वे विशिष्ट हैं: अनुकूल नहीं जगह, प्रतिकूल अवधि में निर्णय, कभी ठीक न रही साझेदारी, या बुरे समय में चुना शुभारंभ। यदि आकलन यह कहे कि व्यापार संरचनात्मक रूप से अस्वस्थ है, तो यही बताया जाएगा।',
        },
        {
          q: 'मुहूर्त क्या है और क्या मुझे इसकी आवश्यकता है?',
          a: 'मुहूर्त शुभ दिन और समय हैं। पंजीकरण, उद्घाटन, स्थानांतरण या बड़े निर्णय के लिए एक चुनना आपकी कुंडली और पंचांग के आधार पर निर्धारण का निर्णय है, अनुष्ठान नहीं। यह अक्सर पूरे परामर्श का सबसे कम खर्चा और सबसे व्यावहारिक हिस्सा होता है।',
        },
        {
          q: 'क्या वास्तु सुधार महंगा है?',
          a: 'यह पूरी तरह भवन पर निर्भर है। कई सुधार केवल योजना, स्थान या उपयोग बदलना है और उनकी कीमत केवल ध्यान है। कुछ में भौतिक काम चाहिए। आवश्यकता और लागत कुछ भी व्यवस्था करने से पहले बताई जाती है, और आपकी सहमति के बिना काम शुरू नहीं होता।',
        },
        {
          q: 'क्या आप मेरे व्यापार का प्रतिशत लेते हैं?',
          a: 'नहीं। कोई प्रतिशत नहीं, कोई कमीशन नहीं, कोई मासिक व्यवस्था नहीं और कोई बंडल नहीं। पहली बातचीत निःशुल्क है और कोई उपाय निश्चित राशि पहले बताकर किया जाता है।',
        },
      ],
      testimonial: {
        text: 'मैं अपने करियर से निराश हो चुका था, लेकिन उनके शक्तिशाली उपायों से मुझे वह सफलता मिली जिसका मैं खोज रहा था।',
        name: 'अमित कुमार, गुवाहाटी',
        initial: 'अ',
      },
    },
  },

  // =====================================================================
  {
    slug: 'childless-problem-solution',
    file: 'childless-problem-solution',
    icon: 'heart',
    priority: '0.8',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Childless Problem Solution Kamakhya | Deepak Tantrik',
    desc:
      'Childless problem solution by Vedic astrology, nakshatra dosha and Kamakhya puja. Deepak Tantrik, Mayong and Guwahati. Call +91 9706801250 free first.',
    keywords: [
      'childless problem solution',
      'santaan dosh remedy',
      'nakshatra dosh correction',
      'kamakhya santan puja',
      'best tantrik in kamakhya',
      'mayong assam tantrik',
      'kamakhya tantrik contact number',
    ],
    h1: 'Childless Problem Solution at Kamakhya and Mayong',
    sub: 'Nakshatra dosha, planetary periods and Kamakhya puja, assessed from the charts of both partners.',
    h2: 'Two Charts, One Question',
    intro: [
      'The most common reason a couple seeks astrological help about children is not a single defect in one chart but a mismatch between two. One partner may carry a dosha that is neutralising in their own chart and active in theirs; one may be in a period that suppresses fertility while the other is not; the conception may repeatedly coincide with a particular transit or with a month that has historically produced difficulty for the family.',
      'That is why both charts are read, together, and not one. Deepak Tantrik reads the lagna, the navamsa, the seventh house and the fifth house of each partner, checks the periods either is currently running, and identifies whether there is a dosha that is traditionally treated, a period that is merely difficult, or a combination where a timing adjustment alone resolves most of the difficulty.',
      'It is worth being straightforward about what can and cannot be done. Where a dosha is present and traditionally remediable, the remedy is well defined and he will tell you what it involves. Where a medical factor is present, no remedy substitutes for a doctor, and he will say so plainly rather than take the fee.',
    ],
    image: '/images/religious.jpg',
    imageAlt: 'Kamakhya Temple ritual lamps during a puja for couples seeking a child, Guwahati Assam',
    deep: [
      {
        h2: 'What is actually assessed',
        p: [
          'Four charts matter here, not two: the birth charts of both partners, and the chart of the mother for the fifth house and the periods of conception. The fifth house of the lagna, the fifth lord\'s placement and strength, the condition of the navamsa, the current mahadasha and antardasha of both partners, and Jupiter\'s transit, which has a traditional and fairly well-documented relationship to conception.',
          'Nakshatra dosha is checked specifically because it is the most commonly cited reason and the most frequently overstated. It is a real consideration in traditional practice, but it is a description of a birth-chart feature, not a verdict: many people with a flagged dosha conceive without difficulty, and some without it do not. The assessment is whether it is present, whether it is active, and whether it is actually relevant to the case in front of him, rather than assuming it decides the outcome.',
        ],
      },
      {
        h2: 'What a remedy here involves',
        p: [
          'Where a dosha is active, the classical remedy is a specific mantra with a count, a timing, and a period during which it is done, sometimes combined with a ritual at Kamakhya. That is a well-defined practice and it is described to you fully before it starts. Where the difficulty is principally one of timing, the recommendation may be simpler and cheaper than you expect: identifying periods in the next eighteen to twenty-four months that are more favourable, so that a planned conception falls in one of them rather than being left to chance.',
          'Where the chart is not the obstacle, he will say that too. The two most common genuine causes of difficulty are simply not being found early enough for the relevant test, and medical factors that need a doctor. A practitioner who never concludes that a case requires medical investigation is not assessing, he is selling.',
        ],
      },
      {
        h2: 'The consultation',
        p: [
          'Bring both birth details, accurate to the minute if they are known, and any previous charts or reports you have. The consultation is free, and it is genuinely a consultation: you will be told what the charts indicate, what a remedy would involve, what it costs, and what the honest limitations are. There is no urgency, no limited window, and no claim that a delay will make a difference.',
          'It is also worth saying plainly that no practitioner can influence another person, and any site offering to do so for a fee is not offering a remedy. This is a case where the most valuable thing a consultation can produce is an honest answer either way, including the answer that you need a doctor rather than a priest.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can nakshatra dosha be corrected?',
        a: 'It is a feature of the birth chart, so it cannot be removed. What traditional practice addresses is its effect, through a specific mantra and ritual, and many couples with a flagged dosha conceive without difficulty. The assessment is whether it is present, active and actually relevant, not an assumption.',
      },
      {
        q: 'Do you need both partners birth details?',
        a: 'Yes. The dosha may be in either chart and may only be active in combination, so reading one partner alone gives an incomplete and potentially misleading answer. Accurate minute-level birth times are best if you have them.',
      },
      {
        q: 'Is this a substitute for medical advice?',
        a: 'No, and it is important to be clear. Where there is a medical factor, a doctor is the right first step. No astrologer can diagnose, and any practitioner who claims to replace medical investigation for fertility is doing harm. Where the charts indicate nothing, you will be told that.',
      },
      {
        q: 'How much does this cost?',
        a: 'The first consultation is free and includes reading both charts and an honest assessment. If a remedy is appropriate, it is quoted as a fixed amount before anything is performed. There is no monthly arrangement and no package.',
      },
    ],
    testimonial: {
      text: 'His knowledge is truly a blessing. The negative energy surrounding my home vanished completely.',
      name: 'Sneha, Guwahati',
      initial: 'S',
    },
    related: ['kundli-consultation', 'husband-wife-dispute-mayong', 'black-magic-removal-kamakhya', 'contact'],

    hi: {
      title: 'कामाख्या मंदिर में संतान दोष निवारण के उपाय | दीपक तांत्रिक',
      desc:
        'वैदिक ज्योतिष, नक्षत्र दोष और कामाख्या पूजन द्वारा संतान समस्या का समाधान। दीपक तांत्रिक, मायोंग और गुवाहाटी। +91 9706801250।',
      keywords: [
        'संतान दोष निवारण',
        'नक्षत्र दोष सुधार',
        'संतान न होने का उपाय',
        'कामाख्या संतान पूजा',
        'कामाख्या में सर्वश्रेष्ठ तांत्रिक',
        'मायोंग असम तांत्रिक',
      ],
      h1: 'कामाख्या और मायोंग में संतान दोष का समाधान',
      sub: 'नक्षत्र दोष, ग्रह काल और कामाख्या पूजन, दोनों साथियों की कुंडलियों से।',
      h2: 'दो कुंडलियां, एक प्रश्न',
      intro: [
        'संतान के बारे में ज्योतिषी सलाह लेने आने का सबसे सामान्य कारण एक दोष नहीं, बल्कि दो कुंडलियों के बीच का असंगति होता है। एक साथी के पास ऐसा दोष हो सकता है जो उसकी अपनी कुंडली में निष्क्रिय और दूसरे में सक्रिय हो; एक साथी ऐसी अवधि में हो सकता है जो संतान को रोकती है जबकि दूसरा नहीं; गर्भधारण बार-बार किसी विशेष गोचर या ऐसे महीने में होता रहा हो जो परिवार के लिए ऐतिहासिक रूप से कठिन रहा है।',
        'इसीलिए दोनों कुंडलियां साथ-साथ पढ़ी जाती हैं, केवल एक नहीं। दीपक तांत्रिक दोनों साथियों की लग्न, नवांश, सप्तम और पंचम भाव पढ़ते हैं, जांचते हैं कि कोई अतिवर्ती काल चल रहा है, और पहचानते हैं कि पारंपरिक उपचार योग्य दोष है, केवल कठिन अवधि है, या ऐसा संयोजन जिसमें केवल समय बदलने से अधिकांश कठिनाई हल हो जाती है।',
        'क्या किया जा सकता है और क्या नहीं, इस बारे में सीधे बोलना उचित है। जहां दोष मौजूद है और पारंपरिक रूप से उपचार योग्य है, उपाय स्पष्ट रूप से तय होता है और वे आपको बताएंगे कि उसमें क्या शामिल है। जहां कोई चिकित्सकीय कारण है, कोई उपाय डॉक्टर की जगह नहीं लेता, और वे शुल्क लेने से पहले यह साफ बता देते हैं।',
      ],
      deep: [
        {
          h2: 'वास्तव में क्या जांचा जाता है',
          p: [
            'यहां चार कुंडलियां मायने रखती हैं, दो नहीं: दोनों साथियों की जन्म कुंडलियां, और पंचम भाव तथा गर्भधारण की अवधियों के लिए माता की कुंडली। लग्न का पंचम भाव, पंचम लक्षर की स्थिति और बल, नवांश की स्थिति, दोनों साथियों का वर्तमान महादशा और अंतर्दशा, और गर्भधारण से पारंपरिक रूप से जुड़े दस्तावेजों के अनुसार बृहस्पति का गोचर।',
            'नक्षत्र दोष की विशेष जांच इसलिए की जाती है क्योंकि यही सबसे आम रूप से बताया जाने वाला कारण है और सबसे ज्यादा बढ़ा-चढ़ाकर बताया भी जाता है। पारंपरिक प्रथा में यह एक वास्तविक विचारणीय बात है, लेकिन यह जन्म-कुंडली की एक विशेषता का वर्णन है, कोई निर्णय नहीं: कई लोगों में यह दोष होने पर भी संतान सहज होता है, और कुछ में न होने पर भी नहीं। मूल्यांकन यह है कि यह मौजूद है, सक्रिय है, और वास्तव में इस मामले से प्रासंगिक है या नहीं।',
          ],
        },
        {
          h2: 'उपाय में क्या शामिल होता है',
          p: [
            'सक्रिय दोष होने पर शास्त्रीय उपाय एक विशिष्ट मंत्र है जिसकी गिनती, समय और अवधि तय होती है, कभी-कभी कामाख्या में अनुष्ठान के साथ। यह एक स्पष्ट रूप से तय प्रथा है और शुरू करने से पहले पूरी तरह बता दी जाती है। जहां कठिनाई मुख्यतः समय की है, सिफारिश आपकी अपेक्षा से सरल और सस्ती हो सकती है: अगले अठारह से चौबीस महीनों की अधिक अनुकूल अवधियां पहचानना, ताकि योजनाबद्ध गर्भधारण उनमें से किसी एक में हो।',
            'जहां कुंडली बाधा नहीं है, वह भी बताया जाएगा। कठिनाई के दो सामान्य वास्तविक कारण हैं: संबंधित जांच के लिए पर्याप्त समय पर जाना नहीं, और वे चिकित्सकीय कारण जिनके लिए डॉक्टर चाहिए। जो चिकित्सक कभी नहीं निष्कर्ष निकालता कि मामले में चिकित्सकीय जांच आवश्यक है, वह आकलन नहीं कर रहा, बेच रहा है।',
          ],
        },
        {
          h2: 'परामर्श',
          p: [
            'दोनों साथियों की जन्म तिथि लेकर आएं, यदि ज्ञात हो तो मिनट तक सटीक, और कोई पुरानी कुंडली या रिपोर्ट भी साथ लाएं। परामर्श निःशुल्क है, और यह वास्तव में परामर्श है: आपको बताया जाएगा कि कुंडलियां क्या कहती हैं, उपाय में क्या शामिल होगा, लागत क्या होगी, और ईमानदार सीमाएं क्या हैं। कोई जल्दबाजी नहीं, कोई सीमित समय-सीमा नहीं, और यह दावा नहीं कि देरी से कुछ बदल जाएगा।',
            'यह भी साफ कहना उचित है कि कोई चिकित्सक किसी दूसरे व्यक्ति को नहीं बदल सकता, और किसी भी ऐसी साइट जो शुल्क लेकर ऐसा वादा करे, वह उपाय नहीं दे रही। ऐसे मामले में परामर्श का सबसे मूल्यवान परिणाम ईमानदार उत्तर है, चाहे वह उपाय ठीक है या आपको पंडित नहीं, डॉक्टर चाहिए।',
          ],
        },
      ],
      faqs: [
        {
          q: 'क्या नक्षत्र दोष ठीक किया जा सकता है?',
          a: 'यह जन्म-कुंडली की विशेषता है, इसलिए इसे हटाया नहीं जा सकता। पारंपरिक प्रथा उसके प्रभाव को संबोधित करती है, विशिष्ट मंत्र और अनुष्ठान के माध्यम से। कई जोड़ों में यह दोष होने पर भी संतान सहज होता है। मूल्यांकन यह है कि यह मौजूद है, सक्रिय है और वास्तव में प्रासंगिक है।',
        },
        {
          q: 'क्या दोनों साथियों की जन्म तिथि चाहिए?',
          a: 'हां। दोष किसी भी एक कुंडली में हो सकता है और केवल संयोजन में सक्रिय हो सकता है, इसलिए केवल एक साथी की कुंडली पढ़ना अधूरा और भ्रामक उत्तर देता है। यदि उपलब्ध हो तो मिनट-स्तरीय सटीक जन्म समय सर्वोत्तम है।',
        },
        {
          q: 'क्या यह चिकित्सकीय सलाह का विकल्प है?',
          a: 'नहीं, और यह स्पष्ट रखना महत्वपूर्ण है। जहां चिकित्सकीय कारreason है, वहां डॉक्टर पहला कदम है। कोई ज्योतिषी निदान नहीं कर सकता, और जो चिकित्सक दावा करे कि वह प्रजनन के लिए चिकित्सकीय जांच की जगह लेता है, वह नुकसान पहुंचा रहा है। यदि कुंडलियां कुछ नहीं कहतीं, तो यही बताया जाएगा।',
        },
        {
          q: 'इसकी लागत कितनी है?',
          a: 'पहली बातचीत निःशुल्क है और इसमें दोनों कुंडलियों का पठन और ईमानदार आकलन शामिल है। यदि उपाय उपयुक्त हो, तो कुछ भी शुरू करने से पहले निश्चित राशि बताई जाती है। कोई मासिक व्यवस्था नहीं, कोई पैकेज नहीं।',
        },
      ],
      testimonial: {
        text: 'उनका ज्ञान वास्तव में एक वरदान है। मेरे घर के आसपास की नकारात्मक ऊर्जा पूरी तरह समाप्त हो गई।',
        name: 'स्नेहा, गुवाहाटी',
        initial: 'स्ने',
      },
    },
  },

  // =====================================================================
  {
    slug: 'evil-eye-removal',
    file: 'evil-eye-removal',
    icon: 'shield',
    priority: '0.8',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Evil Eye Removal at Kamakhya Temple | Deepak Tantrik',
    desc:
      'Evil eye and drishti dosh removal at Kamakhya Temple by Deepak Tantrik. Mayong and Guwahati, 25+ years. Free first consultation. Call +91 9706801250.',
    keywords: [
      'evil eye removal',
      'drishti dosh remedy',
      'nazar removal kamakhya',
      'evil eye tantrik guwahati',
      'best tantrik in kamakhya',
      'mayong assam tantrik',
      'kamakhya tantrik contact number',
    ],
    h1: 'Evil Eye and Nazar Removal at Kamakhya Temple',
    sub: 'Drishti dosh, nazar, and unexplained heaviness in the home or a person, assessed before anything is done.',
    h2: 'Dristi Dosh: What It Is and What It Is Not',
    intro: [
      'Dristi dosh, or the evil eye, is the most widely believed condition in this part of the world and the least rigorously defined. It is used to describe a general run of misfortune, a heaviness in a house, a persistent unexplained illness, a family where things go wrong repeatedly, or a person whom trouble seems to follow. That breadth is the problem: a description that fits almost anything will explain almost anything.',
      'The useful approach is to work backwards. What actually happened, when did it start, has anything changed since, and is there an ordinary explanation that has been checked? In many cases there is: a genuine illness that needs a doctor, a financial mistake, a relationship problem, a workplace conflict, an untreated structural fault in a building, or a period in a kundli that plainly corresponds to the difficulty. A remedy applied on top of an unexamined ordinary cause does nothing, and sometimes delays the correct action.',
      'Once the ordinary explanations are set aside, what remains is assessed as a spiritual one. That is the order in which this is done, and it is the reason the consultation is free and honest rather than a ritual booked in advance.',
    ],
    image: '/images/religious.jpg',
    imageAlt: 'Oil lamps and vermilion at a Kamakhya Temple puja performed for nazar and evil eye removal',
    deep: [
      {
        h2: 'Common patterns, and what actually explains them',
        p: [
          'A house in which accidents, thefts, illness or conflict recur, and where the recurrence follows particular people or particular rooms. A person whose business or marriage deteriorates repeatedly after other people visit. A sudden unexplained illness with clean medical results. Persistent bad luck that stops the moment a person leaves.',
          'Each of these has a plausible ordinary explanation worth exhausting first. A structural or electrical fault in a house produces exactly the first pattern. An untreated medical condition produces the third. Jealousy produces the second. When a practitioner accepts the spiritual explanation first, the real cause is left in place for years, and the customer pays for that delay. The order matters more than the remedy.',
        ],
      },
      {
        h2: 'How a remedy is decided',
        p: [
          'If a spiritual cause is assessed as present, the question is what kind. A nazar dosh in the classical sense is treated with a specific remedy, a day and a time, and sometimes a physical measure at the site. What is frequently found instead is not a nazar dosh at all but a heavier underlying pattern, often a binding or a black magic working, which is a different problem with a different remedy and takes longer.',
          'The distinction is worth making because people arrive asking for nazar removal and are sometimes dealing with something more serious. It is also why he works at both the Kamakhya Temple and his Mayong Ashram: the temple is the appropriate place for remedies tied to that site, and the ashram for the Mayong lineage work.',
        ],
      },
      {
        h2: 'What you should expect to be told',
        p: [
          'An honest answer, including the answer that there is nothing here that needs a remedy. It happens. A great deal of what is brought to a practitioner as a spiritual problem is a solvable ordinary problem, and saying so costs a fee and occasionally a customer.',
          'If a remedy is appropriate, expect a specific description of what will be done, where, when, what it costs, and what the realistic timeline is. Expect to be told what it will not achieve. Expect the consultation to be private and not to become a story you tell to explain your difficulties to other people, because confidentiality is part of the practice rather than a promise attached to it.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is drishti dosh and how do you tell if it is present?',
        a: 'It is a traditional description rather than a precise diagnosis, which is why the first step is exhausting ordinary explanations. What actually happened, when it started and whether anything has changed is more informative than the label, because the label fits almost any pattern of misfortune.',
      },
      {
        q: 'Is evil eye removal possible?',
        a: 'Where a nazar dosh is assessed as genuinely present, a specific remedy tied to the site and the timing is available. But many cases brought as nazar turn out to be a black magic working or an unexamined ordinary problem, and the first is more serious while the third needs no ritual at all.',
      },
      {
        q: 'Do you need to visit the temple?',
        a: 'For remedies tied to Kamakhya, yes, and both locations are walk-in. The consultation itself can be taken by phone or WhatsApp, and he will tell you which location is appropriate for your case before you travel.',
      },
      {
        q: 'Is my problem confidential?',
        a: 'Yes. Everything discussed is confidential as a working rule of the practice, not a courtesy. No visitor is asked to be named or photographed, and the testimonials on this site carry only a first name and a city because that is what clients agreed to give.',
      },
    ],
    testimonial: {
      text: 'I was facing severe business losses and family disputes. Baba Ji\'s spiritual guidance changed my life. Everything is peaceful now.',
      name: 'Priya Das, Guwahati',
      initial: 'P',
    },
    related: ['black-magic-removal-kamakhya', 'best-tantrik-mayong', 'tantrik-baba-guwahati', 'contact'],

    hi: {
      title: 'कामाख्या में नज़र दोष हटाने के उपाय | दीपक तांत्रिक',
      desc:
        'कामाख्या मंदिर में दीपक तांत्रिक द्वारा नज़र दोष और दृष्टि दोष हटाने के उपाय। मायोंग और गुवाहाटी, 25+ वर्ष। +91 9706801250।',
      keywords: [
        'नज़र दोष हटाने के उपाय',
        'दृष्टि दोष निवारण',
        'बुरी नज़र कामाख्या',
        'नज़र तांत्रिक गुवाहाटी',
        'कामाख्या में सर्वश्रेष्ठ तांत्रिक',
        'मायोंग असम तांत्रिक',
      ],
      h1: 'कामाख्या मंदिर में नज़र और दृष्टि दोष हटाने के उपाय',
      sub: 'दृष्टि दोष, नज़र, और घर या व्यक्ति में अस्पष्ट भारीपन, कुछ भी करने से पहले उसका आकलन।',
      h2: 'दृष्टि दोष: यह क्या है और क्या नहीं',
      intro: [
        'दृष्टि दोष, यानी बुरी नज़र, इस भाग की सबसे व्यापक रूप से मानी जाने वाली स्थिति है और सबसे कम स्पष्ट रूप से परिभाषित भी। इसका उपयोग लगातार बुरी किस्मत, घर में भारीपन, बिना कारण बीमारी, ऐसे परिवार जहां बार-बार गड़बड़ी हो, या ऐसे व्यक्ति के लिए किया जाता है जिसके पीछे समस्याएं पीछा करती हों। यही व्यापकता समस्या है: जो विवरण लगभग हर चीज़ पर लागू होता है, वह लगभग हर चीज़ की व्याख्या भी कर देता है।',
        'उपयोगी तरीका पीछे से शुरू करना है। वास्तव में क्या हुआ, कब से शुरू हुआ, तब से कुछ बदला या नहीं, और क्या कोई सामान्य व्याख्या जांची गई है? कई मामलों में होती है: डॉक्टर की जरूरत वाली असली बीमारी, वित्तीय गलती, रिश्तों की समस्या, कार्यस्थल पर टकराव, भवन में ठीक नहीं किया गया कोई तकनीकी दोष, या कुंडली में ऐसी अवधि जो स्पष्ट रूप से कठिनाई से मेल खाती है। असली कारण की जांच किए बिना उस पर उपाय करने से कुछ नहीं होता, और कभी-कभी सही कार्रवाई भी टाल दी जाती है।',
        'एक बार सामान्य व्याख्याएं निकाल लेने के बाद, जो बचता है उसका आध्यात्मिक रूप में आकलन किया जाता है। यही क्रम है, और इसीलिए परामर्श निःशुल्क और ईमानदार है, पहले से तय अनुष्ठान नहीं।',
      ],
      deep: [
        {
          h2: 'सामान्य पैटर्न, और उनकी असली व्याख्या',
          p: [
            'ऐसा घर जहां बार-बार दुर्घटना, चोरी, बीमारी या टकराव होता है, और जहां पुनरावृत्ति किसी विशेष व्यक्ति या कमरे के साथ होती है। ऐसा व्यक्ति जिसका व्यापार या विवाह बार-बार बिगड़ता है जब कोई और मिलने आता है। अचानक अस्पष्ट बीमारी जिसमें चिकित्सकीय परिणाम साफ हैं। लगातार बुरी किस्मत जो उस व्यक्ति के चले जाते ही रुक जाती है।',
            'इनमें से हर एक की एक उचित सामान्य व्याख्या है जो पहले पूरी तरह जांची जानी चाहिए। घर में संरचनात्मक या बिजली का दोष पहले पैटर्न ठीक-ठीक उत्पन्न करता है। अनुपचारित चिकित्सकीय स्थिति तीसरा। ईर्ष्या दूसरा। जब चिकित्सक पहले आध्यात्मिक व्याख्या स्वीकार कर लेता है, तो असली कारण वर्षों तक बना रहता है, और ग्राहक उस विलंब की कीमत चुकाता है। क्रम उपाय से अधिक महत्वपूर्ण है।',
          ],
        },
        {
          h2: 'उपाय का निर्णय कैसे होता है',
          p: [
            'यदि आध्यात्मिक कारण मौजूद है, तो प्रश्न यह है कि किस प्रकार का। शास्त्रीय अर्थ में नज़र दोष का उपचार एक विशिष्ट उपाय, एक दिन और समय, और कभी-कभी स्थान पर एक भौतिक उपाय है। जो अक्सर मिलता है वह नज़र दोष नहीं, बल्कि एक भारीतर अंतर्निहित पैटर्न होता है, प्रायः कोई बंधन या काला जादू, जो एक अलग समस्या है, अलग उपयुक्तता है और अधिक समय लेता है।',
            'यह अंतर बताना महत्वपूर्ण है क्योंकि लोग नज़र हटाने के लिए आते हैं और कभी-कभी कुछ अधिक गंभीर से निपट रहे होते हैं। यह भी कारण है कि वे कामाख्या मंदिर और अपने मायोंग आश्रम दोनों पर काम करते हैं: मंदिर उस स्थान से जुड़े उपायों के लिए उपयुक्त है, और आश्रम मायोंग वंश के कार्य के लिए।',
          ],
        },
        {
          h2: 'आपको क्या बताया जाएगा',
          p: [
            'ईमानदार उत्तर, जिसमें यह उत्तर भी शामिल है कि यहां ऐसा कुछ नहीं है जिसके लिए उपाय चाहिए। ऐसा होता है। तांत्रिक के पास आध्यात्मिक समस्या के रूप में लाई गई बहुत सी बातें वास्तव में हल होने योग्य सामान्य समस्या होती हैं, और यह कहने में शुल्क और कभी-कभी ग्राहक का नुकसान होता है।',
            'यदि उपाय उपयुक्त है, तो विशिष्ट विवरण की अपेक्षा करें: क्या किया जाएगा, कहां, कब, लागत क्या, और यथार्थवादी समय-सीमा क्या। यह भी अपेक्षा करें कि वे यह बताएंगे कि यह क्या हासिल नहीं कर सकता। परामर्श निजी होगा और दूसरों को अपनी कठिनाइयां समझाने के लिए कहानी नहीं बनेगा, क्योंकि गोपनीयता वादा नहीं, अभ्यास का हिस्सा है।',
          ],
        },
      ],
      faqs: [
        {
          q: 'दृष्टि दोष क्या है और यह मौजूद है या नहीं कैसे पता चलेगा?',
          a: 'यह पारंपरिक वर्णन है, सटीक निदान नहीं, इसीलिए पहला कदम सामान्य व्याख्याएं पूरी तरह जांचना है। वास्तव में क्या हुआ, कब शुरू हुआ और कुछ बदला या नहीं, यह लेबल से अधिक जानकारी देता है, क्योंकि लेबल लगभग किसी भी असफलता के पैटर्न पर लागू होता है।',
        },
        {
          q: 'क्या बुरी नज़र हटाई जा सकती है?',
          a: 'जहां नज़र दोष वास्तव में मौजूद पाया जाए, वहां उस स्थान और समय से जुड़ा विशिष्ट उपाय उपलब्ध है। लेकिन अक्सर नज़र के रूप में आए मामले काले जादू का काम निकलते हैं या जांचा नहीं गया सामान्य समस्या, और पहला अधिक गंभीर है जबकि तीसरे के लिए किसी अनुष्ठान की आवश्यकता ही नहीं है।',
        },
        {
          q: 'क्या मंदिर जाना पड़ेगा?',
          a: 'कामाख्या से जुड़े उपायों के लिए हां, और दोनों स्थान सीधे जाने योग्य हैं। परामर्श फोन या व्हाट्सएप पर लिया जा सकता है, और यात्रा से पहले वे बता देंगे कि आपके मामले के लिए कौन सा स्थान उपयुक्त है।',
        },
        {
          q: 'क्या मेरी समस्या गोपनीय रहेगी?',
          a: 'हां। चर्चा किया गया सब कार्य नियम के रूप में गोपनीय रहता है, अनुषंगा नहीं। किसी मेहमान का नाम लेने या फोटो लेने के लिए कहा नहीं जाता, और इस साइट की सफलताएं केवल पहले नाम और शहर के साथ हैं क्योंकि यही एकमात्र जानकारी है जिसने ग्राहक साझा करने की सहमति दी।',
        },
      ],
      testimonial: {
        text: 'मुझे गंभीर व्यापारिक नुकसान और पारिवारिक झगड़ों का सामना करना पड़ा। बाबा जी का आध्यात्मिक मार्गदर्शन ने मेरा जीवन बदल दिया। अब सब कुछ शांत है।',
        name: 'प्रिया दास, गुवाहाटी',
        initial: 'प्र',
      },
    },
  },

  // =====================================================================
  {
    slug: 'kundli-consultation',
    file: 'kundli-consultation',
    icon: 'star',
    priority: '0.8',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Kundli Consultation Kamakhya & Mayong | Deepak Tantrik',
    desc:
      'Kundli and horoscope consultation with Deepak Tantrik, Kamakhya and Mayong, Assam. Both charts read, plain-language reading. Free first. Call +91 9706801250.',
    keywords: [
      'kundli consultation',
      'horoscope reading kamakhya',
      'janam patri advice tantrik',
      'vividh kundli',
      'kundli matching for marriage',
      'best tantrik in kamakhya',
      'mayong assam tantrik',
    ],
    h1: 'Kundli Consultation at Kamakhya and Mayong',
    sub: 'Both charts read where two are involved, explained in plain language, with no package and no upsell.',
    h2: 'A Reading Should Answer a Question',
    intro: [
      'The most common complaint about astrologers is that a reading is generic: a page of descriptions of a sign, a list of favourable colours, a warning to avoid travel in a particular year. It may be accurate as a description of the chart and useless as an answer, because nobody asked a question.',
      'A consultation here starts from the question. What is actually being decided, by when, and what the person is trying to understand. The chart is then read against that question, which means the same birth data produces a different reading for a marriage question, a career question and a business-timing question, and only the parts relevant to the question are discussed.',
      'Where two charts are involved, both are read, together. This matters more in practice than the price list suggests: compatibility is a property of the relationship between two charts, and reading one against a list of rules is not the same as reading them against each other.',
    ],
    image: '/images/portrait.jpg',
    imageAlt: 'Deepak Tantrik reading a birth chart for kundli consultation in Mayong, Assam',
    deep: [
      {
        h2: 'What you need to bring',
        p: [
          'For each person whose chart is being read: date of birth, time of birth as accurately as it is known, and place of birth. Time of birth is the difference between a precise reading and a vague one, because the ascendant, the house positions and the drik and vipreet placements all depend on it. Most Indian birth records give a time; if yours is approximate, say so, because a reading built on a guessed time should be treated as approximate.',
          'It also helps to bring the actual question, and any date that matters. A marriage question, a business partnership, a property decision, a childlessness question and a timing question all produce different readings from the same chart, and specific dates let the answer be specific.',
        ],
      },
      {
        h2: 'What a reading covers',
        p: [
          'The lagna and its lord, the Moon sign and the nakshatra, the periods currently running for each planet, and the houses relevant to the question. From that: the pattern of the periods, the periods ahead that are difficult and why, the periods that are more open, and what tends to produce the result being asked about.',
          'It is also worth knowing what a kundli cannot do. It does not predict a date of death, it does not tell you what another person will decide, and it cannot be made to say a particular thing. Anyone who claims otherwise is not doing astrology. Equally, a chart read honestly will sometimes say that the question is not astrological, which happens more often than a practitioner in this line of business usually admits.',
        ],
      },
      {
        h2: 'Cost and what happens next',
        p: [
          'The first consultation is free. It is a real consultation: the chart is read, the question is addressed, and you are told what the reading indicates. If a remedy is indicated, it is described in full and quoted as a fixed amount before anything is done. If none is indicated, you are told that, and there is nothing further to buy.',
          'There is no package, no annual subscription, no report sold in advance, and no follow-up call used to introduce a new problem. The only recurring cost would be a remedy you have agreed to, and a further consultation is a separate conversation.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What if I do not know my exact birth time?',
        a: 'An approximate time is workable but the reading should be treated as approximate, and it is better to say so than to invent a convenient time. Some features of a chart are stable across an hour and others are not, so the reading will be firmer on some points and softer on others.',
      },
      {
        q: 'Do you read both charts for marriage compatibility?',
        a: 'Yes, and both are needed. Compatibility is a property of the relationship between two charts rather than a checklist applied to one, so reading one alone gives an incomplete answer. Bring both sets of birth details.',
      },
      {
        q: 'Will you tell me what I want to hear?',
        a: 'No. If the chart indicates a difficult period, that is what you will be told, with the reason. A reading that only confirms what the client hoped for is worth nothing and is the main thing people are paying to avoid.',
      },
      {
        q: 'How much does a kundli consultation cost?',
        a: 'The first consultation is free and includes the reading and an honest answer. If a remedy is indicated, it is quoted as a fixed amount before anything is performed. There is no package and no subscription.',
      },
    ],
    testimonial: {
      text: 'I was facing severe business losses and family disputes. Baba Ji\'s spiritual guidance changed my life. Everything is peaceful now.',
      name: 'Priya Das, Guwahati',
      initial: 'P',
    },
    related: ['business-problem-solution', 'childless-problem-solution', 'husband-wife-dispute-mayong', 'contact'],

    hi: {
      title: 'कामाख्या और मायोंग में कुंडली परामर्श | दीपक तांत्रिक',
      desc:
        'दीपक तांत्रिक के साथ कुंडली और कुंडली परामर्श, कामाख्या और मायोंग, असम। दोनों कुंडलियों का पठन, सरल भाषा में। +91 9706801250।',
      keywords: [
        'कुंडली परामर्श',
        'कुंडली मिलान विवाह',
        'जन्म कुंडली सलाह तांत्रिक',
        'विविध कुंडली',
        'कामाख्या में सर्वश्रेष्ठ तांत्रिक',
        'मायोंग असम तांत्रिक',
      ],
      h1: 'कामाख्या और मायोंग में कुंडली परामर्श',
      sub: 'दो व्यक्ति शामिल हों तो दोनों कुंडलियां पढ़ी जाती हैं, सरल भाषा में, न कोई पैकेज न कोई अतिरिक्त बिक्री।',
      h2: 'एक पाठ को प्रश्न का उत्तर होना चाहिए',
      intro: [
        'ज्योतिषियों के बारे में सबसे आम शिकायत यह है कि पाठ सामान्य होता है: राशि का एक पन्ना, शुभ रंगों की सूची, एक विशेष वर्ष में यात्रा से बचने की चेतावनी। यह चार्ट का वर्णन के रूप में सही हो सकता है और उत्तर के रूप में बेकार, क्योंकि किसी ने प्रश्न ही नहीं पूछा था।',
        'यहां परामर्श प्रश्न से शुरू होता है। वास्तव में क्या तय हो रहा है, कब तक, और व्यक्ति क्या समझना चाहता है। इसके बाद चार्ट उसी प्रश्न के संदर्भ में पढ़ा जाता है, यानी एक ही जन्म-आंकड़ा विवाह के प्रश्न, करियर के प्रश्न और व्यापार-समय के प्रश्न पर अलग-अलग पाठ देता है, और केवल प्रश्न से जुड़े हिस्सों पर चर्चा होती है।',
        'जहां दो कुंडलियां शामिल हों, दोनों साथ पढ़ी जाती हैं। व्यवहार में यह कीमत सूची से कहीं अधिक महत्वपूर्ण है: अनुकूलता दो चार्ट के बीच संबंध का गुण है, और एक को नियमों की सूची के सामने पढ़ना वही नहीं है जो दोनों को एक-दूसरे के सामने पढ़ना है।',
      ],
      deep: [
        {
          h2: 'आपको क्या लाना है',
          p: [
            'हर व्यक्ति के लिए जिसकी कुंडली पढ़ी जानी है: जन्म तिथि, जन्म समय जितना सही ज्ञात हो, और जन्म स्थान। जन्म समय ही सटीक पाठ और अस्पष्ट पाठ का अंतर है, क्योंकि लग्न, भाव स्थिति और दृक तथा विपरीत योग सब उसी पर निर्भर हैं। अधिकांश भारतीय जन्म रिकॉर्ड में समय होता है; यदि आपका अनुमानित है, तो यह बताएं, क्योंकि अनुमानित समय पर बना पाठ अनुमानित ही माना जाना चाहिए।',
            'वास्तविक प्रश्न लेकर आना भी उपयोगी है, और वह तिथि जो मायने रखती हो। विवाह का प्रश्न, व्यापार का साझेदारी, संपत्ति का निर्णय, संतान का प्रश्न और समय का प्रश्न, एक ही कुंडली से अलग-अलग पाठ निकलते हैं, और विशेष तिथियां उत्तर को विशिष्ट बनाने देती हैं।',
          ],
        },
        {
          h2: 'पाठ में क्या शामिल होता है',
          p: [
            'लग्न और उसके स्वामी, चंद्र राशि और नक्षत्र, प्रत्येक ग्रह का वर्तमान अतिवर्ती काल, और प्रश्न से जुड़े भाव। इससे: अवधियों का पैटर्न, आगे आने वाली कठिन अवधियां और उनका कारण, अधिक खुले अवधि, और यह कि पूछे जाने वाले परिणाम को क्या उत्पन्न करता है।',
            'यह भी जानना उपयोगी है कि कुंडली क्या नहीं कर सकती। यह मृत्यु की तिथि नहीं बताती, यह नहीं बताती कि दूसरा व्यक्ति क्या निर्णय लेगा, और इसे कुछ विशेष कहने के लिए नहीं मोड़ा जा सकता। जो ऐसा दावा करे वह ज्योतिष नहीं कर रहा। उतना ही, ईमानदारी से पढ़ी गई कुंडली कभी-कभी यह भी कहती है कि प्रश्न ज्योतिषीय नहीं है, जो इस पेशे के चिकित्सक आमतौर पर स्वीकारने से कम बात है।',
          ],
        },
        {
          h2: 'लागत और आगे क्या',
          p: [
            'पहला परामर्श निःशुल्क है। यह वास्तविक परामर्श है: चार्ट पढ़ा जाता है, प्रश्न का उत्तर दिया जाता है, और आपको बताया जाता है कि पाठ क्या संकेत करता है। यदि उपाय का संकेत हो, तो उसे पूरी तरह बताया और कुछ भी शुरू करने से पहले निश्चित राशि बताई जाती है। यदि कोई संकेत नहीं हो, तो यही बताया जाता है, और आगे खरीदने को कुछ नहीं है।',
            'कोई पैकेज नहीं, कोई वार्षिक सदस्यता नहीं, पहले से बेचा गया कोई रिपोर्ट नहीं, और न कोई फॉलो-अप कॉल जो नया समस्या पेश करे। एकमात्र आवर्ती लागत वह उपाय होगा जिसे आपने स्वीकार किया हो, और अगला परामर्श एक अलग बातचीत है।',
          ],
        },
      ],
      faqs: [
        {
          q: 'यदि मुझे अपना जन्म समय पता नहीं है तो?',
          a: 'अनुमानित समय उपयोगी है पर पाठ को अनुमानित ही माना जाना चाहिए, और यह बताना बेहतर है कि सुविधा के लिए कोई समय गढ़ना। कुंडली की कुछ विशेषताएं एक घंटे में स्थिर रहती हैं और कुछ नहीं, इसलिए पाठ कुछ बिंदुओं पर मजबूत और कुछ पर हल्का होगा।',
        },
        {
          q: 'क्या आप विवाह अनुकूलता के लिए दोनों कुंडलियां पढ़ते हैं?',
          a: 'हां, और दोनों आवश्यक हैं। अनुकूलता दो चार्ट के बीच के संबंध का गुण है, एक पर लागू नियमों की सूची नहीं, इसलिए केवल एक कुंडली पढ़ना अधूरा उत्तर देता है। दोनों की जन्म तिथियां लाएं।',
        },
        {
          q: 'क्या आप वही बताएंगे जो मैं सुनना चाहता हूं?',
          a: 'नहीं। यदि चार्ट कठिन अवधि दर्शाता है, तो कारण सहित वही बताया जाएगा। केवल उसी की पुष्टि करने वाला पाठ किसी काम का नहीं है, और ग्राहक यही बचाने के पैसे देते हैं।',
        },
        {
          q: 'कुंडली परामर्श की लागत कितनी है?',
          a: 'पहला परामर्श निःशुल्क है और इसमें पठन और ईमानदार उत्तर शामिल है। यदि उपाय का संकेत हो, तो कुछ भी करने से पहले निश्चित राशि बताई जाती है। कोई पैकेज नहीं, कोई सदस्यता नहीं।',
        },
      ],
      testimonial: {
        text: 'मुझे गंभीर व्यापारिक नुकसान और पारिवारिक झगड़ों का सामना करना पड़ा। बाबा जी का आध्यात्मिक मार्गदर्शन ने मेरा जीवन बदल दिया। अब सब कुछ शांत है।',
        name: 'प्रिया दास, गुवाहाटी',
        initial: 'प्र',
      },
    },
  },
];

module.exports = SERVICES_EXT;
