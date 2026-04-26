import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { images, packageImages, siteImages } from "@/data/content";
import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function Tourism() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t.tourism.title} subtitle={t.tourism.subtitle} image={images.hero} />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t.tourism.sitesEyebrow}
            title={t.tourism.sitesTitle}
            subtitle={t.tourism.sitesSubtitle}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {t.tourism.sites.map((s, i) => (
              <article
                key={s.name}
                className="group rounded-2xl overflow-hidden bg-white shadow-warm hover:shadow-elegant hover:-translate-y-1 transition-smooth border border-sand-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={siteImages[i % siteImages.length]}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                  />
                  <span className="absolute top-3 end-3 px-3 py-1 rounded-full bg-sunset-500 text-white text-xs font-semibold">
                    {s.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-sand-900 mb-2">{s.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-sand-600 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-sunset-500" />
                    <span>{s.location}</span>
                  </div>
                  <p className="text-sand-700 leading-relaxed text-sm">{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t.tourism.packagesEyebrow}
            title={t.tourism.packagesTitle}
            subtitle={t.tourism.packagesSubtitle}
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {t.tourism.packages.map((pkg, i) => (
              <article
                key={pkg.title}
                className="rounded-2xl overflow-hidden bg-white shadow-warm border border-sand-100 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={packageImages[i % packageImages.length]}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className="text-xs font-semibold text-sunset-700 uppercase tracking-wider">
                    {pkg.duration}
                  </span>
                  <h3 className="text-lg font-bold text-sand-900">{pkg.title}</h3>
                  <ul className="text-sand-700 text-sm space-y-1.5 mb-2">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sunset-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-sand-200 text-lg font-extrabold text-sand-900">
                    {pkg.price}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow={t.tourism.tipsEyebrow} title={t.tourism.tipsTitle} />
          <div className="grid sm:grid-cols-2 gap-5 mt-14">
            {t.tourism.tips.map((tip) => (
              <Tip key={tip.title} title={tip.title} text={tip.text} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Tip({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-warm border border-sand-200/60">
      <h3 className="font-bold text-sand-900 mb-2">{title}</h3>
      <p className="text-sand-700 leading-relaxed text-sm">{text}</p>
    </div>
  );
}
