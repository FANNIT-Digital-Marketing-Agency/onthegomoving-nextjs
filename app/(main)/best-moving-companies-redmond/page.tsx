import type { Metadata } from "next";
import BestMovingCompaniesRedmond from "@/components/pages/BestMovingCompaniesRedmond";

export const metadata: Metadata = {
  title: "10 Best Moving Companies in Redmond, WA (2026), Honest Comparison",
  description:
    "Compare the best moving companies in Redmond, WA with real pricing, ratings, and honest pros & cons. Updated for 2026. On The Go Moving rated #1, the only major mover based in Redmond.",
  alternates: {
    canonical: "https://onthegomoving.com/best-moving-companies-redmond/",
  },
  openGraph: {
    title: "10 Best Moving Companies in Redmond, WA (2026)",
    description:
      "Compare the best moving companies in Redmond, WA with real pricing, ratings, and honest pros & cons. On The Go Moving rated #1, based in Redmond.",
    url: "https://onthegomoving.com/best-moving-companies-redmond/",
    type: "article",
  },
};

export default function Page() {
  return <BestMovingCompaniesRedmond />;
}
