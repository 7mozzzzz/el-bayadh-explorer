import rockArt from "@/assets/site-rock-art.jpg";
import ksar from "@/assets/site-ksar.jpg";
import mountain from "@/assets/site-mountain.jpg";
import oasis from "@/assets/site-oasis.jpg";
import camel from "@/assets/tour-camel.jpg";
import camp from "@/assets/tour-camp.jpg";
import suv from "@/assets/tour-4x4.jpg";

export type Site = {
  slug: string;
  name: string;
  type: "أثري" | "طبيعي" | "تراثي";
  image: string;
  short: string;
  description: string;
};

export const sites: Site[] = [
  {
    slug: "rock-art",
    name: "نقوش بوسمغون الصخرية",
    type: "أثري",
    image: rockArt,
    short: "رسوم ما قبل التاريخ على صخور الحجر الرملي.",
    description:
      "محطّة بوسمغون من أهم المواقع الأثرية في الجنوب الغربي الجزائري، تضم منحوتات صخرية يعود تاريخها لآلاف السنين تصور حياة الإنسان والحيوان في الصحراء القديمة.",
  },
  {
    slug: "ksar-stitten",
    name: "قصر الستيتن العتيق",
    type: "تراثي",
    image: ksar,
    short: "قصر طيني بفن معماري صحراوي أصيل.",
    description:
      "قصر تاريخي بُني من الطين والحجر، يعكس عبقرية العمارة الصحراوية وقدرتها على التكيف مع المناخ. تتناثر حوله النخيل في مشهد ساحر عند الغروب.",
  },
  {
    slug: "djebel-ksel",
    name: "جبل قصل",
    type: "طبيعي",
    image: mountain,
    short: "قمم شامخة وغابات أرز خضراء.",
    description:
      "أحد أعلى جبال الأطلس الصحراوي، يشكّل ملاذًا طبيعيًا بأشجار الأرز والصنوبر، ومناظر بانورامية تمتد إلى آفاق الصحراء.",
  },
  {
    slug: "oasis-arbaouat",
    name: "واحة العرباوات",
    type: "طبيعي",
    image: oasis,
    short: "واحة نخيل وعيون ماء عذبة.",
    description:
      "واحة خضراء تتدفق فيها العيون وتتعانق فيها أشجار النخيل، مكان مثالي للاستراحة بعد رحلة في الصحراء.",
  },
];

export type Tour = {
  slug: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
};

export const tours: Tour[] = [
  {
    slug: "camel-trek",
    title: "رحلة الجمال في الكثبان",
    duration: "يومان / ليلة",
    price: "من 18,000 دج",
    image: camel,
    highlights: ["قافلة تقليدية", "غروب الشمس", "وجبات بدوية"],
  },
  {
    slug: "desert-camp",
    title: "مخيم تحت النجوم",
    duration: "ليلة كاملة",
    price: "من 12,000 دج",
    image: camp,
    highlights: ["خيام تقليدية", "موسيقى الصحراء", "إفطار بدوي"],
  },
  {
    slug: "4x4-adventure",
    title: "مغامرة 4×4 في الكثبان",
    duration: "يوم كامل",
    price: "من 22,000 دج",
    image: suv,
    highlights: ["قيادة احترافية", "تزلج رملي", "تصوير المناظر"],
  },
];
