import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Capabilities from "@/components/sections/Capabilities";
import Practice from "@/components/sections/Practice";
import Work from "@/components/sections/Work";
import BuiltWith from "@/components/sections/BuiltWith";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Interlude from "@/components/sections/Interlude";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

/* Composition rhythm — no two adjacent sections share a layout:
   hero asymmetric, problem full width, capabilities centred over
   full-width rows, practice on a broken grid, work horizontal,
   about compact with a small portrait, process a timeline,
   interlude a statement with a detail, FAQ centred, CTA full width. */
export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Capabilities />
      <Practice />
      <Work />
      <BuiltWith />
      <About />
      <Process />
      <Interlude />
      <FAQ />
      <Contact />
    </>
  );
}
