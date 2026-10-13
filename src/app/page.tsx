import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "WaltX Limited — Independent websites, rooted in the UAE",
  description: "WaltX Limited builds websites around local discovery, experiences and design products. Explore Dubai Brunches, Rave Dubai, Habibi Guide and Yacht Guide UAE.",
  alternates: { canonical: "https://waltx.ae/" },
};

const websites = [
  { name: "Dubai Brunches", category: "Food & weekends", url: "https://dubaibrunches.com/", domain: "dubaibrunches.com", description: "A guide to brunches in Dubai and Abu Dhabi. Somewhere to start when you’re deciding where to spend your weekend.", revenue: "Hotel and experience affiliate referrals · Display advertising", color: "brunch", mark: "db." },
  { name: "Rave Dubai", category: "Music & nightlife", url: "https://www.ravedubai.com/", domain: "ravedubai.com", description: "Electronic music events, nightlife guides and music coverage. For people who care about what’s playing and where.", revenue: "Ticket affiliate commissions · Advertising · Selected sponsorships", color: "rave", mark: "rd/" },
  { name: "Habibi Guide", category: "Travel & everyday life", url: "https://habibiguide.com/", domain: "habibiguide.com", description: "UAE travel and lifestyle guides, bringing together places to stay, things to do and ideas for exploring the country.", revenue: "Hotel, tour, attraction and travel affiliate commissions · Advertising", color: "habibi", mark: "hg." },
  { name: "Yacht Guide UAE", category: "Time on the water", url: "https://yachtguideuae.com/", domain: "yachtguideuae.com", description: "Yacht charter discovery and enquiries. Visitors connect with licensed operators, who handle bookings and customer payments directly.", revenue: "Planned: operator referral commissions · Paid operator subscriptions · Experience affiliates", color: "yacht", mark: "yg/" },
];

export default function Home() {
  return <>
    <Navbar />
    <main id="main-content">
      <section className="hero shell" aria-labelledby="intro-title">
        <div className="eyebrow"><span className="status-dot" /> UAE-based · Independently built</div>
        <h1 id="intro-title">A local point<br />of <em>view.</em></h1>
        <div className="hero-bottom"><span className="hero-note">WaltX Limited<br />Abu Dhabi, United Arab Emirates</span><div><p>We build websites that help people find their way around the UAE — where to go, what’s on and what to try next.</p><a className="text-link" href="#portfolio">Explore our websites <span aria-hidden="true">↓</span></a></div></div>
      </section>
      <section className="portfolio shell" id="portfolio" aria-labelledby="portfolio-title">
        <div className="section-top"><span className="eyebrow">01 / Our portfolio</span><h2 id="portfolio-title">Four websites.<br />Different ways to discover.</h2></div>
        <div className="website-list">{websites.map((site, index) => <article className="website" key={site.domain}>
          <div className={`site-mark ${site.color}`} aria-hidden="true"><span>{site.mark}</span><small>WALTX / 0{index + 1}</small></div>
          <div className="site-copy"><span className="eyebrow">{site.category}</span><h3><a href={site.url} target="_blank" rel="noopener noreferrer">{site.name}<span className="sr-only"> (opens in a new tab)</span><span className="site-arrow" aria-hidden="true">↗</span></a></h3><p>{site.description}</p><p className="revenue"><span>Business model</span>{site.revenue}</p></div>
          <a className="site-domain" href={site.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${site.name} (opens in a new tab)`}>{site.domain}<span aria-hidden="true">↗</span></a>
        </article>)}</div>
      </section>
      <section className="about" id="about" aria-labelledby="about-title"><div className="shell about-inner"><span className="eyebrow">02 / The business</span><div><h2 id="about-title">Built here.<br />Focused on what’s here.</h2><p>WaltX Limited is a UAE digital business building websites around local discovery, experiences and design products. The four websites above are our current portfolio.</p><p>Our monetisation plans combine affiliate referrals, advertising and selected commercial partnerships. Each website has its own focus and business model.</p><p className="about-detail">For yacht enquiries, licensed operators provide the charter service and take payment directly. WaltX’s role is discovery and referral.</p></div></div></section>
      <section className="contact shell" id="contact" aria-labelledby="contact-title"><span className="eyebrow">03 / Get in touch</span><div><h2 id="contact-title">Have something<br />in mind?</h2><p>For portfolio enquiries, advertising or partnerships,<br className="desktop-break" /> email us with a little about what you do.</p><a className="contact-email" href="mailto:operations@waltx.ae">operations@waltx.ae <span aria-hidden="true">↗</span></a></div></section>
    </main>
    <Footer />
  </>;
}
