"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function VisionSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    tl.fromTo(".vis-label", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".vis-heading", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6")
      .fromTo(".vis-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-40 md:py-64 bg-[#F6F5F2] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px] opacity-60 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="vis-label text-sm font-semibold tracking-[0.2em] text-[#181818]/50 uppercase mb-12">
            / OUR VISION /
          </div>
          <h2 className="vis-heading text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-[#181818] leading-[0.9] mb-16">
            Built for what&apos;s next.
          </h2>
          <p className="vis-text text-2xl md:text-4xl text-[#181818]/60 font-medium leading-relaxed max-w-4xl mx-auto">
            We envision a world where technology makes discovering, connecting, and experiencing the world around us simpler and more meaningful.
          </p>
        </div>
      </Container>
    </section>
  );
}
