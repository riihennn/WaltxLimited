"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProcessStep {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "DISCOVER",
    subtitle: "Research & Strategy",
    description:
      "We begin by diving deep into your business objectives, target audience, and competitive landscape to validate assumptions and define a strategic product roadmap.",
    deliverables: ["Stakeholder Alignment", "Market Research", "Scope & Feasibility"],
  },
  {
    num: "02",
    title: "DESIGN",
    subtitle: "UI/UX & Architecture",
    description:
      "We translate insights into wireframes, intuitive user journeys, and component-based design systems that combine aesthetic elegance with effortless human-centered interaction.",
    deliverables: ["User Journeys", "Design Systems", "Interactive Prototypes"],
  },
  {
    num: "03",
    title: "DEVELOP",
    subtitle: "Engineering & Systems",
    description:
      "Our engineers build clean, robust, and modern software with scalable cloud backends, secure APIs, and responsive frontends engineered for exceptional performance.",
    deliverables: ["Full-Stack Architecture", "Resilient APIs", "Tested Codebase"],
  },
  {
    num: "04",
    title: "DEPLOY",
    subtitle: "Testing & Rollout",
    description:
      "Rigorous cross-device quality assurance, security auditing, and automated CI/CD deployment pipelines guarantee a seamless, zero-downtime release into production.",
    deliverables: ["QA & Audits", "Automated CI/CD", "Production Release"],
  },
  {
    num: "05",
    title: "EVOLVE",
    subtitle: "Growth & Optimization",
    description:
      "Post-launch real-time analytics monitoring, user feedback synthesis, and continuous enhancements keep your digital platform performing at its peak and future-ready.",
    deliverables: ["Performance Audits", "Data-Driven Iterations", "Continuous Growth"],
  },
];

const FLOW_ITEMS = ["Discover", "Design", "Develop", "Deploy", "Evolve"];

interface OurApproachProps {
  className?: string;
}

export function OurApproach({ className = "" }: OurApproachProps) {
  // Active step for highlighting (default to 03 "DEVELOP" matching reference preview)
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <section
      id="our-approach"
      className={cn(
        "relative py-24 md:py-32 bg-[#0A0A0A] text-white overflow-hidden",
        className
      )}
    >
      {/* Subtle Ambient Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-white/[0.04] to-transparent blur-[120px] pointer-events-none" />

      <Container className="relative z-10 w-full">
        {/* =================================================================== */}
        {/* Section Header                                                     */}
        {/* =================================================================== */}
        <SectionReveal className="mb-20 md:mb-28 text-center flex flex-col items-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <span className="text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase font-mono text-white/50">
              04 — OUR APPROACH
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-[family-name:var(--font-manrope)] text-[clamp(36px,4.5vw,60px)] font-bold tracking-tight text-white leading-[1.08] mb-6 max-w-3xl">
            From Vision to Reality
          </h2>

          {/* Process Flow Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-5 py-2.5 rounded-full mb-6 bg-white/[0.05] border border-white/10 text-white/80 text-[12px] sm:text-[13px] font-mono font-medium tracking-wide">
            {FLOW_ITEMS.map((item, i) => (
              <span key={item} className="inline-flex items-center gap-2 sm:gap-3">
                <span
                  className={cn(
                    "transition-colors duration-300",
                    i === activeStep ? "font-bold text-white underline underline-offset-4 decoration-white/60" : "text-white/60"
                  )}
                >
                  {item}
                </span>
                {i < FLOW_ITEMS.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 opacity-30 text-white" />
                )}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <p className="font-[family-name:var(--font-inter)] text-[15px] md:text-[17px] text-white/70 leading-relaxed max-w-2xl">
            A structured, transparent engineering methodology designed to turn ambitious concepts into scalable, market-ready digital platforms.
          </p>
        </SectionReveal>

        {/* =================================================================== */}
        {/* Horizontal Process Track (Exact Limenzy / Hexa Reference Layout)    */}
        {/* =================================================================== */}
        <div className="relative w-full">
          {/* Connecting Horizontal Line across circles (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1.5px] bg-white/15 z-0" />

          {/* 5-Step Horizontal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center md:items-center text-center cursor-pointer group"
                >
                  {/* Step Number Circle on the Horizontal Line */}
                  <div className="relative mb-6 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-[15px] transition-all duration-300",
                        isActive
                          ? "bg-white text-black border-2 border-white shadow-[0_0_30px_rgba(255,255,255,0.7)] scale-105"
                          : "bg-[#111318] text-white/75 border-2 border-white/20 group-hover:border-white/60 group-hover:text-white"
                      )}
                    >
                      {step.num}
                    </motion.div>

                    {/* Glowing Traveling Position Indicator between nodes */}
                    {isActive && index < PROCESS_STEPS.length - 1 && (
                      <motion.div
                        layoutId="travelingIndicator"
                        className="hidden md:block absolute -right-6 lg:-right-8 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#ffffff] z-20 pointer-events-none"
                      />
                    )}
                  </div>

                  {/* Step Title in Bold Uppercase */}
                  <h3
                    className={cn(
                      "font-[family-name:var(--font-manrope)] font-bold text-[17px] md:text-[18px] lg:text-[19px] tracking-[0.06em] uppercase mb-2 transition-colors duration-300",
                      isActive ? "text-white" : "text-white/80 group-hover:text-white"
                    )}
                  >
                    {step.title}
                  </h3>

                  {/* Subtitle / Focus */}
                  <span className="text-[11px] font-mono font-medium tracking-wider uppercase text-white/45 mb-3 block">
                    {step.subtitle}
                  </span>

                  {/* Description Paragraph */}
                  <p className="font-[family-name:var(--font-inter)] text-[13px] lg:text-[13.5px] text-white/65 leading-relaxed mb-5 max-w-[280px]">
                    {step.description}
                  </p>

                  {/* Deliverables Bullet Pills */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 mt-auto">
                    {step.deliverables.map((item) => (
                      <span
                        key={item}
                        className={cn(
                          "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-medium border transition-colors duration-300",
                          isActive
                            ? "bg-white/[0.08] border-white/25 text-white/90"
                            : "bg-white/[0.03] border-white/10 text-white/60 group-hover:border-white/20 group-hover:text-white/80"
                        )}
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 opacity-60 flex-shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
