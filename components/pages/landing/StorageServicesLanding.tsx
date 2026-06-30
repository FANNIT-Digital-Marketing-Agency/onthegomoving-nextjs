"use client";
// ==========================================================================
// ON THE GO MOVING — Storage Services Landing Page
// Google Ads landing page — vault storage differentiation vs self-storage
// noindex: paid traffic only
// ==========================================================================
import { useState } from "react";
import QuoteForm, { pushPhoneClickEvent } from "@/components/QuoteForm";
import { COMPANY } from "@/lib/siteData";
import { BRAND_IMAGES } from "@/lib/brandImages";
import { Phone, CheckCircle, Package, Shield, Lock, Star, ChevronDown, ChevronUp } from "lucide-react";

const COMPARISON = [
  {
    feature: "Vault size",
    us: "7 ft tall × 5 ft wide × 7 ft deep",
    them: "Varies — often smaller or oddly shaped",
  },
  {
    feature: "Storage type",
    us: "Private vault — your items only",
    them: "Open unit — shared access",
  },
  {
    feature: "Access",
    us: "Scheduled access with our team",
    them: "Drive-up, anyone with a code",
  },
  {
    feature: "Security",
    us: "Secured warehouse, no public access",
    them: "Gated lot, open to all tenants",
  },
  {
    feature: "Moving integration",
    us: "We pick up, store, and deliver",
    them: "You haul it yourself",
  },

];

const TRUST_ITEMS = [
  { icon: Star, text: `${COMPANY.googleRating}★ (${COMPANY.googleReviewCount.toLocaleString()} reviews)` },
  { icon: Shield, text: "Secured Redmond, WA facility" },
  { icon: Lock, text: "Private vaults — not shared units" },

];

const FAQS = [
  {
    q: "What's the difference between vault storage and self-storage?",
    a: "With our vault storage, your belongings are loaded into a private wooden vault measuring 7 ft tall × 5 ft wide × 7 ft deep at our secure Redmond facility — no other customers' items share your space. Self-storage units are open rooms in a shared building where anyone with a unit can walk past your belongings.",
  },

  {
    q: "Can I access my stored items?",
    a: "Yes. You can schedule access to your vault during business hours. Because we use private vaults rather than open units, we'll retrieve your specific vault for you.",
  },
  {
    q: "Do you pick up and deliver stored items?",
    a: "Yes. We pick up your items, transport them to our Redmond storage facility, and deliver them back to you when you're ready — all included in the service. You never have to rent a truck or make multiple trips.",
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

export default function StorageServicesLanding() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-[#1a2e0a] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url(${BRAND_IMAGES.storageWarehouse})` }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: headline + trust */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#75aa11] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                <Package size={12} /> Storage Vaults — Not Self-Storage
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Secure Storage<br />
                <span className="text-[#75aa11]">in Redmond, WA</span>
              </h1>
              <p className="text-lg text-gray-200 mb-6 max-w-lg">
                Unlike self-storage units, our private storage vaults (7 ft tall × 5 ft wide × 7 ft deep) are held in a secured Redmond warehouse — only accessible by our team. We pick up, store, and deliver your items. No hauling required.
              </p>

              {/* Phone CTA + scroll-to-form anchor */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={COMPANY.phoneHref}
                  onClick={() => pushPhoneClickEvent("storage-hero")}
                  className="inline-flex items-center gap-3 bg-[#75aa11] hover:bg-[#5e8a0d] text-white font-extrabold text-base sm:text-xl px-5 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors shadow-lg"
                >
                  <Phone size={18} className="sm:hidden" />
                  <Phone size={22} className="hidden sm:block" />
                  {COMPANY.phone}
                </a>
              </div>

              {/* Trust badges — single row on mobile */}
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
              <h2 className="text-[#1a2e0a] text-xl font-bold mb-1">Get a Storage Quote</h2>
              <p className="text-gray-500 text-sm mb-4">Tell us what you need to store and we'll give you a flat monthly rate.</p>
              <QuoteForm
                variant="inline"
                sourceLabel="landing-storage-services"
                defaultMoveType="house"
                defaultFreeStorage={false}
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

      {/* ── Vault vs Self-Storage comparison ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#1a2e0a] text-center mb-4">
            Vault Storage vs. Self-Storage
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
            Our storage vaults are private, secured, and managed by our team — not a public storage facility where anyone can access the building.
          </p>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1a2e0a] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#75aa11]">On The Go Storage</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-300">Self-Storage Unit</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-[#1a2e0a]">{row.feature}</td>
                    <td className="px-4 py-3 text-gray-700">
                      <span className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-[#75aa11] flex-shrink-0" />
                        {row.us}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1a2e0a] mb-4">
                How Our Storage Works
              </h2>
              <ul className="space-y-4">
                {[
                  "We pick up your items from your home or office",
                  "Items are loaded into a private vault (7 ft tall × 5 ft wide × 7 ft deep) at our Redmond facility",
                  "Your vault is sealed — only accessible by our team",
                  "When you're ready, we deliver directly to your new location",
                  "Flexible month-to-month pricing — no long-term contracts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#75aa11] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={BRAND_IMAGES.storageForklift}
                alt="On The Go Moving storage warehouse"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#1a2e0a] text-center mb-8">
            Common Questions About Our Storage
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#75aa11] py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-3">Need Secure Storage in Seattle?</h2>
          <p className="text-white/90 mb-6">Call us to discuss your storage needs and get a flat monthly rate. No long-term contracts required.</p>
          <a
            href={COMPANY.phoneHref}
            onClick={() => pushPhoneClickEvent("storage-bottom-cta")}
            className="inline-flex items-center gap-3 bg-white text-[#1a2e0a] font-extrabold text-xl px-10 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Phone size={22} />
            {COMPANY.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
