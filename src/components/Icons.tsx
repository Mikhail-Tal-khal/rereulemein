import type { SVGProps } from "react";

/**
 * Hand-rolled stroke icons on a 24×24 grid. No icon dependency: the set is
 * small, and drawing them here keeps the weight and the line quality uniform.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Offensive security — a reticle settling on a target. */
export const Crosshair = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="7.5" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M12 1.6v3.4M12 19v3.4M1.6 12H5M19 12h3.4" />
  </Svg>
);

/** Intelligence — a lens over a graph of linked entities. */
export const LensGraph = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="10.4" cy="10.4" r="7.4" />
    <path d="m15.8 15.8 5.4 5.4" />
    <circle cx="8" cy="8.2" r="1.05" />
    <circle cx="13.2" cy="9.4" r="1.05" />
    <circle cx="9.8" cy="13.4" r="1.05" />
    <path d="m9 8.5 3.3.7M12.7 10.4l-2.2 2.2M9.2 12.4 8.3 9.3" />
  </Svg>
);

/** Fraud analysis — a flat signal with one flagged outlier. */
export const Anomaly = (props: IconProps) => (
  <Svg {...props}>
    <path d="M2 14h3l1.8-3 2.2 6.5L12.4 5l2.2 9H22" />
    <circle cx="12.4" cy="5" r="2.6" opacity="0.5" />
  </Svg>
);

/** Languages. */
export const Brackets = (props: IconProps) => (
  <Svg {...props}>
    <path d="m8 6-6 6 6 6" />
    <path d="m16 6 6 6-6 6" />
    <path d="m13.6 3.6-3.2 16.8" />
  </Svg>
);

/** Monitoring — a sweep and a return. */
export const Radar = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.8" />
    <path d="m12 12 6.4-4.6" />
    <circle cx="16.6" cy="8.6" r="1.3" fill="currentColor" stroke="none" />
  </Svg>
);

/** Defensive security. */
export const Shield = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 2.4 4 5.5v6.3c0 4.6 3.2 8.2 8 9.8 4.8-1.6 8-5.2 8-9.8V5.5z" />
    <circle cx="12" cy="10.8" r="1.9" />
    <path d="M12 12.7v3.1" />
  </Svg>
);

/** Infrastructure and networking. */
export const Nodes = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="4.6" r="2.5" />
    <circle cx="4.6" cy="18" r="2.5" />
    <circle cx="19.4" cy="18" r="2.5" />
    <path d="M10.1 6.2 6.2 15.9M13.9 6.2l3.9 9.7M7.1 18h9.8" />
  </Svg>
);

/** Frameworks and databases. */
export const Database = (props: IconProps) => (
  <Svg {...props}>
    <ellipse cx="12" cy="6" rx="8" ry="3.2" />
    <path d="M4 6v12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V6" />
    <path d="M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2" />
  </Svg>
);

/** Engineering practice. */
export const Branch = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="6.5" cy="5" r="2.5" />
    <circle cx="6.5" cy="19" r="2.5" />
    <circle cx="17.5" cy="9.5" r="2.5" />
    <path d="M6.5 7.5v9" />
    <path d="M15 9.5h-3A5.5 5.5 0 0 0 6.6 16.5" />
  </Svg>
);

export const Pin = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 21.5s7-6.6 7-11.4a7 7 0 1 0-14 0c0 4.8 7 11.4 7 11.4z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
);

export const Mail = (props: IconProps) => (
  <Svg {...props}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
    <path d="m3 6.5 9 6.6 9-6.6" />
  </Svg>
);

export const ArrowUpRight = (props: IconProps) => (
  <Svg {...props}>
    <path d="M7 17 17 7" />
    <path d="M8.5 7H17v8.5" />
  </Svg>
);

export const Award = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="8.8" r="5.6" />
    <path d="m8.4 13.6-1.5 7.4 5.1-2.8 5.1 2.8-1.5-7.4" />
  </Svg>
);

export const Cap = (props: IconProps) => (
  <Svg {...props}>
    <path d="m12 4 9.5 4.6L12 13.2 2.5 8.6z" />
    <path d="M6.4 10.8v5c0 1.6 2.5 3 5.6 3s5.6-1.4 5.6-3v-5" />
    <path d="M21.5 8.6v6.2" />
  </Svg>
);

export const Play = (props: IconProps) => (
  <Svg {...props}>
    <path d="M8 5.4v13.2L18.6 12z" />
  </Svg>
);

export const Pause = (props: IconProps) => (
  <Svg {...props}>
    <path d="M9 5.5v13M15 5.5v13" />
  </Svg>
);

export const StepBack = (props: IconProps) => (
  <Svg {...props}>
    <path d="M18.5 5.6v12.8L9.4 12z" />
    <path d="M6 5.6v12.8" />
  </Svg>
);

export const StepForward = (props: IconProps) => (
  <Svg {...props}>
    <path d="M5.5 5.6v12.8L14.6 12z" />
    <path d="M18 5.6v12.8" />
  </Svg>
);

export const Rewind = (props: IconProps) => (
  <Svg {...props}>
    <path d="M20.4 12a8.4 8.4 0 1 1-2.5-6" />
    <path d="M20.6 3.6v5.2h-5.2" />
  </Svg>
);

export const icons = {
  crosshair: Crosshair,
  lensGraph: LensGraph,
  anomaly: Anomaly,
  brackets: Brackets,
  radar: Radar,
  shield: Shield,
  nodes: Nodes,
  database: Database,
  branch: Branch,
} as const;

export type IconName = keyof typeof icons;
