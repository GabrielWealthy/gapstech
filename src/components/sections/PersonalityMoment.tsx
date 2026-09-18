"use client";

import { motion } from "framer-motion";
import { PORTRAITS } from "@/lib/content/portraits";
import { EASE, viewport } from "@/lib/motion";
import RevealImage from "@/components/ui/RevealImage";

/* The last breath before the closing CTA. Two frames, offset, so the page
   ends on a person rather than another block of type. */
export default function PersonalityMoment() {
  return (
    <section className="relative border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid items-end gap-6 sm:grid-cols-12 sm:gap-8">
          <div className="sm:col-span-7">
            <RevealImage
              src={PORTRAITS.outdoor.src}
              alt={PORTRAITS.outdoor.alt}
              sizes="(max-width: 640px) 100vw, 55vw"
              className="aspect-[4/5] w-full sm:aspect-[3/4]"
              drift={6}
            />
          </div>

          <div className="sm:col-span-5 sm:pb-16">
            <RevealImage
              src={PORTRAITS.considered.src}
              alt={PORTRAITS.considered.alt}
              sizes="(max-width: 640px) 100vw, 38vw"
              className="aspect-[4/5] w-full"
              drift={10}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              className="mt-6 max-w-sm text-base leading-relaxed text-muted"
            >
              Ship fast, built to last. The systems I build are the ones businesses
              depend on daily — so they get engineered like it.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
