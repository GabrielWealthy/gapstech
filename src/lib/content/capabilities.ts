export type CapabilityKind =
  | "ai"
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
  items: string[];
};

export const CAPABILITIES: Capability[] = [
  {
    index: "01",
    title: "AI Engineering",
    kind: "ai",
    blurb: "Systems that reason over your business context, not a generic chatbot.",
    items: ["AI agents", "LLM integrations", "AI workflows", "Intelligent automation"],
  },
  {
    index: "02",
    title: "Automation",
    kind: "automation",
    blurb: "The manual steps between your tools, removed.",
    items: ["n8n", "Make", "Zapier", "Business process automation"],
  },
  {
    index: "03",
    title: "Full-Stack",
    kind: "fullstack",
    blurb: "When the no-code ceiling is reached, the build continues in code.",
    items: ["React", "Next.js", "Supabase", "APIs"],
  },
  {
    index: "04",
    title: "No-Code / Low-Code",
    kind: "nocode",
    blurb: "Production apps in weeks, without a year of engineering payroll.",
    items: ["Bubble", "FlutterFlow"],
  },
  {
    index: "05",
    title: "Cloud",
    kind: "cloud",
    blurb: "Infrastructure that holds when the traffic actually arrives.",
    items: ["AWS", "Vercel", "Netlify"],
  },
  {
    index: "06",
    title: "CRM Systems",
    kind: "crm",
    blurb: "Pipelines and lead systems that the team will genuinely use.",
    items: ["GoHighLevel", "CRM automation", "Lead systems"],
  },
];
