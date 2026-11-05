"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ConstellationCanvas } from "@/components/ui/ConstellationCanvas";
import { cn } from "@/lib/utils";

export function ConceptToImpact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let lastDark = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const H = window.innerHeight;

      // 1. Entrance: section covers 80% of viewport (with 8% buffer on scroll up to prevent jitter)
      const isTopDark = lastDark ? rect.top <= H * 0.28 : rect.top <= H * 0.20;

      // 2. Exit: 80% of section has scrolled past viewport
      const isBottomDark = lastDark ? rect.bottom >= H * 0.20 : rect.bottom >= H * 0.28;

      const nextDark = isTopDark && isBottomDark;
      if (nextDark !== lastDark) {
        lastDark = nextDark;
        setIsDark(nextDark);
        window.dispatchEvent(
          new CustomEvent("waltx-theme-change", { detail: { isDark: nextDark } })
        );
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.dispatchEvent(
        new CustomEvent("waltx-theme-change", { detail: { isDark: false } })
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="concept-to-impact"
      {...(isDark ? { "data-navbar-dark": "" } : {})}
      className="relative w-full min-h-[90vh] lg:min-h-[100vh] flex items-center overflow-hidden py-24 md:py-36 my-0 bg-transparent"
    >
      {/* Background Interactive Constellation / Plexus Canvas: Always visible! */}
      {/* On light background (#F6F5F2), draws in #0284c7 with crisp high-visibility alpha */}
      {/* On dark background (#0A0A0A), draws in #9CD9F9 (glowing ice blue) */}
      <div className="absolute inset-0 pointer-events-auto">
        <ConstellationCanvas
          isDark={isDark}
          dotColor={isDark ? "#9CD9F9" : "#0284c7"}
          lineColor={isDark ? "#9CD9F9" : "#0284c7"}
          backgroundColor="transparent"
        />
      </div>

      <Container className="relative z-10 w-full pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left spacer for the interactive visual canvas */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

          {/* Right Column: Statement Typography */}
          <div className="lg:col-span-7 lg:pl-6 flex flex-col items-start pointer-events-auto">
            <h2
              className={cn(
                "text-[clamp(38px,4.8vw,76px)] font-bold tracking-tight leading-[1.02] mb-8 uppercase",
                isDark ? "text-white" : "text-[#181818]"
              )}
              style={{
                transition: "color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              From Concepts <br />
              <span
                className={isDark ? "text-white/60" : "text-[#181818]/60"}
                style={{
                  transition: "color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                To Impacts
              </span>
            </h2>

            <p
              className={cn(
                "text-[16px] md:text-[18px] lg:text-[19px] font-normal leading-[1.7] max-w-2xl",
                isDark ? "text-white/70" : "text-[#181818]/70"
              )}
              style={{
                transition: "color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              At WaltX, we turn ideas into impactful brand and digital experiences. Through focused engineering, strategic platform design, and continuous innovation, we help businesses connect with their audiences, build trust, and drive sustainable growth. As a trusted technology company in the UAE, we are committed to turning vision into measurable results that make a lasting impact.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
