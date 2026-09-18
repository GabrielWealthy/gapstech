"use client";

import { motion } from "framer-motion";
import { SOLUTIONS } from "@/lib/content/solutions";
import RevealHeading from "@/components/RevealHeading";
import SectionBand from "@/components/layout/SectionBand";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Solutions() {
  return (
    <SectionBand id="solutions" tone="panel">
      <div className="mx-auto max-w-6xl px-6">
        <RevealHeading
          title="What I Automate"
          subtitle="Smart solutions to save time, cut manual work, and unlock new efficiencies."
          from="right"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.map((solution) => (
            <motion.div
              key={solution.title}
              variants={item}
              className="rounded-2xl border border-ink-border bg-ink p-6 transition-colors hover:border-red/40"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-red">
                {solution.category}
              </p>
              <h3 className="mt-2 font-display text-base font-semibold text-white">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionBand>
  );
}
