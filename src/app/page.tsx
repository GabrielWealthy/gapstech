import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Capabilities from "@/components/sections/Capabilities";
import Practice from "@/components/sections/Practice";
import BehindTheSystems from "@/components/sections/BehindTheSystems";
import Work from "@/components/sections/Work";
import BuiltWith from "@/components/sections/BuiltWith";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

/* Technology → work → person. The photographs are the pauses that keep
   the page from reading as one long technical block. */
export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Capabilities />
      <Practice />
      <BehindTheSystems />
      <Work />
      <BuiltWith />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
