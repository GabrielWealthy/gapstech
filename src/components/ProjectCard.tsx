import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-ink-border bg-ink-panel transition-all hover:-translate-y-1 hover:border-red/40 hover:shadow-red-lg"
    >
      <div className="relative aspect-video bg-ink-raised">
        {project.coverImageUrl ? (
          <Image src={project.coverImageUrl} alt={project.title} fill className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-faint">
            No cover image
          </div>
        )}
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
