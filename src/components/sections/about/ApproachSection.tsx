"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phases = ["STRATEGY", "DESIGN", "ENGINEERING", "PRODUCT", "EXPERIENCE"];

export function ApproachSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const words = gsap.utils.toArray<HTMLElement>(".approach-word");
    const arrows = gsap.utils.toArray<HTMLElement>(".approach-arrow");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 80%",
        scrub: 1,
      }
    });

    words.forEach((word, i) => {
      tl.to(word, { opacity: 1, y: 0, scale: 1, duration: 1 }, i * 0.5);
      if (arrows[i]) {
        tl.to(arrows[i], { opacity: 1, y: 0, duration: 0.5 }, i * 0.5 + 0.5);
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-white text-center">
      <Container>
        <div className="mb-24">
          <div className="text-sm font-semibold tracking-[0.2em] text-[#181818]/50 uppercase mb-6">
            / OUR APPROACH /
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#181818] mb-10">
            Different disciplines. One direction.
          </h2>
          <p className="text-xl md:text-2xl text-[#181818]/60 font-medium leading-relaxed max-w-3xl mx-auto">
            Great products happen when different perspectives work together. We bring product thinking, creative direction, design, and engineering into one continuous process.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          {phases.map((phase, i) => (
            <div key={phase} className="flex flex-col items-center">
              <div className="approach-word opacity-20 transform translate-y-4 scale-95 text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-[#181818]">
                {phase}
              </div>
              {i < phases.length - 1 && (
                <div className="approach-arrow opacity-0 transform -translate-y-4 text-2xl md:text-4xl text-[#181818]/30 my-4 md:my-8">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
