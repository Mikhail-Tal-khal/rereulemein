export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  readMinutes: number;
  tag: string;
  author: string;
};

export const blogAuthor = "Sato Akira";

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "marcus-aurelius-memento-mori",
    title: "Memento Mori: What Marcus Aurelius Actually Meant",
    dek: "A Roman emperor kept a private notebook reminding himself he could die today. He wasn't being morbid about it, he was using it to figure out what actually deserved his attention.",
    date: "2026-08-12",
    readMinutes: 8,
    tag: "Philosophy",
    author: blogAuthor,
  },
  {
    slug: "future-of-medicine",
    title: "The Future of Medicine: Editing, Delivering, Simulating",
    dek: "A look at three real research fronts, gene editing, engineered viral and nanoparticle delivery, and quantum-assisted drug discovery, and how far each one actually is from the clinic.",
    date: "2026-08-12",
    readMinutes: 11,
    tag: "Research",
    author: blogAuthor,
  },
];
