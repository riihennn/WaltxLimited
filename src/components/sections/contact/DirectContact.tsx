"use client";

import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export function DirectContact() {
  return (
    <section className="relative z-10 pt-10 pb-20 lg:pb-32 text-[#181818] overflow-hidden">
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
        >
          {/* Left: Label */}
          <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col gap-6">
            <span className="text-sm font-medium tracking-widest text-[#666664] uppercase">
              / DIRECT CONTACT /
            </span>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={fadeUp} className="lg:col-span-8 lg:col-start-5 flex flex-col gap-12 lg:gap-16">
            <a 
              href="mailto:info@waltx.ae" 
              className="text-[clamp(36px,4vw,60px)] tracking-tight font-medium hover:opacity-70 transition-opacity w-fit"
            >
              info@waltx.ae
            </a>
            
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 lg:gap-16">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-xl lg:text-2xl font-medium tracking-wide"
              >
                LinkedIn
                <ArrowUpRight className="w-6 h-6 text-[#666664] group-hover:text-[#181818] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-xl lg:text-2xl font-medium tracking-wide"
              >
                Instagram
                <ArrowUpRight className="w-6 h-6 text-[#666664] group-hover:text-[#181818] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
