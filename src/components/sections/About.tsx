"use client";

import { motion } from "framer-motion";
import { BIO } from "@/lib/content/bio";
import { PORTRAITS } from "@/lib/content/portraits";
import { EASE, viewport, clipUp } from "@/lib/motion";
import RevealImage from "@/components/ui/RevealImage";

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

const LINES = ["I build systems", "that work", "for people."];

export default function About() {
  return (
    <section id="about" className="relative border-t border-line py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* The portrait carries the section, not a paragraph */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <RevealImage
                src={PORTRAITS.study.src}
                alt={PORTRAITS.study.alt}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[3/4] w-full"
              />
              <div className="mt-5 flex items-baseline justify-between border-t border-line pt-4">
                <p className="font-display text-lg font-semibold">Gabriel</p>
                <p className="font-mono text-meta uppercase text-faint">
                  Founder, Gapstech
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-display-md font-semibold">
              {LINES.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                  <motion.span
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    variants={clipUp}
                    transition={{ delay: i * 0.1 }}
                    className={i === 2 ? "block text-muted" : "block"}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="mt-10 max-w-measure text-lg leading-relaxed text-muted"
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
                  className="group flex gap-6 border-b border-line py-7 md:gap-10"
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
