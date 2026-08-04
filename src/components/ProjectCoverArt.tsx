type Variant = "dashboard" | "automation" | "cloud" | "generic";

function variantForTags(tags: string[]): Variant {
  const lower = tags.map((t) => t.toLowerCase());
  if (lower.some((t) => ["n8n", "automation", "crm"].includes(t))) return "automation";
  if (lower.some((t) => ["aws", "cloud", "devops"].includes(t))) return "cloud";
  if (lower.some((t) => ["bubble.io", "saas", "web app", "flutterflow"].includes(t))) return "dashboard";
  return "generic";
}

function Dashboard() {
  return (
    <>
      <rect x="40" y="30" width="120" height="80" rx="8" fill="#E8262A" fillOpacity="0.12" stroke="#E8262A" strokeOpacity="0.5" />
      <rect x="58" y="80" width="10" height="20" rx="2" fill="#E8262A" fillOpacity="0.8" />
      <rect x="76" y="65" width="10" height="35" rx="2" fill="#E8262A" fillOpacity="0.8" />
      <rect x="94" y="50" width="10" height="50" rx="2" fill="#E8262A" />
      <rect x="112" y="70" width="10" height="30" rx="2" fill="#E8262A" fillOpacity="0.8" />
      <rect x="130" y="45" width="10" height="55" rx="2" fill="#E8262A" />
      <rect x="180" y="120" width="90" height="60" rx="8" fill="#E8262A" fillOpacity="0.08" stroke="#E8262A" strokeOpacity="0.35" />
      <circle cx="205" cy="150" r="12" fill="none" stroke="#E8262A" strokeOpacity="0.7" strokeWidth="3" />
      <rect x="230" y="140" width="30" height="6" rx="3" fill="#E8262A" fillOpacity="0.6" />
      <rect x="230" y="152" width="20" height="6" rx="3" fill="#E8262A" fillOpacity="0.4" />
    </>
  );
}

function Automation() {
  return (
    <>
      <circle cx="60" cy="60" r="10" fill="#E8262A" />
      <circle cx="160" cy="40" r="8" fill="#E8262A" fillOpacity="0.7" />
      <circle cx="230" cy="90" r="10" fill="#E8262A" />
      <circle cx="140" cy="130" r="8" fill="#E8262A" fillOpacity="0.7" />
      <circle cx="70" cy="150" r="10" fill="#E8262A" fillOpacity="0.85" />
      <path d="M60 60 L160 40 M160 40 L230 90 M160 40 L140 130 M140 130 L70 150 M60 60 L140 130" stroke="#E8262A" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
    </>
  );
}

function Cloud() {
  return (
    <>
      <rect x="70" y="40" width="60" height="140" rx="6" fill="#E8262A" fillOpacity="0.1" stroke="#E8262A" strokeOpacity="0.5" />
      <rect x="82" y="55" width="36" height="8" rx="2" fill="#E8262A" fillOpacity="0.7" />
      <rect x="82" y="75" width="36" height="8" rx="2" fill="#E8262A" fillOpacity="0.5" />
      <rect x="82" y="95" width="36" height="8" rx="2" fill="#E8262A" fillOpacity="0.7" />
      <circle cx="115" cy="60" r="2" fill="#E8262A" />
      <circle cx="115" cy="80" r="2" fill="#E8262A" />
      <path
        d="M170 100c-16 0-28 12-28 26 0 2 0 4 .5 6-10 2-18 10-18 21 0 12 10 22 23 22h70c12 0 22-10 22-22 0-10-7-18-16-21 1-3 1-5 1-8 0-15-12-27-27-27-6 0-12 2-16 6-3-2-7-3-11.5-3z"
        fill="#E8262A"
        fillOpacity="0.15"
        stroke="#E8262A"
        strokeOpacity="0.55"
      />
    </>
  );
}

function Generic() {
  return (
    <polygon
      points="140,40 195,75 195,145 140,180 85,145 85,75"
      fill="#E8262A"
      fillOpacity="0.12"
      stroke="#E8262A"
      strokeOpacity="0.55"
      strokeWidth="2"
    />
  );
}

export default function ProjectCoverArt({ tags }: { tags: string[] }) {
  const variant = variantForTags(tags);
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="200" fill="#0D0D0D" />
      <rect width="320" height="200" fill="url(#cover-grid)" opacity="0.5" />
      <defs>
        <pattern id="cover-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#E8262A" strokeOpacity="0.06" />
        </pattern>
      </defs>
      {variant === "dashboard" && <Dashboard />}
      {variant === "automation" && <Automation />}
      {variant === "cloud" && <Cloud />}
      {variant === "generic" && <Generic />}
    </svg>
  );
}
