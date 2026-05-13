"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ALL_LOCATIONS } from "@/lib/siteData";
import Link from "next/link";

const CORE_PAGES = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Our Team", href: "/team/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "FAQ", href: "/faq/" },
  { label: "How Much Do Movers Cost?", href: "/how-much-do-movers-cost/" },
  { label: "Locations We Serve", href: "/we-are-local/" },
  { label: "Blog", href: "/blog/" },
  { label: "Moving Supplies", href: "/moving-supplies/" },
  { label: "Real Estate Agents", href: "/real-estate-agents/" },
  { label: "Partners", href: "/partners/" },
  { label: "Staging Professionals", href: "/staging-professionals/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms-of-service/" },
];

const SERVICES = [
  { label: "Residential Moving", href: "/residential-moving/" },
  { label: "Commercial Moving", href: "/commercial-moving/" },
  { label: "Storage Services", href: "/storage-services/" },
  { label: "Apartment Moving", href: "/apartment-moving/" },
  { label: "Senior Moving", href: "/senior-moving/" },
  { label: "Packing Services", href: "/packing-services/" },
  { label: "Labor Only Moving", href: "/labor-only-moving/" },
  { label: "Specialty Moving", href: "/specialty-moving/" },
  { label: "Office Moving", href: "/office-moving/" },
  { label: "Piano Moving", href: "/piano-moving/" },
  { label: "Furniture Moving", href: "/furniture-moving/" },
  { label: "Condo Moving", href: "/condo-moving/" },
  { label: "Corporate Relocation", href: "/corporate-relocation/" },
  { label: "Appliance Moving", href: "/appliance-moving/" },
  { label: "Unpacking Services", href: "/unpacking-services/" },
  { label: "Freight Forwarding", href: "/freight-forwarding-service/" },
  { label: "Warehousing & Distribution", href: "/warehousing-services/" },
  { label: "Staging Professionals", href: "/staging-professionals/" },
];

const LANDING_PAGES = [
  { label: "Get a Free Quote", href: "/get/quote/" },
  { label: "Residential Movers Quote", href: "/get/residential-movers/" },
  { label: "Commercial Moving Quote", href: "/get/commercial-moving/" },
  { label: "Storage Services Quote", href: "/get/storage-services/" },
  { label: "Same-Day Movers Quote", href: "/get/same-day-movers/" },
];

function SitemapSection({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-brand-forest mb-4 pb-2 border-b border-gray-200">
        {title}
      </h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-brand-green hover:text-brand-forest hover:underline transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-16 bg-brand-forest text-white">
        <div className="container max-w-5xl mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
          <p className="text-gray-300 text-lg">
            A complete directory of all pages on the On The Go Moving &amp; Storage website.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <SitemapSection title="Main Pages" links={CORE_PAGES} />
            <SitemapSection title="Moving Services" links={SERVICES} />
            <SitemapSection title="Get a Free Quote" links={LANDING_PAGES} />
            <div className="md:col-span-2 lg:col-span-3">
              <h2 className="font-display text-xl font-bold text-brand-forest mb-4 pb-2 border-b border-gray-200">
                Cities We Serve
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {ALL_LOCATIONS.map((loc) => (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    className="text-brand-green hover:text-brand-forest hover:underline transition-colors"
                  >
                    {loc.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
