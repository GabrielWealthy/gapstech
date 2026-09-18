"use client";

import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/utils";
import { EASE, clipUp } from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";
import SystemDiagram from "@/components/sections/SystemDiagram";

const WHATSAPP_URL = buildWhatsAppUrl(
  "+14328477432",
  "Hi Gapstech, I'd like to discuss a project"
);

const LINES = ["I build", "intelligent systems", "that scale."];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-10 pt-24">
      {/* Layered depth: grid → atmosphere → grain */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="bg-atmosphere pointer-events-none absolute inset-0" />
      <div className="bg-grain pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto w-full max-w-shell px-6">
        {/* Headline takes the full measure — the line breaks are authored,
            not left to the container to decide. */}
        <h1 className="font-display text-display-xl font-semibold text-foreground">
          {LINES.map((line, i) => (
            <span
              key={line}
              /* Descender room: line-height is below 1, so the clip
                 mask would otherwise shave the g/y tails. */
              className="block overflow-hidden pb-[0.12em] -mb-[0.12em]"
            >
              <motion.span
                initial="hidden"
                animate="show"
                variants={clipUp}
                transition={{ delay: 0.15 + i * 0.12 }}
                className={i === 1 ? "block text-accent" : "block"}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid items-end gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
              className="max-w-measure text-lg leading-relaxed text-muted"
            >
              AI engineer and no-code/low-code developer. I design automation, cloud
              infrastructure, and CRM systems that run the parts of a business nobody
              should still be doing by hand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.74, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="/#contact">Start a project</MagneticButton>
              <MagneticButton href={WHATSAPP_URL} variant="outline" external>
                Message on WhatsApp
              </MagneticButton>
            </motion.div>
          </div>

          {/* System visualization — the thesis, drawn */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="lg:col-span-6"
          >
            <SystemDiagram className="mx-auto h-auto w-full max-w-[20rem] sm:max-w-md lg:mx-0 lg:ml-auto lg:max-w-xl" />
          </motion.div>
        </div>

        {/* Ground line — brand signature + live status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-between gap-y-4 border-t border-line pt-5"
        >
          <p className="font-mono text-meta uppercase text-faint">
            Innovate. Build. Elevate.
          </p>
          <p className="flex items-center gap-2.5 font-mono text-meta uppercase text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for new projects
          </p>
        </motion.div>
      </div>
    </section>
  );
}
