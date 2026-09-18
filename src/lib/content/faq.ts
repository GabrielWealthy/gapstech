export type FaqItem = { question: string; answer: string };

export const FAQS: FaqItem[] = [
  {
    question: "No-code vs. traditional development — what's the real difference?",
    answer:
      "No-code/low-code tools like Bubble.io and FlutterFlow let me build and ship production-ready apps much faster, without writing everything from scratch. When something needs custom logic beyond what those platforms offer, I bring in code directly — you get speed without hitting a wall.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused automation (one workflow, one integration) can be live in days. A full MVP or SaaS platform build is usually weeks, not months. I'll give you a realistic timeline after our first call, not a generic estimate.",
  },
  {
    question: "Do you work with startups or established businesses?",
    answer:
      "Both. Startups usually need an MVP built fast; established businesses usually need existing manual processes automated. The tools differ, the approach — understand the process first, then build — stays the same.",
  },
  {
    question: "What tools and platforms do you work with?",
    answer:
      "n8n for automation, Bubble.io and FlutterFlow for no-code builds, AWS for cloud infrastructure, GoHighLevel for CRM, and Vercel/Netlify for deployment. If your stack uses something else, I'll tell you honestly whether I'm the right fit.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a call below. We'll talk through what you're trying to solve, and I'll tell you what's actually achievable and by when — no obligation.",
  },
];
