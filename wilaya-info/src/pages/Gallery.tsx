import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { images } from "@/data/content";
import { X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const photoSrcs = [
  images.hero,
  images.rockArt,
  images.ksar,
  images.mountain,
  images.oasis,
  images.camel,
  images.camp,
  images.suv,
];

export default function Gallery() {
  const { t } = useI18n();
  const [active, setActive] = useState<number | null>(null);
  const captions = t.gallery.photos;

  return (
    <>
      <PageHeader title={t.gallery.title} subtitle={t.gallery.subtitle} image={images.oasis} />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photoSrcs.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-elegant transition-smooth aspect-[4/3]"
              >
                <img
                  src={src}
                  alt={captions[i]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900/80 via-night-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-4 end-4 start-4 text-white font-bold text-start opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-smooth">
                  {captions[i]}
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
            className="absolute top-6 end-6 p-3 rounded-full bg-white/15 hover:bg-white/25 text-white"
            aria-label={t.gallery.closeAria}
          >
            <X className="w-6 h-6" />
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photoSrcs[active]}
              alt={captions[active]}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <figcaption className="text-center text-white mt-4 font-medium">
              {captions[active]}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
