import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import { homeSchema } from "@/lib/schema";

// About + Journey live on their own page: app/journey/page.tsx
export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
