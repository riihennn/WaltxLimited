"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function Intro() {
  return (
    <section className="bg-[#F6F5F2] relative z-10 overflow-hidden text-[#181818]">
      <Container>
        <div className="py-[100px] lg:py-[160px] min-h-[80vh] flex flex-col justify-center border-t border-b border-[#DFDEDA] my-4">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
          >
            
            {/* Left: Label */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <span className="text-sm font-medium tracking-widest text-[#666664] uppercase">
                / WALTX /
              </span>
            </motion.div>

            {/* Center: Huge Heading */}
            <motion.div className="lg:col-span-6 flex flex-col gap-2">
              <div className="overflow-hidden">
                <motion.h2 
                  variants={fadeUp}
                  className="text-4xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tight text-[#181818] leading-[1.1]"
                >
                  Building digital
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2 
                  variants={fadeUp}
                  className="text-4xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tight text-[#181818] leading-[1.1]"
                >
                  products for
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2 
                  variants={fadeUp}
                  className="text-4xl sm:text-5xl lg:text-[4.5rem] font-medium tracking-tight text-[#181818] leading-[1.1]"
                >
                  what's next.
                </motion.h2>
              </div>
            </motion.div>

            {/* Right: Content & CTA */}
            <motion.div 
              variants={fadeUp}
              className="lg:col-span-4 lg:pl-8 flex flex-col gap-8 lg:mt-2"
            >
              <p className="text-lg lg:text-xl text-[#666664] leading-relaxed font-light">
                WaltX is a technology company building digital products, platforms and experiences that help businesses move forward.
              </p>
              
              <motion.div variants={fadeUp}>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-[#181818] text-base font-medium hover:text-[#B8AEB2] transition-colors group"
                >
                  Explore WaltX
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}
