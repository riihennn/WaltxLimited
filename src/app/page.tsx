import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { WaltxBestTransition } from "@/components/sections/WaltxBestTransition";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Team } from "@/components/sections/Team";
import { FinalCta } from "@/components/sections/FinalCta";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-[#F6F5F2]">
        <main className="flex-grow">
          <Hero />
          <SectionReveal>
            <Intro />
          </SectionReveal>
          <SectionReveal>
            <WaltxBestTransition />
          </SectionReveal>
          <SectionReveal>
            <Services />
          </SectionReveal>
          <SectionReveal>
            <HowItWorks />
          </SectionReveal>
          <SelectedWork />
          <Team />
          <FinalCta />
        </main>
      </div>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
