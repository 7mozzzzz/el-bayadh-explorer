import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Globe, Moon, Sun, Check } from "lucide-react";
import { navKeys } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";
import { useTheme } from "@/theme/ThemeProvider";
import { LANGS, type Lang } from "@/i18n/translations";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        transparent
          ? "bg-transparent"
          : "bg-sand-50/90 backdrop-blur-xl border-b border-sand-200 shadow-warm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 rounded-xl bg-gradient-sunset shadow-elegant flex items-center justify-center text-white font-extrabold text-lg">
            {lang === "ar" ? "ب" : "B"}
          </div>
          <div className="leading-tight">
            <div
              className={`font-extrabold text-lg ${
                transparent ? "text-white" : "text-sand-900"
              }`}
            >
              {t.common.wilaya}
            </div>
            <div
              className={`text-xs ${
                transparent ? "text-white/80" : "text-sand-600"
              }`}
            >
              El Bayadh — Algeria
            </div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navKeys.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-full text-sm font-medium transition-smooth ${
                    isActive
                      ? "bg-sunset-500 text-white shadow-warm"
                      : transparent
                        ? "text-white/90 hover:bg-white/15"
                        : "text-sand-800 hover:bg-sand-100"
                  }`
                }
              >
                {t.nav[l.key]}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              aria-label="Language"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold transition-smooth ${
                transparent
                  ? "bg-white/15 text-white border border-white/25 hover:bg-white/25"
                  : "bg-sand-100 text-sand-800 border border-sand-200 hover:bg-sand-200"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{lang}</span>
            </button>
            {langOpen && (
              <div
                className="absolute mt-2 end-0 min-w-[160px] bg-white border border-sand-200 rounded-xl shadow-elegant overflow-hidden z-50"
              >
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLang(l.code as Lang);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium hover:bg-sand-100 transition-smooth ${
                      lang === l.code ? "text-sunset-700" : "text-sand-800"
                    }`}
                  >
                    <span>{l.label}</span>
                    {lang === l.code && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? t.theme.light : t.theme.dark}
            title={theme === "dark" ? t.theme.light : t.theme.dark}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-smooth ${
              transparent
                ? "bg-white/15 text-white border border-white/25 hover:bg-white/25"
                : "bg-sand-100 text-sand-800 border border-sand-200 hover:bg-sand-200"
            }`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          <span
            className={`hidden xl:inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${
              transparent
                ? "bg-white/15 text-white border border-white/25"
                : "bg-sand-100 text-sand-700 border border-sand-200"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            {t.common.wilayaCode}
          </span>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`lg:hidden p-2 rounded-lg ${
              transparent
                ? "text-white hover:bg-white/15"
                : "text-sand-900 hover:bg-sand-100"
            }`}
            aria-label={t.common.closeMenu}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-sand-50 border-t border-sand-200">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {navKeys.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium ${
                      isActive
                        ? "bg-sunset-500 text-white"
                        : "text-sand-800 hover:bg-sand-100"
                    }`
                  }
                >
                  {t.nav[l.key]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
