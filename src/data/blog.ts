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
    dek: "The Stoic emperor kept a private notebook reminding himself he could die today. Not out of morbidity — as a filter for what deserves his attention.",
    date: "2026-08-12",
    readMinutes: 8,
    tag: "Philosophy",
    author: blogAuthor,
  },
  {
    slug: "future-of-medicine",
    title: "The Future of Medicine: Editing, Delivering, Simulating",
    dek: "Three real research fronts — gene editing, engineered viral and nanoparticle delivery, and quantum-assisted drug discovery — and how far each actually is from the clinic.",
    date: "2026-08-12",
    readMinutes: 11,
    tag: "Research",
    author: blogAuthor,
  },
];
