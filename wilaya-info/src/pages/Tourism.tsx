import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { images, touristSites, tourPackages } from "@/data/content";
import { MapPin } from "lucide-react";

export default function Tourism() {
  return (
    <>
      <PageHeader
        title="السياحة والمعالم"
        subtitle="نقوش صخرية، قصور أثرية، جبال خضراء، واحات ساحرة، وكثبان ذهبية تنتظر الاكتشاف."
        image={images.hero}
      />

      {/* SITES */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="معالم وأماكن"
            title="أبرز الوجهات السياحية"
            subtitle="مواقع متنوعة بين الأثري والطبيعي والتراثي والديني."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {touristSites.map((s) => (
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
                  <div className="flex items-center gap-1.5 text-xs text-sand-600 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-sunset-500" />
                    <span>{s.location}</span>
                  </div>
                  <p className="text-sand-700 leading-relaxed text-sm">
                    {s.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOUR PACKAGES */}
      <section className="py-20 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="باقات سياحية"
            title="تجارب صحراوية مقترحة"
            subtitle="أمثلة لباقات تنظمها الوكالات المحلية. الأسعار تقريبية ولأغراض المعلومة."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {tourPackages.map((t) => (
              <article
                key={t.slug}
                className="rounded-2xl overflow-hidden bg-white shadow-warm border border-sand-100 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className="text-xs font-semibold text-sunset-700 uppercase tracking-wider">
                    {t.duration}
                  </span>
                  <h3 className="text-lg font-bold text-sand-900">{t.title}</h3>
                  <ul className="text-sand-700 text-sm space-y-1.5 mb-2">
                    {t.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sunset-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-sand-200 text-lg font-extrabold text-sand-900">
                    {t.price}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="نصائح للزائر"
            title="قبل أن تزور البيض"
          />
          <div className="grid sm:grid-cols-2 gap-5 mt-14">
            <Tip
              title="أفضل وقت للزيارة"
              text="من أكتوبر إلى أبريل: طقس معتدل نهاراً وبارد ليلاً، مثالي للرحلات الصحراوية والجبلية."
            />
            <Tip
              title="الوصول"
              text="الطريق الوطني رقم 6 يربط البيض بوهران شمالاً والبشار جنوباً. خطوط نقل عمومي يومية."
            />
            <Tip
              title="اللباس"
              text="أنصح بطبقات قابلة للنزع (الفروقات الحرارية كبيرة بين الليل والنهار)، وحذاء مريح للمشي."
            />
            <Tip
              title="الإقامة"
              text="فنادق في مدينة البيض، إضافة إلى مخيمات صحراوية وبيوت تقليدية في القصور."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Tip({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-warm border-r-4 border-sunset-500">
      <h3 className="font-bold text-sand-900 mb-2">{title}</h3>
      <p className="text-sand-700 leading-relaxed text-sm">{text}</p>
    </div>
  );
}
