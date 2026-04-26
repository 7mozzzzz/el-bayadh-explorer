import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { tours } from "@/data/sites";
import { Star, Clock, Check } from "lucide-react";
import heroImg from "@/assets/hero-desert.jpg";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "الرحلات السياحية — رحلات البيّض" },
      { name: "description", content: "باقات سياحية متنوعة في ولاية البيّض: رحلات الجمال، مخيمات صحراوية، مغامرات 4×4." },
      { property: "og:title", content: "رحلات وباقات سياحية في البيّض" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ToursPage,
});

function ToursPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-40 pb-20 px-6 lg:px-10 bg-gradient-sunset text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", mixBlendMode: "overlay" }} />
        <div className="relative max-w-7xl mx-auto text-center animate-float-up">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">رحلاتنا</h1>
          <p className="text-lg sm:text-xl opacity-90">باقات مصممة بعناية لتجربة صحراوية كاملة</p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((t) => (
            <article key={t.slug} className="bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-smooth flex flex-col">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={t.image} alt={t.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover hover:scale-110 transition-smooth duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" /> {t.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{t.title}</h3>
                <ul className="space-y-2 mb-6 flex-1">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" /> {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xl font-extrabold text-primary">{t.price}</span>
                  <Link to="/contact" className="px-5 py-2.5 rounded-full bg-gradient-sunset text-primary-foreground text-sm font-semibold hover:scale-105 transition-smooth">
                    احجز الآن
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
