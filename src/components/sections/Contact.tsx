"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { buildWhatsAppUrl } from "@/lib/utils";
import { EASE, viewport } from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";
import ContactForm from "@/components/ContactForm";

const WHATSAPP_URL = buildWhatsAppUrl(
  "+14328477432",
  "Hi Gapstech, I'd like to discuss a project"
);

const CALENDLY_URL =
  "https://calendly.com/gabriel-wealthyentrepreneur/30min?background_color=07070a&text_color=f4f4f6&primary_color=e8262a";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      {/* The conclusion of the story gets its own atmosphere */}
      <div className="bg-atmosphere pointer-events-none absolute inset-0 rotate-180" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-shell px-6 py-28 md:py-40">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.85, ease: EASE }}
          className="max-w-4xl font-display text-display-lg font-semibold"
        >
          Have a system that
          <span className="block text-muted">needs to be built?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
          className="mt-8 max-w-measure text-lg leading-relaxed text-muted"
        >
          Tell me what you&apos;re trying to solve. You&apos;ll get a straight answer
          on what&apos;s achievable and by when — whether that ends up being me or not.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.75, delay: 0.18, ease: EASE }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href={WHATSAPP_URL} external>
            Start a project
          </MagneticButton>
          <MagneticButton href="#booking" variant="outline">
            Book a 30-minute call
          </MagneticButton>
        </motion.div>

        {/* Direct channels, stated as a spec row rather than three cards */}
        <motion.dl
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
          className="mt-20 grid gap-8 border-t border-line pt-10 sm:grid-cols-3"
        >
          <div>
            <dt className="font-mono text-meta uppercase text-faint">Fastest</dt>
            <dd className="mt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-colors hover:text-accent"
              >
                WhatsApp — usually same day
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-meta uppercase text-faint">Scheduled</dt>
            <dd className="mt-2">
              <a href="#booking" className="text-foreground transition-colors hover:text-accent">
                30 minutes, no obligation
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-meta uppercase text-faint">Detailed</dt>
            <dd className="mt-2 text-foreground">Use the form below</dd>
          </div>
        </motion.dl>

        {/* Form + scheduling, side by side */}
        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h3 className="font-mono text-meta uppercase text-faint">Send a message</h3>
            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            id="booking"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="scroll-mt-32"
          >
            <h3 className="font-mono text-meta uppercase text-faint">Or pick a time</h3>
            <div className="mt-6 overflow-hidden rounded-xl border border-line bg-surface">
              <div
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
                style={{ minWidth: "280px", height: "660px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </section>
  );
}
