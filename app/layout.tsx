import type { Metadata, Viewport } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { profile } from "@/content";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Instrument_Sans({
  variable: "--font-sans-var",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  keywords: [
    "Muhammad Faseeh",
    "AI engineer",
    "ML engineer",
    "backend engineer",
    "LLM",
    "RAG",
    "LangGraph",
    "FastAPI",
    "Python",
    "remote",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.title,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: site.description,
  url: site.url,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["Large language models", "Retrieval-augmented generation", "Backend engineering"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
