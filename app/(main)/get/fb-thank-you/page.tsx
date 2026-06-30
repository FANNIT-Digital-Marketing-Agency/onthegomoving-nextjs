import type { Metadata } from "next";
import FbThankYouLanding from "@/components/pages/landing/FbThankYouLanding";

export const metadata: Metadata = {
  title: "Thank You, On The Go Moving",
  description: "Your quote request has been received. We'll be in touch within 1 business hour.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <FbThankYouLanding />;
}
