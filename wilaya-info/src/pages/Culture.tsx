import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { cultureItems, images } from "@/data/content";
import {
  Music,
  Palette,
  Utensils,
  Shirt,
  Calendar,
  Swords,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  music: Music,
  palette: Palette,
  utensils: Utensils,
  shirt: Shirt,
  calendar: Calendar,
  sword: Swords,
};

export default function Culture() {
  return (
    <>
      <PageHeader
        title="الثقافة والتراث"
        subtitle="موروث غني تتمازج فيه الجذور الأمازيغية والعربية البدوية، يُترجَم في الموسيقى والصناعات اليدوية والمطبخ والأعراس."
        image={images.ksar}
      />

      {/* INTRO */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
            ثقافة عريقة وضيافة لا تُنسى
          </h2>
          <p className="text-lg text-sand-700 leading-relaxed">
            ولاية البيض ملتقى ثقافي حيث تُحافظ القبائل الأمازيغية والعربية على
            عاداتها العريقة. كل تفصيل — من البرنوس إلى الزربية، ومن الفنطازية
            إلى الكسكس — يحكي قصة شعب صنع ثقافته من رمال الصحراء وقمم الأطلس.
          </p>
        </div>
      </section>

      {/* CARDS GRID */}
      <section className="py-12 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="ركائز الثقافة" title="ستة جوانب أساسية" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {cultureItems.map((c) => {
              const Icon = iconMap[c.icon] ?? Music;
              return (
                <article
                  key={c.title}
                  className="bg-white rounded-2xl p-7 shadow-warm border border-sand-200/60 hover:shadow-elegant hover:-translate-y-1 transition-smooth"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-sunset text-white flex items-center justify-center mb-5 shadow-elegant">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-sand-900 mb-3">
                    {c.title}
                  </h3>
                  <p className="text-sand-700 leading-relaxed">
                    {c.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURE: HOSPITALITY */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={images.camp}
            alt="ضيافة في الصحراء"
            className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover"
          />
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-700 text-xs font-semibold mb-3 uppercase tracking-wider">
              ضيافة بدوية
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
              الضيف عزيز عند أهل البيض
            </h2>
            <div className="space-y-4 text-sand-800 text-lg leading-relaxed">
              <p>
                تُعدّ الضيافة قيمة محورية في ثقافة البيض. يُستقبل الضيف بكأس شاي
                أحمر مع قطعة من الكسرة، وتُذبح الذبيحة كرامةً للوافد البعيد.
              </p>
              <p>
                المجالس البدوية تستمر طويلاً في تبادل الشعر والقصص، وتجد فيها
                الجلد المفروش على الرمل تحت سماء النجوم تجربة لا تتكرر إلا في
                هذه الديار.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
