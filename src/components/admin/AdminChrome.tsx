"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "@/components/admin/SignOutButton";
import { cn } from "@/lib/utils";

/* The sign-in and password-reset pages sit under /admin but have no session,
   so they must not render the signed-in chrome. */
const BARE_PATHS = ["/admin/login", "/admin/reset"];

const NAV = [
  { href: "/admin", label: "Projects" },
  { href: "/admin/messages", label: "Messages" },
];

export default function AdminChrome() {
  const pathname = usePathname();
  if (BARE_PATHS.includes(pathname)) return null;

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-6 py-4">
      <div className="flex items-center gap-8">
        <Link href="/admin" className="font-display text-sm font-semibold text-foreground">
          Gapstech Admin
        </Link>

        <nav className="flex items-center gap-5">
          {NAV.map((item) => {
            const active =
              item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <SignOutButton />
    </header>
  );
}
