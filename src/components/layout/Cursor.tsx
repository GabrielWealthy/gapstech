"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/* A small dot that expands over interactive elements.
   Never rendered on touch devices or under reduced-motion. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [grown, setGrown] = useState(false);
  const reduce = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 34, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 34, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setGrown(
        !!el?.closest('a, button, [data-cursor="grow"], input, textarea, select')
      );
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <motion.span
        animate={{
          width: grown ? 44 : 8,
          height: grown ? 44 : 8,
          opacity: grown ? 0.5 : 1,
          borderWidth: grown ? 1 : 0,
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="block -translate-x-1/2 -translate-y-1/2 rounded-full border-accent bg-accent"
      />
    </motion.div>
  );
}
