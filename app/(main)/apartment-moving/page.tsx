import type { Metadata } from "next";
import ServicePage from "@/components/pages/ServicePage";
import PrimaryImageSchema from "@/components/PrimaryImageSchema";
import primaryImages from "@/lib/primaryImages";

const { absoluteImageUrl, getServicePrimaryImage } = primaryImages;
const primaryImage = absoluteImageUrl(getServicePrimaryImage("apartment-moving"));

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
        pageUrl="https://onthegomoving.com/apartment-moving/"
        pageName="Apartment Moving Services in Seattle"
        imageUrl={primaryImage}
        imageAlt="On The Go Moving crew loading furniture onto a moving truck ramp"
      />
      <ServicePage slug="apartment-moving" />
    </>
  );
}
