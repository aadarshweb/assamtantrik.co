// content/services.js
// THE SERVICE REGISTRY. One array owns the truth.
// NAV, the services hub, the footer link grid, the per-page "related" links and
// the ItemList schema are all COMPUTED from this file. Add a service once and it
// appears everywhere. Hand-maintained lists are the root cause of the v3 bug log
// ("Final VIP SEO.md" Step 2, registry pattern).
//
// Each entry owns exactly ONE keyword cluster. Do not add a term to an entry that
// another entry already owns - that is cannibalisation (v4 anti-pattern table).

const SERVICES = [
  // =====================================================================
  {
    slug: 'black-magic-removal-kamakhya',
    file: 'black-magic-removal-kamakhya',
    icon: 'shield',
    priority: '0.9',
    changefreq: 'monthly',
    hasHi: true,

    // --- ENGLISH ---
    title: 'Black Magic Removal Kamakhya | Deepak Tantrik Ji',
    desc:
      'Black magic removal in Kamakhya Temple and Mayong by Deepak Tantrik. 25+ years, seven-generation Mayong lineage. Free guidance. Call +91 9706801250 now.',
    keywords: [
      'black magic removal kamakhya',
      'kamakhya temple black magic',
      'kamakhya black magic',
      'kamakhya temple tantriks',
      'best kamakhya tantrik',
      'mayong assam tantrik',
      'tantrik in kamakhya temple',
    ],
    h1: 'Black Magic Removal in Kamakhya Temple & Mayong',
    sub: 'Cleanse your life of evil eyes and negative energies with the ultimate Tantrik protection.',
    h2: 'Genuine Black Magic Removal at Kamakhya',
    intro: [
      'Kamakhya Temple is internationally renowned as the epicenter of Tantra and spiritual power. If you are facing sudden downfall in business, unexplained illnesses, continuous family disputes, or a feeling of heavy negative presence, you might be a victim of Kala Jadu (Black Magic). Deepak Tantrik specializes in powerful black magic removal from Kamakhya.',
      'The work begins with a careful reading of the situation rather than an assumption about its cause. Where a spiritual cause is assessed as present, the remedy is described before it is performed: what will be done, where, how long it takes, and what it can and cannot achieve. The aim is to address a specific obstruction, not to promise a permanent shield around every part of your life.',
      "If you are dealing with a run of misfortune, unexplained illness or persistent family conflict, the first step is an honest assessment. Some of these problems have ordinary causes that should be checked first. The consultation is free, and you will be told plainly whether a remedy is appropriate.",
    ],
    image: '/images/religious.jpg',
    imageAlt:
      'Lamps burning at a Kamakhya Temple shrine in Guwahati during black magic removal puja',
    deep: [
      {
        h2: 'What the Kamakhya Tradition Actually Involves',
        p: [
          'Kamakhya Temple on Nilachal Hill is one of the most important Shakti sites in India, and the surrounding tradition is inseparable from the practice of tantra. That history is often reduced to a single phrase, but the actual work is more specific. A practitioner has to assess what is happening, separate an ordinary cause from a spiritual one, and describe the remedy in plain terms. Deepak Tantrik works within that tradition at Kamakhya and at his family ashram in Mayong.',
          'People often describe a cluster of symptoms: a sudden financial reversal, disturbed sleep, estrangement from family, an illness that tests have not explained, or a persistent feeling of heaviness at home. None of these proves a spiritual cause on its own. They are reasons to look carefully, rule out the ordinary explanations, and then decide whether a remedy is the right response.',
        ],
      },
      {
        h2: 'The Mayong Family Lineage',
        p: [
          'Mayong in Morigaon district has a long reputation in Assamese folklore as a place associated with tantra and the occult. The family tradition here is oral and practical rather than theatrical: it is passed down through practice, and it is used for protection and repair, not for harming anyone. Deepak Tantrik was born into that lineage and still works from the family ashram in Mayong.',
          'His practice draws on two locations: the family lineage in Mayong and his initiation at Kamakhya Temple in Guwahati. Clients sometimes choose to consult at one or the other depending on the case. The number on this page reaches him directly, and the first conversation is used to decide whether a remedy is appropriate at all.',
        ],
      },
      {
        h2: 'How the Removal Process Works',
        p: [
          'The process begins with an assessment of what is actually happening and how long it has been going on. If a remedy is indicated, Deepak Tantrik explains what will be performed, at which location, and what it costs before anything begins. A protective kavach may form part of the practice. The honest timeline is usually measured in weeks, not hours, and no outcome is guaranteed. If the assessment is that a remedy will not help, you will be told that.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can black magic really be removed at Kamakhya Temple?',
        a: 'A remedy may be appropriate where an ordinary cause has been ruled out and a spiritual cause is assessed as present. No honest practitioner can promise a guaranteed outcome. The first consultation is free and is used to decide whether a remedy makes sense.',
      },
      {
        q: 'How long does black magic removal take?',
        a: 'The honest timeline is usually a few weeks rather than a few days. It depends on what is assessed during the consultation, and no fixed number of days is promised in advance.',
      },
      {
        q: 'Is it safe to get black magic removed at Kamakhya?',
        a: 'Yes. The ritual is non-harmful. Deepak Tantrik performs only counter-rituals and protective measures; he has never carried out a ritual intended to harm anyone.',
      },
    ],
    testimonial: {
      text: 'Everything in my life was going wrong. My business crashed and health deteriorated. Doctors found nothing. Then someone suggested Deepak Tantrik. After his black magic removal puja in Kamakhya, the heavy feeling vanished in days. My business is back on track. A true lifesaver!',
      name: 'Vikram, Kolkata',
      initial: 'V',
    },
    related: ['love-problem-solution-kamakhya', 'vashikaran-specialist-mayong', 'best-tantrik-mayong', 'tantrik-baba-guwahati'],

    // --- HINDI ---
    hi: {
      title: 'कामाख्या मंदिर में काला जादू हटाने के उपाय | दीपक तांत्रिक',
      desc:
        'कामाख्या मंदिर और मायोंग में काला जादू दोष हटाने के लिए दीपक तांत्रिक। 25+ वर्ष का अनुभव। मुफ्त परामर्श के लिए अभी +91 9706801250 पर कॉल करें।',
      keywords: [
        'काला जादू हटाने के उपाय',
        'कामाख्या मंदिर काला जादू',
        'कामाख्या मंदिर तांत्रिक',
        'कामाख्या मंदिर के तांत्रिक',
        'कामाख्या के सबसे बड़े तांत्रिक',
        'मायोंग असम तांत्रिक',
      ],
      h1: 'कामाख्या मंदिर और मायोंग में काला जादू दोष हटाने के उपाय',
      sub: 'नकारात्मक ऊर्जा और बुरी नज़र से मुक्ति पाने के लिए असली तांत्रिक सुरक्षा।',
      h2: 'कामाख्या में वास्तविक काला जादू दोष निवारण',
      intro: [
        'कामाख्या मंदिर तंत्र और आध्यात्मिक शक्ति का अंतरराष्ट्रीय केंद्र माना जाता है। यदि आपके व्यापार में अचानक गिरावट, अस्पष्ट बीमारी, लगातार पारिवारिक झगड़े या भारी नकारात्मक एहसास हो रहा है, तो आप काला जादू (काला जादू) की शिकार हो सकते हैं। दीपक तांत्रिक कामाख्या से शक्तिशाली काला जादू हटाने के उपाय करते हैं।',
        'पीढ़ियों से चली आ रही सदियों पुरानी विधियों से, वे ठीक पहचान लेते हैं कि अभिशाप कहाँ से आया है। उनके विशेष कामाख्या पूजन सभी नकारात्मक बंधनों को तोड़ते हैं और आपके परिवार के चारों ओर एक स्थायी सुरक्षा कवच बना देते हैं।',
        'ईर्ष्या और द्वेष अपना जीवन बर्बाद न करें। दीपक तांत्रिक के सिद्ध उपायों से आपको तुरंत राहत और फिर से समृद्धि तथा अच्छी सेहत मिलेगी।',
      ],
      deep: [
        {
          h2: 'कामाख्या में काला जादू हटाना अलग क्यों है',
          p: [
            'भारत में कामाख्या मंदिर काला जादू शब्द का उल्लेख सम्मान और भय दोनों के साथ किया जाता है। कामाख्या देवी, काम की और शक्ति की देवी, गुवाहाटी के नीलाचल पहाड़ी पर विराजमान हैं। यहाँ दीक्षा लेने वाले असली कामाख्या मंदिर तांत्रिक इसी शक्ति का उपयोग केवल उपचार और सुरक्षा के लिए करते हैं।',
            'यदि आपको अचानक आर्थिक मंदी, अनिद्रा, प्रियजनों से दूरी, या बिना कारण बीमारी महसूस हो रही है, तो ये कामाख्या मंदिर काला जादू हटाने के संकेत हो सकते हैं। इन संकेतों को अनदेखा न करें।',
          ],
        },
        {
          h2: 'मायोंग काला जादू: प्राचीन उत्पत्ति',
          p: [
            'जो कोई मायोंग असम काला जादू वीडियो खोजता है, वह इस छोटे गाँव की रहस्यमय प्रतिष्ठा से परिचित होता है। मायोंग असम तांत्रिक परंपरा लिखित इतिहास से भी पहले की है। मायोंग में मिले प्राचीन ताड़पत्र ग्रंथों में अभिशाप हटाने की सटीक विधियाँ वर्णित हैं। इस वंश के सर्वश्रेष्ठ मायोंग तांत्रिक के रूप में दीपक तांत्रिक उनमें से बहुत कम हैं जो आज भी ये मूल ग्रंथ पढ़ और लागू कर सकते हैं।',
            'मायोंग की परंपरा और कामाख्या मंदिर की कृपा से प्राप्त ज्ञान के कारण वे काला जादू हटाने के लिए असम के सर्वश्रेष्ठ असम तांत्रिक हैं। इस साइट पर दिए मायोंग तांत्रिक कांटैक्ट नंबर पर संपर्क करने पर आप दोनों स्थानों के ज्ञान से जुड़े एक सच्चे चिकित्सक तक पहुँचते हैं।',
          ],
        },
        {
          h2: 'काला जादू हटाने की प्रक्रिया',
          p: [
            'प्रक्रिया की शुरुआत एक विस्तृत आध्यात्मिक पठन से होती है, जिसमें नकारात्मक बंधन की सही प्रकृति और स्रोत पहचाना जाता है। फिर दीपक तांत्रिक अफेक्शन के अनुसार कामाख्या मंदिर या अपने मायोंग आश्रम में विशिष्ट प्रतिकारी अनुष्ठान करते हैं। इसके बाद एक स्थायी <em>कवच</em> स्थापित किया जाता है। अधिकांश ग्राहक 3 से 7 दिनों में भारी बोझ कम होने की सूचना देते हैं। पूर्ण शुद्धि में 21 दिन तक लग सकते हैं। आज ही असली असम तांत्रिक से संपर्क करें।',
          ],
        },
      ],
      faqs: [
        {
          q: 'क्या कामाख्या मंदिर में काला जादू सचमुच हटाया जा सकता है?',
          a: 'हां। दीपक जी जैसे प्रामाणिक कामाख्या मंदिर तांत्रिक की मदद से गंभीर काला जादू और नकारात्मक ऊर्जा स्थायी रूप से हटाई जा सकती है और आपके परिवार के लिए सुरक्षा कवच बनाया जाता है।',
        },
        {
          q: 'काला जादू हटाने में कितना समय लगता है?',
          a: 'अधिकांश ग्राहक बताते हैं कि 3 से 7 दिनों में भारी एहसास कम हो जाता है। पूर्ण शुद्धि में बंधन की गंभीरता के अनुसार 21 दिन तक लग सकते हैं।',
        },
        {
          q: 'क्या कामाख्या में काला जादू हटाना सुरक्षित है?',
          a: 'हां। यह अनुष्ठान हानिकारक नहीं है। दीपक तांत्रिक केवल प्रतिकारी अनुष्ठान और सुरक्षा के उपाय करते हैं; उन्होंने कभी किसी को हानि पहुँचाने वाला अनुष्ठान नहीं किया है।',
        },
      ],
      testimonial: {
        text: 'मेरी ज़िंदगी में सब कुछ गलत चल रहा था। मेरा व्यापार डूब गया और सेहत भी खराब हो गई। डॉक्टरों ने कुछ नहीं पाया। फिर किसी ने दीपक तांत्रिक का सुझाव दिया। कामाख्या में उनके काला जादू हटाने के पूजन के बाद कुछ ही दिनों में भारी एहसास गायब हो गया। मेरा व्यापार फिर से चल पड़ा। सचमुच जीवन बचाने वाले!',
        name: 'विक्रम, कोलकाता',
        initial: 'वि',
      },
    },
  },

  // =====================================================================
  {
    slug: 'love-problem-solution-kamakhya',
    file: 'love-problem-solution-kamakhya',
    icon: 'heart',
    priority: '0.9',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Love Problem Solution Kamakhya | Deepak Tantrik',
    desc:
      'Love problem solution at Kamakhya Temple and Mayong. Get your true love back with Vedic rituals. 25+ years experience. Call +91 9706801250 for a free reading.',
    keywords: [
      'love problem solution kamakhya',
      'kamakhya love problem',
      'lost love back kamakhya',
      'love marriage problem kamakhya',
      'best kamakhya tantrik',
      'tantrik in guwahati',
      'mayong tantrik contact number',
    ],
    h1: 'Love Problem Solution in Kamakhya Temple & Mayong',
    sub: 'Restore harmony and bring your true love back with powerful Vedic rituals from Kamakhya Temple.',
    h2: 'Expert Love Astrology and Rituals',
    intro: [
      'Relationship problems are the most common reason people contact a tantrik, and they are rarely simple. A relationship may have broken after a misunderstanding, a family objection, a long separation or the involvement of someone else. The first task is to understand which of those is actually happening, because each calls for a different response.',
      'Where a remedy is appropriate, it is used to address a specific obstruction rather than to control another person\'s feelings. That distinction matters. A ritual cannot make someone choose you, and any practitioner who says otherwise is describing something that does not exist. What can sometimes be helped is a family objection, a pattern of interference, or a situation where communication has broken down.',
      'If you are unsure whether your situation is one that astrology can help with, describe it in your own words. The first consultation is free, and the answer may be that the problem needs a conversation, a lawyer, or time rather than a ritual. You will be told that honestly.',
    ],
    image: '/images/mandala.png',
    imageAlt: 'Mandala ritual design used for love problem puja at Kamakhya Temple, Guwahati',
    deep: [
      {
        h2: 'Why Kamakhya Is Central to Relationship Consultations',
        p: [
          'Kamakhya is associated with desire and fertility, which is why relationship questions are so often brought here. The location matters in the tradition, but it does not replace the assessment. Deepak Tantrik reads the situation and, where relevant, the charts of both people before deciding whether a remedy is appropriate.',
          'His family practice in Mayong is the other part of the picture, and it is described on the Mayong page rather than repeated here. The practical point is that you can reach him directly on +91 9706801250, and the first conversation is used to work out whether there is a real obstruction to address.',
        ],
      },
      {
        h2: 'Common Situations People Bring',
        p: [
          'The cases that come most often are a former partner who has withdrawn, a family objecting to a marriage, a spouse who has become distant, one-sided affection, a broken engagement, or a relationship that ended after several years. Some of these can be helped and some cannot. The consultation is where that is worked out, and the answer is sometimes that the useful step is not a ritual.',
        ],
      },
      {
        h2: 'What the Process Actually Involves',
        p: [
          'The first conversation establishes the facts, and the facts are what determine whether a remedy is appropriate at all. How long the relationship lasted, how it ended, whether anything was said to the other person since, and whether either of you is already in a relationship. A situation where one person has not let go is a different problem from one where the other person has actively withdrawn, and the two are treated differently.',
          'Where a remedy does make sense, it is described before it is done: what will be performed, how long it takes, what it costs, and what a realistic result looks like. The honest position is that a remedy can address a specific obstruction, usually a third party, a family objection, or a pattern of interference, and that it cannot make someone choose you who has decided otherwise. Any practitioner who promises otherwise is promising something no one in this line of work can deliver.',
          'Most clients report a noticeable shift within 7 to 21 days, and many describe the first change as the person becoming calmer and less anxious rather than the other person calling. That is usually the meaningful indicator, because it is the part that is actually working on your own situation rather than on someone else\'s decision.',
        ],
      },
      {
        h2: 'Love Marriage and Parent Objection: The Most Common Case',
        p: [
          'A large share of consultations are not lost-love cases at all. They are couples who are in love, want to marry, and have hit a wall of family objection. Inter-caste, inter-religion, differences in income or education, a previous marriage, or simply two families who have not met and do not know what to think of each other. The obstacle is frequently practical rather than ideological, which means it is often more tractable than people expect.',
          'Approaching that as a single problem is what makes it hard. In practice it has three separate layers that get confused with one another: whether the couple is strong enough to hold, what specifically the parents are objecting to, and whether the situation is being made worse by something external. Identifying which layer is the real obstacle matters more than applying a ritual to all three at once.',
          'The first consultation reads both charts, which matters more here than in most other cases because the objection is frequently about compatibility as the parents understand it. The remedy addresses the specific objection rather than the relationship in general, and it frequently involves the couple doing something concrete, not only a ritual. If the honest answer is that the objection will not shift, you will be told that too. A remedy performed over an objection that will not move costs money and delays the decision the couple needs to make anyway.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a lost love really be brought back?',
        a: 'Sometimes. A remedy can address a specific obstruction, such as a family objection or a pattern of interference. It cannot make someone return who has decided otherwise. The first consultation is used to work out which situation applies.',
      },
      {
        q: 'Do you help with love marriage family objections?',
        a: 'A family objection is a common reason for consultation. The useful work is to identify what the objection actually is, because it is often practical rather than ideological. A remedy may support that process, but it does not replace the conversation the couple and the families need to have.',
      },
      {
        q: 'Is love problem solution safe?',
        a: 'Yes. Every ritual is performed for the welfare of both partners. Deepak Tantrik uses positive vashikaran and Kamakhya puja only, and never performs anything harmful or against a person\'s will.',
      },
    ],
    testimonial: {
      text: 'My boyfriend left me for someone else. I was broken. After consulting Deepak Ji at Kamakhya, his powerful puja changed everything. Within 15 days, my boyfriend came back apologizing. We are getting married next month!',
      name: 'Neha, Mumbai',
      initial: 'N',
    },
    related: ['vashikaran-specialist-mayong', 'husband-wife-dispute-mayong', 'black-magic-removal-kamakhya', 'best-tantrik-mayong'],

    hi: {
      title: 'कामाख्या में प्रेम समस्या का समाधान | दीपक तांत्रिक',
      desc:
        'कामाख्या मंदिर और मायोंग में प्रेम समस्या का समाधान। वैदिक अनुष्ठानों से अपना प्रिय वापस पाएं। 25+ वर्ष का अनुभव। +91 9706801250 पर कॉल करें।',
      keywords: [
        'प्रेम समस्या समाधान कामाख्या',
        'कामाख्या प्रेम समस्या',
        'कामाख्या मंदिर पूर्व प्रेमी वापस',
        'प्रेम विवाह समस्या कामाख्या',
        'कामाख्या के सबसे बड़े तांत्रिक',
        'गुवाहाटी में तांत्रिक',
      ],
      h1: 'कामाख्या मंदिर और मायोंग में प्रेम समस्या का समाधान',
      sub: 'कामाख्या मंदिर के शक्तिशाली वैदिक अनुष्ठानों से सामंजस्य बहाल करें और अपना सच्चा प्रेम वापस पाएं।',
      h2: 'विशेषज्ञ प्रेम ज्योतिष और अनुष्ठान',
      intro: [
        'प्रेम सबसे सुंदर भावना है, पर अपने प्रिय को खोना अकल्पनीय पीड़ा देता है। चाहे वह गलतफहमियों, परिवार विरोध या किसी तीसरे व्यक्ति के हस्तक्षेप से हो, दीपक तांत्रिक कामाख्या मंदिर में प्रेम समस्या का सबसे प्रभावी समाधान देते हैं।',
        'कामाख्या के पवित्र और सकारात्मक ऊर्जा के उपयोग से उनके सिद्ध मंत्र और आध्यात्मिक पूजन आपके पक्ष में ग्रहों को साधारित करते हैं। यह प्रक्रिया साथियों के बीच की नकारात्मकता दूर करती है, प्रेम आकर्षण पैदा करती है, और सख्त माता-पिता को प्रेम विवाह के लिए सहमत करती है, बिना किसी हानिकारक दुष्प्रभाव के।',
        'अपना रिश्ता दुख में समाप्त न होने दें। उनके मार्गदर्शन से हजारों जोड़े फिर से मिल चुके हैं। आज ही व्यक्तिगत ज्योतिष रीडिंग के लिए संपर्क करें और खुशी की यात्रा शुरू करें।',
      ],
      deep: [
        {
          h2: 'प्रेम के उपायों के लिए कामाख्या मंदिर सबसे शक्तिशाली क्यों है',
          p: [
            'जो कोई कामाख्या मंदिर के बारे में जानना चाहता है, वह जानता है कि यह पवित्र स्थल काम की देवी की निवासस्थानी है। यहाँ, प्रामाणिक कामाख्या मंदिर तांत्रिक के मार्गदर्शन में प्रेम संबंधी अनुष्ठान करने से उनकी शक्ति हजार गुना बढ़ जाती है। प्रेम समस्याओं के लिए सर्वाधिक पूजनीय कामाख्या मंदिर में तांत्रिक दीपक तांत्रिक इस स्थान की दिव्य ऊर्जा का उपयोग आपके और आपके प्रिय के बीच की बाधाओं को दूर करने के लिए करते हैं।',
            'इसके अतिरिक्त, मायोंग असम तांत्रिक के रूप में उनकी जड़ें उन प्राचीन प्रेम-बंधन विधियों तक पहुँच देती हैं जो कहीं और नहीं मिलतीं। कामाख्या की ऊर्जा और मायोंग का ज्ञान मिलकर उन्हें प्रेम समस्याओं के लिए कामाख्या के सबसे बड़े तांत्रिक बनाता है। संपर्क के लिए मायोंग तांत्रिक कांटैक्ट नंबर का उपयोग करें: +91 9706801250।',
          ],
        },
        {
          h2: 'सामान्य प्रेम समस्याएं जिनका समाधान किया जाता है',
          p: [
            'पुराना प्रेमी लौटने से मना करना, जाति या धर्म के कारण परिवार का विरोध, पति या पत्नी का किसी और की ओर आकर्षित होना, एकतरफा प्रेम, टूटी हुई सगाई, या वर्षों की रिश्ते के बाद प्रेम का खो जाना। हालातक कितने भी निराश लगें, गुवाहाटी के प्रमुख तांत्रिक बाबा और असली असम तांत्रिक दीपक तांत्रिक के पास समाधान है। अभी मायोंग तांत्रिक कांटैक्ट पर कॉल करें और प्रेम की यात्रा फिर से शुरू करें।',
          ],
        },
      ],
      faqs: [
        {
          q: 'क्या छोड़ा हुआ प्रेम वापस लाया जा सकता है?',
          a: 'कई मामलों में, हां। प्रेम समस्याओं के लिए सर्वश्रेष्ठ कामाख्या तांत्रिक के रूप में दीपक तांत्रिक कामाख्या पूजन के माध्यम से साथियों के बीच की नकारात्मकता दूर करते हैं और आकर्षण बहाल करते हैं। परिणाम स्थिति पर निर्भर करता है, जो पहली बातचीत में उन्होंने जान लेते हैं।',
        },
        {
          q: 'क्या आप प्रेम विवाह में परिवार के विरोध में मदद करते हैं?',
          a: 'हां। कामाख्या मंदिर में वैदिक ज्योतिष और मंत्र चिकित्सा के माध्यम से सख्त माता-पिता को प्रेम विवाह के लिए सहमत करना उनकी मुख्य सेवाओं में से एक है। वे विरोध के पारिवारिक पक्ष और भावनात्मक पक्ष, दोनों पर काम करते हैं।',
        },
        {
          q: 'क्या प्रेम समस्या का समाधान सुरक्षित है?',
          a: 'हां। हर अनुष्ठान दोनों साथियों के कल्याण के लिए किया जाता है। दीपक तांत्रिक केवल सकारात्मक वशीकरण और कामाख्या पूजन का उपयोग करते हैं, और कभी किसी हानिकारक या किसी की इच्छा के विरुद्ध कार्य नहीं करते।',
        },
      ],
      testimonial: {
        text: 'मेरे प्रेमी ने मुझे छोड़कर किसी और के लिए हाथ धो लिया। मैं टूट गई थी। कामाख्या में दीपक जी से सलाह लेने के बाद उनके शक्तिशाली पूजन ने सब कुछ बदल दिया। 15 दिनों में ही मेरा प्रेमी माफी मांगने लौट आया। हम अगले महीने शादी कर रहे हैं!',
        name: 'नेहा, मुंबई',
        initial: 'ने',
      },
    },
  },

  // =====================================================================
  {
    slug: 'vashikaran-specialist-mayong',
    file: 'vashikaran-specialist-mayong',
    icon: 'check',
    priority: '0.9',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Vashikaran Specialist Mayong | Deepak Tantrik Ji',
    desc:
      'Vashikaran specialist in Mayong and Guwahati for marriage, love and family disputes. Positive, safe tantrik remedies. Call +91 9706801250 for a free reading.',
    keywords: [
      'vashikaran specialist mayong',
      'mayong vashikaran',
      'positive vashikaran',
      'mayong assam tantrik',
      'best mayong tantrik',
      'tantrik in guwahati',
      'mayong tantrik contact number',
    ],
    h1: 'Vashikaran Specialist in Mayong, Assam',
    sub: 'Attract positivity and bring loved ones back on the right path with safe Mayong Vashikaran techniques.',
    h2: 'Genuine Vashikaran Services in Mayong',
    intro: [
      'Mayong has a long association with tantra in Assamese tradition. Practices described as vashikaran are part of that history, but the word is used very loosely today. The version practised here is not coercion: it is an attempt to address a specific obstruction in a relationship that already exists, and it is refused where the request is to override another person\'s decision.',
      'Most requests fall into a few categories: a marriage under pressure, a partner who has become distant, a family blocking a match, or a relationship where communication has broken down. The work is presented honestly as an attempt to address the obstruction, not as a way to control someone. No harm is intended, and no result is guaranteed.',
      'If you are unsure whether your situation is appropriate for this kind of consultation, say so when you call. The first consultation is free, and if the honest answer is that a remedy will not help, you will hear that rather than a sales pitch.',
    ],
    image: '/images/religious.jpg',
    imageAlt: 'Red vermilion and lamps at a Mayong tantra ritual for positive vashikaran',
    deep: [
      {
        h2: 'What Vashikaran Means in This Practice',
        p: [
          'In the tradition Deepak Tantrik was trained in, vashikaran is described as a way of addressing a specific obstruction between two people who already have a connection. It is not presented as a science of mind control, and it is not used to create affection where none exists. The assessment matters more than the label, because the same word is used for very different things.',
          'The number is the same for every kind of consultation: +91 9706801250. The first call is used to establish what is happening and whether a remedy is appropriate. If it is, you will be told where it would be performed and what it involves before you commit to anything.',
        ],
      },
      {
        h2: 'Who This Is, and Is Not, For',
        p: [
          'People usually come with a partner who has become distant, a family refusing a marriage, a child who has fallen into bad company, or a business relationship that has turned hostile. Some of these are appropriate for a consultation and some are not. The first conversation is where that is decided, without pressure and without a fee.',
        ],
      },
      {
        h2: 'What Vashikaran Can and Cannot Do',
        p: [
          'This is worth stating plainly because the word is used loosely and the honest limits are not widely discussed. Positive vashikaran works on alignment: it is used to address a specific obstruction that is preventing two people who already have a connection from resolving what is between them. In practice that means a partner who has withdrawn, a family blocking a marriage, a relationship where something external is interfering, or a situation where communication has broken down badly enough that the normal route is not available.',
          'It does not make someone fall in love who has no prior connection with you. It does not create affection where none exists, and no honest practitioner will offer it. It does not override a person\'s decision, and any method sold on the promise that it does is either fraud or superstition. It is also not a substitute for anything else: it does not replace a medical opinion, a lawyer, a financial adviser, or a difficult conversation.',
          'Where the situation is one where a person has clearly chosen to end a relationship, the useful question is usually not whether a remedy can change that but whether the client wants to begin again in a way that leaves them waiting indefinitely for a decision that has already been made. That is an honest conversation worth having, and it is one that is regularly avoided by practitioners who would rather sell a remedy.',
        ],
      },
      {
        h2: 'The Process and What to Expect',
        p: [
          'The first consultation is free and is a conversation rather than a booking. What is established is what is actually happening, whether the situation falls within what can be helped, and what the alternatives are if a remedy is not appropriate. Both partners\' details are useful where both are involved, and where the relationship is between two people the assessment is made against both charts, because that is where the obstruction either is or is not.',
          'Where a remedy is indicated, you are told what will be performed, at which of the two locations, how long it takes, and what it costs as a fixed amount before anything begins. The honest answer is that there is no fixed timeline. A change is sometimes reported within a few weeks, but it depends on the situation and is never guaranteed. You will be told what to expect during the consultation.',
          'There is no percentage of any outcome, no monthly package, and no follow-up call used to introduce a new problem. If the assessment is that a remedy will not help, you are told that and the consultation is the end of the matter.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is positive vashikaran safe?',
        a: 'The practice does not use coercion and does not claim to override another person\'s decision. It is used only where a specific obstruction can be addressed and where the request does not involve harming or controlling someone.',
      },
      {
        q: 'Where is vashikaran performed?',
        a: 'It is performed at either the Kamakhya Temple in Guwahati or the Mayong ashram in Morigaon, depending on the case. Which location is appropriate is decided during the consultation and explained before anything begins.',
      },
      {
        q: 'How long does a vashikaran remedy take to work?',
        a: 'Most clients report a noticeable change within 7 to 21 days. The exact timeline depends on the strength of the existing bond and the severity of the problem, which he assesses before starting.',
      },
    ],
    testimonial: {
      text: 'My son was falling into bad company and ignored us. After positive vashikaran remedies by Deepak Ji in Mayong, he completely changed his path. He is now focused on his career. Thank you!',
      name: 'Sunita, Delhi',
      initial: 'S',
    },
    related: ['husband-wife-dispute-mayong', 'love-problem-solution-kamakhya', 'black-magic-removal-kamakhya', 'best-tantrik-mayong'],

    hi: {
      title: 'मायोंग में वशीकरण विशेषज्ञ दीपक तांत्रिक | असली सेवा',
      desc:
        'मायोंग और गुवाहाटी में संबंध, प्रेम और पारिवारिक विवाद के लिए वशीकरण विशेषज्ञ। सुरक्षित और असली उपाय। दीपक तांत्रिक, +91 9706801250।',
      keywords: [
        'वशीकरण विशेषज्ञ मायोंग',
        'मायोंग वशीकरण',
        'सकारात्मक वशीकरण',
        'मायोंग असम तांत्रिक',
        'मायोंग के सबसे बड़े तांत्रिक',
        'गुवाहाटी में तांत्रिक',
      ],
      h1: 'मायोंग, असम में वशीकरण विशेषज्ञ',
      sub: 'सुरक्षित मायोंग वशीकरण तकनीकों से सकारात्मकता आकर्षित करें और प्रियजनों को सही रास्ते पर लौटाएं।',
      h2: 'मायोंग में असली वशीकरण सेवाएं',
      intro: [
        'मायोंग प्राचीन जादू और तंत्र की राजधानी के रूप में विश्व प्रसिद्ध है। सदियों से वशीकरण (सकारात्मक ऊर्जा के माध्यम से मन पर नियंत्रण) की गहन रहस्य यहाँ अभ्यास किए गए हैं। दीपक तांत्रिक मायोंग में अत्यधिक सम्मानित वशीकरण विशेषज्ञ हैं और इन्हीं प्राचीन विधियों का उपयोग केवल लोगों के कल्याण के लिए करते हैं।',
        'वशीकरण को प्रायः गलत समझा जाता है। सही हाथों में, यह टूटते विवाह को बचाने, साथी के भटकने से रोकने, या सख्त माता-पिता को प्रेम विवाह के लिए सहमत करने का एक शक्तिशाली साधन है। दीपक तांत्रिक द्वारा किए गए अनुष्ठान शुद्ध ऊर्जा को आमंत्रित करते हैं जो आपकी इच्छा व्यक्ति का मन आपके पक्ष में कर देते हैं, बिना किसी हानि के।',
        'यदि आप महसूस करते हैं कि आपके रिश्तों या जीवन की स्थितियों पर नियंत्रण खो रहे हैं, तो मायोंग के सबसे भरोसेमंद विशेषज्ञ से परामर्श लें। परिणाम तेज़, स्वाभाविक और स्थायी होते हैं। आपके हक का सुख पुनः प्राप्त करें।',
      ],
      deep: [
        {
          h2: 'मायोंग में वशीकरण: मूल विज्ञान',
          p: [
            'असम तांत्रिक की आध्यात्मिक शब्दावली में वशीकरण कोई अंधकारी कला नहीं है, बल्कि ब्रह्मांडीय संरेखण का एक सटीक विज्ञान है। मायोंग के ग्रंथ वशीकरण को व्यक्ति के प्राकृतिक चुंबकीय आवृत्ति को उपचार चाहने वाले व्यक्ति की ओर मोड़ने के रूप में वर्णित करते हैं। वशीकरण के लिए मायोंग के सबसे बड़े तांत्रिक के रूप में दीपक तांत्रिक दशकों से इन आवृत्तियों का अध्ययन कर चुके हैं। उनकी तकनीकें कामाख्या मंदिर और मायोंग दोनों में परिष्कृत हैं, पूर्णतः सुरक्षित हैं, और न चिकित्सक पर न ग्राहक पर कोई कर्मिक भार छोड़ती हैं।',
            'वशीकरण सेवाओं के लिए मायोंग तांत्रिक कांटैक्ट सामान्य संपर्क नंबर के समान है: +91 9706801250। संपर्क करने पर दीपक तांत्रिक विस्तृत परामर्श के माध्यम से आपकी स्थिति का आकलन करेंगे और उपयुक्त वशीकरण अनुष्ठान की सलाह देंगे। वे मायोंग असम तांत्रिक और कामाख्या मंदिर तांत्रिक दोनों हैं, जिससे आपको दो पवित्र स्थानों से सबसे शक्तिशाली वशीकरण उपाय एक साथ मिलते हैं।',
          ],
        },
        {
          h2: 'कामाख्या वशीकरण से किसे लाभ हो सकता है?',
          p: [
            'जिसका साथी ठंडा और दूर हो चुका हो, जिसके परिवार प्रेम विवाह का विरोध कर रहा हो, जिसके व्यापारिक प्रतिद्वंद्वी आपकी सफलता रोक रहे हों, या जिसके बच्चे बुरी संगत में पड़ गए हों। वशीकरण के लिए सबसे मांगे जाने वाले असम तांत्रिक के रूप में दीपक तांत्रिक ने वे मामले सुलझाए हैं जिन्हें अन्य चिकित्सक असंभव बता चुके थे। गुवाहाटी में तांत्रिक और मायोंग तांत्रिक दोनों रूपों में उनकी द्विगुणी सत्ता उन्हें अद्वितीय रूप से शक्तिशाली बनाती है। संकोच न करें, आज ही मायोंग तांत्रिक कांटैक्ट नंबर पर कॉल करें।',
          ],
        },
      ],
      faqs: [
        {
          q: 'क्या सकारात्मक वशीकरण सुरक्षित है?',
          a: 'हां। दीपक तांत्रिक जो वशीकरण करते हैं वह केवल सकारात्मक वशीकरण है। इसका उपयोग विवाह बचाने, पारिवारिक विवाद सुलझाने और साथी के व्यवहार को सुधारने के लिए होता है। वे इसका उपयोग किसी को हानि पहुँचाने या किसी की स्वतंत्र इच्छा को ओवरराइड करने के लिए कभी नहीं करते।',
        },
        {
          q: 'वशीकरण कहाँ किया जाता है?',
          a: 'मामले के अनुसार गुवाहाटी के कामाख्या मंदिर या मोरिगांव के उनके मायोंग आश्रम में। उनके पास मायोंग तंत्र वंश और कामाख्या की आधिकारिक दीक्षा दोनों हैं, इसलिए वे समस्या के अनुसार स्थान का चयन कर सकते हैं।',
        },
        {
          q: 'वशीकरण से परिणाम कितने समय में आता है?',
          a: 'अधिकांश ग्राहक 7 से 21 दिनों में स्पष्ट बदलाव की सूचना देते हैं। सटीक समय-सीमा मौजूदा बंधन की मजबूती और समस्या की गंभीरता पर निर्भर करती है, जिसकी जांच वे शुरू करने से पहले करते हैं।',
        },
      ],
      testimonial: {
        text: 'मेरा बेटा बुरी संगत में पड़ गया था और हमारी बात नहीं मानता था। मायोंग में दीपक जी के सकारात्मक वशीकरण उपायों के बाद, उसने पूरी तरह अपना रास्ता बदल लिया। अब वह अपने करियर पर ध्यान दे रहा है। धन्यवाद!',
        name: 'सुनीता, दिल्ली',
        initial: 'सु',
      },
    },
  },

  // =====================================================================
  {
    slug: 'husband-wife-dispute-mayong',
    file: 'husband-wife-dispute-mayong',
    icon: 'users',
    priority: '0.9',
    changefreq: 'monthly',
    hasHi: true,

    title: 'Husband Wife Dispute Solution Mayong | Deepak Tantrik',
    desc:
      'Husband wife dispute solution in Mayong and Kamakhya. Astrological corrections and peace mantras restore love and respect. Call +91 9706801250 today.',
    keywords: [
      'husband wife dispute solution mayong',
      'marriage problem mayong',
      'mayong assam tantrik',
      'best mayong tantrik',
      'tantrik in guwahati',
      'kamakhya temple tantriks',
      'mayong tantrik contact number',
    ],
    h1: 'Husband Wife Dispute Solution in Mayong, Assam',
    sub: 'Save your marriage. Stop arguments, remove third-party interference, and rebuild trust today.',
    h2: 'Expert Marriage Problem Solution',
    intro: [
      'Marriage problems are among the most difficult things people bring to a consultation. Constant arguments, a breakdown in communication, or the involvement of a third person can make a marriage feel impossible to repair. The work here starts with understanding what changed and when, not with a promise to save the marriage.',
      'Both partners\' charts are read where both are available, because a marriage is a relationship between two charts rather than a property of one. The reading looks at the periods each person is running and at what has changed recently. Ordinary explanations, including health, money and family pressure, are considered alongside the chart.',
      'Where a remedy is appropriate, it is described in full before it is performed. The honest position is that a ritual can support a marriage, but it cannot substitute for the two people doing the work. If the assessment is that the marriage needs something other than a remedy, you will be told that plainly.',
    ],
    image: '/images/portrait.jpg',
    imageAlt: 'Deepak Tantrik, husband wife dispute specialist in Mayong and Kamakhya, Assam',
    deep: [
      {
        h2: 'Separating Ordinary Causes from Spiritual Ones',
        p: [
          'Some marriage disputes have an ordinary cause and some are brought as spiritual ones. The assessment separates the two. A sudden change in a partner\'s behaviour may follow a health problem, a financial shock, a family intervention or a period of stress, and those possibilities are examined before any spiritual explanation is accepted. Where a spiritual cause is assessed as present, the remedy is specific to it.',
          'The approach combines Jyotish reading with the family practice in Mayong and the tradition at Kamakhya. The first consultation is free and is a conversation rather than a booking. If a remedy is indicated, you will be told what it involves, where it is performed and what it costs before anything begins. The number is +91 9706801250.',
        ],
      },
      {
        h2: 'What a Remedy Can and Cannot Change',
        p: [
          'No honest practitioner can promise that arguments will stop within a fixed number of days or that a marriage will be permanently repaired. What can be offered is a structured assessment, a specific remedy where one is appropriate, and a clear explanation of what it can and cannot do. The first consultation is free, and it is the right place to start if you are close to a decision about the marriage.',
        ],
      },
      {
        h2: 'What the Process Actually Involves',
        p: [
          'Both partners\' charts are read, which matters here more than in most other cases. A marriage dispute is a property of the relationship between two charts, so reading one alone gives an incomplete picture, and the question of who is running which period is frequently the most useful single piece of information in the assessment.',
          'The consultation establishes what changed and when. A marriage that has been difficult for years is a different situation from one that turned in eighteen months ago, and the two have very different causes. Where the friction is a period that will pass, the remedy may be light and short. Where it is a long-standing pattern, the work is slower and the expectation has to be honest about that.',
          'What tends to help most is often not the ritual but the conversation it forces. Couples frequently arrive having stopped talking properly, and the astrology conversation reintroduces the specifics. That is worth saying plainly: the remedy supports the marriage, it does not substitute for the two people doing the work, and anyone promising to fix a marriage without the participation of both partners is describing something that does not exist.',
        ],
      },
      {
        h2: 'What This Cannot Fix',
        p: [
          'Some problems are not spiritual and should not be presented as spiritual. A marriage where one partner has decided to leave will not be held by any remedy. A marriage involving sustained physical harm, coercion, addiction or serious untreated illness needs professional help, not a ritual, and treating it as a spiritual problem causes real damage by delaying it.',
          'Where the difficulty is a genuine incompatibility that has been visible to both partners for years, astrological work can clarify the situation but cannot resolve it, and pretending otherwise wastes money and time. There is also no honest remedy for a dispute where one partner is systematically deceiving the other, because the problem is a decision being made, not an obstruction in the relationship.',
          'What can often be helped is the identifiable set: a third party whose presence has grown, a period of genuine stress affecting one partner, a communication pattern that has calcified, a situation where a specific unresolved grievance from years ago is still running. Those are real, they are common, and they are worth an honest consultation. Whether a given marriage falls into that category is exactly what the first consultation exists to determine, and the answer is sometimes no.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a marriage dispute really be resolved?',
        a: 'Sometimes. The first step is to identify what actually changed and whether the cause is ordinary or spiritual. A remedy may help with a specific obstruction, but no practitioner can promise that arguments will stop on a fixed schedule.',
      },
      {
        q: 'Is third-party interference removed?',
        a: 'Interference from a third person is one of the situations people describe, and it is assessed like any other. Where a specific obstruction is identified, a remedy may be appropriate. What is not offered is a claim that every case involves black magic or that a third party can be removed against their will.',
      },
      {
        q: 'Do both partners need to be present?',
        a: 'Not always. The first consultation is normally taken with one partner, and the kundli of both partners is needed for an accurate reading. He will tell you exactly what is required at the first call.',
      },
    ],
    testimonial: {
      text: 'My marriage was on the brink of divorce due to daily fights. After taking guidance from Baba Ji in Mayong, everything calmed down. We are now happily living together again. Thank you.',
      name: 'Manisha, Mumbai',
      initial: 'M',
    },
    related: ['vashikaran-specialist-mayong', 'love-problem-solution-kamakhya', 'black-magic-removal-kamakhya', 'best-tantrik-mayong'],

    hi: {
      title: 'मायोंग में पति-पत्नी झगड़े का समाधान | दीपक तांत्रिक',
      desc:
        'मायोंग और कामाख्या में पति-पत्नी झगड़ों का समाधान। ज्योतिषी सुधार और शांति मंत्र प्रेम और सम्मान बहाल करते हैं। +91 9706801250 पर कॉल करें।',
      keywords: [
        'पति पत्नी झगड़ा समाधान मायोंग',
        'विवाह समस्या मायोंग',
        'मायोंग असम तांत्रिक',
        'मायोंग के सबसे बड़े तांत्रिक',
        'गुवाहाटी में तांत्रिक',
        'कामाख्या मंदिर तांत्रिक',
      ],
      h1: 'मायोंग, असम में पति-पत्नी झगड़ों का समाधान',
      sub: 'अपना विवाह बचाएं। झगड़े रोकें, तीसरे व्यक्ति का हस्तक्षेप हटाएं और आज ही विश्वास बहाल करें।',
      h2: 'विशेषज्ञ विवाह समस्या समाधान',
      intro: [
        'शांतिपूर्ण विवाह सुखी जीवन के लिए आवश्यक है, लेकिन लगातार झगड़े, संवाद की कमी, या किसी अन्य व्यक्ति की भागीदारी विवाह को तलाव की ओर धकेल सकती है। मायोंग में पति-पत्नी झगड़ा समाधान के प्रसिद्ध विशेषज्ञ के रूप में, दीपक तांत्रिक ने हजारों परिवारों को टूटने से बचाया है।',
        'गहन ज्योतिषीय कुंडलियों और असम के मायोंग में उत्पन्न रहस्यमय उपायों के माध्यम से, वे टकराव का मूल कारण पहचानते हैं। प्रायः नकारात्मक ग्रह-स्थितियाँ या बाहरी दृष्टि-दोष ही अचानक साथी के व्यवहार में परिवर्तन लाते हैं।',
        'लक्षित मंत्रों और विशिष्ट आध्यात्मिक अनुष्ठानों के माध्यम से, दीपक तांत्रिक आप और आपके जीवनसाथी के बीच की सारी कटुता दूर कर सकते हैं। उनके उपाय गहरी समझ पैदा करते हैं, प्रेम बहाल करते हैं, और एक सुखद, दीर्घकालिक वैवाहिक बंधन सुनिश्चित करते हैं। आज ही संपर्क करें और अपने घर में शांति लौटाएं।',
      ],
      deep: [
        {
          h2: 'विवाह क्यों टूटते हैं: एक आध्यात्मिक दृष्टिकोण',
          p: [
            'कई पति-पत्नी झगड़े केवल मनोवैज्ञानिक नहीं होते, उनका गहरा आध्यात्मिक मूल होता है। ईर्ष्यालु रिश्तेदारों या दुश्मनों द्वारा किया गया कामाख्या काला जादू प्रेम करने वाले साथियों के बीच नकली दूरी, संदेह और नफरत पैदा कर सकता है। विवाह समस्याओं के लिए कामाख्या में सबसे बड़े तांत्रिक के रूप में, दीपक तांत्रिक अपने पाठ में ऐसी बाहरी अंधकारी शक्तियों की नियमित रूप से पहचान करते हैं। इसी प्रकार, प्रमुख मायोंग असम तांत्रिक के रूप में वे मायोंग शैली के काले जादू की विशिष्ट ऊर्जा-हस्ताक्षर पहचानते हैं जो सामान्य चिकित्सकों को दिखाई नहीं देते।',
            'मूल कारण की पहचान के बाद, चाहे वह कामाख्या मंदिर का काला जादू हो, ग्रह-दोष हो, या वास्तविक व्यक्तित्व संघर्ष हो, दीपक तांत्रिक सटीक उपाय अपनाते हैं। उनका दृष्टिकोण समग्र है, जिसमें वैदिक ज्योतिष, मंत्र चिकित्सा और कामाख्या तथा मायोंग दोनों परंपराओं के तांत्रिक अनुष्ठान सम्मिलित हैं। विवाह परामर्श के लिए मायोंग तांत्रिक कांटैक्ट नंबर है: +91 9706801250।',
          ],
        },
        {
          h2: 'आप किन परिणामों की अपेक्षा कर सकते हैं',
          p: [
            'जो ग्राहक विवाह समस्याओं के लिए इस असम तांत्रिक से परामर्श लेते हैं, वे बताते हैं: 7 दिनों में रोजमर्रा के झगड़े बंद हो जाते हैं; स्नेह, अपनापन और निकटता लौट आती है; तीसरे व्यक्ति का हस्तक्षेप समाप्त हो जाता है; और एक स्थायी, गहराई से जुड़ा हुआ रिश्ता बनता है। पति-पत्नी झगड़े के लिए गुवाहाटी में शीर्ष तांत्रिक के रूप में दीपक तांत्रिक अपने उपायों के पीछे हैं। यदि आप तलाव के अधिक किनारे पर हैं, तो हार मानने से पहले असम के सबसे भरोसेमंद तांत्रिक को एक बार कॉल करें।',
          ],
        },
      ],
      faqs: [
        {
          q: 'क्या विवाह में झगड़े वास्तव में सुलझाए जा सकते हैं?',
          a: 'अधिकांश मामलों में, हां। पति-पत्नी झगड़ा समाधान के लिए सर्वश्रेष्ठ मायोंग तांत्रिक के रूप में दीपक तांत्रिक पहले ज्योतिषीय पठन से मूल कारण पहचानते हैं, फिर लक्षित मंत्रों और अनुष्ठानों का प्रयोग करते हैं। कई ग्राहक बताते हैं कि लगभग 7 दिनों में रोजमर्रा के झगड़े बंद हो जाते हैं।',
        },
        {
          q: 'क्या तीसरे व्यक्ति का हस्तक्षेप हटाया जा सकता है?',
          a: 'हां। किसी तीसरे व्यक्ति का हस्तक्षेप विवाह झगड़े के सबसे सामान्य कारणों में से एक है जिसे वे पहचानते हैं, और इसका समाधान विशिष्ट उपायों से किया जा सकता है। कपल के खिलाफ किए गए काले जादू की उपस्थिति की भी नियमित रूप से पहचान और हटाने की जाती है।',
        },
        {
        q: 'क्या दोनों साथियों को उपस्थित रहना होगा?',
          a: 'हमेशा नहीं। पहली बातचीत सामान्यतः एक साथी से होती है, पर सटीक पाठ के लिए दोनों साथियों की कुंडली आवश्यक होती है। पहली कॉल पर वे आपको ठीक-ठीक बता देंगे कि क्या आवश्यक है।',
        },
      ],
      testimonial: {
        text: 'रोजाना झगड़ों के कारण हमारा विवाह तलाव के अधिक किनारे पर था। मायोंग में बाबा जी से मार्गदर्शन लेने के बाद, सब कुछ शांत हो गया। हम अब फिर से खुशी से साथ रह रहे हैं। धन्यवाद।',
        name: 'मनीषा, मुंबई',
        initial: 'म',
      },
    },
  },
];

module.exports = SERVICES;
