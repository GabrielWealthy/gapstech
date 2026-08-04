import { createClient } from "@/lib/supabase/server";

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  coverImageUrl: string | null;
  galleryImageUrls: string[];
  videoUrl: string | null;
  videoLink: string | null;
  tags: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  projectDate: string;
  published: boolean;
};

type ProjectRow = {
  id: string;
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

export function mapProjectRow(row: ProjectRow): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    description: row.description,
    coverImageUrl: row.cover_image_url,
    galleryImageUrls: row.gallery_image_urls,
    videoUrl: row.video_url,
    videoLink: row.video_link,
    tags: row.tags,
    liveUrl: row.live_url,
    repoUrl: row.repo_url,
    projectDate: row.project_date,
    published: row.published,
  };
}

export async function getPublishedProjects(): Promise<Project[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gapstech_projects")
    .select("*")
    .eq("published", true)
    .order("project_date", { ascending: false });

  if (error) throw error;
  return (data as ProjectRow[]).map(mapProjectRow);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gapstech_projects")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) throw error;
  return data ? mapProjectRow(data as ProjectRow) : null;
}
