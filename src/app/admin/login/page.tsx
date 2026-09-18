"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Mode = "signin" | "recover";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const denied = params.get("denied") === "1";

  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      setError("That email and password combination didn't work. Try again, or reset your password.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  async function handleRecover(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/reset`,
    });
    setBusy(false);
    if (error) {
      setError("Couldn't send the reset email. Check the address and try again.");
      return;
    }
    // Reported the same way whether or not the address exists, so this page
    // cannot be used to discover which emails have accounts.
    setSent(true);
  }

  const field =
    "w-full border-b border-line-strong bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-faint hover:border-muted focus:border-accent";

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-sm flex-col justify-center px-6">
      <h1 className="font-display text-3xl font-semibold">
        {mode === "signin" ? "Admin" : "Reset password"}
      </h1>

      {denied && mode === "signin" && (
        <p role="alert" className="mt-4 border-l border-accent bg-accent-wash px-4 py-3 text-sm text-muted">
          That account isn&apos;t an administrator of this site, so it has been signed out.
        </p>
      )}

      {sent ? (
        <div role="status" className="mt-8 border-l border-accent bg-accent-wash px-5 py-4">
          <p className="font-display text-lg font-semibold">Check your inbox</p>
          <p className="mt-1.5 text-sm text-muted">
            If an account exists for {email}, a reset link is on its way. The link
            opens this site and lets you set a new password.
          </p>
        </div>
      ) : (
        <form onSubmit={mode === "signin" ? handleSignIn : handleRecover} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block font-mono text-meta uppercase text-faint">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={field}
            />
          </div>

          {mode === "signin" && (
            <div>
              <label htmlFor="password" className="block font-mono text-meta uppercase text-faint">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={field}
              />
            </div>
          )}

          {error && (
            <p role="alert" className="text-sm text-accent">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-bright disabled:cursor-not-allowed disabled:opacity-50"
          >
            {busy
              ? mode === "signin" ? "Signing in…" : "Sending…"
              : mode === "signin" ? "Sign in" : "Send reset link"}
          </button>

          <button
            type="button"
            onClick={() => { setMode(mode === "signin" ? "recover" : "signin"); setError(null); }}
            className="font-mono text-meta uppercase text-muted underline underline-offset-4 transition-colors hover:text-accent"
          >
            {mode === "signin" ? "Forgot your password?" : "Back to sign in"}
          </button>
        </form>
      )}
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
