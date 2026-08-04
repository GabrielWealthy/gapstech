import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/content/nav";

const SOCIAL_LINKS = [
  { label: "WhatsApp", href: "https://wa.me/14328477432" },
  { label: "Calendly", href: "https://calendly.com/gabriel-wealthyentrepreneur/30min" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink-raised">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo/gapstech-mark.png" alt="Gapstech" width={32} height={32} />
              <span className="font-display text-base font-bold text-white">GAPSTECH</span>
            </div>
            <p className="mt-2 max-w-xs text-sm text-muted">Innovate. Build. Elevate.</p>
          </div>

          <div className="flex gap-12">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">Navigate</h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted hover:text-red">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">Connect</h3>
              <ul className="space-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-red"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-ink-border pt-6 text-xs text-faint">
          © {new Date().getFullYear()} Gapstech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
