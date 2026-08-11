import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://www.mergevista.com";
const title = "MergeVista | AI-Powered IT M&A Execution Platform";
const description =
  "MergeVista is an AI-powered IT M&A execution platform for acquisitions, divestitures, Day 1 readiness, TSA operations, migration, and TSA exit.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MergeVista",
    title,
    description,
    images: [
      {
        url: "/brand/mergevista-primary-dark.png",
        width: 714,
        height: 233,
        alt: "MergeVista — AI-Powered IT M&A Execution Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/mergevista-primary-dark.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg?v=7", type: "image/svg+xml" },
      { url: "/brand/mergevista-tab-icon-v6-32.png?v=7", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.svg?v=7",
    apple: "/brand/mergevista-apple-icon-v6.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "MergeVista",
      url: siteUrl,
      logo: `${siteUrl}/brand/mergevista-favicon-512.png`,
      description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "MergeVista",
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XJ3E9KR8JG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XJ3E9KR8JG');`}
        </Script>
      </body>
    </html>
  );
}
