"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { buildWhatsAppUrl } from "@/lib/utils";
import { EASE, viewport, clipUp } from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";
import ContactForm from "@/components/ContactForm";

const WHATSAPP_URL = buildWhatsAppUrl(
  "+14328477432",
  "Hi Gapstech, I'd like to discuss a project"
);

const CALENDLY_URL =
  "https://calendly.com/gabriel-wealthyentrepreneur/30min?background_color=07070a&text_color=f4f4f6&primary_color=e8262a";

/* The conclusion: centred, full width, and mostly air. */
export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div className="bg-atmosphere pointer-events-none absolute inset-0 rotate-180" />

      <div className="relative mx-auto max-w-shell px-6 py-32 md:py-48">
        <h2 className="mx-auto max-w-4xl text-center font-display text-display-lg font-semibold">
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <motion.span initial="hidden" whileInView="show" viewport={viewport} variants={clipUp} className="block">
              Have a system
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <motion.span
              initial="hidden" whileInView="show" viewport={viewport} variants={clipUp}
              transition={{ delay: 0.08 }} className="block text-muted"
            >
              that needs to be built?
            </motion.span>
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mx-auto mt-10 max-w-xl text-center text-lg leading-relaxed text-muted"
        >
          Tell me what you&apos;re trying to solve. You&apos;ll get a straight answer on
          what&apos;s achievable and by when — whether that ends up being me or not.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8"
        >
          <MagneticButton href={WHATSAPP_URL} external>
            Start a project
          </MagneticButton>
          <a
            href="#booking"
            className="font-mono text-meta uppercase text-muted underline decoration-line-strong underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
          >
            Book a call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-meta uppercase text-muted underline decoration-line-strong underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
          >
            WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Functional detail, kept quiet and well below the statement */}
      <div className="relative mx-auto max-w-shell px-6 pb-32">
        <div className="grid gap-16 border-t border-line pt-20 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h3 className="font-mono text-meta uppercase text-faint">Send a message</h3>
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            id="booking"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="scroll-mt-32"
          >
            <h3 className="font-mono text-meta uppercase text-faint">Or pick a time</h3>
            <div className="mt-8 overflow-hidden rounded-lg border border-line bg-surface">
              <div
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
                style={{ minWidth: "280px", height: "620px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </section>
  );
}
