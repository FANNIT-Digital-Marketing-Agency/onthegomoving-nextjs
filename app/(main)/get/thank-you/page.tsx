import type { Metadata } from "next";
import ThankYouLanding from "@/components/pages/landing/ThankYouLanding";

export const metadata: Metadata = {
  title: "Thank You, Quote Request Received",
  description: "Your quote request has been received. On The Go Moving & Storage will contact you within 1 business hour.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <ThankYouLanding />;
}
