import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import Cursor from "@/components/layout/Cursor";

/* Display: editorial character at large sizes. Emphatically not Inter. */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

/* Body: clean technical sans — engineered, not decorative. */
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

/* Mono: reserved for genuine metadata — indices, counts, measurements. */
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gapstechs.com"),
  title: "Gapstech — Innovate. Build. Elevate.",
  description:
    "AI Engineer & No-Code/Low-Code Developer specializing in automation (n8n), cloud infrastructure (AWS), and CRM systems.",
  icons: { icon: "/images/logo/gapstech-mark.png" },
  openGraph: {
    title: "Gapstech — Innovate. Build. Elevate.",
    description:
      "AI Engineer & No-Code/Low-Code Developer specializing in automation (n8n), cloud infrastructure (AWS), and CRM systems.",
    images: ["/images/logo/gapstech-logo.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        {/* Scroll reveals are driven by JS, so their initial state is
            painted as hidden. Without JS that state would be permanent —
            this restores the page rather than leaving it blank. */}
        <noscript
          // React escapes quotes inside <style> children, which would break
          // these attribute selectors. The markup is a static authored string.
          dangerouslySetInnerHTML={{
            __html:
              "<style>[style*='opacity:0']{opacity:1!important}[style*='clip-path']{clip-path:none!important}[style*='transform']{transform:none!important}</style>",
          }}
        />
      </head>
      <body className="bg-background font-body text-foreground antialiased">
        <ScrollProgressBar />
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
