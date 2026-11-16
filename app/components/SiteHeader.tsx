"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "./site-header.module.css";

type SiteHeaderProps = { variant?: "full" | "focused" };

export default function SiteHeader({ variant = "full" }: SiteHeaderProps) {
  const focused = variant === "focused";
  const mobileNavigationRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => mobileNavigationRef.current?.removeAttribute("open");

  return <header className={styles.header}>
    <Link className={styles.brand} href="/" aria-label="MergeVista home">
      <Image src="/brand/mergevista-primary-light.png" alt="MergeVista" width={675} height={212} priority />
      <small>M&amp;A Integration, Separation &amp; TSA Execution Platform</small>
    </Link>
    {!focused && <nav className={styles.links} aria-label="Primary navigation">
      <Link href="/platform">Platform</Link>
      <Link href="/solutions">Solutions</Link>
      <Link href="/functional-workstreams">Workstreams</Link>
      <Link href="/services">Services</Link>
      <Link href="/ai-capabilities">AI Capabilities</Link>
      <Link href="/use-cases">Use Cases</Link>
      <Link href="/pricing">Pricing</Link><Link href="/insights">Insights</Link><Link href="/about">About</Link><Link className={styles.guidedTrial} href="/guided-trial">Guided Trial</Link>
    </nav>}
    <div className={styles.actions}>{focused && <Link className={styles.back} href="/">Back to homepage</Link>}<Link className={styles.contact} href="/contact">Contact</Link>{!focused && <Link className={styles.demo} href="/book-a-demo">Book a demo</Link>}</div>
    {!focused && <details ref={mobileNavigationRef} className={styles.mobileNavigation}>
      <summary
        className={styles.menuButton}
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation"
      ><span/><span/><span/></summary>
      <nav id="mobile-navigation" className={styles.mobileMenu} aria-label="Mobile navigation">
      <Link href="/platform" onClick={closeMenu}>Platform</Link>
      <Link href="/solutions" onClick={closeMenu}>Solutions</Link>
      <Link href="/functional-workstreams" onClick={closeMenu}>Workstreams</Link>
      <Link href="/services" onClick={closeMenu}>Services</Link>
      <Link href="/ai-capabilities" onClick={closeMenu}>AI Capabilities</Link>
      <Link href="/use-cases" onClick={closeMenu}>Use Cases</Link>
      <Link href="/pricing" onClick={closeMenu}>Pricing</Link>
      <Link href="/insights" onClick={closeMenu}>Insights</Link>
      <Link href="/about" onClick={closeMenu}>About</Link>
      <Link href="/guided-trial" onClick={closeMenu}>Guided Trial</Link>
      <Link href="/contact" onClick={closeMenu}>Contact</Link>
      <Link className={styles.mobileDemo} href="/book-a-demo" onClick={closeMenu}>Book a demo <span>→</span></Link>
      </nav>
    </details>}
  </header>;
}
