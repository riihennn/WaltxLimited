"use client";

import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "DISCOVERY",
    description:
      "We begin by understanding your business objectives, target audience, and market landscape to identify opportunities and build a strong strategic foundation.",
  },
  {
    num: "02",
    title: "STRATEGY",
    description:
      "Our team crafts a tailored product roadmap, technical architecture, and intuitive user journeys that align directly with your goals and long-term vision.",
  },
  {
    num: "03",
    title: "CREATION",
    description:
      "We transform ideas into high-performance digital products through component-based design systems, modern frontends, and resilient cloud architectures.",
  },
  {
    num: "04",
    title: "DELIVERY",
    description:
      "Rigorous quality assurance, automated CI/CD deployments, and continuous monitoring guarantee a seamless, zero-downtime release and peak performance.",
  },
];

interface OurApproachProps {
  className?: string;
}

export function OurApproach({ className = "" }: OurApproachProps) {
  return (
    <section
      id="our-approach"
      className={cn(
        "relative py-24 md:py-32 bg-[#0A0A0A] text-white overflow-hidden",
        className
      )}
    >
      <Container className="relative z-10 w-full">
        {/* =================================================================== */}
        {/* Section Header (Clean, Left-Aligned matching reference)             */}
        {/* =================================================================== */}
        <SectionReveal className="mb-16 md:mb-24 flex flex-col items-start">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span className="w-6 h-[1px] bg-white/30" />
            <span className="text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase font-mono text-white/50">
              HOW WE WORK
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-[family-name:var(--font-manrope)] text-[clamp(32px,4vw,56px)] font-bold tracking-tight text-white uppercase leading-[1.08]">
            OUR WORK PROCESS
          </h2>
        </SectionReveal>

        {/* =================================================================== */}
        {/* Horizontal Process Track (Clean 4-column reference layout)          */}
        {/* =================================================================== */}
        <div className="relative w-full">
          {/* Connecting Horizontal Line across circle centers (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-[1px] bg-white/20 z-0" />

          {/* 4-Step Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-10 md:gap-6 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => {
              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center text-center group cursor-default"
                >
                  {/* Step Number Circle on the Horizontal Line */}
                  <div className="relative mb-6 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border border-white/25 bg-[#0A0A0A] flex items-center justify-center text-white font-mono text-[15px] font-bold transition-all duration-300 group-hover:border-white/80 group-hover:scale-105 shadow-sm">
                      {step.num}
                    </div>
                  </div>

                  {/* Step Title in Bold Uppercase */}
                  <h3 className="font-[family-name:var(--font-manrope)] font-bold text-[15px] md:text-[16px] tracking-[0.1em] uppercase text-white mb-3 text-center transition-colors duration-300 group-hover:text-white">
                    {step.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="font-[family-name:var(--font-inter)] text-[13px] md:text-[13.5px] text-white/60 leading-[1.65] text-center max-w-[280px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
