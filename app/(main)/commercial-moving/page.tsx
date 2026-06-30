import type { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";


export const metadata: Metadata = {
  title: "Commercial Moving Services in Seattle",
  description: "Expert commercial movers for Seattle-area businesses. Office relocations, equipment moves, and business storage. Minimal downtime. Free quotes, (425) 761-8500.",
  alternates: {
    canonical: "https://onthegomoving.com/commercial-moving/",
  },
  openGraph: {
    title: "Commercial Moving Services in Seattle",
    description: "Expert commercial movers for Seattle-area businesses. Office relocations, equipment moves, and business storage. Minimal downtime. Free quotes, (425) 761-8500.",
    url: "https://onthegomoving.com/commercial-moving/",
  },
};

export default function Page() {
  return <ServicePage slug="commercial-moving" />;
}
