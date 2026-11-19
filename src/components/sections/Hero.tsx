"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
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
    <section className="relative pt-28 sm:pt-32 lg:pt-36 overflow-hidden bg-transparent">
      <Container>
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-14 lg:mb-20">
          
          {/* Main Huge Typography */}
          <div className="flex-1 w-full lg:w-2/3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="m-0 p-0 text-[clamp(29px,7.5vw,72px)] font-bold tracking-[-0.03em] leading-[1.08] sm:leading-[1] text-primary"
            >
              <span className="block">We build and run websites</span>
              <span className="inline-flex items-center gap-2 sm:gap-4 lg:gap-6 mt-1 sm:mt-2">
                {/* Custom curved arrow SVG */}
                <svg 
                  viewBox="0 0 100 50" 
                  className="w-9 h-4.5 sm:w-16 sm:h-8 lg:w-24 lg:h-12 text-secondary flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5,40 C5,40 10,10 30,10 C50,10 50,40 70,40 C85,40 95,25 95,25" />
                  <path d="M85,15 L95,25 L85,35" />
                </svg>
                
                <span>that help people</span>
              </span>{" "}
              <span className="inline sm:inline">discover the UAE.</span>
            </motion.h1>
          </div>

          {/* Right Side Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[35%] flex flex-col items-start lg:mb-4"
          >
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.18em] uppercase text-secondary mb-2.5 sm:mb-4">
              Abu Dhabi, United Arab Emirates
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] text-primary/80 font-medium leading-[1.55] sm:leading-[1.6] mb-6 sm:mb-8 max-w-[480px]">
              WaltX Limited is the company behind Habibi Guide, Dubai Brunches, Rave Dubai and Yacht Guide UAE. Our sites help people find places to visit, dining options, music events and yacht charters.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center rounded-full bg-[#181818] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-sm font-semibold hover:bg-black transition-colors shadow-sm whitespace-nowrap"
              >
                Explore our products
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-transparent text-[#181818] px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-sm font-semibold hover:bg-black/5 transition-colors whitespace-nowrap"
              >
                Discuss a project
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Marquee Ticker */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-[100vw] left-[50%] -ml-[50vw] lg:w-full lg:static lg:left-auto lg:ml-0 overflow-hidden border-y border-border/60 py-3 sm:py-4 flex items-center"
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
        className="w-full relative h-[38vh] sm:h-[50vh] lg:h-[72vh] overflow-hidden group bg-transparent"
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

