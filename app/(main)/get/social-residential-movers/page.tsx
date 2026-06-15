import type { Metadata } from "next";
import SocialResidentialMoversLanding from "@/components/pages/landing/SocialResidentialMoversLanding";

export const metadata: Metadata = {
  title: "Residential Movers in Seattle | On The Go Moving",
  description:
    "Family-owned residential movers serving Greater Seattle since 2009. Flat-rate pricing, 4.8★ rated, licensed & insured. Call (425) 761-8500.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <SocialResidentialMoversLanding />;
}
