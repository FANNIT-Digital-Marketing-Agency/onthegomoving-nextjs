"use client";

import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RefreshCw, Search, Download, Lock } from "lucide-react";

const ADMIN_KEY = "otgm-admin-2025";

interface Lead {
  id: number;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  moveDate: string;
  moveType: string;
  moveSize: string;
  zipFrom: string;
  zipTo: string;
  sourcePage: string;
  sourceLabel: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  gclid: string | null;
  fbclid: string | null;
}

const AdSourceBadge = ({ lead }: { lead: Lead }) => {
  const hasGclid = !!lead.gclid;
  const hasFbclid = !!lead.fbclid;
  const src = (lead.utmSource || "").toLowerCase();
  const med = (lead.utmMedium || "").toLowerCase();

  if (hasGclid || src.includes("google") || med === "cpc" || med === "ppc") {
    return (
      <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs font-semibold">
        Google Ads
      </Badge>
    );
  }
  if (hasFbclid || src.includes("meta") || src.includes("facebook") || src.includes("instagram") || med === "paid_social") {
    return (
      <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 text-xs font-semibold">
        Meta Ads
      </Badge>
    );
  }
  if (src && med) {
    return (
      <Badge className="bg-purple-100 text-purple-800 border-purple-200 text-xs font-semibold">
        {src}/{med}
      </Badge>
    );
  }
  if (src) {
    return (
      <Badge className="bg-gray-100 text-gray-700 border-gray-200 text-xs">
        {src}
      </Badge>
    );
  }
  return (
    <Badge className="bg-gray-50 text-gray-400 border-gray-200 text-xs">
      Organic
    </Badge>
  );
};

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [authed, setAuthed] = useState(false);
  const [keyInput, setKeyInput] = useState("");
  const [keyError, setKeyError] = useState(false);

  const fetchLeads = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `/.netlify/functions/get-leads?key=${ADMIN_KEY}&per_page=500&days=365`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setLeads(data.submissions || []);
    } catch {
      setLeads([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Check URL param for key
    const params = new URLSearchParams(window.location.search);
    if (params.get("key") === ADMIN_KEY) {
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (authed) fetchLeads();
  }, [authed, fetchLeads]);

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyInput === ADMIN_KEY) {
      setAuthed(true);
      setKeyError(false);
    } else {
      setKeyError(true);
    }
  };

  const filtered = leads.filter((lead) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      lead.fullName.toLowerCase().includes(q) ||
      lead.email.toLowerCase().includes(q) ||
      lead.phone.includes(q) ||
      (lead.sourceLabel ?? "").toLowerCase().includes(q) ||
      (lead.moveType ?? "").toLowerCase().includes(q)
    );
  });

  const stats = {
    total: leads.length,
    googleAds: leads.filter((l) => !!l.gclid || (l.utmSource || "").toLowerCase().includes("google") || ["cpc","ppc"].includes((l.utmMedium || "").toLowerCase())).length,
    metaAds: leads.filter((l) => !!l.fbclid || ["meta","facebook","instagram"].some(s => (l.utmSource || "").toLowerCase().includes(s)) || (l.utmMedium || "").toLowerCase() === "paid_social").length,
    organic: leads.filter((l) => !l.gclid && !l.fbclid && !l.utmSource).length,
  };

  const exportCSV = () => {
    if (!filtered.length) return;
    const headers = [
      "ID", "Name", "Phone", "Email", "Move Date", "Move Type", "Move Size",
      "From Zip", "To Zip", "Source", "Source Label", "Source Page",
      "UTM Source", "UTM Medium", "UTM Campaign", "UTM Term", "GCLID", "FBCLID",
      "Submitted At"
    ];
    const rows = filtered.map((l) => [
      l.id,
      `"${l.fullName}"`,
      l.phone,
      l.email,
      l.moveDate ?? "",
      l.moveType ?? "",
      l.moveSize ?? "",
      l.zipFrom ?? "",
      l.zipTo ?? "",
      l.gclid ? "Google Ads" : l.fbclid ? "Meta Ads" : l.utmSource ?? "Organic",
      `"${l.sourceLabel ?? ""}"`,
      `"${l.sourcePage ?? ""}"`,
      l.utmSource ?? "",
      l.utmMedium ?? "",
      l.utmCampaign ?? "",
      l.utmTerm ?? "",
      l.gclid ?? "",
      l.fbclid ?? "",
      new Date(l.createdAt).toLocaleString(),
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Auth gate
  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl border border-gray-200 p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Lock size={18} className="text-gray-500" />
            <h1 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Admin Access
            </h1>
          </div>
          <form onSubmit={handleKeySubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin key"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              className={keyError ? "border-red-400" : ""}
            />
            {keyError && <p className="text-xs text-red-500">Incorrect key. Try again.</p>}
            <Button type="submit" className="w-full">Access Dashboard</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Lead Submissions
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">All quote form submissions — On The Go Moving</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchLeads} disabled={isLoading} className="gap-1.5">
              <RefreshCw size={14} className={isLoading ? "animate-spin" : ""} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={exportCSV} disabled={!filtered.length} className="gap-1.5">
              <Download size={14} />
              Export CSV
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Leads", value: stats.total, color: "text-gray-900" },
            { label: "Google Ads", value: stats.googleAds, color: "text-blue-700" },
            { label: "Meta Ads", value: stats.metaAds, color: "text-indigo-700" },
            { label: "Organic", value: stats.organic, color: "text-green-700" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
              <p className={`text-3xl font-bold mt-1 ${s.color}`} style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search by name, email, phone, move type, or source..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-16 text-gray-400">
              <RefreshCw size={20} className="animate-spin mr-2" /> Loading leads...
            </div>
          ) : !filtered.length ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <p className="font-medium">{search ? "No leads match your search" : "No leads yet"}</p>
              <p className="text-sm mt-1">{search ? "Try a different search term" : "Form submissions will appear here"}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Name</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Contact</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Move Details</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Ad Source</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Submitted</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((lead) => (
                    <TableRow key={lead.id} className="hover:bg-gray-50 transition-colors">

                      {/* Name */}
                      <TableCell>
                        <div className="font-medium text-gray-900">{lead.fullName}</div>
                        <div className="text-xs text-gray-400">#{lead.id}</div>
                      </TableCell>

                      {/* Contact */}
                      <TableCell>
                        <div className="text-sm text-gray-700">{lead.phone}</div>
                        <div className="text-xs text-gray-500">{lead.email}</div>
                      </TableCell>

                      {/* Move Details */}
                      <TableCell>
                        <div className="text-sm text-gray-700 capitalize">{lead.moveType || "-"}</div>
                        {lead.moveSize && (
                          <div className="text-xs text-gray-500">{lead.moveSize}</div>
                        )}
                        <div className="text-xs text-gray-500">
                          {lead.zipFrom && lead.zipTo
                            ? `${lead.zipFrom} → ${lead.zipTo}`
                            : lead.zipFrom || lead.zipTo || ""}
                        </div>
                        {lead.moveDate && (
                          <div className="text-xs text-gray-400">{lead.moveDate}</div>
                        )}
                      </TableCell>

                      {/* Ad Source */}
                      <TableCell>
                        <div className="mb-1">
                          <AdSourceBadge lead={lead} />
                        </div>
                        {lead.sourceLabel && (
                          <div className="text-xs text-gray-600 font-medium">{lead.sourceLabel}</div>
                        )}
                        <div className="text-xs text-gray-400 truncate max-w-[180px]" title={lead.sourcePage}>
                          {lead.sourcePage}
                        </div>
                        {lead.utmCampaign && (
                          <div className="text-xs text-gray-400 truncate max-w-[180px]" title={lead.utmCampaign}>
                            Campaign: {lead.utmCampaign}
                          </div>
                        )}
                        {lead.utmTerm && (
                          <div className="text-xs text-gray-400 truncate max-w-[180px]" title={lead.utmTerm}>
                            Keyword: {lead.utmTerm}
                          </div>
                        )}
                      </TableCell>

                      {/* Submitted */}
                      <TableCell>
                        <div className="text-sm text-gray-700">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-gray-400">
                          {new Date(lead.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </div>
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>

        {filtered.length > 0 && (
          <p className="text-xs text-gray-400 text-center">
            Showing {filtered.length} of {stats.total} leads
          </p>
        )}
      </div>
    </div>
  );
}
