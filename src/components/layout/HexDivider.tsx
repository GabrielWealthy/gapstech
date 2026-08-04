"use client";

import { motion } from "framer-motion";

export default function HexDivider() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.3 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center py-4"
    >
      <svg width="40" height="35" viewBox="0 0 48 42" fill="none">
        <polygon
          points="24,1 46,11.5 46,30.5 24,41 2,30.5 2,11.5"
          stroke="#E8262A"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>
  );
}
