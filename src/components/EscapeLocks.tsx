"use client";

import { useState } from "react";
import { escapeRooms } from "@/data/profile";

export default function EscapeLocks() {
  const [opened, setOpened] = useState<number[]>([]);
  const allOpen = opened.length === escapeRooms.length;

  const toggle = (index: number) => {
    setOpened((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  };

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-3">
        {escapeRooms.map((item, index) => {
          const open = opened.includes(index);
          const panelId = `lock-panel-${index}`;

          return (
            <button
              key={item.lock}
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={open}
              aria-controls={panelId}
              className={`h-full cursor-pointer rounded-sm border p-6 text-left transition-colors duration-300 ${
                open
                  ? "border-signal/40 bg-signal/[0.05]"
                  : "border-line/80 bg-surface/50 hover:border-bone/30"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {item.lock}
                </span>
                <span
                  aria-hidden="true"
                  className={`text-sm transition-colors ${
                    open ? "text-signal" : "text-muted/70"
                  }`}
                >
                  {open ? "◇" : "◈"}
                </span>
              </div>

              <h4 className="mt-4 text-[15px] font-medium leading-snug text-bone">
                {item.heading}
              </h4>

              <div
                id={panelId}
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </div>

              {!open ? (
                <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-muted/60">
                  Pick the lock
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <p
        aria-live="polite"
        className={`mt-5 font-mono text-[11px] uppercase tracking-[0.2em] transition-opacity duration-500 ${
          allOpen ? "text-signal opacity-100" : "text-muted/40 opacity-70"
        }`}
      >
        {allOpen
          ? "→ Three locks open. The door was never the hard part."
          : `${opened.length} / ${escapeRooms.length} open`}
      </p>
    </div>
  );
}
