"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export function ContactHero() {
  return (
    <section className="bg-white relative z-10 pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden text-[#181818]">
      <Container>
        <motion.div 
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
        >
          {/* Left: Label */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <span className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#666664] uppercase">
              / Contact /
            </span>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={fadeUp} className="lg:col-span-8 lg:col-start-4 flex flex-col gap-8">
            <h1 className="text-[clamp(48px,6vw,88px)] leading-[0.95] tracking-tighter font-bold text-[#181818]">
              Thank you for your interest in WaltX.
            </h1>
            
            <p className="text-[clamp(24px,2.2vw,36px)] text-[#666664] font-medium leading-[1.3] max-w-[750px]">
              It doesn&apos;t matter if you are a job seeker, a client, or someone to share an idea. The best way to reach us is just below here.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
