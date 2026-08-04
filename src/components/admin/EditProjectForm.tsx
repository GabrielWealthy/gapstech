"use client";

import ProjectForm from "@/components/admin/ProjectForm";
import { updateProject } from "@/app/actions/admin-projects";

type Row = {
  title: string;
  summary: string;
  description: string;
  cover_image_url: string | null;
  gallery_image_urls: string[];
  video_url: string | null;
  video_link: string | null;
  tags: string[];
  live_url: string | null;
  repo_url: string | null;
  project_date: string;
  published: boolean;
};

export default function EditProjectForm({ id, project }: { id: string; project: Row }) {
  return (
    <ProjectForm
      initialValues={{
        title: project.title,
        summary: project.summary,
        description: project.description,
        coverImageUrl: project.cover_image_url ?? "",
        galleryImageUrls: project.gallery_image_urls.join(", "),
        videoUrl: project.video_url ?? "",
        videoLink: project.video_link ?? "",
        tags: project.tags.join(", "),
        liveUrl: project.live_url ?? "",
        repoUrl: project.repo_url ?? "",
        projectDate: project.project_date,
        published: project.published,
      }}
      onSubmit={(values) => updateProject(id, values)}
    />
  );
}
