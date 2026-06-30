// ==========================================================================
// ON THE GO MOVING — FB Landing Page Footer (No Phone)
// Simplified footer: logo, email, address, license info only.
// No phone number — FB landing pages use form fills only.
// ==========================================================================
import { Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/siteData";
import { BRAND_IMAGES } from "@/lib/brandImages";

export default function FooterLandingFb() {
  return (
    <footer className="bg-[#1a2e0a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <img
              src={BRAND_IMAGES.logo}
              alt="On The Go Moving & Storage"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm text-center sm:text-left max-w-xs">
              Seattle's most trusted moving company since {COMPANY.founded}. Serving the Greater Seattle Eastside.
            </p>
          </div>

          {/* Contact info, email and address only, no phone */}
          <div className="flex flex-col gap-3 text-sm text-gray-300 items-center sm:items-end">
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-[#75aa11] transition-colors font-semibold text-white text-base">
              <Mail size={16} />
              {COMPANY.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {COMPANY.address}
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved. | WA License: {COMPANY.license} | USDOT# {COMPANY.usdot}</p>
          <div className="flex gap-4">
            <a href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
