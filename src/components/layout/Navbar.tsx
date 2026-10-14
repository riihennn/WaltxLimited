import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><header className="site-header shell"><Link href="/" aria-label="WaltX home"><Image src="/waltx-logo-181818.png" alt="WaltX" width={120} height={64} priority className="brand-logo" /></Link><nav aria-label="Main navigation"><Link href="/#portfolio">Our websites</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav></header></>;
}
