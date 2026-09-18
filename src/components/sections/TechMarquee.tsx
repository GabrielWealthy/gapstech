"use client";

import { motion } from "framer-motion";
import { TOOLS } from "@/lib/content/tools";

export default function TechMarquee() {
  const track = [...TOOLS, ...TOOLS];

  return (
    <section className="border-y border-ink-border bg-ink py-8">
      <div className="overflow-hidden">
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {track.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="whitespace-nowrap rounded-full border border-ink-border bg-ink-panel px-5 py-2 text-sm text-muted"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
