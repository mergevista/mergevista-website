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
    {!focused && <nav className={styles.links} aria-label="Primary navigation"><Link href="/platform">Platform</Link><Link href="/solutions">Solutions</Link><Link href="/ai-capabilities">AI Capabilities</Link><Link href="/security">Security</Link><Link href="/insights">Insights</Link><Link href="/about">About</Link></nav>}
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
      <Link href="/solutions" onClick={closeMenu}>Solutions</Link>
      <Link href="/ai-capabilities" onClick={closeMenu}>AI Capabilities</Link>
      <Link href="/security" onClick={closeMenu}>Security</Link>
      <Link href="/insights" onClick={closeMenu}>Insights</Link>
      <Link href="/about" onClick={closeMenu}>About</Link>
      <Link href="/contact" onClick={closeMenu}>Contact</Link>
      <Link className={styles.mobileDemo} href="/book-a-demo" onClick={closeMenu}>Book a demo <span>→</span></Link>
    </nav>}
  </header>;
}
