"use client";

import { useState, useTransition } from "react";
import { submitContactMessage } from "@/app/actions/contact";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const result = await submitContactMessage(values);
      if (result.success) {
        setStatus("success");
        setErrors({});
        setValues({ name: "", email: "", message: "" });
      } else {
        setErrors(result.errors);
      }
    });
  }

  if (status === "success") {
    return (
      <p className="rounded-xl border border-red/30 bg-red/10 p-6 text-sm text-white">
        Thanks — your message has been sent. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white placeholder:text-faint focus:border-red focus:outline-none"
        />
        {errors.name && <p className="mt-1 text-xs text-red">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white placeholder:text-faint focus:border-red focus:outline-none"
        />
        {errors.email && <p className="mt-1 text-xs text-red">{errors.email}</p>}
      </div>

      <div>
        <textarea
          placeholder="Message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className="w-full rounded-lg border border-ink-border bg-ink-panel px-4 py-3 text-sm text-white placeholder:text-faint focus:border-red focus:outline-none"
        />
        {errors.message && <p className="mt-1 text-xs text-red">{errors.message}</p>}
      </div>

      {errors.form && <p className="text-xs text-red">{errors.form}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-red px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-red-dim disabled:opacity-60"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
