import type { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";


export const metadata: Metadata = {
  title: "Apartment Moving Services in Seattle",
  description: "Experienced apartment movers in Seattle, Bellevue, and the Puget Sound. We navigate stairs, elevators, and tight spaces. Free quotes, (425) 761-8500.",
  alternates: {
    canonical: "https://onthegomoving.com/apartment-moving/",
  },
  openGraph: {
    title: "Apartment Moving Services in Seattle",
    description: "Experienced apartment movers in Seattle, Bellevue, and the Puget Sound. We navigate stairs, elevators, and tight spaces. Free quotes, (425) 761-8500.",
    url: "https://onthegomoving.com/apartment-moving/",
  },
};

export default function Page() {
  return <ServicePage slug="apartment-moving" />;
}
