"use client";

import { motion } from "framer-motion";
import { PORTRAITS } from "@/lib/content/portraits";
import { EASE, viewport, clipUp } from "@/lib/motion";
import RevealImage from "@/components/ui/RevealImage";

/* A personality beat, not a portrait section. The photograph is a small
   detail beside the statement — roughly a fifth of the composition. */
export default function Interlude() {
  return (
    <section className="relative border-t border-line py-16 md:py-24">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <h2 className="font-display text-display-sm font-semibold lg:col-span-8">
            <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <motion.span initial="hidden" whileInView="show" viewport={viewport} variants={clipUp} className="block">
                I don&apos;t believe in choosing
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
              <motion.span
                initial="hidden" whileInView="show" viewport={viewport} variants={clipUp}
                transition={{ delay: 0.08 }} className="block text-muted"
              >
                between speed and engineering.
              </motion.span>
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="lg:col-span-3 lg:col-start-10"
          >
            <RevealImage
              src={PORTRAITS.outdoor.src}
              alt={PORTRAITS.outdoor.alt}
              sizes="(max-width: 1024px) 40vw, 20vw"
              className="aspect-[4/5] w-[35%] border border-line sm:w-[30%] lg:w-full"
              drift={6}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
