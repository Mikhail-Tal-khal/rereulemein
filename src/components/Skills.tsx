import { icons } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { skills } from "@/data/profile";
import { accents } from "@/lib/accents";

export default function Skills() {
  return (
    <Section
      id="arsenal"
      index="02"
      accent="ember"
      title="Arsenal"
      lede="The first three are where the work lives. The rest is what it is built on."
      className="board-field"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => {
          const accent = accents[group.accent];
          const Icon = icons[group.icon];

          return (
            <Reveal key={group.group} delay={(index % 3) * 70}>
              <article
                className={`group relative h-full overflow-hidden rounded-sm border bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-0.5 ${accent.border} ${accent.borderHover} ${
                  group.primary ? accent.bg : ""
                }`}
              >
                {/* Piece watermark — the group's rank on the board. */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-3 -top-5 select-none text-[5.5rem] leading-none opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.14] ${accent.text}`}
                >
                  {group.piece}
                </span>

                <div className="relative flex items-start justify-between gap-4">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border ${accent.border} ${accent.bg} ${accent.text} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </span>

                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`font-mono text-[10px] tracking-[0.22em] ${accent.text} opacity-70`}
                    >
                      {group.kicker}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted/50">
                      {group.pieceName}
                    </span>
                  </div>
                </div>

                <h3
                  className={`relative mt-5 text-[15px] font-medium leading-snug ${
                    group.primary ? accent.text : "text-bone"
                  }`}
                >
                  {group.group}
                </h3>

                <ul className="relative mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-line/70 bg-ink/70 px-2.5 py-1 font-mono text-[11px] leading-relaxed text-muted transition-colors duration-200 hover:border-bone/25 hover:text-bone"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
