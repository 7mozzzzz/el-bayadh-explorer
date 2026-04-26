import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-night-900 text-sand-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-sunset flex items-center justify-center text-white font-extrabold">
              ب
            </div>
            <div>
              <div className="font-extrabold text-xl">ولاية البيض</div>
              <div className="text-xs text-sand-300">
                El Bayadh — Wilaya 32
              </div>
            </div>
          </div>
          <p className="text-sand-300 leading-relaxed max-w-md">
            بوابة معلوماتية شاملة عن ولاية البيض الجزائرية: تاريخها العريق،
            ثقافتها الأصيلة، اقتصادها المتنوع، ومعالمها السياحية الساحرة في قلب
            الأطلس الصحراوي.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sand-100">روابط سريعة</h4>
          <ul className="space-y-2 text-sand-300">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="hover:text-sunset-400 transition-smooth"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sand-100">تواصل</h4>
          <ul className="space-y-3 text-sand-300 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-sunset-400 shrink-0" />
              <span>ولاية البيض، الجزائر</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-sunset-400 shrink-0" />
              <span dir="ltr">+213 49 00 00 00</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-sunset-400 shrink-0" />
              <span>info@elbayadh.dz</span>
            </li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-sand-800 hover:bg-sunset-500 flex items-center justify-center transition-smooth"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-sand-800 hover:bg-sunset-500 flex items-center justify-center transition-smooth"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-sand-800/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 text-center text-sm text-sand-400">
          © {new Date().getFullYear()} ولاية البيض — جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
