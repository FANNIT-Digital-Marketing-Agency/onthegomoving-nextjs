import type { Metadata } from "next";
import SameDayMovers from "@/components/pages/landing/SameDayMovers";

export const metadata: Metadata = {
  title: "Same-Day Movers Seattle",
  description:
    "Need to move today or tomorrow? On The Go Moving has crews available for last-minute and same-day moves across Greater Seattle. Call (425) 761-8500.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <SameDayMovers />;
}
