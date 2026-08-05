/**
 * One hue per domain, reused everywhere that domain appears.
 *
 * Every class is written out in full — Tailwind scans source text, so a
 * composed string like `text-${hue}` would never make it into the build.
 */

export type Accent = {
  key: string;
  /** Hex, for canvas/SVG/inline shadows where a class will not do. */
  hex: string;
  text: string;
  border: string;
  borderHover: string;
  bg: string;
  bgSolid: string;
  ring: string;
  glow: string;
  /** Gradient start, for hairlines and washes. */
  from: string;
};

export const accents = {
  bronze: {
    key: "bronze",
    hex: "#d4a75a",
    text: "text-bronze",
    border: "border-bronze/35",
    borderHover: "hover:border-bronze/70",
    bg: "bg-bronze/[0.07]",
    bgSolid: "bg-bronze",
    ring: "ring-bronze/30",
    from: "from-bronze/70",
    glow: "shadow-[0_0_38px_-12px_var(--color-bronze)]",
  },
  ember: {
    key: "ember",
    hex: "#ff7a45",
    text: "text-ember",
    border: "border-ember/35",
    borderHover: "hover:border-ember/70",
    bg: "bg-ember/[0.07]",
    bgSolid: "bg-ember",
    ring: "ring-ember/30",
    from: "from-ember/70",
    glow: "shadow-[0_0_38px_-12px_var(--color-ember)]",
  },
  crimson: {
    key: "crimson",
    hex: "#fb5f7a",
    text: "text-crimson",
    border: "border-crimson/35",
    borderHover: "hover:border-crimson/70",
    bg: "bg-crimson/[0.07]",
    bgSolid: "bg-crimson",
    ring: "ring-crimson/30",
    from: "from-crimson/70",
    glow: "shadow-[0_0_38px_-12px_var(--color-crimson)]",
  },
  violet: {
    key: "violet",
    hex: "#a78bfa",
    text: "text-violet",
    border: "border-violet/35",
    borderHover: "hover:border-violet/70",
    bg: "bg-violet/[0.07]",
    bgSolid: "bg-violet",
    ring: "ring-violet/30",
    from: "from-violet/70",
    glow: "shadow-[0_0_38px_-12px_var(--color-violet)]",
  },
  azure: {
    key: "azure",
    hex: "#5aa9ff",
    text: "text-azure",
    border: "border-azure/35",
    borderHover: "hover:border-azure/70",
    bg: "bg-azure/[0.07]",
    bgSolid: "bg-azure",
    ring: "ring-azure/30",
    from: "from-azure/70",
    glow: "shadow-[0_0_38px_-12px_var(--color-azure)]",
  },
  jade: {
    key: "jade",
    hex: "#4ade80",
    text: "text-jade",
    border: "border-jade/35",
    borderHover: "hover:border-jade/70",
    bg: "bg-jade/[0.07]",
    bgSolid: "bg-jade",
    ring: "ring-jade/30",
    from: "from-jade/70",
    glow: "shadow-[0_0_38px_-12px_var(--color-jade)]",
  },
  signal: {
    key: "signal",
    hex: "#5eead4",
    text: "text-signal",
    border: "border-signal/35",
    borderHover: "hover:border-signal/70",
    bg: "bg-signal/[0.07]",
    bgSolid: "bg-signal",
    ring: "ring-signal/30",
    from: "from-signal/70",
    glow: "shadow-[0_0_38px_-12px_var(--color-signal)]",
  },
  amber: {
    key: "amber",
    hex: "#fbbf24",
    text: "text-amber",
    border: "border-amber/35",
    borderHover: "hover:border-amber/70",
    bg: "bg-amber/[0.07]",
    bgSolid: "bg-amber",
    ring: "ring-amber/30",
    from: "from-amber/70",
    glow: "shadow-[0_0_38px_-12px_var(--color-amber)]",
  },
  plasma: {
    key: "plasma",
    hex: "#e879f9",
    text: "text-plasma",
    border: "border-plasma/35",
    borderHover: "hover:border-plasma/70",
    bg: "bg-plasma/[0.07]",
    bgSolid: "bg-plasma",
    ring: "ring-plasma/30",
    from: "from-plasma/70",
    glow: "shadow-[0_0_38px_-12px_var(--color-plasma)]",
  },
} as const satisfies Record<string, Accent>;

export type AccentKey = keyof typeof accents;

export const accentOrder: readonly AccentKey[] = [
  "ember",
  "violet",
  "crimson",
  "amber",
  "signal",
  "jade",
  "azure",
  "plasma",
  "bronze",
];

export const accentAt = (index: number): Accent =>
  accents[accentOrder[index % accentOrder.length]];
