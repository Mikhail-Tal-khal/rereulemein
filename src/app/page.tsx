import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <a
        href="#profile"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:border focus:border-bronze/60 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-bronze"
      >
        Skip to content
      </a>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Profile />
        <Skills />
        <Experience />
        <Projects />
        <Method />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
