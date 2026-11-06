"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { StaggerContainer, StaggerItem, SectionReveal } from "@/components/ui/SectionReveal";
import { ServicesGallery } from "@/components/sections/ServicesGallery";
import { OurApproach } from "@/components/sections/OurApproach";

export function ServicesContent() {
  return (
    <div className="bg-transparent">
      
      {/* Hero Section: Full 100vh viewport hero so next section sits completely below the screen fold */}
      <section className="relative overflow-hidden min-h-screen min-h-[100dvh] flex flex-col justify-center pt-32 pb-24 md:pt-36 md:pb-28">
        <Container>
          <StaggerContainer className="flex flex-col gap-6 max-w-4xl">
            <StaggerItem className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-secondary uppercase">
              SERVICES
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="text-[clamp(40px,5vw,72px)] font-bold tracking-tighter leading-[1.05] text-primary">
                Website design, development and improvements.
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-[clamp(17px,1.2vw,21px)] text-secondary font-medium leading-[1.6] max-w-2xl mt-4">
                For a new website or changes to an existing one, tell us what you need visitors to understand and do. We&apos;ll discuss the work required and whether WaltX is a fit.
              </p>
            </StaggerItem>

            <StaggerItem className="flex flex-wrap gap-4 mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-[#181818] text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors"
              >
                Discuss your website
              </Link>
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-transparent text-[#181818] px-6 py-3 text-sm font-medium hover:bg-black/5 transition-colors"
              >
                See our products
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Services Showcase Gallery: Sits cleanly below the screen fold without theme color changes */}
      <ServicesGallery
        className="pt-16 pb-20 md:pt-20 md:pb-32"
        adaptiveTheme={false}
      />

      {/* 04 - Our Approach: Horizontal Work Process */}
      <OurApproach />

      {/* Examples of our work */}
      <SectionReveal className="mb-24 md:mb-32 bg-[#EBEBEB] py-24 rounded-3xl mx-4 lg:mx-12 px-4 lg:px-12">
        <StaggerContainer className="max-w-4xl flex flex-col gap-6">
          <StaggerItem>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight text-primary leading-tight">
              Examples of our work
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-[clamp(17px,1.2vw,21px)] text-secondary leading-relaxed">
              Explore Habibi Guide, Dubai Brunches, Rave Dubai and Yacht Guide UAE. These are products owned and operated by WaltX.
            </p>
          </StaggerItem>
          <StaggerItem>
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center rounded-full bg-[#181818] text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors w-max mt-4"
            >
              Explore our products
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </SectionReveal>

      {/* Contact CTA */}
      <section className="border-t border-black/10 pt-24">
        <Container>
          <StaggerContainer className="flex flex-col md:flex-row justify-between items-start gap-12">
            <StaggerItem className="max-w-xl flex flex-col gap-6">
              <h2 className="text-[clamp(36px,4.5vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
                Start with a short brief.
              </h2>
              <p className="text-[clamp(17px,1.2vw,21px)] text-secondary leading-relaxed">
                Send your website link, what needs to change and any target date. If you&apos;re starting from scratch, describe the business and what the website needs to do.
              </p>
            </StaggerItem>
            
            <StaggerItem className="flex flex-col gap-6 w-full md:w-auto min-w-[280px]">
              <Link 
                href="/contact" 
                className="w-full inline-flex items-center justify-center rounded-full bg-[#181818] text-white px-8 py-4 text-base font-medium hover:bg-black transition-colors"
              >
                Contact WaltX
              </Link>
              <div className="text-center">
                <span className="block text-[#181818]/40 text-xs font-semibold tracking-wider uppercase mb-1">Email directly</span>
                <a href="mailto:operations@waltx.ae" className="text-secondary hover:text-primary transition-colors text-base font-medium">operations@waltx.ae</a>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

    </div>
  );
}
