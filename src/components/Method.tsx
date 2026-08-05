import EscapeLocks from "@/components/EscapeLocks";
import LiveBoard from "@/components/LiveBoard";
import Meditations from "@/components/Meditations";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { chess, philosophy, profile } from "@/data/profile";
import { accents, type AccentKey } from "@/lib/accents";

type PointsProps = {
  points: readonly { heading: string; body: string }[];
  accent: AccentKey;
};

function Points({ points, accent }: PointsProps) {
  const tone = accents[accent];

  return (
    <ul className="space-y-7">
      {points.map((point) => (
        <li key={point.heading} className="border-l border-line/70 pl-5">
          <h4 className={`text-[15px] font-medium ${tone.text}`}>
            {point.heading}
          </h4>
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
  accent: AccentKey;
  piece: string;
};

function BlockHeader({ kicker, title, subtitle, accent, piece }: BlockProps) {
  const tone = accents[accent];

  return (
    <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
      <span
        aria-hidden="true"
        className={`flex h-9 w-9 items-center justify-center rounded-sm border text-lg leading-none ${tone.border} ${tone.bg} ${tone.text}`}
      >
        {piece}
      </span>
      <span
        className={`font-mono text-[11px] uppercase tracking-[0.24em] ${tone.text}`}
      >
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
      accent="amber"
      title="Method"
      lede="Three habits that predate the job and explain most of how I do it. None of them are hobbies exactly — they are the same instinct pointed at different rooms."
    >
      <div className="space-y-20 lg:space-y-28">
        <div>
          <BlockHeader
            kicker="Philosophy"
            title="Marcus Aurelius"
            subtitle="the emperor writing notes to himself"
            accent="violet"
            piece="♚"
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <Meditations />
            </Reveal>
            <Reveal delay={120}>
              <Points points={philosophy} accent="violet" />
            </Reveal>
          </div>
        </div>

        <div>
          <BlockHeader
            kicker="Chess"
            title="Reading the position"
            subtitle="the board is an attack surface"
            accent="bronze"
            piece="♞"
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal delay={80}>
              <Points points={chess} accent="bronze" />
              <p className="mt-8 rounded-sm border border-bronze/25 bg-gradient-to-br from-bronze/[0.08] to-transparent p-5 text-sm leading-relaxed text-muted">
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
              <LiveBoard />
            </Reveal>
          </div>
        </div>

        <div>
          <BlockHeader
            kicker="Escape rooms"
            title="Working a locked room"
            subtitle="constraints, observation, and saying it out loud"
            accent="jade"
            piece="♜"
          />
          <Reveal>
            <EscapeLocks />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
