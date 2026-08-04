"use client";

import { motion } from "framer-motion";
import { BIO } from "@/lib/content/bio";
import SkillsGrid from "@/components/sections/SkillsGrid";
import RevealHeading from "@/components/RevealHeading";

const QUICK_FACTS = [
  { label: "Focus", value: "AI Engineering & Automation" },
  { label: "Core Stack", value: "n8n · AWS · Bubble.io · FlutterFlow" },
  { label: "Approach", value: "Ship fast, built to last" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <RevealHeading title="About" />

      <div className="mt-8 grid gap-10 md:grid-cols-5 md:gap-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="whitespace-pre-line text-base leading-relaxed text-muted md:col-span-3"
        >
          {BIO}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 rounded-2xl border border-ink-border bg-ink-panel p-6 md:col-span-2"
        >
          {QUICK_FACTS.map((fact) => (
            <div key={fact.label}>
              <p className="text-xs font-semibold uppercase tracking-widest text-red">{fact.label}</p>
              <p className="mt-1 text-sm text-white">{fact.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16">
        <SkillsGrid />
      </div>
    </section>
  );
}
