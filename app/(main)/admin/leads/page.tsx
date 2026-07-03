import type { Metadata } from "next";
import AdminLeads from "@/components/pages/AdminLeads";

export const metadata: Metadata = {
  title: "Leads Dashboard | On The Go Moving Admin",
  description: "Internal admin dashboard, form submissions by source page.",
  robots: { index: false, follow: false },
};

export default function AdminLeadsPage() {
  return <AdminLeads />;
}
