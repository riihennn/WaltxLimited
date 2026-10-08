"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function GlobalCta() {
  return (
    <section className="bg-[#181818] text-[#F6F5F2] pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden rounded-t-[2.5rem] lg:rounded-t-[4rem]">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/5 to-transparent blur-[100px] pointer-events-none" />
      
      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl flex flex-col items-center"
        >
          <span className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] uppercase text-white/50 mb-8 block">
            / LET&apos;S COLLABORATE /
          </span>
          <h2 className="text-[clamp(48px,6vw,88px)] font-bold tracking-tighter text-white leading-[0.95] mb-8">
            Have a project in mind?<br /> Let&apos;s build what&apos;s next.
          </h2>
          <p className="text-[clamp(17px,1.2vw,21px)] text-white/70 font-medium leading-[1.6] max-w-[600px] mb-12">
            We are always looking for new challenges and interesting partners. Start a conversation with us today.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F6F5F2] text-[#181818] hover:bg-white text-[14px] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Start a project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
