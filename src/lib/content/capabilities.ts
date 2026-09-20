export type CapabilityKind =
  | "ai"
  | "ainative"
  | "automation"
  | "fullstack"
  | "nocode"
  | "cloud"
  | "crm";

export type Capability = {
  index: string;
  title: string;
  kind: CapabilityKind;
  blurb: string;
};

/* Each line is the capability's own description — the tools live inside the
   sentence rather than in a separate metadata row, so the section reads as
   workflow rather than as a collection of logos. */
export const CAPABILITIES: Capability[] = [
  {
    index: "01",
    title: "AI Engineering",
    kind: "ai",
    blurb: "Build intelligent systems and AI-powered workflows.",
  },
  {
    index: "02",
    title: "AI-Assisted Development",
    kind: "ainative",
    blurb:
      "Build and ship applications using Claude Code, Lovable, Supabase and modern AI coding workflows.",
  },
  {
    index: "03",
    title: "Automation",
    kind: "automation",
    blurb: "Connect business systems, APIs, CRMs and AI agents.",
  },
  {
    index: "04",
    title: "Full-Stack Development",
    kind: "fullstack",
    blurb: "React, Next.js, APIs, databases and production applications.",
  },
  {
    index: "05",
    title: "No-Code / Low-Code",
    kind: "nocode",
    blurb: "Bubble, FlutterFlow, Make and GoHighLevel.",
  },
  {
    index: "06",
    title: "Cloud & Infrastructure",
    kind: "cloud",
    blurb: "AWS, Vercel, deployment, hosting and system infrastructure.",
  },
  {
    index: "07",
    title: "CRM Systems",
    kind: "crm",
    blurb: "GoHighLevel, lead routing, pipelines and automated workflows.",
  },
];
