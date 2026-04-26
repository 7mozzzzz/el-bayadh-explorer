# ولاية البيض — بوابة المعلومات الشاملة

موقع ويب شامل عن ولاية البيض في الجزائر، يغطي الجغرافيا، التاريخ، الثقافة، الاقتصاد، والسياحة.

## التقنيات المستخدمة

- [Vite](https://vitejs.dev/) — أداة بناء سريعة
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) — تنسيق
- [react-router-dom](https://reactrouter.com/) — توجيه
- [lucide-react](https://lucide.dev/) — أيقونات
- خط [Cairo](https://fonts.google.com/specimen/Cairo) من Google Fonts

## التشغيل المحلي

```bash
npm install
npm run dev
```

ثم افتح <http://localhost:5173>.

## بناء النسخة الإنتاجية

```bash
npm run build
npm run preview
```

## الصفحات

- **/** — الرئيسية (نظرة عامة + روابط سريعة)
- **/about** — عن الولاية (جغرافيا، حقائق، تقسيم إداري)
- **/history** — التاريخ (خط زمني + ثورات)
- **/culture** — الثقافة والتراث
- **/economy** — الاقتصاد (قطاعات + تربية المواشي + طاقات متجددة)
- **/tourism** — السياحة (معالم + باقات + نصائح)
- **/gallery** — معرض صور
- **/contact** — تواصل

## البنية

```
src/
├── App.tsx              # الموجّه الرئيسي
├── main.tsx             # نقطة الدخول
├── index.css            # تنسيقات Tailwind + الثيم
├── assets/              # الصور
├── components/          # Navbar, Footer, SectionHeader, PageHeader
├── data/content.ts      # كل المحتوى المهيكل (سهل التعديل)
└── pages/               # صفحات الموقع
```

## التعديل

كل المحتوى النصي والقوائم والمعلومات موجودة في `src/data/content.ts`. عدّلها لتغيير المحتوى بدون لمس الكود.
