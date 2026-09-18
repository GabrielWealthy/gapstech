"use client";

import { motion } from "framer-motion";
import { PORTRAITS } from "@/lib/content/portraits";
import { EASE, viewport, clipUp } from "@/lib/motion";
import RevealImage from "@/components/ui/RevealImage";

/* The first human pause. Everything above this point is systems; this is
   the person who builds them. */
export default function BehindTheSystems() {
  return (
    <section className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6">
        <h2 className="font-display text-display-lg font-semibold">
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={clipUp}
              className="block"
            >
              Behind the systems
            </motion.span>
          </span>
        </h2>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <RevealImage
              src={PORTRAITS.portrait.src}
              alt={PORTRAITS.portrait.alt}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="aspect-[4/5] w-full"
            />
          </div>

          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="font-display text-display-sm font-semibold"
            >
              I&apos;m Gabriel.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="mt-6 max-w-measure text-lg leading-relaxed text-muted"
            >
              I design and build intelligent digital systems that help businesses
              automate operations, connect their tools, and turn ideas into working
              products.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
