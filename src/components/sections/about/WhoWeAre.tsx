"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function WhoWeAre() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".wwa-heading",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );

    gsap.fromTo(
      ".wwa-text",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-white border-t border-black/5 rounded-t-[3rem] -mt-10 relative z-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="text-sm font-semibold tracking-[0.2em] text-[#181818]/50 uppercase mb-6 sticky top-32">
              / WHO WE ARE /
            </div>
            <h2 className="wwa-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#181818] leading-[1.05]">
              More than technology.
            </h2>
          </div>
          
          <div className="lg:col-span-7 lg:pt-24" ref={textRef}>
            <p className="wwa-text text-2xl md:text-4xl text-[#181818]/80 font-medium leading-[1.3] mb-12">
              WaltX brings together product thinking, design, and engineering to create digital experiences built for real people and real-world needs.
            </p>
            <p className="wwa-text text-2xl md:text-4xl text-[#181818]/50 font-medium leading-[1.3]">
              We don&apos;t believe technology should exist simply because it can be built. We believe it should solve something, simplify something, or create something people genuinely value.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
