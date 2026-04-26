export type Lang = "ar" | "fr" | "en";

export const LANGS: { code: Lang; label: string; dir: "rtl" | "ltr" }[] = [
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
];

type Dict = {
  meta: { title: string; description: string };
  common: {
    wilaya: string;
    wilayaCode: string;
    algeria: string;
    explore: string;
    learnMore: string;
    contactUs: string;
    sendMessage: string;
    backHome: string;
    closeMenu: string;
    openChat: string;
    closeChat: string;
    sendChat: string;
    chatPlaceholder: string;
    chatGreeting: string;
    chatTitle: string;
    chatSubtitle: string;
    chatMissingKey: string;
    chatError: string;
    thinking: string;
    aboutWilaya: string;
    askMeAnything: string;
    poweredBy: string;
  };
  nav: {
    home: string;
    about: string;
    history: string;
    culture: string;
    economy: string;
    tourism: string;
    gallery: string;
    contact: string;
  };
  theme: { light: string; dark: string };
  home: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    ctaExplore: string;
    ctaTourism: string;
    statsArea: string;
    statsPopulation: string;
    statsCommunes: string;
    statsAltitude: string;
    quickEyebrow: string;
    quickTitle: string;
    quickSubtitle: string;
    quick: { about: string; history: string; culture: string; economy: string; tourism: string; gallery: string }[];
    sitesEyebrow: string;
    sitesTitle: string;
    sitesSubtitle: string;
    allSites: string;
    cultureEyebrow: string;
    cultureTitle: string;
    cultureSubtitle: string;
    moreCulture: string;
    ctaTitle1: string;
    ctaTitle2: string;
    ctaSubtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    introEyebrow: string;
    introTitle: string;
    introP1: string;
    introP2: string;
    introP3: string;
    factsEyebrow: string;
    factsTitle: string;
    factsSubtitle: string;
    factArea: string;
    factPopulation: string;
    factDensity: string;
    factCapital: string;
    factDivision: string;
    factAltitude: string;
    factClimate: string;
    factLanguage: string;
    factCode: string;
    geoEyebrow: string;
    geoTitle: string;
    geo: { title: string; text: string }[];
    adminEyebrow: string;
    adminTitle: string;
    adminSubtitle: string;
    daira: string;
    wilayaCodeLabel: string;
  };
  history: {
    title: string;
    subtitle: string;
    introEyebrow: string;
    introTitle: string;
    introP: string;
    timelineEyebrow: string;
    timelineTitle: string;
    events: { era: string; title: string; description: string }[];
    highlightEyebrow: string;
    highlightTitle: string;
    highlightP1: string;
    highlightP2: string;
  };
  culture: {
    title: string;
    subtitle: string;
    introTitle: string;
    introP: string;
    pillarsEyebrow: string;
    pillarsTitle: string;
    items: { title: string; description: string }[];
    hospitalityEyebrow: string;
    hospitalityTitle: string;
    hospitalityP1: string;
    hospitalityP2: string;
  };
  economy: {
    title: string;
    subtitle: string;
    introTitle: string;
    introP: string;
    sectorsEyebrow: string;
    sectorsTitle: string;
    sectors: { title: string; description: string; share: string }[];
    livestockEyebrow: string;
    livestockTitle: string;
    livestockP1: string;
    livestockP2: string;
    solarEyebrow: string;
    solarTitle: string;
    solarP1: string;
    solarP2: string;
  };
  tourism: {
    title: string;
    subtitle: string;
    sitesEyebrow: string;
    sitesTitle: string;
    sitesSubtitle: string;
    sites: { name: string; type: string; short: string; description: string; location: string }[];
    packagesEyebrow: string;
    packagesTitle: string;
    packagesSubtitle: string;
    packages: { title: string; duration: string; price: string; highlights: string[] }[];
    tipsEyebrow: string;
    tipsTitle: string;
    tips: { title: string; text: string }[];
  };
  gallery: {
    title: string;
    subtitle: string;
    photos: string[];
    closeAria: string;
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    infoLead: string;
    address: string;
    addressValue: string;
    phone: string;
    email: string;
    follow: string;
    mapTitle: string;
  };
  notFound: { title: string; message: string };
  footer: { tagline: string; quickLinks: string; contact: string; rights: string };
};

const ar: Dict = {
  meta: {
    title: "ولاية البيض — بوابة المعلومات الشاملة",
    description: "موقع شامل عن ولاية البيض في الجزائر — الجغرافيا، التاريخ، الثقافة، الاقتصاد، السياحة.",
  },
  common: {
    wilaya: "ولاية البيض",
    wilayaCode: "ولاية رقم 32",
    algeria: "الجزائر",
    explore: "استكشف",
    learnMore: "اقرأ المزيد",
    contactUs: "تواصل معنا",
    sendMessage: "أرسل رسالة",
    backHome: "العودة للرئيسية",
    closeMenu: "إغلاق",
    openChat: "افتح المحادثة",
    closeChat: "إغلاق",
    sendChat: "إرسال",
    chatPlaceholder: "اسألني أي شيء عن ولاية البيض…",
    chatGreeting: "مرحباً! أنا مساعدك الذكي. اسألني أي سؤال عن ولاية البيض أو أي موضوع آخر.",
    chatTitle: "مساعد البيض الذكي",
    chatSubtitle: "مدعوم بـ Gemini AI",
    chatMissingKey: "لتفعيل الشات أضف مفتاح Gemini API في ملف .env باسم VITE_GEMINI_API_KEY (مجاني من https://aistudio.google.com/app/apikey).",
    chatError: "تعذّر الاتصال بالخدمة. حاول مجدداً.",
    thinking: "يفكّر…",
    aboutWilaya: "حول الولاية",
    askMeAnything: "اسألني أي شيء",
    poweredBy: "بواسطة",
  },
  nav: {
    home: "الرئيسية",
    about: "عن الولاية",
    history: "التاريخ",
    culture: "الثقافة",
    economy: "الاقتصاد",
    tourism: "السياحة",
    gallery: "معرض الصور",
    contact: "تواصل",
  },
  theme: { light: "الوضع الفاتح", dark: "الوضع الداكن" },
  home: {
    badge: "الجمهورية الجزائرية الديمقراطية الشعبية — ولاية رقم 32",
    title1: "ولاية",
    title2: "البيض",
    title3: "قلب الأطلس الصحراوي",
    subtitle: "بوابتك الشاملة لاكتشاف ولاية البيض: تاريخ يمتد آلاف السنين، ثقافة بدوية أصيلة، اقتصاد متنوع، ومعالم سياحية تجمع بين الصحراء والجبال والواحات.",
    ctaExplore: "اكتشف الولاية",
    ctaTourism: "المعالم السياحية",
    statsArea: "المساحة",
    statsPopulation: "السكان",
    statsCommunes: "عدد البلديات",
    statsAltitude: "الارتفاع المتوسط",
    quickEyebrow: "استكشف الولاية",
    quickTitle: "بوابتك إلى البيض",
    quickSubtitle: "ست محاور رئيسية تأخذك في رحلة شاملة عبر مختلف جوانب الولاية.",
    quick: [
      { about: "الموقع الجغرافي، التضاريس، المناخ، والتقسيم الإداري.", history: "", culture: "", economy: "", tourism: "", gallery: "" },
    ],
    sitesEyebrow: "معالم بارزة",
    sitesTitle: "مواقع تستحق الاكتشاف",
    sitesSubtitle: "من النقوش الصخرية إلى الكثبان الرملية، تنوع طبيعي وثقافي فريد.",
    allSites: "كل المعالم",
    cultureEyebrow: "ثقافة وتراث",
    cultureTitle: "روح البيض الأصيلة",
    cultureSubtitle: "موروث غني تتشابك فيه الجذور الأمازيغية والعربية البدوية.",
    moreCulture: "المزيد عن الثقافة",
    ctaTitle1: "هل أنت مستعد لاكتشاف",
    ctaTitle2: "البيض؟",
    ctaSubtitle: "تصفّح بقية الأقسام لتعرف أكثر عن هذه الولاية الفريدة في قلب الأطلس الصحراوي.",
  },
  about: {
    title: "عن ولاية البيض",
    subtitle: "نظرة شاملة على الموقع الجغرافي، التضاريس، المناخ، والتقسيم الإداري لولاية البيض.",
    introEyebrow: "نظرة عامة",
    introTitle: "ولاية في قلب الأطلس الصحراوي",
    introP1: "تقع ولاية البيض في الجنوب الغربي للجزائر، وتمتدّ على مساحة شاسعة من السهول العليا إلى الكثبان الرملية. عاصمتها مدينة البيض التي تجمع بين العمق التاريخي والحداثة العمرانية.",
    introP2: "تتميّز الولاية بتنوّع تضاريسها: جبال الأطلس الصحراوي شمالاً، هضاب وسهوب رعوية في الوسط، وكثبان رملية وواحات في الجنوب. هذا التنوع جعل منها بيئة فريدة جامعة للمناظر الجبلية والصحراوية في آن واحد.",
    introP3: "يحدّها من الشمال ولاية سعيدة، ومن الشرق الأغواط، ومن الغرب نعامة وتلمسان، ومن الجنوب أدرار وبشار. هذا الموقع جعلها معبراً تاريخياً للقوافل بين الشمال والصحراء.",
    factsEyebrow: "بطاقة تعريف",
    factsTitle: "معلومات أساسية",
    factsSubtitle: "أبرز الأرقام والحقائق التي تميّز ولاية البيض.",
    factArea: "المساحة",
    factPopulation: "عدد السكان",
    factDensity: "الكثافة السكانية",
    factCapital: "العاصمة",
    factDivision: "التقسيم",
    factAltitude: "الارتفاع",
    factClimate: "المناخ",
    factLanguage: "اللغات المتداولة",
    factCode: "رمز الولاية",
    geoEyebrow: "جغرافيا وتضاريس",
    geoTitle: "تنوع جغرافي فريد",
    geo: [
      { title: "الجبال", text: "جبال الأطلس الصحراوي شمالاً، أبرزها جبل قصل (2008م) وجبل عيسى. غابات أرز وصنوبر وثلوج شتوية." },
      { title: "السهوب والهضاب", text: "سهوب رعوية شاسعة بنبتة الحلفاء، تشكل عماد تربية المواشي. مساحات مفتوحة بألوان ذهبية متغيرة فصلياً." },
      { title: "الصحراء والواحات", text: "جنوب الولاية تمتد الكثبان الرملية والصحراء، وتنتشر الواحات كنقاط حياة بالنخيل والعيون الطبيعية." },
    ],
    adminEyebrow: "التقسيم الإداري",
    adminTitle: "الدوائر والبلديات",
    adminSubtitle: "تتكون ولاية البيض من 8 دوائر تضمّ 22 بلدية.",
    daira: "دائرة",
    wilayaCodeLabel: "رمز الولاية",
  },
  history: {
    title: "تاريخ ولاية البيض",
    subtitle: "من النقوش الصخرية لما قبل التاريخ، إلى ثورات التحرير وميلاد الولاية الحديثة.",
    introEyebrow: "عبر العصور",
    introTitle: "أرض شهدت آلاف السنين من الحضارة",
    introP: "تختزن أرض البيض ذاكرة طويلة من الحضارات: من إنسان ما قبل التاريخ الذي ترك نقوشه على صخور بوسمغون، إلى القبائل الأمازيغية والقصور الإسلامية، وصولاً إلى ملاحم المقاومة ضد الاستعمار الفرنسي ومساهمتها في ثورة التحرير المظفرة.",
    timelineEyebrow: "الخط الزمني",
    timelineTitle: "محطات تاريخية",
    events: [
      { era: "ما قبل التاريخ", title: "النقوش الصخرية", description: "تشهد منطقة بوسمغون ومحيطها على وجود إنسان ما قبل التاريخ منذ آلاف السنين، عبر آلاف النقوش الصخرية التي تصوّر الحيوانات (الفيلة، الزرافات، الجاموس) وحياة الصيد، ما يدل على أن الصحراء كانت يوماً منطقة خصبة." },
      { era: "العصر الأمازيغي القديم", title: "قبائل زناتة وبني هلال", description: "سكنت المنطقة قبائل أمازيغية رحّل، ثم استقرت موجات من الهلاليين خلال القرن الحادي عشر. تشكلت هوية المنطقة من تمازج الثقافتين الأمازيغية والعربية البدوية." },
      { era: "العهد الإسلامي", title: "ظهور القصور والزوايا", description: "بُنيت القصور الطينية مثل قصر الستيتن وقصر بوسمغون كحصون للحياة المستقرة، وانتشرت الزوايا الدينية لتعليم القرآن والفقه، خاصة الزاوية الشيخية في الأبيض سيدي الشيخ التي أسسها الشيخ سيدي الشيخ في القرن السادس عشر." },
      { era: "1864 — 1881", title: "ثورة أولاد سيدي الشيخ", description: "اندلعت من البيض ثورة أولاد سيدي الشيخ ضد الاستعمار الفرنسي بقيادة سي سليمان بن حمزة، وامتدت إلى الجنوب الغربي للجزائر والمغرب. تُعدّ من أطول الثورات الشعبية ضد الاستعمار في الجزائر." },
      { era: "1954 — 1962", title: "ثورة التحرير", description: "شاركت ولاية البيض بفعالية في الثورة التحريرية ضمن الولاية التاريخية الخامسة، واحتضنت قواعد لجبهة التحرير الوطني وعمليات تسليح ومدد للمجاهدين عبر الحدود المغربية." },
      { era: "1984", title: "ميلاد الولاية الإدارية", description: "في إطار التقسيم الإداري الجديد للجزائر، أصبحت البيض ولاية مستقلة برمز 32، بعد أن كانت تابعة لولاية سعيدة. منذ ذلك الحين شهدت تنمية متواصلة في البنى التحتية والتعليم والصحة." },
    ],
    highlightEyebrow: "إرث المقاومة",
    highlightTitle: "ثورة أولاد سيدي الشيخ",
    highlightP1: "تُعدّ ثورة أولاد سيدي الشيخ (1864 - 1881) من أطول الثورات الشعبية الجزائرية ضد الاستعمار الفرنسي. انطلقت من البيض بقيادة سي سليمان بن حمزة وامتدت إلى الجنوب الغربي للجزائر وشمال المغرب.",
    highlightP2: "كان أبناء البيض في طليعة المقاومين، مسخّرين معرفتهم بدروب الصحراء لشنّ هجمات سريعة ثم الاختفاء. أصبحت الولاية أيضاً جزءاً من الولاية التاريخية الخامسة خلال ثورة التحرير (1954-1962).",
  },
  culture: {
    title: "الثقافة والتراث",
    subtitle: "موروث غني تتمازج فيه الجذور الأمازيغية والعربية البدوية، يُترجَم في الموسيقى والصناعات اليدوية والمطبخ والأعراس.",
    introTitle: "ثقافة عريقة وضيافة لا تُنسى",
    introP: "ولاية البيض ملتقى ثقافي حيث تُحافظ القبائل الأمازيغية والعربية على عاداتها العريقة. كل تفصيل — من البرنوس إلى الزربية، ومن الفنطازية إلى الكسكس — يحكي قصة شعب صنع ثقافته من رمال الصحراء وقمم الأطلس.",
    pillarsEyebrow: "ركائز الثقافة",
    pillarsTitle: "ستة جوانب أساسية",
    items: [
      { title: "موسيقى البدوي", description: "فن الغناء البدوي (الشعر الملحون) متجذّر في البيض، ويُؤدى بمرافقة آلة القلال والبندير، ويتغنى بالحب والترحال وقيم الفروسية." },
      { title: "الزرابي والنسيج", description: "تشتهر زرابي البيض بنقوشها الهندسية الأمازيغية وألوانها الترابية. يُعد نسيج الزربية حرفة نسائية تتوارثها الأجيال، وتُصدَّر إلى مدن الجزائر الكبرى." },
      { title: "المطبخ المحلي", description: "أطباق أصيلة كالكسكس بالخضار، المردود، الرفيس، والمحجوبة. يبرز خبز التنّور (الكسرة) وشاي النعناع كرموز للضيافة الجزائرية الأصيلة." },
      { title: "اللباس التقليدي", description: "البرنوس الأبيض والقشّابة للرجال، والملحفة والحايك للنساء. ألوانها فاتحة لتعكس حرارة الصحراء، وتُطرّز يدوياً بنقوش رمزية." },
      { title: "الأعراس والمواسم", description: "مواسم زيارة الأبيض سيدي الشيخ من أهم التظاهرات الدينية والثقافية، وتجمع آلاف الزوار سنوياً. الأعراس البدوية تستمر أياماً مع الفروسية والبارود والمديح." },
      { title: "الفروسية والبارود", description: "فن «العلفة» أو الفنطازية: عرض جماعي للفرسان بأزيائهم التقليدية، يُطلقون البارود في تناغم تام. رمز للشجاعة والوحدة القبلية." },
    ],
    hospitalityEyebrow: "ضيافة بدوية",
    hospitalityTitle: "الضيف عزيز عند أهل البيض",
    hospitalityP1: "تُعدّ الضيافة قيمة محورية في ثقافة البيض. يُستقبل الضيف بكأس شاي أحمر مع قطعة من الكسرة، وتُذبح الذبيحة كرامةً للوافد البعيد.",
    hospitalityP2: "المجالس البدوية تستمر طويلاً في تبادل الشعر والقصص، وتجد فيها الجلد المفروش على الرمل تحت سماء النجوم تجربة لا تتكرر إلا في هذه الديار.",
  },
  economy: {
    title: "اقتصاد ولاية البيض",
    subtitle: "اقتصاد متنوع يجمع بين الزراعة الرعوية، الصناعات التقليدية، السياحة، والاستثمار في الطاقات المتجددة.",
    introTitle: "قاعدة اقتصادية متنوعة وواعدة",
    introP: "يستند اقتصاد ولاية البيض إلى ثروة طبيعية متنوعة: مراعٍ شاسعة لتربية المواشي، ثروة معدنية وغابية، إضافة إلى موروث غني من الصناعات التقليدية. كما تتجه الولاية بثقة نحو الطاقات المتجددة والسياحة البيئية كقطاعات مستقبلية.",
    sectorsEyebrow: "القطاعات",
    sectorsTitle: "ستة قطاعات رئيسية",
    sectors: [
      { title: "الزراعة وتربية المواشي", description: "تمثل تربية الأغنام والماعز عماد الاقتصاد التقليدي، إذ تضم الولاية أكثر من 2 مليون رأس من الأغنام. كما تُزرع الحبوب والأشجار المثمرة في الواحات والسهول العليا.", share: "≈ 35%" },
      { title: "الصناعة الخفيفة", description: "صناعات تحويلية للحليب، اللحوم، النسيج، ومواد البناء. مناطق صناعية في البيض ورقاصة تستقطب الاستثمار المحلي.", share: "≈ 18%" },
      { title: "الصناعات التقليدية", description: "نسج الزرابي، الجلود، النحاسيات، والحلي الفضية. حرف عائلية تُساهم في تشغيل المرأة الريفية ودعم الصادرات الثقافية.", share: "≈ 8%" },
      { title: "السياحة والخدمات", description: "السياحة الصحراوية والثقافية في تطور مستمر، خاصة حول المعالم الأثرية والكثبان الرملية. قطاع الخدمات والتجارة في توسع داخل المدن.", share: "≈ 22%" },
      { title: "الطاقة والمناجم", description: "وجود رواسب من الجبس والملح والرخام، إضافة إلى مشاريع للطاقة المتجددة (الطاقة الشمسية) نظراً لارتفاع نسبة الإشعاع الشمسي.", share: "≈ 12%" },
      { title: "الغابات والحلفاء", description: "تمتد غابات الأرز والصنوبر على آلاف الهكتارات في جبال قصل. نبتة الحلفاء (الإسبارطو) مصدر دخل مهم لصناعة الورق والحبال.", share: "≈ 5%" },
    ],
    livestockEyebrow: "العمود الفقري",
    livestockTitle: "تربية المواشي: الإرث والاقتصاد",
    livestockP1: "تتربع ولاية البيض على عرش تربية الأغنام في الجزائر بأكثر من 2 مليون رأس، تستفيد من السهوب الرعوية الشاسعة ونبتة الحلفاء. الإنتاج المحلي يُغطي جزءاً من حاجيات السوق الوطنية من اللحوم الحمراء.",
    livestockP2: "إلى جانب ذلك، تُمارَس الزراعة في الواحات والمناطق المسقية، خاصة إنتاج الحبوب والتمور وبعض الفواكه المتأقلمة مع المناخ الجاف.",
    solarEyebrow: "المستقبل الأخضر",
    solarTitle: "الطاقات المتجددة",
    solarP1: "بفضل ارتفاع نسبة الإشعاع الشمسي وتوفّر مساحات مفتوحة شاسعة، تُعدّ ولاية البيض من المناطق الواعدة في الجزائر لاستضافة محطات الطاقة الشمسية الكبرى ضمن المخطط الوطني للطاقات المتجددة.",
    solarP2: "هذه التحولات تَعِد بفرص عمل جديدة وتنويع للاقتصاد المحلي، وتنسجم مع رؤية الجزائر للانتقال الطاقوي بحلول 2030.",
  },
  tourism: {
    title: "السياحة والمعالم",
    subtitle: "نقوش صخرية، قصور أثرية، جبال خضراء، واحات ساحرة، وكثبان ذهبية تنتظر الاكتشاف.",
    sitesEyebrow: "معالم وأماكن",
    sitesTitle: "أبرز الوجهات السياحية",
    sitesSubtitle: "مواقع متنوعة بين الأثري والطبيعي والتراثي والديني.",
    sites: [
      { name: "نقوش بوسمغون الصخرية", type: "أثري", short: "رسوم ما قبل التاريخ على صخور الحجر الرملي.", location: "بلدية بوسمغون — 100 كم جنوب البيض", description: "تُعدّ من أهم المواقع الأثرية ما قبل التاريخ في شمال إفريقيا، تضم آلاف النقوش التي تصوّر حيوانات السافانا القديمة كالفيلة والزرافات والنعام، وتعكس مرحلة كانت فيها الصحراء خضراء غنية بالحياة." },
      { name: "قصر الستيتن العتيق", type: "تراثي", short: "قصر طيني بفن معماري صحراوي أصيل.", location: "دائرة الستيتن — 60 كم شرق البيض", description: "قصر تاريخي بُني من الطين والحجر منذ قرون، يعكس عبقرية العمارة الصحراوية: أسوار سميكة، ممرات ضيقة، وحجرات متلاصقة تحفظ البرودة. لا يزال مأهولاً جزئياً ويُعدّ متحفاً مفتوحاً." },
      { name: "جبل قصل", type: "طبيعي", short: "قمم شامخة وغابات أرز خضراء.", location: "شمال شرق ولاية البيض", description: "ثاني أعلى قمة في الأطلس الصحراوي بارتفاع 2008 م، يضم غابات الأرز الأطلسي والصنوبر الحلبي. وجهة مفضلة للمشي والتخييم، وتغطيها الثلوج شتاءً." },
      { name: "واحة أربوات", type: "طبيعي", short: "واحة نخيل وعيون ماء عذبة.", location: "دائرة بنود — 80 كم جنوب البيض", description: "واحة خضراء وسط الصحراء، تتدفق فيها العيون الطبيعية وتنتشر أشجار النخيل. مكان مثالي للاستراحة وتذوق التمر المحلي." },
      { name: "زاوية الأبيض سيدي الشيخ", type: "ديني", short: "زاوية شيخية تاريخية ومحطّ زوار من كل الجزائر.", location: "دائرة الأبيض سيدي الشيخ — 110 كم جنوب البيض", description: "أسسها الشيخ سيدي الشيخ في القرن 16، وتُعدّ من أهم المراكز الدينية في الجنوب الغربي. الموسم السنوي يجذب آلاف الزوار للاحتفاء بالموروث الصوفي." },
      { name: "كثبان كرارة", type: "طبيعي", short: "كثبان رملية ذهبية تمتد على مدّ البصر.", location: "جنوب الولاية", description: "بحر من الكثبان الذهبية يبهر الزائر بأشكاله المتغيرة مع الرياح. وجهة مثالية للتزلج الرملي ومخيمات النجوم والصور البانورامية." },
    ],
    packagesEyebrow: "باقات سياحية",
    packagesTitle: "تجارب صحراوية مقترحة",
    packagesSubtitle: "أمثلة لباقات تنظمها الوكالات المحلية. الأسعار تقريبية ولأغراض المعلومة.",
    packages: [
      { title: "رحلة الجمال في الكثبان", duration: "يومان / ليلة", price: "من 18,000 دج", highlights: ["قافلة تقليدية", "غروب الشمس", "وجبات بدوية"] },
      { title: "مخيم تحت النجوم", duration: "ليلة كاملة", price: "من 12,000 دج", highlights: ["خيام تقليدية", "موسيقى الصحراء", "إفطار بدوي"] },
      { title: "مغامرة 4×4 في الكثبان", duration: "يوم كامل", price: "من 22,000 دج", highlights: ["قيادة احترافية", "تزلج رملي", "تصوير المناظر"] },
    ],
    tipsEyebrow: "نصائح للزائر",
    tipsTitle: "قبل أن تزور البيض",
    tips: [
      { title: "أفضل وقت للزيارة", text: "من أكتوبر إلى أبريل: طقس معتدل نهاراً وبارد ليلاً، مثالي للرحلات الصحراوية والجبلية." },
      { title: "الوصول", text: "الطريق الوطني رقم 6 يربط البيض بوهران شمالاً والبشار جنوباً. خطوط نقل عمومي يومية." },
      { title: "اللباس", text: "أنصح بطبقات قابلة للنزع (الفروقات الحرارية كبيرة بين الليل والنهار)، وحذاء مريح للمشي." },
      { title: "الإقامة", text: "فنادق في مدينة البيض، إضافة إلى مخيمات صحراوية وبيوت تقليدية في القصور." },
    ],
  },
  gallery: {
    title: "معرض الصور",
    subtitle: "جمال ولاية البيض في صور مختارة بين الصحراء والجبال والمعالم التراثية.",
    photos: [
      "الكثبان الذهبية",
      "نقوش بوسمغون الصخرية",
      "قصر الستيتن العتيق",
      "جبل قصل وغابات الأرز",
      "واحة النخيل",
      "قافلة الجمال",
      "مخيم تحت النجوم",
      "مغامرة في الكثبان",
    ],
    closeAria: "إغلاق",
  },
  contact: {
    title: "تواصل معنا",
    subtitle: "هل لديك سؤال أو ترغب في المساهمة بمعلومات أو صور عن ولاية البيض؟ تواصل معنا.",
    infoTitle: "معلومات التواصل",
    infoLead: "نرحب باقتراحاتكم وتصويباتكم. هذا الموقع مشروع غير ربحي للتعريف بولاية البيض الجزائرية.",
    address: "العنوان",
    addressValue: "مدينة البيض، ولاية البيض، الجزائر",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    follow: "تابعنا على",
    mapTitle: "موقع ولاية البيض على الخريطة",
  },
  notFound: { title: "الصفحة غير موجودة", message: "الرابط الذي تبحث عنه قد يكون انتقل أو لم يعد متاحاً." },
  footer: {
    tagline: "بوابة معلوماتية شاملة عن ولاية البيض الجزائرية: تاريخها العريق، ثقافتها الأصيلة، اقتصادها المتنوع، ومعالمها السياحية الساحرة في قلب الأطلس الصحراوي.",
    quickLinks: "روابط سريعة",
    contact: "تواصل",
    rights: "جميع الحقوق محفوظة",
  },
};

const fr: Dict = {
  meta: {
    title: "Wilaya d'El Bayadh — Portail d'information complet",
    description: "Site complet sur la wilaya d'El Bayadh en Algérie — géographie, histoire, culture, économie, tourisme.",
  },
  common: {
    wilaya: "Wilaya d'El Bayadh",
    wilayaCode: "Wilaya n° 32",
    algeria: "Algérie",
    explore: "Explorer",
    learnMore: "En savoir plus",
    contactUs: "Nous contacter",
    sendMessage: "Envoyer un message",
    backHome: "Retour à l'accueil",
    closeMenu: "Fermer",
    openChat: "Ouvrir le chat",
    closeChat: "Fermer",
    sendChat: "Envoyer",
    chatPlaceholder: "Posez-moi une question sur El Bayadh…",
    chatGreeting: "Bonjour ! Je suis votre assistant IA. Posez-moi une question sur la wilaya d'El Bayadh ou tout autre sujet.",
    chatTitle: "Assistant IA d'El Bayadh",
    chatSubtitle: "Propulsé par Gemini AI",
    chatMissingKey: "Pour activer le chat, ajoutez votre clé Gemini API dans le fichier .env sous le nom VITE_GEMINI_API_KEY (gratuit sur https://aistudio.google.com/app/apikey).",
    chatError: "Impossible de joindre le service. Réessayez.",
    thinking: "Réflexion…",
    aboutWilaya: "À propos",
    askMeAnything: "Posez-moi une question",
    poweredBy: "Propulsé par",
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    history: "Histoire",
    culture: "Culture",
    economy: "Économie",
    tourism: "Tourisme",
    gallery: "Galerie",
    contact: "Contact",
  },
  theme: { light: "Mode clair", dark: "Mode sombre" },
  home: {
    badge: "République algérienne démocratique et populaire — Wilaya n° 32",
    title1: "Wilaya",
    title2: "d'El Bayadh",
    title3: "Cœur de l'Atlas saharien",
    subtitle: "Votre portail complet pour découvrir la wilaya d'El Bayadh : une histoire de plusieurs millénaires, une culture bédouine authentique, une économie diversifiée, et des sites touristiques alliant désert, montagnes et oasis.",
    ctaExplore: "Découvrir la wilaya",
    ctaTourism: "Sites touristiques",
    statsArea: "Superficie",
    statsPopulation: "Population",
    statsCommunes: "Communes",
    statsAltitude: "Altitude moyenne",
    quickEyebrow: "Explorer la wilaya",
    quickTitle: "Votre porte d'entrée vers El Bayadh",
    quickSubtitle: "Six axes principaux pour un voyage complet à travers les différents aspects de la wilaya.",
    quick: [{ about: "", history: "", culture: "", economy: "", tourism: "", gallery: "" }],
    sitesEyebrow: "Sites remarquables",
    sitesTitle: "Lieux à découvrir",
    sitesSubtitle: "Des gravures rupestres aux dunes de sable, une diversité naturelle et culturelle unique.",
    allSites: "Tous les sites",
    cultureEyebrow: "Culture & patrimoine",
    cultureTitle: "L'âme authentique d'El Bayadh",
    cultureSubtitle: "Un patrimoine riche où s'entremêlent les racines amazighes et arabes bédouines.",
    moreCulture: "Plus sur la culture",
    ctaTitle1: "Prêt à découvrir",
    ctaTitle2: "El Bayadh ?",
    ctaSubtitle: "Parcourez les autres sections pour en apprendre davantage sur cette wilaya unique au cœur de l'Atlas saharien.",
  },
  about: {
    title: "À propos de la wilaya d'El Bayadh",
    subtitle: "Vue d'ensemble : situation géographique, relief, climat et division administrative de la wilaya d'El Bayadh.",
    introEyebrow: "Vue d'ensemble",
    introTitle: "Une wilaya au cœur de l'Atlas saharien",
    introP1: "La wilaya d'El Bayadh se situe au sud-ouest de l'Algérie, s'étendant sur une vaste superficie des hauts plateaux jusqu'aux dunes de sable. Sa capitale est la ville d'El Bayadh, qui mêle profondeur historique et modernité urbaine.",
    introP2: "La wilaya se distingue par la diversité de son relief : montagnes de l'Atlas saharien au nord, plateaux et steppes pastorales au centre, dunes de sable et oasis au sud. Cette diversité en fait un environnement unique alliant paysages montagneux et désertiques.",
    introP3: "Elle est limitée au nord par Saïda, à l'est par Laghouat, à l'ouest par Naâma et Tlemcen, et au sud par Adrar et Béchar. Cet emplacement en a fait un passage historique des caravanes entre le nord et le Sahara.",
    factsEyebrow: "Carte d'identité",
    factsTitle: "Informations essentielles",
    factsSubtitle: "Les chiffres et faits qui caractérisent la wilaya d'El Bayadh.",
    factArea: "Superficie",
    factPopulation: "Population",
    factDensity: "Densité",
    factCapital: "Chef-lieu",
    factDivision: "Division",
    factAltitude: "Altitude",
    factClimate: "Climat",
    factLanguage: "Langues parlées",
    factCode: "Code wilaya",
    geoEyebrow: "Géographie & relief",
    geoTitle: "Une diversité géographique unique",
    geo: [
      { title: "Les montagnes", text: "Les montagnes de l'Atlas saharien au nord, dont le Djebel Ksel (2008 m) et le Djebel Aïssa. Forêts de cèdres et de pins, neige en hiver." },
      { title: "Steppes & plateaux", text: "Vastes steppes pastorales d'alfa, base de l'élevage. Étendues ouvertes aux couleurs dorées qui changent avec les saisons." },
      { title: "Désert & oasis", text: "Au sud s'étendent les dunes et le désert, parsemés d'oasis aux palmiers et sources naturelles." },
    ],
    adminEyebrow: "Division administrative",
    adminTitle: "Daïras et communes",
    adminSubtitle: "La wilaya d'El Bayadh compte 8 daïras regroupant 22 communes.",
    daira: "Daïra",
    wilayaCodeLabel: "Code wilaya",
  },
  history: {
    title: "Histoire de la wilaya d'El Bayadh",
    subtitle: "Des gravures rupestres préhistoriques aux révolutions de libération et à la naissance de la wilaya moderne.",
    introEyebrow: "À travers les âges",
    introTitle: "Une terre témoin de millénaires de civilisation",
    introP: "La terre d'El Bayadh recèle une longue mémoire de civilisations : de l'homme préhistorique qui a laissé ses gravures sur les rochers de Boussemghoun, aux tribus amazighes et aux ksour islamiques, jusqu'aux épopées de résistance contre la colonisation française et la contribution à la glorieuse révolution de libération.",
    timelineEyebrow: "Chronologie",
    timelineTitle: "Étapes historiques",
    events: [
      { era: "Préhistoire", title: "Les gravures rupestres", description: "La région de Boussemghoun et ses environs témoignent de la présence de l'homme préhistorique depuis des millénaires, à travers des milliers de gravures rupestres représentant des animaux (éléphants, girafes, buffles) et des scènes de chasse, prouvant que le Sahara était autrefois une région fertile." },
      { era: "Antiquité amazighe", title: "Tribus zenata et hilaliennes", description: "Des tribus amazighes nomades ont peuplé la région, puis des vagues de Hilaliens s'y sont installées au 11e siècle. L'identité de la région s'est formée par le mélange des cultures amazighe et arabe bédouine." },
      { era: "Période islamique", title: "Apparition des ksour et zaouïas", description: "Des ksour en pisé comme Ksar Stitten et Ksar Boussemghoun ont été construits comme bastions de la vie sédentaire, et les zaouïas religieuses se sont multipliées pour l'enseignement du Coran et du fiqh, notamment la zaouïa Cheikhia d'El Abiodh Sidi Cheikh fondée par le Cheikh Sidi Cheikh au 16e siècle." },
      { era: "1864 — 1881", title: "Révolte des Ouled Sidi Cheikh", description: "La révolte des Ouled Sidi Cheikh contre la colonisation française a éclaté à El Bayadh sous le commandement de Si Slimane ben Hamza, et s'est étendue au sud-ouest de l'Algérie et au Maroc. Elle est considérée comme l'une des plus longues révoltes populaires contre la colonisation en Algérie." },
      { era: "1954 — 1962", title: "Guerre de libération", description: "La wilaya d'El Bayadh a participé activement à la guerre de libération au sein de la Wilaya historique V, abritant des bases du FLN et des opérations d'armement et de soutien aux moudjahidine via la frontière marocaine." },
      { era: "1984", title: "Naissance de la wilaya administrative", description: "Dans le cadre du nouveau découpage administratif de l'Algérie, El Bayadh est devenue une wilaya indépendante portant le code 32, après avoir été rattachée à la wilaya de Saïda. Depuis, elle a connu un développement continu de ses infrastructures, de l'éducation et de la santé." },
    ],
    highlightEyebrow: "Héritage de résistance",
    highlightTitle: "La révolte des Ouled Sidi Cheikh",
    highlightP1: "La révolte des Ouled Sidi Cheikh (1864-1881) est considérée comme l'une des plus longues révoltes populaires algériennes contre la colonisation française. Elle a éclaté à El Bayadh sous le commandement de Si Slimane ben Hamza et s'est étendue au sud-ouest de l'Algérie et au nord du Maroc.",
    highlightP2: "Les habitants d'El Bayadh étaient à l'avant-garde de la résistance, mettant à profit leur connaissance des pistes du désert pour mener des attaques rapides puis disparaître. La wilaya a aussi été partie de la Wilaya historique V durant la guerre de libération (1954-1962).",
  },
  culture: {
    title: "Culture & patrimoine",
    subtitle: "Un patrimoine riche où se mêlent les racines amazighes et arabes bédouines, exprimé à travers la musique, l'artisanat, la cuisine et les fêtes.",
    introTitle: "Culture ancestrale et hospitalité inoubliable",
    introP: "La wilaya d'El Bayadh est un carrefour culturel où les tribus amazighes et arabes préservent leurs traditions ancestrales. Chaque détail — du burnous au tapis, de la fantasia au couscous — raconte l'histoire d'un peuple qui a forgé sa culture entre les sables du désert et les sommets de l'Atlas.",
    pillarsEyebrow: "Piliers culturels",
    pillarsTitle: "Six aspects essentiels",
    items: [
      { title: "La musique bédouine", description: "L'art du chant bédouin (poésie melhoun) est ancré à El Bayadh, exécuté avec le qellal et le bendir, célébrant l'amour, la transhumance et les valeurs de chevalerie." },
      { title: "Tapis & tissage", description: "Les tapis d'El Bayadh sont célèbres pour leurs motifs géométriques amazighs et leurs couleurs terreuses. Le tissage du tapis est un artisanat féminin transmis de génération en génération, exporté vers les grandes villes algériennes." },
      { title: "La cuisine locale", description: "Plats authentiques comme le couscous aux légumes, le mardoud, le rfis et la mahjouba. Le pain de four (kesra) et le thé à la menthe sont les symboles de l'hospitalité algérienne authentique." },
      { title: "Vêtements traditionnels", description: "Le burnous blanc et la qachabia pour les hommes, la melhfa et le haïk pour les femmes. Couleurs claires reflétant la chaleur du désert, brodées à la main de motifs symboliques." },
      { title: "Fêtes & saisons", description: "Le moussem d'El Abiodh Sidi Cheikh est l'une des plus importantes manifestations religieuses et culturelles, attirant chaque année des milliers de visiteurs. Les mariages bédouins durent plusieurs jours avec fantasia, baroud et louanges." },
      { title: "Cavalerie & baroud", description: "L'art de la « alfa » ou fantasia : démonstration collective de cavaliers en costumes traditionnels tirant le baroud à l'unisson. Symbole de courage et d'unité tribale." },
    ],
    hospitalityEyebrow: "Hospitalité bédouine",
    hospitalityTitle: "L'invité est sacré chez les habitants d'El Bayadh",
    hospitalityP1: "L'hospitalité est une valeur centrale de la culture d'El Bayadh. L'invité est accueilli avec un verre de thé rouge accompagné d'un morceau de kesra, et un mouton est sacrifié en l'honneur du visiteur de loin.",
    hospitalityP2: "Les veillées bédouines durent longtemps, échangeant poésie et histoires. La peau étendue sur le sable sous un ciel étoilé offre une expérience qui ne se trouve qu'ici.",
  },
  economy: {
    title: "Économie de la wilaya d'El Bayadh",
    subtitle: "Une économie diversifiée alliant agriculture pastorale, artisanat traditionnel, tourisme et investissement dans les énergies renouvelables.",
    introTitle: "Une base économique diversifiée et prometteuse",
    introP: "L'économie de la wilaya d'El Bayadh repose sur une richesse naturelle variée : vastes pâturages pour l'élevage, ressources minières et forestières, et un riche patrimoine artisanal. La wilaya s'oriente avec confiance vers les énergies renouvelables et l'écotourisme comme secteurs d'avenir.",
    sectorsEyebrow: "Les secteurs",
    sectorsTitle: "Six secteurs principaux",
    sectors: [
      { title: "Agriculture & élevage", description: "L'élevage ovin et caprin est le pilier de l'économie traditionnelle, avec plus de 2 millions de têtes d'ovins. Céréales et arbres fruitiers sont cultivés dans les oasis et hauts plateaux.", share: "≈ 35%" },
      { title: "Industrie légère", description: "Industries de transformation pour le lait, la viande, le textile et les matériaux de construction. Zones industrielles à El Bayadh et Rogassa.", share: "≈ 18%" },
      { title: "Artisanat traditionnel", description: "Tissage de tapis, cuir, cuivre et bijoux en argent. Métiers familiaux qui contribuent à l'emploi des femmes rurales et soutiennent les exportations culturelles.", share: "≈ 8%" },
      { title: "Tourisme & services", description: "Le tourisme saharien et culturel se développe constamment, surtout autour des sites archéologiques et des dunes. Le secteur des services et du commerce s'étend dans les villes.", share: "≈ 22%" },
      { title: "Énergie & mines", description: "Présence de gisements de gypse, sel et marbre, ainsi que des projets d'énergies renouvelables (solaire) grâce à l'ensoleillement élevé.", share: "≈ 12%" },
      { title: "Forêts & alfa", description: "Forêts de cèdres et pins sur des milliers d'hectares dans les monts de Ksel. L'alfa (esparto) est une source importante pour la fabrication de papier et de cordages.", share: "≈ 5%" },
    ],
    livestockEyebrow: "Pilier économique",
    livestockTitle: "L'élevage : héritage et économie",
    livestockP1: "La wilaya d'El Bayadh trône au sommet de l'élevage ovin en Algérie avec plus de 2 millions de têtes, profitant des vastes steppes pastorales et de l'alfa. La production locale couvre une partie des besoins du marché national en viande rouge.",
    livestockP2: "À côté, l'agriculture est pratiquée dans les oasis et les zones irriguées, notamment la production de céréales, de dattes et de fruits adaptés au climat sec.",
    solarEyebrow: "Avenir vert",
    solarTitle: "Énergies renouvelables",
    solarP1: "Grâce à un ensoleillement élevé et à de vastes espaces ouverts, la wilaya d'El Bayadh figure parmi les régions prometteuses d'Algérie pour accueillir de grandes centrales solaires dans le cadre du plan national des énergies renouvelables.",
    solarP2: "Ces transformations annoncent de nouvelles opportunités d'emploi et une diversification de l'économie locale, en accord avec la vision algérienne de transition énergétique à l'horizon 2030.",
  },
  tourism: {
    title: "Tourisme & sites",
    subtitle: "Gravures rupestres, ksour anciens, montagnes verdoyantes, oasis enchanteresses et dunes dorées vous attendent.",
    sitesEyebrow: "Sites & lieux",
    sitesTitle: "Principales destinations touristiques",
    sitesSubtitle: "Sites variés entre archéologique, naturel, patrimonial et religieux.",
    sites: [
      { name: "Gravures rupestres de Boussemghoun", type: "Archéologique", short: "Dessins préhistoriques sur les rochers de grès.", location: "Commune de Boussemghoun — 100 km au sud d'El Bayadh", description: "L'un des sites archéologiques préhistoriques les plus importants d'Afrique du Nord, comprenant des milliers de gravures dépeignant les anciens animaux de la savane comme les éléphants, les girafes et les autruches, reflétant une époque où le Sahara était vert et plein de vie." },
      { name: "Ksar Stitten ancien", type: "Patrimoine", short: "Ksar en pisé d'architecture saharienne authentique.", location: "Daïra de Stitten — 60 km à l'est d'El Bayadh", description: "Ksar historique construit en pisé et en pierre il y a des siècles, reflétant le génie de l'architecture saharienne : murs épais, ruelles étroites et chambres jointives qui conservent la fraîcheur. Encore partiellement habité, c'est un musée à ciel ouvert." },
      { name: "Djebel Ksel", type: "Naturel", short: "Sommets élevés et forêts de cèdres verdoyantes.", location: "Nord-est de la wilaya d'El Bayadh", description: "Deuxième sommet le plus haut de l'Atlas saharien à 2008 m, avec des forêts de cèdres de l'Atlas et de pins d'Alep. Destination privilégiée pour la randonnée et le camping, couverte de neige en hiver." },
      { name: "Oasis d'Arbaouat", type: "Naturel", short: "Oasis de palmiers et sources d'eau douce.", location: "Daïra de Bnoud — 80 km au sud d'El Bayadh", description: "Oasis verdoyante au milieu du désert, où jaillissent des sources naturelles et s'étendent des palmiers. Lieu idéal pour se reposer et goûter aux dattes locales." },
      { name: "Zaouïa El Abiodh Sidi Cheikh", type: "Religieux", short: "Zaouïa cheikhia historique, lieu de pèlerinage.", location: "Daïra El Abiodh Sidi Cheikh — 110 km au sud d'El Bayadh", description: "Fondée par le Cheikh Sidi Cheikh au 16e siècle, c'est l'un des centres religieux les plus importants du sud-ouest. Le moussem annuel attire des milliers de visiteurs pour célébrer le patrimoine soufi." },
      { name: "Dunes de Kerakda", type: "Naturel", short: "Dunes dorées s'étendant à perte de vue.", location: "Sud de la wilaya", description: "Une mer de dunes dorées qui éblouit le visiteur par ses formes changeantes au gré du vent. Destination idéale pour le sandboarding, les bivouacs et les photos panoramiques." },
    ],
    packagesEyebrow: "Forfaits touristiques",
    packagesTitle: "Expériences sahariennes proposées",
    packagesSubtitle: "Exemples de forfaits organisés par les agences locales. Prix indicatifs.",
    packages: [
      { title: "Trek à dos de chameau", duration: "2 jours / 1 nuit", price: "À partir de 18 000 DA", highlights: ["Caravane traditionnelle", "Coucher de soleil", "Repas bédouins"] },
      { title: "Bivouac sous les étoiles", duration: "Une nuit complète", price: "À partir de 12 000 DA", highlights: ["Tentes traditionnelles", "Musique du désert", "Petit-déjeuner bédouin"] },
      { title: "Aventure 4×4 dans les dunes", duration: "Journée complète", price: "À partir de 22 000 DA", highlights: ["Conduite professionnelle", "Sandboarding", "Photos panoramiques"] },
    ],
    tipsEyebrow: "Conseils au visiteur",
    tipsTitle: "Avant de visiter El Bayadh",
    tips: [
      { title: "Meilleure période", text: "D'octobre à avril : temps doux le jour et frais la nuit, idéal pour les excursions désertiques et montagneuses." },
      { title: "Accès", text: "La RN6 relie El Bayadh à Oran au nord et Béchar au sud. Lignes de transport public quotidiennes." },
      { title: "Habillement", text: "Privilégiez les couches superposables (forts écarts thermiques jour/nuit) et des chaussures confortables." },
      { title: "Hébergement", text: "Hôtels dans la ville d'El Bayadh, plus camps sahariens et maisons traditionnelles dans les ksour." },
    ],
  },
  gallery: {
    title: "Galerie photo",
    subtitle: "La beauté de la wilaya d'El Bayadh en images, entre désert, montagnes et patrimoine.",
    photos: [
      "Dunes dorées",
      "Gravures rupestres de Boussemghoun",
      "Ksar Stitten ancien",
      "Djebel Ksel et forêts de cèdres",
      "Oasis de palmiers",
      "Caravane de chameaux",
      "Bivouac sous les étoiles",
      "Aventure dans les dunes",
    ],
    closeAria: "Fermer",
  },
  contact: {
    title: "Nous contacter",
    subtitle: "Une question ou envie de contribuer avec des informations ou photos sur El Bayadh ? Contactez-nous.",
    infoTitle: "Informations de contact",
    infoLead: "Vos suggestions et corrections sont les bienvenues. Ce site est un projet à but non lucratif pour faire connaître la wilaya d'El Bayadh.",
    address: "Adresse",
    addressValue: "Ville d'El Bayadh, Wilaya d'El Bayadh, Algérie",
    phone: "Téléphone",
    email: "Email",
    follow: "Suivez-nous",
    mapTitle: "Localisation de la wilaya d'El Bayadh",
  },
  notFound: { title: "Page introuvable", message: "Le lien que vous recherchez a peut-être été déplacé ou n'est plus disponible." },
  footer: {
    tagline: "Portail d'information complet sur la wilaya d'El Bayadh : son histoire ancienne, sa culture authentique, son économie diversifiée, et ses sites touristiques au cœur de l'Atlas saharien.",
    quickLinks: "Liens rapides",
    contact: "Contact",
    rights: "Tous droits réservés",
  },
};

const en: Dict = {
  meta: {
    title: "El Bayadh Wilaya — Comprehensive Information Portal",
    description: "Complete website about El Bayadh wilaya in Algeria — geography, history, culture, economy, tourism.",
  },
  common: {
    wilaya: "El Bayadh Wilaya",
    wilayaCode: "Wilaya No. 32",
    algeria: "Algeria",
    explore: "Explore",
    learnMore: "Learn more",
    contactUs: "Contact us",
    sendMessage: "Send a message",
    backHome: "Back home",
    closeMenu: "Close",
    openChat: "Open chat",
    closeChat: "Close",
    sendChat: "Send",
    chatPlaceholder: "Ask me anything about El Bayadh…",
    chatGreeting: "Hello! I'm your AI assistant. Ask me anything about El Bayadh wilaya or any other topic.",
    chatTitle: "El Bayadh AI Assistant",
    chatSubtitle: "Powered by Gemini AI",
    chatMissingKey: "To enable chat, add your Gemini API key to .env as VITE_GEMINI_API_KEY (free at https://aistudio.google.com/app/apikey).",
    chatError: "Could not reach the service. Please try again.",
    thinking: "Thinking…",
    aboutWilaya: "About",
    askMeAnything: "Ask me anything",
    poweredBy: "Powered by",
  },
  nav: {
    home: "Home",
    about: "About",
    history: "History",
    culture: "Culture",
    economy: "Economy",
    tourism: "Tourism",
    gallery: "Gallery",
    contact: "Contact",
  },
  theme: { light: "Light mode", dark: "Dark mode" },
  home: {
    badge: "People's Democratic Republic of Algeria — Wilaya No. 32",
    title1: "El Bayadh",
    title2: "Wilaya",
    title3: "Heart of the Saharan Atlas",
    subtitle: "Your complete portal to discover El Bayadh wilaya: thousands of years of history, authentic Bedouin culture, a diversified economy, and tourist sites blending desert, mountains, and oases.",
    ctaExplore: "Discover the wilaya",
    ctaTourism: "Tourist sites",
    statsArea: "Area",
    statsPopulation: "Population",
    statsCommunes: "Communes",
    statsAltitude: "Avg. altitude",
    quickEyebrow: "Explore the wilaya",
    quickTitle: "Your gateway to El Bayadh",
    quickSubtitle: "Six main pillars for a complete journey through the different aspects of the wilaya.",
    quick: [{ about: "", history: "", culture: "", economy: "", tourism: "", gallery: "" }],
    sitesEyebrow: "Featured sites",
    sitesTitle: "Places worth discovering",
    sitesSubtitle: "From rock carvings to sand dunes, a unique natural and cultural diversity.",
    allSites: "All sites",
    cultureEyebrow: "Culture & heritage",
    cultureTitle: "The authentic spirit of El Bayadh",
    cultureSubtitle: "A rich heritage where Amazigh and Arab Bedouin roots intertwine.",
    moreCulture: "More on culture",
    ctaTitle1: "Ready to discover",
    ctaTitle2: "El Bayadh?",
    ctaSubtitle: "Browse the other sections to learn more about this unique wilaya in the heart of the Saharan Atlas.",
  },
  about: {
    title: "About El Bayadh Wilaya",
    subtitle: "Overview of the location, terrain, climate, and administrative division of El Bayadh wilaya.",
    introEyebrow: "Overview",
    introTitle: "A wilaya in the heart of the Saharan Atlas",
    introP1: "El Bayadh wilaya is located in southwestern Algeria, stretching over a vast area from the high plateaus to the sand dunes. Its capital is the city of El Bayadh, which combines historical depth and urban modernity.",
    introP2: "The wilaya is distinguished by its diverse terrain: Saharan Atlas mountains in the north, plateaus and pastoral steppes in the center, and sand dunes and oases in the south. This diversity makes it a unique environment combining mountain and desert landscapes.",
    introP3: "It is bordered to the north by Saïda, to the east by Laghouat, to the west by Naâma and Tlemcen, and to the south by Adrar and Béchar. This location made it a historical caravan passage between the north and the Sahara.",
    factsEyebrow: "ID card",
    factsTitle: "Key information",
    factsSubtitle: "The figures and facts that distinguish El Bayadh wilaya.",
    factArea: "Area",
    factPopulation: "Population",
    factDensity: "Density",
    factCapital: "Capital",
    factDivision: "Division",
    factAltitude: "Altitude",
    factClimate: "Climate",
    factLanguage: "Languages",
    factCode: "Wilaya code",
    geoEyebrow: "Geography & terrain",
    geoTitle: "A unique geographic diversity",
    geo: [
      { title: "Mountains", text: "The Saharan Atlas mountains in the north, including Djebel Ksel (2008 m) and Djebel Aïssa. Cedar and pine forests, snow in winter." },
      { title: "Steppes & plateaus", text: "Vast pastoral steppes of esparto grass, the foundation of livestock raising. Open expanses with seasonally changing golden colors." },
      { title: "Desert & oases", text: "In the south, sand dunes and the desert extend, with oases scattered as life points with palm trees and natural springs." },
    ],
    adminEyebrow: "Administrative division",
    adminTitle: "Daïras and communes",
    adminSubtitle: "El Bayadh wilaya consists of 8 daïras comprising 22 communes.",
    daira: "Daïra",
    wilayaCodeLabel: "Wilaya code",
  },
  history: {
    title: "History of El Bayadh",
    subtitle: "From prehistoric rock carvings to liberation revolutions and the birth of the modern wilaya.",
    introEyebrow: "Through the ages",
    introTitle: "A land that witnessed thousands of years of civilization",
    introP: "The land of El Bayadh holds a long memory of civilizations: from prehistoric humans who left their carvings on the rocks of Boussemghoun, to the Amazigh tribes and Islamic ksour, to the epics of resistance against French colonization and contribution to the glorious liberation revolution.",
    timelineEyebrow: "Timeline",
    timelineTitle: "Historical milestones",
    events: [
      { era: "Prehistory", title: "The rock carvings", description: "The Boussemghoun region and surroundings testify to the presence of prehistoric humans for thousands of years, through thousands of rock carvings depicting animals (elephants, giraffes, buffaloes) and hunting scenes, indicating the Sahara was once a fertile region." },
      { era: "Ancient Amazigh era", title: "Zenata and Hilali tribes", description: "Nomadic Amazigh tribes inhabited the region, then waves of Hilalians settled during the 11th century. The region's identity was formed by the blending of Amazigh and Arab Bedouin cultures." },
      { era: "Islamic period", title: "Emergence of ksour and zaouïas", description: "Mud-brick ksour like Ksar Stitten and Ksar Boussemghoun were built as fortresses for sedentary life, and religious zaouïas spread for teaching the Quran and fiqh, especially the Cheikhia zaouïa in El Abiodh Sidi Cheikh founded by Sheikh Sidi Cheikh in the 16th century." },
      { era: "1864 — 1881", title: "Ouled Sidi Cheikh revolt", description: "The Ouled Sidi Cheikh revolt against French colonization erupted from El Bayadh under the leadership of Si Slimane ben Hamza, extending to southwestern Algeria and Morocco. It is considered one of the longest popular revolts against colonization in Algeria." },
      { era: "1954 — 1962", title: "War of liberation", description: "El Bayadh wilaya actively participated in the liberation revolution within Historic Wilaya V, hosting FLN bases and arming and supply operations for mujahideen via the Moroccan border." },
      { era: "1984", title: "Birth of the administrative wilaya", description: "Within the new administrative division of Algeria, El Bayadh became an independent wilaya with code 32, after being part of Saïda wilaya. Since then, it has experienced continuous development in infrastructure, education, and health." },
    ],
    highlightEyebrow: "Resistance heritage",
    highlightTitle: "The Ouled Sidi Cheikh revolt",
    highlightP1: "The Ouled Sidi Cheikh revolt (1864-1881) is considered one of the longest popular Algerian revolts against French colonization. It erupted from El Bayadh under the leadership of Si Slimane ben Hamza and extended to southwestern Algeria and northern Morocco.",
    highlightP2: "The people of El Bayadh were at the forefront of the resistance, leveraging their knowledge of desert paths to launch swift attacks then disappear. The wilaya was also part of Historic Wilaya V during the liberation war (1954-1962).",
  },
  culture: {
    title: "Culture & heritage",
    subtitle: "A rich heritage where Amazigh and Arab Bedouin roots intertwine, expressed in music, crafts, cuisine, and weddings.",
    introTitle: "Ancient culture and unforgettable hospitality",
    introP: "El Bayadh wilaya is a cultural crossroads where Amazigh and Arab tribes preserve their ancient customs. Every detail — from the burnous to the carpet, from fantasia to couscous — tells the story of a people who built their culture from the sands of the desert and the peaks of the Atlas.",
    pillarsEyebrow: "Cultural pillars",
    pillarsTitle: "Six essential aspects",
    items: [
      { title: "Bedouin music", description: "The art of Bedouin singing (melhoun poetry) is rooted in El Bayadh, performed with the qellal and bendir, celebrating love, transhumance, and chivalric values." },
      { title: "Carpets & weaving", description: "El Bayadh carpets are famous for their Amazigh geometric patterns and earthy colors. Carpet weaving is a women's craft passed down through generations and exported to major Algerian cities." },
      { title: "Local cuisine", description: "Authentic dishes like couscous with vegetables, mardoud, rfis, and mahjouba. Oven bread (kesra) and mint tea stand out as symbols of authentic Algerian hospitality." },
      { title: "Traditional clothing", description: "The white burnous and qachabia for men, the melhfa and haïk for women. Light colors reflecting the desert heat, hand-embroidered with symbolic patterns." },
      { title: "Weddings & seasons", description: "The El Abiodh Sidi Cheikh moussem is one of the most important religious and cultural events, attracting thousands of visitors annually. Bedouin weddings last several days with fantasia, gunpowder, and praise singing." },
      { title: "Horsemanship & gunpowder", description: "The art of 'alfa' or fantasia: a collective display of horsemen in traditional attire firing gunpowder in unison. A symbol of courage and tribal unity." },
    ],
    hospitalityEyebrow: "Bedouin hospitality",
    hospitalityTitle: "The guest is sacred among the people of El Bayadh",
    hospitalityP1: "Hospitality is a central value in El Bayadh culture. The guest is welcomed with a glass of red tea and a piece of kesra, and a sheep is slaughtered in honor of the visitor from afar.",
    hospitalityP2: "Bedouin gatherings last long, exchanging poetry and stories. The hide spread on the sand under a starry sky offers an experience found only in these lands.",
  },
  economy: {
    title: "Economy of El Bayadh",
    subtitle: "A diversified economy combining pastoral agriculture, traditional crafts, tourism, and investment in renewable energies.",
    introTitle: "A diversified and promising economic base",
    introP: "El Bayadh's economy is based on diverse natural wealth: vast grazing lands for livestock, mineral and forest resources, plus a rich heritage of traditional crafts. The wilaya is confidently moving towards renewable energy and ecotourism as future sectors.",
    sectorsEyebrow: "Sectors",
    sectorsTitle: "Six main sectors",
    sectors: [
      { title: "Agriculture & livestock", description: "Sheep and goat raising is the pillar of the traditional economy, with over 2 million sheep heads. Cereals and fruit trees are also grown in oases and high plains.", share: "≈ 35%" },
      { title: "Light industry", description: "Processing industries for milk, meat, textiles, and building materials. Industrial zones in El Bayadh and Rogassa attract local investment.", share: "≈ 18%" },
      { title: "Traditional crafts", description: "Carpet weaving, leather, copperware, and silver jewelry. Family crafts that contribute to rural women's employment and support cultural exports.", share: "≈ 8%" },
      { title: "Tourism & services", description: "Saharan and cultural tourism is constantly developing, especially around archaeological sites and sand dunes. The services and trade sector is expanding in cities.", share: "≈ 22%" },
      { title: "Energy & mines", description: "Deposits of gypsum, salt, and marble, plus renewable energy projects (solar) due to high solar radiation.", share: "≈ 12%" },
      { title: "Forests & alfa grass", description: "Cedar and pine forests stretching over thousands of hectares in Ksel mountains. Esparto grass is an important source for paper and rope manufacturing.", share: "≈ 5%" },
    ],
    livestockEyebrow: "Backbone",
    livestockTitle: "Livestock raising: legacy and economy",
    livestockP1: "El Bayadh wilaya leads sheep raising in Algeria with over 2 million heads, benefiting from vast pastoral steppes and esparto grass. Local production covers part of the national market's red meat needs.",
    livestockP2: "Alongside, agriculture is practiced in oases and irrigated areas, especially the production of cereals, dates, and some fruits adapted to the dry climate.",
    solarEyebrow: "Green future",
    solarTitle: "Renewable energies",
    solarP1: "Thanks to high solar radiation and vast open spaces, El Bayadh wilaya is among the promising regions in Algeria to host major solar power plants under the national renewable energy plan.",
    solarP2: "These transformations promise new job opportunities and diversification of the local economy, in line with Algeria's vision for the energy transition by 2030.",
  },
  tourism: {
    title: "Tourism & sites",
    subtitle: "Rock carvings, ancient ksour, green mountains, enchanting oases, and golden dunes await your discovery.",
    sitesEyebrow: "Sites & places",
    sitesTitle: "Top tourist destinations",
    sitesSubtitle: "Diverse sites — archaeological, natural, heritage, and religious.",
    sites: [
      { name: "Boussemghoun rock carvings", type: "Archaeological", short: "Prehistoric drawings on sandstone rocks.", location: "Boussemghoun commune — 100 km south of El Bayadh", description: "One of the most important prehistoric archaeological sites in North Africa, comprising thousands of carvings depicting ancient savanna animals like elephants, giraffes, and ostriches, reflecting an era when the Sahara was green and full of life." },
      { name: "Ancient Ksar Stitten", type: "Heritage", short: "Mud-brick ksar with authentic Saharan architecture.", location: "Stitten daïra — 60 km east of El Bayadh", description: "Historic ksar built of mud and stone centuries ago, reflecting the genius of Saharan architecture: thick walls, narrow alleys, and adjoining rooms that retain coolness. Still partially inhabited and considered an open-air museum." },
      { name: "Djebel Ksel", type: "Natural", short: "Towering peaks and lush cedar forests.", location: "Northeast of El Bayadh wilaya", description: "Second highest peak of the Saharan Atlas at 2008 m, with Atlas cedar and Aleppo pine forests. Favored destination for hiking and camping, snow-covered in winter." },
      { name: "Arbaouat oasis", type: "Natural", short: "Palm oasis with fresh water springs.", location: "Bnoud daïra — 80 km south of El Bayadh", description: "A green oasis in the middle of the desert, with flowing natural springs and palm trees. An ideal place to rest and taste local dates." },
      { name: "El Abiodh Sidi Cheikh zaouïa", type: "Religious", short: "Historic Cheikhia zaouïa, a destination for visitors from all over Algeria.", location: "El Abiodh Sidi Cheikh daïra — 110 km south of El Bayadh", description: "Founded by Sheikh Sidi Cheikh in the 16th century, it is one of the most important religious centers in the southwest. The annual moussem attracts thousands of visitors to celebrate the Sufi heritage." },
      { name: "Kerakda dunes", type: "Natural", short: "Golden sand dunes stretching as far as the eye can see.", location: "South of the wilaya", description: "A sea of golden dunes that dazzles visitors with shapes that change with the wind. Ideal destination for sandboarding, star camps, and panoramic photos." },
    ],
    packagesEyebrow: "Tour packages",
    packagesTitle: "Suggested desert experiences",
    packagesSubtitle: "Examples of packages organized by local agencies. Prices are indicative.",
    packages: [
      { title: "Camel trek through the dunes", duration: "2 days / 1 night", price: "From 18,000 DZD", highlights: ["Traditional caravan", "Sunset", "Bedouin meals"] },
      { title: "Camp under the stars", duration: "Full night", price: "From 12,000 DZD", highlights: ["Traditional tents", "Desert music", "Bedouin breakfast"] },
      { title: "4×4 dune adventure", duration: "Full day", price: "From 22,000 DZD", highlights: ["Professional driving", "Sandboarding", "Scenic photography"] },
    ],
    tipsEyebrow: "Visitor tips",
    tipsTitle: "Before visiting El Bayadh",
    tips: [
      { title: "Best time to visit", text: "October to April: mild during the day, cool at night, ideal for desert and mountain trips." },
      { title: "Access", text: "National Road 6 connects El Bayadh to Oran in the north and Béchar in the south. Daily public transport lines available." },
      { title: "Clothing", text: "Layered clothing is recommended (large day/night temperature differences) plus comfortable walking shoes." },
      { title: "Accommodation", text: "Hotels in El Bayadh city, plus desert camps and traditional houses in the ksour." },
    ],
  },
  gallery: {
    title: "Photo gallery",
    subtitle: "The beauty of El Bayadh wilaya in selected images, between desert, mountains, and heritage.",
    photos: [
      "Golden dunes",
      "Boussemghoun rock carvings",
      "Ancient Ksar Stitten",
      "Djebel Ksel and cedar forests",
      "Palm oasis",
      "Camel caravan",
      "Camp under the stars",
      "Adventure in the dunes",
    ],
    closeAria: "Close",
  },
  contact: {
    title: "Contact us",
    subtitle: "Have a question or want to contribute information or photos about El Bayadh? Get in touch.",
    infoTitle: "Contact information",
    infoLead: "Your suggestions and corrections are welcome. This website is a non-profit project to introduce the El Bayadh wilaya.",
    address: "Address",
    addressValue: "City of El Bayadh, El Bayadh Wilaya, Algeria",
    phone: "Phone",
    email: "Email",
    follow: "Follow us",
    mapTitle: "El Bayadh wilaya location on map",
  },
  notFound: { title: "Page not found", message: "The link you are looking for may have been moved or is no longer available." },
  footer: {
    tagline: "A comprehensive information portal about El Bayadh wilaya in Algeria: its ancient history, authentic culture, diversified economy, and stunning tourist sites in the heart of the Saharan Atlas.",
    quickLinks: "Quick links",
    contact: "Contact",
    rights: "All rights reserved",
  },
};

export const translations: Record<Lang, Dict> = { ar, fr, en };

export type DictType = Dict;
