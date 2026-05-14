"use client";

// ==========================================================================
// ON THE GO MOVING — Leads Dashboard
// Client-side admin page that fetches form submissions from the
// /.netlify/functions/get-leads proxy and displays them ranked by source page.
//
// Access: /admin/leads/?key=otgm-admin-2025
// The ?key= param is passed to the Netlify Function for auth.
// ==========================================================================

import { useState, useEffect, useCallback } from "react";
import {
  BarChart2,
  RefreshCw,
  Lock,
  Users,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
} from "lucide-react";

interface Lead {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  moveDate: string;
  zipFrom: string;
  zipTo: string;
  moveType: string;
  moveSize: string;
  wantsStorage: string;
  sourcePage: string;
  sourceLabel: string;
  referrer: string;
  ip: string;
  userAgent: string;
}

interface SourceGroup {
  sourcePage: string;
  count: number;
  leads: Lead[];
}

const ADMIN_KEY_STORAGE = "otgm_admin_key";

function formatDate(iso: string) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatTime(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}

function moveTypeBadge(type: string) {
  const map: Record<string, string> = {
    apartment: "bg-blue-100 text-blue-700",
    house: "bg-green-100 text-green-700",
    commercial: "bg-purple-100 text-purple-700",
  };
  return map[type] || "bg-gray-100 text-gray-600";
}

export default function LeadsDashboard() {
  const [adminKey, setAdminKey] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastFetched, setLastFetched] = useState<Date | null>(null);
  const [expandedSource, setExpandedSource] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"bySource" | "allLeads">("bySource");
  const [sortField, setSortField] = useState<"createdAt" | "fullName" | "sourcePage">("createdAt");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [filterMoveType, setFilterMoveType] = useState("");

  // Load saved key from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem(ADMIN_KEY_STORAGE);
    if (saved) setAdminKey(saved);
  }, []);

  const fetchLeads = useCallback(async (key: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/.netlify/functions/get-leads?key=${encodeURIComponent(key)}&per_page=100`);
      if (res.status === 401) {
        setError("Invalid admin key. Please try again.");
        setAdminKey("");
        sessionStorage.removeItem(ADMIN_KEY_STORAGE);
        return;
      }
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data = await res.json();
      setLeads(data.submissions || []);
      setLastFetched(new Date());
    } catch (err: any) {
      setError(err.message || "Failed to load leads.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-fetch when key is set
  useEffect(() => {
    if (adminKey) fetchLeads(adminKey);
  }, [adminKey, fetchLeads]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem(ADMIN_KEY_STORAGE, keyInput);
    setAdminKey(keyInput);
  };

  // Group leads by source page
  const sourceGroups: SourceGroup[] = (() => {
    const map = new Map<string, Lead[]>();
    leads.forEach((lead) => {
      const key = lead.sourcePage || "/";
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(lead);
    });
    return Array.from(map.entries())
      .map(([sourcePage, ls]) => ({ sourcePage, count: ls.length, leads: ls }))
      .sort((a, b) => b.count - a.count);
  })();

  // Stats
  const totalLeads = leads.length;
  const thisWeek = leads.filter((l) => {
    const d = new Date(l.createdAt);
    const now = new Date();
    const diff = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);
    return diff <= 7;
  }).length;
  const moveTypes = ["apartment", "house", "commercial"];
  const moveTypeCounts = moveTypes.map((t) => ({
    type: t,
    count: leads.filter((l) => l.moveType === t).length,
  }));

  // Filtered + sorted leads for the all-leads tab
  const filteredLeads = leads
    .filter((l) => !filterMoveType || l.moveType === filterMoveType)
    .sort((a, b) => {
      const va = a[sortField] || "";
      const vb = b[sortField] || "";
      return sortDir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
    });

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortField(field); setSortDir("desc"); }
  };

  const exportCSV = () => {
    const headers = ["Date", "Name", "Phone", "Email", "Move Date", "From", "To", "Type", "Size", "Source Page", "Source Label"];
    const rows = leads.map((l) => [
      formatDate(l.createdAt),
      l.fullName,
      l.phone,
      l.email,
      l.moveDate,
      l.zipFrom,
      l.zipTo,
      l.moveType,
      l.moveSize,
      l.sourcePage,
      l.sourceLabel,
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${(c || "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `otgm-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── Login Screen ──────────────────────────────────────────────────────────
  if (!adminKey) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#1e3a0f] flex items-center justify-center">
              <Lock size={18} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Leads Dashboard</h1>
              <p className="text-xs text-gray-500">On The Go Moving — Admin</p>
            </div>
          </div>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Admin Key</label>
              <input
                type="password"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="Enter admin key"
                required
                className="w-full px-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#75aa11]/30 focus:border-[#75aa11]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#1e3a0f] text-white rounded-lg text-sm font-semibold hover:bg-[#2a5015] transition-colors"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Main Dashboard ────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1e3a0f] text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BarChart2 size={22} />
            <div>
              <h1 className="text-lg font-bold">Leads Dashboard</h1>
              <p className="text-xs text-green-300">On The Go Moving & Storage</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {lastFetched && (
              <span className="text-xs text-green-300 hidden sm:block">
                Updated {formatTime(lastFetched.toISOString())}
              </span>
            )}
            <button
              onClick={() => fetchLeads(adminKey)}
              disabled={loading}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors disabled:opacity-50"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
            <button
              onClick={exportCSV}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#75aa11] hover:bg-[#5e8a0d] rounded-lg text-sm transition-colors"
            >
              <Download size={14} />
              CSV
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">

        {/* Error */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Loading skeleton */}
        {loading && leads.length === 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-5 animate-pulse">
                <div className="h-3 bg-gray-200 rounded w-2/3 mb-3" />
                <div className="h-7 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* Stats cards */}
        {!loading || leads.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold mb-2">
                <Users size={14} />
                TOTAL LEADS
              </div>
              <div className="text-3xl font-bold text-gray-900">{totalLeads}</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold mb-2">
                <TrendingUp size={14} />
                LAST 7 DAYS
              </div>
              <div className="text-3xl font-bold text-[#75aa11]">{thisWeek}</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold mb-2">
                <MapPin size={14} />
                SOURCE PAGES
              </div>
              <div className="text-3xl font-bold text-gray-900">{sourceGroups.length}</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold mb-2">
                <BarChart2 size={14} />
                TOP SOURCE
              </div>
              <div className="text-sm font-bold text-gray-900 truncate">
                {sourceGroups[0]?.sourcePage || "—"}
              </div>
              {sourceGroups[0] && (
                <div className="text-xs text-gray-500 mt-0.5">{sourceGroups[0].count} leads</div>
              )}
            </div>
          </div>
        ) : null}

        {/* Move type breakdown */}
        {leads.length > 0 && (
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Leads by Move Type</h2>
            <div className="flex flex-wrap gap-3">
              {moveTypeCounts.map(({ type, count }) => (
                <div key={type} className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${moveTypeBadge(type)}`}>
                    {type}
                  </span>
                  <span className="text-sm font-bold text-gray-800">{count}</span>
                  <span className="text-xs text-gray-400">
                    ({totalLeads ? Math.round((count / totalLeads) * 100) : 0}%)
                  </span>
                </div>
              ))}
              {leads.filter((l) => !l.moveType).length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">
                    unknown
                  </span>
                  <span className="text-sm font-bold text-gray-800">
                    {leads.filter((l) => !l.moveType).length}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tabs */}
        {leads.length > 0 && (
          <>
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit">
              <button
                onClick={() => setActiveTab("bySource")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "bySource"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                By Source Page
              </button>
              <button
                onClick={() => setActiveTab("allLeads")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "allLeads"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                All Leads
              </button>
            </div>

            {/* By Source Page Tab */}
            {activeTab === "bySource" && (
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Leads Ranked by Source Page
                </h2>
                {sourceGroups.map((group, idx) => {
                  const isExpanded = expandedSource === group.sourcePage;
                  const pct = totalLeads ? Math.round((group.count / totalLeads) * 100) : 0;
                  return (
                    <div
                      key={group.sourcePage}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedSource(isExpanded ? null : group.sourcePage)}
                        className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors text-left"
                      >
                        {/* Rank */}
                        <div className="w-7 h-7 rounded-full bg-[#1e3a0f] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </div>

                        {/* URL + bar */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="font-mono text-sm text-gray-800 truncate">
                              {group.sourcePage}
                            </span>
                            <a
                              href={`https://onthegomoving.com${group.sourcePage}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-gray-400 hover:text-[#75aa11] flex-shrink-0"
                            >
                              <ExternalLink size={12} />
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#75aa11] rounded-full transition-all duration-500"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-400 w-8 text-right">{pct}%</span>
                          </div>
                        </div>

                        {/* Count */}
                        <div className="text-right flex-shrink-0">
                          <div className="text-2xl font-bold text-gray-900">{group.count}</div>
                          <div className="text-xs text-gray-400">lead{group.count !== 1 ? "s" : ""}</div>
                        </div>

                        {/* Expand icon */}
                        <div className="text-gray-400 flex-shrink-0">
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </button>

                      {/* Expanded leads list */}
                      {isExpanded && (
                        <div className="border-t border-gray-100 divide-y divide-gray-50">
                          {group.leads
                            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                            .map((lead) => (
                              <div key={lead.id} className="px-4 py-3 flex flex-wrap items-start gap-x-6 gap-y-1.5 bg-gray-50/50">
                                <div className="min-w-0">
                                  <div className="font-semibold text-sm text-gray-900">{lead.fullName || "—"}</div>
                                  <div className="text-xs text-gray-400">
                                    {formatDate(lead.createdAt)} at {formatTime(lead.createdAt)}
                                  </div>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-600">
                                  <Phone size={11} />
                                  <a href={`tel:${lead.phone}`} className="hover:text-[#75aa11]">{lead.phone || "—"}</a>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-600">
                                  <Mail size={11} />
                                  <a href={`mailto:${lead.email}`} className="hover:text-[#75aa11]">{lead.email || "—"}</a>
                                </div>
                                {lead.moveType && (
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${moveTypeBadge(lead.moveType)}`}>
                                    {lead.moveType}
                                  </span>
                                )}
                                {lead.moveDate && (
                                  <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <Calendar size={11} />
                                    {lead.moveDate}
                                  </div>
                                )}
                                {(lead.zipFrom || lead.zipTo) && (
                                  <div className="text-xs text-gray-500">
                                    {lead.zipFrom} → {lead.zipTo}
                                  </div>
                                )}
                                {lead.sourceLabel && (
                                  <span className="text-xs text-gray-400 italic">{lead.sourceLabel}</span>
                                )}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* All Leads Tab */}
            {activeTab === "allLeads" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-gray-100 flex flex-wrap items-center gap-3">
                  <span className="text-sm font-semibold text-gray-700">Filter:</span>
                  <select
                    value={filterMoveType}
                    onChange={(e) => setFilterMoveType(e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#75aa11]/30"
                  >
                    <option value="">All move types</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="commercial">Commercial</option>
                  </select>
                  <span className="text-xs text-gray-400 ml-auto">{filteredLeads.length} leads</span>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th
                          className="px-4 py-3 text-xs font-semibold text-gray-500 cursor-pointer hover:text-gray-800"
                          onClick={() => handleSort("createdAt")}
                        >
                          Date {sortField === "createdAt" && (sortDir === "desc" ? "↓" : "↑")}
                        </th>
                        <th
                          className="px-4 py-3 text-xs font-semibold text-gray-500 cursor-pointer hover:text-gray-800"
                          onClick={() => handleSort("fullName")}
                        >
                          Name {sortField === "fullName" && (sortDir === "desc" ? "↓" : "↑")}
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Contact</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Move</th>
                        <th
                          className="px-4 py-3 text-xs font-semibold text-gray-500 cursor-pointer hover:text-gray-800"
                          onClick={() => handleSort("sourcePage")}
                        >
                          Source Page {sortField === "sourcePage" && (sortDir === "desc" ? "↓" : "↑")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                            <div>{formatDate(lead.createdAt)}</div>
                            <div className="text-gray-400">{formatTime(lead.createdAt)}</div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-gray-900">{lead.fullName || "—"}</div>
                            {lead.moveDate && (
                              <div className="text-xs text-gray-400">Move: {lead.moveDate}</div>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <div className="text-xs">
                              <a href={`tel:${lead.phone}`} className="text-gray-700 hover:text-[#75aa11] block">
                                {lead.phone || "—"}
                              </a>
                              <a href={`mailto:${lead.email}`} className="text-gray-400 hover:text-[#75aa11] block truncate max-w-[160px]">
                                {lead.email || "—"}
                              </a>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex flex-col gap-1">
                              {lead.moveType && (
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize w-fit ${moveTypeBadge(lead.moveType)}`}>
                                  {lead.moveType}
                                </span>
                              )}
                              {(lead.zipFrom || lead.zipTo) && (
                                <span className="text-xs text-gray-400">{lead.zipFrom} → {lead.zipTo}</span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1">
                              <span className="font-mono text-xs text-gray-600 truncate max-w-[200px]">
                                {lead.sourcePage || "/"}
                              </span>
                              <a
                                href={`https://onthegomoving.com${lead.sourcePage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-[#75aa11] flex-shrink-0"
                              >
                                <ExternalLink size={11} />
                              </a>
                            </div>
                            {lead.sourceLabel && (
                              <div className="text-xs text-gray-400 italic">{lead.sourceLabel}</div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {filteredLeads.length === 0 && (
                    <div className="py-12 text-center text-gray-400 text-sm">
                      No leads match the current filter.
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {/* Empty state */}
        {!loading && leads.length === 0 && !error && (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
            <Users size={40} className="mx-auto text-gray-300 mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">No leads yet</h3>
            <p className="text-sm text-gray-400">
              Form submissions will appear here once the site receives traffic.
            </p>
          </div>
        )}

        <div className="text-center text-xs text-gray-300 pb-4">
          On The Go Moving & Storage — Internal Admin Tool
        </div>
      </div>
    </div>
  );
}
