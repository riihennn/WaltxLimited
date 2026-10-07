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

export function ContactFinalCta() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-10 pt-10 pb-32 lg:pb-40 text-[#181818] overflow-hidden">
      <Container>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start border-t border-[#DFDEDA] pt-20"
        >
          {/* Left: Label */}
          <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col gap-6">
            <span className="text-sm font-medium tracking-widest text-[#666664] uppercase">
              / WHAT'S NEXT /
            </span>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={fadeUp} className="lg:col-span-8 lg:col-start-5 flex flex-col gap-8">
            <h2 className="text-5xl sm:text-6xl lg:text-[7rem] leading-[1] tracking-[-0.04em] font-medium">
              Have something in mind?
            </h2>
            <p className="text-xl lg:text-3xl text-[#666664] font-light max-w-2xl mt-4">
              Let's turn the idea into something real.
            </p>
            <div className="mt-8">
              <button 
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 text-2xl lg:text-3xl font-medium tracking-tight hover:opacity-70 transition-opacity"
              >
                Let's talk
                <ArrowUpRight className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
