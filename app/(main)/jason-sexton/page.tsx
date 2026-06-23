import type { Metadata } from "next";
import JasonSexton from "@/components/pages/JasonSexton";

export const metadata: Metadata = {
  title: "Jason Sexton — Founder & Owner",
  description:
    "Meet Jason Sexton, founder and owner of On The Go Moving & Storage since 2009. 15+ years of experience, 25,000+ moves completed, licensed & insured in Washington State.",
  alternates: {
    canonical: "https://onthegomoving.com/jason-sexton/",
  },
  openGraph: {
    title: "Jason Sexton — Founder & Owner",
    description:
      "Meet Jason Sexton, founder and owner of On The Go Moving & Storage since 2009. 15+ years of experience, 25,000+ moves completed, licensed & insured in Washington State.",
    url: "https://onthegomoving.com/jason-sexton/",
    type: "profile",
    images: [
      {
        url: "https://onthegomoving.com/assets/jason-sexton-headshot.jpg",
        width: 720,
        height: 960,
        alt: "Jason Sexton — Founder and Owner of On The Go Moving & Storage",
      },
    ],
  },
};

export default function Page() {
  return <JasonSexton />;
}
