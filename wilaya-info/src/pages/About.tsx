import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { dairas, images, wilayaFacts } from "@/data/content";
import {
  Globe2,
  Mountain,
  Thermometer,
  Languages,
  MapPin,
  Building2,
  Map,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const geoImages = [0, 1, 2];

export default function About() {
  const { t, lang } = useI18n();
  const facts = wilayaFacts[lang];
  const dairaList = dairas[lang];
  const imgs = [images.mountain, images.hero, images.oasis];

  return (
    <>
      <PageHeader title={t.about.title} subtitle={t.about.subtitle} image={images.mountain} />

      {/* INTRO */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-700 text-xs font-semibold mb-3 uppercase tracking-wider">
              {t.about.introEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
              {t.about.introTitle}
            </h2>
            <div className="space-y-4 text-sand-800 text-lg leading-relaxed">
              <p>{t.about.introP1}</p>
              <p>{t.about.introP2}</p>
              <p>{t.about.introP3}</p>
            </div>
          </div>
          <div className="relative">
            <img
              src={images.oasis}
              alt={t.about.title}
              className="rounded-3xl shadow-elegant w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -start-6 bg-white rounded-2xl p-5 shadow-elegant border border-sand-100 max-w-xs">
              <div className="text-xs text-sand-600 mb-1">{t.about.wilayaCodeLabel}</div>
              <div className="text-3xl font-extrabold text-gradient-sunset">32</div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS GRID */}
      <section className="py-20 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t.about.factsEyebrow}
            title={t.about.factsTitle}
            subtitle={t.about.factsSubtitle}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            <Fact icon={Map} label={t.about.factArea} value={facts.area} />
            <Fact icon={Building2} label={t.about.factPopulation} value={facts.population} />
            <Fact icon={Globe2} label={t.about.factDensity} value={facts.density} />
            <Fact icon={MapPin} label={t.about.factCapital} value={facts.capital} />
            <Fact icon={Building2} label={t.about.factDivision} value={`${facts.daira} • ${facts.communes}`} />
            <Fact icon={Mountain} label={t.about.factAltitude} value={facts.altitude} />
            <Fact icon={Thermometer} label={t.about.factClimate} value={facts.climate} />
            <Fact icon={Languages} label={t.about.factLanguage} value={facts.language} />
            <Fact icon={Globe2} label={t.about.factCode} value={facts.code} />
          </div>
        </div>
      </section>

      {/* GEOGRAPHY */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow={t.about.geoEyebrow} title={t.about.geoTitle} />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {t.about.geo.map((g, i) => (
              <GeoCard key={g.title} title={g.title} text={g.text} image={imgs[geoImages[i]]} />
            ))}
          </div>
        </div>
      </section>

      {/* ADMINISTRATIVE */}
      <section className="py-20 px-6 lg:px-10 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t.about.adminEyebrow}
            title={t.about.adminTitle}
            subtitle={t.about.adminSubtitle}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {dairaList.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-2xl p-6 shadow-warm border border-sand-200/60 hover:shadow-elegant transition-smooth"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-sunset-500/10 text-sunset-700 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sand-900">
                    {t.about.daira} {d.name}
                  </h3>
                </div>
                <ul className="text-sand-700 text-sm space-y-1">
                  {d.communes.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sunset-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-sand-200 shadow-warm flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-sunset text-white flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="text-xs text-sand-600 font-medium mb-1">{label}</div>
        <div className="text-lg font-bold text-sand-900">{value}</div>
      </div>
    </div>
  );
}

function GeoCard({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) {
  return (
    <article className="rounded-2xl overflow-hidden bg-white shadow-warm border border-sand-100">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-sand-900 mb-2">{title}</h3>
        <p className="text-sand-700 leading-relaxed">{text}</p>
      </div>
    </article>
  );
}
