"use client";

import { motion } from "framer-motion";
import { SOLUTIONS } from "@/lib/content/solutions";
import { EASE, viewport } from "@/lib/motion";

/* Concrete deliverables, grouped by the discipline they belong to.
   An editorial two-column index — deliberately not a card grid. */
export default function Practice() {
  const groups = SOLUTIONS.reduce<Record<string, typeof SOLUTIONS>>((acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  }, {});

  return (
    <section id="solutions" className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl font-display text-display-md font-semibold"
        >
          What that looks like in practice
        </motion.h2>

        <div className="mt-16 space-y-16">
          {Object.entries(groups).map(([category, items], gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: gi * 0.06, ease: EASE }}
              className="grid gap-8 border-t border-line pt-8 md:grid-cols-12 md:gap-12"
            >
              <h3 className="font-mono text-meta uppercase text-accent md:col-span-3">
                {category}
              </h3>

              <div className="grid gap-10 md:col-span-9 md:grid-cols-2">
                {items.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-display text-xl font-semibold">{item.title}</h4>
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
