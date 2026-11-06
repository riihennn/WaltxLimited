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
    let ticking = false;

    const checkScroll = () => {
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

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    checkScroll();
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
      {/* Soft bottom gradient mask to smoothly dissolve particles into the background without a hard cutoff line */}
      <div className="absolute inset-0 pointer-events-auto [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
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
                "font-[family-name:var(--font-manrope)] font-bold tracking-[-0.02em] uppercase",
                "text-[clamp(32px,4vw,64px)] leading-[1.1] sm:leading-[1.08] lg:leading-[1.12]",
                "mb-6 sm:mb-8",
                isDark ? "text-white" : "text-[#181818]"
              )}
              style={{
                transition: "color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <span className="block">IDEAS INTO PRODUCTS.</span>
              <span
                className={cn(
                  "block",
                  isDark ? "text-white/55" : "text-[#181818]/55"
                )}
                style={{
                  transition: "color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                PRODUCTS INTO PROGRESS.
              </span>
            </h2>

            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span
                className={cn(
                  "font-[family-name:var(--font-manrope)] text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase",
                  isDark ? "text-white/50" : "text-[#181818]/50"
                )}
                style={{
                  transition: "color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                About WaltX
              </span>
            </div>

            <p
              className={cn(
                "font-[family-name:var(--font-inter)] text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.72] sm:leading-[1.78] max-w-[650px] w-full text-pretty",
                isDark ? "text-white/75" : "text-[#181818]/75"
              )}
              style={{
                transition: "color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              At WaltX, we build digital products designed to simplify experiences and create new opportunities. Through thoughtful engineering, innovative technology, and user-focused design, we transform ideas into scalable digital platforms. From discovery and lifestyle to events and premium booking experiences, our products connect people, businesses, and opportunities through technology. We are building a growing ecosystem of digital products with a vision to make everyday experiences smarter, simpler, and more connected.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
