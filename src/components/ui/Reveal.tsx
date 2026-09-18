"use client";

import { motion, type Variants } from "framer-motion";
import { riseIn, viewport } from "@/lib/motion";

export default function Reveal({
  children,
  variants = riseIn,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li" | "p";
}) {
  const Tag = motion[as];
  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}
