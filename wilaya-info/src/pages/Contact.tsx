import { PageHeader } from "@/components/PageHeader";
import { images } from "@/data/content";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHeader
        title="تواصل معنا"
        subtitle="هل لديك سؤال أو ترغب في المساهمة بمعلومات أو صور عن ولاية البيض؟ تواصل معنا."
        image={images.ksar}
      />

      {/* CONTACT */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-sand-900 mb-3">
              معلومات التواصل
            </h2>
            <p className="text-sand-700 mb-8 leading-relaxed">
              نرحب باقتراحاتكم وتصويباتكم. هذا الموقع مشروع غير ربحي للتعريف
              بولاية البيض الجزائرية.
            </p>
            <ul className="space-y-5">
              <ContactRow
                icon={MapPin}
                label="العنوان"
                value="مدينة البيض، ولاية البيض، الجزائر"
              />
              <ContactRow
                icon={Phone}
                label="الهاتف"
                value="+213 49 00 00 00"
                href="tel:+213490000000"
              />
              <ContactRow
                icon={Mail}
                label="البريد الإلكتروني"
                value="info@elbayadh.dz"
                href="mailto:info@elbayadh.dz"
              />
            </ul>

            <div className="mt-8">
              <div className="text-sm text-sand-600 mb-3 font-semibold">
                تابعنا على
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-12 h-12 rounded-full bg-sand-100 hover:bg-sunset-500 hover:text-white text-sand-700 flex items-center justify-center transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-12 h-12 rounded-full bg-sand-100 hover:bg-sunset-500 hover:text-white text-sand-700 flex items-center justify-center transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-elegant border border-sand-100 space-y-5"
          >
            <h3 className="text-2xl font-bold text-sand-900">أرسل رسالة</h3>
            <Field label="الاسم الكامل" name="name" required />
            <Field
              label="البريد الإلكتروني"
              name="email"
              type="email"
              required
            />
            <Field label="الموضوع" name="subject" />
            <div>
              <label className="block text-sm font-semibold text-sand-800 mb-2">
                الرسالة
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:bg-white transition-smooth resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3.5 rounded-full bg-gradient-sunset text-white font-semibold shadow-elegant hover:scale-[1.02] transition-smooth"
            >
              إرسال
            </button>
            {sent && (
              <div className="text-oasis-700 bg-oasis-500/10 rounded-xl p-3 text-center text-sm font-medium">
                شكراً! تم استلام رسالتك (تجريبي).
              </div>
            )}
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-elegant border border-sand-100">
          <iframe
            title="موقع ولاية البيض على الخريطة"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-1.5%2C32.5%2C2.5%2C34.5&layer=mapnik&marker=33.6839%2C1.0192"
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-sand-800 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:bg-white transition-smooth"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <div className="w-12 h-12 rounded-xl bg-gradient-sunset text-white flex items-center justify-center shrink-0 shadow-warm">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs text-sand-600 mb-1">{label}</div>
        <div className="font-bold text-sand-900">{value}</div>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          className="flex items-center gap-4 hover:text-sunset-700 transition-smooth"
        >
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4">{inner}</div>
      )}
    </li>
  );
}
