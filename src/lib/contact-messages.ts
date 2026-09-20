import { createClient } from "@/lib/supabase/server";

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

type ContactMessageRow = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

/* Reads are gated by RLS to the gapstech_admins allowlist, so this returns
   nothing at all for a session that is not an administrator. */
export async function getContactMessages(): Promise<ContactMessage[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gapstech_contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !data) return [];

  return (data as ContactMessageRow[]).map((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    message: row.message,
    createdAt: row.created_at,
  }));
}
