// Design: 「素笺」Eastern Scholar's Studio Aesthetic
// Section title with vertical decorative text and fine line

import ScrollReveal from "./ScrollReveal";

interface SectionTitleProps {
  title: string;
  titleEn: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  titleEn,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <ScrollReveal>
      <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
        {/* English label */}
        <p className="font-serif-en text-xs text-indigo/60 tracking-[0.25em] uppercase mb-2">
          {titleEn}
        </p>
        {/* Chinese title */}
        <h2 className="font-wenkai text-2xl md:text-3xl text-ink font-bold tracking-wide">
          {title}
        </h2>
        {/* Subtitle */}
        {subtitle && (
          <p className="mt-3 text-sm text-ink-light leading-relaxed max-w-lg">
            {subtitle}
          </p>
        )}
        {/* Decorative line */}
        <div
          className={`mt-4 flex items-center gap-2 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <div className="w-8 h-px bg-indigo/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
          <div className="w-16 h-px bg-indigo/20" />
        </div>
      </div>
    </ScrollReveal>
  );
}
