import Image from "next/image";
import Link from "next/link";
import styles from "./site-footer.module.css";
import { brand } from "../lib/brand";

type SiteFooterProps = { theme?: "light" | "dark"; bordered?: boolean };

const SocialLinks = () => <div className={styles.socialLinks} aria-label="MergeVista social profiles">
  <a
  className={styles.socialLink}
  href="https://www.linkedin.com/company/mergevista/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="MergeVista on LinkedIn (opens in a new tab)"
>
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 8.3H3.2V19h3.3V8.3ZM4.9 3A1.9 1.9 0 1 0 4.9 6.8 1.9 1.9 0 0 0 4.9 3ZM19.8 12.9c0-3.2-1.7-4.8-4.1-4.8-1.9 0-2.8 1-3.2 1.8V8.3H9.2V19h3.3v-5.3c0-1.4.3-2.8 2-2.8 1.7 0 1.7 1.6 1.7 2.9V19h3.3l.3-6.1Z"/></svg>
  <span>LinkedIn</span>
  </a>
  <a
    className={styles.socialLink}
    href="https://x.com/MergeVista"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="MergeVista on X (opens in a new tab)"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.2 2H21l-6.1 7 7.2 13h-5.6l-4.4-5.8L7 22H4.2l6.6-7.5L3.9 2h5.7l4 5.3L18.2 2Zm-1 17.7h1.5L8.8 4.2H7.2l10 15.5Z"/></svg>
    <span>X</span>
  </a>
  <a
    className={styles.socialLink}
    href="https://www.youtube.com/@MergeVista"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="MergeVista on YouTube (opens in a new tab)"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>
    <span>YouTube</span>
  </a>
  <a
    className={styles.socialLink}
    href="https://www.facebook.com/MergeVista/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="MergeVista on Facebook (opens in a new tab)"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23 10.1 24v-8.4h-3v-3.5h3V9.5c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-1.9.9-1.9 1.9v2.2h3.3l-.5 3.5h-2.8V24c5.7-.9 10.1-5.9 10.1-11.9Z"/></svg>
    <span>Facebook</span>
  </a>
</div>;

export default function SiteFooter({ theme = "light", bordered = true }: SiteFooterProps) {
  const dark = theme === "dark";
  return <div className={`${styles.shell} ${dark ? styles.dark : styles.light}`}>
    <footer className={`${styles.footer} ${bordered ? "" : styles.borderless}`}>
      <div className={styles.primary}>
        <div className={styles.intro}>
          <Link className={styles.brand} href="/" aria-label="MergeVista home">
            {dark
              ? <Image src="/brand/mergevista-primary-dark-exact.png" alt="MergeVista" width={675} height={212}/>
              : <Image src="/brand/mergevista-primary-light.png" alt="MergeVista" width={675} height={212}/>
            }
            <small>AI-Powered IT M&amp;A Execution Platform</small>
          </Link>
          <p>Connect the technology baseline, transition plan and execution evidence in one governed platform.</p>
          <SocialLinks />
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
