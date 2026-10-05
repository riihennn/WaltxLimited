"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="bg-dark text-white py-32 md:py-48 relative overflow-hidden">
      {/* Subtle mauve visual decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[1.05] mb-10"
          >
            Have an idea?<br />
            Let's build it.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button className="bg-white text-dark hover:bg-white/90 h-14 px-8 text-lg">
              Let's talk &rarr;
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
