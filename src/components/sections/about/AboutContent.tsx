import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function AboutContent() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-background relative overflow-hidden">
      <Container>
        <div className="flex flex-col gap-16 max-w-4xl">
          
          {/* Header */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[clamp(40px,5vw,72px)] font-bold tracking-tighter leading-[1.05] text-primary">
              The company behind four UAE discovery websites.
            </h1>
            <p className="text-[clamp(17px,1.2vw,21px)] text-secondary font-medium leading-[1.6] max-w-2xl">
              WaltX Limited is based in Abu Dhabi. We build and operate Habibi Guide, Dubai Brunches, Rave Dubai and Yacht Guide UAE.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-primary tracking-tight">What we do</h2>
              <p className="text-secondary leading-relaxed">
                Our websites cover local places, dining, electronic music events and yacht charters. Each gives visitors a way to explore options and take the next step, from visiting a venue website to sending an enquiry.
              </p>
              <p className="text-secondary leading-relaxed">
                We work on the design, development and ongoing maintenance of these products.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-primary tracking-tight">Why we build our own products</h2>
              <p className="text-secondary leading-relaxed mb-4">
                Running our own websites means working on what happens after launch: keeping information current, fixing problems and improving how visitors find what they need.
              </p>
              <Link href="/products" className="inline-flex items-center justify-center rounded-full bg-[#181818] text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors w-max">
                See our products
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-primary tracking-tight">Working with WaltX</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We also offer website design, development and reviews of existing websites. Get in touch with your requirements so we can discuss whether the project is a fit.
              </p>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full bg-[#181818] text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors w-max">
                Explore our services
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-primary tracking-tight">Company details</h2>
              <p className="text-secondary leading-relaxed">
                This website is owned and operated by WaltX Limited ("WaltX", "we", "us"), a limited liability company licensed by Masdar City Free Zone, Abu Dhabi, United Arab Emirates, under Licence No. MC 14979.
              </p>
              <div>
                <strong className="block text-primary text-sm mb-1">Registered address:</strong>
                <p className="text-secondary text-sm">FD - First Floor, Incubator Building, Masdar City, Abu Dhabi, United Arab Emirates.</p>
              </div>
              <div>
                <strong className="block text-primary text-sm mb-1">Contact:</strong>
                <a href="mailto:operations@waltx.ae" className="text-secondary hover:text-primary transition-colors text-sm">operations@waltx.ae</a>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
