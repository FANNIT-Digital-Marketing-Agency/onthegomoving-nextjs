import type { Metadata } from "next";
import TermsOfService from "@/components/pages/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for On The Go Moving & Storage. Understand your rights and responsibilities when using our website and moving services.",
  alternates: {
    canonical: "https://onthegomoving.com/terms-of-service/",
  },
  openGraph: {
    title: "Terms of Service",
    description: "Read the Terms of Service for On The Go Moving & Storage.",
    url: "https://onthegomoving.com/terms-of-service/",
  },
};

export default function Page() {
  return <TermsOfService />;
}
