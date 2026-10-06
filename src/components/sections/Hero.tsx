"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Asterisk, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const TICKER_ITEMS = [
  "PRODUCT ENGINEERING", "*", 
  "CLOUD & INFRASTRUCTURE", "→", 
  "AI & AUTOMATION", "*", 
  "DIGITAL TRANSFORMATION", "→"
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-10 overflow-hidden bg-background">
      <Container>
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16 lg:mb-24">
          
          {/* Main Huge Typography */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <h1 className="text-[12vw] sm:text-[8vw] lg:text-[7vw] font-semibold tracking-tighter leading-[1.1] text-primary whitespace-nowrap">
                We build first
              </h1>
              <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 mt-2">
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
                
                <h1 className="text-[12vw] sm:text-[8vw] lg:text-[7vw] font-semibold tracking-tighter leading-[1.1] text-primary">
                  class tech
                </h1>

                {/* Circular Asterisk */}
                <div className="flex items-center justify-center bg-[#D8CDCA] text-primary rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ml-2 lg:ml-6 flex-shrink-0">
                  <Asterisk className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[30%] flex flex-col items-start lg:mb-4"
          >
            <p className="text-xs sm:text-sm text-secondary uppercase tracking-widest leading-relaxed mb-6 font-medium">
              WALTX IS A TECHNOLOGY COMPANY FOCUSING SOLELY ON DIGITAL PRODUCTS. WE HELP BUSINESSES ACHIEVE GOALS THROUGH TECHNOLOGY.
            </p>
            <Link 
              href="/products" 
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors"
            >
              <ArrowUpRight className="w-4 h-4 mr-2" /> Explore works
            </Link>
          </motion.div>
        </div>

        {/* Marquee Ticker */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full overflow-hidden border-y border-border/60 py-4 mb-16 flex items-center"
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 lg:gap-12 mr-6 lg:mr-12">
                {TICKER_ITEMS.map((item, index) => (
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

        {/* Main Image Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full relative h-[50vh] sm:h-[60vh] lg:h-[72vh] rounded-[2rem] sm:rounded-[3rem] border border-border/50 overflow-hidden group shadow-lg"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/waltx-image-1.jpeg" 
            alt="WaltX Platform Overview"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>
      </Container>

      {/* Marquee animation styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
      `}} />
    </section>
  );
}

