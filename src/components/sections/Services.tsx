"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Code2, ShieldCheck } from "lucide-react";
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
    <section className="py-20 md:py-28 bg-transparent relative z-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Services & Audits */}
          <div
            className={cn(
              "group rounded-[2rem] p-8 sm:p-10 lg:p-12 border flex flex-col justify-between transition-all duration-500",
              isDark
                ? "bg-white/[0.04] border-white/10 hover:border-white/20"
                : "bg-white/80 border-black/8 shadow-sm hover:shadow-md"
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span
                  className={cn(
                    "text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500",
                    isDark ? "text-white/50" : "text-[#181818]/50"
                  )}
                >
                  01 / SERVICES & AUDITS
                </span>
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500",
                    isDark ? "bg-white/10 text-white" : "bg-[#F6F5F2] text-[#181818]"
                  )}
                >
                  <Code2 className="w-5 h-5" />
                </div>
              </div>

              <h2
                className={cn(
                  "text-[clamp(28px,3.2vw,44px)] font-bold tracking-tight leading-[1.1] mb-5 transition-colors duration-500",
                  isDark ? "text-white" : "text-[#181818]"
                )}
              >
                Have a website to build or improve?
              </h2>

              <p
                className={cn(
                  "text-[15px] md:text-base leading-relaxed font-medium mb-8 transition-colors duration-500",
                  isDark ? "text-white/70" : "text-[#181818]/70"
                )}
              >
                We offer website design, development and reviews of existing websites. Tell us what you need, and we&apos;ll discuss the scope with you.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Website Design", "Web Development", "Code & SEO Audits"].map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold border transition-colors duration-500",
                      isDark
                        ? "bg-white/[0.05] border-white/10 text-white/80"
                        : "bg-black/[0.03] border-black/8 text-[#181818]/80"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/services"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs md:text-sm font-semibold transition-all duration-300 w-max group-hover:scale-[1.02]",
                isDark
                  ? "bg-white text-[#181818] hover:bg-white/90"
                  : "bg-[#181818] text-white hover:bg-black"
              )}
            >
              View our services
              <ArrowRight className="w-4 h-4 opacity-70" />
            </Link>
          </div>

          {/* Card 2: Company & Licensing */}
          <div
            className={cn(
              "group rounded-[2rem] p-8 sm:p-10 lg:p-12 border flex flex-col justify-between transition-all duration-500",
              isDark
                ? "bg-white/[0.04] border-white/10 hover:border-white/20"
                : "bg-white/80 border-black/8 shadow-sm hover:shadow-md"
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span
                  className={cn(
                    "text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500",
                    isDark ? "text-white/50" : "text-[#181818]/50"
                  )}
                >
                  02 / VENTURE STUDIO
                </span>
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500",
                    isDark ? "bg-white/10 text-white" : "bg-[#F6F5F2] text-[#181818]"
                  )}
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>

              <h2
                className={cn(
                  "text-[clamp(28px,3.2vw,44px)] font-bold tracking-tight leading-[1.1] mb-5 transition-colors duration-500",
                  isDark ? "text-white" : "text-[#181818]"
                )}
              >
                Based in Abu Dhabi
              </h2>

              <p
                className={cn(
                  "text-[15px] md:text-base leading-relaxed font-medium mb-8 transition-colors duration-500",
                  isDark ? "text-white/70" : "text-[#181818]/70"
                )}
              >
                WaltX Limited is licensed by Masdar City Free Zone under Licence No. MC 14979. We design, build, and operate proprietary digital platforms across the UAE.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Masdar City Free Zone", "Licence No. MC 14979", "Proprietary Platforms"].map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold border transition-colors duration-500",
                      isDark
                        ? "bg-white/[0.05] border-white/10 text-white/80"
                        : "bg-black/[0.03] border-black/8 text-[#181818]/80"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs md:text-sm font-semibold transition-all duration-300 w-max group-hover:scale-[1.02]",
                isDark
                  ? "border border-white/20 text-white hover:bg-white/10"
                  : "border border-black/15 text-[#181818] hover:bg-black/5"
              )}
            >
              About WaltX
              <ArrowRight className="w-4 h-4 opacity-70" />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
