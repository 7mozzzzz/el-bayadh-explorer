import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Compass } from "lucide-react";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/destinations", label: "الوجهات" },
  { to: "/tours", label: "الرحلات" },
  { to: "/about", label: "عن الوكالة" },
  { to: "/contact", label: "اتصل بنا" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-sunset flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
            <Compass className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className={`font-bold text-lg ${scrolled ? "text-foreground" : "text-white"}`}>
              رحلات البيّض
            </div>
            <div className={`text-[11px] ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              El Bayadh Travel
            </div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                  scrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white hover:bg-white/15"
                }`}
                activeProps={{
                  className: scrolled
                    ? "bg-primary text-primary-foreground hover:bg-primary"
                    : "bg-white text-primary hover:bg-white",
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-sunset text-primary-foreground text-sm font-semibold shadow-elegant hover:scale-105 transition-smooth"
        >
          احجز رحلتك
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="القائمة"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-float-up">
          <ul className="px-6 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary"
                  activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-center mt-2 px-4 py-3 rounded-lg bg-gradient-sunset text-primary-foreground font-semibold"
              >
                احجز رحلتك
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
