import type { ReactNode } from "react";
import { accents, type AccentKey } from "@/lib/accents";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  lede?: string;
  children: ReactNode;
  className?: string;
  accent?: AccentKey;
};

export default function Section({
  id,
  index,
  title,
  lede,
  children,
  className = "",
  accent = "bronze",
}: SectionProps) {
  const tone = accents[accent];

  return (
    <section
      id={id}
      className={`relative border-t border-line/70 px-6 py-20 sm:px-10 lg:px-16 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-12 lg:mb-16">
          <div className="flex items-center gap-4">
            <span
              className={`flex h-7 items-center rounded-sm border px-2.5 font-mono text-[11px] tracking-[0.24em] ${tone.border} ${tone.bg} ${tone.text}`}
            >
              {index}
            </span>
            <span
              aria-hidden="true"
              className={`h-px flex-1 bg-gradient-to-r to-transparent ${tone.from}`}
            />
          </div>
          <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
            {title}
          </h2>
          {lede ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {lede}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
