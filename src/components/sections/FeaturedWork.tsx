"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { displayTags, distinctRepoUrl } from "@/lib/project-display";
import { EASE, viewport, clipUp } from "@/lib/motion";
import ProjectCoverArt from "@/components/ProjectCoverArt";
import MagneticButton from "@/components/ui/MagneticButton";

/* Horizontal case study: statement, then the product at full width, then
   metadata. No heading-beside-content column. */
export default function FeaturedWork({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-5%", "5%"]);

  const tags = displayTags(project.tags);
  const repo = distinctRepoUrl(project);
  const titleWords = project.title.split(" ");
  const head = titleWords.slice(0, -1).join(" ");
  const tail = titleWords[titleWords.length - 1];

  return (
    <div ref={ref}>
      <div className="grid items-end gap-x-10 gap-y-6 lg:grid-cols-12">
        <h3 className="font-display text-display-md font-semibold lg:col-span-7">
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <motion.span initial="hidden" whileInView="show" viewport={viewport} variants={clipUp} className="block">
              {head}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <motion.span
              initial="hidden" whileInView="show" viewport={viewport} variants={clipUp}
              transition={{ delay: 0.08 }} className="block text-muted"
            >
              {tail}
            </motion.span>
          </span>
        </h3>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="max-w-measure leading-relaxed text-muted lg:col-span-5 lg:pb-3"
        >
          {project.summary}
        </motion.p>
      </div>

      {/* The product, given the room to be understood */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        className="mt-14"
      >
        <Link
          href={`/projects/${project.slug}`}
          className="group relative block overflow-hidden rounded-lg border border-line bg-surface"
          data-cursor="grow"
        >
          <div className="flex items-center gap-2 border-b border-line bg-surface-raised px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            {project.liveUrl && (
              <span className="ml-3 truncate font-mono text-[10px] text-faint">
                {project.liveUrl.replace(/^https?:\/\//, "")}
              </span>
            )}
          </div>

          <div className="relative aspect-[16/9] overflow-hidden bg-surface-sunken">
            {project.coverImageUrl ? (
              <motion.div style={{ y }} className="absolute inset-0 scale-105">
                <Image
                  src={project.coverImageUrl}
                  alt={`${project.title} interface`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 90vw"
                  className="object-cover object-top"
                />
              </motion.div>
            ) : (
              <ProjectCoverArt tags={project.tags} />
            )}
          </div>
        </Link>
      </motion.div>

      {/* Floating metadata beneath the product, running horizontally */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        className="mt-8 flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-t border-line pt-6"
      >
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {tags.map((tag) => (
              <li key={tag} className="font-mono text-meta uppercase text-faint">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap items-center gap-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-meta uppercase text-muted underline decoration-line-strong underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
            >
              Visit live
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-meta uppercase text-muted underline decoration-line-strong underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
            >
              Source
            </a>
          )}
          <MagneticButton href={`/projects/${project.slug}`}>View case study</MagneticButton>
        </div>
      </motion.div>
    </div>
  );
}
