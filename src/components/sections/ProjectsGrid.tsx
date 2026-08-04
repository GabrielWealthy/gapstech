"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, i) => (
        <motion.div key={project.id} variants={item} className={i === 0 ? "md:col-span-2" : ""}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
