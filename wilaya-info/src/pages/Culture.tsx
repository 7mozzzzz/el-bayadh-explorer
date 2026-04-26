import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { cultureIcons, images } from "@/data/content";
import {
  Music,
  Palette,
  Utensils,
  Shirt,
  Calendar,
  Swords,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const iconMap: Record<string, LucideIcon> = {
  music: Music,
  palette: Palette,
  utensils: Utensils,
  shirt: Shirt,
  calendar: Calendar,
  sword: Swords,
};

export default function Culture() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t.culture.title} subtitle={t.culture.subtitle} image={images.ksar} />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
            {t.culture.introTitle}
          </h2>
          <p className="text-lg text-sand-700 leading-relaxed">{t.culture.introP}</p>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow={t.culture.pillarsEyebrow} title={t.culture.pillarsTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {t.culture.items.map((c, i) => {
              const Icon = iconMap[cultureIcons[i]] ?? Music;
              return (
                <article
                  key={c.title}
                  className="bg-white rounded-2xl p-7 shadow-warm border border-sand-200/60 hover:shadow-elegant hover:-translate-y-1 transition-smooth"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-sunset text-white flex items-center justify-center mb-5 shadow-elegant">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-sand-900 mb-3">{c.title}</h3>
                  <p className="text-sand-700 leading-relaxed">{c.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={images.camp}
            alt={t.culture.hospitalityTitle}
            className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover"
          />
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-700 text-xs font-semibold mb-3 uppercase tracking-wider">
              {t.culture.hospitalityEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
              {t.culture.hospitalityTitle}
            </h2>
            <div className="space-y-4 text-sand-800 text-lg leading-relaxed">
              <p>{t.culture.hospitalityP1}</p>
              <p>{t.culture.hospitalityP2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
