import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { images } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";

export default function History() {
  const { t, dir } = useI18n();
  return (
    <>
      <PageHeader title={t.history.title} subtitle={t.history.subtitle} image={images.rockArt} />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-700 text-xs font-semibold mb-3 uppercase tracking-wider">
            {t.history.introEyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
            {t.history.introTitle}
          </h2>
          <p className="text-lg text-sand-700 leading-relaxed">{t.history.introP}</p>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow={t.history.timelineEyebrow} title={t.history.timelineTitle} />
          <div className="relative mt-16">
            <div
              className={`absolute top-0 bottom-0 ${dir === "rtl" ? "right-7" : "left-7"} w-0.5 bg-sand-300`}
            />
            <div className="space-y-10">
              {t.history.events.map((e, i) => (
                <article
                  key={i}
                  className={`relative ${dir === "rtl" ? "ps-20" : "ps-20"} animate-float-up`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div
                    className={`absolute ${dir === "rtl" ? "right-0" : "left-0"} top-0 w-14 h-14 rounded-full bg-gradient-sunset flex items-center justify-center text-white font-extrabold shadow-elegant`}
                  >
                    {i + 1}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-warm border border-sand-100">
                    <div className="text-xs font-semibold text-sunset-700 uppercase tracking-wider mb-2">
                      {e.era}
                    </div>
                    <h3 className="text-xl font-bold text-sand-900 mb-3">{e.title}</h3>
                    <p className="text-sand-700 leading-relaxed">{e.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-700 text-xs font-semibold mb-3 uppercase tracking-wider">
              {t.history.highlightEyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
              {t.history.highlightTitle}
            </h2>
            <div className="space-y-4 text-sand-800 text-lg leading-relaxed">
              <p>{t.history.highlightP1}</p>
              <p>{t.history.highlightP2}</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={images.ksar}
              alt={t.history.highlightTitle}
              className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
