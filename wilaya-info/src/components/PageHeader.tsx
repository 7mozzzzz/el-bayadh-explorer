type Props = {
  title: string;
  subtitle?: string;
  image: string;
};

export function PageHeader({ title, subtitle, image }: Props) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-white text-center animate-float-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-lg text-white/85">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
