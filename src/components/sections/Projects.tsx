import { getPublishedProjects } from "@/lib/projects";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import RevealHeading from "@/components/RevealHeading";

export default async function Projects() {
  const projects = await getPublishedProjects();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <RevealHeading
        title="Projects"
        subtitle="A selection of systems I've designed and shipped."
      />

      {projects.length === 0 ? (
        <p className="mt-10 text-sm text-muted">No published projects yet.</p>
      ) : (
        <ProjectsGrid projects={projects} />
      )}
    </section>
  );
}
