"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const services = [
  {
    title: "PRODUCT DESIGN",
    description: "WaltX specializes in SaaS design, enhancing Product Design with expert insights, innovative solutions, improved UI/UX, design audits, design systems, testing, optimization, increased conversion, and growth support."
  },
  {
    title: "UI/UX DESIGN",
    description: "We craft intuitive, engaging user experiences and stunning interfaces that delight your users and elevate your brand's digital presence."
  },
  {
    title: "GROWTH DESIGN",
    description: "Strategic design decisions focused on user acquisition, retention, and scaling your business metrics through data-driven iterations."
  },
  {
    title: "MOBILE APPS DESIGN",
    description: "Native and cross-platform mobile application design that feels natural, fluid, and perfectly tailored to your users' hands."
  },
  {
    title: "DESIGN SYSTEMS",
    description: "Comprehensive, scalable design systems that ensure absolute consistency across all your products and speed up your development cycles."
  },
  {
    title: "DESIGN AUDITS",
    description: "In-depth heuristic evaluations of your existing product to identify usability issues, accessibility gaps, and opportunities for immediate improvement."
  },
  {
    title: "USER RESEARCH",
    description: "Deep qualitative and quantitative research to understand your users' true needs, behaviors, and pain points."
  },
  {
    title: "WEBSITE DESIGN FOR YOUR SAAS",
    description: "High-converting marketing websites specifically tailored for SaaS companies to communicate value and drive enterprise sign-ups."
  }
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const containerRef = useRef<HTMLDivElement>(null);

  // Directly link the section's entrance opacity and slide to the user's scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 30%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <section ref={containerRef} className="bg-[#F7F6F3] min-h-[100dvh] flex items-center justify-center pt-24 pb-20 px-6 sm:px-12 relative z-20">
      <motion.div 
        style={{ opacity, y }}
        className="w-full max-w-7xl mx-auto border-t border-[#E2E1DF]"
      >
        {services.map((service, i) => {
          const isOpen = openIndex === i;
          const num = (i + 1).toString().padStart(2, "0");

          return (
            <div 
              key={i}
              className="border-b border-[#E2E1DF] cursor-pointer group"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className={`grid grid-cols-12 gap-x-4 w-full transition-all duration-500 ease-in-out items-start ${isOpen ? 'py-6 md:py-8' : 'py-3.5 md:py-5 hover:bg-black/[0.02]'}`}>

                {/* Number */}
                <div className={`col-span-3 sm:col-span-2 text-sm md:text-base transition-colors duration-300 ${isOpen ? 'font-medium text-[#181818]' : 'text-[#A3A3A3] group-hover:text-[#181818]'}`}>
                  {isOpen ? `/ ${num} /` : num}
                </div>

                {/* Icon */}
                <div className={`col-span-3 sm:col-span-2 text-sm md:text-base transition-colors duration-300 ${isOpen ? 'font-medium text-[#181818]' : 'text-[#A3A3A3] group-hover:text-[#181818]'}`}>
                  {isOpen ? '( - )' : '( + )'}
                </div>

                {/* Image Placeholder (Only visible when open, takes space to maintain grid) */}
                <div className="col-span-6 sm:col-span-3 overflow-hidden flex items-start justify-center sm:justify-start">
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#C3B5B1] flex items-center justify-center">
                          {/* 4 Diamonds SVG */}
                          <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="50" y="10" width="28" height="28" transform="rotate(45 50 10)" fill="#181818" />
                            <rect x="50" y="52" width="28" height="28" transform="rotate(45 50 52)" fill="#181818" />
                            <rect x="29" y="31" width="28" height="28" transform="rotate(45 29 31)" fill="#181818" />
                            <rect x="71" y="31" width="28" height="28" transform="rotate(45 71 31)" fill="#181818" />
                          </svg>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Text Content */}
                <div className="col-span-12 sm:col-span-5 flex flex-col mt-3 sm:mt-0">
                  <div className={`text-sm md:text-base font-semibold uppercase tracking-wide transition-colors duration-300 ${isOpen ? 'text-[#181818] mb-3 md:mb-4' : 'text-[#181818]'}`}>
                    {service.title}
                  </div>

                  {/* Paragraph */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-[#666664] text-xs md:text-sm leading-relaxed max-w-xl pb-2">
                      {service.description}
                    </p>
                  </motion.div>
                </div>

              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
