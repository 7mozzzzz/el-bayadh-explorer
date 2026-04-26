import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function NotFound() {
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 bg-gradient-sand">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-extrabold text-gradient-sunset mb-4">404</div>
        <h1 className="text-3xl font-bold text-sand-900 mb-4">{t.notFound.title}</h1>
        <p className="text-sand-700 mb-8">{t.notFound.message}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-sunset text-white font-semibold shadow-elegant hover:scale-105 transition-smooth"
        >
          {t.common.backHome} <Arrow className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
