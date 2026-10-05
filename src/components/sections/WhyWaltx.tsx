"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const PRINCIPLES = [
  { title: "Built for Scale", description: "Architecture designed to handle growth seamlessly." },
  { title: "Designed for People", description: "User experiences that feel natural and intuitive." },
  { title: "Modern by Default", description: "Leveraging the best of modern technology stacks." },
  { title: "Built to Evolve", description: "Flexible foundations that adapt to changing needs." },
];

export function WhyWaltx() {
  return (
    <section className="py-24 md:py-32 bg-white border-y border-border">
      <Container>
        <div className="text-center mb-16 md:mb-24">
          <span className="text-sm font-semibold tracking-wider text-secondary uppercase mb-4 block">
            Why WaltX
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary max-w-3xl mx-auto">
            Principles that guide<br />our engineering.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pt-8 sm:pt-0 sm:px-8 first:pt-0 first:px-0 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="text-4xl font-light text-accent-primary mb-6 block">0{index + 1}</span>
              <h3 className="text-xl font-semibold mb-3 text-primary">{principle.title}</h3>
              <p className="text-secondary leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
