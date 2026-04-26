import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LANGS, translations, type DictType, type Lang } from "./translations";

const STORAGE_KEY = "el-bayadh-lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: DictType;
  dir: "rtl" | "ltr";
};

const I18nContext = createContext<Ctx | null>(null);

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "ar";
  const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved && (saved === "ar" || saved === "fr" || saved === "en")) {
    return saved;
  }
  const nav = navigator.language?.toLowerCase() ?? "";
  if (nav.startsWith("fr")) return "fr";
  if (nav.startsWith("en")) return "en";
  return "ar";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectInitialLang());

  const dir = useMemo(
    () => LANGS.find((l) => l.code === lang)?.dir ?? "rtl",
    [lang],
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = translations[lang].meta.title;
  }, [lang, dir]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: translations[lang], dir }),
    [lang, setLang, dir],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be inside I18nProvider");
  return ctx;
}
