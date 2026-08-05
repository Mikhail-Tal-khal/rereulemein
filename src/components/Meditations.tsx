"use client";

import { useCallback, useEffect, useState } from "react";
import { meditations } from "@/data/profile";

const ROTATE_MS = 9000;

export default function Meditations() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((step: number) => {
    setIndex((current) => (current + step + meditations.length) % meditations.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => go(1), ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [go, paused]);

  const quote = meditations[index];

  return (
    <figure
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative rounded-sm border border-line/80 bg-surface/40 p-8 sm:p-10"
    >
      <span
        aria-hidden="true"
        className="absolute left-6 top-3 font-serif text-6xl leading-none text-bronze/25 sm:left-8"
      >
        &ldquo;
      </span>

      <blockquote
        key={index}
        aria-live="polite"
        className="relative animate-fade-in font-serif text-2xl italic leading-snug text-bone/95 sm:text-3xl"
      >
        {quote.text}
      </blockquote>

      <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        Marcus Aurelius · Meditations, {quote.ref}
      </figcaption>

      <div className="mt-8 flex items-center justify-between gap-4 border-t border-line/70 pt-5">
        <div className="flex items-center gap-2">
          {meditations.map((item, dotIndex) => (
            <button
              key={item.ref}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Passage ${dotIndex + 1}`}
              aria-current={dotIndex === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIndex === index
                  ? "w-6 bg-bronze"
                  : "w-1.5 bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous passage"
            className="h-8 w-8 rounded-sm border border-line text-muted transition-colors hover:border-bone/40 hover:text-bone"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next passage"
            className="h-8 w-8 rounded-sm border border-line text-muted transition-colors hover:border-bone/40 hover:text-bone"
          >
            →
          </button>
        </div>
      </div>

      <p className="mt-4 font-mono text-[10px] tracking-[0.12em] text-muted/50">
        George Long translation, 1862 · public domain
      </p>
    </figure>
  );
}
