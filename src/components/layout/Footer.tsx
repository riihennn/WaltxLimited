import Link from "next/link";
export function Footer() {
  return <footer className="site-footer shell"><div><strong>WaltX Limited</strong><p>Masdar City Free Zone, Abu Dhabi, UAE<br />Licence No. MC 14979</p></div><div className="footer-right"><nav aria-label="Legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookies</Link></nav><p>© {new Date().getFullYear()} WaltX Limited</p></div></footer>;
}
