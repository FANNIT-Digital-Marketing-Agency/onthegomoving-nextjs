"use client";
// ==========================================================================
// ON THE GO MOVING — Landing Page Thank You (Paid Traffic)
// Fires GTM event: paid_lead_conversion on mount — used for Google Ads
// conversion tracking separate from organic form submissions.
// noindex: paid traffic only
// ==========================================================================
import { useEffect } from "react";
import { CheckCircle, Phone, Clock, Star, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/siteData";

export default function ThankYouLanding() {
  // Fire GTM conversion events on mount:
  //   1. paid_lead_conversion  — Google Ads conversion tag
  //   2. fb_lead               — Facebook Pixel Lead event (with event_id for CAPI deduplication)
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      // Retrieve the event_id that QuoteForm stored in sessionStorage at submission time
      const fbEventId = sessionStorage.getItem("fb_lead_event_id") || undefined;

      // Google Ads conversion
      (window as any).dataLayer.push({
        event: "paid_lead_conversion",
        conversionSource: "landing_page_form",
        pagePath: window.location.pathname,
      });

      // Facebook Pixel Lead event — GTM tag listens for 'fb_lead' and calls
      // fbq('track', 'Lead', {}, { eventID: fbEventId }) for browser-side pixel
      (window as any).dataLayer.push({
        event: "fb_lead",
        fb_event_id: fbEventId,
        fb_pixel_id: "129153980771695",
      });

      // Clean up so it doesn't re-fire on a back-navigation
      sessionStorage.removeItem("fb_lead_event_id");
    }
  }, []);

  return (
    <div className="bg-white min-h-[60vh] flex flex-col">
      {/* ── Confirmation hero ── */}
      <section className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Big checkmark */}
          <div className="w-20 h-20 bg-[#e8f4d0] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={44} className="text-[#75aa11]" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a2e0a] mb-4">
            Quote Request Received!
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            We'll contact you within <strong>1 business hour</strong> with availability and a flat-rate quote. No obligation.
          </p>

          {/* What happens next */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-left mb-8">
            <h2 className="text-xl font-bold text-[#1a2e0a] mb-5">What Happens Next</h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "We review your request",
                  desc: "Our team checks crew availability for your move date and location.",
                },
                {
                  step: "2",
                  title: "We call or email you",
                  desc: "Expect to hear from us within 1 business hour with a flat-rate quote.",
                },
                {
                  step: "3",
                  title: "You confirm and we book it",
                  desc: "Once you approve the quote, we lock in your crew and send a confirmation.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#75aa11] text-white rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    {step}
                  </div>
                  <div>
                    <p className="font-bold text-[#1a2e0a]">{title}</p>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Need it faster? Call now */}
          <div className="bg-[#1a2e0a] rounded-2xl p-6 text-white mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock size={18} className="text-[#75aa11]" />
              <p className="font-bold text-lg">Need to confirm faster?</p>
            </div>
            <p className="text-gray-300 text-sm mb-4">Call us directly and we'll check availability on the spot.</p>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-3 bg-[#75aa11] hover:bg-[#5e8a0d] text-white font-extrabold text-xl px-8 py-4 rounded-xl transition-colors"
            >
              <Phone size={20} />
              {COMPANY.phone}
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Star size={15} className="text-yellow-400 fill-yellow-400" />
              <strong className="text-gray-700">{COMPANY.googleRating}★</strong> — {COMPANY.googleReviewCount.toLocaleString()} Google reviews
            </span>
            <span>Licensed &amp; Insured — WA {COMPANY.license}</span>
            <span>Serving Seattle since {COMPANY.founded}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
