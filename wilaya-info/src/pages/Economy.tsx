import { PageHeader } from "@/components/PageHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { economySectors, images } from "@/data/content";
import {
  Wheat,
  Factory,
  Hammer,
  MountainSnow,
  Fuel,
  TreePine,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  wheat: Wheat,
  factory: Factory,
  hammer: Hammer,
  "mountain-snow": MountainSnow,
  fuel: Fuel,
  "tree-pine": TreePine,
};

export default function Economy() {
  return (
    <>
      <PageHeader
        title="اقتصاد ولاية البيض"
        subtitle="اقتصاد متنوع يجمع بين الزراعة الرعوية، الصناعات التقليدية، السياحة، والاستثمار في الطاقات المتجددة."
        image={images.hero}
      />

      {/* INTRO */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
            قاعدة اقتصادية متنوعة وواعدة
          </h2>
          <p className="text-lg text-sand-700 leading-relaxed">
            يستند اقتصاد ولاية البيض إلى ثروة طبيعية متنوعة: مراعٍ شاسعة لتربية
            المواشي، ثروة معدنية وغابية، إضافة إلى موروث غني من الصناعات
            التقليدية. كما تتجه الولاية بثقة نحو الطاقات المتجددة والسياحة
            البيئية كقطاعات مستقبلية.
          </p>
        </div>
      </section>

      {/* SECTORS GRID */}
      <section className="py-12 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="القطاعات" title="ستة قطاعات رئيسية" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {economySectors.map((s) => {
              const Icon = iconMap[s.icon] ?? Factory;
              return (
                <article
                  key={s.title}
                  className="bg-white rounded-2xl p-7 shadow-warm border border-sand-200/60 hover:shadow-elegant hover:-translate-y-1 transition-smooth"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-sunset text-white flex items-center justify-center shadow-elegant">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xl font-extrabold text-gradient-sunset">
                      {s.share}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-sand-900 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sand-700 leading-relaxed">
                    {s.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT: LIVESTOCK */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-700 text-xs font-semibold mb-3 uppercase tracking-wider">
              العمود الفقري
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
              تربية المواشي: الإرث والاقتصاد
            </h2>
            <div className="space-y-4 text-sand-800 text-lg leading-relaxed">
              <p>
                تتربع ولاية البيض على عرش تربية الأغنام في الجزائر بأكثر من 2
                مليون رأس، تستفيد من السهوب الرعوية الشاسعة ونبتة الحلفاء.
                الإنتاج المحلي يُغطي جزءاً من حاجيات السوق الوطنية من اللحوم
                الحمراء.
              </p>
              <p>
                إلى جانب ذلك، تُمارَس الزراعة في الواحات والمناطق المسقية، خاصة
                إنتاج الحبوب والتمور وبعض الفواكه المتأقلمة مع المناخ الجاف.
              </p>
            </div>
          </div>
          <img
            src={images.oasis}
            alt="مراع وزراعة في البيض"
            className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* SOLAR */}
      <section className="py-20 px-6 lg:px-10 bg-sand-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={images.hero}
            alt="طاقة شمسية"
            className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full bg-oasis-500/10 text-oasis-700 text-xs font-semibold mb-3 uppercase tracking-wider">
              المستقبل الأخضر
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
              الطاقات المتجددة
            </h2>
            <div className="space-y-4 text-sand-800 text-lg leading-relaxed">
              <p>
                بفضل ارتفاع نسبة الإشعاع الشمسي وتوفّر مساحات مفتوحة شاسعة،
                تُعدّ ولاية البيض من المناطق الواعدة في الجزائر لاستضافة محطات
                الطاقة الشمسية الكبرى ضمن المخطط الوطني للطاقات المتجددة.
              </p>
              <p>
                هذه التحولات تَعِد بفرص عمل جديدة وتنويع للاقتصاد المحلي،
                وتنسجم مع رؤية الجزائر للانتقال الطاقوي بحلول 2030.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
