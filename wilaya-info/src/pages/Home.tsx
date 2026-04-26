import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Compass,
  BookOpen,
  Users,
  Mountain,
  Landmark,
  Building2,
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import {
  images,
  touristSites,
  wilayaFacts,
  cultureItems,
} from "@/data/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        <img
          src={images.hero}
          alt="ولاية البيض الجزائرية"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 flex-1 flex items-center pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="max-w-3xl text-white animate-float-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-sm border border-white/25 mb-6">
                <MapPin className="w-4 h-4" /> الجمهورية الجزائرية الديمقراطية
                الشعبية — ولاية رقم 32
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                ولاية{" "}
                <span className="text-gradient-sunset">البيض</span>
                <br />
                قلب الأطلس الصحراوي
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                بوابتك الشاملة لاكتشاف ولاية البيض: تاريخ يمتد آلاف السنين،
                ثقافة بدوية أصيلة، اقتصاد متنوع، ومعالم سياحية تجمع بين الصحراء
                والجبال والواحات.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-sunset text-white font-semibold shadow-elegant hover:scale-105 transition-smooth"
                >
                  اكتشف الولاية <ArrowLeft className="w-4 h-4" />
                </Link>
                <Link
                  to="/tourism"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/25 transition-smooth"
                >
                  المعالم السياحية
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 px-6 lg:px-10 pb-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white shadow-elegant">
              <Stat n={wilayaFacts.area} label="المساحة" />
              <Stat n={wilayaFacts.population} label="السكان" />
              <Stat n={wilayaFacts.communes} label="عدد البلديات" />
              <Stat n={wilayaFacts.altitude} label="الارتفاع المتوسط" />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-24 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="استكشف الولاية"
            title="بوابتك إلى البيض"
            subtitle="ست محاور رئيسية تأخذك في رحلة شاملة عبر مختلف جوانب الولاية."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            <QuickLink
              to="/about"
              icon={Compass}
              title="عن الولاية"
              desc="الموقع الجغرافي، التضاريس، المناخ، والتقسيم الإداري."
            />
            <QuickLink
              to="/history"
              icon={BookOpen}
              title="التاريخ"
              desc="من النقوش الصخرية إلى ثورات التحرير وميلاد الولاية."
            />
            <QuickLink
              to="/culture"
              icon={Users}
              title="الثقافة والتراث"
              desc="الموسيقى البدوية، الزرابي، المطبخ، والفروسية."
            />
            <QuickLink
              to="/economy"
              icon={Building2}
              title="الاقتصاد"
              desc="الزراعة، الصناعة، السياحة، والطاقات المتجددة."
            />
            <QuickLink
              to="/tourism"
              icon={Mountain}
              title="السياحة"
              desc="معالم أثرية وطبيعية تنتظر اكتشافك."
            />
            <QuickLink
              to="/gallery"
              icon={Landmark}
              title="معرض الصور"
              desc="جمال البيض في صور مختارة."
            />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED SITES */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="معالم بارزة"
            title="مواقع تستحق الاكتشاف"
            subtitle="من النقوش الصخرية إلى الكثبان الرملية، تنوع طبيعي وثقافي فريد."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {touristSites.slice(0, 6).map((s) => (
              <article
                key={s.slug}
                className="group rounded-2xl overflow-hidden bg-white shadow-warm hover:shadow-elegant hover:-translate-y-1 transition-smooth border border-sand-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-sunset-500 text-white text-xs font-semibold">
                    {s.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sand-900 mb-2">
                    {s.name}
                  </h3>
                  <p className="text-sand-700 text-sm leading-relaxed">
                    {s.short}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/tourism"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sand-900 text-white font-semibold hover:bg-sand-800 transition-smooth"
            >
              كل المعالم <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CULTURE PEEK */}
      <section className="py-24 px-6 lg:px-10 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="ثقافة وتراث"
            title="روح البيض الأصيلة"
            subtitle="موروث غني تتشابك فيه الجذور الأمازيغية والعربية البدوية."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {cultureItems.slice(0, 3).map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-7 shadow-warm border border-sand-200/60"
              >
                <h3 className="text-xl font-bold text-sand-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-sand-700 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/culture"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-sunset text-white font-semibold shadow-elegant hover:scale-105 transition-smooth"
            >
              المزيد عن الثقافة <ArrowLeft className="w-4 h-4" />
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
            هل أنت مستعد لاكتشاف{" "}
            <span className="text-gradient-sunset">البيض؟</span>
          </h2>
          <p className="text-lg text-white/85 mb-8">
            تصفّح بقية الأقسام لتعرف أكثر عن هذه الولاية الفريدة في قلب الأطلس
            الصحراوي.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-sunset text-white font-semibold shadow-elegant hover:scale-105 transition-smooth"
          >
            تواصل معنا <ArrowLeft className="w-4 h-4" />
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
      <div className="w-14 h-14 rounded-xl bg-gradient-sunset text-white flex items-center justify-center mb-4 shadow-elegant group-hover:scale-110 transition-smooth">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-sand-900 mb-2">{title}</h3>
      <p className="text-sand-700 leading-relaxed">{desc}</p>
      <ArrowLeft className="absolute bottom-6 left-6 w-5 h-5 text-sunset-500 opacity-0 group-hover:opacity-100 transition-smooth" />
    </Link>
  );
}
