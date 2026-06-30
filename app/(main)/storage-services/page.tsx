import type { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";


export const metadata: Metadata = {
  title: "Moving Storage Services in Seattle",
  description: "Secure storage vaults at our Redmond facility. Short and long-term storage for your belongings during a move. Climate-controlled warehouse. Free quotes, (425) 761-8500.",
  alternates: {
    canonical: "https://onthegomoving.com/storage-services/",
  },
  openGraph: {
    title: "Moving Storage Services in Seattle",
    description: "Secure storage vaults at our Redmond facility. Short and long-term storage for your belongings during a move. Climate-controlled warehouse. Free quotes, (425) 761-8500.",
    url: "https://onthegomoving.com/storage-services/",
  },
};

export default function Page() {
  return <ServicePage slug="storage-services" />;
}
