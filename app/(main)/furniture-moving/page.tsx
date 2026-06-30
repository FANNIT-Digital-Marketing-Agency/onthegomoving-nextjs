import type { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";


export const metadata: Metadata = {
  title: "Furniture Moving Services in Seattle",
  description: "Professional furniture movers in Seattle and the Puget Sound. We move, assemble, and disassemble furniture with care. Free quotes, (425) 761-8500.",
  alternates: {
    canonical: "https://onthegomoving.com/furniture-moving/",
  },
  openGraph: {
    title: "Furniture Moving Services in Seattle",
    description: "Professional furniture movers in Seattle and the Puget Sound. We move, assemble, and disassemble furniture with care. Free quotes, (425) 761-8500.",
    url: "https://onthegomoving.com/furniture-moving/",
  },
};

export default function Page() {
  return <ServicePage slug="furniture-moving" />;
}
