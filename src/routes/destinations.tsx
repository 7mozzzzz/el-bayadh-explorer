import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { sites } from "@/data/sites";
import { MapPin, ArrowLeft } from "lucide-react";
import heroImg from "@/assets/hero-desert.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "الوجهات السياحية في البيّض — رحلات البيّض" },
      { name: "description", content: "استكشف أبرز المواقع الأثرية والطبيعية في ولاية البيّض: نقوش صخرية، قصور تاريخية، جبال وواحات." },
      { property: "og:title", content: "وجهات ولاية البيّض السياحية" },
      { property: "og:description", content: "دليل شامل لأجمل المواقع في البيّض." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero title="وجهاتنا السياحية" subtitle="أبرز المواقع الأثرية والطبيعية في ولاية البيّض" />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {sites.map((s, i) => (
            <article
              key={s.slug}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}
            >
              <div className="rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700"
                />
              </div>
              <div className="[direction:rtl]">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-bold mb-4">
                  <MapPin className="w-3 h-3" /> {s.type}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{s.name}</h2>
                <p className="text-muted-foreground leading-loose text-lg mb-6">{s.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-smooth"
                >
                  احجز زيارة <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative pt-40 pb-20 px-6 lg:px-10 bg-gradient-sunset text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "overlay" }} />
      <div className="relative max-w-7xl mx-auto text-center animate-float-up">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">{title}</h1>
        <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}
