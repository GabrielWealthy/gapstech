"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { displayTags } from "@/lib/project-display";
import { EASE, viewport } from "@/lib/motion";

/* Remaining work as an editorial index. Rows, not a card grid — the
   cover art surfaces on hover instead of occupying permanent space. */
export default function WorkIndex({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  const active = projects.find((p) => p.id === hovered);

  return (
    <div
      className="relative mt-24"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      <h3 className="font-mono text-meta uppercase text-faint">More work</h3>

      <ul className="mt-6 border-t border-line">
        {projects.map((project, i) => {
          const tags = displayTags(project.tags, 3);
          return (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="border-b border-line"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex flex-col gap-3 py-8 md:flex-row md:items-baseline md:gap-10"
              >
                <span className="tnum font-mono text-meta uppercase text-faint md:w-12">
                  {String(i + 2).padStart(2, "0")}
                </span>

                <span className="flex-1">
                  <span className="block font-display text-2xl font-semibold text-muted transition-colors duration-300 group-hover:text-foreground md:text-3xl">
                    {project.title}
                  </span>
                  <span className="mt-2 block max-w-measure text-sm text-faint">
                    {project.summary}
                  </span>
                </span>

                {tags.length > 0 && (
                  <span className="hidden shrink-0 gap-3 lg:flex">
                    {tags.map((tag) => (
                      <span key={tag} className="font-mono text-meta uppercase text-faint">
                        {tag}
                      </span>
                    ))}
                  </span>
                )}

                <span className="hidden h-px w-8 shrink-0 bg-line-strong transition-all duration-500 ease-out group-hover:w-14 group-hover:bg-accent md:block" />
              </Link>
            </motion.li>
          );
        })}
      </ul>

      {/* Cover art follows the pointer — desktop, fine pointers only */}
      {!reduce && (
        <AnimatePresence>
          {active?.coverImageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.28, ease: EASE }}
              style={{ left: pos.x + 28, top: pos.y - 90 }}
              className="pointer-events-none fixed z-40 hidden aspect-[16/10] w-72 overflow-hidden rounded-lg border border-line-strong shadow-lift lg:block"
            >
              <Image
                src={active.coverImageUrl}
                alt=""
                fill
                sizes="288px"
                className="object-cover object-top"
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
