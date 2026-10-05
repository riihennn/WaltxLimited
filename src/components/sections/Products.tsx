"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    name: "ProWell",
    description: "A comprehensive wellness and health tracking platform designed for modern professionals.",
    category: "HealthTech",
  },
  {
    name: "Rave Dubai",
    description: "Digital discovery platform connecting users with premium experiences and events.",
    category: "Lifestyle",
  },
  {
    name: "Fework",
    description: "Streamlined workspace management and operational efficiency tools for growing teams.",
    category: "SaaS / Operations",
  },
];

export function Products() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Our Products"
          title={
            <>
              Technology built<br />
              for real people.
            </>
          }
          className="mb-16 md:mb-24"
        />

        <div className="flex flex-col gap-8 md:gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row items-center gap-8 md:gap-16 p-6 md:p-12 rounded-3xl bg-background border border-border hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Content Side */}
              <div className="w-full md:w-1/2 flex flex-col items-start z-10">
                <span className="text-xs font-bold tracking-widest text-secondary uppercase mb-4 py-1 px-3 rounded-full border border-border">
                  {product.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-primary">
                  {product.name}
                </h3>
                <p className="text-lg text-secondary mb-8 leading-relaxed max-w-md">
                  {product.description}
                </p>
                <div className="flex items-center text-primary font-medium group-hover:text-secondary transition-colors">
                  View product <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Visual Side Placeholder */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent-light/50 to-white border border-border/50 flex items-center justify-center overflow-hidden relative">
                <motion.div 
                  className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"
                />
                <div className="w-2/3 h-2/3 rounded-xl bg-white shadow-sm border border-border/50 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                  <span className="text-secondary/50 font-medium">Product Visual</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
