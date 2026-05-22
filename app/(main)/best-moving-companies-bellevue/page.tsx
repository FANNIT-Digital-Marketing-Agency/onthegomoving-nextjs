import type { Metadata } from "next";
import BestMovingCompaniesBellevue from "@/components/pages/BestMovingCompaniesBellevue";

export const metadata: Metadata = {
  title: "10 Best Moving Companies in Bellevue, WA (2026) — Honest Comparison",
  description:
    "Compare the best moving companies in Bellevue, WA with real pricing, ratings, and honest pros & cons. Updated for 2026. On The Go Moving rated #1 for value and reliability on the Eastside.",
  alternates: {
    canonical: "https://onthegomoving.com/best-moving-companies-bellevue/",
  },
  openGraph: {
    title: "10 Best Moving Companies in Bellevue, WA (2026)",
    description:
      "Compare the best moving companies in Bellevue, WA with real pricing, ratings, and honest pros & cons. On The Go Moving rated #1 for value and reliability on the Eastside.",
    url: "https://onthegomoving.com/best-moving-companies-bellevue/",
    type: "article",
  },
};

export default function Page() {
  return <BestMovingCompaniesBellevue />;
}
