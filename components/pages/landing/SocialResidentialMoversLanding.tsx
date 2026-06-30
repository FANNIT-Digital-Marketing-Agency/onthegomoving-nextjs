"use client";
// ==========================================================================
// ON THE GO MOVING — Organic Social Residential Movers Landing Page
// Organic social traffic landing page — noindex, no FB pixel
// Form submits to /.netlify/functions/submit-lead (standard lead flow)
// Redirects to /get/thank-you/ on success
// ==========================================================================
import { useState, useRef, useEffect } from "react";
import { COMPANY } from "@/lib/siteData";
import { BRAND_IMAGES } from "@/lib/brandImages";
import {
  CheckCircle,
  Home,
  Star,
  Shield,
  Users,
  Package,
  Clock,
  ChevronDown,
  ChevronUp,
  ArrowDown,
  ArrowRight,
  Zap,
  ClipboardList,
} from "lucide-react";

// ── Static data ────────────────────────────────────────────────────────────

const TRUST_ITEMS = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Star, text: `${COMPANY.googleRating}★ Google Rating` },
  { icon: Clock, text: "1-Hour Response" },
];

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
    desc: "We pack everything, boxes, furniture, fragile items, so you don't have to.",
  },
  {
    icon: Clock,
    title: "Last-Minute Moves",
    desc: "Need to move fast? We often have same-week availability for urgent moves.",
  },
];

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Bellevue, WA",
    stars: 5,
    text: "Absolutely the best moving experience I've ever had. The crew was professional, fast, and took great care of all my furniture. Zero damage, zero stress.",
  },
  {
    name: "James T.",
    location: "Seattle, WA",
    stars: 5,
    text: "I was nervous about moving my 4-bedroom house but these guys made it look easy. Flat-rate pricing meant no surprise charges at the end. Highly recommend.",
  },
  {
    name: "Linda K.",
    location: "Kirkland, WA",
    stars: 5,
    text: "Used On The Go Moving twice now. Both times were flawless. They showed up on time, worked efficiently, and treated my belongings like their own.",
  },
];

const FAQS = [
  {
    q: "What does flat-rate pricing mean?",
    a: "Flat-rate means the price we quote you is the price you pay, period. We don't run an hourly clock that can balloon if the move takes longer than expected. You'll know your exact cost before move day.",
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
    a: "We recommend booking 2–4 weeks in advance for weekend moves, especially in summer. That said, we often have weekday availability on shorter notice, call us to check.",
  },
];

// ── FAQ accordion ──────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#1a2e0a] text-sm sm:text-base">{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-[#75aa11] flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 text-gray-600 text-sm border-t border-gray-100 pt-3 bg-white">
          {a}
        </div>
      )}
    </div>
  );
}

// ── Move sizes ─────────────────────────────────────────────────────────────
const MOVE_SIZES = [
  "Studio",
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4 Bedrooms",
  "5+ Bedrooms",
];

// Format phone for display: (425) 333-3333
function formatPhoneDisplay(value: string): string {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("1")) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  if (digits.length <= 3) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// ── Inline quote form (calls standard submit-lead) ─────────────────────────

function SocialQuoteForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [moveDate, setMoveDate] = useState("");
  const [fromZip, setFromZip] = useState("");
  const [toZip, setToZip] = useState("");
  const [moveSize, setMoveSize] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!moveSize) {
      setError("Please select your home size (number of bedrooms).");
      return;
    }

    // Client-side phone validation — must be 10 US digits
    const rawPhone = phone.replace(/\D/g, "");
    if (rawPhone.length !== 10) {
      setError("Please enter a valid 10-digit US phone number (e.g. 425-761-8500).");
      return;
    }

    setSubmitting(true);

    const payload = {
      fullName,
      phone: rawPhone,
      email,
      moveDate,
      fromZip,
      toZip,
      moveSize,
      moveType: "house",
      sourceLabel: "landing-social-residential-movers",
      pageUrl: window.location.href,
    };

    try {
      const res = await fetch("/.netlify/functions/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // Push GTM event for conversion tracking
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: "paid_lead_form_submit",
            conversionSource: "social_landing_page_form",
          });
        }
        window.location.href = "/get/thank-you/";
      } else {
        setError("Something went wrong. Please try again or email us at " + COMPANY.email + ".");
      }
    } catch {
      setError("Network error. Please try again or email us at " + COMPANY.email + ".");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jane Smith"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#75aa11] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Phone *</label>
          <div className="flex items-center">
            <span className="flex-shrink-0 px-3 py-2.5 text-sm border border-gray-300 border-r-0 rounded-l-lg bg-gray-50 text-gray-500 select-none">
              +1
            </span>
            <input
              type="tel"
              required
              autoComplete="tel-national"
              value={phone}
              onChange={(e) => setPhone(formatPhoneDisplay(e.target.value))}
              placeholder="(425) 555-0100"
              className="w-full border border-gray-300 rounded-r-lg px-3 py-2.5 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#75aa11] focus:border-transparent"
            />
          </div>
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Email *</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@email.com"
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#75aa11] focus:border-transparent"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Move Date</label>
          <input
            type="date"
            value={moveDate}
            onChange={(e) => setMoveDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#75aa11] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Home Size</label>
          <select
            value={moveSize}
            onChange={(e) => setMoveSize(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#75aa11] focus:border-transparent"
          >
            <option value="">Select size</option>
            {MOVE_SIZES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Moving From (ZIP)</label>
          <input
            type="text"
            value={fromZip}
            onChange={(e) => setFromZip(e.target.value)}
            placeholder="98052"
            maxLength={10}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#75aa11] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Moving To (ZIP)</label>
          <input
            type="text"
            value={toZip}
            onChange={(e) => setToZip(e.target.value)}
            placeholder="98004"
            maxLength={10}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#75aa11] focus:border-transparent"
          />
        </div>
      </div>
      {error && (
        <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">{error}</p>
      )}
      {/* Urgency signal */}
      <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-800">
        <Clock size={13} className="flex-shrink-0" />
        <span>We respond within <strong>1 business hour</strong>, spots fill fast in summer</span>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#75aa11] hover:bg-[#5e8a0d] disabled:opacity-60 text-white font-extrabold text-base py-4 rounded-xl transition-colors shadow-lg"
      >
        {submitting ? (
          "Sending…"
        ) : (
          <span className="inline-flex items-center justify-center gap-2">
            Get My Free Quote <ArrowRight size={18} />
          </span>
        )}
      </button>
      <p className="text-center text-xs text-gray-400">
        No obligation · Flat-rate pricing · Licensed & Insured
      </p>
    </form>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function SocialResidentialMoversLanding() {
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
                <Star size={12} /> {COMPANY.googleRating}★ Rated, {COMPANY.googleReviewCount.toLocaleString()} Reviews
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Seattle's Most Trusted<br />
                <span className="text-[#75aa11]">Residential Movers</span>
              </h1>
              <p className="text-lg text-gray-200 mb-6 max-w-lg">
                Family-owned and operated since {COMPANY.founded}. On The Go Moving handles your home move with the care and attention it deserves, flat-rate pricing, no surprises.
              </p>
              {/* Form scroll CTA */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-3 bg-[#75aa11] hover:bg-[#5e8a0d] text-white font-extrabold text-base sm:text-xl px-5 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors shadow-lg"
                >
                  <ClipboardList size={20} />
                  Get My Free Quote
                  <ArrowDown size={18} className="sm:hidden" />
                  <ArrowRight size={18} className="hidden sm:inline" />
                </a>
              </div>
              {/* Urgency nudge */}
              <div className="flex items-center gap-2 text-[#a8d44f] text-sm font-semibold mb-2">
                <Zap size={14} className="fill-[#a8d44f]" />
                We respond within 1 hour, no phone call required
              </div>
              {/* Trust badges */}
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
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 bg-[#e8f4d0] text-[#3d6b05] text-xs font-bold px-2.5 py-1 rounded-full">
                  <Zap size={11} className="fill-[#3d6b05]" /> 100% Online, No Phone Call Needed
                </span>
              </div>
              <h2 className="text-[#1a2e0a] text-xl font-bold mb-1">Get Your Free Moving Quote</h2>
              <p className="text-gray-500 text-sm mb-4">Flat-rate pricing, know your exact cost before move day. We respond within 1 hour.</p>
              <SocialQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Social proof strip ── */}
      <section className="bg-[#f0f7e6] py-6 border-y border-[#d4eaa0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-[#1a2e0a]">
            {TRUST_ITEMS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 font-semibold">
                <Icon size={16} className="text-[#75aa11]" />
                <span>{text}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 font-semibold">
              <Home size={16} className="text-[#75aa11]" />
              <span>Family-Owned Since {COMPANY.founded}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Move types ── */}
      <section className="py-14 bg-gray-50">
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
            <div>
              <h2 className="text-3xl font-extrabold text-[#1a2e0a] mb-6">
                Why Seattle Families Choose On The Go Moving
              </h2>
              <ul className="space-y-4">
                {[
                  { icon: CheckCircle, text: "Flat-rate pricing, no hourly surprises" },
                  { icon: Shield, text: "Fully licensed, insured, and background-checked crew" },
                  { icon: Star, text: `${COMPANY.googleRating}★ rated across ${COMPANY.googleReviewCount.toLocaleString()} Google reviews` },
                  { icon: Home, text: `Family-owned and locally operated since ${COMPANY.founded}` },
                  { icon: Package, text: "Professional packing materials and furniture protection included" },
                  { icon: Clock, text: "Flexible scheduling, weekdays, weekends, and last-minute moves" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon size={20} className="text-[#75aa11] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1a2e0a] rounded-2xl p-8 text-white text-center">
              <p className="text-[#a8d44f] text-sm font-bold uppercase tracking-wide mb-2">Ready to get started?</p>
              <p className="text-3xl font-extrabold mb-2">Get a Free Quote</p>
              <p className="text-gray-300 text-sm mb-6">Flat-rate pricing · No obligation · 1-hour response</p>
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 bg-[#75aa11] hover:bg-[#5e8a0d] text-white font-extrabold px-8 py-4 rounded-xl transition-colors shadow-lg text-lg w-full justify-center"
              >
                Get My Free Quote <ArrowRight size={20} />
              </a>
              <p className="mt-4 text-gray-400 text-xs">Or call us directly: <a href={COMPANY.phoneHref} className="text-[#a8d44f] font-semibold">{COMPANY.phone}</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-[#1a2e0a] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#1a2e0a] py-14 text-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Move?</h2>
          <p className="text-gray-300 mb-8">Get your free flat-rate quote in minutes. No phone call required.</p>
          <a
            href="#quote-form"
            className="inline-flex items-center gap-2 bg-[#75aa11] hover:bg-[#5e8a0d] text-white font-extrabold px-10 py-4 rounded-xl transition-colors shadow-lg text-lg"
          >
            Get My Free Quote <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-gray-400 text-sm">
            Or call <a href={COMPANY.phoneHref} className="text-[#a8d44f] font-semibold">{COMPANY.phone}</a>
          </p>
        </div>
      </section>
    </div>
  );
}
