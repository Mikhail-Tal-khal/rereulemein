import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  lede?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  index,
  title,
  lede,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-t border-line/70 px-6 py-20 sm:px-10 lg:px-16 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-12 lg:mb-16">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-bronze/80">
              {index}
            </span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
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
