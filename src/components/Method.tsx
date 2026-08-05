import EscapeLocks from "@/components/EscapeLocks";
import KnightBoard from "@/components/KnightBoard";
import Meditations from "@/components/Meditations";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { chess, philosophy, profile } from "@/data/profile";

type PointsProps = {
  points: readonly { heading: string; body: string }[];
};

function Points({ points }: PointsProps) {
  return (
    <ul className="space-y-7">
      {points.map((point) => (
        <li key={point.heading}>
          <h4 className="text-[15px] font-medium text-bone">{point.heading}</h4>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            {point.body}
          </p>
        </li>
      ))}
    </ul>
  );
}

type BlockProps = {
  kicker: string;
  title: string;
  subtitle: string;
};

function BlockHeader({ kicker, title, subtitle }: BlockProps) {
  return (
    <div className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-bronze/80">
        {kicker}
      </span>
      <h3 className="text-2xl font-medium tracking-tight text-bone">{title}</h3>
      <p className="font-serif text-lg italic text-muted">{subtitle}</p>
    </div>
  );
}

export default function Method() {
  return (
    <Section
      id="method"
      index="05"
      title="Method"
      lede="Three habits that predate the job and explain most of how I do it. None of them are hobbies exactly — they are the same instinct pointed at different rooms."
    >
      <div className="space-y-20 lg:space-y-28">
        <div>
          <BlockHeader
            kicker="Philosophy"
            title="Marcus Aurelius"
            subtitle="the emperor writing notes to himself"
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <Meditations />
            </Reveal>
            <Reveal delay={120}>
              <Points points={philosophy} />
            </Reveal>
          </div>
        </div>

        <div>
          <BlockHeader
            kicker="Chess"
            title="Reading the position"
            subtitle="the board is an attack surface"
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal delay={80}>
              <Points points={chess} />
              <p className="mt-8 rounded-sm border border-line/70 bg-surface/40 p-5 text-sm leading-relaxed text-muted">
                <span className="font-mono text-xs text-bronze">
                  {profile.githubHandle}
                </span>{" "}
                is not a random handle. Mikhail Tal won a world championship by
                steering games into positions nobody could calculate cleanly —
                including him. Sound risk, taken deliberately, with the nerve to
                hold the resulting mess.
              </p>
            </Reveal>
            <Reveal>
              <KnightBoard />
            </Reveal>
          </div>
        </div>

        <div>
          <BlockHeader
            kicker="Escape rooms"
            title="Working a locked room"
            subtitle="constraints, observation, and saying it out loud"
          />
          <Reveal>
            <EscapeLocks />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
