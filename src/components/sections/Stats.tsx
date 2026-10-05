"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const STATS = [
  { label: "Products", value: "5+" },
  { label: "Team Members", value: "50+" },
  { label: "Global Clients", value: "10+" },
  { label: "Years of Innovation", value: "3+" },
];

export function Stats() {
  return (
    <section className="py-12 border-y border-border bg-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start md:pl-8 first:pl-0 text-center md:text-left"
            >
              <span className="text-4xl md:text-5xl font-semibold tracking-tight text-primary mb-2">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
