import Image from "next/image";
import Link from "next/link";
import styles from "./site-header.module.css";

type SiteHeaderProps = { variant?: "full" | "focused" };

export default function SiteHeader({ variant = "full" }: SiteHeaderProps) {
  const focused = variant === "focused";
  return <header className={styles.header}>
    <Link className={styles.brand} href="/" aria-label="MergeVista home">
      <Image src="/brand/mergevista-primary-light.png" alt="MergeVista" width={675} height={212} priority />
      <small>AI-Powered IT M&amp;A Execution Platform</small>
    </Link>
    {!focused && <nav className={styles.links} aria-label="Primary navigation"><Link href="/#platform">Platform</Link><Link href="/#outcomes">Outcomes</Link><Link href="/#ai">AI Capabilities</Link><Link href="/#security">Security</Link><Link href="/about">About</Link></nav>}
    <div className={styles.actions}>{focused && <Link className={styles.back} href="/">Back to homepage</Link>}<Link className={styles.contact} href="/contact">Contact</Link>{!focused && <Link className={styles.demo} href="/book-a-demo">Book a demo</Link>}</div>
  </header>;
}
