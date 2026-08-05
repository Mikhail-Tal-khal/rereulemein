import { metrics, profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="board-field pointer-events-none absolute inset-0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-bronze/[0.07] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-bronze/90 animate-fade-in">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal animate-pulse-slow" />
          </span>
          {profile.location}
        </p>

        <h1 className="mt-7 max-w-4xl text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl animate-fade-up">
          {profile.name}
        </h1>

        <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-bone/90 sm:text-xl">
          <span>{profile.role}</span>
          {profile.focus.map((item) => (
            <span key={item} className="flex items-center gap-3">
              <span className="text-bronze/50" aria-hidden="true">
                /
              </span>
              <span className="text-muted">{item}</span>
            </span>
          ))}
        </p>

        <p className="mt-10 max-w-2xl font-serif text-2xl italic leading-snug text-bone/95 sm:text-3xl">
          {profile.tagline}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          {profile.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-sm border border-bronze/60 bg-bronze/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-bronze transition-colors hover:bg-bronze/20"
          >
            See the work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-sm border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:border-bone/40 hover:text-bone"
          >
            GitHub ↗
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:border-bone/40 hover:text-bone"
          >
            Get in touch
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line/80 bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.value} className="bg-ink/90 px-6 py-7">
              <dt className="font-mono text-3xl text-bronze">{metric.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
