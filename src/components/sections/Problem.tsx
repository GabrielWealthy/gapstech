"use client";

import { motion } from "framer-motion";
import { EASE, viewport, clipUp } from "@/lib/motion";

const SEAMS = [
  "Copy the lead into the CRM",
  "Chase the invoice",
  "Re-type the call notes",
  "Send the onboarding email again",
  "Export, format, send the report",
];

/* Full width, no container. The two words carry the argument, so they
   are the only things styled differently. */
export default function Problem() {
  return (
    <section className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6">
        <h2 className="font-display text-display-lg font-semibold">
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <motion.span initial="hidden" whileInView="show" viewport={viewport} variants={clipUp} className="block">
              Most businesses don&apos;t have
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <motion.span
              initial="hidden" whileInView="show" viewport={viewport} variants={clipUp}
              transition={{ delay: 0.08 }} className="block"
            >
              a{" "}
              {/* The wrong diagnosis, struck through */}
              <span className="relative text-muted">
                software
                <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-muted" />
              </span>{" "}
              problem.
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <motion.span
              initial="hidden" whileInView="show" viewport={viewport} variants={clipUp}
              transition={{ delay: 0.16 }} className="block"
            >
              They have a <span className="text-accent">handoff</span> problem.
            </motion.span>
          </span>
        </h2>

        {/* The seams themselves, running horizontally beneath the statement */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-20 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8"
        >
          {SEAMS.map((seam, i) => (
            <motion.li
              key={seam}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.06, ease: EASE }}
              className="font-mono text-meta uppercase text-faint line-through decoration-line-strong"
            >
              {seam}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="ml-auto mt-12 max-w-measure text-lg leading-relaxed text-foreground md:w-3/5"
        >
          Every one of those is a seam between two tools that never learned to talk.
          I close the seams, so the work moves itself and your team handles the part
          that genuinely needs a person.
        </motion.p>
      </div>
    </section>
  );
}
