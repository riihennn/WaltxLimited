"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent, type Variants } from "framer-motion";
import { ArrowUpRight, Asterisk, Check } from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Discover",
    description: "We understand the problem, users, and business goals before defining the right direction.",
    listTitle: "WE FOCUS ON",
    listItems: [
      "Validate the product idea",
      "Understand users",
      "Define business goals",
      "Identify key requirements",
      "Create a clear roadmap"
    ],
    image: "/waltx-image-1.jpeg"
  },
  {
    id: "02",
    title: "Design",
    description: "We turn ideas into clear experiences, intuitive interfaces, and thoughtful product flows.",
    listTitle: "WE FOCUS ON",
    listItems: [
      "Create wireframes and prototypes",
      "Design intuitive interfaces",
      "Establish a design system",
      "Improve existing UX",
      "Map user journeys"
    ],
    image: "/waltx-image-2.jpeg"
  },
  {
    id: "03",
    title: "Build",
    description: "We turn approved designs into fast, scalable, and reliable digital products.",
    listTitle: "WE FOCUS ON",
    listItems: [
      "Develop scalable applications",
      "Build complex web experiences",
      "Create robust architecture",
      "Integrate APIs and services",
      "Prepare for deployment"
    ],
    image: "/waltx-image-3.jpeg"
  },
  {
    id: "04",
    title: "Launch & Grow",
    description: "We launch, learn, improve, and continuously evolve the product based on real-world feedback.",
    listTitle: "WE FOCUS ON",
    listItems: [
      "Launch the product",
      "Analyze user behavior",
      "Iterate based on feedback",
      "Improve performance",
      "Add meaningful features",
      "Scale when needed"
    ],
    image: "/waltx-image-4.webp"
  }
];

const imageVariants: Variants = {
  enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%" }),
  center: { x: "0%", zIndex: 1 },
  exit: (d: number) => ({ x: d > 0 ? "50%" : "-50%", zIndex: 0 }),
};

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track scroll progress to update active step
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = Math.min(3, Math.floor(latest * 4));
    if (step !== activeStep) {
      setDirection(step > activeStep ? 1 : -1);
      setActiveStep(step);
    }
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="bg-[#F7F6F3] h-[400vh] relative z-20">
      {/* Sticky Container */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col pt-24 lg:pt-28 pb-20 lg:pb-24 px-6 sm:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 h-full min-h-0">
          
          {/* Left Column (Eyebrow) */}
          <div className="hidden lg:block lg:col-span-2 pt-2">
            <span className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] uppercase text-[#181818]/50 whitespace-nowrap">
              / HOW IT WORKS /
            </span>
          </div>

          {/* Right Main Column */}
          <div className="lg:col-span-10 flex flex-col h-full min-h-0">
            
            {/* Mobile Eyebrow */}
            <div className="lg:hidden mb-6">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#181818]/50 whitespace-nowrap">
                / HOW IT WORKS /
              </span>
            </div>

            {/* Intro Row */}
            <div className="flex flex-col md:flex-row w-full items-start mb-16 md:mb-20 shrink-0">
              <div className="w-full md:w-1/2 pr-4 md:pr-8 mb-4 md:mb-0">
                <h2 className="text-[clamp(38px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
                  How we build <br /> what&apos;s next.
                </h2>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-start pt-1 md:pt-2">
                <p className="text-[clamp(17px,1.2vw,21px)] text-[#666664] leading-[1.6] font-medium max-w-[750px]">
                  From idea to launch, we combine strategy, design, engineering, and continuous improvement to build digital products that matter.
                </p>
              </div>
            </div>

            {/* Dynamic Title & Progress Row */}
            <div className="flex flex-col md:flex-row w-full items-start md:items-end mb-4 md:mb-5 gap-6 md:gap-0 shrink-0">
              {/* Title on the left (50%) */}
              <div className="w-full md:w-1/2 pr-4">
                <h3 className="text-[clamp(24px,2.2vw,36px)] font-bold tracking-tight text-[#181818] leading-[1.3]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeStep}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="block"
                    >
                      {processSteps[activeStep].id} — {processSteps[activeStep].title}
                    </motion.span>
                  </AnimatePresence>
                </h3>
              </div>

              {/* Progress on the right (50%) */}
              <div className="w-full md:w-1/2 flex flex-col justify-end pr-1">
                {/* Progress Bar */}
                <div className="w-full h-4 md:h-5 lg:h-6 bg-[#EBEBEB] rounded-full relative mb-3 md:mb-4">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-[#181818] rounded-full"
                    style={{ width: progressWidth }}
                  >
                    <div className="absolute right-0 top-0 h-full aspect-square bg-[#EBEBEB] rounded-full flex items-center justify-center border-[2px] md:border-[3px] border-[#181818]">
                      <Asterisk className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-[#181818]" strokeWidth={2.5} />
                    </div>
                  </motion.div>
                </div>
                
                {/* Progress Labels */}
                <div className="flex justify-between items-center text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                  <div className="text-[#181818]/40 flex items-center gap-2">
                    <span>STEP</span>
                    <div className="flex gap-1 md:gap-2">
                      {processSteps.map((step, i) => (
                        <span key={i} className={`transition-colors duration-300 ${activeStep === i ? "text-[#181818]" : ""}`}>
                          /{step.id}/
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-[#181818]">
                    PROGRESS {Math.round(((activeStep + 1) / 4) * 100)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Main Card */}
            <div className="w-full bg-[#F4F3EF] rounded-[1.5rem] lg:rounded-[2rem] flex flex-col md:flex-row overflow-hidden border border-[#E2E1DF]/80 mt-1">
              
              {/* Card Left Text */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-transparent">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col justify-center"
                  >
                    <p className="text-[clamp(17px,1.2vw,21px)] text-[#181818]/80 font-medium leading-[1.6] max-w-[750px]">
                      {processSteps[activeStep].description}
                    </p>
                    
                    <div className="mt-8 md:mt-10">
                      <h5 className="text-xs md:text-[13px] font-semibold tracking-wide text-[#181818] mb-4">
                        {processSteps[activeStep].listTitle}
                      </h5>
                      <ul className="flex flex-col gap-3">
                        {processSteps[activeStep].listItems.map((item, i) => (
                          <li key={i} className="text-[12.5px] md:text-[14px] font-medium text-[#181818]/80">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Card Right Image */}
              <div className="w-full md:w-1/2 relative bg-[#EBEBEB] overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activeStep}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute inset-0"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={processSteps[activeStep].image} 
                      alt={processSteps[activeStep].title}
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105 mix-blend-multiply opacity-90"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
