"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ProductsIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".pi-heading",
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
      ".pi-text",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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
              / BUILT BY WALTX /
            </div>
            <h2 className="pi-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#181818] leading-[1.1]">
              We don&apos;t just build technology. We build products people use.
            </h2>
          </div>
          
          <div className="lg:col-span-7 lg:pt-20" ref={textRef}>
            <p className="pi-text text-2xl md:text-3xl lg:text-4xl text-[#181818]/70 font-medium leading-[1.4]">
              From nightlife and dining to travel and experiences, our products are designed around real audiences and real-world discovery.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
