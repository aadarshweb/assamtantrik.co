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
      'Using centuries-old rituals passed down through generations, he identifies the exact source of the curse. His specialized Kamakhya pujas cut through all negative bindings and create a permanent protective shield (Kavach) around you and your family.',
      "Don't let jealousy and evil intentions ruin your life. With Deepak Tantrik's proven remedies, you will experience immediate relief and a return to prosperity and good health.",
    ],
    image: '/images/religious.jpg',
    imageAlt:
      'Lamps burning at a Kamakhya Temple shrine in Guwahati during black magic removal puja',
    deep: [
      {
        h2: 'Why Kamakhya Black Magic Removal Is Different',
        p: [
          'The phrase <strong>kamakhya temple black magic</strong> is feared and respected in equal measure across India. Kamakhya Devi, the goddess of desire and power, presides over Guwahati Nilachal Hill. Seekers of both dark arts and divine protection flock here. As someone who has studied <strong>about kamakhya temple</strong> since birth and served among the greatest <strong>kamakhya temple tantriks</strong>, Deepak Tantrik understands that real <strong>kamakhya black magic</strong> does not follow ordinary rules. It is deeply woven into a person\'s aura, requiring precise ritual counter-measures only an experienced <strong>tantrik in kamakhya temple</strong> can perform.',
          'Signs you may need <strong>kamakhya temple black magic</strong> removal include: sudden financial ruin, unexplained nightmares, estrangement from loved ones, chronic illness with no medical cause, animals behaving strangely near your home, and a persistent feeling of being watched or drained. Do not ignore these warning signs.',
        ],
      },
      {
        h2: 'Mayong Black Magic: The Ancient Origins',
        p: [
          'Anyone who has searched for a <strong>mayong assam black magic video</strong> online knows the mystical reputation of this tiny village. The <strong>mayong assam tantrik</strong> tradition predates written history. Ancient palm-leaf manuscripts discovered in Mayong describe precise rituals for casting and removing dark spells. As the best <strong>mayong tantrik</strong> from this lineage, Deepak Tantrik is one of very few who still reads and applies these manuscripts. This gives him an unparalleled edge in diagnosing even the most ancient forms of spiritual attack.',
          'His dual expertise, rooted in <strong>mayong assam tantrik</strong> tradition and empowered by Kamakhya Temple, makes him the supreme <strong>assam tantrik</strong> for black magic removal. When you contact the <strong>mayong tantrik contact number</strong> on this site, you are reaching a practitioner whose knowledge spans both locations.',
        ],
      },
      {
        h2: 'How the Removal Process Works',
        p: [
          'The process begins with a detailed spiritual reading to identify the exact type and source of the negative binding. Deepak Tantrik then performs a specific counter-ritual at either the Kamakhya Temple or his Mayong ashram, depending on the nature of the affliction. A protective <em>kavach</em> (spiritual shield) is then permanently installed. Most clients report feeling the heavy oppression lift within 3 to 7 days. Full cleansing may take up to 21 days depending on severity. Contact the genuine <strong>tantrik in assam</strong> today.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can black magic really be removed at Kamakhya Temple?',
        a: 'Yes. With the help of an authentic kamakhya temple tantrik like Deepak Ji, severe kamakhya black magic and negative energies can be permanently removed and a protective shield (kavach) is cast around you and your family.',
      },
      {
        q: 'How long does black magic removal take?',
        a: 'Most clients report that the heavy feeling lifts within 3 to 7 days. A complete cleansing may take up to 21 days depending on the severity of the binding and how deeply it is woven into a person\'s aura.',
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
            'भारत में <strong>कामाख्या मंदिर काला जादू</strong> शब्द का उल्लेख सम्मान और भय दोनों के साथ किया जाता है। कामाख्या देवी, काम की और शक्ति की देवी, गुवाहाटी के नीलाचल पहाड़ी पर विराजमान हैं। यहाँ दीक्षा लेने वाले असली <strong>कामाख्या मंदिर तांत्रिक</strong> इसी शक्ति का उपयोग केवल उपचार और सुरक्षा के लिए करते हैं।',
            'यदि आपको अचानक आर्थिक मंदी, अनिद्रा, प्रियजनों से दूरी, या बिना कारण बीमारी महसूस हो रही है, तो ये <strong>कामाख्या मंदिर काला जादू</strong> हटाने के संकेत हो सकते हैं। इन संकेतों को अनदेखा न करें।',
          ],
        },
        {
          h2: 'मायोंग काला जादू: प्राचीन उत्पत्ति',
          p: [
            'जो कोई <strong>मायोंग असम काला जादू वीडियो</strong> खोजता है, वह इस छोटे गाँव की रहस्यमय प्रतिष्ठा से परिचित होता है। <strong>मायोंग असम तांत्रिक</strong> परंपरा लिखित इतिहास से भी पहले की है। मायोंग में मिले प्राचीन ताड़पत्र ग्रंथों में अभिशाप हटाने की सटीक विधियाँ वर्णित हैं। इस वंश के सर्वश्रेष्ठ <strong>मायोंग तांत्रिक</strong> के रूप में दीपक तांत्रिक उनमें से बहुत कम हैं जो आज भी ये मूल ग्रंथ पढ़ और लागू कर सकते हैं।',
            'मायोंग की परंपरा और कामाख्या मंदिर की कृपा से प्राप्त ज्ञान के कारण वे काला जादू हटाने के लिए असम के सर्वश्रेष्ठ <strong>असम तांत्रिक</strong> हैं। इस साइट पर दिए <strong>मायोंग तांत्रिक कांटैक्ट नंबर</strong> पर संपर्क करने पर आप दोनों स्थानों के ज्ञान से जुड़े एक सच्चे चिकित्सक तक पहुँचते हैं।',
          ],
        },
        {
          h2: 'काला जादू हटाने की प्रक्रिया',
          p: [
            'प्रक्रिया की शुरुआत एक विस्तृत आध्यात्मिक पठन से होती है, जिसमें नकारात्मक बंधन की सही प्रकृति और स्रोत पहचाना जाता है। फिर दीपक तांत्रिक अफेक्शन के अनुसार कामाख्या मंदिर या अपने मायोंग आश्रम में विशिष्ट प्रतिकारी अनुष्ठान करते हैं। इसके बाद एक स्थायी <em>कवच</em> स्थापित किया जाता है। अधिकांश ग्राहक 3 से 7 दिनों में भारी बोझ कम होने की सूचना देते हैं। पूर्ण शुद्धि में 21 दिन तक लग सकते हैं। आज ही असली <strong>असम तांत्रिक</strong> से संपर्क करें।',
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
      'Love is the most beautiful feeling, but losing the person you love can cause unimaginable pain. Whether it is due to misunderstandings, family objections, or third-party interference, Deepak Tantrik provides the most effective love problem solution in Kamakhya Temple.',
      'Using the sacred, positive energies of Kamakhya, his proven mantras and spiritual pujas align the cosmic stars in your favor. This process clears negativity between partners, creates strong attraction, and convinces strict parents for love marriage, all without any harmful side effects.',
      'Do not let your relationship end in sorrow. Thousands of couples have reunited through his guidance. Contact him today for a personalized astrological reading and start your journey back to happiness.',
    ],
    image: '/images/mandala.png',
    imageAlt: 'Mandala ritual design used for love problem puja at Kamakhya Temple, Guwahati',
    deep: [
      {
        h2: 'Why Kamakhya Temple Is the Most Powerful for Love Solutions',
        p: [
          'Anyone who has studied <strong>about kamakhya temple</strong> knows that this sacred site is the abode of the Goddess of Desire. Performing love-related rituals here, under the guidance of one of the authentic <strong>kamakhya temple tantriks</strong>, amplifies their power a thousandfold. Deepak Tantrik, the most revered <strong>tantrik in kamakhya temple</strong> for love problems, harnesses the raw divine energy of this location to dissolve the obstacles between you and your beloved.',
          'Additionally, his roots as a <strong>mayong assam tantrik</strong> give him access to ancient love-binding rituals not found anywhere else. The combination of Kamakhya energy and Mayong knowledge makes him the <strong>best kamakhya tantrik</strong> for love problem solutions by a wide margin. He is also the easiest to reach. Simply use the <strong>mayong tantrik contact number</strong>: <strong>+91 9706801250</strong>.',
        ],
      },
      {
        h2: 'Common Love Problems Solved',
        p: [
          'An ex-lover refusing to return, an inter-caste or inter-religion family objection, a husband or wife attracted to someone else, one-sided love, a broken engagement, or love lost after years together. No matter how hopeless the situation seems, as the leading <strong>tantrik in guwahati</strong> and an authentic <strong>assam tantrik</strong>, Deepak Tantrik has a solution. Call the <strong>mayong tantrik contact</strong> right now and begin your journey back to love.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a lost love really be brought back?',
        a: 'In many cases, yes. As the best kamakhya tantrik for love problems, Deepak Tantrik clears the negativity between partners and restores attraction through Kamakhya puja. Results depend on the individual situation, which he assesses during the first consultation.',
      },
      {
        q: 'Do you help with love marriage family objections?',
        a: 'Yes. Convincing strict parents for love marriage through Vedic astrology and mantra therapy is one of his core services at Kamakhya Temple. He addresses both the family side and the emotional side of the objection.',
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
            'जो कोई <strong>कामाख्या मंदिर के बारे में</strong> जानना चाहता है, वह जानता है कि यह पवित्र स्थल काम की देवी की निवासस्थानी है। यहाँ, प्रामाणिक <strong>कामाख्या मंदिर तांत्रिक</strong> के मार्गदर्शन में प्रेम संबंधी अनुष्ठान करने से उनकी शक्ति हजार गुना बढ़ जाती है। प्रेम समस्याओं के लिए सर्वाधिक पूजनीय <strong>कामाख्या मंदिर में तांत्रिक</strong> दीपक तांत्रिक इस स्थान की दिव्य ऊर्जा का उपयोग आपके और आपके प्रिय के बीच की बाधाओं को दूर करने के लिए करते हैं।',
            'इसके अतिरिक्त, <strong>मायोंग असम तांत्रिक</strong> के रूप में उनकी जड़ें उन प्राचीन प्रेम-बंधन विधियों तक पहुँच देती हैं जो कहीं और नहीं मिलतीं। कामाख्या की ऊर्जा और मायोंग का ज्ञान मिलकर उन्हें प्रेम समस्याओं के लिए <strong>कामाख्या के सबसे बड़े तांत्रिक</strong> बनाता है। संपर्क के लिए <strong>मायोंग तांत्रिक कांटैक्ट नंबर</strong> का उपयोग करें: <strong>+91 9706801250</strong>।',
          ],
        },
        {
          h2: 'सामान्य प्रेम समस्याएं जिनका समाधान किया जाता है',
          p: [
            'पुराना प्रेमी लौटने से मना करना, जाति या धर्म के कारण परिवार का विरोध, पति या पत्नी का किसी और की ओर आकर्षित होना, एकतरफा प्रेम, टूटी हुई सगाई, या वर्षों की रिश्ते के बाद प्रेम का खो जाना। हालातक कितने भी निराश लगें, गुवाहाटी के प्रमुख <strong>तांत्रिक बाबा</strong> और असली <strong>असम तांत्रिक</strong> दीपक तांत्रिक के पास समाधान है। अभी <strong>मायोंग तांत्रिक कांटैक्ट</strong> पर कॉल करें और प्रेम की यात्रा फिर से शुरू करें।',
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
      'Mayong is globally famous as the capital of ancient magic and tantra. For centuries, the deep secrets of vashikaran (mind control through positive energies) have been practiced here. Deepak Tantrik is a highly respected Vashikaran Specialist in Mayong, utilizing these ancient methods strictly for the welfare of people.',
      'Vashikaran is often misunderstood. In the right hands, it is a powerful tool to save breaking marriages, stop a partner from straying, or convince strict parents for love marriage. The rituals performed by Deepak Tantrik invoke pure energies that align the mind of your desired person favorably towards you, without causing any harm.',
      'If you feel you are losing control over your relationships or life situations, consult the most trusted expert in Mayong. The results are swift, natural, and permanent. Reclaim the happiness you deserve.',
    ],
    image: '/images/religious.jpg',
    imageAlt: 'Red vermilion and lamps at a Mayong tantra ritual for positive vashikaran',
    deep: [
      {
        h2: 'Vashikaran in Mayong: The Original Science',
        p: [
          'In the spiritual vocabulary of <strong>tantrik in assam</strong>, vashikaran is not a dark art. It is a precise science of cosmic alignment. The Mayong texts describe vashikaran as channeling the natural magnetic frequency of an individual toward the person seeking the remedy. As the <strong>best mayong tantrik</strong> for vashikaran, Deepak Tantrik has spent decades studying these frequencies. His techniques, refined at the Kamakhya Temple and in the fields of Mayong, are entirely safe and leave no karmic debt on the practitioner or client.',
          'The <strong>mayong tantrik contact</strong> for vashikaran services is the same as the general contact number: <strong>+91 9706801250</strong>. When you reach out, Deepak Tantrik will assess your situation via a detailed consultation before recommending the appropriate vashikaran ritual. He serves as both a <strong>mayong assam tantrik</strong> and a <strong>kamakhya temple tantrik</strong>, giving you access to the most powerful vashikaran remedies from two sacred locations simultaneously.',
        ],
      },
      {
        h2: 'Who Can Benefit from Kamakhya Vashikaran?',
        p: [
          'Anyone facing a partner who has grown cold and distant, family members refusing a love marriage, business rivals blocking your success, or children falling into bad company. As the most sought-after <strong>assam tantrik</strong> for vashikaran, Deepak Tantrik has resolved cases that other practitioners declared impossible. His dual authority as a <strong>tantrik in guwahati</strong> and a <strong>mayong tantrik</strong> makes him uniquely powerful. Do not hesitate. Call the <strong>mayong tantrik contact number</strong> today.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is positive vashikaran safe?',
        a: 'Yes. The vashikaran Deepak Tantrik performs is positive vashikaran only. It is used to save marriages, resolve family disputes and correct a partner\'s behaviour. He never uses it to harm anyone or to override a person\'s free will.',
      },
      {
        q: 'Where is vashikaran performed?',
        a: 'At either the Kamakhya Temple in Guwahati or his Mayong ashram in Morigaon, depending on the case. He holds both the Mayong tantra lineage and formal initiation at Kamakhya, so he can select whichever location suits the problem.',
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
            '<strong>असम तांत्रिक</strong> की आध्यात्मिक शब्दावली में वशीकरण कोई अंधकारी कला नहीं है, बल्कि ब्रह्मांडीय संरेखण का एक सटीक विज्ञान है। मायोंग के ग्रंथ वशीकरण को व्यक्ति के प्राकृतिक चुंबकीय आवृत्ति को उपचार चाहने वाले व्यक्ति की ओर मोड़ने के रूप में वर्णित करते हैं। वशीकरण के लिए <strong>मायोंग के सबसे बड़े तांत्रिक</strong> के रूप में दीपक तांत्रिक दशकों से इन आवृत्तियों का अध्ययन कर चुके हैं। उनकी तकनीकें कामाख्या मंदिर और मायोंग दोनों में परिष्कृत हैं, पूर्णतः सुरक्षित हैं, और न चिकित्सक पर न ग्राहक पर कोई कर्मिक भार छोड़ती हैं।',
            'वशीकरण सेवाओं के लिए <strong>मायोंग तांत्रिक कांटैक्ट</strong> सामान्य संपर्क नंबर के समान है: <strong>+91 9706801250</strong>। संपर्क करने पर दीपक तांत्रिक विस्तृत परामर्श के माध्यम से आपकी स्थिति का आकलन करेंगे और उपयुक्त वशीकरण अनुष्ठान की सलाह देंगे। वे <strong>मायोंग असम तांत्रिक</strong> और <strong>कामाख्या मंदिर तांत्रिक</strong> दोनों हैं, जिससे आपको दो पवित्र स्थानों से सबसे शक्तिशाली वशीकरण उपाय एक साथ मिलते हैं।',
          ],
        },
        {
          h2: 'कामाख्या वशीकरण से किसे लाभ हो सकता है?',
          p: [
            'जिसका साथी ठंडा और दूर हो चुका हो, जिसके परिवार प्रेम विवाह का विरोध कर रहा हो, जिसके व्यापारिक प्रतिद्वंद्वी आपकी सफलता रोक रहे हों, या जिसके बच्चे बुरी संगत में पड़ गए हों। वशीकरण के लिए सबसे मांगे जाने वाले <strong>असम तांत्रिक</strong> के रूप में दीपक तांत्रिक ने वे मामले सुलझाए हैं जिन्हें अन्य चिकित्सक असंभव बता चुके थे। <strong>गुवाहाटी में तांत्रिक</strong> और <strong>मायोंग तांत्रिक</strong> दोनों रूपों में उनकी द्विगुणी सत्ता उन्हें अद्वितीय रूप से शक्तिशाली बनाती है। संकोच न करें, आज ही <strong>मायोंग तांत्रिक कांटैक्ट नंबर</strong> पर कॉल करें।',
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
      'A peaceful marriage is essential for a happy life, but constant disputes, lack of communication, or the involvement of another person can push a marriage towards divorce. As a renowned specialist for husband wife dispute solutions in Mayong, Deepak Tantrik has saved thousands of families from breaking apart.',
      'Using profound astrological charts and the mystical remedies born in Mayong, Assam, he identifies the root cause of the friction. Often, negative planetary placements or external evil eyes cause these sudden changes in a partner\'s behavior.',
      'With targeted mantras and specific spiritual rituals, Deepak Tantrik can remove all bitterness between you and your spouse. His remedies foster deep understanding, restore love, and ensure a harmonious, long-lasting marital bond. Contact him today to bring the peace back into your home.',
    ],
    image: '/images/portrait.jpg',
    imageAlt: 'Deepak Tantrik, husband wife dispute specialist in Mayong and Kamakhya, Assam',
    deep: [
      {
        h2: 'Why Marriages Break: A Spiritual Perspective',
        p: [
          'Many husband wife disputes are not merely psychological. They have a deep spiritual root. <strong>Kamakhya black magic</strong> cast by jealous relatives or enemies can artificially create distance, suspicion, and hatred between loving partners. As the <strong>best tantrik in kamakhya</strong> for marriage problems, Deepak Tantrik routinely identifies such external dark influences during his readings. Similarly, as the leading <strong>mayong assam tantrik</strong>, he recognizes the unique energetic signatures of Mayong-style black magic that are often invisible to ordinary practitioners.',
          'Once the root cause is identified, whether it is <strong>kamakhya temple black magic</strong>, planetary misalignment, or genuine personality conflicts, Deepak Tantrik applies the precise remedy. His approach is holistic, combining Vedic astrology, mantra therapy, and Tantrik rituals from both his Kamakhya and Mayong traditions. The <strong>mayong tantrik contact number</strong> for marriage consultation is: <strong>+91 9706801250</strong>.',
        ],
      },
      {
        h2: 'Results You Can Expect',
        p: [
          'Clients who consult this <strong>assam tantrik</strong> for marriage problems report: cessation of daily arguments within 7 days, return of warmth, affection and physical closeness, elimination of third-party interference, and a lasting, deeply bonded relationship. As the top-ranked <strong>tantrik in guwahati</strong> for husband wife dispute, Deepak Tantrik stands behind his remedies. If you are at the edge of divorce, make one call to the most trusted <strong>tantrik in assam</strong> before you give up.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can a marriage dispute really be resolved?',
        a: 'In most cases, yes. As the best mayong tantrik for husband wife dispute work, Deepak Tantrik first identifies the root cause through astrological reading, then applies targeted mantras and rituals. Many clients report that daily arguments stop within about 7 days.',
      },
      {
        q: 'Is third-party interference removed?',
        a: 'Yes. Interference from a third person is one of the most common causes he identifies in a marriage dispute, and it can be addressed with specific remedies. The presence of black magic cast against a couple is also routinely detected and removed.',
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
            'कई पति-पत्नी झगड़े केवल मनोवैज्ञानिक नहीं होते, उनका गहरा आध्यात्मिक मूल होता है। ईर्ष्यालु रिश्तेदारों या दुश्मनों द्वारा किया गया <strong>कामाख्या काला जादू</strong> प्रेम करने वाले साथियों के बीच नकली दूरी, संदेह और नफरत पैदा कर सकता है। विवाह समस्याओं के लिए <strong>कामाख्या में सबसे बड़े तांत्रिक</strong> के रूप में, दीपक तांत्रिक अपने पाठ में ऐसी बाहरी अंधकारी शक्तियों की नियमित रूप से पहचान करते हैं। इसी प्रकार, प्रमुख <strong>मायोंग असम तांत्रिक</strong> के रूप में वे मायोंग शैली के काले जादू की विशिष्ट ऊर्जा-हस्ताक्षर पहचानते हैं जो सामान्य चिकित्सकों को दिखाई नहीं देते।',
            'मूल कारण की पहचान के बाद, चाहे वह <strong>कामाख्या मंदिर का काला जादू</strong> हो, ग्रह-दोष हो, या वास्तविक व्यक्तित्व संघर्ष हो, दीपक तांत्रिक सटीक उपाय अपनाते हैं। उनका दृष्टिकोण समग्र है, जिसमें वैदिक ज्योतिष, मंत्र चिकित्सा और कामाख्या तथा मायोंग दोनों परंपराओं के तांत्रिक अनुष्ठान सम्मिलित हैं। विवाह परामर्श के लिए <strong>मायोंग तांत्रिक कांटैक्ट नंबर</strong> है: <strong>+91 9706801250</strong>।',
          ],
        },
        {
          h2: 'आप किन परिणामों की अपेक्षा कर सकते हैं',
          p: [
            'जो ग्राहक विवाह समस्याओं के लिए इस <strong>असम तांत्रिक</strong> से परामर्श लेते हैं, वे बताते हैं: 7 दिनों में रोजमर्रा के झगड़े बंद हो जाते हैं; स्नेह, अपनापन और निकटता लौट आती है; तीसरे व्यक्ति का हस्तक्षेप समाप्त हो जाता है; और एक स्थायी, गहराई से जुड़ा हुआ रिश्ता बनता है। पति-पत्नी झगड़े के लिए गुवाहाटी में शीर्ष <strong>तांत्रिक</strong> के रूप में दीपक तांत्रिक अपने उपायों के पीछे हैं। यदि आप तलाव के अधिक किनारे पर हैं, तो हार मानने से पहले असम के सबसे भरोसेमंद <strong>तांत्रिक</strong> को एक बार कॉल करें।',
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
