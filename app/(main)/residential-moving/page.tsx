import type { Metadata } from "next";
import ResidentialMoving from "@/components/pages/ResidentialMoving";


export const metadata: Metadata = {
  title: "Residential Moving Services in Seattle",
  description: "Professional residential movers serving Seattle, Bellevue, Redmond & the Puget Sound. Full-service home moving with packing, loading, and delivery. Free quotes, (425) 761-8500.",
  alternates: {
    canonical: "https://onthegomoving.com/residential-moving/",
  },
  openGraph: {
    title: "Residential Moving Services in Seattle",
    description: "Professional residential movers serving Seattle, Bellevue, Redmond & the Puget Sound. Full-service home moving with packing, loading, and delivery. Free quotes, (425) 761-8500.",
    url: "https://onthegomoving.com/residential-moving/",
  },
};

export default function Page() {
  return <ResidentialMoving />;
}
