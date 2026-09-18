"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/content/capabilities";
import { EASE, viewport } from "@/lib/motion";
import CapabilityVisual from "@/components/sections/CapabilityVisual";

export default function Capabilities() {
  const [active, setActive] = useState(0);
  const current = CAPABILITIES[active];

  return (
    <section id="capabilities" className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl font-display text-display-md font-semibold"
        >
          What I actually do
        </motion.h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* The list carries the section. Rows, not cards. */}
          <ul className="lg:col-span-7">
            {CAPABILITIES.map((cap, i) => {
              const isActive = i === active;
              return (
                <motion.li
                  key={cap.index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group border-b border-line"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className="flex w-full items-baseline gap-5 py-7 text-left md:gap-8"
                  >
                    <span
                      className={`tnum font-mono text-meta uppercase transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-faint"
                      }`}
                    >
                      {cap.index}
                    </span>

                    <span className="flex-1">
                      <span
                        className={`block font-display text-display-sm font-semibold transition-colors duration-300 ${
                          isActive ? "text-foreground" : "text-muted"
                        }`}
                      >
                        {cap.title}
                      </span>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: EASE }}
                            className="block overflow-hidden"
                          >
                            <span className="block pt-3 text-base text-muted">
                              {cap.blurb}
                            </span>
                            <span className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                              {cap.items.map((item) => (
                                <span
                                  key={item}
                                  className="font-mono text-meta uppercase text-faint"
                                >
                                  {item}
                                </span>
                              ))}
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>

                    <span
                      className={`mt-1 h-px w-8 shrink-0 transition-all duration-500 ease-out ${
                        isActive ? "w-14 bg-accent" : "bg-line-strong"
                      }`}
                    />
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {/* The visualization answers the hovered row */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8">
                <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <CapabilityVisual key={current.kind} kind={current.kind} />
                  </AnimatePresence>
                </div>
              </div>
              <p className="mt-5 font-mono text-meta uppercase text-faint">
                <span className="tnum text-accent">{current.index}</span>
                <span className="px-2 text-line-strong">/</span>
                {current.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
