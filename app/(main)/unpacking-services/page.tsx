import type { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";


export const metadata: Metadata = {
  title: "Unpacking Services in Seattle",
  description: "Professional unpacking services in Seattle and the Puget Sound. We unpack, organize, and set up your new home after the move. Free quotes, (425) 761-8500.",
  alternates: {
    canonical: "https://onthegomoving.com/unpacking-services/",
  },
  openGraph: {
    title: "Unpacking Services in Seattle",
    description: "Professional unpacking services in Seattle and the Puget Sound. We unpack, organize, and set up your new home after the move. Free quotes, (425) 761-8500.",
    url: "https://onthegomoving.com/unpacking-services/",
  },
};

export default function Page() {
  return <ServicePage slug="unpacking-services" />;
}
