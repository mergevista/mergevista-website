import Image from "next/image";
import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <section className={styles.story}>
        <div className={styles.orbits} aria-hidden="true"><i/><i/><i/><i/><i/></div>
        <Link href="/" className={styles.brand} aria-label="MergeVista home">
          <Image src="/brand/mergevista-icon-white-transparent.png" alt="" width={128} height={124} priority aria-hidden="true" />
          <strong>Merge<span>Vista</span></strong>
        </Link>
        <div className={styles.storyCopy}>
          <div className={styles.eyebrow}><span/>Secure transaction workspace</div>
          <h1>Run the complete IT M&amp;A journey with <em>clarity and control.</em></h1>
          <p>One governed execution environment for discovery, separation, Day 1, TSA operations, migration and exit.</p>
          <div className={styles.signals}><span>Deal-level access</span><span>Evidence and audit history</span><span>Human-governed AI</span></div>
        </div>
        <small>© 2026 MergeVista · Built for complex transactions</small>
      </section>

      <section className={styles.access}>
        <div className={styles.mobileBrand}>
          <Image src="/brand/mergevista-primary-light.png" alt="MergeVista" width={675} height={212} />
        </div>
        <div className={styles.card}>
          <div className={styles.lockMark} aria-hidden="true"><span>✓</span></div>
          <p className={styles.kicker}>Welcome back</p>
          <h2>Sign in to MergeVista</h2>
          <p className={styles.intro}>Access your organization’s secure IT M&amp;A workspace.</p>

          <form>
            <label htmlFor="email">Work email</label>
            <input id="email" type="email" autoComplete="email" placeholder="name@company.com" />
            <div className={styles.passwordRow}><label htmlFor="password">Password</label><a href="#">Forgot password?</a></div>
            <div className={styles.passwordField}><input id="password" type="password" autoComplete="current-password" placeholder="Enter your password"/><button type="button" aria-label="Show password">Show</button></div>
            <button className={styles.submit} type="button">Sign in <span>→</span></button>
          </form>

          <div className={styles.divider}><span>or continue with</span></div>
          <button className={styles.microsoft} type="button"><i aria-hidden="true"><b/><b/><b/><b/></i>Microsoft work account</button>
          <p className={styles.help}>Need access? <a href="mailto:support@mergevista.com">Contact your workspace administrator</a></p>
        </div>
        <footer><a href="#">Privacy</a><a href="#">Security</a><a href="mailto:support@mergevista.com">Support</a></footer>
      </section>
    </main>
  );
}
