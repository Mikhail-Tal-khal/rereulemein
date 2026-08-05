import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line/70 px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[11px] tracking-wide text-muted/70">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <p className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-muted/50">
          Built with Next.js
          <span className="text-muted/30">·</span>
          <span className="text-bronze/70">&#9822;</span>
          <span>g1 to f3</span>
        </p>
      </div>
    </footer>
  );
}
