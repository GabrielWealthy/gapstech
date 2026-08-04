"use server";

import { createClient } from "@/lib/supabase/server";
import { validateContactInput } from "@/lib/contact-validation";

export async function submitContactMessage(input: { name: string; email: string; message: string }) {
  const { valid, errors } = validateContactInput(input);
  if (!valid) return { success: false as const, errors };

  const supabase = await createClient();
  const { error } = await supabase.from("gapstech_contact_messages").insert({
    name: input.name.trim(),
    email: input.email.trim(),
    message: input.message.trim(),
  });

  if (error) return { success: false as const, errors: { form: "Something went wrong. Try again." } };
  return { success: true as const, errors: {} };
}
