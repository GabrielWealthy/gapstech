"use client";

import Link from "next/link";
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

/* Asymmetric: the headline holds the weight, the visualization answers it
   from the side at roughly a third of the width. */
export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-14 pt-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="bg-atmosphere pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto w-full max-w-shell px-6">
        {/* Small metadata, then the statement. Hierarchy before scale. */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-meta uppercase text-faint"
        >
          <span className="text-muted">Gapstech</span>
          <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
          <span>AI Engineering</span>
          <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
          <span>Automation</span>
        </motion.p>

        <div className="mt-10 grid items-center gap-x-10 gap-y-14 lg:grid-cols-12">
          <h1 className="font-display text-display-xl font-semibold lg:col-span-8">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <motion.span
                  initial="hidden"
                  animate="show"
                  variants={clipUp}
                  transition={{ delay: 0.12 + i * 0.1 }}
                  className={i === 1 ? "block text-accent" : "block"}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Supporting, not competing — roughly a third of the composition */}
          <div className="lg:col-span-4">
            {/* The diagram animates its own paths in; the container itself
                stays visible so the hero never renders half-empty. */}
            <SystemDiagram className="h-auto w-full max-w-[23rem] lg:ml-auto" />
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <p className="max-w-measure text-lg leading-relaxed text-muted lg:col-span-6">
            Automation, cloud infrastructure and CRM systems that run the parts of a
            business nobody should still be doing by hand.
          </p>

          <div className="flex flex-wrap items-center gap-6 lg:col-span-6 lg:justify-end">
            <MagneticButton href="/#contact">Start a project</MagneticButton>
            <Link
              href="/#projects"
              className="font-mono text-meta uppercase text-muted underline decoration-line-strong underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
            >
              View work
            </Link>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1, ease: EASE }}
        className="relative mx-auto mt-14 w-full max-w-shell px-6"
      >
        <p className="flex items-center gap-2.5 border-t border-line pt-5 font-mono text-meta uppercase text-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Available for new projects
        </p>
      </motion.div>
    </section>
  );
}
