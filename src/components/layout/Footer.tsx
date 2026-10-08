"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative">
          <div className="col-span-1 md:col-span-2 flex flex-col items-start">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6">
              WALTX
            </Link>
            <p className="text-secondary max-w-sm">
              Building digital products, platforms and experiences for a changing world.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-primary">Navigation</h4>
            <Link href="/about" className="text-secondary hover:text-primary transition-colors">About</Link>
            <Link href="/products" className="text-secondary hover:text-primary transition-colors">Products</Link>
            <Link href="/technology" className="text-secondary hover:text-primary transition-colors">Technology</Link>
            <Link href="/careers" className="text-secondary hover:text-primary transition-colors">Careers</Link>
            <Link href="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-primary">Connect</h4>
            <a href="#" className="text-secondary hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-secondary hover:text-primary transition-colors">Instagram</a>
          </div>
          
          {/* Normal Scroll to top button */}
          <div className="absolute top-0 right-0 hidden md:block">
            <button
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full bg-[#181818] text-white flex items-center justify-center hover:bg-black hover:-translate-y-1 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-sm text-secondary">
            &copy; 2026 WaltX Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="md:hidden">
               <button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full bg-[#181818] text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
            <Link href="/privacy" className="text-sm text-secondary hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm text-secondary hover:text-primary transition-colors">Terms</Link>
            <Link href="/cookie" className="text-sm text-secondary hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
