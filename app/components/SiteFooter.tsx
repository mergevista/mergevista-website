import Image from "next/image";
import Link from "next/link";
import styles from "./site-footer.module.css";
import { brand } from "../lib/brand";

type SiteFooterProps = { theme?: "light" | "dark" };

export default function SiteFooter({ theme = "light" }: SiteFooterProps) {
  const dark = theme === "dark";
  return <div className={`${styles.shell} ${dark ? styles.dark : styles.light}`}>
    <footer className={styles.footer}>
      <Link className={styles.brand} href="/" aria-label="MergeVista home">
        {dark ? <span className={styles.darkLockup}><Image src="/brand/mergevista-icon-white-transparent.png" alt="" width={128} height={124} aria-hidden="true"/><strong>Merge<span>Vista</span></strong></span> : <Image src="/brand/mergevista-primary-light.png" alt="MergeVista" width={675} height={212}/>}
        <small>AI-Powered IT M&amp;A Execution Platform</small>
      </Link>
      <p>© {brand.copyrightYear} {brand.legalName}. All rights reserved.</p>
      <nav aria-label="Footer navigation"><Link href={brand.legalPaths.privacy}>Privacy</Link><Link href={brand.legalPaths.terms}>Terms</Link><Link href={brand.legalPaths.security}>Security</Link><Link href={brand.legalPaths.support}>Support</Link><Link href="/about">About</Link></nav>
    </footer>
  </div>;
}
