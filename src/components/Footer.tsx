import { Link } from "@tanstack/react-router";
import { Compass, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-sunset flex items-center justify-center">
              <Compass className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">رحلات البيّض</span>
          </div>
          <p className="text-background/70 text-sm leading-relaxed">
            وكالتك المتخصصة لاكتشاف كنوز ولاية البيّض، من نقوش صخرية عمرها آلاف السنين إلى كثبان صحراء رحبة.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/" className="hover:text-accent">الرئيسية</Link></li>
            <li><Link to="/destinations" className="hover:text-accent">الوجهات</Link></li>
            <li><Link to="/tours" className="hover:text-accent">الرحلات</Link></li>
            <li><Link to="/about" className="hover:text-accent">عن الوكالة</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">تواصل معنا</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> ولاية البيّض، الجزائر</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> +213 555 000 000</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> info@elbayadh-travel.dz</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">تابعنا</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent hover:text-foreground flex items-center justify-center transition-smooth">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent hover:text-foreground flex items-center justify-center transition-smooth">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 py-6 text-center text-xs text-background/60">
        © {new Date().getFullYear()} رحلات البيّض — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
