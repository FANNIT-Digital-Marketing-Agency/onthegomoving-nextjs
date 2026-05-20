"use client";

// ==========================================================================
// ON THE GO MOVING — Leads Dashboard (v4)
// Full-featured admin dashboard with Supermove sync, analytics, and charts.
//
// Access: /admin/leads/?key=otgm-admin-2025
// ==========================================================================

import { useState, useEffect, useCallback, useMemo } from "react";
import {
  BarChart2,
  RefreshCw,
  Lock,
  Users,
  TrendingUp,
  Phone,
  Mail,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Trash2,
  AlertTriangle,
  Filter,
  DollarSign,
  CheckCircle2,
  XCircle,
  Briefcase,
  Search,
  MapPin,
  Clock,
  Award,
  Activity,
  X,
  Upload,
  FileText,
  ArrowRight,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────

// ── New fields from CSV backfill ──────────────────────────────────────────
declare module "./LeadsDashboard" {}

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
  referrer?: string;
  ip?: string;
  userAgent?: string;
  webhookStatus?: string;
  smProjectId?: string | null;
  smProjectNumber?: string | null;
  smStage?: string | null;
  smBookingStatus?: string | null;
  smTotalRevenue?: string | null;
  smCoordinator?: string | null;
  smSalesperson?: string | null;
  smIsCancelled?: boolean;
  smMoveDate?: string | null;
  smLastSyncedAt?: string | null;
  source?: string;
  smProjectType?: string | null;
  smSentAt?: string | null;
  smCompletedAt?: string | null;
  smHrsToSend?: number | null;
  smHrsToComplete?: number | null;
}

interface SourceGroup {
  sourcePage: string;
  count: number;
  leads: Lead[];
}

// ── Constants ──────────────────────────────────────────────────────────────

const ADMIN_KEY_STORAGE = "otgm_admin_key";
const DAYS_OPTIONS = [
  { label: "Last 30 days", value: 30 },
  { label: "Last 60 days", value: 60 },
  { label: "Last 90 days", value: 90 },
  { label: "Last 365 days", value: 365 },
];
const STAGE_ORDER = ["New", "On Hold", "Booked", "Completed", "Cancelled", "Unknown"];
const STAGE_COLORS: Record<string, string> = {
  New: "#3b82f6",
  "On Hold": "#eab308",
  Booked: "#22c55e",
  Completed: "#059669",
  Cancelled: "#ef4444",
  Unknown: "#9ca3af",
};
const STAGE_BAR_COLORS: Record<string, string> = {
  New: "bg-blue-500",
  "On Hold": "bg-yellow-400",
  Booked: "bg-green-500",
  Completed: "bg-emerald-600",
  Cancelled: "bg-red-500",
  Unknown: "bg-gray-400",
};
const STAGE_BG: Record<string, string> = {
  New: "bg-blue-50 border-blue-200",
  "On Hold": "bg-yellow-50 border-yellow-200",
  Booked: "bg-green-50 border-green-200",
  Completed: "bg-emerald-50 border-emerald-200",
  Cancelled: "bg-red-50 border-red-200",
  Unknown: "bg-gray-50 border-gray-200",
};
const STAGE_TEXT: Record<string, string> = {
  New: "text-blue-700",
  "On Hold": "text-yellow-700",
  Booked: "text-green-700",
  Completed: "text-emerald-700",
  Cancelled: "text-red-700",
  Unknown: "text-gray-600",
};

// ── Helpers ────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function formatDateShort(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function formatTime(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
}
function formatCurrency(val: string | number | null | undefined): string {
  if (val === null || val === undefined || val === "") return "$0";
  const n = parseFloat(String(val).replace(/[$,]/g, ""));
  if (isNaN(n)) return "$0";
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}
function parseCurrency(val: string | null | undefined): number {
  if (!val) return 0;
  const n = parseFloat(String(val).replace(/[$,]/g, ""));
  return isNaN(n) ? 0 : n;
}
function moveTypeBadge(type: string) {
  const map: Record<string, string> = {
    apartment: "bg-blue-100 text-blue-700",
    house: "bg-green-100 text-green-700",
    commercial: "bg-purple-100 text-purple-700",
  };
  return map[type] || "bg-gray-100 text-gray-600";
}
function getLeadStage(lead: Lead): string {
  if (lead.smIsCancelled) return "Cancelled";
  return lead.smStage || "Unknown";
}
function stageBadgeClass(lead: Lead): string {
  const stage = getLeadStage(lead);
  const map: Record<string, string> = {
    Cancelled: "bg-red-100 text-red-700",
    Completed: "bg-emerald-100 text-emerald-700",
    Booked: "bg-green-100 text-green-700",
    "On Hold": "bg-yellow-100 text-yellow-700",
    New: "bg-blue-100 text-blue-700",
  };
  return map[stage] || "bg-gray-100 text-gray-500";
}
function isTestLead(lead: Lead): boolean {
  return (lead.fullName + lead.email).toLowerCase().includes("test");
}
function dateFromInput(val: string): Date | null {
  if (!val) return null;
  const d = new Date(val + "T00:00:00");
  return isNaN(d.getTime()) ? null : d;
}
function dateToInput(val: string): Date | null {
  if (!val) return null;
  const d = new Date(val + "T23:59:59");
  return isNaN(d.getTime()) ? null : d;
}
function daysBetween(a: string, b: string): number {
  const da = new Date(a).getTime();
  const db = new Date(b).getTime();
  return Math.round(Math.abs(db - da) / (1000 * 60 * 60 * 24));
}

// ── Job Type Revenue Chart (pure CSS) ────────────────────────────────────

const JOB_TYPE_COLORS: Record<string, string> = {
  "Local Move": "#3b82f6",
  "Labor Only": "#f59e0b",
  "Commercial Move": "#8b5cf6",
  "Unknown": "#9ca3af",
};

function JobTypeRevenueChart({ smLeads }: { smLeads: Lead[] }) {
  const types = ["Local Move", "Labor Only", "Commercial Move"];
  const data = types.map((type) => {
    const typeLeads = smLeads.filter((l) => l.smProjectType === type);
    const revenue = typeLeads.reduce((s, l) => s + parseCurrency(l.smTotalRevenue), 0);
    const booked = typeLeads.filter((l) => getLeadStage(l) === "Booked" || getLeadStage(l) === "Completed").length;
    return { type, count: typeLeads.length, revenue, booked };
  }).filter((d) => d.count > 0);

  const maxRev = Math.max(...data.map((d) => d.revenue), 1);

  return (
    <div className="space-y-4">
      {data.map((d) => (
        <div key={d.type}>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: JOB_TYPE_COLORS[d.type] }} />
              <span className="text-sm font-medium text-gray-700">{d.type}</span>
              <span className="text-xs text-gray-400">({d.count} jobs)</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-gray-900">{formatCurrency(d.revenue)}</span>
              {d.booked > 0 && <span className="text-xs text-green-600 ml-2">{d.booked} booked/completed</span>}
            </div>
          </div>
          <div className="h-5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${Math.max((d.revenue / maxRev) * 100, 2)}%`, backgroundColor: JOB_TYPE_COLORS[d.type] }}
            />
          </div>
        </div>
      ))}
      {data.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-4">No project type data available yet.</p>
      )}
    </div>
  );
}

// ── Conversion Funnel (pure CSS) ──────────────────────────────────────────

function ConversionFunnel({ smLeads, totalLeads }: { smLeads: Lead[]; totalLeads: number }) {
  const stages = [
    { label: "Total Leads", count: totalLeads, color: "#6b7280" },
    { label: "New (Quoted)", count: smLeads.filter((l) => getLeadStage(l) === "New").length + smLeads.filter((l) => getLeadStage(l) === "On Hold").length + smLeads.filter((l) => getLeadStage(l) === "Booked").length + smLeads.filter((l) => getLeadStage(l) === "Completed").length + smLeads.filter((l) => getLeadStage(l) === "Cancelled").length, color: "#3b82f6" },
    { label: "On Hold", count: smLeads.filter((l) => getLeadStage(l) === "On Hold").length + smLeads.filter((l) => getLeadStage(l) === "Booked").length + smLeads.filter((l) => getLeadStage(l) === "Completed").length, color: "#eab308" },
    { label: "Booked", count: smLeads.filter((l) => getLeadStage(l) === "Booked").length + smLeads.filter((l) => getLeadStage(l) === "Completed").length, color: "#22c55e" },
    { label: "Completed", count: smLeads.filter((l) => getLeadStage(l) === "Completed").length, color: "#059669" },
  ];

  const maxCount = Math.max(...stages.map((s) => s.count), 1);

  return (
    <div className="space-y-2">
      {stages.map((stage, i) => {
        const pct = Math.round((stage.count / maxCount) * 100);
        const convPct = i > 0 && stages[i - 1].count > 0
          ? Math.round((stage.count / stages[i - 1].count) * 100)
          : null;
        return (
          <div key={stage.label} className="flex items-center gap-3">
            <div className="w-24 text-xs font-medium text-gray-600 text-right flex-shrink-0">{stage.label}</div>
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden relative">
                <div
                  className="h-full rounded-lg transition-all duration-700 flex items-center justify-end pr-2"
                  style={{ width: `${Math.max(pct, 4)}%`, backgroundColor: stage.color }}
                >
                  <span className="text-white text-xs font-bold">{stage.count}</span>
                </div>
              </div>
              {convPct !== null && (
                <div className="flex items-center gap-1 text-xs text-gray-400 w-16 flex-shrink-0">
                  <ArrowRight size={10} />
                  <span className={convPct >= 50 ? "text-green-600 font-semibold" : "text-gray-400"}>{convPct}%</span>
                </div>
              )}
              {convPct === null && <div className="w-16 flex-shrink-0" />}
            </div>
          </div>
        );
      })}
      <p className="text-xs text-gray-400 mt-2">Percentages show conversion from the previous stage.</p>
    </div>
  );
}

// ── Mini bar chart (pure CSS) ──────────────────────────────────────────────

function MiniBarChart({ data }: { data: { label: string; value: number; color?: string }[] }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="flex items-end gap-1 h-16">
      {data.map((d) => (
        <div key={d.label} className="flex flex-col items-center gap-1 flex-1 min-w-0">
          <div className="text-xs text-gray-500 font-medium">{d.value > 0 ? d.value : ""}</div>
          <div
            className="w-full rounded-t transition-all duration-500"
            style={{
              height: `${Math.max((d.value / max) * 48, d.value > 0 ? 4 : 0)}px`,
              backgroundColor: d.color || "#75aa11",
            }}
          />
          <div className="text-xs text-gray-400 truncate w-full text-center">{d.label}</div>
        </div>
      ))}
    </div>
  );
}

// ── Trend chart (weekly lead volume, pure CSS) ─────────────────────────────

function TrendChart({ leads, weeks = 12 }: { leads: Lead[]; weeks?: number }) {
  const buckets = useMemo(() => {
    const now = new Date();
    const result: { label: string; count: number; start: Date }[] = [];
    for (let i = weeks - 1; i >= 0; i--) {
      const start = new Date(now);
      start.setDate(start.getDate() - i * 7 - 6);
      start.setHours(0, 0, 0, 0);
      const end = new Date(start);
      end.setDate(end.getDate() + 6);
      end.setHours(23, 59, 59, 999);
      const count = leads.filter((l) => {
        const d = new Date(l.createdAt);
        return d >= start && d <= end;
      }).length;
      result.push({
        label: start.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        count,
        start,
      });
    }
    return result;
  }, [leads, weeks]);

  const max = Math.max(...buckets.map((b) => b.count), 1);

  return (
    <div>
      <div className="flex items-end gap-1 h-20">
        {buckets.map((b, i) => (
          <div key={i} className="flex flex-col items-center flex-1 min-w-0 group relative">
            {/* Tooltip */}
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              {b.label}: {b.count} lead{b.count !== 1 ? "s" : ""}
            </div>
            <div
              className="w-full rounded-t transition-all duration-500 bg-[#75aa11] hover:bg-[#5e8a0d]"
              style={{ height: `${Math.max((b.count / max) * 64, b.count > 0 ? 4 : 0)}px` }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-1 mt-1">
        {buckets.map((b, i) => (
          <div key={i} className="flex-1 text-center">
            {(i === 0 || i === Math.floor(weeks / 2) || i === weeks - 1) && (
              <span className="text-xs text-gray-400">{b.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Revenue Pipeline Chart ─────────────────────────────────────────────────

function RevenuePipelineChart({ smLeads }: { smLeads: Lead[] }) {
  const stages = ["New", "On Hold", "Booked", "Completed", "Cancelled"];
  const data = stages.map((stage) => {
    const stageLeads = smLeads.filter((l) => getLeadStage(l) === stage);
    return {
      label: stage,
      value: stageLeads.reduce((s, l) => s + parseCurrency(l.smTotalRevenue), 0),
      count: stageLeads.length,
      color: STAGE_COLORS[stage],
    };
  }).filter((d) => d.value > 0);

  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="space-y-2">
      {data.map((d) => (
        <div key={d.label} className="flex items-center gap-3">
          <div className="w-20 text-xs font-medium text-gray-600 text-right">{d.label}</div>
          <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 flex items-center justify-end pr-2"
              style={{ width: `${Math.max((d.value / max) * 100, 4)}%`, backgroundColor: d.color }}
            >
              <span className="text-white text-xs font-semibold whitespace-nowrap">
                {formatCurrency(d.value)}
              </span>
            </div>
          </div>
          <div className="w-8 text-xs text-gray-400 text-right">{d.count}</div>
        </div>
      ))}
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function LeadsDashboard() {
  const [adminKey, setAdminKey] = useState("");
  const [keyInput, setKeyInput] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastFetched, setLastFetched] = useState<Date | null>(null);
  const [expandedSource, setExpandedSource] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"bySource" | "allLeads" | "supermove" | "analytics" | "upload">("bySource");
  const [sortField, setSortField] = useState<"createdAt" | "fullName" | "sourcePage" | "smTotalRevenue">("createdAt");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [filterMoveType, setFilterMoveType] = useState("");
  const [filterStage, setFilterStage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [daysWindow, setDaysWindow] = useState(365);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [deletingTests, setDeletingTests] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteResult, setDeleteResult] = useState<{ deleted: number; failed: number } | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [sourceFilter, setSourceFilter] = useState<"all" | "form" | "supermove">("all");
  const [csvUploadFile, setCsvUploadFile] = useState<File | null>(null);
  const [csvUploading, setCsvUploading] = useState(false);
  const [csvUploadResult, setCsvUploadResult] = useState<{ success: boolean; summary?: any; error?: string } | null>(null);
  const [csvDragOver, setCsvDragOver] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem(ADMIN_KEY_STORAGE);
    if (saved) setAdminKey(saved);
  }, []);

  const fetchLeads = useCallback(async (key: string, days = 365) => {
    setLoading(true);
    setError("");
    setDeleteResult(null);
    try {
      // Paginate through all records (API caps at 200 per page)
      const PER_PAGE = 200;
      let page = 1;
      let allLeads: any[] = [];
      let total = 0;

      do {
        const res = await fetch(
          `/.netlify/functions/get-leads?key=${encodeURIComponent(key)}&per_page=${PER_PAGE}&page=${page}&days=${days}`
        );
        if (res.status === 401) {
          setError("Invalid admin key.");
          setAdminKey("");
          sessionStorage.removeItem(ADMIN_KEY_STORAGE);
          return;
        }
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        const batch = data.submissions || [];
        total = data.total || 0;
        allLeads = allLeads.concat(batch);
        if (batch.length < PER_PAGE) break; // last page
        page++;
      } while (allLeads.length < total && page <= 20); // safety cap at 20 pages

      setLeads(allLeads);
      setLastFetched(new Date());
    } catch (err: any) {
      setError(err.message || "Failed to load leads.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (adminKey) fetchLeads(adminKey, daysWindow);
  }, [adminKey, daysWindow, fetchLeads]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem(ADMIN_KEY_STORAGE, keyInput);
    setAdminKey(keyInput);
  };

  // ── Filtering ────────────────────────────────────────────────────────────

  const dateFilteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const created = new Date(lead.createdAt);
      const from = dateFromInput(dateFrom);
      const to = dateToInput(dateTo);
      if (from && created < from) return false;
      if (to && created > to) return false;
      // Source filter
      if (sourceFilter === "form" && lead.sourcePage === "supermove-import") return false;
      if (sourceFilter === "supermove" && lead.sourcePage !== "supermove-import") return false;
      return true;
    });
  }, [leads, dateFrom, dateTo, sourceFilter]);

  // Not-synced leads (more than 2 days old, no Supermove project)
  const notSyncedLeads = useMemo(() => {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    return dateFilteredLeads.filter(
      (l) => !l.smProjectNumber && !isTestLead(l) && new Date(l.createdAt) < twoDaysAgo
    );
  }, [dateFilteredLeads]);

  const testLeads = useMemo(() => leads.filter(isTestLead), [leads]);

  // Source groups
  const sourceGroups: SourceGroup[] = useMemo(() => {
    const map = new Map<string, Lead[]>();
    dateFilteredLeads.forEach((lead) => {
      const key = lead.sourcePage || "/";
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(lead);
    });
    return Array.from(map.entries())
      .map(([sourcePage, ls]) => ({ sourcePage, count: ls.length, leads: ls }))
      .sort((a, b) => b.count - a.count);
  }, [dateFilteredLeads]);

  // Supermove leads
  const smLeads = useMemo(() => dateFilteredLeads.filter((l) => l.smProjectNumber), [dateFilteredLeads]);

  const smByStage = useMemo(() => {
    return smLeads.reduce<Record<string, Lead[]>>((acc, l) => {
      const stage = getLeadStage(l);
      if (!acc[stage]) acc[stage] = [];
      acc[stage].push(l);
      return acc;
    }, {});
  }, [smLeads]);

  // Revenue stats
  const totalRevenue = useMemo(() => smLeads.reduce((s, l) => s + parseCurrency(l.smTotalRevenue), 0), [smLeads]);
  const bookedRevenue = useMemo(() => (smByStage["Booked"] || []).reduce((s, l) => s + parseCurrency(l.smTotalRevenue), 0), [smByStage]);
  const completedRevenue = useMemo(() => (smByStage["Completed"] || []).reduce((s, l) => s + parseCurrency(l.smTotalRevenue), 0), [smByStage]);
  const cancelledRevenue = useMemo(() => (smByStage["Cancelled"] || []).reduce((s, l) => s + parseCurrency(l.smTotalRevenue), 0), [smByStage]);

  const conversionRate = dateFilteredLeads.length > 0
    ? Math.round(((smByStage["Booked"]?.length || 0) + (smByStage["Completed"]?.length || 0)) / dateFilteredLeads.length * 100)
    : 0;

  const totalLeads = dateFilteredLeads.length;
  const thisWeek = dateFilteredLeads.filter((l) => {
    return (new Date().getTime() - new Date(l.createdAt).getTime()) / (1000 * 60 * 60 * 24) <= 7;
  }).length;

  const moveTypeCounts = ["apartment", "house", "commercial"].map((t) => ({
    type: t,
    count: dateFilteredLeads.filter((l) => l.moveType === t).length,
  }));

  // Coordinator leaderboard
  const coordinatorStats = useMemo(() => {
    const map = new Map<string, { jobs: number; revenue: number; booked: number }>();
    smLeads.forEach((l) => {
      const name = l.smCoordinator || "Unassigned";
      if (!map.has(name)) map.set(name, { jobs: 0, revenue: 0, booked: 0 });
      const s = map.get(name)!;
      s.jobs++;
      s.revenue += parseCurrency(l.smTotalRevenue);
      if (getLeadStage(l) === "Booked" || getLeadStage(l) === "Completed") s.booked++;
    });
    return Array.from(map.entries())
      .map(([name, stats]) => ({ name, ...stats, closeRate: stats.jobs > 0 ? Math.round((stats.booked / stats.jobs) * 100) : 0 }))
      .sort((a, b) => b.revenue - a.revenue);
  }, [smLeads]);

  // Average job value by stage
  const avgJobValue = useMemo(() => {
    return STAGE_ORDER.map((stage) => {
      const stageLeads = smByStage[stage] || [];
      const withRevenue = stageLeads.filter((l) => parseCurrency(l.smTotalRevenue) > 0);
      const avg = withRevenue.length > 0
        ? withRevenue.reduce((s, l) => s + parseCurrency(l.smTotalRevenue), 0) / withRevenue.length
        : 0;
      return { stage, avg, count: stageLeads.length };
    }).filter((d) => d.count > 0);
  }, [smByStage]);

  // Lead-to-book time
  const leadToBookTimes = useMemo(() => {
    const booked = [...(smByStage["Booked"] || []), ...(smByStage["Completed"] || [])];
    const times = booked
      .filter((l) => l.smMoveDate || l.moveDate)
      .map((l) => daysBetween(l.createdAt, l.smMoveDate || l.moveDate || l.createdAt));
    if (times.length === 0) return null;
    const avg = Math.round(times.reduce((a, b) => a + b, 0) / times.length);
    const min = Math.min(...times);
    const max = Math.max(...times);
    return { avg, min, max, count: times.length };
  }, [smByStage]);

  // Filtered + sorted leads for all-leads tab
  const filteredLeads = useMemo(() => {
    return dateFilteredLeads
      .filter((l) => !filterMoveType || l.moveType === filterMoveType)
      .filter((l) => !filterStage || getLeadStage(l) === filterStage)
      .filter((l) => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        return (
          (l.fullName || "").toLowerCase().includes(q) ||
          (l.email || "").toLowerCase().includes(q) ||
          (l.phone || "").toLowerCase().includes(q) ||
          (l.sourcePage || "").toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        if (sortField === "smTotalRevenue") {
          const va = parseCurrency(a.smTotalRevenue);
          const vb = parseCurrency(b.smTotalRevenue);
          return sortDir === "asc" ? va - vb : vb - va;
        }
        const va = (a as any)[sortField] || "";
        const vb = (b as any)[sortField] || "";
        return sortDir === "asc" ? va.localeCompare(vb) : vb.localeCompare(va);
      });
  }, [dateFilteredLeads, filterMoveType, filterStage, searchQuery, sortField, sortDir]);

  const handleSort = (field: typeof sortField) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortField(field); setSortDir("desc"); }
  };

  // ── CSV Upload ────────────────────────────────────────────────────────────

  const handleCsvUpload = async () => {
    if (!csvUploadFile) return;
    setCsvUploading(true);
    setCsvUploadResult(null);
    try {
      const text = await csvUploadFile.text();
      const res = await fetch("/.netlify/functions/upload-supermove-csv", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
          "X-Admin-Key": adminKey,
        },
        body: text,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setCsvUploadResult({ success: true, summary: data.summary });
        await fetchLeads(adminKey, daysWindow);
      } else {
        setCsvUploadResult({ success: false, error: data.error || "Upload failed" });
      }
    } catch (err: any) {
      setCsvUploadResult({ success: false, error: err.message || "Upload failed" });
    } finally {
      setCsvUploading(false);
    }
  };

  // ── Export CSV ────────────────────────────────────────────────────────────

  const exportCSV = () => {
    const headers = ["Date", "Name", "Phone", "Email", "Move Date", "From", "To", "Type", "Size", "Source Page", "Source Label", "SM Project", "SM Stage", "SM Revenue", "SM Coordinator"];
    const rows = dateFilteredLeads.map((l) => [
      formatDate(l.createdAt), l.fullName, l.phone, l.email, l.moveDate,
      l.zipFrom, l.zipTo, l.moveType, l.moveSize, l.sourcePage, l.sourceLabel,
      l.smProjectNumber || "", l.smStage || "", l.smTotalRevenue || "", l.smCoordinator || "",
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${(c || "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `otgm-leads_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── Delete handlers ───────────────────────────────────────────────────────

  const deleteLead = async (id: string): Promise<boolean> => {
    try {
      const res = await fetch(
        `/.netlify/functions/delete-lead?key=${encodeURIComponent(adminKey)}&id=${encodeURIComponent(id)}`,
        { method: "POST" }
      );
      const data = await res.json().catch(() => ({}));
      return res.ok && data.success;
    } catch {
      return false;
    }
  };

  const handleDeleteTestLeads = async () => {
    setShowDeleteConfirm(false);
    setDeletingTests(true);
    setDeleteResult(null);
    let deleted = 0, failed = 0;
    for (const lead of testLeads) {
      const ok = await deleteLead(lead.id);
      if (ok) deleted++; else failed++;
    }
    setDeleteResult({ deleted, failed });
    setDeletingTests(false);
    await fetchLeads(adminKey, daysWindow);
  };

  const handleDeleteSingleLead = async (id: string) => {
    setDeletingId(id);
    const ok = await deleteLead(id);
    setDeletingId(null);
    setConfirmDeleteId(null);
    if (ok) {
      setLeads((prev) => prev.filter((l) => l.id !== id));
    } else {
      alert("Failed to delete lead. Please try again.");
    }
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
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Admin Key</label>
              <input
                type="password"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="Enter admin key"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#75aa11]/30 focus:border-[#75aa11]"
                autoFocus
              />
            </div>
            <button
              type="submit"
              disabled={!keyInput}
              className="w-full py-2.5 bg-[#1e3a0f] hover:bg-[#2a5015] text-white rounded-xl text-sm font-semibold transition-colors disabled:opacity-50"
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
      <div className="bg-[#1e3a0f] text-white px-4 sm:px-6 py-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <BarChart2 size={22} />
            <div>
              <h1 className="text-lg font-bold">Leads Dashboard</h1>
              <p className="text-xs text-green-300">On The Go Moving & Storage</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {/* Source filter */}
            <div className="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/20">
              {(["all", "form", "supermove"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSourceFilter(s)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    sourceFilter === s ? "bg-white text-gray-900" : "text-white/70 hover:text-white"
                  }`}
                >
                  {s === "all" ? "All" : s === "form" ? "Form Leads" : "Supermove"}
                </button>
              ))}
            </div>
            <select
              value={daysWindow}
              onChange={(e) => setDaysWindow(Number(e.target.value))}
              className="text-sm bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-3 py-1.5 text-white focus:outline-none cursor-pointer"
            >
              {DAYS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value} className="text-gray-900 bg-white">{o.label}</option>
              ))}
            </select>
            {lastFetched && (
              <span className="text-xs text-green-300 hidden sm:block">Updated {formatTime(lastFetched.toISOString())}</span>
            )}
            <button
              onClick={() => fetchLeads(adminKey, daysWindow)}
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
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">{error}</div>
        )}

        {/* Delete result */}
        {deleteResult && (
          <div className={`p-4 rounded-xl text-sm border ${deleteResult.failed === 0 ? "bg-green-50 border-green-200 text-green-800" : "bg-yellow-50 border-yellow-200 text-yellow-800"}`}>
            {deleteResult.deleted > 0 && <span>✓ Deleted {deleteResult.deleted} test lead{deleteResult.deleted !== 1 ? "s" : ""}. </span>}
            {deleteResult.failed > 0 && <span>⚠ {deleteResult.failed} deletion{deleteResult.failed !== 1 ? "s" : ""} failed.</span>}
          </div>
        )}

        {/* ── Not-Synced Alert ── */}
        {notSyncedLeads.length > 0 && (
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-amber-800 text-sm">
                {notSyncedLeads.length} lead{notSyncedLeads.length !== 1 ? "s" : ""} not synced to Supermove
              </div>
              <div className="text-xs text-amber-700 mt-0.5">
                These leads are more than 2 days old and have no Supermove project. They may be missed bookings.
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {notSyncedLeads.slice(0, 8).map((l) => (
                  <span key={l.id} className="text-xs bg-amber-100 border border-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                    {l.fullName || l.email || l.id} · {formatDateShort(l.createdAt)}
                  </span>
                ))}
                {notSyncedLeads.length > 8 && (
                  <span className="text-xs text-amber-600">+{notSyncedLeads.length - 8} more</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── Date Range + Search + Test Lead Cleanup ── */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-3">
          <div className="flex flex-wrap items-end gap-4">
            {/* Search */}
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400 font-medium">Search</label>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Name, email, phone, page…"
                  className="pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg text-sm w-56 focus:outline-none focus:ring-2 focus:ring-[#75aa11]/30 focus:border-[#75aa11]"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <X size={12} />
                  </button>
                )}
              </div>
            </div>

            {/* Date range */}
            <div className="flex items-end gap-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 pb-1.5">
                <Filter size={14} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400 font-medium">From</label>
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#75aa11]/30 focus:border-[#75aa11]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400 font-medium">To</label>
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#75aa11]/30 focus:border-[#75aa11]"
                />
              </div>
              {(dateFrom || dateTo) && (
                <button onClick={() => { setDateFrom(""); setDateTo(""); }} className="text-xs text-gray-400 hover:text-red-500 underline pb-1.5">Clear</button>
              )}
              {(dateFrom || dateTo) && (
                <div className="text-xs text-[#75aa11] font-semibold pb-1.5">{totalLeads} in range</div>
              )}
            </div>

            <div className="flex-1" />

            {/* Delete test leads */}
            <div className="flex items-center gap-3">
              {testLeads.length > 0 ? (
                <>
                  <span className="text-xs text-amber-600 font-medium flex items-center gap-1">
                    <AlertTriangle size={13} />
                    {testLeads.length} test lead{testLeads.length !== 1 ? "s" : ""}
                  </span>
                  {!showDeleteConfirm ? (
                    <button
                      onClick={() => setShowDeleteConfirm(true)}
                      disabled={deletingTests}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                    >
                      <Trash2 size={13} />
                      Delete Test Leads
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-red-600 font-medium">Delete {testLeads.length}?</span>
                      <button onClick={handleDeleteTestLeads} className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold">Yes</button>
                      <button onClick={() => setShowDeleteConfirm(false)} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold">Cancel</button>
                    </div>
                  )}
                </>
              ) : (
                <span className="text-xs text-gray-400 flex items-center gap-1"><Trash2 size={12} /> No test leads</span>
              )}
              {deletingTests && <span className="text-xs text-gray-500 flex items-center gap-1"><RefreshCw size={12} className="animate-spin" /> Deleting…</span>}
            </div>
          </div>

          {/* Test leads preview */}
          {testLeads.length > 0 && (
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-400 mb-2">Test leads to be deleted:</p>
              <div className="flex flex-wrap gap-2">
                {testLeads.map((l) => (
                  <span key={l.id} className="text-xs bg-amber-50 border border-amber-200 text-amber-700 px-2 py-0.5 rounded-full">
                    {l.fullName || l.email || l.id}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

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

        {/* ── Top Stats Cards ── */}
        {(!loading || leads.length > 0) && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold mb-2">
                <Users size={14} />
                {dateFrom || dateTo ? "LEADS IN RANGE" : "TOTAL LEADS"}
              </div>
              <div className="text-3xl font-bold text-gray-900">{totalLeads}</div>
              {(dateFrom || dateTo) && <div className="text-xs text-gray-400 mt-1">{leads.length} total</div>}
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
                <CheckCircle2 size={14} />
                CONVERSION RATE
              </div>
              <div className="text-3xl font-bold text-gray-900">{conversionRate}%</div>
              <div className="text-xs text-gray-400 mt-1">booked + completed</div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold mb-2">
                <DollarSign size={14} />
                TOTAL QUOTED REV
              </div>
              <div className="text-2xl font-bold text-gray-900">{formatCurrency(totalRevenue)}</div>
              <div className="text-xs text-gray-400 mt-1">{smLeads.length} synced jobs</div>
            </div>
          </div>
        )}

        {/* ── Supermove Job Status Panel ── */}
        {smLeads.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
              <Briefcase size={16} className="text-[#1e3a0f]" />
              <h2 className="text-sm font-semibold text-gray-800">Supermove Job Status</h2>
              <span className="ml-auto text-xs text-gray-400">{smLeads.length} synced jobs</span>
            </div>

            {/* Stage cards */}
            <div className="p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {STAGE_ORDER.map((stage) => {
                const stageLeads = smByStage[stage] || [];
                if (stageLeads.length === 0) return null;
                const rev = stageLeads.reduce((s, l) => s + parseCurrency(l.smTotalRevenue), 0);
                return (
                  <div key={stage} className={`rounded-xl p-4 border ${STAGE_BG[stage] || "bg-gray-50 border-gray-200"}`}>
                    <div className={`text-xs font-semibold mb-1 ${STAGE_TEXT[stage] || "text-gray-600"}`}>{stage}</div>
                    <div className="text-2xl font-bold text-gray-900">{stageLeads.length}</div>
                    <div className={`text-xs font-medium mt-1 ${STAGE_TEXT[stage] || "text-gray-500"}`}>{formatCurrency(rev)}</div>
                  </div>
                );
              })}
            </div>

            {/* Revenue summary */}
            <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-green-700">Booked Revenue</div>
                  <div className="text-xl font-bold text-green-800">{formatCurrency(bookedRevenue)}</div>
                  <div className="text-xs text-green-600">{smByStage["Booked"]?.length || 0} jobs</div>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
                <DollarSign size={20} className="text-emerald-600 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-emerald-700">Completed Revenue</div>
                  <div className="text-xl font-bold text-emerald-800">{formatCurrency(completedRevenue)}</div>
                  <div className="text-xs text-emerald-600">{smByStage["Completed"]?.length || 0} jobs</div>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                <XCircle size={20} className="text-red-500 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-red-700">Cancelled (Lost)</div>
                  <div className="text-xl font-bold text-red-800">{formatCurrency(cancelledRevenue)}</div>
                  <div className="text-xs text-red-600">{smByStage["Cancelled"]?.length || 0} jobs</div>
                </div>
              </div>
            </div>

            {/* Stage bar */}
            <div className="px-5 pb-5">
              <div className="text-xs font-semibold text-gray-500 mb-2">Stage Distribution</div>
              <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
                {STAGE_ORDER.map((stage) => {
                  const count = smByStage[stage]?.length || 0;
                  if (count === 0) return null;
                  const pct = Math.round((count / smLeads.length) * 100);
                  return (
                    <div
                      key={stage}
                      className={`${STAGE_BAR_COLORS[stage]} transition-all`}
                      style={{ width: `${pct}%` }}
                      title={`${stage}: ${count} (${pct}%)`}
                    />
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                {STAGE_ORDER.map((stage) => {
                  const count = smByStage[stage]?.length || 0;
                  if (count === 0) return null;
                  return (
                    <div key={stage} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <div className={`w-2.5 h-2.5 rounded-full ${STAGE_BAR_COLORS[stage]}`} />
                      {stage} ({count})
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Move type breakdown */}
        {dateFilteredLeads.length > 0 && (
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Leads by Move Type</h2>
            <div className="flex flex-wrap gap-3">
              {moveTypeCounts.map(({ type, count }) => (
                <div key={type} className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${moveTypeBadge(type)}`}>{type}</span>
                  <span className="text-sm font-bold text-gray-800">{count}</span>
                  <span className="text-xs text-gray-400">({totalLeads ? Math.round((count / totalLeads) * 100) : 0}%)</span>
                </div>
              ))}
              {dateFilteredLeads.filter((l) => !l.moveType).length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">unknown</span>
                  <span className="text-sm font-bold text-gray-800">{dateFilteredLeads.filter((l) => !l.moveType).length}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Tabs ── */}
        {dateFilteredLeads.length > 0 && (
          <>
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit flex-wrap">
              {(["bySource", "allLeads", "supermove", "analytics", "upload"] as const).map((tab) => {
                const labels: Record<string, string> = {
                  bySource: "By Source",
                  allLeads: "All Leads",
                  supermove: `Supermove${smLeads.length > 0 ? ` (${smLeads.length})` : ""}`,
                  analytics: "Analytics",
                  upload: "Upload CSV",
                };
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {labels[tab]}
                  </button>
                );
              })}
            </div>

            {/* ── By Source Tab ── */}
            {activeTab === "bySource" && (
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Leads Ranked by Source Page</h2>
                {sourceGroups.map((group, idx) => {
                  const isExpanded = expandedSource === group.sourcePage;
                  const pct = totalLeads ? Math.round((group.count / totalLeads) * 100) : 0;
                  return (
                    <div key={group.sourcePage} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <button
                        onClick={() => setExpandedSource(isExpanded ? null : group.sourcePage)}
                        className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#1e3a0f] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{idx + 1}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="font-mono text-sm text-gray-800 truncate">{group.sourcePage}</span>
                            <a href={`https://onthegomoving.com${group.sourcePage}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-gray-400 hover:text-[#75aa11] flex-shrink-0">
                              <ExternalLink size={12} />
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-[#75aa11] rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                            </div>
                            <span className="text-xs text-gray-400 w-8 text-right">{pct}%</span>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-2xl font-bold text-gray-900">{group.count}</div>
                          <div className="text-xs text-gray-400">lead{group.count !== 1 ? "s" : ""}</div>
                        </div>
                        <div className="text-gray-400 flex-shrink-0">{isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</div>
                      </button>
                      {isExpanded && (
                        <div className="border-t border-gray-100 divide-y divide-gray-50">
                          {group.leads
                            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                            .map((lead) => (
                              <div key={lead.id} className={`px-4 py-3 flex flex-wrap items-start gap-x-6 gap-y-1.5 ${isTestLead(lead) ? "bg-amber-50/60" : "bg-gray-50/50"}`}>
                                <div className="min-w-0">
                                  <div className="font-semibold text-sm text-gray-900 flex items-center gap-2">
                                    {lead.fullName || "—"}
                                    {isTestLead(lead) && <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">TEST</span>}
                                  </div>
                                  <div className="text-xs text-gray-400">{formatDate(lead.createdAt)} at {formatTime(lead.createdAt)}</div>
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
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${moveTypeBadge(lead.moveType)}`}>{lead.moveType}</span>
                                )}
                                {lead.smProjectNumber && (
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${stageBadgeClass(lead)}`}>
                                    #{lead.smProjectNumber} · {getLeadStage(lead)}
                                  </span>
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

            {/* ── All Leads Tab ── */}
            {activeTab === "allLeads" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
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
                  <select
                    value={filterStage}
                    onChange={(e) => setFilterStage(e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#75aa11]/30"
                  >
                    <option value="">All stages</option>
                    {STAGE_ORDER.map((s) => <option key={s} value={s}>{s}</option>)}
                    <option value="Unknown">Not synced</option>
                  </select>
                  <span className="text-xs text-gray-400 ml-auto">{filteredLeads.length} leads</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500 cursor-pointer hover:text-gray-800" onClick={() => handleSort("createdAt")}>
                          Date {sortField === "createdAt" && (sortDir === "desc" ? "↓" : "↑")}
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500 cursor-pointer hover:text-gray-800" onClick={() => handleSort("fullName")}>
                          Name {sortField === "fullName" && (sortDir === "desc" ? "↓" : "↑")}
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Contact</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Move</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500 cursor-pointer hover:text-gray-800" onClick={() => handleSort("sourcePage")}>
                          Source {sortField === "sourcePage" && (sortDir === "desc" ? "↓" : "↑")}
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500 cursor-pointer hover:text-gray-800" onClick={() => handleSort("smTotalRevenue")}>
                          Supermove {sortField === "smTotalRevenue" && (sortDir === "desc" ? "↓" : "↑")}
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className={`hover:bg-gray-50/50 transition-colors ${isTestLead(lead) ? "bg-amber-50/40" : ""}`}>
                          <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                            <div>{formatDate(lead.createdAt)}</div>
                            <div className="text-gray-400">{formatTime(lead.createdAt)}</div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-gray-900 flex items-center gap-2">
                              {lead.fullName || "—"}
                              {isTestLead(lead) && <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">TEST</span>}
                            </div>
                            {lead.moveDate && <div className="text-xs text-gray-400">Move: {lead.moveDate}</div>}
                          </td>
                          <td className="px-4 py-3">
                            <div className="text-xs">
                              <a href={`tel:${lead.phone}`} className="text-gray-700 hover:text-[#75aa11] block">{lead.phone || "—"}</a>
                              <a href={`mailto:${lead.email}`} className="text-gray-400 hover:text-[#75aa11] block truncate max-w-[160px]">{lead.email || "—"}</a>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex flex-col gap-1">
                              {lead.moveType && (
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize w-fit ${moveTypeBadge(lead.moveType)}`}>{lead.moveType}</span>
                              )}
                              {(lead.zipFrom || lead.zipTo) && (
                                <span className="text-xs text-gray-400">{lead.zipFrom} → {lead.zipTo}</span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1">
                              <span className="font-mono text-xs text-gray-600 truncate max-w-[180px]">{lead.sourcePage || "/"}</span>
                              <a href={`https://onthegomoving.com${lead.sourcePage}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#75aa11] flex-shrink-0">
                                <ExternalLink size={11} />
                              </a>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            {lead.smProjectNumber ? (
                              <div className="flex flex-col gap-1">
                                <a href={`https://app.supermove.co/projects/${lead.smProjectId}`} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-blue-600 hover:underline flex items-center gap-1">
                                  #{lead.smProjectNumber} <ExternalLink size={10} />
                                </a>
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium w-fit ${stageBadgeClass(lead)}`}>
                                  {getLeadStage(lead)}
                                </span>
                                {lead.smTotalRevenue && (
                                  <div className="text-xs text-gray-600 font-medium">{formatCurrency(lead.smTotalRevenue)}</div>
                                )}
                              </div>
                            ) : (
                              <span className="text-xs text-gray-300">Not synced</span>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            {confirmDeleteId === lead.id ? (
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => handleDeleteSingleLead(lead.id)}
                                  disabled={deletingId === lead.id}
                                  className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-semibold disabled:opacity-50"
                                >
                                  {deletingId === lead.id ? "…" : "Yes"}
                                </button>
                                <button onClick={() => setConfirmDeleteId(null)} className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded text-xs">No</button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setConfirmDeleteId(lead.id)}
                                className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                                title="Delete this lead"
                              >
                                <Trash2 size={13} />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {filteredLeads.length === 0 && (
                    <div className="py-12 text-center text-gray-400 text-sm">No leads match the current filter.</div>
                  )}
                </div>
              </div>
            )}

            {/* ── Supermove Jobs Tab ── */}
            {activeTab === "supermove" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700">Stage:</span>
                  <button
                    onClick={() => setFilterStage("")}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${!filterStage ? "bg-[#1e3a0f] text-white border-[#1e3a0f]" : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"}`}
                  >
                    All ({smLeads.length})
                  </button>
                  {STAGE_ORDER.map((stage) => {
                    const count = smByStage[stage]?.length || 0;
                    if (count === 0) return null;
                    return (
                      <button
                        key={stage}
                        onClick={() => setFilterStage(filterStage === stage ? "" : stage)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                          filterStage === stage
                            ? `${STAGE_BG[stage]} ${STAGE_TEXT[stage]} border-current`
                            : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {stage} ({count})
                      </button>
                    );
                  })}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Project</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Client</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Stage</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Revenue</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Move Date</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Coordinator</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Lead Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {smLeads
                        .filter((l) => !filterStage || getLeadStage(l) === filterStage)
                        .sort((a, b) => {
                          const order = ["Booked", "Completed", "New", "On Hold", "Cancelled"];
                          const ia = order.indexOf(getLeadStage(a));
                          const ib = order.indexOf(getLeadStage(b));
                          if (ia !== ib) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
                          return parseCurrency(b.smTotalRevenue) - parseCurrency(a.smTotalRevenue);
                        })
                        .map((lead) => (
                          <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-4 py-3">
                              <a href={`https://app.supermove.co/projects/${lead.smProjectId}`} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-blue-600 hover:underline flex items-center gap-1">
                                #{lead.smProjectNumber} <ExternalLink size={10} />
                              </a>
                            </td>
                            <td className="px-4 py-3">
                              <div className="font-medium text-gray-900 text-sm">{lead.fullName}</div>
                              <div className="text-xs text-gray-400">{lead.phone}</div>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${stageBadgeClass(lead)}`}>{getLeadStage(lead)}</span>
                            </td>
                            <td className="px-4 py-3 font-semibold text-gray-800 text-sm">{formatCurrency(lead.smTotalRevenue)}</td>
                            <td className="px-4 py-3 text-xs text-gray-500">{lead.smMoveDate ? formatDate(lead.smMoveDate) : (lead.moveDate || "—")}</td>
                            <td className="px-4 py-3 text-xs text-gray-500">{lead.smCoordinator || "—"}</td>
                            <td className="px-4 py-3 text-xs text-gray-400">{formatDate(lead.createdAt)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  {smLeads.filter((l) => !filterStage || getLeadStage(l) === filterStage).length === 0 && (
                    <div className="py-12 text-center text-gray-400 text-sm">No jobs for this stage.</div>
                  )}
                </div>
              </div>
            )}

            {/* ── Upload CSV Tab ── */}
            {activeTab === "upload" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
                  <Upload size={18} className="text-[#1e3a0f]" />
                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">Upload Supermove CSV</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Upload your combined_projects.csv export from Supermove to sync all project data.</p>
                  </div>
                </div>
                <div className="p-6 space-y-5">
                  {/* Drop zone */}
                  <div
                    onDragOver={(e) => { e.preventDefault(); setCsvDragOver(true); }}
                    onDragLeave={() => setCsvDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setCsvDragOver(false);
                      const file = e.dataTransfer.files[0];
                      if (file && file.name.endsWith(".csv")) setCsvUploadFile(file);
                    }}
                    className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors cursor-pointer ${
                      csvDragOver ? "border-[#75aa11] bg-green-50" : csvUploadFile ? "border-green-400 bg-green-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => document.getElementById("csv-file-input")?.click()}
                  >
                    <input
                      id="csv-file-input"
                      type="file"
                      accept=".csv"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setCsvUploadFile(file);
                      }}
                    />
                    {csvUploadFile ? (
                      <div className="flex flex-col items-center gap-2">
                        <FileText size={32} className="text-green-600" />
                        <div className="font-semibold text-gray-800">{csvUploadFile.name}</div>
                        <div className="text-xs text-gray-400">{(csvUploadFile.size / 1024).toFixed(1)} KB · Ready to upload</div>
                        <button
                          onClick={(e) => { e.stopPropagation(); setCsvUploadFile(null); setCsvUploadResult(null); }}
                          className="text-xs text-red-500 hover:text-red-700 underline mt-1"
                        >Remove</button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload size={32} className="text-gray-300" />
                        <div className="font-medium text-gray-600">Drag & drop your CSV here</div>
                        <div className="text-xs text-gray-400">or click to browse · .csv files only</div>
                      </div>
                    )}
                  </div>

                  {/* Instructions */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 space-y-1">
                    <div className="font-semibold">How to export from Supermove:</div>
                    <ol className="list-decimal list-inside space-y-0.5 text-xs text-blue-700">
                      <li>In Supermove, go to Reports</li>
                      <li>Export each report: Projects Created, Quotes Sent, Confirmations Sent, Quotes Completed, Confirmations Completed</li>
                      <li>Combine all exports into a single CSV (keep the header row once)</li>
                      <li>Upload the combined file here</li>
                    </ol>
                  </div>

                  {/* Upload button */}
                  <button
                    onClick={handleCsvUpload}
                    disabled={!csvUploadFile || csvUploading}
                    className="w-full py-3 bg-[#1e3a0f] hover:bg-[#2a5015] text-white rounded-xl font-semibold text-sm transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {csvUploading ? (
                      <><RefreshCw size={16} className="animate-spin" /> Uploading & syncing…</>
                    ) : (
                      <><Upload size={16} /> Upload & Sync All Projects</>
                    )}
                  </button>

                  {/* Result */}
                  {csvUploadResult && (
                    <div className={`rounded-xl p-4 border text-sm ${
                      csvUploadResult.success
                        ? "bg-green-50 border-green-200 text-green-800"
                        : "bg-red-50 border-red-200 text-red-800"
                    }`}>
                      {csvUploadResult.success ? (
                        <div className="space-y-1">
                          <div className="font-semibold">✓ Upload successful!</div>
                          {csvUploadResult.summary && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                              {[
                                { label: "CSV Projects", value: csvUploadResult.summary.csvProjects },
                                { label: "Updated", value: csvUploadResult.summary.updated },
                                { label: "Inserted", value: csvUploadResult.summary.inserted },
                                { label: "Skipped", value: csvUploadResult.summary.skipped },
                              ].map((s) => (
                                <div key={s.label} className="bg-white rounded-lg p-3 text-center border border-green-200">
                                  <div className="text-xl font-bold text-gray-900">{s.value}</div>
                                  <div className="text-xs text-gray-500">{s.label}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          <p className="text-xs text-green-700 mt-2">Dashboard has been refreshed with the latest data.</p>
                        </div>
                      ) : (
                        <div>
                          <div className="font-semibold">✗ Upload failed</div>
                          <div className="text-xs mt-1">{csvUploadResult.error}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── Analytics Tab ── */}
            {activeTab === "analytics" && (
              <div className="space-y-6">

                {/* Lead Volume Trend */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity size={16} className="text-[#75aa11]" />
                    <h2 className="text-sm font-semibold text-gray-800">Weekly Lead Volume (Last 12 Weeks)</h2>
                  </div>
                  <TrendChart leads={dateFilteredLeads} weeks={12} />
                </div>

                {/* Revenue Pipeline */}
                {smLeads.length > 0 && (
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <DollarSign size={16} className="text-[#75aa11]" />
                      <h2 className="text-sm font-semibold text-gray-800">Revenue Pipeline by Stage</h2>
                    </div>
                    <RevenuePipelineChart smLeads={smLeads} />
                  </div>
                )}

                {/* Two-column: Coordinator Leaderboard + Avg Job Value */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Coordinator Leaderboard */}
                  {coordinatorStats.length > 0 && (
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-2 mb-4">
                        <Award size={16} className="text-[#75aa11]" />
                        <h2 className="text-sm font-semibold text-gray-800">Coordinator Leaderboard</h2>
                      </div>
                      <div className="space-y-3">
                        {coordinatorStats.map((c, i) => (
                          <div key={c.name} className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${i === 0 ? "bg-yellow-100 text-yellow-700" : i === 1 ? "bg-gray-100 text-gray-600" : "bg-orange-50 text-orange-600"}`}>
                              {i + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-800 truncate">{c.name}</span>
                                <span className="text-sm font-bold text-gray-900 ml-2">{formatCurrency(c.revenue)}</span>
                              </div>
                              <div className="flex items-center gap-3 mt-0.5">
                                <span className="text-xs text-gray-400">{c.jobs} jobs</span>
                                <span className="text-xs text-gray-400">{c.booked} booked/completed</span>
                                <span className={`text-xs font-semibold ${c.closeRate >= 50 ? "text-green-600" : "text-gray-500"}`}>{c.closeRate}% close rate</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Avg Job Value + Lead-to-Book Time */}
                  <div className="space-y-4">
                    {avgJobValue.length > 0 && (
                      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-4">
                          <BarChart2 size={16} className="text-[#75aa11]" />
                          <h2 className="text-sm font-semibold text-gray-800">Avg Job Value by Stage</h2>
                        </div>
                        <MiniBarChart
                          data={avgJobValue.map((d) => ({
                            label: d.stage,
                            value: Math.round(d.avg),
                            color: STAGE_COLORS[d.stage],
                          }))}
                        />
                        <div className="mt-3 space-y-1">
                          {avgJobValue.map((d) => (
                            <div key={d.stage} className="flex items-center justify-between text-xs">
                              <span className="text-gray-500">{d.stage} ({d.count})</span>
                              <span className="font-semibold text-gray-800">{formatCurrency(d.avg)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {leadToBookTimes && (
                      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-4">
                          <Clock size={16} className="text-[#75aa11]" />
                          <h2 className="text-sm font-semibold text-gray-800">Lead-to-Move-Date Gap</h2>
                          <span className="text-xs text-gray-400 ml-auto">{leadToBookTimes.count} jobs</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{leadToBookTimes.avg}</div>
                            <div className="text-xs text-gray-400">avg days</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{leadToBookTimes.min}</div>
                            <div className="text-xs text-gray-400">min days</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-500">{leadToBookTimes.max}</div>
                            <div className="text-xs text-gray-400">max days</div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-3">Days between lead submission and scheduled move date for booked/completed jobs.</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Job Type Revenue */}
                {smLeads.length > 0 && (
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase size={16} className="text-[#75aa11]" />
                      <h2 className="text-sm font-semibold text-gray-800">Revenue by Job Type</h2>
                    </div>
                    <JobTypeRevenueChart smLeads={smLeads} />
                  </div>
                )}

                {/* Conversion Funnel */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter size={16} className="text-[#75aa11]" />
                    <h2 className="text-sm font-semibold text-gray-800">Conversion Funnel</h2>
                  </div>
                  <ConversionFunnel smLeads={smLeads} totalLeads={dateFilteredLeads.length} />
                </div>

                {/* Source page performance table */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={16} className="text-[#75aa11]" />
                    <h2 className="text-sm font-semibold text-gray-800">Source Page Performance</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left border-b border-gray-100">
                          <th className="pb-2 text-xs font-semibold text-gray-500">Page</th>
                          <th className="pb-2 text-xs font-semibold text-gray-500 text-right">Leads</th>
                          <th className="pb-2 text-xs font-semibold text-gray-500 text-right">Synced</th>
                          <th className="pb-2 text-xs font-semibold text-gray-500 text-right">Booked</th>
                          <th className="pb-2 text-xs font-semibold text-gray-500 text-right">Revenue</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {sourceGroups.slice(0, 15).map((g) => {
                          const synced = g.leads.filter((l) => l.smProjectNumber).length;
                          const booked = g.leads.filter((l) => getLeadStage(l) === "Booked" || getLeadStage(l) === "Completed").length;
                          const rev = g.leads.reduce((s, l) => s + parseCurrency(l.smTotalRevenue), 0);
                          return (
                            <tr key={g.sourcePage} className="hover:bg-gray-50/50">
                              <td className="py-2 font-mono text-xs text-gray-700 truncate max-w-[200px]">
                                <a href={`https://onthegomoving.com${g.sourcePage}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#75aa11] flex items-center gap-1">
                                  {g.sourcePage} <ExternalLink size={10} className="flex-shrink-0" />
                                </a>
                              </td>
                              <td className="py-2 text-right text-sm font-semibold text-gray-800">{g.count}</td>
                              <td className="py-2 text-right text-xs text-gray-500">{synced}</td>
                              <td className="py-2 text-right">
                                <span className={`text-xs font-semibold ${booked > 0 ? "text-green-600" : "text-gray-400"}`}>{booked}</span>
                              </td>
                              <td className="py-2 text-right text-xs font-semibold text-gray-700">{rev > 0 ? formatCurrency(rev) : "—"}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}
          </>
        )}

        {/* Empty state */}
        {!loading && dateFilteredLeads.length === 0 && !error && (
          <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
            <Users size={40} className="mx-auto text-gray-300 mb-3" />
            {leads.length > 0 && (dateFrom || dateTo) ? (
              <>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">No leads in this date range</h3>
                <p className="text-sm text-gray-400">Try adjusting the From / To dates, or clear the filter to see all {leads.length} leads.</p>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">No leads yet</h3>
                <p className="text-sm text-gray-400">Form submissions will appear here once the site receives traffic.</p>
              </>
            )}
          </div>
        )}

        <div className="text-center text-xs text-gray-300 pb-4">On The Go Moving & Storage — Internal Admin Tool</div>
      </div>
    </div>
  );
}
