import { getPublishedProjects } from "@/lib/projects";
import { pickFeatured } from "@/lib/project-display";
import FeaturedWork from "@/components/sections/FeaturedWork";
import WorkIndex from "@/components/sections/WorkIndex";

export default async function Work() {
  const projects = await getPublishedProjects();
  const { featured, rest } = pickFeatured(projects);

  return (
    <section id="projects" className="relative border-t border-line py-32 md:py-48">
      <div className="mx-auto max-w-shell px-6">
        {/* Small label rather than another large left-aligned heading */}
        <p className="font-mono text-meta uppercase text-faint">Selected work</p>

        <div className="mt-16">
          {!featured ? (
            <p className="text-muted">No published projects yet.</p>
          ) : (
            <>
              <FeaturedWork project={featured} />
              {rest.length > 0 && <WorkIndex projects={rest} />}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
