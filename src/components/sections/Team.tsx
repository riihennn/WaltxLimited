import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Team() {
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#F6F5F2] relative z-10">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pt-12 md:pt-16 border-t border-black/5">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[clamp(36px,4.5vw,60px)] font-bold tracking-tight text-[#181818] leading-[1.05]">
              Based in Abu Dhabi
            </h2>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col items-start gap-8">
            <p className="text-[clamp(17px,1.2vw,21px)] text-[#181818]/70 leading-[1.6] font-medium">
              WaltX Limited is licensed by Masdar City Free Zone under Licence No. MC 14979.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-transparent text-[#181818] px-6 py-3 text-sm font-medium hover:bg-black/5 transition-colors"
            >
              About WaltX
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
