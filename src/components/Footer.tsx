import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[11px] tracking-wide text-muted/70">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <p className="font-mono text-[11px] tracking-wide text-muted/50">
          Built with Next.js · &#9816; g1 to f3
        </p>
      </div>
    </footer>
  );
}
