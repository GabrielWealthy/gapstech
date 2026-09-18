"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

/* The hero's system visualization: input sources converge through an
   orchestration spine into outputs. It is the product thesis drawn —
   not decoration, and not a stock "AI blob". */

const NODES = [
  { id: "in-1", x: 40, y: 48, label: "CRM" },
  { id: "in-2", x: 40, y: 124, label: "Forms" },
  { id: "in-3", x: 40, y: 200, label: "Calls" },
  { id: "core", x: 210, y: 124, label: "n8n", core: true },
  { id: "ai", x: 330, y: 62, label: "AI" },
  { id: "db", x: 330, y: 186, label: "Store" },
  { id: "out", x: 452, y: 124, label: "Action" },
];

const EDGES = [
  "M 62 48 C 130 48, 140 124, 188 124",
  "M 62 124 L 188 124",
  "M 62 200 C 130 200, 140 124, 188 124",
  "M 232 124 C 280 124, 285 62, 308 62",
  "M 232 124 C 280 124, 285 186, 308 186",
  "M 352 62 C 400 62, 405 124, 430 124",
  "M 352 186 C 400 186, 405 124, 430 124",
];

export default function SystemDiagram({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 500 250"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Edges draw in, then carry a travelling pulse */}
      {EDGES.map((d, i) => (
        <g key={d}>
          <motion.path
            d={d}
            stroke="var(--border-strong)"
            strokeWidth="1"
            initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
            animate={reduce ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5 + i * 0.09, ease: EASE }}
          />
          {!reduce && (
            <motion.path
              d={d}
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="0.14 0.86"
              initial={{ strokeDashoffset: 1, opacity: 0 }}
              animate={{ strokeDashoffset: [1, 0], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 3.4,
                delay: 1.6 + i * 0.42,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "linear",
              }}
            />
          )}
        </g>
      ))}

      {/* Nodes */}
      {NODES.map((n, i) => (
        <motion.g
          key={n.id}
          initial={reduce ? undefined : { opacity: 0, scale: 0.7 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 + i * 0.08, ease: EASE }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        >
          {n.core ? (
            <>
              <rect
                x={n.x - 22}
                y={n.y - 22}
                width="44"
                height="44"
                rx="12"
                fill="var(--accent-wash)"
                stroke="var(--accent)"
                strokeWidth="1"
              />
              {!reduce && (
                <motion.rect
                  x={n.x - 22}
                  y={n.y - 22}
                  width="44"
                  height="44"
                  rx="12"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  fill="none"
                  animate={{ opacity: [0.9, 0.2, 0.9], scale: [1, 1.14, 1] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                />
              )}
            </>
          ) : (
            <circle
              cx={n.x}
              cy={n.y}
              r="21"
              fill="var(--surface-raised)"
              stroke="var(--border-strong)"
              strokeWidth="1"
            />
          )}
          <text
            x={n.x}
            y={n.y + 3.5}
            textAnchor="middle"
            className="font-mono"
            fontSize="9"
            letterSpacing="0.06em"
            fill={n.core ? "var(--accent)" : "var(--muted)"}
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
