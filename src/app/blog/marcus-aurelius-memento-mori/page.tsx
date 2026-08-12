import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { profile } from "@/data/profile";

const post = blogPosts.find((item) => item.slug === "marcus-aurelius-memento-mori")!;

export const metadata: Metadata = {
  title: `${post.title} — ${profile.name}`,
  description: post.dek,
  authors: [{ name: post.author }],
  openGraph: {
    title: post.title,
    description: post.dek,
    type: "article",
  },
};

function Pull({ text, cite }: { text: string; cite: string }) {
  return (
    <figure className="my-10 rounded-sm border border-line/80 bg-surface/40 p-7 sm:p-9">
      <blockquote className="font-serif text-xl italic leading-snug text-bone/95 sm:text-2xl">
        &ldquo;{text}&rdquo;
      </blockquote>
      <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        Marcus Aurelius · Meditations, {cite}
      </figcaption>
    </figure>
  );
}

export default function MarcusAureliusPost() {
  return (
    <article className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-10 lg:px-16 lg:pt-20">
      <div
        aria-hidden="true"
        className="board-field pointer-events-none absolute inset-0 opacity-50"
      />

      <div className="relative mx-auto w-full max-w-3xl">
        <Link
          href="/blog"
          className="font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-bone"
        >
          ← Blog
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
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
          <span>{post.readMinutes} min read</span>
          <span aria-hidden="true">·</span>
          <span>By {post.author}</span>
        </div>

        <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
          {post.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {post.dek}
        </p>

        <figure className="relative mt-12 overflow-hidden rounded-sm border border-line/80">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/blog/marcus-aurelius-bust.jpg"
              alt="Marble bust of the Roman emperor Marcus Aurelius"
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="border-t border-line/80 bg-surface/60 px-4 py-2.5 font-mono text-[10px] tracking-[0.1em] text-muted/60">
            Marble bust of Marcus Aurelius, Roman, 2nd century AD. Photo:
            Wikimedia Commons, CC BY-SA 2.0.
          </figcaption>
        </figure>

        <div className="prose-content mt-12 space-y-6 text-[17px] leading-[1.8] text-bone/90">
          <p>
            Marcus Aurelius ruled Rome from 161 to 180 AD, most of it spent on
            campaign along the Danube frontier rather than in the city. He
            didn&rsquo;t write his philosophy for an audience. The book we
            call <em className="font-serif italic">Meditations</em> is a
            private notebook — the Greek title is closer to{" "}
            <em className="font-serif italic">Ta eis heauton</em>,
            &ldquo;to himself.&rdquo; He was reminding himself how to think,
            in his own hand, between one campaign and the next. It was never
            edited for publication, and that is exactly why it still reads
            as useful advice instead of a finished philosophical system.
          </p>

          <p>
            One habit shows up again and again in those notes:{" "}
            <strong className="font-medium text-bone">memento mori</strong>
            {" "}— remember you will die. Modern readers sometimes hear that
            as morbid, or as a stylised skull on a desk. For Marcus it was
            neither. It was a filter. If you genuinely hold in mind that your
            time is finite and the exact amount is unknown, most of what
            competes for your attention on a given day loses its claim on
            you. What&rsquo;s left is what actually matters.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            The line itself
          </h2>
          <p>
            The clearest statement of it is in Book 2, written while he was
            stationed with the army:
          </p>

          <Pull
            text="You could leave life right now. Let that determine what you do and say and think."
            cite="2.11 (trans. Gregory Hays)"
          />

          <p>
            Read carelessly, that sounds like an excuse to disengage —
            nothing matters, so do whatever. Marcus means the opposite. If
            you could leave at any moment, then whatever you&rsquo;re doing
            right now is the only thing you will have actually done with
            this portion of your life. That raises the standard for the
            present moment; it doesn&rsquo;t lower it.
          </p>

          <p>He returns to the same idea from a different angle a few pages later:</p>

          <Pull
            text="Not to live as if you had endless years ahead of you. Death overshadows you. While you're alive and able — be good."
            cite="4.17 (trans. Gregory Hays)"
          />

          <p>
            And again, arguing against the idea that a longer life would
            somehow be a different kind of possession than the one you
            already have:
          </p>

          <Pull
            text="Even if you're going to live three thousand more years, or ten times that, remember: you cannot lose another life than the one you're living now, or live another one than the one you're losing. The longest and the shortest life amount to the same thing."
            cite="2.14 (trans. Gregory Hays)"
          />

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            Why this isn&rsquo;t nihilism
          </h2>
          <p>
            Stoicism has a companion idea that keeps memento mori from
            collapsing into fatalism: the dichotomy of control. Marcus draws
            a hard line between what is up to you — your judgments,
            intentions, and effort — and what isn&rsquo;t: other people,
            outcomes, how long you get. He doesn&rsquo;t ask you to stop
            caring about outcomes. He asks you to stop spending your finite
            attention on the part of the outcome you never controlled in the
            first place, so that more of it goes toward the part you do
            control: how you show up right now.
          </p>
          <p>
            That is the practical link between the two ideas. Mortality sets
            the deadline. The dichotomy of control tells you where to spend
            the time you have before it.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            What it looks like in practice
          </h2>
          <p>
            You don&rsquo;t need a battlefield to apply it. It shows up as a
            question worth asking before you spend an evening on something:
            if this were one of the last ones, would I still spend it this
            way? Most of the time the honest answer reshuffles the priority
            list without requiring any grand gesture — it just means the
            phone goes down, the difficult conversation happens instead of
            getting deferred again, and the work that actually matters gets
            the good hours instead of the leftover ones.
          </p>
          <p>
            Marcus wasn&rsquo;t writing self-help. He was an emperor talking
            himself through plague, war, and a son who would go on to
            misrule the empire he left him, and none of that shows up as
            despair in the text. It shows up as attention. That&rsquo;s the
            whole practice: hold the deadline in view, and let it decide
            what gets your attention today.
          </p>
        </div>

        <div className="mt-16 border-t border-line/70 pt-6">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Sources
          </h3>
          <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted/80">
            <li>
              Marcus Aurelius, <em className="italic">Meditations</em>,
              translated by Gregory Hays (Modern Library, 2002) — Book 2.11,
              2.14, 4.17.
            </li>
            <li>
              Marcus Aurelius, <em className="italic">Meditations</em>,
              translated by George Long (1862, public domain) — used
              elsewhere on this site.
            </li>
            <li>
              Bust of Marcus Aurelius, photograph via{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Bust_of_Marcus_Aurelius_01.jpg"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-line underline-offset-4 hover:text-bone"
              >
                Wikimedia Commons
              </a>
              , licensed CC BY-SA 2.0.
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
