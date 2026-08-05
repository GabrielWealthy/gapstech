"use client";

import { motion } from "framer-motion";

const VARIANTS = {
  bottom: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -32 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 32 }, show: { opacity: 1, x: 0 } },
};

export default function RevealHeading({
  title,
  subtitle,
  from = "bottom",
  align = "left",
}: {
  title: string;
  subtitle?: string;
  from?: "bottom" | "left" | "right";
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={VARIANTS[from].hidden}
      whileInView={VARIANTS[from].show}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={align === "center" ? "text-center" : ""}
    >
      <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
    </motion.div>
  );
}
