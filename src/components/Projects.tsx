import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      title="Projects"
      lede="Security tooling, detection work, and the products that taught me where money actually leaks."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={(index % 2) * 80}>
            <article className="group relative h-full overflow-hidden rounded-sm border border-line/80 bg-surface/50 p-7 transition-colors duration-300 hover:border-bronze/40">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-bronze/[0.06] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-medium tracking-tight text-bone">
                    {project.name}
                  </h3>
                  {project.status ? (
                    <span className="rounded-sm border border-signal/30 bg-signal/[0.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-signal/90">
                      {project.status}
                    </span>
                  ) : null}
                </div>

                <p className="mt-1.5 font-mono text-xs tracking-wide text-bronze/80">
                  {project.stack}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {project.points.map((point) => (
                    <li
                      key={point.slice(0, 28)}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-3.5 shrink-0 bg-line"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
