"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE, viewport } from "@/lib/motion";

const STEPS = [
  { step: "01", title: "Map", body: "I trace how the work actually moves today — including the steps nobody documented." },
  { step: "02", title: "Cut", body: "The handoffs that exist only because two tools don't talk get automated first." },
  { step: "03", title: "Build", body: "No-code where it's faster, code where it's necessary. Fit, never ideology." },
  { step: "04", title: "Ship", body: "Deployed on infrastructure that holds, with the failure cases handled." },
];

/* A timeline, not four cards. The connecting rule draws itself as the
   section passes, so progress is the interaction. */
export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-xl text-center font-display text-display-sm font-semibold"
        >
          How the work gets done
        </motion.h2>

        <div ref={ref} className="relative mt-20">
          {/* The rule that ties the steps together */}
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-line md:block">
            <motion.div
              style={{ scaleX }}
              className="h-full origin-left bg-accent"
            />
          </div>

          <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
            {STEPS.map((item, i) => (
              <motion.li
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="relative"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 hidden h-[15px] w-[15px] -translate-y-1/2 rounded-full border border-line-strong bg-background md:block"
                />
                <span className="tnum block font-mono text-meta uppercase text-faint md:pt-8">
                  {item.step}
                </span>
                <span className="mt-3 block font-display text-2xl font-semibold">
                  {item.title}
                </span>
                <span className="mt-2 block max-w-xs leading-relaxed text-muted">
                  {item.body}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
