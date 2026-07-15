"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FAQS, COMPANY } from "@/lib/siteData";
import { ChevronDown, ChevronUp, Phone } from "lucide-react";
import { useSEO, MOVING_COMPANY_SCHEMA } from "@/hooks/useSEO";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  // FAQPage and BreadcrumbList schema are rendered server-side in
  // app/(main)/faq/page.tsx so they're present in the static HTML.
  useSEO({
    title: "Moving FAQ | On The Go Moving & Storage",
    description: "Answers to the most common questions about hiring movers in Seattle. Pricing, scheduling, licensing, what's included, storage, and more from On The Go Moving.",
    canonical: "https://onthegomoving.com/faq/",
    ogType: "website",
    schema: MOVING_COMPANY_SCHEMA,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">
        <section className="py-14" style={{ backgroundColor: "#1e3a0f" }}>
          <div className="container text-center">
            <p className="section-label text-[#75aa11] mb-2">Got Questions?</p>
            <h1 className="text-5xl font-extrabold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 mt-3 max-w-xl mx-auto">
              Everything you need to know about hiring movers in the Seattle area.
            </p>
          </div>
        </section>
        <section className="py-16 bg-[#f5f5f3]">
          <div className="container max-w-3xl">
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="font-bold text-gray-900" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}>
                      {faq.question}
                    </span>
                    {open === i ? <ChevronUp size={18} style={{ color: "#75aa11" }} /> : <ChevronDown size={18} className="text-gray-400" />}
                  </button>
                  {open === i && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-gray-600 mb-4">Still have questions? We're happy to help.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={COMPANY.phoneHref} className="btn-primary"><Phone size={16} /> {COMPANY.phone}</a>
                <a href="/contact-us/" className="btn-gold">Get a Free Quote</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
