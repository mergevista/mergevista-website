"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import styles from "./guided-trial.module.css";

export default function GuidedTrialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function submitTrial(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const fields = new FormData(event.currentTarget);
    const message = ["GUIDED TRIAL APPLICATION", `Use case: ${fields.get("useCase")}`, `Expected activity: ${fields.get("activity")}`, `Timeline: ${fields.get("timeline")}`, `Evaluation goals: ${fields.get("goals") || "Not provided"}`].join("\n");
    try {
      const response = await fetch("/api/demo-request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ firstName: fields.get("firstName"), lastName: fields.get("lastName"), email: fields.get("email"), company: fields.get("company"), role: fields.get("role"), transactionType: "General platform evaluation", message, website: fields.get("website"), consent: fields.get("consent") === "on" }) });
      if (!response.ok) throw new Error("Request failed");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("We could not send your application. Please try again or email hello@mergevista.com.");
    } finally { setSubmitting(false); }
  }

  if (submitted) return <div className={styles.confirmation} role="status"><div className={styles.check}>✓</div><p className={styles.kicker}>Application received</p><h2>Thank you for considering MergeVista.</h2><p>We will review your organization, evaluation goals and timing, then contact you within one business day about the appropriate next step.</p><div className={styles.nextSteps}><span><b>01</b>We review your application</span><span><b>02</b>We schedule a discovery conversation</span><span><b>03</b>We define the evaluation plan</span></div><Link className={styles.returnLink} href="/">Return to the homepage →</Link></div>;

  return <form className={styles.form} onSubmit={submitTrial}>
    <div><p className={styles.formKicker}>GUIDED TRIAL APPLICATION</p><h2>Tell us about your evaluation.</h2><p className={styles.formIntro}>This short form helps us determine whether a guided trial is the right next step.</p></div>
    <label className={styles.honeypot} aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <div className={styles.twoColumns}><label>First name<input name="firstName" autoComplete="given-name" required /></label><label>Last name<input name="lastName" autoComplete="family-name" required /></label></div>
    <label>Work email<input name="email" type="email" autoComplete="email" placeholder="name@company.com" required /></label>
    <div className={styles.twoColumns}><label>Organization<input name="company" autoComplete="organization" required /></label><label>Role<input name="role" autoComplete="organization-title" required /></label></div>
    <label>Primary use case<select name="useCase" defaultValue="" required><option value="" disabled>Select a use case</option><option>Acquisition execution</option><option>Divestiture or carve-out</option><option>Day 1 readiness</option><option>TSA operations and exit</option><option>Migration readiness</option><option>Advisory or partner evaluation</option><option>Other organizational evaluation</option></select></label>
    <div className={styles.twoColumns}><label>Expected transaction activity<select name="activity" defaultValue="" required><option value="" disabled>Select activity</option><option>One active transaction</option><option>Multiple active transactions</option><option>Transaction expected</option><option>Building a repeatable capability</option><option>Advisory or partner assessment</option></select></label><label>Evaluation timeline<select name="timeline" defaultValue="" required><option value="" disabled>Select timeline</option><option>Within 30 days</option><option>1–3 months</option><option>3–6 months</option><option>More than 6 months</option></select></label></div>
    <label>What would you like to evaluate? <small>Optional</small><textarea name="goals" rows={4} placeholder="Tell us about the workflows, transaction needs or outcomes you want to explore." /></label>
    <label className={styles.consent}><input name="consent" type="checkbox" required/><span>By submitting this form, I agree that MergeVista LLC may use the information provided to respond to my request, as described in our <Link href="/privacy">Privacy Notice</Link>.</span></label>
    {error && <p className={styles.formError} role="alert">{error}</p>}
    <button className={styles.submit} type="submit" disabled={submitting}>{submitting ? "Sending…" : "Apply for a guided trial"}<span>→</span></button>
    <p className={styles.response}>Trial access is reviewed and provisioned by MergeVista.</p>
  </form>;
}
