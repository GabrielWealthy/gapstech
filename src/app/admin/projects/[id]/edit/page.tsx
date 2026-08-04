import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import EditProjectForm from "@/components/admin/EditProjectForm";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: project } = await supabase.from("gapstech_projects").select("*").eq("id", id).maybeSingle();
  if (!project) notFound();

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-white">Edit Project</h1>
      <div className="mt-8">
        <EditProjectForm id={project.id} project={project} />
      </div>
    </div>
  );
}
