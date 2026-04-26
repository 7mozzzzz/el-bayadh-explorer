type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-start"
      }`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-700 text-xs font-semibold mb-3 uppercase tracking-wider">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sand-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-sand-700 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
