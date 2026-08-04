"use client";

import ProjectForm from "@/components/admin/ProjectForm";
import { createProject } from "@/app/actions/admin-projects";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-white">New Project</h1>
      <div className="mt-8">
        <ProjectForm onSubmit={createProject} />
      </div>
    </div>
  );
}
