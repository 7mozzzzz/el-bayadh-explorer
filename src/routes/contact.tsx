import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import heroImg from "@/assets/hero-desert.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "اتصل بنا — رحلات البيّض" },
      { name: "description", content: "تواصل مع وكالة رحلات البيّض لحجز رحلتك أو الاستفسار عن باقاتنا السياحية." },
      { property: "og:title", content: "اتصل بنا — رحلات البيّض" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const contacts = [
    { icon: Phone, title: "الهاتف", value: "+213 555 000 000", href: "tel:+213555000000" },
    { icon: MapPin, title: "العنوان", value: "ولاية البيّض، الجزائر", href: "https://maps.google.com/?q=El+Bayadh+Algeria" },
    { icon: Mail, title: "البريد الإلكتروني", value: "info@elbayadh-travel.dz", href: "mailto:info@elbayadh-travel.dz" },
    { icon: Facebook, title: "فيسبوك", value: "ElBayadhTravel", href: "https://facebook.com/ElBayadhTravel" },
    { icon: Instagram, title: "إنستغرام", value: "@elbayadh.travel", href: "https://instagram.com/elbayadh.travel" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-40 pb-20 px-6 lg:px-10 bg-gradient-sunset text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", mixBlendMode: "overlay" }} />
        <div className="relative max-w-7xl mx-auto text-center animate-float-up">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">تواصل معنا</h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">نحن هنا للإجابة على كل استفساراتك وتنظيم رحلتك المثالية</p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-float-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">معلومات التواصل</h2>
            <p className="text-muted-foreground">اختر الطريقة الأنسب للتواصل معنا</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contacts.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-card border border-border rounded-2xl p-6 flex items-start gap-4 hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-sunset flex items-center justify-center shrink-0 shadow-glow group-hover:scale-110 transition-smooth">
                  <c.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-sm break-words">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

