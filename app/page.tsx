import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
