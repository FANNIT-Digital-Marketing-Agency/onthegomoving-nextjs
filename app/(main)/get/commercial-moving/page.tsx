import type { Metadata } from "next";
import CommercialMovingLanding from "@/components/pages/landing/CommercialMovingLanding";

export const metadata: Metadata = {
  title: "Commercial Movers Seattle",
  description:
    "Office relocations and business moves across Greater Seattle. COI provided, after-hours available, flat-rate pricing. Call (425) 761-8500.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <CommercialMovingLanding />;
}
