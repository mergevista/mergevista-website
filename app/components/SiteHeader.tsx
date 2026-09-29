"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./site-header.module.css";

type SiteHeaderProps = { variant?: "full" | "focused" };

export default function SiteHeader({ variant = "full" }: SiteHeaderProps) {
  const focused = variant === "focused";
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <header className={styles.header}>
    <Link className={styles.brand} href="/" aria-label="MergeVista home">
      <Image src="/brand/mergevista-primary-light.png" alt="MergeVista" width={675} height={212} priority />
      <small>AI-Powered IT M&amp;A Execution Platform</small>
    </Link>
    {!focused && <nav className={styles.links} aria-label="Primary navigation"><div className={styles.platformMenu}><Link href="/platform">Platform <span aria-hidden="true">⌄</span></Link><div className={styles.platformDropdown}><Link href="/platform"><b>MergeVista Complete</b></Link><Link href="/capabilities/migration-tsa-exit"><b>MergeVista Migration &amp; TSA Exit</b></Link><Link href="/capabilities/day-1-readiness"><b>MergeVista Day 1 Readiness</b></Link><Link href="/capabilities/transaction-control"><b>MergeVista Transaction Control</b></Link><Link href="/capabilities/transaction-baseline"><b>MergeVista Transaction Baseline</b></Link></div></div><Link href="/solutions">Solutions</Link><div className={styles.useCasesMenu}><Link href="/use-cases">Use Cases <span aria-hidden="true">⌄</span></Link><div className={styles.useCasesDropdown}><Link href="/use-cases/seller-transaction-readiness">Seller &amp; Transaction Readiness</Link><Link href="/use-cases/first-time-occasional-acquirers">First-Time &amp; Occasional Acquirers</Link><Link href="/use-cases/serial-acquirers">Serial Acquirers</Link><Link href="/use-cases/private-equity-portfolio-operations">Private Equity &amp; Portfolio Operations</Link><Link href="/use-cases/enterprise-acquisitions-integrations">Enterprise Acquisitions &amp; Integrations</Link><Link href="/use-cases/carve-outs-separation-tsa-exit">Carve-Outs, Separation &amp; TSA Exit</Link><Link href="/use-cases/consulting-delivery-partners">Consulting &amp; Delivery Partners</Link><Link href="/use-cases/specialist-boutique-ma-firms">Specialist &amp; Boutique M&amp;A Firms</Link><Link className={styles.viewAllUseCases} href="/use-cases">View all use cases →</Link></div></div><Link href="/ai-capabilities">AI Capabilities</Link><Link href="/insights">Insights</Link><Link href="/about">About</Link><Link className={styles.guidedTrial} href="/guided-trial">Guided Trial</Link></nav>}
    <div className={styles.actions}>{focused && <Link className={styles.back} href="/">Back to homepage</Link>}<Link className={styles.contact} href="/contact">Contact</Link>{!focused && <Link className={styles.demo} href="/book-a-demo">Book a demo</Link>}</div>
    {!focused && <button
      className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
      type="button"
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
      onClick={() => setMenuOpen((open) => !open)}
    ><span/><span/><span/></button>}
    {!focused && <nav
      id="mobile-navigation"
      className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      aria-label="Mobile navigation"
      aria-hidden={!menuOpen}
    >
      <Link href="/platform" onClick={closeMenu}>Platform</Link>
      <div className={styles.mobileSubmenu}><Link href="/capabilities/migration-tsa-exit" onClick={closeMenu}>MergeVista Migration &amp; TSA Exit</Link><Link href="/capabilities/day-1-readiness" onClick={closeMenu}>MergeVista Day 1 Readiness</Link><Link href="/capabilities/transaction-control" onClick={closeMenu}>MergeVista Transaction Control</Link><Link href="/capabilities/transaction-baseline" onClick={closeMenu}>MergeVista Transaction Baseline</Link></div>
      <Link href="/solutions" onClick={closeMenu}>Solutions</Link>
      <Link href="/use-cases" onClick={closeMenu}>Use Cases</Link>
      <div className={styles.mobileSubmenu}><Link href="/use-cases/seller-transaction-readiness" onClick={closeMenu}>Seller &amp; Transaction Readiness</Link><Link href="/use-cases/first-time-occasional-acquirers" onClick={closeMenu}>First-Time &amp; Occasional Acquirers</Link><Link href="/use-cases/serial-acquirers" onClick={closeMenu}>Serial Acquirers</Link><Link href="/use-cases/private-equity-portfolio-operations" onClick={closeMenu}>Private Equity &amp; Portfolio Operations</Link><Link href="/use-cases/enterprise-acquisitions-integrations" onClick={closeMenu}>Enterprise Acquisitions &amp; Integrations</Link><Link href="/use-cases/carve-outs-separation-tsa-exit" onClick={closeMenu}>Carve-Outs, Separation &amp; TSA Exit</Link><Link href="/use-cases/consulting-delivery-partners" onClick={closeMenu}>Consulting &amp; Delivery Partners</Link><Link href="/use-cases/specialist-boutique-ma-firms" onClick={closeMenu}>Specialist &amp; Boutique M&amp;A Firms</Link></div>
      <Link href="/ai-capabilities" onClick={closeMenu}>AI Capabilities</Link>
      <Link href="/insights" onClick={closeMenu}>Insights</Link>
      <Link href="/about" onClick={closeMenu}>About</Link>
      <Link href="/guided-trial" onClick={closeMenu}>Guided Trial</Link>
      <Link href="/contact" onClick={closeMenu}>Contact</Link>
      <Link className={styles.mobileDemo} href="/book-a-demo" onClick={closeMenu}>Book a demo <span>→</span></Link>
    </nav>}
  </header>;
}
