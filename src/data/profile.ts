import type { IconName } from "@/components/Icons";
import type { AccentKey } from "@/lib/accents";

/**
 * Single source of truth for every word on the site.
 *
 * Deliberately excluded: national ID number, date of birth, telephone number,
 * nationality/vetting particulars, home address. A portfolio is a body of work,
 * not an identity document.
 */

export const profile = {
  name: "Solomon Rereu Lemein",
  role: "Cybersecurity Engineer",
  focus: ["OSINT", "Red Team", "Fraud Analysis"],
  location: "Mombasa, Kenya",
  email: "rereulemein@gmail.com",
  github: "https://github.com/Mikhail-Tal-khal",
  githubHandle: "Mikhail-Tal-khal",
  metaDescription:
    "Cybersecurity engineer working in offensive security, open source intelligence and fraud analysis. Custom tooling in Rust and C++, four years of production software behind it.",
  tagline: "I spent four years building the systems. Now I test them.",
  intro:
    "Offensive security, open source intelligence and fraud analysis — with custom tooling written in Rust and C++ rather than pulled off a shelf.",
} as const;

export const summary: readonly string[] = [
  "I work mainly in offensive security, open source intelligence and fraud analysis. Most of my tooling is written in Rust and C++: network monitors, traffic analysers and anomaly detection systems that flag irregular behaviour as it happens. I also work on malware analysis and development for authorised red team exercises, phishing simulation, and testing how staff actually respond to social engineering.",
  "Before moving fully into security I spent four years building production systems, and that background still shapes how I work. I have shipped a ride hailing platform used by over 5,000 drivers and riders, led backend work on enterprise software serving more than 50,000 users, and built secure web applications for government clients. Along the way I designed and secured full M-Pesa payment flows, which gave me a close view of how mobile money fraud actually happens in Kenya and where the weak points sit.",
  "I hold an OSINT forensic analysis certification and the Google Cybersecurity Professional Certificate. I work carefully, I document what I build so other people can pick it up, and I am comfortable handling sensitive information quietly.",
];

export const metrics: readonly { value: string; label: string }[] = [
  { value: "5,000+", label: "riders and drivers on a platform I shipped solo" },
  { value: "50,000+", label: "users on enterprise systems I lead backend for" },
  { value: "85%", label: "throughput gain from a Node.js to Rust migration" },
  { value: "99.9%", label: "uptime after a monolith to microservices move" },
];

export const strengths: readonly { title: string; body: string }[] = [
  {
    title: "Builds its own tools",
    body: "Rather than relying only on off the shelf software, I write custom monitoring and analysis tools in Rust and C++ when the situation calls for something specific.",
  },
  {
    title: "Understands both sides",
    body: "I have built the systems and I test them. Knowing how software is put together makes me faster at finding where it breaks.",
  },
  {
    title: "Local financial context",
    body: "Hands on experience securing M-Pesa B2C, C2B and B2B flows, which is where a large share of Kenyan fraud takes place.",
  },
  {
    title: "Handles pressure calmly",
    body: "Years of production support and incident work, including systems that could not go down.",
  },
  {
    title: "Explains things clearly",
    body: "I have trained thousands of non technical users on digital safety and mentored four junior engineers.",
  },
];

export type SkillGroup = {
  group: string;
  kicker: string;
  items: readonly string[];
  primary?: boolean;
  icon: IconName;
  accent: AccentKey;
  /** The piece this group behaves like, used as a watermark on the card. */
  piece: string;
  pieceName: string;
};

export const skills: readonly SkillGroup[] = [
  {
    group: "Offensive Security & Red Team",
    kicker: "01",
    primary: true,
    icon: "crosshair",
    accent: "ember",
    piece: "♛",
    pieceName: "Queen",
    items: [
      "Penetration testing",
      "Malware development and analysis for authorised simulation",
      "Phishing simulation frameworks",
      "Social engineering assessment",
      "Exploit research",
      "Adversary emulation",
    ],
  },
  {
    group: "Intelligence & Investigation",
    kicker: "02",
    primary: true,
    icon: "lensGraph",
    accent: "violet",
    piece: "♝",
    pieceName: "Bishop",
    items: [
      "OSINT collection and analysis",
      "Digital forensics",
      "Link and pattern analysis",
      "Target profiling from open sources",
      "Evidence handling",
      "Structured investigative reporting",
    ],
  },
  {
    group: "Fraud Detection & Analysis",
    kicker: "03",
    primary: true,
    icon: "anomaly",
    accent: "crimson",
    piece: "♞",
    pieceName: "Knight",
    items: [
      "Mobile money transaction flow security",
      "Anomaly and outlier detection",
      "Transaction monitoring logic",
      "Account takeover and phishing vectors",
      "Financial data integrity",
      "Reconciliation controls",
    ],
  },
  {
    group: "Languages",
    kicker: "04",
    icon: "brackets",
    accent: "amber",
    piece: "♟",
    pieceName: "Pawn",
    items: [
      "Rust",
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Dart",
    ],
  },
  {
    group: "Security Tooling & Monitoring",
    kicker: "05",
    icon: "radar",
    accent: "signal",
    piece: "♜",
    pieceName: "Rook",
    items: [
      "Custom Rust and C++ utilities",
      "Real time traffic analysis",
      "Intrusion and anomaly detection",
      "Automated alerting",
      "Log analysis",
    ],
  },
  {
    group: "Defensive Security & Data Protection",
    kicker: "06",
    icon: "shield",
    accent: "jade",
    piece: "♚",
    pieceName: "King",
    items: [
      "Access controls",
      "Encryption",
      "Endpoint protection",
      "Incident reporting",
      "Backup and recovery",
      "Phishing and malware prevention",
      "Kenya Data Protection Act compliance",
    ],
  },
  {
    group: "Infrastructure & Networking",
    kicker: "07",
    icon: "nodes",
    accent: "azure",
    piece: "♜",
    pieceName: "Rook",
    items: [
      "Firewalls, routers, switches",
      "Access points and Wi-Fi management",
      "AWS: EC2, S3, RDS, Lambda",
      "Docker",
      "Kubernetes",
      "Linux",
    ],
  },
  {
    group: "Frameworks & Databases",
    kicker: "08",
    icon: "database",
    accent: "plasma",
    piece: "♟",
    pieceName: "Pawn",
    items: [
      "Axum",
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    group: "Practices",
    kicker: "09",
    icon: "branch",
    accent: "bronze",
    piece: "♟",
    pieceName: "Pawn",
    items: [
      "Git",
      "Jenkins",
      "Jira",
      "CI/CD pipelines",
      "Microservices",
      "System design",
      "REST APIs",
      "Test driven development",
    ],
  },
];

export type Role = {
  title: string;
  org: string;
  mode: string;
  period: string;
  blurb: string;
  points: readonly string[];
};

export const experience: readonly Role[] = [
  {
    title: "Lead Developer",
    org: "Mamaride",
    mode: "Remote",
    period: "Sep 2025 — Present",
    blurb: "A ride hailing platform I took from an idea to a live product on both app stores.",
    points: [
      "Designed, built and launched the full platform on my own, now serving more than 5,000 active riders and drivers.",
      "Engineered the complete M-Pesa payment integration across B2C, C2B and B2B flows, including validation, reconciliation and callback handling that resists tampering and replay.",
      "Applied security decisions at the design stage rather than bolting them on: access controls, encrypted storage of user and location data, hardened API endpoints.",
      "Moved the performance critical Node.js services over to Rust, cutting response times by 35% and raising throughput by 85%.",
      "Built the rider and driver apps in Flutter with live ride matching, driver tracking and in app messaging over WebSockets.",
      "Handled everything else the product needed: interface design, backend, deployment, app store submissions and ongoing fixes.",
    ],
  },
  {
    title: "Full-Stack Developer & Marketing Technologist",
    org: "BobWorks",
    mode: "Remote",
    period: "Jun 2023 — Present",
    blurb: "Backend lead on enterprise software with a large user base.",
    points: [
      "Lead backend development for enterprise SaaS products used by over 50,000 people.",
      "Designed and built microservices in Rust and Axum, with authentication and access boundaries enforced at the service level.",
      "Brought system latency down by 35% through profiling, tuning and a reworked caching strategy.",
      "Moved legacy systems onto AWS, improving scalability, uptime and recovery speed.",
      "Mentored four junior developers and ran code reviews, including reviewing submitted code for security problems before merge.",
      "Planned and ran marketing work informed by product data, lifting user engagement by 20%.",
    ],
  },
  {
    title: "Backend Software Engineer",
    org: "Bolt",
    mode: "Contract",
    period: "Sep 2023 — Feb 2024",
    blurb: "Contract work on rider and driver facing backend services.",
    points: [
      "Built backend services around Google Maps for geolocation, routing and location based search.",
      "Implemented real time WebSocket notifications so riders and drivers received trip updates and safety alerts instantly.",
      "Reduced response latency by 32% under peak load by reworking the data relay layer and API response handling.",
      "Documented system configuration, licensing and support procedures so the work could be handed over cleanly.",
      "Ran digital safety sessions for driver and rider communities of over 5,000 people, covering fraud awareness and safe use of the app.",
    ],
  },
  {
    title: "Software Engineer",
    org: "Validus Lab",
    mode: "On-site",
    period: "Dec 2022 — May 2023",
    blurb: "Secure web applications built for government facing use.",
    points: [
      "Developed secure government facing web applications using React and Node.js.",
      "Implemented OAuth 2.0 authentication and role based access control so users could only reach the records their role allowed.",
      "Improved overall system performance by 15% through server side logic and database query optimisation.",
      "Built automated CI/CD pipelines, cutting deployment time by 40%.",
    ],
  },
  {
    title: "Junior Full-Stack Developer",
    org: "Swahilipot Hub",
    mode: "On-site",
    period: "Sep 2022 — Dec 2022",
    blurb: "First professional role, mixing development with hands on support.",
    points: [
      "Built full stack web applications using Node.js, React and Python, delivering features on tight deadlines.",
      "Provided first line technical support across hardware, software and network faults.",
      "Optimised database queries and brought reporting time down by 25%.",
      "Integrated several third party APIs to extend what the applications could do.",
      "Took part in code reviews with senior developers and helped debug production issues.",
    ],
  },
];

export type Project = {
  name: string;
  stack: string;
  status?: string;
  points: readonly string[];
};

export const projects: readonly Project[] = [
  {
    name: "Red Team & Security Tooling",
    stack: "Rust · C++",
    status: "Ongoing",
    points: [
      "Custom offensive security tooling for authorised testing: network monitors, traffic analysers and adversary emulation utilities.",
      "Phishing simulation and social engineering assessment tools used to test how organisations and their staff hold up under a realistic attempt.",
      "Malware sample analysis, with detection logic written from the findings and fed back into endpoint and network defence.",
    ],
  },
  {
    name: "Network Monitoring & Anomaly Detection",
    stack: "Python",
    points: [
      "Real time traffic analysis that watches network behaviour and raises automated alerts when something falls outside the expected pattern.",
      "The same detection thinking applied to transaction and access data, where irregular patterns often point to fraud rather than a fault.",
    ],
  },
  {
    name: "Secure Mobile Money Integration",
    stack: "M-Pesa · Mamaride",
    points: [
      "Complete M-Pesa B2C, C2B and B2B transaction flows, covering validation, reconciliation and callback handling built to resist abuse.",
      "A practical understanding of where mobile money fraud enters the chain, and which controls actually stop it.",
    ],
  },
  {
    name: "Enterprise Microservices Migration",
    stack: "Docker · Kubernetes",
    points: [
      "Led the move from a single monolithic application to microservices, reaching 99.9% uptime.",
    ],
  },
  {
    name: "Cloud Native E-Commerce Platform",
    stack: "Node.js · PostgreSQL · AWS",
    points: [
      "Scalable backend with Stripe payments, deployed on AWS using infrastructure as code.",
    ],
  },
  {
    name: "Diabetes & Tech Solutions",
    stack: "Python · ML · Firebase",
    status: "Founder, in progress",
    points: [
      "A health platform giving people personalised diabetes management guidance from their own data.",
      "Designed around strict handling of sensitive medical data, consent records and clear privacy notices.",
      "Built with healthcare professionals so the guidance it gives is medically sound.",
    ],
  },
];

export const certifications: readonly { name: string; body: string }[] = [
  {
    name: "OSINT Forensic Analysis Operations",
    body: "Open source intelligence collection and forensic investigation: profiling a subject from public sources, gathering and verifying data, link and pattern analysis, correct evidence handling, and writing findings up as a structured investigative report.",
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    body: "Data protection, network security, threat detection and incident response, plus defending against SQL injection, DDoS, phishing and social engineering attacks.",
  },
];

export const education = {
  school: "Technical University of Mombasa",
  award: "Computer Science, graduated",
  coursework:
    "Data structures and algorithms, operating systems, computer networks, database systems, artificial intelligence.",
};

export const community: readonly string[] = [
  "Member, Association for Computing Machinery — technical workshops and industry events.",
  "Volunteer technology trainer for drivers, small business owners and other non technical users: safe digital practice, password hygiene, spotting fraud attempts, basic troubleshooting.",
  "Mentor to four junior developers, covering code quality, security review and professional practice.",
];

export const languages = "English and Kiswahili (fluent) · Czech and German (intermediate)";

/**
 * Meditations, Marcus Aurelius — George Long translation (1862, public domain).
 */
export const meditations: readonly { text: string; ref: string }[] = [
  {
    text: "Nowhere can man find a quieter or more untroubled retreat than in his own soul.",
    ref: "Book IV, 3",
  },
  {
    text: "If thou art pained by any external thing, it is not this thing that disturbs thee, but thy own judgment about it.",
    ref: "Book VIII, 47",
  },
  {
    text: "No longer talk at all about the kind of man that a good man ought to be, but be such.",
    ref: "Book X, 16",
  },
  {
    text: "Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.",
    ref: "Book VII, 59",
  },
  {
    text: "Every moment think steadily as a Roman and a man, to do what thou hast in hand with perfect and simple dignity.",
    ref: "Book II, 5",
  },
];

export const philosophy: readonly { heading: string; body: string }[] = [
  {
    heading: "The dichotomy of control",
    body: "An incident does not care how you feel about it. What is in your control is preparation, judgement and the quality of your response — so that is where the effort goes. Everything else is weather.",
  },
  {
    heading: "See the thing as it is",
    body: "Marcus keeps stripping objects down to their parts to see them plainly. That is the same discipline as reading a packet capture or a transaction log without the story you arrived with. Evidence first, narrative second.",
  },
  {
    heading: "Do the work quietly",
    body: "Security work involves things you cannot talk about. The stoic instinct — be the thing rather than describe it — turns out to be a working practice, not just a posture.",
  },
];

export const chess: readonly { heading: string; body: string }[] = [
  {
    heading: "Thinking in forcing moves",
    body: "An attacker looks for checks, captures and threats — the moves the defender must answer. Threat modelling is the same search: which inputs force a response, and what does the system have to give up to answer them.",
  },
  {
    heading: "Positional before tactical",
    body: "Most systems are not broken by one brilliant exploit. They are lost slowly, through small structural concessions: a weak default, a permission nobody revoked, a service account with no expiry. You take the position before you play the combination.",
  },
  {
    heading: "Sitting with complications",
    body: "Tal played positions he could not fully calculate, because he could read them. That tolerance for an unresolved board is most of incident response: act on partial information, keep the initiative, stay honest about what you do not yet know.",
  },
];

export const escapeRooms: readonly {
  lock: string;
  heading: string;
  body: string;
}[] = [
  {
    lock: "Lock 01",
    heading: "Everything in the room is there on purpose",
    body: "A locked room teaches you that nothing is decoration. The same attention applied to an estate: a forgotten subdomain, a staging database with production data, a printer on the flat network. Somebody put it there, and nobody has looked at it since.",
  },
  {
    lock: "Lock 02",
    heading: "The intended solution is rarely the only one",
    body: "Rooms are designed for one path and broken along another. So are applications. Designers reason about the happy route; attackers reason about everything the route did not forbid.",
  },
  {
    lock: "Lock 03",
    heading: "Say what you have found, out loud",
    body: "Teams fail escape rooms by holding partial clues privately. Investigations fail the same way. The fragment that means nothing to you completes somebody else's picture — so the reporting matters as much as the finding.",
  },
];
