"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  tags: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-solutions",
    num: "01",
    title: "AI SOLUTIONS",
    description:
      "Intelligent applications, AI-powered assistants and automation solutions designed to transform business operations.",
    tags: ["AI Integration", "Intelligent Automation"],
  },
  {
    id: "saas-development",
    num: "02",
    title: "SAAS DEVELOPMENT",
    description:
      "Scalable cloud-based software platforms designed to support modern businesses and growing digital ecosystems.",
    tags: ["SaaS Platforms", "Cloud-Native Systems"],
  },
  {
    id: "custom-software",
    num: "03",
    title: "CUSTOM SOFTWARE",
    description:
      "Tailored software solutions engineered around unique business requirements, workflows and operational needs.",
    tags: ["Custom Applications", "Backend Engineering"],
  },
  {
    id: "website-development",
    num: "04",
    title: "WEB DEVELOPMENT",
    description:
      "High-performance, responsive websites and modern web applications that deliver exceptional digital experiences.",
    tags: ["Corporate Websites", "Web Applications"],
  },
  {
    id: "mobile-app-development",
    num: "05",
    title: "MOBILE APP DEVELOPMENT",
    description:
      "Intuitive mobile applications designed to connect people, simplify experiences and support businesses on the move.",
    tags: ["iOS", "Android", "Cross-Platform"],
  },
  {
    id: "erp-business-solutions",
    num: "06",
    title: "ERP & BUSINESS SOLUTIONS",
    description:
      "Integrated business management systems that streamline operations, workflows and organizational processes.",
    tags: ["ERP Systems", "Business Automation"],
  },
  {
    id: "cloud-devops",
    num: "07",
    title: "CLOUD & DEVOPS",
    description:
      "Reliable cloud infrastructure and deployment solutions built for performance, scalability and operational efficiency.",
    tags: ["AWS", "CI/CD", "Cloud Infrastructure"],
  },
  {
    id: "seo-digital-growth",
    num: "08",
    title: "SEO & DIGITAL GROWTH",
    description:
      "Technical optimization and search visibility strategies that help digital platforms reach the right audience.",
    tags: ["Technical SEO", "Search Visibility"],
  },
];

/* -------------------------------------------------------------------------- */
/*         Bespoke Vector Icons (Adaptive Light & Dark Theme)                 */
/* -------------------------------------------------------------------------- */

function ServiceIcon({ index, isDark }: { index: number; isDark: boolean }) {
  const stroke = isDark ? "#FFFFFF" : "#181818";
  const fill = isDark ? "#FFFFFF" : "#181818";
  const shapeBg = isDark ? "#111318" : "#FFFFFF";

  switch (index) {
    case 0:
      // AI Solutions: Radiant Lightbulb with Neural Core
      return (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="27" r="14" stroke={stroke} strokeWidth="2" strokeDasharray="3 3" />
          <path
            d="M24 35C24.8 38 27.5 41 27.5 44H36.5C36.5 41 39.2 38 40 35"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path d="M28 48H36" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M30 52H34" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          {/* Glowing Neural Filament Center */}
          <circle cx="32" cy="27" r="4.5" fill={fill} />
          <line x1="32" y1="22.5" x2="32" y2="17" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          {/* Radiant Beams */}
          <line x1="32" y1="6" x2="32" y2="10" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <line x1="16" y1="12" x2="19" y2="15" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <line x1="48" y1="12" x2="45" y2="15" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <line x1="9" y1="27" x2="13" y2="27" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <line x1="55" y1="27" x2="51" y2="27" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case 1:
      // SaaS Development: 3D Isometric Stacked Layers
      return (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
          <path
            d="M32 10L52 20L32 30L12 20L32 10Z"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="20" r="3" fill={fill} />
          <path
            d="M12 28L32 38L52 28"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 36L32 46L52 36"
            stroke={stroke}
            strokeWidth="2.2"
            strokeOpacity="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 44L32 54L52 44"
            stroke={stroke}
            strokeWidth="2"
            strokeOpacity="0.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 2:
      // Custom Software: Vector Bezier & Code Brackets
      return (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
          <path
            d="M14 42C14 26 50 48 50 22"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <line x1="14" y1="42" x2="14" y2="28" stroke={stroke} strokeWidth="1.8" strokeDasharray="2 2" strokeOpacity="0.6" />
          <line x1="50" y1="22" x2="50" y2="36" stroke={stroke} strokeWidth="1.8" strokeDasharray="2 2" strokeOpacity="0.6" />
          <rect x="10" y="38" width="8" height="8" rx="1.5" fill={shapeBg} stroke={stroke} strokeWidth="2" />
          <rect x="46" y="18" width="8" height="8" rx="1.5" fill={shapeBg} stroke={stroke} strokeWidth="2" />
          <circle cx="14" cy="28" r="3.5" fill={fill} />
          <circle cx="50" cy="36" r="3.5" fill={fill} />
          <path d="M28 28L24 32L28 36" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36 28L40 32L36 36" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 3:
      // Web Development: Minimalist Browser with Crosshair & Wireframe
      return (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
          <rect x="10" y="14" width="44" height="36" rx="4" stroke={stroke} strokeWidth="2.2" />
          <line x1="10" y1="24" x2="54" y2="24" stroke={stroke} strokeWidth="2" />
          <circle cx="17" cy="19" r="1.8" fill={fill} />
          <circle cx="23" cy="19" r="1.8" fill={fill} fillOpacity="0.4" />
          <circle cx="29" cy="19" r="1.8" fill={fill} fillOpacity="0.4" />
          <rect x="16" y="30" width="14" height="14" rx="2" stroke={stroke} strokeWidth="1.8" />
          <line x1="36" y1="32" x2="48" y2="32" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <line x1="36" y1="38" x2="46" y2="38" stroke={stroke} strokeOpacity="0.5" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="36" y1="44" x2="43" y2="44" stroke={stroke} strokeOpacity="0.5" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 4:
      // Mobile App Development: Floating Smartphone with Touch Wave Rings
      return (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
          <rect x="20" y="10" width="24" height="44" rx="6" stroke={stroke} strokeWidth="2.2" />
          <line x1="28" y1="15" x2="36" y2="15" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="48" r="2" fill={fill} />
          <circle cx="32" cy="30" r="5" stroke={stroke} strokeWidth="2" />
          <circle cx="32" cy="30" r="10" stroke={stroke} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="12" y1="30" x2="8" y2="30" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <line x1="52" y1="30" x2="56" y2="30" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 5:
      // ERP & Business Solutions: Interconnected Hexagonal Business Network
      return (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="6" stroke={stroke} strokeWidth="2.2" fill={shapeBg} />
          <circle cx="32" cy="32" r="2.5" fill={fill} />
          <circle cx="32" cy="12" r="4.5" stroke={stroke} strokeWidth="2" fill={shapeBg} />
          <circle cx="50" cy="22" r="4.5" stroke={stroke} strokeWidth="2" fill={shapeBg} />
          <circle cx="50" cy="42" r="4.5" stroke={stroke} strokeWidth="2" fill={shapeBg} />
          <circle cx="32" cy="52" r="4.5" stroke={stroke} strokeWidth="2" fill={shapeBg} />
          <circle cx="14" cy="42" r="4.5" stroke={stroke} strokeWidth="2" fill={shapeBg} />
          <circle cx="14" cy="22" r="4.5" stroke={stroke} strokeWidth="2" fill={shapeBg} />
          <line x1="32" y1="16.5" x2="32" y2="26" stroke={stroke} strokeWidth="1.8" strokeOpacity="0.6" />
          <line x1="46" y1="24.5" x2="37" y2="29.5" stroke={stroke} strokeWidth="1.8" strokeOpacity="0.6" />
          <line x1="46" y1="39.5" x2="37" y2="34.5" stroke={stroke} strokeWidth="1.8" strokeOpacity="0.6" />
          <line x1="32" y1="47.5" x2="32" y2="38" stroke={stroke} strokeWidth="1.8" strokeOpacity="0.6" />
          <line x1="18" y1="39.5" x2="27" y2="34.5" stroke={stroke} strokeWidth="1.8" strokeOpacity="0.6" />
          <line x1="18" y1="24.5" x2="27" y2="29.5" stroke={stroke} strokeWidth="1.8" strokeOpacity="0.6" />
        </svg>
      );

    case 6:
      // Cloud & DevOps: Infinite Sync Loop with Cloud Mesh
      return (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
          <path
            d="M20 40H45C49.4 40 53 36.4 53 32C53 27.9 49.9 24.5 45.9 24.1C45.3 17.3 39.5 12 32.5 12C26.5 12 21.4 16 19.6 21.6C15.3 22.3 12 26 12 30.5C12 35.7 15.6 40 20 40Z"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M24 48H40M40 48L35 44M40 48L35 52"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 56H24M24 56L29 52M24 56L29 60"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32.5" cy="26" r="3" fill={fill} />
        </svg>
      );

    case 7:
    default:
      // SEO & Digital Growth: Ascending Parabolic Arrow & Target Radar
      return (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
          <path d="M12 50H52" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M12 50V14" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
          <path
            d="M12 44Q24 40 32 30T50 14"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M42 14H50V22"
            stroke={stroke}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="22" cy="42" r="3" fill={shapeBg} stroke={stroke} strokeWidth="2" />
          <circle cx="32" cy="30" r="3" fill={shapeBg} stroke={stroke} strokeWidth="2" />
          <circle cx="42" cy="20" r="3.5" fill={fill} />
        </svg>
      );
  }
}

/* -------------------------------------------------------------------------- */
/*      Services 2x4 Card Grid (Adapts to Light & Dark Theme)                 */
/* -------------------------------------------------------------------------- */

interface ServicesGalleryProps {
  className?: string;
  showIntro?: boolean;
  adaptiveTheme?: boolean;
}

export function ServicesGallery({
  className,
  showIntro = true,
  adaptiveTheme = true,
}: ServicesGalleryProps = {}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (!adaptiveTheme) return;

    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ isDark: boolean }>;
      setIsDark(!!custom.detail?.isDark);
    };
    window.addEventListener("waltx-theme-change", handler);
    return () => window.removeEventListener("waltx-theme-change", handler);
  }, [adaptiveTheme]);

  return (
    <section
      id="services-gallery"
      className={cn("relative bg-transparent overflow-hidden", className || "py-20 md:py-32")}
    >
      <Container className="relative z-10 w-full">
        {/* =================================================================== */}
        {/* Section Introduction                                               */}
        {/* =================================================================== */}
        {showIntro && (
          <SectionReveal className="mb-14 md:mb-20 text-center flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-colors duration-700",
                  isDark ? "bg-[#9CD9F9]" : "bg-[#181818]"
                )}
              />
              <span
                className={cn(
                  "text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase font-mono transition-colors duration-700",
                  isDark ? "text-white/50" : "text-[#181818]/50"
                )}
              >
                OUR EXPERTISE / 08 SERVICES
              </span>
            </div>

            <h2
              className={cn(
                "font-[family-name:var(--font-manrope)] text-[clamp(32px,3.8vw,56px)] font-bold tracking-[-0.02em] leading-[1.1] mb-6 max-w-3xl transition-colors duration-700",
                isDark ? "text-white" : "text-[#181818]"
              )}
            >
              Technology that transforms possibilities into reality.
            </h2>

            <p
              className={cn(
                "font-[family-name:var(--font-inter)] text-[15px] md:text-[17px] leading-relaxed max-w-2xl transition-colors duration-700",
                isDark ? "text-white/70" : "text-[#181818]/70"
              )}
            >
              From intelligent software to scalable digital platforms, we combine innovation, engineering and creativity to build technology that moves businesses forward.
            </p>
          </SectionReveal>
        )}

        {/* =================================================================== */}
        {/* 2 x 4 Grid of Service Cards                                        */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => {
            return (
              <div
                key={service.id}
                className={cn(
                  "group relative p-7 lg:p-8 flex flex-col justify-between items-center text-center",
                  "rounded-2xl md:rounded-3xl transition-all duration-500 hover:-translate-y-1",
                  isDark
                    ? "bg-[#111318] border border-white/[0.08] hover:border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.65)]"
                    : "bg-white border border-black/[0.08] hover:border-black/30 shadow-sm hover:shadow-[0_16px_35px_rgba(0,0,0,0.06)]"
                )}
              >
                {/* Top Subtle Hover Accent Bar */}
                <div
                  className={cn(
                    "absolute top-0 left-8 right-8 h-[2px] bg-transparent transition-colors duration-300 rounded-full",
                    isDark ? "group-hover:bg-[#9CD9F9]" : "group-hover:bg-[#181818]"
                  )}
                />

                <div className="w-full flex flex-col items-center">
                  {/* Vector Icon Box */}
                  <div
                    className={cn(
                      "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500",
                      isDark
                        ? "bg-white/[0.04] border border-white/[0.08] group-hover:bg-white/[0.08] group-hover:border-white/20 text-white"
                        : "bg-[#F6F5F2] border border-black/[0.06] group-hover:bg-[#181818]/5 group-hover:border-black/20 text-[#181818]"
                    )}
                  >
                    <ServiceIcon index={index} isDark={isDark} />
                  </div>

                  {/* Service Number Tag */}
                  <span
                    className={cn(
                      "text-[11px] font-mono font-bold tracking-[0.2em] uppercase mb-2 transition-colors duration-700",
                      isDark ? "text-white/40" : "text-[#181818]/50"
                    )}
                  >
                    SERVICE ({service.num})
                  </span>

                  {/* Service Title */}
                  <h3
                    className={cn(
                      "font-[family-name:var(--font-manrope)] font-bold text-[18px] md:text-[19px] tracking-[0.06em] uppercase mb-3 leading-snug transition-colors duration-700",
                      isDark ? "text-white" : "text-[#181818]"
                    )}
                  >
                    {service.title}
                  </h3>

                  {/* Content Description */}
                  <p
                    className={cn(
                      "font-[family-name:var(--font-inter)] text-[13.5px] leading-relaxed mb-6 transition-colors duration-700",
                      isDark ? "text-white/65" : "text-[#181818]/70"
                    )}
                  >
                    {service.description}
                  </p>
                </div>

                <div
                  className={cn(
                    "w-full flex flex-col items-center pt-4 border-t transition-colors duration-700",
                    isDark ? "border-white/[0.08]" : "border-black/[0.06]"
                  )}
                >
                  {/* Tag Pills */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "px-2.5 py-1 rounded-full text-[10.5px] font-medium border transition-colors duration-500",
                          isDark
                            ? "bg-white/[0.05] border-white/[0.08] text-white/75 group-hover:border-white/20 group-hover:text-white"
                            : "bg-[#181818]/[0.04] border-black/[0.06] text-[#181818]/75 group-hover:border-black/20 group-hover:text-[#181818]"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Explore Link */}
                  <Link
                    href="/contact"
                    className={cn(
                      "inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase transition-colors duration-500 group/cta",
                      isDark
                        ? "text-white/85 hover:text-[#9CD9F9]"
                        : "text-[#181818] hover:text-black"
                    )}
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover/cta:opacity-100 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-all" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
