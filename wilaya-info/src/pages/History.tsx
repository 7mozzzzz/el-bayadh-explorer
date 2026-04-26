import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { historyTimeline, images } from "@/data/content";

export default function History() {
  return (
    <>
      <PageHeader
        title="تاريخ ولاية البيض"
        subtitle="من النقوش الصخرية لما قبل التاريخ، إلى ثورات التحرير وميلاد الولاية الحديثة."
        image={images.rockArt}
      />

      {/* INTRO */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-700 text-xs font-semibold mb-3 uppercase tracking-wider">
            عبر العصور
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
            أرض شهدت آلاف السنين من الحضارة
          </h2>
          <p className="text-lg text-sand-700 leading-relaxed">
            تختزن أرض البيض ذاكرة طويلة من الحضارات: من إنسان ما قبل التاريخ
            الذي ترك نقوشه على صخور بوسمغون، إلى القبائل الأمازيغية والقصور
            الإسلامية، وصولاً إلى ملاحم المقاومة ضد الاستعمار الفرنسي ومساهمتها
            في ثورة التحرير المظفرة.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-12 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="الخط الزمني" title="محطات تاريخية" />
          <div className="relative mt-16">
            <div className="absolute top-0 bottom-0 right-7 w-0.5 bg-sand-300" />
            <div className="space-y-10">
              {historyTimeline.map((e, i) => (
                <article
                  key={i}
                  className="relative ps-20 animate-float-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="absolute right-0 top-0 w-14 h-14 rounded-full bg-gradient-sunset flex items-center justify-center text-white font-extrabold shadow-elegant">
                    {i + 1}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-warm border border-sand-100">
                    <div className="text-xs font-semibold text-sunset-700 uppercase tracking-wider mb-2">
                      {e.era}
                    </div>
                    <h3 className="text-xl font-bold text-sand-900 mb-3">
                      {e.title}
                    </h3>
                    <p className="text-sand-700 leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-700 text-xs font-semibold mb-3 uppercase tracking-wider">
              إرث المقاومة
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
              ثورة أولاد سيدي الشيخ
            </h2>
            <div className="space-y-4 text-sand-800 text-lg leading-relaxed">
              <p>
                تُعدّ ثورة أولاد سيدي الشيخ (1864 - 1881) من أطول الثورات
                الشعبية الجزائرية ضد الاستعمار الفرنسي. انطلقت من البيض بقيادة
                سي سليمان بن حمزة وامتدت إلى الجنوب الغربي للجزائر وشمال
                المغرب.
              </p>
              <p>
                كان أبناء البيض في طليعة المقاومين، مسخّرين معرفتهم بدروب
                الصحراء لشنّ هجمات سريعة ثم الاختفاء. أصبحت الولاية أيضاً جزءاً
                من الولاية التاريخية الخامسة خلال ثورة التحرير (1954-1962).
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={images.ksar}
              alt="قصر الستيتن"
              className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
