"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS } from "@/lib/content/faq";
import { EASE, viewport } from "@/lib/motion";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display text-display-md font-semibold lg:col-span-4"
          >
            Questions,
            <span className="block text-muted">answered plainly</span>
          </motion.h2>

          <dl className="border-t border-line lg:col-span-8">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: EASE }}
                  className="border-b border-line"
                >
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-7 text-left"
                    >
                      <span
                        className={`font-display text-lg font-semibold transition-colors duration-300 md:text-xl ${
                          isOpen ? "text-foreground" : "text-muted"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Drawn plus/minus — rotates into a minus when open */}
                      <span className="relative mt-1.5 h-3.5 w-3.5 shrink-0">
                        <span
                          className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 transition-colors duration-300 ${
                            isOpen ? "bg-accent" : "bg-muted"
                          }`}
                        />
                        <span
                          className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 transition-all duration-300 ease-out ${
                            isOpen ? "rotate-90 bg-accent opacity-0" : "bg-muted opacity-100"
                          }`}
                        />
                      </span>
                    </button>
                  </dt>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.dd
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-measure pb-8 leading-relaxed text-muted">
                          {faq.answer}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
