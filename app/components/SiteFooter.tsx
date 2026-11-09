import Image from "next/image";
import Link from "next/link";
import styles from "./site-footer.module.css";
import { brand } from "../lib/brand";

type SiteFooterProps = { theme?: "light" | "dark"; bordered?: boolean };

const LinkedInLink = () => <a
  className={styles.linkedin}
  href="https://www.linkedin.com/company/mergevista/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="MergeVista on LinkedIn (opens in a new tab)"
>
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 8.3H3.2V19h3.3V8.3ZM4.9 3A1.9 1.9 0 1 0 4.9 6.8 1.9 1.9 0 0 0 4.9 3ZM19.8 12.9c0-3.2-1.7-4.8-4.1-4.8-1.9 0-2.8 1-3.2 1.8V8.3H9.2V19h3.3v-5.3c0-1.4.3-2.8 2-2.8 1.7 0 1.7 1.6 1.7 2.9V19h3.3l.3-6.1Z"/></svg>
  <span>Follow MergeVista</span>
</a>;

export default function SiteFooter({ theme = "light", bordered = true }: SiteFooterProps) {
  const dark = theme === "dark";
  return <div className={`${styles.shell} ${dark ? styles.dark : styles.light}`}>
    <footer className={`${styles.footer} ${bordered ? "" : styles.borderless}`}>
      <div className={styles.primary}>
        <div className={styles.intro}>
          <Link className={styles.brand} href="/" aria-label="MergeVista home">
            {dark
              ? <Image src="/brand/mergevista-primary-matched-dark.png" alt="MergeVista" width={609} height={180}/>
              : <Image src="/brand/mergevista-primary-light.png" alt="MergeVista" width={675} height={212}/>
            }
            <small>AI-Powered IT M&amp;A Execution Platform</small>
          </Link>
          <p>Connect the technology baseline, transition plan and execution evidence in one governed platform.</p>
          <LinkedInLink />
        </div>

        <nav className={styles.navigation} aria-label="Footer navigation">
          <div className={styles.linkGroup}>
            <h2>Product</h2>
            <Link href="/platform">Platform</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/services">Services</Link>
            <Link href="/ai-capabilities">AI Capabilities</Link>
          </div>
          <div className={styles.linkGroup}>
            <h2>Explore</h2>
            <Link href="/use-cases">Use Cases</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/about">About</Link>
            <Link href="/guided-trial">Guided Trial</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.linkGroup}>
            <h2>Resources</h2>
            <Link href={brand.legalPaths.security}>Security</Link>
            <Link href={brand.legalPaths.support}>Support</Link>
            <Link href={brand.legalPaths.privacy}>Privacy</Link>
            <Link href={brand.legalPaths.terms}>Terms</Link>
          </div>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>© {brand.copyrightYear} {brand.legalName}. All rights reserved.</p>
        <span>Built for governed IT M&amp;A execution.</span>
      </div>
    </footer>
  </div>;
}
