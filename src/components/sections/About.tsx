import { BIO } from "@/lib/content/bio";
import SkillsGrid from "@/components/sections/SkillsGrid";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-display text-3xl font-bold text-white md:text-4xl">About</h2>
      <p className="mt-6 max-w-3xl whitespace-pre-line text-base leading-relaxed text-muted">
        {BIO}
      </p>

      <div className="mt-16">
        <SkillsGrid />
      </div>
    </section>
  );
}
