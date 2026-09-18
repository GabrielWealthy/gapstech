import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import Solutions from "@/components/sections/Solutions";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Solutions />
      <TechMarquee />
      <About />
      <Projects />
      <FAQ />
      <Booking />
      <Contact />
    </>
  );
}
