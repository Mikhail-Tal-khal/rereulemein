"use client";

import { useEffect, useState } from "react";

import { accents, type AccentKey } from "@/lib/accents";

const links: { href: string; label: string; accent: AccentKey }[] = [
  { href: "#profile", label: "Profile", accent: "azure" },
  { href: "#arsenal", label: "Arsenal", accent: "ember" },
  { href: "#work", label: "Work", accent: "jade" },
  { href: "#projects", label: "Projects", accent: "violet" },
  { href: "#method", label: "Method", accent: "amber" },
  { href: "#credentials", label: "Credentials", accent: "signal" },
  { href: "#contact", label: "Contact", accent: "plasma" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-tight"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-sm border border-bronze/40 bg-gradient-to-br from-bronze/25 to-ember/10 text-base leading-none text-bronze transition-transform duration-300 group-hover:-translate-y-0.5"
          >
            &#9822;
          </span>
          <span className="text-bone/90">S. Lemein</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const tone = accents[link.accent];
            const isActive = active === link.href;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative block py-1 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
                    isActive ? tone.text : "text-muted hover:text-bone"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 ${
                      isActive ? `w-full ${tone.bgSolid}` : "w-0 bg-transparent"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="flex h-9 w-9 items-center justify-center rounded border border-line text-muted transition-colors hover:text-bone md:hidden"
        >
          <span className="font-mono text-sm">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {open ? (
        <ul className="border-t border-line/70 bg-ink/95 px-6 py-3 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-bone"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
