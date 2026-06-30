"use client";
// ==========================================================================
// ON THE GO MOVING — Commercial Moving Landing Page
// Google Ads landing page — B2B copy, downtime/COI messaging
// noindex: paid traffic only
// ==========================================================================
import { useState } from "react";
import QuoteForm, { pushPhoneClickEvent } from "@/components/QuoteForm";
import { COMPANY } from "@/lib/siteData";
import { BRAND_IMAGES } from "@/lib/brandImages";
import { Phone, CheckCircle, Building2, Shield, Clock, FileText, Star, Truck, ChevronDown, ChevronUp } from "lucide-react";

const SERVICES = [
  {
    icon: Building2,
    title: "Office Relocations",
    desc: "Minimal downtime moves for offices of any size, from a single suite to a full floor.",
  },
  {
    icon: Truck,
    title: "Equipment & Inventory",
    desc: "Specialized handling for servers, workstations, heavy equipment, and sensitive inventory.",
  },
  {
    icon: FileText,
    title: "COI & Building Compliance",
    desc: "We provide Certificates of Insurance for any building requirement, no delays.",
  },
  {
    icon: Clock,
    title: "After-Hours & Weekend Moves",
    desc: "We work around your schedule to avoid business disruption, nights and weekends available.",
  },
];

const TRUST_ITEMS = [
  { icon: Star, text: `${COMPANY.googleRating}★ (${COMPANY.googleReviewCount.toLocaleString()} reviews)` },
  { icon: Shield, text: "Fully insured, COI provided on request" },
  { icon: Building2, text: "Offices, retail, medical, industrial" },
  { icon: CheckCircle, text: `Serving Seattle businesses since ${COMPANY.founded}` },
];

const FAQS = [
  {
    q: "Do you provide a Certificate of Insurance (COI) for our building?",
    a: "Yes. We provide COIs naming your building management as additional insured, a standard requirement for most Seattle commercial buildings. Just let us know the building's requirements when you request your quote.",
  },
  {
    q: "Can you move our office outside of business hours?",
    a: "Absolutely. We regularly do after-hours and weekend moves to minimize disruption to your business operations. We'll work around your schedule, just tell us your preferred window.",
  },
  {
    q: "How do you handle IT equipment and servers?",
    a: "We use anti-static blankets and specialized crating for servers and sensitive electronics. We recommend your IT team disconnects and reconnects equipment, but we handle all physical transport safely.",
  },
  {
    q: "Do you offer flat-rate pricing for commercial moves?",
    a: "Yes. We quote commercial moves at a flat rate based on the scope of work, not an open-ended hourly clock. You'll know your exact cost before we show up.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#1a2e0a] text-sm sm:text-base">{q}</span>
        {open ? <ChevronUp size={18} className="text-[#75aa11] flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-gray-600 text-sm border-t border-gray-100 pt-3 bg-white">
          {a}
        </div>
      )}
    </div>
  );
}

export default function CommercialMovingLanding() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-[#1a2e0a] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url(${BRAND_IMAGES.commercialFleet})` }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: headline + trust */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#75aa11] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                <Building2 size={12} /> Commercial Moving
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Commercial Movers<br />
                <span className="text-[#75aa11]">Seattle Businesses Trust</span>
              </h1>
              <p className="text-lg text-gray-200 mb-6 max-w-lg">
                Office relocations, equipment moves, and business transitions, done on your schedule to minimize downtime. COI provided for any building requirement.
              </p>

              {/* Phone CTA + scroll-to-form anchor */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={COMPANY.phoneHref}
                  onClick={() => pushPhoneClickEvent("commercial-hero")}
                  className="inline-flex items-center gap-3 bg-[#75aa11] hover:bg-[#5e8a0d] text-white font-extrabold text-base sm:text-xl px-5 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors shadow-lg"
                >
                  <Phone size={18} className="sm:hidden" />
                  <Phone size={22} className="hidden sm:block" />
                  {COMPANY.phone}
                </a>
              </div>

              {/* Trust badges, single row on mobile */}
              <div className="flex flex-nowrap gap-x-3 mt-2 overflow-hidden">
                {TRUST_ITEMS.slice(0, 2).map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-xs sm:text-sm text-gray-200 flex-shrink-0 whitespace-nowrap">
                    <Icon size={14} className="text-[#75aa11] flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quote form */}
            <div id="quote-form" className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              <h2 className="text-[#1a2e0a] text-xl font-bold mb-1">Request a Commercial Moving Quote</h2>
              <p className="text-gray-500 text-sm mb-4">We'll contact you within 1 business hour with availability and pricing.</p>
              <QuoteForm
                variant="inline"
                sourceLabel="landing-commercial-moving"
                defaultMoveType="commercial"
                isLandingPage={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Reviews bar ── */}
      <section className="bg-white border-b border-gray-100 py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-gray-800">{COMPANY.googleRating} out of 5</span>
          </div>
          <div className="h-4 w-px bg-gray-200 hidden sm:block" />
          <span><strong className="text-gray-800">{COMPANY.googleReviewCount.toLocaleString()}</strong> verified Google reviews</span>
          <div className="h-4 w-px bg-gray-200 hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Reviews
          </span>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#1a2e0a] text-center mb-10">
            Commercial Moving Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 flex gap-4 transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#e8f4d0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-[#75aa11]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a2e0a] text-lg mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img
                src="/commercialmovers.jpeg"
                alt="On The Go Moving truck at Microsoft campus in Redmond, WA"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-[#1a2e0a] mb-4">
                Why Seattle Businesses Choose Us
              </h2>
              <ul className="space-y-4">
                {[
                  "Dedicated project manager for every commercial move",
                  "COI (Certificate of Insurance) provided for any building",
                  "After-hours and weekend moves to avoid business disruption",
                  "Specialized handling for IT equipment and sensitive inventory",
                  "Flat-rate commercial pricing, no surprise hourly overruns",
                  `${COMPANY.googleRating}★ average across ${COMPANY.googleReviewCount.toLocaleString()} Google reviews`,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#75aa11] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#1a2e0a] text-center mb-8">
            Common Questions About Commercial Moving
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#1a2e0a] py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Plan Your Business Move?</h2>
          <p className="text-gray-300 mb-6">Call us to discuss your timeline, building requirements, and get a flat-rate commercial quote.</p>
          <a
            href={COMPANY.phoneHref}
            onClick={() => pushPhoneClickEvent("commercial-bottom-cta")}
            className="inline-flex items-center gap-3 bg-[#75aa11] hover:bg-[#5e8a0d] text-white font-extrabold text-xl px-10 py-4 rounded-xl transition-colors shadow-lg"
          >
            <Phone size={22} />
            {COMPANY.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
