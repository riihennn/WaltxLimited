import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LaunchCurtain } from "@/components/motion/LaunchCurtain";
import { HeroMedia } from "@/components/motion/HeroMedia";

export const metadata: Metadata = {
  title: "WaltX Limited — A local point of view",
  description: "WaltX Limited builds UAE websites for brunches, music, travel and time on the water. Find your next plan through our four focused guides.",
  alternates: { canonical: "https://waltx.ae/" },
};

const websites = [
  { name: "Dubai Brunches", category: "Brunches · Dubai & Abu Dhabi", url: "https://dubaibrunches.com/", domain: "dubaibrunches.com", image: "/images/dubaibrunch-home.png", description: "A guide to brunches in Dubai and Abu Dhabi. Somewhere to start when you’re deciding where to spend your weekend.", revenue: "Hotel and experience affiliate referrals · Display advertising", logo: "dubai-brunches", tone: "yellow" },
  { name: "Rave Dubai", category: "Music · Nightlife", url: "https://www.ravedubai.com/", domain: "ravedubai.com", image: "/images/ravedubai-home.png", description: "Electronic music events, nightlife guides and music coverage. For people who care about what’s playing and where.", revenue: "Ticket affiliate commissions · Advertising · Selected sponsorships", logo: "rave-dubai", tone: "pink" },
  { name: "Habibi Guide", category: "Travel · Lifestyle", url: "https://habibiguide.com/", domain: "habibiguide.com", image: "/images/habibiguide-home.png", description: "UAE travel and lifestyle guides, bringing together places to stay, things to do and ideas for exploring the country.", revenue: "Hotel, tour, attraction and travel affiliate commissions · Advertising", logo: "habibi-guide", tone: "yellow" },
  { name: "Yacht Guide UAE", category: "Yachts · Experiences", url: "https://yachtguideuae.com/", domain: "yachtguideuae.com", image: "/images/yachtguide-home.png", description: "Yacht charter discovery and enquiries. Visitors connect with licensed operators, who handle bookings and customer payments directly.", revenue: "Planned: operator referral commissions · Paid operator subscriptions · Experience affiliates", logo: "yacht-guide", tone: "pink" },
];

function Marquee({ text, variant = "yellow" }: { text: string; variant?: "yellow" | "pink" }) {
  const row = Array.from({ length: 4 }, (_, index) => <span key={index}>{text}<i aria-hidden="true">✳</i></span>);
  return <div className={`marquee-strip marquee-${variant}`} aria-hidden="true"><div className="marquee-track"><div>{row}</div><div>{row}</div></div></div>;
}

export default function Home() {
  return <>
    <LaunchCurtain />
    <Navbar />
    <main id="main-content">
      <section className="hero-stage" aria-labelledby="hero-title">
        <div className="hero-echo" aria-hidden="true"><div>FIND FIND FIND FIND FIND</div><div>YOUR NEXT YOUR NEXT YOUR NEXT</div><div>FIND FIND FIND FIND FIND</div></div>
        <HeroMedia />
        <div className="hero-copy"><span className="hero-index">WALTX LIMITED / ABU DHABI, UAE</span><h1 id="hero-title">A LOCAL<br /><span>POINT OF VIEW.</span></h1><span className="hero-caption">Four websites. More ways to find what you love.</span></div>
        <div className="hero-sticker" aria-hidden="true">BUILT<br />FOR THE<br />CURIOUS <span>✳</span></div>
      </section>
      <Marquee text="BRUNCHES · MUSIC · TRAVEL · ON THE WATER" />
      <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-intro"><span className="section-index">01 / THE WALTX NETWORK</span><h2 id="portfolio-title">FOUR WAYS<br />TO FIND IT<span className="dot">.</span></h2><p>Each site has its own focus. All four start with the same idea: make local discovery easier.</p></div>
        <div className="portfolio-list">{websites.map((site, index) => <article className={`portfolio-card card-${site.tone}`} key={site.domain}>
          <a className="card-visual" href={site.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${site.name} (opens in a new tab)`}><Image src={site.image} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" loading="eager" /><span className="visual-index">0{index + 1} / 04</span></a>
          <div className="card-content"><span className="card-category">0{index + 1} / {site.category}</span><h3><a href={site.url} target="_blank" rel="noopener noreferrer">{site.name}</a></h3><p className="card-description">{site.description}</p><div className="card-details"><div className={`portfolio-logo portfolio-logo-${site.logo}`} role="img" aria-label={`${site.name} logo`} /><span className="detail-label">BUSINESS MODEL</span><p>{site.revenue}</p></div><a className="card-visit" href={site.url} target="_blank" rel="noopener noreferrer">VISIT {site.domain}<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a></div>
        </article>)}</div>
      </section>
      <Marquee text="A LOCAL POINT OF VIEW" variant="pink" />
      <section className="about" id="about" aria-labelledby="about-title"><span className="section-index">02 / WHY WE BUILD</span><h2 id="about-title">MAKE THE<br />SEARCH FEEL<br /><em>EASIER.</em></h2><div className="about-copy"><p>Plans usually start with a search. We want that part to be easier. WaltX Limited builds focused UAE guides for brunches, music, travel and time on the water.</p><p>We want people to find something that suits them, with useful details and a local point of view that feels genuine.</p></div><span className="about-star" aria-hidden="true">✳</span></section>
      <section className="contact" id="contact" aria-labelledby="contact-title"><span className="section-index">03 / GET IN TOUCH</span><h2 id="contact-title">SOMETHING<br />IN MIND<span className="dot">?</span></h2><p>For portfolio enquiries, advertising or partnerships, tell us a little about what you do.</p><a href="mailto:operations@waltx.ae" className="contact-link">operations@waltx.ae <span aria-hidden="true">↗</span></a></section>
    </main>
    <Footer />
  </>;
}
