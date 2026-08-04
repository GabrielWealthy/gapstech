import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProjectBySlug } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project not found — Gapstech" };
  return {
    title: `${project.title} — Gapstech`,
    description: project.summary,
    openGraph: { images: project.coverImageUrl ? [project.coverImageUrl] : [] },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
        {project.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-ink-border px-3 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>

      {project.coverImageUrl && (
        <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl">
          <Image src={project.coverImageUrl} alt={project.title} fill className="object-cover" />
        </div>
      )}

      {(project.videoLink || project.videoUrl) && (
        <div className="mt-8 aspect-video overflow-hidden rounded-2xl bg-ink-raised">
          {project.videoLink ? (
            <iframe
              className="h-full w-full"
              src={project.videoLink.replace("watch?v=", "embed/")}
              allowFullScreen
            />
          ) : (
            <video className="h-full w-full" src={project.videoUrl ?? undefined} controls />
          )}
        </div>
      )}

      <p className="mt-8 whitespace-pre-line leading-relaxed text-muted">{project.description}</p>

      {project.galleryImageUrls.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.galleryImageUrls.map((url) => (
            <div key={url} className="relative aspect-video overflow-hidden rounded-xl">
              <Image src={url} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-dim"
          >
            View Live
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink-border px-6 py-2.5 text-sm font-semibold text-white hover:border-red hover:text-red"
          >
            View Repo
          </a>
        )}
      </div>
    </article>
  );
}
