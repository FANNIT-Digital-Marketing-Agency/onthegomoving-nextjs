import type { Metadata } from "next";
import BestMovingCompaniesSeattle from "@/components/pages/BestMovingCompaniesSeattle";

export const metadata: Metadata = {
  title: "10 Best Moving Companies in Seattle, WA (2025) — Honest Comparison",
  description:
    "Compare the best moving companies in Seattle with real pricing, ratings, and honest pros & cons. Updated for 2025. On The Go Moving rated #1 for value and reliability.",
  alternates: {
    canonical: "https://onthegomoving.com/best-moving-companies-seattle/",
  },
  openGraph: {
    title: "10 Best Moving Companies in Seattle, WA (2025) — Honest Comparison",
    description:
      "Compare the best moving companies in Seattle with real pricing, ratings, and honest pros & cons. Updated for 2025. On The Go Moving rated #1 for value and reliability.",
    url: "https://onthegomoving.com/best-moving-companies-seattle/",
    type: "article",
  },
};

export default function Page() {
  return <BestMovingCompaniesSeattle />;
}
