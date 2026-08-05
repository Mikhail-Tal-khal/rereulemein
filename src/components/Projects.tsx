import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { projects } from "@/data/profile";
import { accentAt } from "@/lib/accents";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      accent="violet"
      title="Projects"
      lede="Security tooling, detection work, and the products that taught me where money actually leaks."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => {
          const tone = accentAt(index);

          return (
            <Reveal key={project.name} delay={(index % 2) * 80}>
              <article
                className={`group relative h-full overflow-hidden rounded-sm border border-line/80 bg-surface/50 p-7 transition-all duration-300 hover:-translate-y-0.5 ${tone.borderHover}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100 ${tone.from}`}
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25 ${tone.bgSolid}`}
                />

                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-medium tracking-tight text-bone">
                      {project.name}
                    </h3>
                    {project.status ? (
                      <span className="flex items-center gap-1.5 rounded-sm border border-jade/30 bg-jade/[0.07] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-jade">
                        <span className="relative flex h-1 w-1">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-jade animate-ping-soft" />
                          <span className="relative inline-flex h-1 w-1 rounded-full bg-jade" />
                        </span>
                        {project.status}
                      </span>
                    ) : null}
                  </div>

                  <p className={`mt-1.5 font-mono text-xs tracking-wide ${tone.text}`}>
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
                          className={`mt-2 h-px w-3.5 shrink-0 opacity-60 ${tone.bgSolid}`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
