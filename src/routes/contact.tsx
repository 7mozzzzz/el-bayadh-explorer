import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
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
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  }

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
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, title: "العنوان", value: "ولاية البيّض، الجزائر" },
              { icon: Phone, title: "الهاتف", value: "+213 555 000 000" },
              { icon: Mail, title: "البريد الإلكتروني", value: "info@elbayadh-travel.dz" },
            ].map((c) => (
              <div key={c.title} className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 hover:shadow-soft transition-smooth">
                <div className="w-12 h-12 rounded-xl bg-gradient-sunset flex items-center justify-center shrink-0 shadow-glow">
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{c.title}</h3>
                  <p className="text-muted-foreground">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-soft space-y-5">
            <h2 className="text-2xl font-bold mb-2">أرسل لنا رسالة</h2>
            <p className="text-muted-foreground text-sm mb-6">سنرد عليك في أقرب وقت ممكن</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="الاسم الكامل" name="name" required />
              <Field label="البريد الإلكتروني" name="email" type="email" required />
            </div>
            <Field label="رقم الهاتف" name="phone" type="tel" />
            <Field label="الرحلة المطلوبة" name="tour" />
            <div>
              <label className="block text-sm font-semibold mb-2">رسالتك</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-sunset text-primary-foreground font-bold shadow-elegant hover:scale-[1.02] transition-smooth disabled:opacity-70"
            >
              {sent ? (<><Check className="w-5 h-5" /> تم الإرسال بنجاح</>) : (<><Send className="w-5 h-5" /> إرسال الرسالة</>)}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
      />
    </div>
  );
}
