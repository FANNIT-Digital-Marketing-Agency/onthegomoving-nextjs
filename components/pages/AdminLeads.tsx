"use client";

import { useState, useEffect, useCallback, Fragment } from "react";
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
import { RefreshCw, Search, Download, Lock, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";
import leadAttributionModule from "@/lib/leadAttribution.js";

const { attributionLabel, classifyLeadAttribution } = leadAttributionModule;

const ADMIN_KEY = "otgm-admin-2025";

interface Lead {
  id: string;
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
  message?: string | null;
  referrer?: string | null;
  firstLandingPage?: string | null;
  firstTouchAt?: string | null;
  source?: "db" | "netlify-forms";
}

function fullSiteUrl(pathOrUrl?: string | null) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `https://onthegomoving.com${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

const AdSourceBadge = ({ lead }: { lead: Lead }) => {
  const classification = classifyLeadAttribution(lead);
  if (classification === "google") {
    return (
      <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs font-semibold">
        Google Ads
      </Badge>
    );
  }
  if (classification === "meta") {
    return (
      <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200 text-xs font-semibold">
        Meta Ads
      </Badge>
    );
  }
  if (classification === "tagged") {
    return (
      <Badge className="bg-purple-100 text-purple-800 border-purple-200 text-xs font-semibold">
        Tagged campaign
      </Badge>
    );
  }

  return (
    <Badge className="bg-gray-50 text-gray-500 border-gray-200 text-xs">
      Unattributed
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
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [expandedLeadId, setExpandedLeadId] = useState<string | null>(null);

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

  const handleDelete = async (id: string) => {
    if (confirmDeleteId !== id) {
      setConfirmDeleteId(id);
      return;
    }
    setDeletingId(id);
    setConfirmDeleteId(null);
    try {
      const res = await fetch(
        `/.netlify/functions/delete-lead?key=${ADMIN_KEY}&id=${id}`,
        { method: "POST" }
      );
      if (!res.ok) throw new Error("Delete failed");
      setLeads((prev) => prev.filter((l) => l.id !== id));
      toast.success("Lead deleted");
    } catch {
      toast.error("Failed to delete lead");
    } finally {
      setDeletingId(null);
    }
  };

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
      (lead.moveType ?? "").toLowerCase().includes(q) ||
      (lead.utmSource ?? "").toLowerCase().includes(q) ||
      (lead.utmMedium ?? "").toLowerCase().includes(q) ||
      (lead.utmCampaign ?? "").toLowerCase().includes(q) ||
      (lead.utmContent ?? "").toLowerCase().includes(q) ||
      (lead.utmTerm ?? "").toLowerCase().includes(q) ||
      (lead.gclid ?? "").toLowerCase().includes(q) ||
      (lead.fbclid ?? "").toLowerCase().includes(q)
    );
  });

  const stats = {
    total: leads.length,
    googleAds: leads.filter((l) => classifyLeadAttribution(l) === "google").length,
    metaAds: leads.filter((l) => classifyLeadAttribution(l) === "meta").length,
    tagged: leads.filter((l) => classifyLeadAttribution(l) === "tagged").length,
    unattributed: leads.filter((l) => classifyLeadAttribution(l) === "unattributed").length,
  };

  const exportCSV = () => {
    if (!filtered.length) return;
    const headers = [
      "ID", "Name", "Phone", "Email", "Move Date", "Move Type", "Move Size",
      "From Zip", "To Zip", "Source", "Source Label", "Source Page",
      "UTM Source", "UTM Medium", "UTM Campaign", "UTM Content", "UTM Term", "GCLID", "FBCLID",
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
      attributionLabel(l),
      `"${l.sourceLabel ?? ""}"`,
      `"${l.sourcePage ?? ""}"`,
      l.utmSource ?? "",
      l.utmMedium ?? "",
      l.utmCampaign ?? "",
      l.utmContent ?? "",
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
            <p className="text-sm text-gray-500 mt-0.5">All quote form submissions with move, source, and campaign tracking</p>
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
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { label: "Total Leads", value: stats.total, color: "text-gray-900" },
            { label: "Google Ads", value: stats.googleAds, color: "text-blue-700" },
            { label: "Meta Ads", value: stats.metaAds, color: "text-indigo-700" },
            { label: "Tagged Other", value: stats.tagged, color: "text-purple-700" },
            { label: "Unattributed", value: stats.unattributed, color: "text-gray-700" },
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
            placeholder="Search by name, email, phone, source, campaign, or keyword..."
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
              <Table className="min-w-[1240px] table-fixed">
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="w-10" aria-label="Lead details" />
                    <TableHead className="w-[15%] text-xs font-semibold text-gray-600 uppercase tracking-wide">Name</TableHead>
                    <TableHead className="w-[17%] text-xs font-semibold text-gray-600 uppercase tracking-wide">Contact</TableHead>
                    <TableHead className="w-[22%] text-xs font-semibold text-gray-600 uppercase tracking-wide">Message</TableHead>
                    <TableHead className="w-[12%] text-xs font-semibold text-gray-600 uppercase tracking-wide">Ad Source</TableHead>
                    <TableHead className="w-[18%] text-xs font-semibold text-gray-600 uppercase tracking-wide">Attribution</TableHead>
                    <TableHead className="w-[10%] text-xs font-semibold text-gray-600 uppercase tracking-wide">Submitted</TableHead>
                    <TableHead className="w-[6%] text-xs font-semibold text-gray-600 uppercase tracking-wide">Record</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((lead) => {
                    const isExpanded = expandedLeadId === lead.id;
                    const message = lead.message || (lead.moveType
                      ? `${lead.moveType}${lead.moveSize ? `, ${lead.moveSize}` : ""}${lead.zipFrom || lead.zipTo ? `: ${lead.zipFrom || "—"} → ${lead.zipTo || "—"}` : ""}${lead.moveDate ? ` on ${lead.moveDate}` : ""}`
                      : "No message captured with this form submission.");
                    return (
                    <Fragment key={lead.id}>
                    <TableRow className="hover:bg-gray-50 transition-colors">
                      <TableCell className="whitespace-normal">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-gray-500"
                          onClick={() => setExpandedLeadId(isExpanded ? null : lead.id)}
                          aria-label={isExpanded ? `Collapse ${lead.fullName}` : `Expand ${lead.fullName}`}
                        >
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </Button>
                      </TableCell>

                      <TableCell className="whitespace-normal">
                        <div className="font-medium text-gray-900">{lead.fullName}</div>
                        <div className="text-xs text-gray-400">#{lead.id}</div>
                      </TableCell>

                      {/* Contact */}
                      <TableCell className="whitespace-normal">
                        <div className="text-sm text-gray-700">{lead.phone}</div>
                        <div className="text-xs text-gray-500">{lead.email}</div>
                      </TableCell>

                      <TableCell className="whitespace-normal">
                        <p className="text-sm leading-5 text-gray-700 line-clamp-3">{message}</p>
                      </TableCell>

                      <TableCell className="whitespace-normal">
                        <AdSourceBadge lead={lead} />
                      </TableCell>

                      <TableCell className="whitespace-normal">
                        <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Page</div>
                        <div className="text-xs text-gray-700 break-all">{lead.sourcePage || "Not captured"}</div>
                        {(lead.utmSource || lead.utmMedium) && (
                          <div className="mt-1 text-xs text-gray-400">{lead.utmSource || ""}{lead.utmSource && lead.utmMedium ? " / " : ""}{lead.utmMedium || ""}</div>
                        )}
                        <button type="button" onClick={() => setExpandedLeadId(isExpanded ? null : lead.id)} className="mt-1 text-xs font-medium text-blue-600 hover:underline">
                          {isExpanded ? "▲ less" : "▼ full details"}
                        </button>
                      </TableCell>

                      <TableCell className="whitespace-normal">
                        <div className="text-sm text-gray-700">{new Date(lead.createdAt).toLocaleDateString()}</div>
                        <div className="text-xs text-gray-400">{new Date(lead.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
                      </TableCell>

                      <TableCell className="whitespace-normal">
                        {lead.source === "netlify-forms" ? (
                          <span className="text-xs text-gray-400">Form record</span>
                        ) : confirmDeleteId === lead.id ? (
                          <div className="flex items-center gap-1">
                            <Button size="sm" variant="destructive" className="h-7 px-2 text-xs" onClick={() => handleDelete(lead.id)} disabled={deletingId === lead.id}>Confirm</Button>
                            <Button size="sm" variant="outline" className="h-7 px-2 text-xs" onClick={() => setConfirmDeleteId(null)}>Cancel</Button>
                          </div>
                        ) : (
                          <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-gray-400 hover:text-red-500 hover:bg-red-50" onClick={() => handleDelete(lead.id)} disabled={deletingId === lead.id} title="Delete lead">
                            {deletingId === lead.id ? <RefreshCw size={13} className="animate-spin" /> : <Trash2 size={13} />}
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>

                    {isExpanded && (
                      <TableRow className="bg-slate-50 hover:bg-slate-50">
                        <TableCell colSpan={8} className="p-0">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-5 border-y border-slate-100 px-10 py-6 text-sm lg:grid-cols-4">
                            <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Source</p><p className="mt-1 break-all text-gray-700">{lead.utmSource || "Not captured"}</p></div>
                            <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Medium</p><p className="mt-1 break-all text-gray-700">{lead.utmMedium || "Not captured"}</p></div>
                            <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Campaign</p><p className="mt-1 break-all text-gray-700">{lead.utmCampaign || "Not captured"}</p></div>
                            <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Content</p><p className="mt-1 break-all text-gray-700">{lead.utmContent || "Not captured"}</p></div>
                            <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Keyword</p><p className="mt-1 break-all text-gray-700">{lead.utmTerm || "Not captured"}</p></div>
                            <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Google Click ID</p><p className="mt-1 break-all text-gray-700">{lead.gclid || "Not captured"}</p></div>
                            <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Meta Click ID</p><p className="mt-1 break-all text-gray-700">{lead.fbclid || "Not captured"}</p></div>
                            <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">First landing URL</p><p className="mt-1 break-all text-blue-700">{fullSiteUrl(lead.firstLandingPage || lead.sourcePage) || "Not captured"}</p></div>
                            <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Referrer</p><p className="mt-1 break-all text-gray-700">{lead.referrer || "Not captured"}</p></div>
                            <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">First touch</p><p className="mt-1 text-gray-700">{lead.firstTouchAt ? new Date(lead.firstTouchAt).toLocaleString() : "Not captured"}</p></div>
                            <div><p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Move details</p><p className="mt-1 text-gray-700">{lead.moveType || "Not captured"}{lead.moveSize ? ` · ${lead.moveSize}` : ""}{lead.moveDate ? ` · ${lead.moveDate}` : ""}</p></div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                    </Fragment>
                    );
                  })}
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
