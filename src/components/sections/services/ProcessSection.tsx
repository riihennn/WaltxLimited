"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: "01",
    title: "DISCOVER",
    desc: "We understand the problem, users, business goals, and opportunities."
  },
  {
    id: "02",
    title: "DEFINE",
    desc: "We turn ideas into a clear product direction and technical roadmap."
  },
  {
    id: "03",
    title: "DESIGN",
    desc: "We create the experience, interface, and interactions around real users."
  },
  {
    id: "04",
    title: "BUILD",
    desc: "Our engineering team turns the product vision into a scalable digital experience."
  },
  {
    id: "05",
    title: "LAUNCH",
    desc: "We test, optimize, deploy, and prepare the product for real-world use."
  },
  {
    id: "06",
    title: "GROW",
    desc: "We continuously improve the product based on users, data, and new opportunities."
  }
];

export function ProcessSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const steps = gsap.utils.toArray<HTMLElement>(".process-step");
    const indicators = gsap.utils.toArray<HTMLElement>(".process-indicator");

    steps.forEach((step, i) => {
      // Highlight the step content when it reaches the center
      ScrollTrigger.create({
        trigger: step,
        start: "top 60%",
        end: "bottom 40%",
        onToggle: (self) => {
          if (self.isActive) {
            gsap.to(step, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
            // Highlight the corresponding indicator
            indicators.forEach((ind, idx) => {
              if (idx === i) {
                gsap.to(ind, { opacity: 1, scale: 1.1, duration: 0.3 });
              } else {
                gsap.to(ind, { opacity: 0.3, scale: 1, duration: 0.3 });
              }
            });
            // Update the counter
            const counter = document.querySelector(".process-counter");
            if (counter) {
              counter.textContent = `0${i + 1} / 06`;
            }
          } else {
            // Optional: dim it when it leaves the center
            gsap.to(step, { opacity: 0.3, duration: 0.5 });
          }
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#111] text-white py-32 md:py-48 relative">
      <Container>
        <div className="mb-24 md:mb-40">
          <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-white/50 uppercase mb-6">
            OUR PROCESS
          </div>
          <h2 className="text-[clamp(38px,4vw,60px)] font-bold tracking-tight leading-[1.05] mb-8 max-w-4xl">
            Good products don&apos;t happen by accident.
          </h2>
          <p className="text-[clamp(24px,2.2vw,36px)] text-white/60 font-medium leading-[1.3] max-w-[750px]">
            We follow a simple process designed to move from idea to product and from product to growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
          
          {/* Sticky Left Column: Progress Indicator */}
          <div className="md:col-span-4 lg:col-span-3 relative hidden md:block">
            <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-start gap-12">
              <div className="process-counter text-[clamp(32px,3vw,48px)] font-bold tracking-tighter opacity-90 transition-all duration-300">
                01 / 06
              </div>
              <div className="flex gap-3">
                {processSteps.map((_, i) => (
                  <div key={i} className="process-indicator w-12 h-1 bg-white/30 rounded-full transition-all" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Steps */}
          <div className="md:col-span-8 lg:col-span-9 md:pl-12 lg:pl-24 space-y-[40vh] pb-[30vh]">
            {processSteps.map((step) => (
              <div key={step.id} className="process-step opacity-30 transform -translate-x-10">
                <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-white/50 uppercase mb-6">
                  {step.id} — {step.title}
                </div>
                <h3 className="text-[clamp(20px,1.8vw,28px)] font-medium tracking-tight leading-[1.4] max-w-[750px] text-white/90">
                  {step.desc}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
