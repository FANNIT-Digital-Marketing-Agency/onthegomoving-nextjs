import type { Metadata } from "next";
import ContactUs from "@/components/pages/ContactUs";


export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with On The Go Moving & Storage. Call (425) 761-8500 or fill out our free quote form. Serving Seattle, Bellevue, Redmond & the greater Puget Sound.",
  alternates: {
    canonical: "https://onthegomoving.com/contact-us/",
  },
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with On The Go Moving & Storage. Call (425) 761-8500 or fill out our free quote form. Serving Seattle, Bellevue, Redmond & the greater Puget Sound.",
    url: "https://onthegomoving.com/contact-us/",
  },
};

// ── Server-side JSON-LD schema ────────────────────────────────────────────────
// Injected directly into the static HTML so Googlebot sees it without JS execution.
// References the sitewide LocalBusiness entity (app/layout.tsx) instead of duplicating it.
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact On The Go Moving & Storage",
  url: "https://onthegomoving.com/contact-us/",
  description: "Get in touch with On The Go Moving & Storage. Call (425) 761-8500 or fill out our free quote form. Serving Seattle, Bellevue, Redmond & the greater Puget Sound.",
  mainEntity: { "@id": "https://onthegomoving.com/#local-business" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactUs />
    </>
  );
}
