export type Skill = { name: string; note: string };
export type SkillCategory = { category: string; skills: Skill[] };

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "AI Engineering",
    skills: [
      { name: "AI Engineering", note: "Designing and shipping AI-powered workflows and agents" },
    ],
  },
  {
    category: "No-Code / Low-Code Development",
    skills: [
      { name: "Bubble.io", note: "Building full SaaS platforms and client MVPs" },
      { name: "FlutterFlow", note: "Cross-platform mobile apps without native code overhead" },
    ],
  },
  {
    category: "Automation",
    skills: [{ name: "n8n", note: "Connecting tools and automating multi-step business processes" }],
  },
  {
    category: "Cloud & Hosting",
    skills: [
      { name: "AWS", note: "Cloud infrastructure, storage, and compute for production systems" },
      { name: "Vercel / Netlify", note: "Deployment and hosting for modern web apps" },
    ],
  },
  {
    category: "CRM Management",
    skills: [{ name: "GoHighLevel", note: "Pipelines, automations, and client relationship systems" }],
  },
  {
    category: "Other",
    skills: [
      { name: "Add a skill (1)", note: "Placeholder slot — update via src/lib/content/skills.ts" },
      { name: "Add a skill (2)", note: "Placeholder slot — update via src/lib/content/skills.ts" },
    ],
  },
];
