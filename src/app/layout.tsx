import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-ink text-white antialiased">
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
