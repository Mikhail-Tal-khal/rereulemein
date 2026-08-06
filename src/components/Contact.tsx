import { ArrowUpRight, Mail } from "@/components/Icons";
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
        className="aurora pointer-events-none absolute inset-0 animate-drift opacity-80"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-plasma">
            <span className="flex h-7 items-center rounded-sm border border-plasma/35 bg-plasma/[0.07] px-2.5">
              07
            </span>
            Contact
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Open to security work, investigative work, and anything that needs
            somebody who has built the thing before testing it.
          </h2>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2.5 rounded-sm border border-bronze/60 bg-gradient-to-r from-bronze/20 via-amber/15 to-ember/10 px-6 py-3 font-mono text-sm text-bronze transition-colors hover:from-bronze/30 hover:via-amber/25 hover:to-ember/20"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-2 rounded-sm border border-line px-6 py-3 font-mono text-sm text-muted transition-colors hover:border-violet/50 hover:text-violet"
            >
              {profile.githubHandle}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
