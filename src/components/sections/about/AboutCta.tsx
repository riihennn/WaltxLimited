"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutCta() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    tl.fromTo(
      ".acta-element",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-white py-40 md:py-64 relative overflow-hidden rounded-t-[3rem] border-t border-black/5 z-20">
      <Container className="relative z-10 text-center flex flex-col items-center">
        <div className="acta-element text-sm font-semibold tracking-[0.2em] text-[#181818]/50 uppercase mb-10">
          / LET&apos;S BUILD /
        </div>
        
        <h2 className="acta-element text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter text-[#181818] leading-[0.95] mb-12 max-w-5xl">
          Let&apos;s build what&apos;s next.
        </h2>
        
        <p className="acta-element text-2xl md:text-3xl text-[#181818]/50 font-medium mb-16">
          Have an idea, a challenge, or an opportunity?
        </p>

        <div className="acta-element flex flex-col items-center gap-8">
          <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#181818] text-white px-10 py-5 text-lg font-medium hover:bg-black hover:scale-105 transition-all duration-300">
            Let&apos;s Talk ↗
          </a>
          <a href="mailto:info@waltx.ae" className="text-[#181818]/60 hover:text-[#181818] font-medium tracking-wide transition-colors">
            info@waltx.ae
          </a>
        </div>
      </Container>
    </section>
  );
}
