import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LexosSpotlight from "@/components/LexosSpotlight";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LexosSpotlight />
        <About />
        <Stack />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
