import Image from "next/image";
import Link from "next/link";
import styles from "./site-footer.module.css";

type SiteFooterProps = { theme?: "light" | "dark" };

export default function SiteFooter({ theme = "light" }: SiteFooterProps) {
  const dark = theme === "dark";
  return <div className={`${styles.shell} ${dark ? styles.dark : styles.light}`}>
    <footer className={styles.footer}>
      <Link className={styles.brand} href="/" aria-label="MergeVista home">
        {dark ? <span className={styles.darkLockup}><Image src="/brand/mergevista-icon-white-transparent.png" alt="" width={128} height={124} aria-hidden="true"/><strong>Merge<span>Vista</span></strong></span> : <Image src="/brand/mergevista-primary-light.png" alt="MergeVista" width={675} height={212}/>}
        <small>AI-Powered IT M&amp;A Execution Platform</small>
      </Link>
      <p>© 2026 MergeVista. Built for complex transactions.</p>
      <nav aria-label="Footer navigation"><Link href="/#security">Security</Link><Link href="/about">About</Link><Link href="/privacy">Privacy</Link><Link href="/contact">Contact</Link></nav>
    </footer>
  </div>;
}
