"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

export function Services() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ isDark: boolean }>;
      setIsDark(!!custom.detail?.isDark);
    };
    window.addEventListener("waltx-theme-change", handler);
    return () => window.removeEventListener("waltx-theme-change", handler);
  }, []);

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-transparent relative z-10">
      <Container>
        <StaggerContainer className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <StaggerItem className="w-full lg:w-1/2">
            <h2
              className={cn(
                "text-[clamp(36px,4.5vw,60px)] font-bold tracking-tight leading-[1.05]",
                isDark ? "text-white" : "text-[#181818]"
              )}
              style={{
                transition: "color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              Have a website to build or improve?
            </h2>
          </StaggerItem>
          <div className="w-full lg:w-1/3 flex flex-col items-start gap-8">
            <StaggerItem>
              <p
                className={cn(
                  "text-[clamp(17px,1.2vw,21px)] leading-[1.6] font-medium",
                  isDark ? "text-white/70" : "text-[#181818]/70"
                )}
                style={{
                  transition: "color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                We offer website design, development and reviews of existing websites. Tell us what you need, and we&apos;ll discuss the scope with you.
              </p>
            </StaggerItem>
            <StaggerItem>
              <Link 
                href="/services" 
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium",
                  isDark
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-[#181818] text-white hover:bg-black"
                )}
                style={{
                  transition: "background-color 850ms cubic-bezier(0.4, 0, 0.2, 1), color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                View our services
              </Link>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </Container>
    </section>
  );
}
