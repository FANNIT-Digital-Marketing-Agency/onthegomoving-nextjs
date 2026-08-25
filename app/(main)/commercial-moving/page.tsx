import type { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";
import PrimaryImageSchema from "@/components/PrimaryImageSchema";
import primaryImages from "@/lib/primaryImages";

const { absoluteImageUrl, getServicePrimaryImage } = primaryImages;
const primaryImage = absoluteImageUrl(getServicePrimaryImage("commercial-moving"));

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
    images: [{ url: primaryImage }],
  },
  twitter: {
    card: "summary_large_image",
    images: [primaryImage],
  },
};

export default function Page() {
  return (
    <>
      <PrimaryImageSchema
        id="service-page-schema"
        pageUrl="https://onthegomoving.com/commercial-moving/"
        pageName="Commercial Moving Services in Seattle"
        imageUrl={primaryImage}
        imageAlt="On The Go Moving commercial moving fleet"
      />
      <ServicePage slug="commercial-moving" />
    </>
  );
}
