"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const TILT = 48;

export default function SectionBand({
  id,
  children,
  tone = "panel",
  glow = false,
  className,
}: {
  id?: string;
  children: ReactNode;
  tone?: "panel" | "base";
  glow?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        tone === "panel" ? "bg-ink-panel" : "bg-transparent",
        className
      )}
      style={{
        clipPath: `polygon(0 ${TILT}px, 100% 0, 100% calc(100% - ${TILT}px), 0 100%)`,
      }}
    >
      {glow && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-red-glow" />
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ paddingTop: TILT + 48, paddingBottom: TILT + 48 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
