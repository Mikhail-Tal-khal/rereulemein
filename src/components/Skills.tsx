import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section
      id="arsenal"
      index="02"
      title="Arsenal"
      lede="The first three are where the work lives. The rest is what it is built on."
      className="board-field"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal key={group.group} delay={(index % 3) * 70}>
            <div
              className={`h-full rounded-sm border p-6 transition-colors duration-300 ${
                group.primary
                  ? "border-bronze/30 bg-bronze/[0.04] hover:border-bronze/60"
                  : "border-line/80 bg-surface/60 hover:border-bone/25"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3
                  className={`text-[15px] font-medium ${
                    group.primary ? "text-bronze" : "text-bone"
                  }`}
                >
                  {group.group}
                </h3>
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted/60">
                  {group.kicker}
                </span>
              </div>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-line/70 bg-ink/60 px-2.5 py-1 font-mono text-[11px] leading-relaxed text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
