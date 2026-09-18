import { getPublishedProjects } from "@/lib/projects";
import { pickFeatured } from "@/lib/project-display";
import FeaturedWork from "@/components/sections/FeaturedWork";
import WorkIndex from "@/components/sections/WorkIndex";

export default async function Work() {
  const projects = await getPublishedProjects();
  const { featured, rest } = pickFeatured(projects);

  return (
    <section id="projects" className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-display-md font-semibold">
            Selected work
          </h2>
          <p className="max-w-sm text-muted">
            Systems built end to end — architecture, automation, interface and
            the infrastructure underneath.
          </p>
        </div>

        {!featured ? (
          <p className="text-muted">No published projects yet.</p>
        ) : (
          <>
            <FeaturedWork project={featured} />
            {rest.length > 0 && <WorkIndex projects={rest} />}
          </>
        )}
      </div>
    </section>
  );
}
