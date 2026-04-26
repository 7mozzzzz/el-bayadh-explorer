import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { sites, tours } from "@/data/sites";
import heroImg from "@/assets/hero-desert.jpg";
import { ArrowLeft, MapPin, Star, Compass, Tent, Mountain } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "رحلات البيّض — اكتشف كنوز ولاية البيّض" },
      { name: "description", content: "اكتشف أجمل المواقع الأثرية والسياحية في ولاية البيّض بالجزائر مع وكالة سياحة محلية متخصصة." },
      { property: "og:title", content: "رحلات البيّض — اكتشف كنوز ولاية البيّض" },
      { property: "og:description", content: "نقوش صخرية، قصور أثرية، واحات وكثبان صحراوية تنتظرك." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="صحراء ولاية البيّض"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-2xl text-white animate-float-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-sm border border-white/20 mb-6">
                <MapPin className="w-4 h-4" /> ولاية البيّض، الجزائر
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                اكتشف سحر <span className="text-gradient-sunset">الصحراء</span> الجزائرية
              </h1>
              <p className="text-lg sm:text-xl text-white/85 mb-8 leading-relaxed">
                رحلات استثنائية إلى كنوز البيّض الأثرية والطبيعية: نقوش عمرها آلاف السنين، قصور أصيلة، كثبان ذهبية وواحات خضراء.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/tours"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-sunset text-primary-foreground font-semibold shadow-elegant hover:scale-105 transition-smooth"
                >
                  استكشف الرحلات <ArrowLeft className="w-4 h-4" />
                </Link>
                <Link
                  to="/destinations"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/25 transition-smooth"
                >
                  الوجهات السياحية
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-10 inset-x-0 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white">
              <Stat n="+25" label="موقع سياحي" />
              <Stat n="+1200" label="مسافر سعيد" />
              <Stat n="10" label="سنوات خبرة" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="لماذا نحن" title="تجربة سياحية لا تُنسى" />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Compass, title: "مرشدون محليون", desc: "خبراء يعرفون كل زاوية في البيّض ويتقنون رواية تاريخها." },
              { icon: Tent, title: "إقامات أصيلة", desc: "خيام بدوية تحت سماء النجوم، ومخيمات راقية في قلب الصحراء." },
              { icon: Mountain, title: "وجهات حصرية", desc: "مواقع أثرية وطبيعية لا تجدها في أي وكالة أخرى." },
            ].map((f, i) => (
              <div
                key={f.title}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-elegant hover:-translate-y-2 transition-smooth"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-sunset flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-smooth">
                  <f.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS PREVIEW */}
      <section className="py-24 px-6 lg:px-10 bg-gradient-dune">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <SectionHeader eyebrow="وجهاتنا" title="مواقع تستحق الاكتشاف" align="start" />
            <Link to="/destinations" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
              كل الوجهات <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sites.map((s) => (
              <article key={s.slug} className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-smooth">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-overlay" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">{s.type}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-bold mb-1">{s.name}</h3>
                  <p className="text-sm text-white/80 line-clamp-2">{s.short}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOURS PREVIEW */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="رحلاتنا" title="باقات مختارة بعناية" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {tours.map((t) => (
              <article key={t.slug} className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-smooth">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={t.image} alt={t.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover hover:scale-110 transition-smooth duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-accent mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t.duration}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{t.price}</span>
                    <Link to="/contact" className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth">
                      احجز
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto bg-gradient-sunset rounded-3xl p-12 lg:p-16 text-center shadow-elegant text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", mixBlendMode: "overlay" }} />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">جاهز لمغامرتك؟</h2>
            <p className="text-lg mb-8 opacity-90">احجز رحلتك القادمة إلى ولاية البيّض ودعنا نخطط لك تجربة لا تُنسى.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-smooth">
              تواصل معنا الآن <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-extrabold">{n}</div>
      <div className="text-xs sm:text-sm text-white/80 mt-1">{label}</div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, align = "center" }: { eyebrow: string; title: string; align?: "center" | "start" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <span className="inline-block text-accent text-sm font-bold tracking-widest uppercase mb-3">{eyebrow}</span>
      <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">{title}</h2>
    </div>
  );
}
