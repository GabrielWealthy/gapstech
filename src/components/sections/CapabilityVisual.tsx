"use client";

import { motion } from "framer-motion";
import type { CapabilityKind } from "@/lib/content/capabilities";

const stroke = "var(--border-strong)";
const hot = "var(--accent)";
const dim = "var(--muted)";

/* Each capability visualizes its own shape of work. Authored SVG —
   no icon-font glyphs, no emoji, one consistent 1.25px stroke. */
export default function CapabilityVisual({ kind }: { kind: CapabilityKind }) {
  return (
    <motion.svg
      key={kind}
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="h-auto w-full"
    >
      {kind === "ai" && (
        <g>
          {[70, 110, 150].map((y, i) => (
            <circle key={y} cx="52" cy={y} r="7" stroke={stroke} strokeWidth="1.25" />
          ))}
          {[86, 110, 134].map((y) => (
            <circle key={y} cx="160" cy={y} r="7" stroke={hot} strokeWidth="1.25" />
          ))}
          <circle cx="266" cy="110" r="9" stroke={hot} strokeWidth="1.25" fill="var(--accent-wash)" />
          {[70, 110, 150].map((y1) =>
            [86, 110, 134].map((y2) => (
              <line key={`${y1}-${y2}`} x1="59" y1={y1} x2="153" y2={y2} stroke={stroke} strokeWidth="0.75" opacity="0.55" />
            ))
          )}
          {[86, 110, 134].map((y) => (
            <line key={y} x1="167" y1={y} x2="257" y2="110" stroke={stroke} strokeWidth="0.75" opacity="0.55" />
          ))}
          <motion.circle
            r="3" fill={hot}
            animate={{ cx: [52, 160, 266], cy: [70, 110, 110] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      )}

      {kind === "automation" && (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={26 + i * 74} y="92" width="52" height="36" rx="8" stroke={i === 1 ? hot : stroke} strokeWidth="1.25" />
          ))}
          {[0, 1, 2].map((i) => (
            <line key={i} x1={78 + i * 74} y1="110" x2={100 + i * 74} y2="110" stroke={stroke} strokeWidth="1.25" />
          ))}
          <motion.rect
            y="92" width="52" height="36" rx="8" fill="var(--accent-wash)" stroke={hot} strokeWidth="1.25"
            animate={{ x: [26, 100, 174, 248] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      )}

      {kind === "fullstack" && (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <motion.rect
              key={i}
              x={80} y={48 + i * 34} width="160" height="26" rx="5"
              stroke={i === 0 ? hot : stroke} strokeWidth="1.25"
              animate={{ x: [80, 80 + (i - 1.5) * 10, 80] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
            />
          ))}
          <text x="160" y="196" textAnchor="middle" fontSize="9" letterSpacing="0.14em" fill={dim} className="font-mono">
            UI · API · DATA
          </text>
        </g>
      )}

      {kind === "nocode" && (
        <g>
          <rect x="34" y="42" width="112" height="136" rx="10" stroke={stroke} strokeWidth="1.25" />
          <rect x="174" y="42" width="112" height="136" rx="16" stroke={hot} strokeWidth="1.25" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x="50" y={62 + i * 30} width={80 - i * 18} height="14" rx="4" stroke={stroke} strokeWidth="1" />
          ))}
          <motion.rect
            x="190" y="62" width="80" height="14" rx="4" fill="var(--accent-wash)" stroke={hot} strokeWidth="1"
            animate={{ y: [62, 92, 122, 62] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      )}

      {kind === "cloud" && (
        <g>
          <path d="M104 116a30 30 0 0 1 30-30 34 34 0 0 1 64 8 24 24 0 0 1-6 47h-58a30 30 0 0 1-30-25Z" stroke={hot} strokeWidth="1.25" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={78 + i * 56} y="164" width="42" height="20" rx="5" stroke={stroke} strokeWidth="1.25" />
              <motion.line
                x1={99 + i * 56} y1="141" x2={99 + i * 56} y2="164" stroke={hot} strokeWidth="1.25"
                animate={{ opacity: [0.15, 1, 0.15] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
              />
            </g>
          ))}
        </g>
      )}

      {kind === "crm" && (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <motion.path
              key={i}
              d={`M ${52 + i * 12} ${52 + i * 32} H ${268 - i * 12}`}
              stroke={i === 3 ? hot : stroke}
              strokeWidth="1.25"
              strokeLinecap="round"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
            />
          ))}
          <text x="160" y="196" textAnchor="middle" fontSize="9" letterSpacing="0.14em" fill={dim} className="font-mono">
            LEAD → CLOSE
          </text>
        </g>
      )}
    </motion.svg>
  );
}
