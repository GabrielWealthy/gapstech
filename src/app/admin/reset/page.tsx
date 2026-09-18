"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

/* Landing page for the password-recovery email link. Supabase puts a recovery
   session in place when the link is opened; this page exchanges it for a new
   password. The user types their own password — it is never handled anywhere
   else. */
export default function AdminResetPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data }) => setReady(!!data.session));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 10) {
      setError("Use at least 10 characters.");
      return;
    }
    if (password !== confirm) {
      setError("The two passwords don't match.");
      return;
    }

    setBusy(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);

    if (error) {
      setError(error.message || "Couldn't update the password. Request a fresh link and try again.");
      return;
    }
    setDone(true);
    setTimeout(() => {
      router.push("/admin");
      router.refresh();
    }, 1400);
  }

  const field =
    "w-full border-b border-line-strong bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-faint hover:border-muted focus:border-accent";

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-sm flex-col justify-center px-6">
      <h1 className="font-display text-3xl font-semibold">Set a new password</h1>

      {!ready && (
        <p className="mt-6 text-sm text-muted">
          Open this page from the reset link in your email. If the link has expired,
          request a new one from the sign-in page.
        </p>
      )}

      {done ? (
        <div role="status" className="mt-8 border-l border-accent bg-accent-wash px-5 py-4">
          <p className="font-display text-lg font-semibold">Password updated</p>
          <p className="mt-1.5 text-sm text-muted">Taking you to the dashboard…</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="password" className="block font-mono text-meta uppercase text-faint">
              New password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              required
              disabled={!ready}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={field}
            />
          </div>

          <div>
            <label htmlFor="confirm" className="block font-mono text-meta uppercase text-faint">
              Confirm password
            </label>
            <input
              id="confirm"
              type="password"
              autoComplete="new-password"
              required
              disabled={!ready}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className={field}
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-accent">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={busy || !ready}
            className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-bright disabled:cursor-not-allowed disabled:opacity-50"
          >
            {busy ? "Saving…" : "Save password"}
          </button>
        </form>
      )}
    </div>
  );
}
