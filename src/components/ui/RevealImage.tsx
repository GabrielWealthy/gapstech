"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

/* A photograph that uncovers itself as it enters view, with the interior
   drifting against the frame. One authored moment per image — not a fade. */
export default function RevealImage({
  src,
  alt,
  className,
  sizes = "(max-width: 1024px) 100vw, 45vw",
  priority = false,
  drift = 8,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  drift?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : [`-${drift}%`, `${drift}%`]
  );

  return (
    <motion.div
      ref={ref}
      initial={reduce ? undefined : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={reduce ? undefined : { clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 1.1, ease: EASE }}
      className={`relative overflow-hidden bg-surface ${className ?? ""}`}
    >
      <motion.div style={{ y: reduce ? 0 : y }} className="absolute inset-0 scale-110">
        {/* `fill` rather than width/height: the frame sets the size, so Next
            can pick a sensible srcset entry instead of the 3840px variant. */}
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
      {/* Grounds the photograph in the page's palette without tinting skin */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
    </motion.div>
  );
}
