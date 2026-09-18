"use client";

import { motion } from "framer-motion";
import { VALUE_PROPS } from "@/lib/content/value-props";

export default function ValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-8 md:grid-cols-3">
        {VALUE_PROPS.map((prop, i) => (
          <motion.div
            key={prop.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-l-2 border-red/40 pl-5"
          >
            <h3 className="font-display text-lg font-semibold text-white">{prop.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{prop.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
