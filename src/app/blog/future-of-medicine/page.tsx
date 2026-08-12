import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { profile } from "@/data/profile";

const post = blogPosts.find((item) => item.slug === "future-of-medicine")!;

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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-ink/90 px-6 py-7">
      <dt className="font-mono text-2xl text-bronze">{value}</dt>
      <dd className="mt-2 text-sm leading-relaxed text-muted">{label}</dd>
    </div>
  );
}

export default function FutureOfMedicinePost() {
  return (
    <article className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-10 lg:px-16 lg:pt-20">
      <div
        aria-hidden="true"
        className="rule-grid pointer-events-none absolute inset-0 opacity-30"
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

        <div className="prose-content mt-12 space-y-6 text-[17px] leading-[1.8] text-bone/90">
          <p>
            &ldquo;Malware that cures cancer&rdquo; makes a catchy headline,
            but it isn&rsquo;t an actual research programme, nobody is
            treating patients with computer viruses. What is happening in
            labs is close enough to that idea to explain why it sounds
            plausible in the first place. Researchers really are building
            biological and computational tools that work on the same logic
            malware does: a payload, a way to deliver it, a target it hunts
            down and disables. The difference is what they&rsquo;re built
            from, viral genomes, nanoparticles, edited DNA, instead of code.
            Here&rsquo;s where that work actually stands right now, across
            three fronts: editing genes directly, delivering treatment
            payloads with precision, and using quantum computing to design
            the molecules in the first place.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line/80 bg-line/60 sm:grid-cols-3">
            <Stat value="2" label="CRISPR gene-editing therapies FDA-approved for human use" />
            <Stat value="1" label="FDA-approved engineered virus therapy (T-VEC, melanoma, 2015)" />
            <Stat value="~10⁶⁰" label="drug-like molecules in the chemical space classical computers can't fully search" />
          </dl>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            1. Editing the DNA directly: CRISPR-Cas9
          </h2>
          <p>
            CRISPR-Cas9 lets researchers cut DNA at a chosen sequence and
            either knock out a gene or splice in a fix. Two CRISPR therapies
            have FDA approval right now: Casgevy, approved in December 2023
            for sickle cell disease and beta-thalassemia, and EDIT-101, for
            the inherited blindness Leber congenital amaurosis type 10. Both
            work by editing a patient&rsquo;s own cells, either outside the
            body or inside it, to correct one specific, well-understood
            genetic fault. Neither one is rewriting the genome wholesale.
          </p>
          <p>
            Cancer is a tougher problem, since most cancers aren&rsquo;t
            caused by one clean mutation you can just cut out. Right now the
            CRISPR work on cancer is mostly about improving cell therapies
            rather than editing tumors directly. Caribou Biosciences&rsquo;
            CB-010, for example, uses CRISPR to edit donor immune cells so
            they hunt cancer better, and it moved into Phase 2 trials for
            B-cell non-Hodgkin lymphoma in 2025. There&rsquo;s no
            FDA-approved CRISPR cancer therapy yet.
          </p>
          <p>
            HIV is probably the most honest example of where things stand.
            Excision BioTherapeutics ran a Phase 1/2 trial of EBT-101, a
            CRISPR treatment delivered through a viral vector that cuts
            HIV&rsquo;s DNA straight out of infected cells. It turned out to
            be safe in patients, but it didn&rsquo;t stop the virus from
            coming back once treatment ended. That&rsquo;s why nobody&rsquo;s
            calling this a cure. Gene editing can find and cut viral DNA
            just fine, clearing out every last hidden copy in the body is
            the part that&rsquo;s still unsolved.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            2. Payloads that hunt the disease: engineered viruses and nanoparticles
          </h2>
          <p>
            This is probably the closest real match to the malware idea, and
            it&rsquo;s actually been in clinics for over a decade. Oncolytic
            virotherapy takes a virus, strips out its ability to harm
            healthy tissue, and lets it infect and burst cancer cells
            specifically. That releases tumor antigens, which then train the
            immune system to go after whatever&rsquo;s left. T-VEC, a
            modified herpes simplex virus, has had FDA approval for melanoma
            since 2015.
          </p>
          <p>
            For brain tumors specifically, a handful of engineered viruses
            are in trials against glioblastoma. PVS-RIPO, an attenuated
            poliovirus, has FDA Fast Track status. G47Δ, an engineered
            herpes virus, is already approved in Japan for recurrent
            glioblastoma. DNX-2401, an engineered adenovirus, has shown some
            early promise too. None of this is routine treatment yet,
            glioblastoma is still one of the hardest cancers there is, but
            the basic mechanism, an engineered biological payload that finds
            and disables malignant cells, is real and already working in at
            least one country.
          </p>
          <p>
            Nanomedicine does a similar job but without a living virus
            involved. Liposomes, polymeric nanoparticles, and dendrimers get
            engineered to build up in tumors, either passively, because
            tumor blood vessels tend to be leakier than healthy ones, or
            actively, using surface molecules that latch onto receptors
            cancer cells overproduce. The payoff is the same idea behind
            malware: get the payload to the target and nowhere else. Less of
            the drug ends up in healthy tissue, so the side effects drop
            too.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            3. Quantum-assisted drug discovery
          </h2>
          <p>
            This is actually where quantum computing and math genuinely
            enter the picture, just not as a way to run malware through
            DNA. It&rsquo;s more about simulating molecules accurately
            enough to design better drugs, and better gene-editing guides,
            before anything reaches a lab bench. The problem quantum
            computing is aimed at here is a real one. The space of
            drug-like molecules is estimated at somewhere around 10⁶⁰, and
            the quantum-mechanical interactions that determine whether a
            molecule actually binds its target are too complicated for
            classical computers to simulate exactly at any scale
            that&rsquo;s useful.
          </p>
          <p>
            This year, hybrid quantum-classical methods from the
            international Quantum for Bio challenge managed to simulate
            protein complexes with over 12,000 atoms, the largest
            biologically meaningful simulations run this way so far.
            Companies like IBM, D-Wave, QuEra, and Qubit Pharmaceuticals all
            have active pharma partnerships going on molecular simulation
            and lead optimization. It&rsquo;s still experimental,
            research-stage work sitting alongside classical computation and
            AI in drug discovery rather than replacing it, and it isn&rsquo;t
            part of any approved treatment yet.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            Where that actually leaves things
          </h2>
          <p>
            So here&rsquo;s where things honestly stand. Gene editing can
            already fix single-gene diseases, and it&rsquo;s being tested
            against cancer and HIV with mixed results so far. Engineered
            viruses and nanoparticles that hunt down and disable diseased
            cells are real, and a few are already approved for use. Quantum
            computing is starting to make the hardest part of drug design,
            actually simulating the chemistry, something researchers can
            work with. None of it is malware. There&rsquo;s no single
            unified cure for cancer, HIV, and brain tumors sitting behind
            any of this, and none of it skips the years of trial data
            separating &ldquo;works in principle&rdquo; from &ldquo;approved
            treatment.&rdquo; It&rsquo;s a slower story than the headline
            version, but it&rsquo;s also a more interesting one, mostly
            because it&rsquo;s the one that&rsquo;s actually happening.
          </p>
        </div>

        <div className="mt-16 border-t border-line/70 pt-6">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Sources
          </h3>
          <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted/80">
            <li>
              <a
                href="https://innovativegenomics.org/news/crispr-clinical-trials-2026/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-line underline-offset-4 hover:text-bone"
              >
                Innovative Genomics Institute — CRISPR Clinical Trials: A 2026 Update
              </a>
            </li>
            <li>
              <a
                href="https://crisprmedicinenews.com/news/clinical-trial-update-positive-clinical-data-for-first-ever-crispr-therapy-for-hiv/"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-line underline-offset-4 hover:text-bone"
              >
                CRISPR Medicine News — Excision BioTherapeutics EBT-101 HIV trial data
              </a>
            </li>
            <li>
              <a
                href="https://www.cancerresearch.org/immunotherapy-by-treatment-types/oncolytic-virus-therapy"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-line underline-offset-4 hover:text-bone"
              >
                Cancer Research Institute — Oncolytic Virus Therapy
              </a>
            </li>
            <li>
              <a
                href="https://www.mdpi.com/2072-6694/17/24/3948"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-line underline-offset-4 hover:text-bone"
              >
                Oncolytic Viruses in Glioblastoma: Clinical Progress and Future Directions, MDPI Cancers
              </a>
            </li>
            <li>
              <a
                href="https://pubs.rsc.org/en/content/articlehtml/2026/pm/d5pm00179j"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-line underline-offset-4 hover:text-bone"
              >
                RSC Pharmaceutics — Advancements in nano-based drug delivery systems
              </a>
            </li>
            <li>
              <a
                href="https://www.nature.com/articles/s44386-025-00033-2"
                target="_blank"
                rel="noreferrer noopener"
                className="underline decoration-line underline-offset-4 hover:text-bone"
              >
                Nature, npj Drug Discovery — Quantum-machine-assisted drug discovery
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
