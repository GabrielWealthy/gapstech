"use client";

import { motion } from "framer-motion";
import { BIO_SHORT } from "@/lib/content/bio";
import { PORTRAITS } from "@/lib/content/portraits";
import { EASE, viewport, clipUp } from "@/lib/motion";
import RevealImage from "@/components/ui/RevealImage";

/* Editorial profile: label, statement, supporting text — with the
   photograph offset against the type rather than owning a column. */
export default function About() {
  return (
    <section id="about" className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-shell px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-mono text-meta uppercase text-faint"
        >
          Behind the systems
        </motion.p>

        <div className="mt-10 grid gap-x-12 gap-y-12 lg:grid-cols-12">
          {/* Statement leads; the portrait answers it from the right,
              dropped below the baseline so the two are not a matched pair. */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-display-md font-semibold">
              <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <motion.span
                  initial="hidden" whileInView="show" viewport={viewport} variants={clipUp}
                  className="block"
                >
                  I&apos;m Gabriel.
                </motion.span>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="mt-8 max-w-measure text-lg leading-relaxed text-muted"
            >
              {BIO_SHORT}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-x-3 font-mono text-meta uppercase text-accent"
            >
              <span>AI Engineer</span>
              <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
              <span>System Builder</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="lg:col-span-4 lg:col-start-9 lg:mt-16"
          >
            <RevealImage
              src={PORTRAITS.study.src}
              alt={PORTRAITS.study.alt}
              sizes="(max-width: 1024px) 45vw, 28vw"
              className="aspect-[4/5] w-[45%] border border-line sm:w-[38%] lg:w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
