import type { Metadata } from "next";
import LeadsDashboard from "@/components/pages/LeadsDashboard";

export const metadata: Metadata = {
  title: "Leads Dashboard | On The Go Moving Admin",
  description: "Internal admin dashboard, form submissions by source page.",
  robots: { index: false, follow: false },
};

export default function AdminLeadsPage() {
  return <LeadsDashboard />;
}
