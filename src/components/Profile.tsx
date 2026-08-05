import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { strengths, summary } from "@/data/profile";

export default function Profile() {
  return (
    <Section
      id="profile"
      index="01"
      title="Profile"
      lede="Offensive security with a builder's history behind it."
    >
      <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div className="space-y-6">
          {summary.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 90}>
              <p className="text-[17px] leading-[1.75] text-bone/85">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <ul className="divide-y divide-line/70 border-y border-line/70">
            {strengths.map((strength) => (
              <li key={strength.title} className="group py-5">
                <h3 className="flex items-baseline gap-3 text-[15px] font-medium text-bone">
                  <span
                    aria-hidden="true"
                    className="text-bronze/70 transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    &#9642;
                  </span>
                  {strength.title}
                </h3>
                <p className="mt-2 pl-6 text-sm leading-relaxed text-muted">
                  {strength.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
