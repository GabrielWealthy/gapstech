"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BIO } from "@/lib/content/bio";
import { EASE, viewport } from "@/lib/motion";

const PROCESS = [
  {
    step: "01",
    title: "Map the process",
    body: "Before anything gets built, I trace how the work actually moves today — including the steps nobody documented.",
  },
  {
    step: "02",
    title: "Cut the manual steps",
    body: "The handoffs that exist only because two tools don't talk get automated first. That's where the time is.",
  },
  {
    step: "03",
    title: "Build the system",
    body: "No-code where it's faster, code where it's necessary. The choice is about fit, never about ideology.",
  },
  {
    step: "04",
    title: "Ship and harden",
    body: "Deployed on infrastructure that holds, with the failure cases handled — not just the happy path.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Editorial identity block */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-display-lg font-semibold leading-[0.95]">
              Gabriel
            </h2>
            <p className="mt-4 font-mono text-meta uppercase text-accent">
              AI Engineer / System Builder
            </p>

            <div className="mt-10 flex items-center gap-4 border-t border-line pt-8">
              <Image
                src="/images/logo/gapstech-mark.png"
                alt=""
                width={40}
                height={40}
                className="opacity-80"
              />
              <p className="font-mono text-meta uppercase text-faint">
                Founder, Gapstech
              </p>
            </div>
          </motion.div>

          {/* Bio + process spine */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="max-w-measure text-lg leading-relaxed text-muted"
            >
              {BIO}
            </motion.p>

            <ol className="mt-16 border-t border-line">
              {PROCESS.map((item, i) => (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  className="group relative flex gap-6 border-b border-line py-7 md:gap-10"
                >
                  <span className="tnum font-mono text-meta uppercase text-faint transition-colors duration-300 group-hover:text-accent">
                    {item.step}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-xl font-semibold">
                      {item.title}
                    </span>
                    <span className="mt-1.5 block max-w-measure leading-relaxed text-muted">
                      {item.body}
                    </span>
                  </span>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
