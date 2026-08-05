import { getPublishedProjects } from "@/lib/projects";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import RevealHeading from "@/components/RevealHeading";

export default async function Projects() {
  const projects = await getPublishedProjects();

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-hex-grid bg-[length:56px_56px] opacity-[0.06]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <RevealHeading
          title="Projects"
          subtitle="A selection of systems I've designed and shipped."
          from="right"
        />

        {projects.length === 0 ? (
          <p className="mt-10 text-sm text-muted">No published projects yet.</p>
        ) : (
          <ProjectsGrid projects={projects} />
        )}
      </div>
    </section>
  );
}
