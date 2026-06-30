"use client";
// ==========================================================================
// ON THE GO MOVING — Facebook Ads Thank You Page
// Fires fbq('track', 'Lead') directly on mount for Facebook Pixel Lead tracking
// Also fires GTM event for any GTM-based pixel tags (deduplication via event_id)
// Separate from /get/thank-you/ which fires paid_lead_conversion for Google Ads
// noindex: paid traffic only
// ==========================================================================
import { useEffect } from "react";
import { CheckCircle, Phone, Clock, Star, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/siteData";

const FB_PIXEL_ID = "129153980771695";

export default function FbThankYouLanding() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Read the event_id stored by FbQuoteForm for pixel/CAPI deduplication
    const fbEventId = sessionStorage.getItem("fb_event_id") || "";
    // Read test event code (stored by landing page if in test mode)
    const testEventCode = sessionStorage.getItem("fb_test_event_code") || undefined;

    // Helper to fire the Lead event (used whether pixel was pre-loaded or just injected)
    const fireLeadEvent = () => {
      const fbq = (window as any).fbq;
      if (!fbq) return;
      const eventOptions: Record<string, string> = { eventID: fbEventId };
      if (testEventCode) eventOptions.test_event_code = testEventCode;
      fbq("track", "Lead", {}, eventOptions);
    };

    // If fbq is already available (pixel was loaded on the landing page), fire immediately
    if ((window as any).fbq) {
      fireLeadEvent();
    } else {
      // Pixel not yet loaded — inject base code and fire Lead after it loads
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
      `;
      document.head.appendChild(script);
      // Fire Lead after a short delay to allow fbevents.js to load
      setTimeout(fireLeadEvent, 1500);
    }

    // Also push GTM event for any GTM-based pixel tags (deduplication)
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "fb_lead",
        fb_event_id: fbEventId,
        conversionSource: "fb_landing_page_form",
        pagePath: window.location.pathname,
      });
    }

    // Clean up sessionStorage
    sessionStorage.removeItem("fb_event_id");
    sessionStorage.removeItem("fb_test_event_code");
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
              <strong className="text-gray-700">{COMPANY.googleRating}★</strong>, {COMPANY.googleReviewCount.toLocaleString()} Google reviews
            </span>
            <span>Licensed &amp; Insured, WA {COMPANY.license}</span>
            <span>Serving Seattle since {COMPANY.founded}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
