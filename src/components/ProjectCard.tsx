import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import ProjectCoverArt from "@/components/ProjectCoverArt";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-ink-border bg-ink-panel transition-all duration-300 hover:-translate-y-1 hover:border-red/40 hover:shadow-red-lg"
    >
      <div className="relative aspect-video overflow-hidden bg-ink-raised">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          {project.coverImageUrl ? (
            <Image src={project.coverImageUrl} alt={project.title} fill className="object-cover" />
          ) : (
            <ProjectCoverArt tags={project.tags} />
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-white group-hover:text-red">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink-border px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
