"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ProductPhilosophy() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".pp-element",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="pp-element text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/50 uppercase mb-8">
            / OUR APPROACH /
          </div>
          <h2 className="pp-element text-[clamp(36px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05] mb-10 max-w-[900px]">
            Built around people, places, and experiences.
          </h2>
          <p className="pp-element text-[clamp(17px,1.2vw,21px)] text-[#181818]/60 font-medium leading-[1.6] max-w-[700px]">
            We build products around the way people discover, choose, and experience the world around them. Every WaltX product starts with a real audience, a real need, and a clear opportunity.
          </p>
        </div>
      </Container>
    </section>
  );
}
