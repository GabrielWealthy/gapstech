import { getPublishedProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default async function Projects() {
  const projects = await getPublishedProjects();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Projects</h2>
      <p className="mt-3 text-muted">A selection of systems I&apos;ve designed and shipped.</p>

      {projects.length === 0 ? (
        <p className="mt-10 text-sm text-muted">No published projects yet.</p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
