"use client";

import Script from "next/script";

const CALENDLY_URL =
  "https://calendly.com/gabriel-wealthyentrepreneur/30min?background_color=0a0a0a&text_color=ffffff&primary_color=e8262a";

export default function Booking() {
  return (
    <section id="booking" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Book a Call</h2>
      <p className="mt-3 text-muted">Pick a time that works for you — no back-and-forth emails.</p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-ink-border">
        <div
          className="calendly-inline-widget"
          data-url={CALENDLY_URL}
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </section>
  );
}
