import type { Metadata } from "next";
import Link from "next/link";
import styles from "./contact.module.css";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | MergeVista",
  description: "Contact MergeVista for product demonstrations, customer support and general inquiries.",
  alternates: { canonical: "https://www.mergevista.com/contact" },
};

const routes = [
  { number: "01", title: "Sales and demos", text: "Explore how MergeVista can support your acquisition, divestiture, integration or separation.", action: "Request a product conversation", href: "/book-a-demo" },
  { number: "02", title: "Customer support", text: "Get help with workspace access, product questions or an existing MergeVista engagement.", action: "support@mergevista.com", href: "mailto:support@mergevista.com" },
  { number: "03", title: "General inquiries", text: "Contact us about partnerships, company information, media or anything else.", action: "hello@mergevista.com", href: "mailto:hello@mergevista.com" },
];

export default function ContactPage() {
  return <main className={styles.page}>
    <SiteHeader />
    <section className={styles.hero}><div className={styles.eyebrow}><span/>Start a conversation</div><h1>How can we help?</h1><p>Choose the path that best fits what you need. We will make sure your message reaches the right person.</p></section>
    <section className={styles.routes}>{routes.map(route=><article key={route.number}><small>{route.number}</small><h2>{route.title}</h2><p>{route.text}</p><Link href={route.href}>{route.action} <b>→</b></Link></article>)}</section>
    <section className={styles.response}><div><span>✓</span><p><b>A thoughtful response—not an automated sales sequence.</b><br/>We typically respond to inquiries within one business day.</p></div><Link href="/">Return to homepage</Link></section>
    <SiteFooter />
  </main>;
}
