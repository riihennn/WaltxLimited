import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductsHero } from "@/components/sections/products/ProductsHero";
import { ProductsIntro } from "@/components/sections/products/ProductsIntro";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ProductPhilosophy } from "@/components/sections/products/ProductPhilosophy";
import { GlobalCta } from "@/components/sections/GlobalCta";

export const metadata = {
  title: "Products | WaltX",
  description: "WaltX creates and operates digital products that connect people with experiences, places, services, and businesses.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <div className="relative z-10 bg-[#F6F5F2]">
        <main className="flex-grow">
          <ProductsHero />
          <ProductsIntro />
          <SelectedWork />
          <ProductPhilosophy />
          <GlobalCta />
        </main>
      </div>
      <div className="sticky bottom-0 left-0 w-full z-0">
        <Footer />
      </div>
    </>
  );
}
