"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { experience } from "@/data/profile";
import { accentAt } from "@/lib/accents";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section
      id="work"
      index="03"
      accent="jade"
      title="Work"
      lede="Four years of production systems — payments, geolocation, government facing applications — before the move fully into security."
    >
      <ol className="relative border-l border-line/80 pl-6 sm:pl-10">
        {experience.map((role, index) => {
          const open = openIndex === index;
          const panelId = `role-panel-${index}`;
          const tone = accentAt(index);

          return (
            <li key={`${role.org}-${role.title}`} className="relative pb-3">
              <span
                aria-hidden="true"
                className={`absolute -left-[calc(1.5rem+4.5px)] top-6 h-2 w-2 rounded-full ring-4 ring-ink transition-all duration-300 sm:-left-[calc(2.5rem+4.5px)] ${
                  open ? `${tone.bgSolid} scale-125` : "bg-line"
                }`}
              />
              <Reveal delay={index * 60}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className={`w-full cursor-pointer border-b border-line/60 py-6 text-left transition-colors ${tone.borderHover}`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-lg font-medium tracking-tight text-bone">
                      {role.title}
                      <span className={tone.text}> · {role.org}</span>
                    </h3>
                    <span className="font-mono text-xs tracking-wide text-muted">
                      {role.period}
                    </span>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${tone.border} ${tone.bg} ${tone.text}`}
                    >
                      {role.mode}
                    </span>
                    <p className="text-sm text-muted">{role.blurb}</p>
                  </div>

                  <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="mt-5 space-y-2.5">
                        {role.points.map((point) => (
                          <li
                            key={point.slice(0, 28)}
                            className="flex gap-3 text-[15px] leading-relaxed text-bone/80"
                          >
                            <span
                              aria-hidden="true"
                              className={`mt-2.5 h-px w-4 shrink-0 ${tone.bgSolid} opacity-70`}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <span
                    className={`mt-4 inline-block font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                      open ? "text-muted/70" : tone.text
                    }`}
                  >
                    {open ? "— collapse" : "+ detail"}
                  </span>
                </button>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
