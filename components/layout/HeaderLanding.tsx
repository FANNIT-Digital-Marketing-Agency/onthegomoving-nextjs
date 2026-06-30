"use client";
// ==========================================================================
// ON THE GO MOVING — Landing Page Header (Paid Traffic)
// Stripped-down header: logo + phone number only. No nav links.
// Used exclusively on /get/* pages to keep paid traffic focused on conversion.
// ==========================================================================
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/siteData";
import { BRAND_IMAGES } from "@/lib/brandImages";

export default function HeaderLanding() {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      {/* Top trust bar */}
      <div className="bg-[#1a2e0a] text-white text-xs py-1.5 text-center tracking-wide">
        Licensed &amp; Insured in WA &nbsp;|&nbsp; HG-064180 &nbsp;|&nbsp; USDOT# {COMPANY.usdot} &nbsp;|&nbsp; 5-Star Rated Crew
      </div>

      {/* Main header row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" aria-label="On The Go Moving & Storage, Home">
          <img
            src={BRAND_IMAGES.logo}
            alt="On The Go Moving & Storage"
            className="h-10 w-auto"
          />
        </a>

        {/* Phone CTA */}
        <a
          href={COMPANY.phoneHref}
          className="flex items-center gap-2 bg-[#75aa11] hover:bg-[#5e8a0d] text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm sm:text-base"
        >
          <Phone size={16} className="flex-shrink-0" />
          <span>{COMPANY.phone}</span>
        </a>
      </div>
    </header>
  );
}
