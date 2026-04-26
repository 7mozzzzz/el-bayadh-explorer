import { PageHeader } from "@/components/PageHeader";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { images } from "@/data/content";
import { useI18n } from "@/i18n/I18nProvider";

export default function Contact() {
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t.contact.title} subtitle={t.contact.subtitle} image={images.ksar} />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-elegant border border-sand-200/60">
            <h2 className="text-3xl font-bold text-sand-900 mb-3">{t.contact.infoTitle}</h2>
            <p className="text-sand-700 leading-relaxed mb-8">{t.contact.infoLead}</p>
            <ul className="space-y-5 text-sand-800">
              <li className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-sunset flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-sand-600 mb-0.5">{t.contact.address}</div>
                  <div className="font-semibold">{t.contact.addressValue}</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-sunset flex items-center justify-center text-white shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-sand-600 mb-0.5">{t.contact.phone}</div>
                  <div className="font-semibold" dir="ltr">+213 49 00 00 00</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-sunset flex items-center justify-center text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-sand-600 mb-0.5">{t.contact.email}</div>
                  <div className="font-semibold">info@elbayadh.dz</div>
                </div>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-sand-200">
              <div className="text-xs text-sand-600 mb-3 uppercase tracking-wider font-semibold">
                {t.contact.follow}
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-xl bg-sand-100 hover:bg-sunset-500 hover:text-white text-sand-800 flex items-center justify-center transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-xl bg-sand-100 hover:bg-sunset-500 hover:text-white text-sand-800 flex items-center justify-center transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-20">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-elegant border border-sand-200/60">
          <iframe
            title={t.contact.mapTitle}
            src="https://www.openstreetmap.org/export/embed.html?bbox=0.0%2C32.4%2C2.5%2C34.2&layer=mapnik&marker=33.6803%2C1.0167"
            className="w-full h-[400px] border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
