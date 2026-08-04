"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/utils";
import HeroBackground from "@/components/sections/HeroBackground";

const WHATSAPP_URL = buildWhatsAppUrl(
  "+14328477432",
  "Hi Gapstech, I'd like to discuss a project"
);

const STACK_CHIPS = ["n8n", "AWS", "Bubble.io", "FlutterFlow", "GoHighLevel"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28 text-center">
      <HeroBackground />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red"
      >
        Innovate. Build. Elevate.
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl"
      >
        I Build Intelligent Systems That Scale.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-6 max-w-xl text-base text-muted md:text-lg"
      >
        AI Engineer &amp; No-Code/Low-Code Developer specializing in automation (n8n), cloud
        infrastructure (AWS), and CRM systems that help businesses run smarter.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Link
          href="/#booking"
          className="rounded-full bg-red px-8 py-3 text-sm font-semibold text-white shadow-red-lg transition-transform hover:-translate-y-0.5 hover:bg-red-dim"
        >
          Book a Call
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-ink-border px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:border-red hover:text-red"
        >
          Chat on WhatsApp
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, staggerChildren: 0.08 }}
        className="mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-2"
      >
        {STACK_CHIPS.map((chip, i) => (
          <motion.span
            key={chip}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
            className="rounded-full border border-ink-border bg-ink-panel px-4 py-1.5 text-xs text-muted"
          >
            {chip}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
