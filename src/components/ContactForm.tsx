"use client";

import { useState, useTransition } from "react";
import { submitContactMessage } from "@/app/actions/contact";

type Field = "name" | "email" | "message";

const FIELDS: { id: Field; label: string; type: string; rows?: number }[] = [
  { id: "name", label: "Your name", type: "text" },
  { id: "email", label: "Email address", type: "email" },
  { id: "message", label: "What are you trying to build?", type: "textarea", rows: 5 },
];

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
      <div
        role="status"
        className="border-l border-accent bg-accent-wash px-6 py-5"
      >
        <p className="font-display text-lg font-semibold">Message sent</p>
        <p className="mt-1.5 text-sm text-muted">
          I&apos;ll come back to you, usually the same day. If it&apos;s urgent,
          WhatsApp is faster.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 font-mono text-meta uppercase text-accent underline underline-offset-4"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {FIELDS.map((field) => {
        const error = errors[field.id];
        const describedBy = error ? `${field.id}-error` : undefined;

        const shared = {
          id: field.id,
          name: field.id,
          value: values[field.id],
          "aria-invalid": error ? true : undefined,
          "aria-describedby": describedBy,
          onChange: (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setValues((v) => ({ ...v, [field.id]: e.target.value })),
          className: `w-full border-b bg-transparent py-3 text-base text-foreground outline-none transition-colors duration-300 placeholder:text-faint ${
            error
              ? "border-accent"
              : "border-line-strong focus:border-accent hover:border-muted"
          }`,
        };

        return (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block font-mono text-meta uppercase text-faint"
            >
              {field.label}
            </label>

            {field.type === "textarea" ? (
              <textarea {...shared} rows={field.rows} className={`${shared.className} resize-none`} />
            ) : (
              <input {...shared} type={field.type} />
            )}

            {error && (
              <p id={describedBy} role="alert" className="mt-2 text-sm text-accent">
                {error}
              </p>
            )}
          </div>
        );
      })}

      {errors.form && (
        <p role="alert" className="text-sm text-accent">
          {errors.form}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent-bright disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Sending…" : "Send message"}
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M1 7h11M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
