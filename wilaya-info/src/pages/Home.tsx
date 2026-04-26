import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Compass,
  BookOpen,
  Users,
  Mountain,
  Landmark,
  Building2,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { images, wilayaFacts } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";

export default function Home() {
  const { t, lang, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const facts = wilayaFacts[lang];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        <img
          src={images.hero}
          alt={t.common.wilaya}
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 flex-1 flex items-center pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-3xl text-white animate-float-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-sm border border-white/25 mb-6">
                <MapPin className="w-4 h-4" /> {t.home.badge}
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                {t.home.title1}{" "}
                <span className="text-gradient-sunset">{t.home.title2}</span>
                <br />
                {t.home.title3}
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                {t.home.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-sunset text-white font-semibold shadow-elegant hover:scale-105 transition-smooth"
                >
                  {t.home.ctaExplore} <Arrow className="w-4 h-4" />
                </Link>
                <Link
                  to="/tourism"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/25 transition-smooth"
                >
                  {t.home.ctaTourism}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 px-6 lg:px-10 pb-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white shadow-elegant">
              <Stat n={facts.area} label={t.home.statsArea} />
              <Stat n={facts.population} label={t.home.statsPopulation} />
              <Stat n={facts.communes} label={t.home.statsCommunes} />
              <Stat n={facts.altitude} label={t.home.statsAltitude} />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-24 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t.home.quickEyebrow}
            title={t.home.quickTitle}
            subtitle={t.home.quickSubtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            <QuickLink to="/about" icon={Compass} title={t.nav.about} desc={t.about.subtitle} />
            <QuickLink to="/history" icon={BookOpen} title={t.nav.history} desc={t.history.subtitle} />
            <QuickLink to="/culture" icon={Users} title={t.nav.culture} desc={t.culture.subtitle} />
            <QuickLink to="/economy" icon={Building2} title={t.nav.economy} desc={t.economy.subtitle} />
            <QuickLink to="/tourism" icon={Mountain} title={t.nav.tourism} desc={t.tourism.subtitle} />
            <QuickLink to="/gallery" icon={Landmark} title={t.nav.gallery} desc={t.gallery.subtitle} />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED SITES */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t.home.sitesEyebrow}
            title={t.home.sitesTitle}
            subtitle={t.home.sitesSubtitle}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {t.tourism.sites.slice(0, 6).map((s, i) => {
              const imgs = [images.rockArt, images.ksar, images.mountain, images.oasis, images.ksar, images.hero];
              return (
                <article
                  key={s.name}
                  className="group rounded-2xl overflow-hidden bg-white shadow-warm hover:shadow-elegant hover:-translate-y-1 transition-smooth border border-sand-100"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={imgs[i]}
                      alt={s.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                    />
                    <span className="absolute top-3 end-3 px-3 py-1 rounded-full bg-sunset-500 text-white text-xs font-semibold">
                      {s.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-sand-900 mb-2">{s.name}</h3>
                    <p className="text-sand-700 text-sm leading-relaxed">{s.short}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/tourism"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand-900 text-white font-semibold hover:bg-sand-800 transition-smooth"
            >
              {t.home.allSites} <Arrow className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CULTURE PEEK */}
      <section className="py-24 px-6 lg:px-10 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t.home.cultureEyebrow}
            title={t.home.cultureTitle}
            subtitle={t.home.cultureSubtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {t.culture.items.slice(0, 3).map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-7 shadow-warm border border-sand-200/60"
              >
                <h3 className="text-xl font-bold text-sand-900 mb-2">{c.title}</h3>
                <p className="text-sand-700 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/culture"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-sunset text-white font-semibold shadow-elegant hover:scale-105 transition-smooth"
            >
              {t.home.moreCulture} <Arrow className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 lg:px-10 overflow-hidden">
        <img
          src={images.mountain}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            {t.home.ctaTitle1}{" "}
            <span className="text-gradient-sunset">{t.home.ctaTitle2}</span>
          </h2>
          <p className="text-lg text-white/85 mb-8">{t.home.ctaSubtitle}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-sunset text-white font-semibold shadow-elegant hover:scale-105 transition-smooth"
          >
            {t.common.contactUs} <Arrow className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-extrabold text-gradient-sunset">
        {n}
      </div>
      <div className="text-xs sm:text-sm text-white/80 mt-1">{label}</div>
    </div>
  );
}

function QuickLink({
  to,
  icon: Icon,
  title,
  desc,
}: {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <Link
      to={to}
      className="group relative bg-white rounded-2xl p-7 border border-sand-200 shadow-warm hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden"
    >
      <div className="w-12 h-12 rounded-xl bg-sunset-500/10 text-sunset-700 flex items-center justify-center mb-5 group-hover:bg-gradient-sunset group-hover:text-white transition-smooth">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-sand-900 mb-2">{title}</h3>
      <p className="text-sand-700 text-sm leading-relaxed">{desc}</p>
    </Link>
  );
}
