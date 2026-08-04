"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/content/skills";

export default function SkillsGrid() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {SKILL_CATEGORIES.map((category, i) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-red">
            {category.category}
          </h3>
          <ul className="space-y-3">
            {category.skills.map((skill) => (
              <li
                key={skill.name}
                className="rounded-xl border border-ink-border bg-ink-panel p-4 transition-colors hover:border-red/40"
              >
                <p className="font-medium text-white">{skill.name}</p>
                <p className="mt-1 text-sm text-muted">{skill.note}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
