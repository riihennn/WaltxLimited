import { Metadata } from "next";
import { BreadcrumbsJsonLd } from "@/components/seo/BreadcrumbsJsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductsHero } from "@/components/sections/products/ProductsHero";
import { ProductsIntro } from "@/components/sections/products/ProductsIntro";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ProductPhilosophy } from "@/components/sections/products/ProductPhilosophy";
import { GlobalCta } from "@/components/sections/GlobalCta";



export const metadata: Metadata = {
  title: "WaltX Products | Digital Products & Experiences",
  description: "Explore digital products built by WaltX across events, dining, travel, lifestyle, and experiences.",
  alternates: {
    canonical: "https://waltx.ae/products",
  },
  openGraph: {
    title: "WaltX Products | Digital Products & Experiences",
    description: "Explore digital products built by WaltX across events, dining, travel, lifestyle, and experiences.",
    url: "https://waltx.ae/products",
  },
  twitter: {
    title: "WaltX Products | Digital Products & Experiences",
    description: "Explore digital products built by WaltX across events, dining, travel, lifestyle, and experiences.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <BreadcrumbsJsonLd items={[{ name: "WaltX Products", item: "https://waltx.ae/products" }]} />
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
