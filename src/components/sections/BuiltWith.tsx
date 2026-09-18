"use client";

import { motion } from "framer-motion";
import { TOOLS } from "@/lib/content/tools";
import { EASE, viewport } from "@/lib/motion";

/* Credibility without invented numbers: the actual stack, set as type.
   Not a logo wall — the words carry it. */
export default function BuiltWith() {
  return (
    <section className="relative overflow-hidden border-t border-line py-20">
      <div className="mx-auto max-w-shell px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-mono text-meta uppercase text-faint"
        >
          Built with
        </motion.h2>
      </div>

      <div className="mask-edges relative mt-8 flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-14 pr-14 motion-reduce:animate-none">
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              aria-hidden={i >= TOOLS.length}
              className="whitespace-nowrap font-display text-2xl font-medium text-muted transition-colors duration-300 hover:text-foreground md:text-3xl"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
