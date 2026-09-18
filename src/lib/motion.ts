import type { Variants, Transition } from "framer-motion";

/* One exponential ease-out, used everywhere. A single curve is what
   makes scattered animations read as a system. */
export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const transition: Transition = { duration: 0.7, ease: EASE };
export const fast: Transition = { duration: 0.35, ease: EASE };

/* Reveals start from an already-visible default where possible:
   opacity never starts at 0 for text that matters for SEO/readability
   longer than a beat. */
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition },
};

/* Clip reveal for display type — more interesting than a fade,
   and it keeps the glyphs crisp the whole way. */
export const clipUp: Variants = {
  hidden: { opacity: 0, y: "0.4em", clipPath: "inset(0 0 100% 0)" },
  show: {
    opacity: 1,
    y: "0em",
    clipPath: "inset(0 0 -10% 0)",
    transition: { duration: 0.9, ease: EASE },
  },
};

export const stagger = (amount = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: amount } },
});

/* Shared viewport config so every section triggers at the same depth */
export const viewport = { once: true, margin: "-12% 0px -12% 0px" } as const;
