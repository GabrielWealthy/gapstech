"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import RevealHeading from "@/components/RevealHeading";
import SectionBand from "@/components/layout/SectionBand";

const CALENDLY_URL =
  "https://calendly.com/gabriel-wealthyentrepreneur/30min?background_color=0a0a0a&text_color=ffffff&primary_color=e8262a";

const WHY_BOOK = [
  "30 minutes, no obligation — we scope the problem together",
  "Straight talk on what's actually achievable, and by when",
  "Leave with a clear next step, whether that's me or not",
];

export default function Booking() {
  return (
    <SectionBand id="booking" tone="panel" glow>
      <div className="mx-auto max-w-4xl px-6">
        <RevealHeading
          title="Book a Call"
          subtitle="Pick a time that works for you — no back-and-forth emails."
          align="center"
        />

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 grid gap-3 sm:grid-cols-3"
        >
          {WHY_BOOK.map((point) => (
            <li
              key={point}
              className="rounded-xl border border-ink-border bg-ink p-4 text-sm text-muted"
            >
              {point}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 overflow-hidden rounded-2xl border border-ink-border"
        >
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </motion.div>

        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </div>
    </SectionBand>
  );
}
