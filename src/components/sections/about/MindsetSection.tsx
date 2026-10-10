"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MindsetSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".ms-element",
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

    const words = gsap.utils.toArray<HTMLElement>(".ms-word");
    words.forEach((word, i) => {
      gsap.fromTo(
        word,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: word,
            start: "top 85%",
          }
        }
      );
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-white border-t border-black/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-6">
            <div className="ms-element text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#181818]/50 uppercase mb-8">
              THE WAY WE THINK
            </div>
            <h2 className="ms-element text-[clamp(38px,4vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05] mb-8">
              Stay curious.<br/>Build boldly.<br/>Keep improving.
            </h2>
            <p className="ms-element text-[clamp(17px,1.2vw,21px)] text-[#181818]/70 font-medium leading-[1.6] max-w-[750px]">
              We believe great products are never truly finished. They evolve with their users, their environment, and the opportunities around them.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center gap-6 md:gap-10 mt-12 lg:mt-0">
            <div className="ms-word text-[clamp(40px,4vw,64px)] font-black tracking-tighter text-[#181818]">
              CURIOUS
            </div>
            <div className="ms-word text-[clamp(40px,4vw,64px)] font-black tracking-tighter text-[#181818]/40">
              BOLD
            </div>
            <div className="ms-word text-[clamp(40px,4vw,64px)] font-black tracking-tighter text-[#181818]/20">
              EVOLVING
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
