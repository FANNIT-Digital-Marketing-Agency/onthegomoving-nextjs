"use client";
// ==========================================================================
// ON THE GO MOVING — Residential Movers Landing Page
// Google Ads landing page — trust-focused, reviews, family-owned
// noindex: paid traffic only
// ==========================================================================
import { useState } from "react";
import QuoteForm, { pushPhoneClickEvent } from "@/components/QuoteForm";
import { COMPANY } from "@/lib/siteData";
import { BRAND_IMAGES } from "@/lib/brandImages";
import { Phone, CheckCircle, Home, Star, Shield, Users, Package, Clock, ChevronDown, ChevronUp } from "lucide-react";

const MOVE_TYPES = [
  {
    icon: Home,
    title: "Single-Family Homes",
    desc: "Full-service moves for 2–5 bedroom homes across Seattle and the Eastside.",
  },
  {
    icon: Users,
    title: "Apartments & Condos",
    desc: "Experienced with stairs, elevators, and building move-in windows.",
  },
  {
    icon: Package,
    title: "Full-Pack Moves",
    desc: "We pack everything — boxes, furniture, fragile items — so you don't have to.",
  },
  {
    icon: Clock,
    title: "Senior Moves",
    desc: "Patient, careful crews experienced with downsizing, assisted living transitions, and fragile heirlooms.",
  },
];

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Bellevue, WA",
    stars: 5,
    text: "On The Go Moving made our move completely stress-free. The crew was on time, careful with all our furniture, and finished faster than expected. Highly recommend!",
  },
  {
    name: "James T.",
    location: "Seattle, WA",
    stars: 5,
    text: "Used them for a 3-bedroom house move. Flat-rate pricing was exactly what they quoted — no surprises. Professional team from start to finish.",
  },
  {
    name: "Linda K.",
    location: "Kirkland, WA",
    stars: 5,
    text: "Second time using On The Go Moving. They remembered our preferences from last time and handled everything perfectly. This is the only moving company I'll ever use.",
  },
];

const TRUST_ITEMS = [
  { icon: Star, text: `${COMPANY.googleRating}★ (${COMPANY.googleReviewCount.toLocaleString()} reviews)` },
  { icon: Shield, text: "Licensed & Insured — WA HG-064180" },
  { icon: Users, text: "Family-owned since 2009" },
  { icon: CheckCircle, text: "1 free month storage with every move" },
];

const FAQS = [
  {
    q: "What does flat-rate pricing mean?",
    a: "Flat-rate means the price we quote you is the price you pay — period. We don't run an hourly clock that can balloon if the move takes longer than expected. You'll know your exact cost before move day.",
  },
  {
    q: "What's included in a residential move?",
    a: "A trained crew (2–4 movers), a moving truck, all equipment (dollies, furniture pads, straps, floor runners), careful loading and unloading, furniture disassembly and reassembly, and placement at your destination.",
  },
  {
    q: "Do you move pianos, safes, and specialty items?",
    a: "Yes. We have specialized equipment and experience for pianos, gun safes, large appliances, and other heavy or fragile specialty items. Just mention them when you request your quote.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 2–4 weeks in advance for weekend moves, especially in summer. That said, we often have weekday availability on shorter notice — call us to check.",
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

export default function ResidentialMoversLanding() {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-[#1a2e0a] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url(${BRAND_IMAGES.heroMovingCrew})` }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: headline + trust */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#75aa11] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                <Star size={12} /> {COMPANY.googleRating}★ Rated — {COMPANY.googleReviewCount.toLocaleString()} Reviews
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Seattle's Most Trusted<br />
                <span className="text-[#75aa11]">Residential Movers</span>
              </h1>
              <p className="text-lg text-gray-200 mb-6 max-w-lg">
                Family-owned and operated since {COMPANY.founded}. On The Go Moving handles your home move with the care and attention it deserves — flat-rate pricing, no surprises.
              </p>

              {/* Phone CTA + scroll-to-form anchor */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={COMPANY.phoneHref}
                  onClick={() => pushPhoneClickEvent("residential-hero")}
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
              <h2 className="text-[#1a2e0a] text-xl font-bold mb-1">Get Your Free Moving Quote</h2>
              <p className="text-gray-500 text-sm mb-4">Flat-rate pricing — know your exact cost before move day.</p>
              <QuoteForm
                variant="inline"
                sourceLabel="landing-residential-movers"
                defaultMoveType="house"
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

      {/* ── Move types ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#1a2e0a] text-center mb-10">
            Every Type of Residential Move
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {MOVE_TYPES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4">
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

      {/* ── Reviews ── */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#1a2e0a] text-center mb-3">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-500 mb-10">
            {COMPANY.googleRating}★ average across {COMPANY.googleReviewCount.toLocaleString()} Google reviews
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-[#1a2e0a] text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={BRAND_IMAGES.crewEntryway1}
                alt="On The Go Moving residential crew"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#1a2e0a] mb-4">
                Why Families Choose On The Go Moving
              </h2>
              <ul className="space-y-4">
                {[
                  "Flat-rate pricing — your quote is your final price",
                  "Background-checked, uniformed crew members",
                  "Fully padded and wrapped furniture — zero damage policy",
                  "1 free month of storage with every residential move",
                  "Family-owned and operated since 2009",
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
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#1a2e0a] text-center mb-8">
            Common Questions About Residential Moving
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
          <h2 className="text-3xl font-extrabold mb-3">Ready to Get Moving?</h2>
          <p className="text-white/90 mb-6">Call us for a free flat-rate quote. No obligation, no surprises.</p>
          <a
            href={COMPANY.phoneHref}
            onClick={() => pushPhoneClickEvent("residential-bottom-cta")}
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
