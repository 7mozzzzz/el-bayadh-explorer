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

export default function About() {
  return (
    <>
      <PageHeader
        title="عن ولاية البيض"
        subtitle="نظرة شاملة على الموقع الجغرافي، التضاريس، المناخ، والتقسيم الإداري لولاية البيض."
        image={images.mountain}
      />

      {/* INTRO */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-700 text-xs font-semibold mb-3 uppercase tracking-wider">
              نظرة عامة
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-sand-900 mb-6 leading-tight">
              ولاية في قلب الأطلس الصحراوي
            </h2>
            <div className="space-y-4 text-sand-800 text-lg leading-relaxed">
              <p>
                تقع ولاية البيض في الجنوب الغربي للجزائر، وتمتدّ على مساحة
                شاسعة من السهول العليا إلى الكثبان الرملية. عاصمتها مدينة البيض
                التي تجمع بين العمق التاريخي والحداثة العمرانية.
              </p>
              <p>
                تتميّز الولاية بتنوّع تضاريسها: جبال الأطلس الصحراوي شمالاً،
                هضاب وسهوب رعوية في الوسط، وكثبان رملية وواحات في الجنوب. هذا
                التنوع جعل منها بيئة فريدة جامعة للمناظر الجبلية والصحراوية في
                آن واحد.
              </p>
              <p>
                يحدّها من الشمال ولاية سعيدة، ومن الشرق الأغواط، ومن الغرب نعامة
                وتلمسان، ومن الجنوب أدرار وبشار. هذا الموقع جعلها معبراً
                تاريخياً للقوافل بين الشمال والصحراء.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={images.oasis}
              alt="منظر طبيعي في البيض"
              className="rounded-3xl shadow-elegant w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -start-6 bg-white rounded-2xl p-5 shadow-elegant border border-sand-100 max-w-xs">
              <div className="text-xs text-sand-600 mb-1">رمز الولاية</div>
              <div className="text-3xl font-extrabold text-gradient-sunset">
                32
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS GRID */}
      <section className="py-20 px-6 lg:px-10 bg-gradient-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="بطاقة تعريف"
            title="معلومات أساسية"
            subtitle="أبرز الأرقام والحقائق التي تميّز ولاية البيض."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            <Fact icon={Map} label="المساحة" value={wilayaFacts.area} />
            <Fact
              icon={Building2}
              label="عدد السكان"
              value={wilayaFacts.population}
            />
            <Fact
              icon={Globe2}
              label="الكثافة السكانية"
              value={wilayaFacts.density}
            />
            <Fact icon={MapPin} label="العاصمة" value={wilayaFacts.capital} />
            <Fact
              icon={Building2}
              label="التقسيم"
              value={`${wilayaFacts.daira} • ${wilayaFacts.communes}`}
            />
            <Fact
              icon={Mountain}
              label="الارتفاع"
              value={wilayaFacts.altitude}
            />
            <Fact
              icon={Thermometer}
              label="المناخ"
              value={wilayaFacts.climate}
            />
            <Fact
              icon={Languages}
              label="اللغات المتداولة"
              value={wilayaFacts.language}
            />
            <Fact icon={Globe2} label="رمز الولاية" value={wilayaFacts.code} />
          </div>
        </div>
      </section>

      {/* GEOGRAPHY */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="جغرافيا وتضاريس"
            title="تنوع جغرافي فريد"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            <GeoCard
              title="الجبال"
              text="جبال الأطلس الصحراوي شمالاً، أبرزها جبل قصل (2008م) وجبل عيسى. غابات أرز وصنوبر وثلوج شتوية."
              image={images.mountain}
            />
            <GeoCard
              title="السهوب والهضاب"
              text="سهوب رعوية شاسعة بنبتة الحلفاء، تشكل عماد تربية المواشي. مساحات مفتوحة بألوان ذهبية متغيرة فصلياً."
              image={images.hero}
            />
            <GeoCard
              title="الصحراء والواحات"
              text="جنوب الولاية تمتد الكثبان الرملية والصحراء، وتنتشر الواحات كنقاط حياة بالنخيل والعيون الطبيعية."
              image={images.oasis}
            />
          </div>
        </div>
      </section>

      {/* ADMINISTRATIVE */}
      <section className="py-20 px-6 lg:px-10 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="التقسيم الإداري"
            title="الدوائر والبلديات"
            subtitle="تتكون ولاية البيض من 8 دوائر تضمّ 22 بلدية."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {dairas.map((d) => (
              <div
                key={d.name}
                className="bg-white rounded-2xl p-6 shadow-warm border border-sand-200/60 hover:shadow-elegant transition-smooth"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-sunset-500/10 text-sunset-700 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sand-900">دائرة {d.name}</h3>
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
