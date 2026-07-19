import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
