import heroDesert from "@/assets/hero-desert.jpg";
import siteRockArt from "@/assets/site-rock-art.jpg";
import siteKsar from "@/assets/site-ksar.jpg";
import siteMountain from "@/assets/site-mountain.jpg";
import siteOasis from "@/assets/site-oasis.jpg";
import tourCamel from "@/assets/tour-camel.jpg";
import tourCamp from "@/assets/tour-camp.jpg";
import tour4x4 from "@/assets/tour-4x4.jpg";
import type { Lang } from "@/i18n/translations";

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

/* Numeric / language-neutral facts. UI labels are translated separately. */
export const wilayaFacts: Record<
  Lang,
  {
    code: string;
    area: string;
    population: string;
    density: string;
    capital: string;
    daira: string;
    communes: string;
    altitude: string;
    climate: string;
    language: string;
  }
> = {
  ar: {
    code: "32",
    area: "71,697 كم²",
    population: "≈ 290,000 نسمة",
    density: "≈ 4 نسمة/كم²",
    capital: "مدينة البيض",
    daira: "8 دوائر",
    communes: "22 بلدية",
    altitude: "1,300 م",
    climate: "شبه جاف، شتاء بارد وصيف حار",
    language: "العربية والأمازيغية والفرنسية",
  },
  fr: {
    code: "32",
    area: "71 697 km²",
    population: "≈ 290 000 hab.",
    density: "≈ 4 hab./km²",
    capital: "Ville d'El Bayadh",
    daira: "8 daïras",
    communes: "22 communes",
    altitude: "1 300 m",
    climate: "Semi-aride, hiver froid, été chaud",
    language: "Arabe, amazigh, français",
  },
  en: {
    code: "32",
    area: "71,697 km²",
    population: "≈ 290,000 inhabitants",
    density: "≈ 4 inh./km²",
    capital: "City of El Bayadh",
    daira: "8 daïras",
    communes: "22 communes",
    altitude: "1,300 m",
    climate: "Semi-arid, cold winter, hot summer",
    language: "Arabic, Amazigh, French",
  },
};

export const dairas: Record<Lang, { name: string; communes: string[] }[]> = {
  ar: [
    { name: "البيض", communes: ["البيض", "الرقاصة", "سيدي طيفور"] },
    { name: "بريزينة", communes: ["بريزينة", "بوعلام"] },
    { name: "الأبيض سيدي الشيخ", communes: ["الأبيض سيدي الشيخ", "كاف الأحمر"] },
    { name: "بوسمغون", communes: ["بوسمغون", "الشلالة"] },
    { name: "الغاسول", communes: ["الغاسول", "اسطبل"] },
    { name: "روقاصة", communes: ["الرقاصة", "تسمولين"] },
    { name: "الستيتن", communes: ["الستيتن", "كرارة"] },
    { name: "بنود", communes: ["بنود", "الميهوب", "أربوات"] },
  ],
  fr: [
    { name: "El Bayadh", communes: ["El Bayadh", "Rogassa", "Sidi Tifour"] },
    { name: "Brézina", communes: ["Brézina", "Boualem"] },
    { name: "El Abiodh Sidi Cheikh", communes: ["El Abiodh Sidi Cheikh", "Kef El Ahmar"] },
    { name: "Boussemghoun", communes: ["Boussemghoun", "Chellala"] },
    { name: "El Ghassoul", communes: ["El Ghassoul", "Stebla"] },
    { name: "Rogassa", communes: ["Rogassa", "Tismouline"] },
    { name: "Stitten", communes: ["Stitten", "Kerrakda"] },
    { name: "Bnoud", communes: ["Bnoud", "Mehara", "Arbaouat"] },
  ],
  en: [
    { name: "El Bayadh", communes: ["El Bayadh", "Rogassa", "Sidi Tifour"] },
    { name: "Brézina", communes: ["Brézina", "Boualem"] },
    { name: "El Abiodh Sidi Cheikh", communes: ["El Abiodh Sidi Cheikh", "Kef El Ahmar"] },
    { name: "Boussemghoun", communes: ["Boussemghoun", "Chellala"] },
    { name: "El Ghassoul", communes: ["El Ghassoul", "Stebla"] },
    { name: "Rogassa", communes: ["Rogassa", "Tismouline"] },
    { name: "Stitten", communes: ["Stitten", "Kerrakda"] },
    { name: "Bnoud", communes: ["Bnoud", "Mehara", "Arbaouat"] },
  ],
};

export const cultureIcons = ["music", "palette", "utensils", "shirt", "calendar", "sword"] as const;
export const economyIcons = ["wheat", "factory", "hammer", "mountain-snow", "fuel", "tree-pine"] as const;

export const siteImages = [
  images.rockArt,
  images.ksar,
  images.mountain,
  images.oasis,
  images.ksar,
  images.hero,
];

export const packageImages = [images.camel, images.camp, images.suv];

export const navKeys = [
  { to: "/", key: "home" as const },
  { to: "/about", key: "about" as const },
  { to: "/history", key: "history" as const },
  { to: "/culture", key: "culture" as const },
  { to: "/economy", key: "economy" as const },
  { to: "/tourism", key: "tourism" as const },
  { to: "/gallery", key: "gallery" as const },
  { to: "/contact", key: "contact" as const },
];
