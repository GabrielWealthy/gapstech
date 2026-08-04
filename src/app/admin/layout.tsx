import Link from "next/link";
import SignOutButton from "@/components/admin/SignOutButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ink">
      <header className="flex items-center justify-between border-b border-ink-border px-6 py-4">
        <Link href="/admin" className="font-display text-sm font-bold text-white">
          GAPSTECH ADMIN
        </Link>
        <SignOutButton />
      </header>
      <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
    </div>
  );
}
