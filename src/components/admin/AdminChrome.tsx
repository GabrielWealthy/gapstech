"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "@/components/admin/SignOutButton";

/* The sign-in and password-reset pages sit under /admin but have no session,
   so they must not render the signed-in chrome. */
const BARE_PATHS = ["/admin/login", "/admin/reset"];

export default function AdminChrome() {
  const pathname = usePathname();
  if (BARE_PATHS.includes(pathname)) return null;

  return (
    <header className="flex items-center justify-between border-b border-line px-6 py-4">
      <Link href="/admin" className="font-display text-sm font-semibold text-foreground">
        Gapstech Admin
      </Link>
      <SignOutButton />
    </header>
  );
}
