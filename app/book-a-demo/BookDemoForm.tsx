"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import styles from "./book-a-demo.module.css";

export default function BookDemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const fields = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/demo-request", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: fields.get("firstName"), lastName: fields.get("lastName"), email: fields.get("email"), company: fields.get("company"), role: fields.get("role"), transactionType: fields.get("transactionType"), message: fields.get("message"), website: fields.get("website"), consent: fields.get("consent") === "on" }),
      });
      if (!response.ok) throw new Error("Request failed");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("We could not send your request. Please try again or email hello@mergevista.com.");
    } finally { setSubmitting(false); }
  }

  if (submitted) {
    return <div className={styles.confirmation} role="status">
      <div className={styles.check}>✓</div>
      <p className={styles.kicker}>Request received</p>
      <h2>Thank you for your interest in MergeVista.</h2>
      <p>A member of our team will review your request and contact you within one business day to arrange a focused product conversation.</p>
      <div className={styles.nextSteps}><span><b>01</b>We review your priorities</span><span><b>02</b>We tailor the conversation</span><span><b>03</b>We schedule your demonstration</span></div>
      <Link className={styles.returnLink} href="/">Return to the homepage →</Link>
    </div>;
  }

  return <form className={styles.form} onSubmit={submitDemo}>
    <label className={styles.honeypot} aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <div className={styles.twoColumns}>
      <label>First name<input name="firstName" autoComplete="given-name" required /></label>
      <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
    </div>
    <label>Work email<input name="email" type="email" autoComplete="email" placeholder="name@company.com" required /></label>
    <div className={styles.twoColumns}>
      <label>Company<input name="company" autoComplete="organization" required /></label>
      <label>Job title or role<input name="role" autoComplete="organization-title" required /></label>
    </div>
    <label>Transaction type<select name="transactionType" defaultValue="" required><option value="" disabled>Select an area</option><option>Acquisition</option><option>Divestiture</option><option>Integration</option><option>Separation</option><option>General platform evaluation</option></select></label>
    <label>How can we help? <small>Optional</small><textarea name="message" rows={5} placeholder="Tell us about your priorities, transaction or evaluation." /></label>
    <label className={styles.consent}><input name="consent" type="checkbox" required/><span>By submitting this form, I agree that MergeVista LLC may use the information provided to respond to my request, as described in our <Link href="/privacy">Privacy Notice</Link>.</span></label>
    {error && <p className={styles.formError} role="alert">{error}</p>}
    <button className={styles.submit} type="submit" disabled={submitting}>{submitting ? "Sending…" : "Request a demo"} <span>→</span></button>
    <p className={styles.response}>We typically respond within one business day.</p>
  </form>;
}
