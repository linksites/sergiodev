import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
