"use client";
// ==========================================================================
// ON THE GO MOVING — Facebook Ads Residential Movers Landing Page
// Facebook Ads landing page — separate from Google Ads /get/residential-movers/
// noindex: paid traffic only
// Form submits to /.netlify/functions/submit-fb-lead (includes CAPI)
// Redirects to /get/fb-thank-you/ on success
// ==========================================================================
import { useState, useRef, useEffect } from "react";
import { COMPANY } from "@/lib/siteData";
import { BRAND_IMAGES } from "@/lib/brandImages";
import {
  Phone,
  CheckCircle,
  Home,
  Star,
  Shield,
  Users,
  Package,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// ── Facebook Pixel ID ─────────────────────────────────────────────────────
const FB_PIXEL_ID = "129153980771695";

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
    desc: "We pack everything — boxes, furniture, fragile items — so you don't have to.",
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

// ── Read Meta test_event_code from URL (for Test Events panel) ─────────────
function getTestEventCode(): string | undefined {
  if (typeof window === "undefined") return undefined;
  const params = new URLSearchParams(window.location.search);
  return params.get("_fb_test_event_code") || undefined;
}

// ── Inline quote form (calls submit-fb-lead) ───────────────────────────────

const MOVE_SIZES = [
  "Studio",
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4 Bedrooms",
  "5+ Bedrooms",
];

// Format phone for display: (425) 333-3333
// Raw digits are extracted before sending to SuperMove
function formatPhoneDisplay(value: string): string {
  let digits = value.replace(/\D/g, "");
  // Always strip a leading 1 — the +1 country code is already shown as a static prefix,
  // so typing 1 as the first digit is always a mistake. Strip immediately at any length.
  if (digits.startsWith("1")) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  if (digits.length <= 3) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function FbQuoteForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState(""); // stored as formatted display string
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

    // Require bedroom size before submitting
    if (!moveSize) {
      setError("Please select your home size (number of bedrooms).");
      return;
    }

    setSubmitting(true);

    // Generate unique event_id for pixel/CAPI deduplication
    const fbEventId = `fb_lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    // Read fbc/fbp cookies for better match rate
    const getCookie = (name: string) => {
      const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
      return match ? match[2] : undefined;
    };

    const payload = {
      fullName,
      phone: phone.replace(/\D/g, ""), // send raw digits to SuperMove
      email,
      moveDate,
      fromZip,
      toZip,
      moveSize,
      moveType: "house",
      sourceLabel: "landing-fb-residential-movers",
      fbEventId,
      pageUrl: window.location.href,
      clientUserAgent: navigator.userAgent,
      fbc: getCookie("_fbc"),
      fbp: getCookie("_fbp"),
      testEventCode: getTestEventCode(),
    };

    // Persist test event code to sessionStorage so thank-you page can use it
    const testCode = getTestEventCode();
    if (testCode) sessionStorage.setItem("fb_test_event_code", testCode);

    try {
      const res = await fetch("/.netlify/functions/submit-fb-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        // Store event_id for the thank-you page pixel fire
        sessionStorage.setItem("fb_event_id", fbEventId);
        // Push GTM event for browser-side pixel deduplication
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: "fb_lead",
            fb_event_id: fbEventId,
            conversionSource: "fb_landing_page_form",
          });
        }
        window.location.href = "/get/fb-thank-you/";
      } else {
        setError("Something went wrong. Please call us directly at " + COMPANY.phone);
      }
    } catch {
      setError("Network error. Please call us directly at " + COMPANY.phone);
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
        <span>We respond within <strong>1 business hour</strong> — spots fill fast in summer</span>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#75aa11] hover:bg-[#5e8a0d] disabled:opacity-60 text-white font-extrabold text-base py-4 rounded-xl transition-colors shadow-lg"
      >
        {submitting ? "Sending…" : "Get My Free Quote →"}
      </button>
      <p className="text-center text-xs text-gray-400">
        No obligation · Flat-rate pricing · Licensed & Insured
      </p>
    </form>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function FbResidentialMoversLanding() {
  // Inject Facebook Pixel base code on mount (bypasses GTM dependency)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const testCode = getTestEventCode();

    const initAndTrack = () => {
      const fbq = (window as any).fbq;
      if (!fbq) return;
      // Re-init with test code if in test mode
      if (testCode) {
        fbq('init', FB_PIXEL_ID);
        fbq('track', 'PageView', {}, { test_event_code: testCode });
      } else {
        fbq('init', FB_PIXEL_ID);
        fbq('track', 'PageView');
      }
    };

    if ((window as any).fbq) {
      // Pixel already loaded (e.g. from GTM) — just track
      initAndTrack();
      return;
    }

    // Inject the FB Pixel base code script
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FB_PIXEL_ID}');
      ${testCode ? `fbq('track', 'PageView', {}, { test_event_code: '${testCode}' });` : `fbq('track', 'PageView');`}
    `;
    document.head.appendChild(script);
  }, []);

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
              {/* Phone CTA */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-3 bg-[#75aa11] hover:bg-[#5e8a0d] text-white font-extrabold text-base sm:text-xl px-5 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors shadow-lg"
                >
                  <Phone size={18} className="sm:hidden" />
                  <Phone size={22} className="hidden sm:block" />
                  {COMPANY.phone}
                </a>
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
              <h2 className="text-[#1a2e0a] text-xl font-bold mb-1">Get Your Free Moving Quote</h2>
              <p className="text-gray-500 text-sm mb-4">Flat-rate pricing — know your exact cost before move day.</p>
              <FbQuoteForm />
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
