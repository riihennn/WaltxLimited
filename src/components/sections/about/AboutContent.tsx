"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Compass, 
  Code2, 
  Building2,
  Mail,
  MapPin,
  FileCheck
} from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: "01",
    name: "Rave Dubai",
    category: "Events & Nightlife",
    tagline: "A digital platform built around Dubai's nightlife and electronic music ecosystem.",
    bg: "#D6E0E5",
    link: "https://ravedubai.com",
    internalLink: "/products",
  },
  {
    id: "02",
    name: "Dubai Brunches",
    category: "Dining & Hospitality",
    tagline: "The premier digital destination built around Dubai's brunch culture and venues.",
    bg: "#EAE0D3",
    link: "https://dubaibrunches.com",
    internalLink: "/products",
  },
  {
    id: "03",
    name: "Habibi Guide",
    category: "Travel & Lifestyle",
    tagline: "A comprehensive guide designed around discovering places, dining, and neighborhoods in Dubai.",
    bg: "#D5E4DB",
    link: "https://habibiguide.com",
    internalLink: "/products",
  },
  {
    id: "04",
    name: "Yacht Guide UAE",
    category: "Marine & Experiences",
    tagline: "A premium digital destination for discovering yacht experiences and charters across the UAE.",
    bg: "#D8E8F5",
    link: "https://yachtguideuae.com",
    internalLink: "/products",
  },
];

const pillars = [
  {
    number: "01",
    title: "Proprietary Products",
    subtitle: "End-to-End Ownership",
    description:
      "We conceive, design, code, and actively operate our own digital platforms. Every product in our ecosystem is built with direct market feedback and long-term viability in mind.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Active Stewardship",
    subtitle: "Beyond the Launch",
    description:
      "A digital platform is never finished at launch. We continuously curate content, optimize search discovery (SEO), monitor performance, and refine UX to keep our sites fast and dependable.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Client Collaborations",
    subtitle: "Engineering & Advisory",
    description:
      "We partner with businesses to design and develop custom web platforms, modern digital experiences, and conduct deep technical audits of existing websites.",
    icon: Code2,
  },
];

const stats = [
  { value: "04", label: "Proprietary Platforms", sublabel: "Events, dining, travel & yachts" },
  { value: "Abu Dhabi", label: "Masdar City Free Zone", sublabel: "Licence No. MC 14979" },
  { value: "100%", label: "In-House Engineering", sublabel: "Design, code & infrastructure" },
  { value: "24/7", label: "Active Operations", sublabel: "Continuous maintenance & updates" },
];

export function AboutContent() {
  return (
    <div className="bg-[#F6F5F2] text-[#181818] overflow-hidden">
      
      {/* ── 1. HERO SECTION ─────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 sm:pb-20 md:min-h-[100dvh] md:flex md:flex-col md:justify-between md:pt-24 md:pb-28 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-black/5 to-transparent rounded-full blur-[100px] opacity-70 pointer-events-none mix-blend-multiply" />

        <Container className="relative z-10 flex flex-col justify-between flex-grow w-full">
          <div className="max-w-5xl md:my-auto pt-2 md:pt-4">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 mb-3.5 sm:mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#181818]" />
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#181818]/60">
                01 — ABOUT WALTX · ABU DHABI, UAE
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(30px,7vw,58px)] font-bold tracking-tight text-[#181818] leading-[1.08] sm:leading-[1.05] mb-4 sm:mb-5"
            >
              The company behind four UAE discovery websites.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] sm:text-[16px] md:text-[18px] text-[#181818]/75 font-medium leading-[1.6] max-w-2xl mb-7 sm:mb-8"
            >
              WaltX Limited is a technology venture studio based in Masdar City, Abu Dhabi. 
              We build, launch, and operate digital products that connect people with places, dining, 
              nightlife, and marine experiences across the United Arab Emirates.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-0"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#181818] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-sm font-semibold hover:bg-black transition-all hover:scale-[1.02]"
              >
                Explore our products
                <ArrowRight className="w-3.5 h-3.5 opacity-75" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-transparent text-[#181818] px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-sm font-semibold hover:bg-black/5 transition-all"
              >
                Work with us
              </Link>
            </motion.div>
          </div>

          {/* Key Metrics / Studio Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl pt-6 sm:pt-7 md:pt-6 border-t border-black/10 mt-2 sm:mt-4 md:mt-6 mb-4 md:mb-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[22px] sm:text-[24px] md:text-[28px] font-bold tracking-tight text-[#181818] leading-none mb-1.5">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-[#181818]/85 mb-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#181818]/50 font-medium leading-tight">
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </Container>
      </section>

      {/* ── 2. WHAT WE DO: THE THREE STUDIO PILLARS ───────────────────────── */}
      <section className="py-20 md:py-28 border-t border-black/10">
        <Container>
          <div className="flex flex-col mb-14">
            <span className="text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase text-[#181818]/50 mb-3">
              02 — HOW WE OPERATE
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-[clamp(32px,3.8vw,52px)] font-bold tracking-tight text-[#181818] leading-[1.1] max-w-2xl">
                A modern venture model built on true product ownership.
              </h2>
              <p className="text-sm md:text-base text-[#181818]/65 font-medium max-w-md leading-relaxed">
                We combine the technical speed of a software studio with the long-term commitment of an operating company.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="bg-white/80 rounded-[1.75rem] p-8 md:p-9 border border-black/8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-bold tracking-widest uppercase text-[#181818]/40">
                        {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#F6F5F2] flex items-center justify-center text-[#181818]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase text-[#181818]/50 block mb-2">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[#181818] mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-[#181818]/70 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 3. OUR PRODUCT ECOSYSTEM ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-black/10 bg-[#EFECE6]/40">
        <Container>
          <div className="flex flex-col mb-14">
            <span className="text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase text-[#181818]/50 mb-3">
              03 — OUR PORTFOLIO
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-[clamp(32px,3.8vw,52px)] font-bold tracking-tight text-[#181818] leading-[1.1] max-w-2xl">
                Four digital platforms shaping UAE discovery.
              </h2>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider uppercase text-[#181818] hover:opacity-70 transition-opacity"
              >
                View detailed case studies <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {products.map((p) => (
              <div
                key={p.id}
                style={{ backgroundColor: p.bg }}
                className="rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-sm flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#181818]/50">
                      {p.id} — {p.category}
                    </span>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-[#181818] transition-colors shadow-sm"
                      title={`Visit ${p.name}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#181818] mb-4 uppercase">
                    {p.name}
                  </h3>
                  <p className="text-[15px] md:text-base text-[#181818]/75 leading-relaxed font-medium mb-8">
                    {p.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[#181818]/10">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm font-bold tracking-wide uppercase text-[#181818] flex items-center gap-1.5 hover:underline"
                  >
                    Visit {p.name} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href={p.internalLink}
                    className="text-xs font-semibold text-[#181818]/60 hover:text-[#181818] transition-colors"
                  >
                    Product specs →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. PHILOSOPHY: WHY WE BUILD OUR OWN ──────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-black/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 flex flex-col">
              <span className="text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase text-[#181818]/50 mb-4">
                04 — OUR PHILOSOPHY
              </span>
              <h2 className="text-[clamp(32px,3.8vw,52px)] font-bold tracking-tight text-[#181818] leading-[1.08] mb-6">
                Why we build our own products.
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#181818]/75 font-medium leading-relaxed mb-6">
                Running our own live web properties teaches us lessons no traditional agency gets to see. 
                When you own the product, the real work doesn&apos;t end at launch—it begins.
              </p>
              <div className="p-6 rounded-2xl bg-[#EBE8E1] border border-black/5">
                <blockquote className="text-sm md:text-[15px] text-[#181818]/85 font-medium italic leading-relaxed">
                  &ldquo;We don&apos;t just build websites for clients and walk away. We live with our code, 
                  answer to our users daily, and refine the experience every single week.&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              
              <div className="bg-white rounded-2xl p-7 border border-black/8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#F6F5F2] flex items-center justify-center text-[#181818]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold text-[#181818]">Always-Fresh Content & Data</h4>
                </div>
                <p className="text-sm md:text-[15px] text-[#181818]/70 leading-relaxed font-medium">
                  Discovery platforms require live, accurate, verified venue information. We maintain continuous 
                  editorial pipelines across Dubai nightlife, dining, and yachting so visitors can always rely on what they find.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-black/8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#F6F5F2] flex items-center justify-center text-[#181818]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold text-[#181818]">Frictionless Visitor Journeys</h4>
                </div>
                <p className="text-sm md:text-[15px] text-[#181818]/70 leading-relaxed font-medium">
                  We build for user intent: whether that&apos;s exploring weekend brunch prices, discovering an electronic music 
                  event lineup, or reserving a yacht charter. We eliminate clutter so users can act quickly.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-black/8 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#F6F5F2] flex items-center justify-center text-[#181818]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold text-[#181818]">Performance-First Engineering</h4>
                </div>
                <p className="text-sm md:text-[15px] text-[#181818]/70 leading-relaxed font-medium">
                  Modern search engines and mobile visitors demand sub-second load times. We engineer our sites with Next.js, 
                  optimized edge delivery, clean semantic schemas, and zero third-party bloat.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ── 5. CORPORATE CREDENTIALS & GOVERNANCE ────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-black/10">
        <Container>
          <div className="bg-[#181818] text-[#F6F5F2] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-white/5 to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              <div className="lg:col-span-6 flex flex-col">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold tracking-wider uppercase w-max mb-6">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Official Corporate Entity
                </div>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                  WaltX Limited
                </h3>
                <p className="text-[15px] md:text-base text-white/70 leading-relaxed font-medium mb-8 max-w-xl">
                  WaltX Limited is an incorporated limited liability company registered and licensed by the 
                  Masdar City Free Zone Authority in Abu Dhabi, United Arab Emirates.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#F6F5F2] text-[#181818] hover:bg-white text-xs md:text-sm font-bold px-6 py-3.5 rounded-full transition-all"
                  >
                    Contact corporate office
                  </Link>
                  <a
                    href="mailto:operations@waltx.ae"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 text-xs md:text-sm font-semibold px-6 py-3.5 rounded-full transition-all"
                  >
                    <Mail className="w-4 h-4 opacity-70" />
                    operations@waltx.ae
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/[0.04] p-6 sm:p-8 rounded-2xl border border-white/10">
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-wider mb-2">
                    <FileCheck className="w-4 h-4 text-white/70" />
                    Commercial Licence
                  </div>
                  <span className="text-base font-bold text-white mb-1">
                    Licence No. MC 14979
                  </span>
                  <span className="text-xs text-white/50 leading-relaxed font-medium">
                    Masdar City Free Zone, Abu Dhabi
                  </span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-wider mb-2">
                    <Building2 className="w-4 h-4 text-white/70" />
                    Entity Structure
                  </div>
                  <span className="text-base font-bold text-white mb-1">
                    Limited Liability Company
                  </span>
                  <span className="text-xs text-white/50 leading-relaxed font-medium">
                    Commercial & Digital Technology
                  </span>
                </div>

                <div className="sm:col-span-2 flex flex-col pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-wider mb-2">
                    <MapPin className="w-4 h-4 text-white/70" />
                    Registered Office Address
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                    FD – First Floor, Incubator Building, Masdar City,<br />
                    Abu Dhabi, United Arab Emirates
                  </p>
                </div>

              </div>

            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
