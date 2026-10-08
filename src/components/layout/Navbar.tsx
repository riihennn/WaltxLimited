"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              WALTX
            </Link>
          </div>

          {/* Center: Removed navigation links */}
          <div className="hidden md:flex justify-center flex-1 items-center gap-8">
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-6">

            <Link href="/contact">
              <Button variant="primary" className="rounded-full bg-[#222] hover:bg-black text-white px-6">
                <ArrowUpRight className="w-4 h-4 mr-2 text-white/50" /> Let&apos;s connect
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border px-4 py-6 flex flex-col gap-4 shadow-lg">
            <Link
              href="/about"
              className="text-lg font-medium text-primary py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium text-primary py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/products"
              className="text-lg font-medium text-primary py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>

            <div className="pt-4">
              <Link href="/contact" className="block w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full bg-[#222] hover:bg-black">
                  <ArrowUpRight className="w-4 h-4 mr-2" /> Let&apos;s connect
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Bottom Fixed Navigation Pill */}
      <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center bg-[#F4F4F4]/90 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full p-1.5 gap-1 sm:gap-2">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Products", href: "/products" },
            { name: "About", href: "/about" }
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={cn(
                  "flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold transition-all whitespace-nowrap",
                  isActive ? "bg-[#282828] text-white hover:scale-105" : "text-[#888888] hover:text-primary"
                )}
              >
                {item.name}
                {isActive && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                    <path d="M4 8h12" />
                    <path d="M4 16h8" />
                  </svg>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

