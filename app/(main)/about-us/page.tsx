import type { Metadata } from "next";
import AboutUs from "@/components/pages/AboutUs";


export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about On The Go Moving & Storage, Seattle's trusted movers since 2009. Licensed, insured, and committed to stress-free moves across the Puget Sound.",
  alternates: {
    canonical: "https://onthegomoving.com/about-us/",
  },
  openGraph: {
    title: "About Us",
    description: "Learn about On The Go Moving & Storage, Seattle's trusted movers since 2009. Licensed, insured, and committed to stress-free moves across the Puget Sound.",
    url: "https://onthegomoving.com/about-us/",
  },
};

// ── Server-side JSON-LD schema ────────────────────────────────────────────────
// Injected directly into the static HTML so Googlebot sees it without JS execution.
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About On The Go Moving & Storage",
  url: "https://onthegomoving.com/about-us/",
  description: "Learn about On The Go Moving & Storage, Seattle's trusted movers since 2009. Licensed, insured, and committed to stress-free moves across the Puget Sound.",
  mainEntity: { "@id": "https://onthegomoving.com/#organization" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://onthegomoving.com/jason-sexton/#person",
  name: "Jason Sexton",
  jobTitle: "Founder & Owner",
  url: "https://onthegomoving.com/jason-sexton/",
  worksFor: { "@id": "https://onthegomoving.com/#organization" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://onthegomoving.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://onthegomoving.com/about-us/" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([aboutPageSchema, personSchema, breadcrumbSchema]),
        }}
      />
      <AboutUs />
    </>
  );
}
