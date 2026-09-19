"use client";

import { TOOLS } from "@/lib/content/tools";

/* A restrained line, not a wall. Small type, continuous drift, low
   contrast — it should register without competing. */
export default function BuiltWith() {
  return (
    <section className="relative overflow-hidden border-t border-line py-12">
      <div className="mask-edges flex">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 motion-reduce:animate-none">
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              aria-hidden={i >= TOOLS.length}
              className="whitespace-nowrap font-mono text-meta uppercase text-faint"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
