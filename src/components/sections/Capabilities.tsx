"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/content/capabilities";
import { EASE, viewport } from "@/lib/motion";
import CapabilityVisual from "@/components/sections/CapabilityVisual";

/* Centered heading, then full-width rows. The visualization overlaps the
   rows from the right rather than occupying its own column, so this
   section does not repeat the two-column template. */
export default function Capabilities() {
  const [active, setActive] = useState(0);
  const current = CAPABILITIES[active];

  return (
    <section id="capabilities" className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-shell px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-2xl text-center font-display text-display-md font-semibold"
        >
          What I actually do
        </motion.h2>

        <div className="relative mt-20">
          {/* Overlapping visual — sits behind the rows, never blocks them */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] items-center lg:flex">
            <AnimatePresence mode="wait">
              <motion.div key={current.kind} className="w-full opacity-60">
                <CapabilityVisual kind={current.kind} />
              </motion.div>
            </AnimatePresence>
          </div>

          <ul className="relative">
            {CAPABILITIES.map((cap, i) => {
              const isActive = i === active;
              return (
                <motion.li
                  key={cap.index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: EASE }}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="border-b border-line first:border-t"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className={`flex w-full items-baseline gap-6 py-8 text-left transition-[padding] duration-500 ease-out md:gap-10 ${
                      isActive ? "md:pl-6" : "md:pl-0"
                    }`}
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
                        className={`block font-display text-3xl font-semibold transition-colors duration-300 md:text-4xl ${
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
                            transition={{ duration: 0.4, ease: EASE }}
                            className="block overflow-hidden"
                          >
                            <span className="block max-w-md pt-3 text-base text-muted">
                              {cap.blurb}
                            </span>
                            <span className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                              {cap.items.map((item) => (
                                <span key={item} className="font-mono text-meta uppercase text-faint">
                                  {item}
                                </span>
                              ))}
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>

                    <span
                      aria-hidden="true"
                      className={`mt-2 h-px shrink-0 transition-all duration-500 ease-out ${
                        isActive ? "w-16 bg-accent" : "w-6 bg-line-strong"
                      }`}
                    />
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
