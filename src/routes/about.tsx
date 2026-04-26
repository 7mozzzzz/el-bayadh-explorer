import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, Users, Heart, Globe2 } from "lucide-react";
import heroImg from "@/assets/hero-desert.jpg";
import oasisImg from "@/assets/site-oasis.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "عن الوكالة — رحلات البيّض" },
      { name: "description", content: "وكالة سياحية محلية متخصصة في اكتشاف ولاية البيّض، شغوفة بإبراز كنوز المنطقة وتاريخها." },
      { property: "og:title", content: "عن وكالة رحلات البيّض" },
      { property: "og:image", content: oasisImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-40 pb-20 px-6 lg:px-10 bg-gradient-sunset text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", mixBlendMode: "overlay" }} />
        <div className="relative max-w-7xl mx-auto text-center animate-float-up">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">عن وكالتنا</h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">شغفنا هو إظهار جمال البيّض للعالم</p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-elegant">
            <img src={oasisImg} alt="واحة في البيّض" loading="lazy" width={1024} height={768} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-accent text-sm font-bold tracking-widest uppercase">قصتنا</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 mb-6">شركاء رحلتك في قلب الجزائر</h2>
            <p className="text-muted-foreground leading-loose text-lg mb-4">
              نحن وكالة سياحية محلية تأسست في ولاية البيّض، يقودها فريق من أبناء المنطقة الذين يعرفون كل واد، كل قصر، وكل قصة تخفيها صخور الصحراء.
            </p>
            <p className="text-muted-foreground leading-loose text-lg">
              مهمتنا هي تقديم تجارب سياحية أصيلة وآمنة، تجمع بين متعة الاكتشاف، وعمق التاريخ، ودفء الضيافة الجزائرية.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-gradient-dune">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-sm font-bold tracking-widest uppercase">قيمنا</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-3">ما يميّزنا</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "خبرة معتمدة", desc: "أكثر من 10 سنوات في تنظيم الرحلات." },
              { icon: Users, title: "فريق محلي", desc: "مرشدون من أبناء المنطقة." },
              { icon: Heart, title: "ضيافة أصيلة", desc: "كرم جزائري لا يُنسى." },
              { icon: Globe2, title: "سياحة مسؤولة", desc: "نحترم البيئة والتراث." },
            ].map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-elegant hover:-translate-y-1 transition-smooth">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-sunset flex items-center justify-center mb-4 shadow-glow">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
