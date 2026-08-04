import Link from "next/link";
import { getAllProjectsForAdmin } from "@/app/actions/admin-projects";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";

export default async function AdminDashboardPage() {
  const projects = await getAllProjectsForAdmin();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-white">Projects</h1>
        <Link
          href="/admin/projects/new"
          className="rounded-full bg-red px-5 py-2 text-sm font-semibold text-white hover:bg-red-dim"
        >
          New Project
        </Link>
      </div>

      <div className="mt-8 divide-y divide-ink-border rounded-xl border border-ink-border">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="font-medium text-white">{project.title}</p>
              <p className="text-xs text-muted">
                {project.slug} · {project.published ? "Published" : "Draft"}
              </p>
            </div>
            <div className="flex gap-4">
              <Link href={`/admin/projects/${project.id}/edit`} className="text-sm text-muted hover:text-red">
                Edit
              </Link>
              <DeleteProjectButton id={project.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
