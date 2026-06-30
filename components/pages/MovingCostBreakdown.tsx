"use client";

// ON THE GO MOVING — Moving Cost Breakdown
// noindex, follow — used for email / home-sale outreach
// Same template as HowMuchDoMoversCost with content tailored for home-sale context

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { COMPANY } from "@/lib/siteData";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  AlertCircle,
  TrendingDown,
  TrendingUp,
  Clock,
} from "lucide-react";
import { BRAND_IMAGES } from "@/lib/brandImages";

const PRICING_TABLE = [
  { size: "Studio / 1-Bedroom", crew: "2 movers", hours: "2–4 hrs", range: "$300–$600", notes: "Minimal furniture, no stairs" },
  { size: "1–2 Bedroom Apartment", crew: "3 movers", hours: "3–5 hrs", range: "$450–$800", notes: "Elevator/stairs add 30–60 min" },
  { size: "2–3 Bedroom Home", crew: "3 movers", hours: "4–7 hrs", range: "$600–$1,200", notes: "Most common move size" },
  { size: "3–4 Bedroom Home", crew: "4 movers", hours: "6–9 hrs", range: "$900–$1,600", notes: "Full household, garage included" },
  { size: "4+ Bedroom / Large Home", crew: "4–5 movers", hours: "8–12 hrs", range: "$1,200–$2,200+", notes: "May require 2 trips or 2 trucks" },
  { size: "Office / Commercial", crew: "3–5 movers", hours: "Varies", range: "Custom quote", notes: "After-hours rates available" },
];

const HOURLY_RATES = [
  { crew: "2 Movers + Truck", rate: "Call for Rate", best: "Studios, 1-bed apartments" },
  { crew: "3 Movers + Truck", rate: "Call for Rate", best: "1–3 bed apartments, small homes" },
  { crew: "4 Movers + Truck", rate: "Call for Rate", best: "3–4 bed homes, large apartments" },
  { crew: "5 Movers + 2 Trucks", rate: "Call for Rate", best: "Large homes, commercial moves" },
];

const DO_THESE = [
  "Pack everything into sturdy, closed boxes",
  "Stack boxes 3–4 high in one or two central areas",
  "Disassemble beds and any furniture that can be safely taken apart",
  "Consolidate loose items (no 'tiny things everywhere' rooms)",
  "Move items from upper floors to the main floor or garage where possible",
  "Decide ahead of time what's going to disposal, storage, and the new home",
  "Choose a mid-month, weekday move date if your schedule allows",
];

const AVOID_THESE = [
  "Booking the last Saturday of the month and expecting a 'quick' move",
  "Planning to pack, dispose, and move everything in one day for a large home",
  "Scheduling other major projects on moving day (contractors, deliveries, etc.)",
  "Assuming friends or family will help carry loads, and then they can't make it",
];

const COST_FACTORS_UP = [
  { factor: "Stairs or no elevator", impact: "+30–90 min" },
  { factor: "Long carry distance (>75 ft)", impact: "+15–45 min" },
  { factor: "Tight parking / loading dock wait", impact: "+30–60 min" },
  { factor: "Disassembly / reassembly of furniture", impact: "+1–2 hrs" },
  { factor: "Peak season (June–September)", impact: "+10–20% rate" },
  { factor: "Weekend or holiday", impact: "+10–15% rate" },
  { factor: "Last-minute booking (<7 days)", impact: "Limited availability" },
  { factor: "Heavy or oversized items (safes, appliances)", impact: "+$150–$500 flat" },
];

const COST_FACTORS_DOWN = [
  { factor: "Book 4+ weeks in advance", saving: "Best availability & rate" },
  { factor: "Move mid-week (Tue–Thu)", saving: "Lower demand, faster crew" },
  { factor: "Move mid-month (not 1st/last)", saving: "Fewer competing moves" },
  { factor: "Disassemble furniture yourself", saving: "Save 30–60 min" },
  { factor: "Pack boxes before crew arrives", saving: "Save 1–3 hrs" },
  { factor: "Clear a parking spot for the truck", saving: "Avoid carry surcharge" },
  { factor: "Label boxes by room", saving: "Faster unload" },
];

const FAQS = [
  {
    q: "What happens if I add a lot more items on moving day?",
    a: "Our quote is based on the video and item list you provide. If the scope of the move changes (for example, you decide we're moving 'everything' instead of just big furniture), we'll adjust the price and crew size accordingly before we start.",
  },
  {
    q: "Can you hook up my washer, dryer, or mount my TV?",
    a: "We're happy to disconnect and move appliances and TVs. For liability reasons, we generally do not handle complex hookups or wall-mounting. We'll make sure everything arrives safely, and you can decide how you want it installed.",
  },
  {
    q: "Do you offer storage?",
    a: "Yes. If things get overwhelming, we can load items onto our truck, store them in our warehouse (often with 30 days free storage on qualifying moves), and bring them to you later.",
  },
  {
    q: "Is labor-only available?",
    a: "We occasionally offer labor-only for unloading trucks, pods, or pack days. When our calendar is full, full-service moves with a truck get priority, so labor-only is always 'call for availability.'",
  },
  {
    q: "When is the cheapest time to move?",
    a: "Typically mid-month, Tuesday–Thursday, October–March. End-of-month and peak summer moves fill up quickly and have less flexibility for discounts.",
  },
  {
    q: "How much does it cost to hire movers in Seattle?",
    a: "In Seattle and the Eastside, most local moves cost between $300 and $1,600 depending on home size, crew size, and move duration. A studio or 1-bedroom typically runs $300–$600 with a 2-person crew. A 2–3 bedroom home averages $600–$1,200 with a 3-person crew. On The Go Moving charges by the hour with no hidden fees.",
  },
  {
    q: "What is included in the hourly moving rate?",
    a: "On The Go Moving's hourly rate includes the moving truck, fuel, moving blankets and pads, dollies and straps, basic furniture disassembly and reassembly, and standard valuation coverage (60 cents per pound per article). Full-value replacement protection is available for an additional fee.",
  },
  {
    q: "How far in advance should I book movers?",
    a: "We recommend booking at least 3–4 weeks in advance, especially for moves during peak season (June–September) or on weekends. Last-minute bookings within 7 days are possible but subject to availability.",
  },
];

export default function MovingCostBreakdown() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[72px]">

        {/* ── HERO ── */}
        <section
          className="relative min-h-[480px] flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15,40,10,0.88) 0%, rgba(15,40,10,0.75) 100%), url(${BRAND_IMAGES.heroMovingCrew})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container relative z-10 py-20 flex items-center justify-center">
            <div className="text-center max-w-3xl">
              <h1
                className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                What Does a Local
                <br />
                <span style={{ color: "#75aa11" }}>Move Cost?</span>
              </h1>
              <p className="text-green-100 text-lg leading-relaxed max-w-2xl mx-auto">
                Typical ranges by home size. Every move is a little different, but most local moves fall into the ranges below. Your actual price depends on crew size, access (stairs/elevators), prep, and move date.
              </p>
            </div>
          </div>
        </section>





        {/* ── HOW TO KEEP COSTS LOWER ── */}
        <section className="py-14 bg-white">
          <div className="container max-w-5xl">
            <div className="text-center mb-10">
              <p className="section-label text-brand-green mb-2">Preparation Tips</p>
              <h2
                className="text-4xl font-extrabold text-gray-900"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                How to Keep Your Move on the Lower End of the Price Range
              </h2>
              <p className="text-gray-500 mt-3 max-w-2xl mx-auto">A little preparation goes a long way.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Do These */}
              <div className="bg-[#f0f7e6] rounded-2xl p-6 border" style={{ borderColor: "#c5e08a" }}>
                <div className="flex items-center gap-3 mb-5">
                  <TrendingDown size={22} style={{ color: "#75aa11" }} />
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Do These Before We Arrive
                  </h3>
                </div>
                <div className="space-y-3">
                  {DO_THESE.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg px-4 py-3 border" style={{ borderColor: "#c5e08a" }}>
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#75aa11" }} />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Avoid These */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <div className="flex items-center gap-3 mb-5">
                  <TrendingUp size={22} className="text-red-500" />
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    Avoid These If You Don't Want a Big Bill
                  </h3>
                </div>
                <div className="space-y-3">
                  {AVOID_THESE.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-lg px-4 py-3 border border-red-100">
                      <AlertCircle size={16} className="mt-0.5 flex-shrink-0 text-red-400" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* ── FAQ ── */}
        <section className="py-14 bg-white">
          <div className="container max-w-3xl">
            <div className="text-center mb-10">
              <p className="section-label text-brand-green mb-2">FAQs &amp; Fine Print</p>
              <h2
                className="text-4xl font-extrabold text-gray-900"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                FAQs &amp; Fine Print (So There Are No Surprises)
              </h2>
              <p className="text-gray-500 mt-3">A few key Q&amp;As based directly on the questions we hear most often.</p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-[#f5f5f3] rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="text-xl font-bold ml-4 flex-shrink-0" style={{ color: "#75aa11" }}>
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-200 pt-4 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-14" style={{ backgroundColor: "#1e3a0f" }}>
          <div className="container text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#fbc319" color="#fbc319" />)}
            </div>
            <h2
              className="text-4xl font-extrabold text-white mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Get Your Exact Moving Cost in 60 Seconds
            </h2>
            <p className="text-white/70 mb-7 max-w-xl mx-auto">
              No obligation. We respond within 1 hour with a flat-rate quote, no hidden fees, no surprises on move day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact-us/" className="btn-gold text-base px-8 py-3 inline-flex items-center gap-2">
                Get My Free Quote <ArrowRight size={16} />
              </a>
              <a href={COMPANY.phoneHref} className="btn-primary text-base px-8 py-3 inline-flex items-center gap-2">
                <Phone size={16} /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
