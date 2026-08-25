import type { Metadata } from "next";
import ResidentialMoving from "@/components/pages/ResidentialMoving";
import PrimaryImageSchema from "@/components/PrimaryImageSchema";
import primaryImages from "@/lib/primaryImages";

const { absoluteImageUrl, getServicePrimaryImage } = primaryImages;
const primaryImage = absoluteImageUrl(getServicePrimaryImage("residential-moving"));

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
        id="residential-schema"
        pageUrl="https://onthegomoving.com/residential-moving/"
        pageName="Seattle Residential Movers | On The Go Moving"
        imageUrl={primaryImage}
        imageAlt="On The Go Moving crew loading furniture onto a moving truck"
      />
      <ResidentialMoving />
    </>
  );
}
