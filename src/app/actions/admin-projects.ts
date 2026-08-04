"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { buildProjectPayload, type ProjectFormValues } from "@/lib/admin-projects";

export type { ProjectFormValues };

export async function createProject(values: ProjectFormValues) {
  const supabase = await createClient();
  const { error } = await supabase.from("gapstech_projects").insert(buildProjectPayload(values));
  if (error) return { success: false as const, message: error.message };
  revalidatePath("/");
  revalidatePath("/admin");
  return { success: true as const, message: "Project created." };
}

export async function updateProject(id: string, values: ProjectFormValues) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("gapstech_projects")
    .update(buildProjectPayload(values))
    .eq("id", id);
  if (error) return { success: false as const, message: error.message };
  revalidatePath("/");
  revalidatePath("/admin");
  return { success: true as const, message: "Project updated." };
}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("gapstech_projects").delete().eq("id", id);
  if (error) return { success: false as const, message: error.message };
  revalidatePath("/");
  revalidatePath("/admin");
  return { success: true as const, message: "Project deleted." };
}

export async function getAllProjectsForAdmin() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gapstech_projects")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}
