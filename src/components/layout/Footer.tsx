import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS } from "@/lib/content/solutions";

const SOLUTION_CATEGORIES = Array.from(new Set(SOLUTIONS.map((s) => s.category)));

const COMPANY_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "FAQ", href: "/#faq" },
];

const CONNECT_LINKS = [
  { label: "WhatsApp", href: "https://wa.me/14328477432" },
  { label: "Book a Call", href: "https://calendly.com/gabriel-wealthyentrepreneur/30min" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink-raised">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo/gapstech-mark.png" alt="Gapstech" width={32} height={32} />
              <span className="font-display text-base font-bold text-white">GAPSTECH</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Innovate. Build. Elevate. AI Engineer & No-Code/Low-Code Developer.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Solutions</h3>
            <ul className="space-y-2">
              {SOLUTION_CATEGORIES.map((category) => (
                <li key={category}>
                  <Link href="/#solutions" className="text-sm text-muted hover:text-red">
                    {category.charAt(0) + category.slice(1).toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
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
              {CONNECT_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted hover:text-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-ink-border pt-6 text-xs text-faint">
          © {new Date().getFullYear()} Gapstech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
