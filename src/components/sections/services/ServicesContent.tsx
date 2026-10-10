import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServicesContent() {
  return (
    <div className="bg-[#F6F5F2] pt-32 pb-24 md:pt-48 md:pb-32">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-24 md:mb-32">
        <Container>
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="text-[12px] md:text-[14px] font-bold tracking-[0.15em] text-secondary uppercase">
              / SERVICES /
            </div>
            
            <h1 className="text-[clamp(40px,5vw,72px)] font-bold tracking-tighter leading-[1.05] text-primary">
              Website design, development and improvements.
            </h1>
            
            <p className="text-[clamp(17px,1.2vw,21px)] text-secondary font-medium leading-[1.6] max-w-2xl mt-4">
              For a new website or changes to an existing one, tell us what you need visitors to understand and do. We'll discuss the work required and whether WaltX is a fit.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
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
            </div>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="mb-24 md:mb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/10 pt-16">
            
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-secondary">01</span>
              <h2 className="text-2xl font-bold text-primary tracking-tight">Website design and development</h2>
              <p className="text-secondary leading-relaxed text-sm font-medium">For businesses starting a website or replacing an existing one.</p>
              <p className="text-secondary leading-relaxed">
                Work can include page structure, interface design, development and launch preparation. The proposal sets out the pages, features and handover included in your project.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-secondary">02</span>
              <h2 className="text-2xl font-bold text-primary tracking-tight">Website reviews</h2>
              <p className="text-secondary leading-relaxed text-sm font-medium">For businesses that want to understand what needs fixing before committing to a rebuild.</p>
              <p className="text-secondary leading-relaxed">
                We review the agreed pages and user journeys, then provide a prioritized list of findings and recommended changes. The review can cover navigation, page content, mobile layouts and enquiry forms.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-secondary">03</span>
              <h2 className="text-2xl font-bold text-primary tracking-tight">Improvements to existing websites</h2>
              <p className="text-secondary leading-relaxed text-sm font-medium">For websites that need specific changes.</p>
              <p className="text-secondary leading-relaxed">
                Work can include page layout changes, clearer navigation, form improvements and fixes to identified usability problems. We agree the scope before starting.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* Examples of our work */}
      <section className="mb-24 md:mb-32 bg-[#EBEBEB] py-24 rounded-3xl mx-4 lg:mx-12 px-4 lg:px-12">
        <div className="max-w-4xl flex flex-col gap-6">
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold tracking-tight text-primary leading-tight">
            Examples of our work
          </h2>
          <p className="text-[clamp(17px,1.2vw,21px)] text-secondary leading-relaxed">
            Explore Habibi Guide, Dubai Brunches, Rave Dubai and Yacht Guide UAE. These are products owned and operated by WaltX.
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center rounded-full bg-[#181818] text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors w-max mt-4"
          >
            Explore our products
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-black/10 pt-24">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xl flex flex-col gap-6">
              <h2 className="text-[clamp(36px,4.5vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
                Start with a short brief.
              </h2>
              <p className="text-[clamp(17px,1.2vw,21px)] text-secondary leading-relaxed">
                Send your website link, what needs to change and any target date. If you're starting from scratch, describe the business and what the website needs to do.
              </p>
            </div>
            
            <div className="flex flex-col gap-6 w-full md:w-auto min-w-[280px]">
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
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
