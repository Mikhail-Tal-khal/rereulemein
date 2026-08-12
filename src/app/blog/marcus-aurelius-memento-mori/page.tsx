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
            Marcus Aurelius ruled Rome from 161 to 180 AD, and he spent most
            of that time on campaign along the Danube rather than in the
            city. He wasn&rsquo;t writing for readers. What we now call{" "}
            <em className="font-serif italic">Meditations</em> started out
            as a private notebook, the actual Greek title translates closer
            to <em className="font-serif italic">Ta eis heauton</em>,
            &ldquo;to himself.&rdquo; He was working through his own
            thinking, in his own hand, in the gaps between one campaign and
            the next. Nobody edited it, nobody prepared it for publication,
            and that&rsquo;s probably why it still holds up as practical
            advice instead of some polished philosophical treatise.
          </p>

          <p>
            One idea keeps coming back throughout the notebook:{" "}
            <strong className="font-medium text-bone">memento mori</strong>,
            remember you will die. People today tend to hear that as
            something dark, maybe picture a skull sitting on a desk
            somewhere. That&rsquo;s not really what Marcus meant by it. For
            him it worked more like a filter. If you actually keep in mind
            that your time is limited, and you don&rsquo;t know how much of
            it is left, a lot of what&rsquo;s competing for your attention
            on any given day just stops mattering. What&rsquo;s left over is
            usually what was worth your time in the first place.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            The line itself
          </h2>
          <p>
            The clearest version of this shows up in Book 2, written while
            he was out with the army:
          </p>

          <Pull
            text="You could leave life right now. Let that determine what you do and say and think."
            cite="2.11 (trans. Gregory Hays)"
          />

          <p>
            Read quickly, that can sound like an excuse to check out,
            nothing matters, so do whatever you want. That&rsquo;s not
            really what he&rsquo;s getting at. If anything it&rsquo;s the
            opposite: if you could leave at any moment, then whatever
            you&rsquo;re doing right now is genuinely the only thing
            you&rsquo;ll have done with this stretch of your life. That sets
            a higher bar for the present moment, not a lower one.
          </p>

          <p>A few pages later he comes back to it from another angle:</p>

          <Pull
            text="Not to live as if you had endless years ahead of you. Death overshadows you. While you're alive and able — be good."
            cite="4.17 (trans. Gregory Hays)"
          />

          <p>
            And then again, pushing back on the idea that living longer
            would somehow give you a different kind of life than the one you
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
            There&rsquo;s another Stoic idea that keeps memento mori from
            turning into fatalism, and that&rsquo;s the dichotomy of
            control. Marcus is pretty strict about drawing a line between
            what&rsquo;s actually up to you (your judgment, your intentions,
            the effort you put in) and what isn&rsquo;t (other people,
            outcomes, how long you get to live). He&rsquo;s not telling you
            to stop caring how things turn out. He&rsquo;s telling you to
            stop pouring your limited attention into the part of the outcome
            you never had a say in, so more of it can go toward the part you
            do control, which is just how you show up right now.
          </p>
          <p>
            That&rsquo;s really where the two ideas connect. Mortality is
            the deadline. The dichotomy of control is just about where you
            spend the time before it arrives.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            What it looks like in practice
          </h2>
          <p>
            You don&rsquo;t need to be commanding an army to use this. It
            comes down to a fairly simple question before you spend an
            evening on something: if this were one of my last ones, would I
            still spend it this way? Usually the honest answer doesn&rsquo;t
            call for some dramatic life change, it just quietly reorders
            your priorities. The phone goes down. The conversation
            you&rsquo;ve been putting off actually happens. The work that
            matters gets your good hours instead of whatever&rsquo;s left
            over at the end of the day.
          </p>
          <p>
            Marcus wasn&rsquo;t trying to write a self-help book. He was an
            emperor working through plague, ongoing war, and a son who
            would eventually run the empire he left him into the ground, and
            none of that comes across as despair in the notebook. It comes
            across as attention. That&rsquo;s really the whole practice,
            keep the deadline in view and let it decide what&rsquo;s worth
            your attention today.
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
