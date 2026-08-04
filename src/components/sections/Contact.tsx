"use client";

import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";
import RevealHeading from "@/components/RevealHeading";

const WHATSAPP_URL = buildWhatsAppUrl(
  "+14328477432",
  "Hi Gapstech, I'd like to discuss a project"
);

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <RevealHeading title="Contact" />

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base leading-relaxed text-muted">
            Fastest way to reach me is WhatsApp — message directly and I&apos;ll usually reply the
            same day. Prefer email or have more detail to share? Use the form.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-red px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-red-dim"
          >
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
