import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { economyIcons, images } from "@/data/content";
import {
  Wheat,
  Factory,
  Hammer,
  MountainSnow,
  Fuel,
  TreePine,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const iconMap: Record<string, LucideIcon> = {
  wheat: Wheat,
  factory: Factory,
  hammer: Hammer,
  "mountain-snow": MountainSnow,
  fuel: Fuel,
  "tree-pine": TreePine,
};

export default function Economy() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t.economy.title} subtitle={t.economy.subtitle} image={images.hero} />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
            {t.economy.introTitle}
          </h2>
          <p className="text-lg text-sand-700 leading-relaxed">{t.economy.introP}</p>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow={t.economy.sectorsEyebrow} title={t.economy.sectorsTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {t.economy.sectors.map((s, i) => {
              const Icon = iconMap[economyIcons[i]] ?? Factory;
              return (
                <article
                  key={s.title}
                  className="bg-white rounded-2xl p-7 shadow-warm border border-sand-200/60 hover:shadow-elegant hover:-translate-y-1 transition-smooth"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-sunset text-white flex items-center justify-center shadow-elegant">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-extrabold text-gradient-sunset">{s.share}</span>
                  </div>
                  <h3 className="text-xl font-bold text-sand-900 mb-3">{s.title}</h3>
                  <p className="text-sand-700 leading-relaxed">{s.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-700 text-xs font-semibold mb-3 uppercase tracking-wider">
              {t.economy.livestockEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
              {t.economy.livestockTitle}
            </h2>
            <div className="space-y-4 text-sand-800 text-lg leading-relaxed">
              <p>{t.economy.livestockP1}</p>
              <p>{t.economy.livestockP2}</p>
            </div>
          </div>
          <img
            src={images.oasis}
            alt={t.economy.livestockTitle}
            className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover"
          />
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-sand-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={images.hero}
            alt={t.economy.solarTitle}
            className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full bg-oasis-500/10 text-oasis-700 text-xs font-semibold mb-3 uppercase tracking-wider">
              {t.economy.solarEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
              {t.economy.solarTitle}
            </h2>
            <div className="space-y-4 text-sand-800 text-lg leading-relaxed">
              <p>{t.economy.solarP1}</p>
              <p>{t.economy.solarP2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
