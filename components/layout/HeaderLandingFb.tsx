"use client";
// ==========================================================================
// ON THE GO MOVING — FB Landing Page Header (No Phone)
// Logo only — no phone number, no nav links.
// Used exclusively on /get/fb-* pages to force form fills (phone not trackable via FB Ads).
// ==========================================================================
import { BRAND_IMAGES } from "@/lib/brandImages";
import { COMPANY } from "@/lib/siteData";
import { ClipboardList } from "lucide-react";

export default function HeaderLandingFb() {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      {/* Top trust bar */}
      <div className="bg-[#1a2e0a] text-white text-xs py-1.5 text-center tracking-wide">
        Licensed &amp; Insured in WA &nbsp;|&nbsp; HG-064180 &nbsp;|&nbsp; USDOT# {COMPANY.usdot} &nbsp;|&nbsp; 5-Star Rated Crew
      </div>

      {/* Main header row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo, no link to avoid navigation away */}
        <img
          src={BRAND_IMAGES.logo}
          alt="On The Go Moving & Storage"
          className="h-10 w-auto"
        />

        {/* Form CTA instead of phone */}
        <a
          href="#quote-form"
          className="flex items-center gap-2 bg-[#75aa11] hover:bg-[#5e8a0d] text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm sm:text-base"
        >
          <ClipboardList size={16} className="flex-shrink-0" />
          <span>Get Free Quote</span>
        </a>
      </div>
    </header>
  );
}
