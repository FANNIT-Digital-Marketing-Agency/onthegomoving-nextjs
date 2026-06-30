import type { Metadata } from "next";
import AboutUs from "@/components/pages/AboutUs";


export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about On The Go Moving & Storage, Seattle's trusted movers since 2009. Licensed, insured, and committed to stress-free moves across the Puget Sound.",
  alternates: {
    canonical: "https://onthegomoving.com/about-us/",
  },
  openGraph: {
    title: "About Us",
    description: "Learn about On The Go Moving & Storage, Seattle's trusted movers since 2009. Licensed, insured, and committed to stress-free moves across the Puget Sound.",
    url: "https://onthegomoving.com/about-us/",
  },
};

export default function Page() {
  return <AboutUs />;
}
