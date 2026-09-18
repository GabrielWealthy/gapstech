import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/content/nav";
import { buildWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_URL = buildWhatsAppUrl(
  "+14328477432",
  "Hi Gapstech, I'd like to discuss a project"
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-sunken">
      <div className="mx-auto max-w-shell px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3" aria-label="Gapstech home">
              <Image src="/images/logo/gapstech-mark.png" alt="" width={28} height={28} />
              <span className="font-display text-base font-semibold tracking-tight">
                Gapstech
              </span>
            </Link>
            <p className="mt-5 font-display text-2xl font-semibold leading-tight text-muted">
              Innovate. Build. Elevate.
            </p>
          </div>

          <nav className="md:col-span-4" aria-label="Footer">
            <h2 className="font-mono text-meta uppercase text-faint">Sections</h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="font-mono text-meta uppercase text-faint">Direct</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Start a project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-meta uppercase text-faint">
            © {year} Gapstech
          </p>
          <p className="font-mono text-meta uppercase text-faint">
            AI Engineer &amp; No-Code/Low-Code Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
