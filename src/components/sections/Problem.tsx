"use client";

import { motion } from "framer-motion";
import { EASE, viewport } from "@/lib/motion";

const WORDS = [
  "Copy a lead from the form into the CRM.",
  "Chase the invoice.",
  "Re-type the call notes.",
  "Send the same onboarding email again.",
  "Export the report. Format the report. Send the report.",
];

export default function Problem() {
  return (
    <section className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-display-md font-semibold lg:col-span-7"
          >
            Most businesses don&apos;t have a software problem.
            <span className="block text-muted">They have a handoff problem.</span>
          </motion.h2>

          <div className="lg:col-span-5 lg:pt-3">
            <ul className="space-y-0">
              {WORDS.map((line, i) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                  className="flex items-baseline gap-4 border-b border-line py-4 text-muted"
                >
                  <span aria-hidden="true" className="h-px w-4 shrink-0 bg-accent/60" />
                  <span className="line-through decoration-line-strong decoration-1">
                    {line}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
              className="mt-8 max-w-measure leading-relaxed text-foreground"
            >
              Every one of those is a seam between two tools that never learned
              to talk. I close the seams — so the work moves itself and your team
              handles the part that genuinely needs a person.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
