import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { images } from "@/data/content";
import { X } from "lucide-react";

const photos = [
  { src: images.hero, caption: "الكثبان الذهبية" },
  { src: images.rockArt, caption: "نقوش بوسمغون الصخرية" },
  { src: images.ksar, caption: "قصر الستيتن العتيق" },
  { src: images.mountain, caption: "جبل قصل وغابات الأرز" },
  { src: images.oasis, caption: "واحة النخيل" },
  { src: images.camel, caption: "قافلة الجمال" },
  { src: images.camp, caption: "مخيم تحت النجوم" },
  { src: images.suv, caption: "مغامرة في الكثبان" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <PageHeader
        title="معرض الصور"
        subtitle="جمال ولاية البيض في صور مختارة بين الصحراء والجبال والمعالم التراثية."
        image={images.oasis}
      />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-elegant transition-smooth aspect-[4/3]"
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 via-night-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-4 right-4 left-4 text-white font-bold text-start opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-smooth">
                  {p.caption}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-night-900/95 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-6 left-6 p-3 rounded-full bg-white/15 hover:bg-white/25 text-white"
            aria-label="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>
          <figure
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[active].src}
              alt={photos[active].caption}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <figcaption className="text-center text-white mt-4 font-medium">
              {photos[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
