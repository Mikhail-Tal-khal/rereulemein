import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line/70 px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="rule-grid pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-14rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-bronze/[0.07] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-bronze/80">
            07 / Contact
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Open to security work, investigative work, and anything that needs
            somebody who has built the thing before testing it.
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-sm border border-bronze/60 bg-bronze/10 px-6 py-3 font-mono text-sm text-bronze transition-colors hover:bg-bronze/20"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-sm border border-line px-6 py-3 font-mono text-sm text-muted transition-colors hover:border-bone/40 hover:text-bone"
            >
              {profile.githubHandle} ↗
            </a>
          </div>

          <p className="mt-10 max-w-xl font-serif text-lg italic leading-relaxed text-muted">
            Detailed particulars, referees and verification documents on request
            — not on a public page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
