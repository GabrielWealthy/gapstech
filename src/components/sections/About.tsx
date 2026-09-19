"use client";

import { motion } from "framer-motion";
import { BIO_SHORT } from "@/lib/content/bio";
import { PORTRAITS } from "@/lib/content/portraits";
import { EASE, viewport } from "@/lib/motion";
import RevealImage from "@/components/ui/RevealImage";

/* Compact identity block. The portrait is roughly a third of the width
   and deliberately not full height — editorial, not a profile picture. */
export default function About() {
  return (
    <section id="about" className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid items-start gap-x-12 gap-y-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-4"
          >
            <RevealImage
              src={PORTRAITS.study.src}
              alt={PORTRAITS.study.alt}
              sizes="(max-width: 1024px) 60vw, 28vw"
              className="aspect-[4/5] w-[45%] border border-line sm:w-[38%] lg:w-full"
            />
          </motion.div>

          <div className="lg:col-span-7 lg:col-start-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="font-display text-display-sm font-semibold"
            >
              Gabriel
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
              className="mt-3 flex flex-wrap items-center gap-x-3 font-mono text-meta uppercase text-accent"
            >
              <span>AI Engineer</span>
              <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
              <span>System Builder</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
              className="mt-8 max-w-measure leading-relaxed text-muted"
            >
              {BIO_SHORT}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
