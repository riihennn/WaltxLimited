"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    id: "01",
    title: "START WITH PEOPLE",
    desc: "Every meaningful product begins with understanding the people who use it."
  },
  {
    id: "02",
    title: "THINK BEYOND TODAY",
    desc: "We build with the future in mind, creating products that can evolve as people and businesses grow."
  },
  {
    id: "03",
    title: "MAKE IT SIMPLE",
    desc: "The best technology often feels effortless. We focus on removing complexity, not adding it."
  },
  {
    id: "04",
    title: "KEEP MOVING",
    desc: "Technology changes quickly. We stay curious, experiment, learn, and keep building."
  }
];

export function PhilosophySection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const steps = gsap.utils.toArray<HTMLElement>(".phil-step");
    const indicators = gsap.utils.toArray<HTMLElement>(".phil-indicator");

    steps.forEach((step, i) => {
      ScrollTrigger.create({
        trigger: step,
        start: "top 60%",
        end: "bottom 40%",
        onToggle: (self) => {
          if (self.isActive) {
            gsap.to(step, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
            indicators.forEach((ind, idx) => {
              if (idx === i) {
                gsap.to(ind, { opacity: 1, scale: 1.1, duration: 0.3 });
              } else {
                gsap.to(ind, { opacity: 0.3, scale: 1, duration: 0.3 });
              }
            });
            const counter = document.querySelector(".phil-counter");
            if (counter) {
              counter.textContent = `0${i + 1} / 04`;
            }
          } else {
            gsap.to(step, { opacity: 0.2, duration: 0.5 });
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
            / OUR PHILOSOPHY /
          </div>
          <h2 className="text-[clamp(38px,4vw,60px)] font-bold tracking-tight leading-[1.05] mb-8">
            Build with purpose.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
          
          <div className="md:col-span-4 lg:col-span-3 relative hidden md:block">
            <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-start gap-12">
              <div className="phil-counter text-[clamp(32px,3vw,48px)] font-bold tracking-tighter opacity-90 transition-all duration-300">
                01 / 04
              </div>
              <div className="flex gap-3">
                {principles.map((_, i) => (
                  <div key={i} className="phil-indicator w-12 h-1 bg-white/30 rounded-full transition-all" />
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-9 md:pl-12 lg:pl-24 space-y-[35vh] pb-[20vh]">
            {principles.map((step) => (
              <div key={step.id} className="phil-step opacity-20 transform -translate-x-8">
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
