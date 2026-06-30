import type { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";


export const metadata: Metadata = {
  title: "Office Moving Services in Seattle",
  description: "Professional office movers in Seattle and the Puget Sound. We minimize business downtime with efficient, organized office relocations. Free quotes, (425) 761-8500.",
  alternates: {
    canonical: "https://onthegomoving.com/office-moving/",
  },
  openGraph: {
    title: "Office Moving Services in Seattle",
    description: "Professional office movers in Seattle and the Puget Sound. We minimize business downtime with efficient, organized office relocations. Free quotes, (425) 761-8500.",
    url: "https://onthegomoving.com/office-moving/",
  },
};

export default function Page() {
  return <ServicePage slug="office-moving" />;
}
