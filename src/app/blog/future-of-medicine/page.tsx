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
            &ldquo;Malware that cures cancer&rdquo; makes a good headline,
            but it isn&rsquo;t a real research programme — nobody is
            treating patients with computer viruses. What&rsquo;s actually
            happening in labs is close enough to explain why the idea has
            teeth: researchers are engineering biological and computational
            tools that act with the same logic malware has — a payload,
            a delivery mechanism, a target it seeks out and disables — just
            built from viral genomes, nanoparticles, and edited DNA instead
            of code. Below is where that real work actually stands, on
            three fronts, as of 2026: editing genes directly, delivering
            treatment payloads with precision, and using quantum computing
            to design the molecules in the first place.
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
            CRISPR-Cas9 lets researchers cut DNA at a specific, chosen
            sequence and either disable a gene or splice in a correction.
            Two CRISPR therapies are FDA-approved today: Casgevy, approved
            December 2023 for sickle cell disease and beta-thalassemia, and
            EDIT-101, for the inherited blindness Leber congenital amaurosis
            type 10. Both work by editing a patient&rsquo;s own cells outside
            or inside the body to fix a single, well-understood genetic
            fault — not by rewriting the genome wholesale.
          </p>
          <p>
            Cancer is harder, because most cancers aren&rsquo;t one clean
            mutation. The current CRISPR angle on cancer is mostly about
            improving cell therapies rather than editing tumors directly:
            Caribou Biosciences&rsquo; CB-010 uses CRISPR to edit
            donor immune cells into better cancer hunters, and it entered
            Phase 2 trials for B-cell non-Hodgkin lymphoma in 2025. No CRISPR
            cancer therapy has FDA approval yet.
          </p>
          <p>
            HIV is the honest cautionary tale. Excision BioTherapeutics ran
            a Phase 1/2 trial of EBT-101, a CRISPR treatment delivered by a
            viral vector that cuts HIV&rsquo;s DNA out of infected cells
            directly. It proved safe in patients — but it did not stop the
            virus from rebounding once treatment stopped. That result is
            exactly why doctors don&rsquo;t call this a cure yet: gene
            editing can find and cut viral DNA, but clearing every last
            hidden copy from the body is still unsolved.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            2. Payloads that hunt the disease: engineered viruses and nanoparticles
          </h2>
          <p>
            This is the closest real analogue to the &ldquo;malware&rdquo;
            idea, and it&rsquo;s been in clinics for over a decade.
            Oncolytic virotherapy takes a virus, strips its ability to harm
            healthy tissue, and lets it selectively infect and burst cancer
            cells — releasing tumor antigens that then train the immune
            system to hunt down what&rsquo;s left. T-VEC, a modified herpes
            simplex virus, has been FDA-approved for melanoma since 2015.
          </p>
          <p>
            For brain tumors specifically, several engineered viruses are in
            trials against glioblastoma: PVS-RIPO, an attenuated poliovirus,
            has FDA Fast Track status; G47Δ, an engineered herpes virus, is
            already approved in Japan for recurrent glioblastoma; DNX-2401,
            an engineered adenovirus, has shown early promise. None of these
            are routine treatment yet — glioblastoma remains one of the
            hardest cancers to treat — but the mechanism (an engineered
            biological payload that finds and disables malignant cells) is
            real, approved-in-principle science.
          </p>
          <p>
            Nanomedicine does the same job with non-living carriers instead
            of viruses: liposomes, polymeric nanoparticles, and dendrimers
            engineered to accumulate in tumors — either passively, because
            tumor blood vessels are leakier than healthy ones, or actively,
            via surface molecules that bind to receptors cancer cells
            overexpress. The payoff is the same logic malware has: get the
            payload to the target and nowhere else, so the drug dose that
            reaches healthy tissue — and the side effects that come with
            it — drops.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            3. Quantum-assisted drug discovery
          </h2>
          <p>
            This is where &ldquo;quantum dynamics&rdquo; and mathematics
            genuinely enter the picture — not as a way to run malware
            through DNA, but as a way to simulate molecules well enough to
            design better drugs and better gene-editing guides before they
            ever reach a lab bench. The problem quantum computing is aimed
            at is real: the space of drug-like molecules is estimated at
            around 10⁶⁰, and the quantum-mechanical interactions that decide
            whether a molecule will bind its target are too complex for
            classical computers to simulate exactly at any useful scale.
          </p>
          <p>
            In 2026, hybrid quantum-classical methods from the international
            Quantum for Bio challenge simulated protein complexes of over
            12,000 atoms — the largest biologically meaningful molecular
            simulations run this way so far. Companies including IBM,
            D-Wave, QuEra, and Qubit Pharmaceuticals are running active
            pharma partnerships on molecular simulation and lead
            optimization. It is still an experimental, research-stage tool
            sitting alongside — not replacing — classical computation and
            AI in drug discovery, not a deployed part of any approved
            treatment yet.
          </p>

          <h2 className="pt-4 text-2xl font-medium tracking-tight text-bone">
            Where that actually leaves things
          </h2>
          <p>
            Put together honestly: gene editing can already fix single-gene
            diseases and is being tested, with mixed results, against
            cancer and HIV. Engineered viruses and nanoparticles that hunt
            and disable diseased cells are real and, in a few cases,
            already approved. Quantum computing is starting to make the
            hardest part of drug design — actually simulating the
            chemistry — tractable. None of it is malware, none of it is a
            single unified cure for cancer, HIV, and brain tumors at once,
            and none of it skips the years of trial data that separate
            &ldquo;works in principle&rdquo; from &ldquo;approved
            treatment.&rdquo; That slower, harder version is also the more
            interesting one — it&rsquo;s the one that&rsquo;s actually
            happening.
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
