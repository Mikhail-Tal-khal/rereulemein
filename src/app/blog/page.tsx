import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
  description:
    "Notes on Stoic philosophy and on real research fronts in medicine — gene editing, targeted delivery, and computational drug discovery.",
};

export default function BlogIndexPage() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
      <div
        aria-hidden="true"
        className="board-field pointer-events-none absolute inset-0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-bronze/[0.07] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-bronze/90">
          Notes
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Blog
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Two things I keep coming back to outside of security work: Stoic
          philosophy, and how far the actual published research on
          next-generation medicine has gotten.
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line/80 bg-line/60 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between bg-ink/90 p-8 transition-colors hover:bg-surface/80"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  <span className="text-bronze/80">{post.tag}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="mt-4 text-2xl font-medium leading-snug tracking-tight text-bone group-hover:text-bronze">
                  {post.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {post.dek}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-bronze">
                Read
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
                <span className="ml-auto text-muted normal-case tracking-normal">
                  {post.readMinutes} min
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
