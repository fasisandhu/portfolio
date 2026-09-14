import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Rail from "@/components/Rail";
import RevealRoot from "@/components/RevealRoot";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#04120f]"
      >
        Skip to projects
      </a>
      <Rail />
      <RevealRoot />
      <main className="lg:pl-(--rail)">
        <Hero />
        <Work />
        <Experience />
        <Background />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
