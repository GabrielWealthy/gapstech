"use client";

import { motion } from "framer-motion";
import { SOLUTIONS } from "@/lib/content/solutions";
import { EASE, viewport } from "@/lib/motion";

/* Deliberate grid-breaking: each group sits at a different column start,
   span and vertical offset. No cards, no repeating row. */
const PLACEMENT: Record<string, string> = {
  AUTOMATION: "lg:col-start-1 lg:col-span-5 lg:row-start-1",
  AI: "lg:col-start-8 lg:col-span-5 lg:mt-24",
  "NO-CODE": "lg:col-start-2 lg:col-span-5 lg:mt-16",
  CRM: "lg:col-start-8 lg:col-span-4 lg:mt-4",
  CLOUD: "lg:col-start-1 lg:col-span-6 lg:mt-12",
};

export default function Practice() {
  const groups = SOLUTIONS.reduce<Record<string, typeof SOLUTIONS>>((acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  }, {});

  return (
    <section id="solutions" className="relative border-t border-line py-32 md:py-44">
      <div className="mx-auto max-w-shell px-6">
        {/* Small label, right-aligned — a different heading position again */}
        <div className="grid gap-x-10 gap-y-20 lg:grid-cols-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display text-2xl font-semibold md:text-3xl lg:col-span-4 lg:col-start-9 lg:text-right"
          >
            What that looks like
            <span className="block text-muted">in practice</span>
          </motion.h2>

          {Object.entries(groups).map(([category, items], gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: gi * 0.05, ease: EASE }}
              className={PLACEMENT[category] ?? "lg:col-span-6"}
            >
              <h3 className="font-mono text-meta uppercase text-accent">{category}</h3>

              <div className="mt-6 space-y-8 border-t border-line pt-6">
                {items.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-display text-xl font-semibold md:text-2xl">
                      {item.title}
                    </h4>
                    <p className="mt-2 max-w-measure leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
