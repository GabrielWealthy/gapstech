import type { Project } from "@/lib/projects";

/* Pure presentation helpers. Deliberately free of server-only imports so
   client components can use them without pulling in the Supabase server
   client (and with it next/headers). */

export function pickFeatured(projects: Project[]): {
  featured: Project | null;
  rest: Project[];
} {
  if (projects.length === 0) return { featured: null, rest: [] };
  // Prefer the newest project that actually has cover art to carry the
  // large treatment; otherwise fall back to the newest project.
  const withCover = projects.find((p) => p.coverImageUrl);
  const featured = withCover ?? projects[0];
  return { featured, rest: projects.filter((p) => p.id !== featured.id) };
}

/* Tags are free-text in the admin form, so marketing sentences sometimes
   land in the field. A real tag is short and at most three words ("n8n",
   "Business Intelligence"); anything longer is a tagline and would render as a broken
   category row, so it is dropped rather than shown. */
export function displayTags(tags: string[], limit = 6): string[] {
  return tags
    .map((t) => t.trim())
    .filter((t) => t.length > 0 && t.length <= 24 && t.split(/\s+/).length <= 3)
    .slice(0, limit);
}

/* Only show a repo link when it is genuinely different from the live site. */
export function distinctRepoUrl(project: Project): string | null {
  if (!project.repoUrl) return null;
  if (project.repoUrl === project.liveUrl) return null;
  return project.repoUrl;
}
