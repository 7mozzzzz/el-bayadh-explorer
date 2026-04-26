import heroDesert from "@/assets/hero-desert.jpg";
import siteRockArt from "@/assets/site-rock-art.jpg";
import siteKsar from "@/assets/site-ksar.jpg";
import siteMountain from "@/assets/site-mountain.jpg";
import siteOasis from "@/assets/site-oasis.jpg";
import tourCamel from "@/assets/tour-camel.jpg";
import tourCamp from "@/assets/tour-camp.jpg";
import tour4x4 from "@/assets/tour-4x4.jpg";

export const images = {
  hero: heroDesert,
  rockArt: siteRockArt,
  ksar: siteKsar,
  mountain: siteMountain,
  oasis: siteOasis,
  camel: tourCamel,
  camp: tourCamp,
  suv: tour4x4,
};

export const wilayaFacts = {
  code: "32",
  area: "71,697 كم²",
  population: "≈ 290,000 نسمة",
  density: "≈ 4 نسمة/كم²",
  capital: "مدينة البيض",
  daira: "8 دوائر",
  communes: "22 بلدية",
  altitude: "1,300 م فوق سطح البحر",
  climate: "شبه جاف، شتاء بارد وصيف حار",
  language: "العربية والأمازيغية والفرنسية",
};

export type Daira = {
  name: string;
  communes: string[];
};

export const dairas: Daira[] = [
  { name: "البيض", communes: ["البيض", "الرقاصة", "سيدي طيفور"] },
  { name: "بريزينة", communes: ["بريزينة", "بوعلام"] },
  { name: "الأبيض سيدي الشيخ", communes: ["الأبيض سيدي الشيخ", "كاف الأحمر"] },
  { name: "بوسمغون", communes: ["بوسمغون", "الشلالة"] },
  { name: "الغاسول", communes: ["الغاسول", "اسطبل"] },
  { name: "روقاصة", communes: ["الرقاصة", "تسمولين"] },
  { name: "الستيتن", communes: ["الستيتن", "كرارة"] },
  { name: "بنود", communes: ["بنود", "الميهوب", "أربوات"] },
];

export type HistoryEvent = {
  era: string;
  title: string;
  description: string;
};

export const historyTimeline: HistoryEvent[] = [
  {
    era: "ما قبل التاريخ",
    title: "النقوش الصخرية",
    description:
      "تشهد منطقة بوسمغون ومحيطها على وجود إنسان ما قبل التاريخ منذ آلاف السنين، عبر آلاف النقوش الصخرية التي تصوّر الحيوانات (الفيلة، الزرافات، الجاموس) وحياة الصيد، ما يدل على أن الصحراء كانت يوماً منطقة خصبة.",
  },
  {
    era: "العصر الأمازيغي القديم",
    title: "قبائل زناتة وبني هلال",
    description:
      "سكنت المنطقة قبائل أمازيغية رحّل، ثم استقرت موجات من الهلاليين خلال القرن الحادي عشر. تشكلت هوية المنطقة من تمازج الثقافتين الأمازيغية والعربية البدوية.",
  },
  {
    era: "العهد الإسلامي",
    title: "ظهور القصور والزوايا",
    description:
      "بُنيت القصور الطينية مثل قصر الستيتن وقصر بوسمغون كحصون للحياة المستقرة، وانتشرت الزوايا الدينية لتعليم القرآن والفقه، خاصة الزاوية الشيخية في الأبيض سيدي الشيخ التي أسسها الشيخ سيدي الشيخ في القرن السادس عشر.",
  },
  {
    era: "1864 — 1881",
    title: "ثورة أولاد سيدي الشيخ",
    description:
      "اندلعت من البيض ثورة أولاد سيدي الشيخ ضد الاستعمار الفرنسي بقيادة سي سليمان بن حمزة، وامتدت إلى الجنوب الغربي للجزائر والمغرب. تُعدّ من أطول الثورات الشعبية ضد الاستعمار في الجزائر.",
  },
  {
    era: "1954 — 1962",
    title: "ثورة التحرير",
    description:
      "شاركت ولاية البيض بفعالية في الثورة التحريرية ضمن الولاية التاريخية الخامسة، واحتضنت قواعد لجبهة التحرير الوطني وعمليات تسليح ومدد للمجاهدين عبر الحدود المغربية.",
  },
  {
    era: "1984",
    title: "ميلاد الولاية الإدارية",
    description:
      "في إطار التقسيم الإداري الجديد للجزائر، أصبحت البيض ولاية مستقلة برمز 32، بعد أن كانت تابعة لولاية سعيدة. منذ ذلك الحين شهدت تنمية متواصلة في البنى التحتية والتعليم والصحة.",
  },
];

export type CultureItem = {
  icon: string;
  title: string;
  description: string;
};

export const cultureItems: CultureItem[] = [
  {
    icon: "music",
    title: "موسيقى البدوي",
    description:
      "فن الغناء البدوي (الشعر الملحون) متجذّر في البيض، ويُؤدى بمرافقة آلة القلال والبندير، ويتغنى بالحب والترحال وقيم الفروسية.",
  },
  {
    icon: "palette",
    title: "الزرابي والنسيج",
    description:
      "تشتهر زرابي البيض بنقوشها الهندسية الأمازيغية وألوانها الترابية. يُعد نسيج الزربية حرفة نسائية تتوارثها الأجيال، وتُصدَّر إلى مدن الجزائر الكبرى.",
  },
  {
    icon: "utensils",
    title: "المطبخ المحلي",
    description:
      "أطباق أصيلة كالكسكس بالخضار، المردود، الرفيس، والمحجوبة. يبرز خبز التنّور (الكسرة) وشاي النعناع كرموز للضيافة الجزائرية الأصيلة.",
  },
  {
    icon: "shirt",
    title: "اللباس التقليدي",
    description:
      "البرنوس الأبيض والقشّابة للرجال، والملحفة والحايك للنساء. ألوانها فاتحة لتعكس حرارة الصحراء، وتُطرّز يدوياً بنقوش رمزية.",
  },
  {
    icon: "calendar",
    title: "الأعراس والمواسم",
    description:
      "مواسم زيارة الأبيض سيدي الشيخ من أهم التظاهرات الدينية والثقافية، وتجمع آلاف الزوار سنوياً. الأعراس البدوية تستمر أياماً مع الفروسية والبارود والمديح.",
  },
  {
    icon: "sword",
    title: "الفروسية والبارود",
    description:
      "فن «العلفة» أو الفنطازية: عرض جماعي للفرسان بأزيائهم التقليدية، يُطلقون البارود في تناغم تام. رمز للشجاعة والوحدة القبلية.",
  },
];

export type EconomySector = {
  icon: string;
  title: string;
  description: string;
  share: string;
};

export const economySectors: EconomySector[] = [
  {
    icon: "wheat",
    title: "الزراعة وتربية المواشي",
    description:
      "تمثل تربية الأغنام والماعز عماد الاقتصاد التقليدي، إذ تضم الولاية أكثر من 2 مليون رأس من الأغنام. كما تُزرع الحبوب والأشجار المثمرة في الواحات والسهول العليا.",
    share: "≈ 35%",
  },
  {
    icon: "factory",
    title: "الصناعة الخفيفة",
    description:
      "صناعات تحويلية للحليب، اللحوم، النسيج، ومواد البناء. مناطق صناعية في البيض ورقاصة تستقطب الاستثمار المحلي.",
    share: "≈ 18%",
  },
  {
    icon: "hammer",
    title: "الصناعات التقليدية",
    description:
      "نسج الزرابي، الجلود، النحاسيات، والحلي الفضية. حرف عائلية تُساهم في تشغيل المرأة الريفية ودعم الصادرات الثقافية.",
    share: "≈ 8%",
  },
  {
    icon: "mountain-snow",
    title: "السياحة والخدمات",
    description:
      "السياحة الصحراوية والثقافية في تطور مستمر، خاصة حول المعالم الأثرية والكثبان الرملية. قطاع الخدمات والتجارة في توسع داخل المدن.",
    share: "≈ 22%",
  },
  {
    icon: "fuel",
    title: "الطاقة والمناجم",
    description:
      "وجود رواسب من الجبس والملح والرخام، إضافة إلى مشاريع للطاقة المتجددة (الطاقة الشمسية) نظراً لارتفاع نسبة الإشعاع الشمسي.",
    share: "≈ 12%",
  },
  {
    icon: "tree-pine",
    title: "الغابات والحلفاء",
    description:
      "تمتد غابات الأرز والصنوبر على آلاف الهكتارات في جبال قصل. نبتة الحلفاء (الإسبارطو) مصدر دخل مهم لصناعة الورق والحبال.",
    share: "≈ 5%",
  },
];

export type TouristSite = {
  slug: string;
  name: string;
  type: "أثري" | "طبيعي" | "تراثي" | "ديني";
  image: string;
  short: string;
  description: string;
  location: string;
};

export const touristSites: TouristSite[] = [
  {
    slug: "rock-art",
    name: "نقوش بوسمغون الصخرية",
    type: "أثري",
    image: images.rockArt,
    short: "رسوم ما قبل التاريخ على صخور الحجر الرملي.",
    location: "بلدية بوسمغون — 100 كم جنوب البيض",
    description:
      "تُعدّ من أهم المواقع الأثرية ما قبل التاريخ في شمال إفريقيا، تضم آلاف النقوش التي تصوّر حيوانات السافانا القديمة كالفيلة والزرافات والنعام، وتعكس مرحلة كانت فيها الصحراء خضراء غنية بالحياة.",
  },
  {
    slug: "ksar-stitten",
    name: "قصر الستيتن العتيق",
    type: "تراثي",
    image: images.ksar,
    short: "قصر طيني بفن معماري صحراوي أصيل.",
    location: "دائرة الستيتن — 60 كم شرق البيض",
    description:
      "قصر تاريخي بُني من الطين والحجر منذ قرون، يعكس عبقرية العمارة الصحراوية: أسوار سميكة، ممرات ضيقة، وحجرات متلاصقة تحفظ البرودة. لا يزال مأهولاً جزئياً ويُعدّ متحفاً مفتوحاً.",
  },
  {
    slug: "djebel-ksel",
    name: "جبل قصل",
    type: "طبيعي",
    image: images.mountain,
    short: "قمم شامخة وغابات أرز خضراء.",
    location: "شمال شرق ولاية البيض",
    description:
      "ثاني أعلى قمة في الأطلس الصحراوي بارتفاع 2008 م، يضم غابات الأرز الأطلسي والصنوبر الحلبي. وجهة مفضلة للمشي والتخييم، وتغطيها الثلوج شتاءً.",
  },
  {
    slug: "oasis-arbaouat",
    name: "واحة أربوات",
    type: "طبيعي",
    image: images.oasis,
    short: "واحة نخيل وعيون ماء عذبة.",
    location: "دائرة بنود — 80 كم جنوب البيض",
    description:
      "واحة خضراء وسط الصحراء، تتدفق فيها العيون الطبيعية وتنتشر أشجار النخيل. مكان مثالي للاستراحة وتذوق التمر المحلي.",
  },
  {
    slug: "abiodh-sidi-cheikh",
    name: "زاوية الأبيض سيدي الشيخ",
    type: "ديني",
    image: images.ksar,
    short: "زاوية شيخية تاريخية ومحطّ زوار من كل الجزائر.",
    location: "دائرة الأبيض سيدي الشيخ — 110 كم جنوب البيض",
    description:
      "أسسها الشيخ سيدي الشيخ في القرن 16، وتُعدّ من أهم المراكز الدينية في الجنوب الغربي. الموسم السنوي يجذب آلاف الزوار للاحتفاء بالموروث الصوفي.",
  },
  {
    slug: "kerakda-dunes",
    name: "كثبان كرارة",
    type: "طبيعي",
    image: images.hero,
    short: "كثبان رملية ذهبية تمتد على مدّ البصر.",
    location: "جنوب الولاية",
    description:
      "بحر من الكثبان الذهبية يبهر الزائر بأشكاله المتغيرة مع الرياح. وجهة مثالية للتزلج الرملي ومخيمات النجوم والصور البانورامية.",
  },
];

export type TourPackage = {
  slug: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
};

export const tourPackages: TourPackage[] = [
  {
    slug: "camel-trek",
    title: "رحلة الجمال في الكثبان",
    duration: "يومان / ليلة",
    price: "من 18,000 دج",
    image: images.camel,
    highlights: ["قافلة تقليدية", "غروب الشمس", "وجبات بدوية"],
  },
  {
    slug: "desert-camp",
    title: "مخيم تحت النجوم",
    duration: "ليلة كاملة",
    price: "من 12,000 دج",
    image: images.camp,
    highlights: ["خيام تقليدية", "موسيقى الصحراء", "إفطار بدوي"],
  },
  {
    slug: "4x4-adventure",
    title: "مغامرة 4×4 في الكثبان",
    duration: "يوم كامل",
    price: "من 22,000 دج",
    image: images.suv,
    highlights: ["قيادة احترافية", "تزلج رملي", "تصوير المناظر"],
  },
];

export const navLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "عن الولاية" },
  { to: "/history", label: "التاريخ" },
  { to: "/culture", label: "الثقافة" },
  { to: "/economy", label: "الاقتصاد" },
  { to: "/tourism", label: "السياحة" },
  { to: "/gallery", label: "معرض الصور" },
  { to: "/contact", label: "تواصل" },
];
