"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Asterisk, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Waves from "@/components/ui/Waves";

const TICKER_ITEMS = [
  "DIGITAL PRODUCTS", "*", 
  "PRODUCT ENGINEERING", "→", 
  "DIGITAL EXPERIENCES", "*", 
  "PLATFORMS & TECHNOLOGY", "→"
];

export function Hero() {
  return (
    <section className="relative pt-32 overflow-hidden bg-background">
      <Container>
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16 lg:mb-24">
          
          {/* Main Huge Typography */}
          <div className="flex-1 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col m-0 p-0"
            >
              <span className="text-[clamp(48px,6vw,88px)] font-bold tracking-tighter leading-[0.95] text-primary whitespace-nowrap">
                We build
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-8 mt-2">
                {/* Custom curved arrow SVG */}
                <svg 
                  viewBox="0 0 100 50" 
                  className="w-16 h-8 sm:w-24 sm:h-12 lg:w-32 lg:h-16 text-secondary" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5,40 C5,40 10,10 30,10 C50,10 50,40 70,40 C85,40 95,25 95,25" />
                  <path d="M85,15 L95,25 L85,35" />
                </svg>
                
                <span className="text-[clamp(48px,6vw,88px)] font-bold tracking-tighter leading-[0.95] text-primary">
                  what&apos;s next.
                </span>

                {/* Circular Asterisk */}
                <span className="flex items-center justify-center bg-[#D8CDCA] text-primary rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ml-2 lg:ml-6 flex-shrink-0">
                  <Asterisk className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14" strokeWidth={1.5} />
                </span>
              </div>
            </motion.h1>
          </div>

          {/* Right Side Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[30%] flex flex-col items-start lg:mb-4"
          >
            <p className="text-[12px] md:text-[14px] text-secondary font-bold uppercase tracking-[0.15em] leading-[1.6] mb-6">
              WaltX is a technology company building digital products, platforms, and experiences that connect people, businesses, and opportunities.
            </p>
            <Link 
              href="/products" 
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors"
            >
              Explore our work <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>

        {/* Marquee Ticker */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full overflow-hidden border-y border-border/60 py-4 flex items-center"
        >
          <div className="flex w-max shrink-0 whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, halfIndex) => (
              <div key={halfIndex} className="flex items-center gap-6 lg:gap-12 pr-6 lg:pr-12">
                {Array(8).fill(TICKER_ITEMS).flat().map((item, index) => (
                  <span 
                    key={index} 
                    className={`text-xs lg:text-sm font-semibold tracking-widest uppercase ${
                      item === "*" || item === "→" ? "text-secondary" : "text-secondary/70"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

      </Container>

      {/* Main Image Area - Edge to Edge */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full relative h-[50vh] sm:h-[60vh] lg:h-[72vh] overflow-hidden group bg-transparent"
        style={{
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
        }}
      >
        <Waves
          lineColor="#D8CDCA"
          backgroundColor="transparent"
          waveSpeedX={0.0125}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </motion.div>

      {/* Marquee animation styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 350s linear infinite;
          width: max-content;
        }
      `}} />
    </section>
  );
}

