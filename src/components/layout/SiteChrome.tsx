"use client";

import { usePathname } from "next/navigation";

/* The navbar, footer, floating button, scroll bar and custom cursor belong
   to the marketing site. The admin area has its own header, and the navbar
   is fixed at z-50 — leaving it mounted there covered the admin's own
   controls and made Messages and Sign Out unclickable. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return <>{children}</>;
}
