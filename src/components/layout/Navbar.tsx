"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 pointer-events-none",
          isScrolled ? "py-4 bg-transparent" : "py-6 bg-transparent"
        )}
      >
        <Container className="flex items-center justify-between pointer-events-auto">
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
          <div className="flex flex-1 items-center justify-end gap-6">
            <Link href="/contact">
              <Button variant="primary" className="rounded-full bg-[#222] hover:bg-black text-white px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm">
                <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2 text-white/50" />
                Let&apos;s connect
              </Button>
            </Link>
          </div>
        </Container>
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

