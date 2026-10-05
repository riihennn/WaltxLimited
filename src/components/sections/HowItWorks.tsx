"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Asterisk, Check } from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Discover & Define",
    description: "We start by understanding the problem, the users and the business goals. This creates a clear foundation before design and development begins.",
    listTitle: "Perfect if you need to:",
    listItems: [
      "Validate your product idea",
      "Define the right product strategy",
      "Understand your users",
      "Identify key requirements",
      "Create a clear roadmap"
    ],
    image: "/step_discover_1791226080645.jpg"
  },
  {
    id: "02",
    title: "Design & Shape",
    description: "We transform ideas into clear user experiences, beautiful interfaces and seamless product flows that delight users.",
    listTitle: "Perfect if you need to:",
    listItems: [
      "Create wireframes & prototypes",
      "Design intuitive user interfaces",
      "Establish a design system",
      "Improve existing UX",
      "Map out user journeys"
    ],
    image: "/step_design_1791226091935.jpg"
  },
  {
    id: "03",
    title: "Build & Launch",
    description: "Our engineering team turns the approved design into a fast, scalable and reliable digital product ready for the market.",
    listTitle: "Perfect if you need to:",
    listItems: [
      "Develop a scalable MVP",
      "Build complex web apps",
      "Ensure robust architecture",
      "Integrate third-party APIs",
      "Deploy with confidence"
    ],
    image: "/step_build_1791226128737.jpg"
  },
  {
    id: "04",
    title: "Grow & Evolve",
    description: "We continuously improve the product using user feedback, data analytics, and new market opportunities.",
    listTitle: "Perfect if you need to:",
    listItems: [
      "Analyze user behavior",
      "Iterate based on feedback",
      "Scale infrastructure",
      "Add new product features",
      "Optimize conversion rates"
    ],
    // Reusing the first image as a placeholder for the 4th step since quota was reached
    image: "/step_discover_1791226080645.jpg"
  }
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track scroll progress to update active step
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Math to divide the 400vh scroll into 4 chunks (0, 1, 2, 3)
    const step = Math.min(3, Math.floor(latest * 4));
    if (step !== activeStep) {
      setActiveStep(step);
    }
  });

  // Map progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="bg-[#F7F6F3] h-[400vh] relative z-20">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 md:py-12 px-6 sm:px-12 max-w-[1600px] mx-auto overflow-hidden">
        
        {/* TOP INTRO AREA */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-24 mb-6 shrink-0">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#181818]/60">
                / How It Works /
              </span>
              <div className="h-[1px] w-12 bg-[#181818]/20"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#181818] leading-[1.1]">
              Building Digital Products <br />
              <span className="flex items-center gap-4 mt-2">
                That Move Ideas Forward.
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 60, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="hidden md:flex h-[2px] bg-[#181818] relative"
                >
                  <ArrowUpRight className="absolute -right-3 -top-[11px] w-6 h-6" />
                </motion.div>
              </span>
            </h2>
          </div>
          
          <div className="lg:w-1/3 pt-4">
            <p className="text-lg md:text-xl text-[#666664] leading-relaxed">
              From the first idea to a scalable digital product, we combine strategy, design and engineering to turn complex challenges into meaningful digital experiences.
            </p>
          </div>
        </div>

        {/* PROCESS TITLE & PROGRESS */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-6 shrink-0">
          <h3 className="text-3xl md:text-4xl font-medium text-[#181818]">
            From Idea to Impact
          </h3>

          <div className="w-full md:w-[50%] flex flex-col gap-3">
            <div className="flex justify-between items-end mb-2">
              <div className="flex gap-8 text-sm font-medium">
                {processSteps.map((step, i) => (
                  <span 
                    key={i} 
                    className={`transition-colors duration-500 ${activeStep === i ? 'text-[#181818]' : 'text-[#A3A3A3]'}`}
                  >
                    /{step.id}/
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#181818]">
                Progress {Math.round(((activeStep + 1) / 4) * 100)}%
              </span>
            </div>
            
            {/* Progress Track */}
            <div className="w-full h-3 bg-[#E2E1DF] rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#181818] rounded-full"
                style={{ width: progressWidth }}
              />
            </div>
          </div>
        </div>

        {/* MAIN PROCESS CARD */}
        <div className="flex-1 min-h-[400px] bg-white rounded-[2rem] border border-[#E2E1DF] flex flex-col md:flex-row overflow-hidden shadow-sm">
          
          {/* LEFT: Content Panel */}
          <div className="w-full md:w-1/2 p-8 lg:p-16 flex flex-col relative bg-[#FAFAFA]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#181818] flex items-center justify-center text-white shrink-0">
                    <Asterisk className="w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-semibold text-[#181818]">
                    {processSteps[activeStep].title}
                  </h4>
                </div>

                <p className="text-lg text-[#666664] leading-relaxed mb-12">
                  {processSteps[activeStep].description}
                </p>

                <div className="mt-auto">
                  <h5 className="text-sm font-semibold uppercase tracking-wider text-[#181818] mb-6">
                    {processSteps[activeStep].listTitle}
                  </h5>
                  <ul className="flex flex-col gap-4">
                    {processSteps[activeStep].listItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#A3A3A3] shrink-0 mt-[2px]" />
                        <span className="text-[#666664]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Image Panel */}
          <div className="w-full md:w-1/2 relative bg-[#F0F0F0] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={processSteps[activeStep].image} 
                  alt={processSteps[activeStep].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
