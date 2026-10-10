"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    id: "01",
    title: "Built for real users",
    desc: "We start with the experience, not just the technology."
  },
  {
    id: "02",
    title: "Modern by default",
    desc: "We use modern tools, architectures, and development practices."
  },
  {
    id: "03",
    title: "Designed to scale",
    desc: "Our products are built with future growth in mind."
  },
  {
    id: "04",
    title: "Partnership mindset",
    desc: "We work closely with our partners from the first idea to the final product."
  }
];

export function WhyWaltX() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".why-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#F6F5F2] py-32 md:py-48">
      <Container>
        <div className="mb-20 md:mb-32">
          <div className="text-sm font-semibold tracking-[0.2em] text-[#181818]/50 uppercase mb-6">
            WHY WALTX
          </div>
          <h2 className="text-[clamp(36px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05] max-w-[900px]">
            Technology is only valuable when it creates something meaningful.
          </h2>
        </div>

        <div className="why-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <div 
              key={reason.id}
              className="why-card group relative bg-white rounded-3xl md:rounded-[2.5rem] p-10 md:p-16 border border-black/5 overflow-hidden hover:shadow-xl transition-all duration-500 ease-out"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#f0f0f0] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-2xl font-bold text-[#181818]/20 mb-8 md:mb-16 font-mono tracking-tighter">
                  {reason.id}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#181818] mb-6">
                  {reason.title}
                </h3>
                <p className="text-xl md:text-2xl text-[#181818]/60 font-medium leading-relaxed max-w-md mt-auto">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
