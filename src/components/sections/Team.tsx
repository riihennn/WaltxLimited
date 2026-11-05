"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";

export function Team() {
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
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-transparent relative z-10">
      <Container>
        <StaggerContainer
          className={cn(
            "flex flex-col lg:flex-row justify-between items-start gap-12 pt-12 md:pt-16 border-t",
            isDark ? "border-white/10" : "border-black/5"
          )}
          style={{
            transition: "border-color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
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
              Based in Abu Dhabi
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
                WaltX Limited is licensed by Masdar City Free Zone under Licence No. MC 14979.
              </p>
            </StaggerItem>
            <StaggerItem>
              <Link 
                href="/about" 
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium",
                  isDark
                    ? "border border-white/20 bg-transparent text-white hover:bg-white/10"
                    : "border border-black/10 bg-transparent text-[#181818] hover:bg-black/5"
                )}
                style={{
                  transition: "border-color 850ms cubic-bezier(0.4, 0, 0.2, 1), color 850ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                About WaltX
              </Link>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </Container>
    </section>
  );
}
