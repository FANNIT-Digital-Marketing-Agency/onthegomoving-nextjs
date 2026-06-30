"use client";
// ==========================================================================
// ON THE GO MOVING — /get/ Layout Wrapper
// Used exclusively for Google Ads landing pages under /get/*
// - Uses HeaderLanding (logo + phone only, no nav)
// - Uses FooterLanding (simplified: logo, contact, license)
// - Mobile sticky bottom CTA bar (phone + GET FREE QUOTE button)
// - Desktop sticky side CTA (appears after scrolling past hero, right edge)
// ==========================================================================
import { useEffect, useState } from "react";
import HeaderLanding from "@/components/layout/HeaderLanding";
import FooterLanding from "@/components/layout/FooterLanding";
import { COMPANY } from "@/lib/siteData";
import { pushPhoneClickEvent } from "@/components/QuoteForm";
import { Phone } from "lucide-react";

export default function GetLayout({ children }: { children: React.ReactNode }) {
  // Show the desktop sticky CTA after scrolling 500px (past the hero)
  const [showDesktopCta, setShowDesktopCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowDesktopCta(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderLanding />

      <main className="flex-1 pb-20 sm:pb-0">
        {children}
      </main>

      <FooterLanding />

      {/* ── Mobile sticky bottom CTA bar, visible only on small screens ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-lg">
        <div className="flex items-center gap-2 px-4 py-3">
          <a
            href={COMPANY.phoneHref}
            onClick={() => pushPhoneClickEvent("mobile-sticky-bar")}
            className="flex-1 flex items-center justify-center gap-2 bg-[#1a2e0a] text-white font-bold py-3 rounded-lg text-sm"
          >
            <Phone size={15} />
            {COMPANY.phone}
          </a>
          <a
            href="#quote-form"
            className="flex-1 flex items-center justify-center gap-1 bg-[#75aa11] text-white font-bold py-3 rounded-lg text-sm"
          >
            Get Free Quote
          </a>
        </div>
      </div>

      {/* ── Desktop sticky side CTA, visible only on sm+ screens, after scroll ── */}
      <div
        className={[
          "hidden sm:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-0",
          "transition-all duration-300",
          showDesktopCta ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none",
        ].join(" ")}
      >
        {/* Phone button, vertical text rotated */}
        <a
          href={COMPANY.phoneHref}
          onClick={() => pushPhoneClickEvent("desktop-sticky-side")}
          className="bg-[#1a2e0a] text-white flex items-center gap-2 px-3 py-4 rounded-l-xl shadow-xl hover:bg-[#2a4a14] transition-colors group"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          aria-label={`Call ${COMPANY.phone}`}
        >
          <Phone size={14} className="rotate-90 flex-shrink-0" />
          <span className="text-xs font-bold tracking-wide">{COMPANY.phone}</span>
        </a>

        {/* Get Quote button */}
        <a
          href="#quote-form"
          className="bg-[#75aa11] text-white flex items-center justify-center px-3 py-4 rounded-bl-xl shadow-xl hover:bg-[#5e8a0d] transition-colors"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="text-xs font-bold tracking-wide">Get Quote</span>
        </a>
      </div>
    </div>
  );
}
