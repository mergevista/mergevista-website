"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./site-header.module.css";

type SiteHeaderProps = { variant?: "full" | "focused" };

export default function SiteHeader({ variant = "full" }: SiteHeaderProps) {
  const focused = variant === "focused";
  const [menuOpen, setMenuOpen] = useState(false);
  const [suppressedMenu, setSuppressedMenu] = useState<"platform" | "solutions" | "use-cases" | "ai" | null>(null);
  const closeMenu = () => setMenuOpen(false);

  return <header className={styles.header}>
    <Link className={styles.brand} href="/" aria-label="MergeVista home">
      <Image src="/brand/mergevista-primary-light.png" alt="MergeVista" width={675} height={212} priority />
      <small>AI-Powered IT M&amp;A Execution Platform</small>
    </Link>
    {!focused && <nav className={styles.links} aria-label="Primary navigation">
      <div
        className={`${styles.platformMenu} ${suppressedMenu === "platform" ? styles.menuSuppressed : ""}`}
        onClickCapture={() => setSuppressedMenu("platform")}
        onFocusCapture={() => setSuppressedMenu(null)}
        onMouseLeave={() => setSuppressedMenu(null)}
      >
        <Link href="/platform">Platform <span aria-hidden="true">⌄</span></Link>
        <div className={`${styles.megaMenu} ${styles.platformDropdown}`}>
          <div className={styles.megaList}>
            <p className={styles.megaEyebrow}>One connected platform</p>
            <Link className={styles.overviewLink} href="/platform">
              <span><b>MergeVista Complete</b><small>Run the full IT M&amp;A lifecycle in one governed execution environment.</small></span>
            </Link>
            <div className={styles.menuRule} />
            <Link href="/capabilities/migration-tsa-exit">
              <span><b>Migration &amp; TSA Exit</b><small>Govern post-Day 1 migration and drive services to a defensible exit.</small></span>
            </Link>
            <Link href="/capabilities/day-1-readiness">
              <span><b>Day 1 Readiness</b><small>Prepare carved-out operations to maintain continuity from legal close.</small></span>
            </Link>
            <Link href="/capabilities/transaction-control">
              <span><b>Transaction Control</b><small>Connect plans, milestones, RAID and decisions across every workstream.</small></span>
            </Link>
            <Link href="/capabilities/transaction-baseline">
              <span><b>Transaction Baseline</b><small>Establish the trusted inventory and evidence every transaction needs.</small></span>
            </Link>
          </div>
          <Link className={styles.platformFeature} href="/platform">
            <span className={styles.featureEyebrow}>Explore MergeVista Complete</span>
            <strong>One operating model.<br />Every stage connected.</strong>
            <p>Start with the capability you need today and expand without rebuilding the transaction record.</p>
            <span className={styles.lifecycle} aria-hidden="true"><i>Baseline</i><i>Control</i><i>Day 1</i><i>Exit</i></span>
            <span className={styles.featureAction}>See the complete platform <b>→</b></span>
          </Link>
        </div>
      </div>
      <div
        className={`${styles.solutionsMenu} ${suppressedMenu === "solutions" ? styles.menuSuppressed : ""}`}
        onClickCapture={() => setSuppressedMenu("solutions")}
        onFocusCapture={() => setSuppressedMenu(null)}
        onMouseLeave={() => setSuppressedMenu(null)}
      >
        <Link href="/solutions">Solutions <span aria-hidden="true">⌄</span></Link>
        <div className={`${styles.megaMenu} ${styles.solutionsDropdown}`}>
          <div className={styles.solutionGroups}>
            <p className={styles.megaEyebrow}>Solutions for transaction execution</p>
            <Link href="/solutions/divestitures-separations"><b>Divestitures &amp; Separations</b><small>Build the carve-out baseline and coordinate separation across seller and buyer teams.</small></Link>
            <Link href="/solutions/acquisitions-integrations"><b>Acquisitions &amp; Integrations</b><small>Connect acquired technology, transition dependencies and future-state decisions.</small></Link>
            <Link href="/solutions/day-1-readiness"><b>Day 1 Readiness</b><small>Prove that critical operations can function—not simply that plans report green.</small></Link>
            <Link href="/solutions/tsa-management-exit"><b>TSA Management &amp; Exit</b><small>Govern every service from its obligations and costs through objective exit evidence.</small></Link>
            <Link className={styles.viewAllUseCases} href="/solutions">View all solutions <b>→</b></Link>
          </div>
          <Link className={styles.solutionFeature} href="/solutions">
            <span className={styles.featureEyebrow}>Connected by design</span>
            <strong>Control the moments that determine deal outcomes.</strong>
            <p>Use one operating model to establish the baseline, protect Day 1, govern TSA delivery and accelerate migration and exit.</p>
            <span className={styles.lifecycle} aria-hidden="true"><i>Baseline</i><i>Day 1</i><i>TSA</i><i>Exit</i></span>
            <span className={styles.featureAction}>Explore all solutions <b>→</b></span>
          </Link>
        </div>
      </div>
      <div
        className={`${styles.useCasesMenu} ${suppressedMenu === "use-cases" ? styles.menuSuppressed : ""}`}
        onClickCapture={() => setSuppressedMenu("use-cases")}
        onFocusCapture={() => setSuppressedMenu(null)}
        onMouseLeave={() => setSuppressedMenu(null)}
      >
        <Link href="/use-cases">Use Cases <span aria-hidden="true">⌄</span></Link>
        <div className={`${styles.megaMenu} ${styles.useCasesDropdown}`}>
          <div className={styles.audienceGroups}>
            <div>
              <p className={styles.megaEyebrow}>Transaction scenarios</p>
              <Link href="/use-cases/seller-transaction-readiness"><b>Seller &amp; Transaction Readiness</b><small>Prepare the technology story before diligence begins.</small></Link>
              <Link href="/use-cases/first-time-occasional-acquirers"><b>First-Time &amp; Occasional Acquirers</b><small>Bring repeatable structure to an unfamiliar process.</small></Link>
              <Link href="/use-cases/enterprise-acquisitions-integrations"><b>Enterprise Acquisitions &amp; Integrations</b><small>Coordinate complex integrations at enterprise scale.</small></Link>
              <Link href="/use-cases/carve-outs-separation-tsa-exit"><b>Carve-Outs, Separation &amp; TSA Exit</b><small>Protect continuity while moving toward independence.</small></Link>
            </div>
            <div>
              <p className={styles.megaEyebrow}>Portfolio &amp; delivery models</p>
              <Link href="/use-cases/serial-acquirers"><b>Serial Acquirers</b><small>Standardize execution across an active deal portfolio.</small></Link>
              <Link href="/use-cases/private-equity-portfolio-operations"><b>Private Equity &amp; Portfolio Operations</b><small>See readiness and risk across portfolio transactions.</small></Link>
              <Link href="/use-cases/consulting-delivery-partners"><b>Consulting &amp; Delivery Partners</b><small>Deliver a consistent, evidence-backed client method.</small></Link>
              <Link href="/use-cases/specialist-boutique-ma-firms"><b>Specialist &amp; Boutique M&amp;A Firms</b><small>Extend expert delivery without adding process overhead.</small></Link>
            </div>
            <Link className={styles.viewAllUseCases} href="/use-cases">View all use cases <b>→</b></Link>
          </div>
          <Link className={styles.trialFeature} href="/guided-trial">
            <span className={styles.featureEyebrow}>Guided evaluation</span>
            <strong>Explore a realistic IT M&amp;A scenario.</strong>
            <p>Evaluate MergeVista in a secure workspace with representative deal data and guided onboarding.</p>
            <span className={styles.featureAction}>Apply for a guided trial <b>→</b></span>
          </Link>
        </div>
      </div>
      <div
        className={`${styles.aiMenu} ${suppressedMenu === "ai" ? styles.menuSuppressed : ""}`}
        onClickCapture={() => setSuppressedMenu("ai")}
        onFocusCapture={() => setSuppressedMenu(null)}
        onMouseLeave={() => setSuppressedMenu(null)}
      >
        <Link href="/ai-capabilities">AI Capabilities <span aria-hidden="true">⌄</span></Link>
        <div className={`${styles.megaMenu} ${styles.aiDropdown}`}>
          <div className={styles.solutionGroups}>
            <p className={styles.megaEyebrow}>MergeVista Intelligence</p>
            <Link href="/ai-capabilities/contract-commercial-intelligence"><b>Contract &amp; Commercial Intelligence</b><small>Extract commercial evidence, normalize products and establish governed entitlements.</small></Link>
            <Link href="/ai-capabilities/inventory-reconciliation-exceptions"><b>Inventory Reconciliation &amp; Exception Detection</b><small>Connect commercial rights to technology and expose coverage gaps.</small></Link>
            <Link href="/ai-capabilities/human-governed-ai"><b>Human-Governed AI</b><small>Keep evidence, validation and accountable review behind every proposal.</small></Link>
            <Link className={styles.viewAllUseCases} href="/ai-capabilities">View all AI capabilities <b>→</b></Link>
          </div>
          <Link className={styles.solutionFeature} href="/ai-capabilities">
            <span className={styles.featureEyebrow}>One intelligence chain</span>
            <strong>From contract evidence to execution intelligence.</strong>
            <p>Carry approved intelligence into products, rights, inventories, readiness and transaction decisions.</p>
            <span className={styles.lifecycle} aria-hidden="true"><i>Evidence</i><i>Rights</i><i>Inventory</i><i>Action</i></span>
            <span className={styles.featureAction}>Explore MergeVista Intelligence <b>→</b></span>
          </Link>
        </div>
      </div>
      <Link href="/insights">Insights</Link><Link href="/about">About</Link><Link className={styles.guidedTrial} href="/guided-trial">Guided Trial</Link>
    </nav>}
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
      <div className={styles.mobileSubmenu}><Link href="/solutions/divestitures-separations" onClick={closeMenu}>Divestitures &amp; Separations</Link><Link href="/solutions/acquisitions-integrations" onClick={closeMenu}>Acquisitions &amp; Integrations</Link><Link href="/solutions/day-1-readiness" onClick={closeMenu}>Day 1 Readiness</Link><Link href="/solutions/tsa-management-exit" onClick={closeMenu}>TSA Management &amp; Exit</Link></div>
      <Link href="/use-cases" onClick={closeMenu}>Use Cases</Link>
      <div className={styles.mobileSubmenu}><Link href="/use-cases/seller-transaction-readiness" onClick={closeMenu}>Seller &amp; Transaction Readiness</Link><Link href="/use-cases/first-time-occasional-acquirers" onClick={closeMenu}>First-Time &amp; Occasional Acquirers</Link><Link href="/use-cases/serial-acquirers" onClick={closeMenu}>Serial Acquirers</Link><Link href="/use-cases/private-equity-portfolio-operations" onClick={closeMenu}>Private Equity &amp; Portfolio Operations</Link><Link href="/use-cases/enterprise-acquisitions-integrations" onClick={closeMenu}>Enterprise Acquisitions &amp; Integrations</Link><Link href="/use-cases/carve-outs-separation-tsa-exit" onClick={closeMenu}>Carve-Outs, Separation &amp; TSA Exit</Link><Link href="/use-cases/consulting-delivery-partners" onClick={closeMenu}>Consulting &amp; Delivery Partners</Link><Link href="/use-cases/specialist-boutique-ma-firms" onClick={closeMenu}>Specialist &amp; Boutique M&amp;A Firms</Link></div>
      <Link href="/ai-capabilities" onClick={closeMenu}>AI Capabilities</Link>
      <div className={styles.mobileSubmenu}><Link href="/ai-capabilities/contract-commercial-intelligence" onClick={closeMenu}>Contract &amp; Commercial Intelligence</Link><Link href="/ai-capabilities/inventory-reconciliation-exceptions" onClick={closeMenu}>Inventory Reconciliation &amp; Exception Detection</Link><Link href="/ai-capabilities/human-governed-ai" onClick={closeMenu}>Human-Governed AI</Link></div>
      <Link href="/insights" onClick={closeMenu}>Insights</Link>
      <Link href="/about" onClick={closeMenu}>About</Link>
      <Link href="/guided-trial" onClick={closeMenu}>Guided Trial</Link>
      <Link href="/contact" onClick={closeMenu}>Contact</Link>
      <Link className={styles.mobileDemo} href="/book-a-demo" onClick={closeMenu}>Book a demo <span>→</span></Link>
    </nav>}
  </header>;
}
