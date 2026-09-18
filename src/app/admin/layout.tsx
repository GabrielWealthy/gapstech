import AdminChrome from "@/components/admin/AdminChrome";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <AdminChrome />
      <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
    </div>
  );
}
