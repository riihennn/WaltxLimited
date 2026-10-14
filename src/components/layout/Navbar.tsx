"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Websites", href: "/#portfolio", number: "01" },
  { label: "Our point of view", href: "/#about", number: "02" },
  { label: "Contact", href: "/#contact", number: "03" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <Link className="header-logo" href="/" aria-label="WaltX home" onClick={() => setOpen(false)}><Image src="/waltx-logo-181818.png" alt="WaltX" width={120} height={64} priority /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
      <button ref={menuButton} className={`menu-toggle ${open ? "is-open" : ""}`} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span /><span /><span /></button>
    </header>
    <nav id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
      <div className="mobile-menu-links">{links.map((link, index) => <Link ref={index === 0 ? firstLink : undefined} tabIndex={open ? 0 : -1} key={link.href} href={link.href} onClick={() => setOpen(false)}><span>{link.label}</span><small>{link.number}</small></Link>)}</div>
      <p>WaltX Limited · Abu Dhabi, UAE</p>
    </nav>
  </>;
}
