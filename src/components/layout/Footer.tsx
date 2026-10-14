import Link from "next/link";

export function Footer() {
  return <footer className="site-footer"><div className="footer-main"><strong>WALTX.</strong><a href="mailto:operations@waltx.ae">operations@waltx.ae</a></div><div className="footer-bottom"><p>WaltX Limited · Masdar City Free Zone, Abu Dhabi, UAE · Licence No. MC 14979</p><nav aria-label="Legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookies</Link></nav><p>© {new Date().getFullYear()} WaltX Limited</p></div></footer>;
}
