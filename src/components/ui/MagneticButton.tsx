"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
};

/* Magnetic pull on hover. Disabled for reduced-motion and for
   coarse pointers, where there is no hover to respond to. */
export default function MagneticButton({
  href,
  children,
  variant = "solid",
  external = false,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setOffset({ x: x * 0.25, y: y * 0.35 });
  }

  const base = cn(
    "group relative inline-flex items-center gap-3 rounded-full px-8 py-4",
    "font-body text-sm font-medium tracking-tight",
    "transition-colors duration-300 ease-out",
    variant === "solid"
      ? "bg-accent text-white hover:bg-accent-bright"
      : "border border-line-strong text-foreground hover:border-accent hover:text-accent",
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        <path
          d="M1 7h11M8 3l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.6 }}
      className="inline-block"
      data-cursor="grow"
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={base}>
          {inner}
        </Link>
      )}
    </motion.span>
  );
}
