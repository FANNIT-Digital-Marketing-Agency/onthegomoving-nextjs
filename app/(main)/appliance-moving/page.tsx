import type { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";


export const metadata: Metadata = {
  title: "Appliance Moving Services in Seattle",
  description: "Professional appliance movers in Seattle and the Puget Sound. We safely move refrigerators, washers, dryers, and more. Free quotes, (425) 761-8500.",
  alternates: {
    canonical: "https://onthegomoving.com/appliance-moving/",
  },
  openGraph: {
    title: "Appliance Moving Services in Seattle",
    description: "Professional appliance movers in Seattle and the Puget Sound. We safely move refrigerators, washers, dryers, and more. Free quotes, (425) 761-8500.",
    url: "https://onthegomoving.com/appliance-moving/",
  },
};

export default function Page() {
  return <ServicePage slug="appliance-moving" />;
}
