import type { Metadata } from "next";
import FAQ from "@/components/pages/FAQ";
import { FAQS } from "@/lib/siteData";

export const metadata: Metadata = {
  title: "Moving FAQ | Common Questions Answered",
  description: "Get answers to common moving questions: how much do movers cost, what's included, how to prepare, and more. On The Go Moving & Storage, (425) 761-8500.",
  alternates: {
    canonical: "https://onthegomoving.com/faq/",
  },
  openGraph: {
    title: "Moving FAQ | Common Questions Answered",
    description: "Get answers to common moving questions: how much do movers cost, what's included, how to prepare, and more. On The Go Moving & Storage, (425) 761-8500.",
    url: "https://onthegomoving.com/faq/",
  },
};

// ── Server-side JSON-LD schema ────────────────────────────────────────────────
// Injected directly into the static HTML so Googlebot sees it without JS execution.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://onthegomoving.com/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://onthegomoving.com/faq/" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
      />
      <FAQ />
    </>
  );
}
