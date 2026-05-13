import type { Metadata } from "next";
import SitemapPage from "@/components/pages/SitemapPage";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse the complete sitemap for On The Go Moving & Storage. Find all pages including services, locations, blog posts, and more.",
  alternates: {
    canonical: "https://onthegomoving.com/sitemap/",
  },
  openGraph: {
    title: "Sitemap",
    description: "Browse the complete sitemap for On The Go Moving & Storage.",
    url: "https://onthegomoving.com/sitemap/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SitemapPage />;
}
