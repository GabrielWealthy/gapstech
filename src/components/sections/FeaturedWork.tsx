"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { displayTags, distinctRepoUrl } from "@/lib/project-display";
import { EASE, viewport } from "@/lib/motion";
import ProjectCoverArt from "@/components/ProjectCoverArt";
import MagneticButton from "@/components/ui/MagneticButton";

/* The featured slot: a case study, not a card. Full-bleed imagery,
   metadata as a spec sheet, and the description given room to argue. */
export default function FeaturedWork({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Gentle parallax so the artwork moves against the page, not with it
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [1.08, 1.02, 1.08]);

  const tags = displayTags(project.tags);
  const repo = distinctRepoUrl(project);

  return (
    <div ref={ref} className="relative">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Spec column */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: EASE }}
          className="lg:col-span-4 lg:pt-8"
        >
          <dl className="space-y-8">
            <div>
              <dt className="font-mono text-meta uppercase text-faint">Project</dt>
              <dd className="mt-2 font-display text-display-sm font-semibold leading-tight">
                {project.title}
              </dd>
            </div>

            {tags.length > 0 && (
              <div>
                <dt className="font-mono text-meta uppercase text-faint">Category</dt>
                <dd className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
                  {tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            )}

            <div>
              <dt className="font-mono text-meta uppercase text-faint">Summary</dt>
              <dd className="mt-2 max-w-measure leading-relaxed text-muted">
                {project.summary}
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href={`/projects/${project.slug}`}>
              Read the case study
            </MagneticButton>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-meta uppercase text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Visit live
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-meta uppercase text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Source
              </a>
            )}
          </div>
        </motion.div>

        {/* Artwork column — layered frame, parallax interior */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="lg:col-span-8"
        >
          <Link
            href={`/projects/${project.slug}`}
            className="group relative block overflow-hidden rounded-xl border border-line bg-surface shadow-lift"
            data-cursor="grow"
          >
            {/* Browser chrome — grounds the screenshot as a real product */}
            <div className="flex items-center gap-2 border-b border-line bg-surface-raised px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              {project.liveUrl && (
                <span className="ml-3 truncate font-mono text-[10px] text-faint">
                  {project.liveUrl.replace(/^https?:\/\//, "")}
                </span>
              )}
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-surface-sunken">
              {project.coverImageUrl ? (
                <motion.div style={{ y, scale }} className="absolute inset-0">
                  <Image
                    src={project.coverImageUrl}
                    alt={`${project.title} interface`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-top"
                    priority
                  />
                </motion.div>
              ) : (
                <ProjectCoverArt tags={project.tags} />
              )}

              {/* Legibility floor over the artwork's lower edge */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background/70" />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
