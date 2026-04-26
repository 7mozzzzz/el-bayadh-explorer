import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { navLinks } from "@/data/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
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
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-sunset shadow-elegant flex items-center justify-center text-white font-extrabold">
            ب
          </div>
          <div className="leading-tight">
            <div
              className={`font-extrabold text-lg ${
                transparent ? "text-white" : "text-sand-900"
              }`}
            >
              ولاية البيض
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

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                    isActive
                      ? "bg-sunset-500 text-white shadow-warm"
                      : transparent
                        ? "text-white/90 hover:bg-white/15"
                        : "text-sand-800 hover:bg-sand-100"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${
              transparent
                ? "bg-white/15 text-white border border-white/25"
                : "bg-sand-100 text-sand-700 border border-sand-200"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            ولاية رقم 32
          </span>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden p-2 rounded-lg ${
            transparent
              ? "text-white hover:bg-white/15"
              : "text-sand-900 hover:bg-sand-100"
          }`}
          aria-label="القائمة"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-sand-50 border-t border-sand-200">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
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
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
