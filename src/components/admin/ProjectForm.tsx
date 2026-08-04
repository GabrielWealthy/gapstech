"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { ProjectFormValues } from "@/lib/admin-projects";

const EMPTY_VALUES: ProjectFormValues = {
  title: "",
  summary: "",
  description: "",
  coverImageUrl: "",
  galleryImageUrls: "",
  videoUrl: "",
  videoLink: "",
  tags: "",
  liveUrl: "",
  repoUrl: "",
  projectDate: new Date().toISOString().slice(0, 10),
  published: false,
};

export default function ProjectForm({
  initialValues,
  onSubmit,
}: {
  initialValues?: Partial<ProjectFormValues>;
  onSubmit: (values: ProjectFormValues) => Promise<{ success: boolean; message: string }>;
}) {
  const router = useRouter();
  const [values, setValues] = useState<ProjectFormValues>({ ...EMPTY_VALUES, ...initialValues });
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleFileUpload(file: File, target: "coverImageUrl" | "videoUrl") {
    setUploading(true);
    const supabase = createClient();
    const path = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from("gapstech-media").upload(path, file);
    setUploading(false);
    if (error) {
      setMessage(`Upload failed: ${error.message}`);
      return;
    }
    const { data } = supabase.storage.from("gapstech-media").getPublicUrl(path);
    setValues((v) => ({ ...v, [target]: data.publicUrl }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const result = await onSubmit(values);
      setMessage(result.message);
      if (result.success) router.push("/admin");
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        placeholder="Title"
        value={values.title}
        onChange={(e) => setValues((v) => ({ ...v, title: e.target.value }))}
        className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white focus:border-red focus:outline-none"
        required
      />
      <input
        placeholder="Summary (one line)"
        value={values.summary}
        onChange={(e) => setValues((v) => ({ ...v, summary: e.target.value }))}
        className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white focus:border-red focus:outline-none"
        required
      />
      <textarea
        placeholder="Full description (markdown supported)"
        rows={6}
        value={values.description}
        onChange={(e) => setValues((v) => ({ ...v, description: e.target.value }))}
        className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white focus:border-red focus:outline-none"
        required
      />

      <div>
        <label className="mb-1 block text-xs text-muted">Cover image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], "coverImageUrl")}
          className="text-sm text-muted"
        />
        {values.coverImageUrl && <p className="mt-1 truncate text-xs text-muted">{values.coverImageUrl}</p>}
      </div>

      <input
        placeholder="Gallery image URLs, comma-separated"
        value={values.galleryImageUrls}
        onChange={(e) => setValues((v) => ({ ...v, galleryImageUrls: e.target.value }))}
        className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white focus:border-red focus:outline-none"
      />

      <div>
        <label className="mb-1 block text-xs text-muted">Upload a video (optional)</label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], "videoUrl")}
          className="text-sm text-muted"
        />
      </div>
      <input
        placeholder="Or paste a YouTube/Vimeo/Loom link"
        value={values.videoLink}
        onChange={(e) => setValues((v) => ({ ...v, videoLink: e.target.value }))}
        className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white focus:border-red focus:outline-none"
      />

      <input
        placeholder="Tags, comma-separated"
        value={values.tags}
        onChange={(e) => setValues((v) => ({ ...v, tags: e.target.value }))}
        className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white focus:border-red focus:outline-none"
      />
      <input
        placeholder="Live URL"
        value={values.liveUrl}
        onChange={(e) => setValues((v) => ({ ...v, liveUrl: e.target.value }))}
        className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white focus:border-red focus:outline-none"
      />
      <input
        placeholder="Repo URL"
        value={values.repoUrl}
        onChange={(e) => setValues((v) => ({ ...v, repoUrl: e.target.value }))}
        className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white focus:border-red focus:outline-none"
      />
      <input
        type="date"
        value={values.projectDate}
        onChange={(e) => setValues((v) => ({ ...v, projectDate: e.target.value }))}
        className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white focus:border-red focus:outline-none"
      />

      <label className="flex items-center gap-2 text-sm text-muted">
        <input
          type="checkbox"
          checked={values.published}
          onChange={(e) => setValues((v) => ({ ...v, published: e.target.checked }))}
        />
        Published (visible on the public site)
      </label>

      {message && <p className="text-xs text-red">{message}</p>}

      <button
        type="submit"
        disabled={isPending || uploading}
        className="rounded-full bg-red px-8 py-3 text-sm font-semibold text-white hover:bg-red-dim disabled:opacity-60"
      >
        {uploading ? "Uploading..." : isPending ? "Saving..." : "Save Project"}
      </button>
    </form>
  );
}
