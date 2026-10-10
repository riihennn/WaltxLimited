"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ServicesIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".intro-heading",
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
      ".intro-text",
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
          <div className="lg:col-span-4">
            <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/50 uppercase mb-6">
              WHAT WE DO
            </div>
            <h2 className="intro-heading text-[clamp(38px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
              From idea to experience.
            </h2>
          </div>

          <div className="lg:col-span-8 lg:pt-14" ref={textRef}>
            <p className="intro-text text-[clamp(24px,2.2vw,36px)] text-[#181818]/80 font-medium leading-[1.3] mb-8">
              At WaltX, we bring together strategy, design, engineering, and technology to turn ideas into digital products people actually use.
            </p>
            <p className="intro-text text-[clamp(24px,2.2vw,36px)] text-[#181818]/60 font-medium leading-[1.3]">
              Whether it&apos;s a new platform, a web application, or a complete digital experience, we focus on building solutions that are useful, scalable, and ready for what&apos;s next.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
