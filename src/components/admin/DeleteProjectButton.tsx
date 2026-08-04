"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteProject } from "@/app/actions/admin-projects";

export default function DeleteProjectButton({ id }: { id: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(async () => {
          if (confirm("Delete this project?")) {
            await deleteProject(id);
            router.refresh();
          }
        })
      }
      className="text-sm text-muted hover:text-red disabled:opacity-60"
    >
      Delete
    </button>
  );
}
