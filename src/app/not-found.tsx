"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-[#F6F5F2] flex flex-col justify-center min-h-[80vh]">
        <main className="flex-grow flex items-center">
          <Container>
            <div className="flex flex-col gap-8 max-w-2xl pt-32 pb-20">
              <span className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-[#666664] uppercase">
                / 404 ERROR /
              </span>
              <h1 className="text-[clamp(48px,6vw,88px)] leading-[0.95] tracking-tighter font-bold text-[#181818]">
                Looks like this page moved somewhere else.
              </h1>
              <p className="text-[clamp(24px,2.2vw,36px)] text-[#666664] font-medium leading-[1.3] max-w-[750px]">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
              <div className="mt-8">
                <Link 
                  href="/" 
                  className="bg-[#181818] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 hover:bg-black transition-colors"
                >
                  Back to home ↗
                </Link>
              </div>
            </div>
          </Container>
        </main>
      </div>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}
