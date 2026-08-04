import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";
import HexDivider from "@/components/layout/HexDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <HexDivider />
      <About />
      <HexDivider />
      <Projects />
      <HexDivider />
      <Booking />
      <HexDivider />
      <Contact />
    </>
  );
}
