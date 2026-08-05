import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { certifications, community, education, languages } from "@/data/profile";

export default function Credentials() {
  return (
    <Section
      id="credentials"
      index="06"
      title="Credentials"
      lede="Certifications, education, and the part of the work that happens in a room full of people who are not engineers."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <Reveal key={cert.name} delay={index * 80}>
              <div className="rounded-sm border border-line/80 bg-surface/50 p-6">
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 text-bronze">
                    &#9670;
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium text-bone">
                      {cert.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {cert.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={160}>
            <div className="rounded-sm border border-line/80 bg-surface/50 p-6">
              <h3 className="text-[15px] font-medium text-bone">
                {education.school}
              </h3>
              <p className="mt-1 font-mono text-xs tracking-wide text-bronze/80">
                {education.award}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {education.coursework}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="border-l border-line/70 pl-6 sm:pl-8">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Leadership &amp; community
            </h3>
            <ul className="mt-6 space-y-6">
              {community.map((item) => (
                <li
                  key={item.slice(0, 24)}
                  className="text-[15px] leading-relaxed text-bone/80"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Languages
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-bone/80">
              {languages}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
