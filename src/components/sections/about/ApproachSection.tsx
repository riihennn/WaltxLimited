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
          <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/50 uppercase mb-6">
            OUR APPROACH
          </div>
          <h2 className="text-[clamp(38px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05] mb-8">
            Different disciplines. One direction.
          </h2>
          <p className="text-[clamp(17px,1.2vw,21px)] text-[#181818]/70 font-medium leading-[1.6] max-w-[750px] mx-auto">
            Great products happen when different perspectives work together. We bring product thinking, creative direction, design, and engineering into one continuous process.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          {phases.map((phase, i) => (
            <div key={phase} className="flex flex-col items-center">
              <div className="approach-word opacity-20 transform translate-y-4 scale-95 text-[clamp(32px,3vw,48px)] font-bold tracking-tight text-[#181818]">
                {phase}
              </div>
              {i < phases.length - 1 && (
                <div className="approach-arrow opacity-0 transform -translate-y-4 text-xl md:text-2xl text-[#181818]/30 my-4">
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
