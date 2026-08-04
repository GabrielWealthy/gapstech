import { slugify } from "@/lib/utils";

export type ProjectFormValues = {
  title: string;
  summary: string;
  description: string;
  coverImageUrl: string;
  galleryImageUrls: string;
  videoUrl: string;
  videoLink: string;
  tags: string;
  liveUrl: string;
  repoUrl: string;
  projectDate: string;
  published: boolean;
};

export type ProjectInsertPayload = {
  slug: string;
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

export function buildProjectPayload(values: ProjectFormValues): ProjectInsertPayload {
  return {
    slug: slugify(values.title),
    title: values.title.trim(),
    summary: values.summary.trim(),
    description: values.description.trim(),
    cover_image_url: values.coverImageUrl.trim() || null,
    gallery_image_urls: values.galleryImageUrls
      .split(",")
      .map((url) => url.trim())
      .filter(Boolean),
    video_url: values.videoUrl.trim() || null,
    video_link: values.videoLink.trim() || null,
    tags: values.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    live_url: values.liveUrl.trim() || null,
    repo_url: values.repoUrl.trim() || null,
    project_date: values.projectDate,
    published: values.published,
  };
}
