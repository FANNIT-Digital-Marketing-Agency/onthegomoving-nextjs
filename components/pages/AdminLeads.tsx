"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc";
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
import { RefreshCw, Search, Download, CheckCircle2, XCircle, Clock, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export default function AdminLeads() {
  const [search, setSearch] = useState("");

  const [retryingId, setRetryingId] = useState<number | null>(null);

  const { data: leads, isLoading, refetch, isFetching } = trpc.leads.getAll.useQuery(
    { limit: 500 },
    { refetchInterval: 60_000 } // auto-refresh every 60s
  );

  const retryWebhook = trpc.leads.retryWebhook.useMutation({
    onMutate: ({ leadId }) => setRetryingId(leadId),
    onSuccess: (result, { leadId }) => {
      setRetryingId(null);
      if (result.success) {
        toast.success(`Lead #${leadId} synced to SuperMove successfully.`);
      } else {
        toast.error(`Retry failed for lead #${leadId}. Webhook still failing.`);
      }
      refetch();
    },
    onError: (_err, { leadId }) => {
      setRetryingId(null);
      toast.error(`Error retrying lead #${leadId}. Please try again.`);
    },
  });

  const filtered = leads?.filter((lead) => {
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
    total: leads?.length ?? 0,
    synced: leads?.filter((l) => l.webhookStatus === "synced").length ?? 0,
    failed: leads?.filter((l) => l.webhookStatus === "failed").length ?? 0,
    pending: leads?.filter((l) => l.webhookStatus === "pending").length ?? 0,
  };

  const exportCSV = () => {
    if (!filtered) return;
    const headers = [
      "ID", "Name", "Phone", "Email", "Move Date", "Move Type",
      "From Zip", "To Zip", "Wants Storage", "Source Page", "Source Label",
      "Webhook Status", "Submitted At"
    ];
    const rows = filtered.map((l) => [
      l.id,
      `"${l.fullName}"`,
      l.phone,
      l.email,
      l.moveDate ?? "",
      l.moveType ?? "",
      l.fromZip ?? "",
      l.toZip ?? "",
      l.wantsStorage ? "Yes" : "No",
      `"${l.sourcePage ?? ""}"`,
      `"${l.sourceLabel ?? ""}"`,
      l.webhookStatus,
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

  const WebhookBadge = ({ status }: { status: string }) => {
    if (status === "synced") return (
      <Badge className="bg-green-100 text-green-800 border-green-200 gap-1">
        <CheckCircle2 size={12} /> Synced
      </Badge>
    );
    if (status === "failed") return (
      <Badge className="bg-red-100 text-red-800 border-red-200 gap-1">
        <XCircle size={12} /> Failed
      </Badge>
    );
    return (
      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 gap-1">
        <Clock size={12} /> Pending
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Lead Submissions
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">All quote form submissions, On The Go Moving</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => refetch()}
              disabled={isFetching}
              className="gap-1.5"
            >
              <RefreshCw size={14} className={isFetching ? "animate-spin" : ""} />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={exportCSV}
              disabled={!filtered?.length}
              className="gap-1.5"
            >
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
            { label: "Synced to SuperMove", value: stats.synced, color: "text-green-700" },
            { label: "Webhook Failed", value: stats.failed, color: "text-red-700" },
            { label: "Pending", value: stats.pending, color: "text-yellow-700" },
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
            placeholder="Search by name, email, phone, move type, or source…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-16 text-gray-400">
              <RefreshCw size={20} className="animate-spin mr-2" /> Loading leads…
            </div>
          ) : !filtered?.length ? (
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
                    <TableHead className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Source</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-600 uppercase tracking-wide">SuperMove</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Submitted</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((lead) => (
                    <TableRow key={lead.id} className="hover:bg-gray-50 transition-colors">
                      <TableCell>
                        <div className="font-medium text-gray-900">{lead.fullName}</div>
                        {lead.wantsStorage === 1 && (
                          <span className="text-xs text-green-700 font-medium">+ Free Storage</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-700">{lead.phone}</div>
                        <div className="text-xs text-gray-500">{lead.email}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-700 capitalize">{lead.moveType ?? "-"}</div>
                        <div className="text-xs text-gray-500">
                          {lead.fromZip && lead.toZip
                            ? `${lead.fromZip} → ${lead.toZip}`
                            : lead.fromZip ?? lead.toZip ?? "-"}
                        </div>
                        {lead.moveDate && (
                          <div className="text-xs text-gray-400">{lead.moveDate}</div>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="text-xs text-gray-700 font-medium">{lead.sourceLabel ?? "-"}</div>
                        <div className="text-xs text-gray-400 truncate max-w-[180px]" title={lead.sourcePage ?? ""}>
                          {lead.sourcePage ?? ""}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <WebhookBadge status={lead.webhookStatus} />
                          {(lead.webhookStatus === "failed" || lead.webhookStatus === "pending") && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-6 px-2 text-xs gap-1 text-orange-700 border-orange-200 hover:bg-orange-50"
                              disabled={retryingId === lead.id}
                              onClick={() => retryWebhook.mutate({ leadId: lead.id })}
                            >
                              <RotateCcw size={10} className={retryingId === lead.id ? "animate-spin" : ""} />
                              {retryingId === lead.id ? "Retrying…" : "Retry"}
                            </Button>
                          )}
                        </div>
                        {lead.webhookStatus === "failed" && lead.webhookError && (
                          <div className="text-xs text-red-500 mt-1 max-w-[160px] truncate" title={lead.webhookError}>
                            {lead.webhookError}
                          </div>
                        )}
                      </TableCell>
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

        {filtered && filtered.length > 0 && (
          <p className="text-xs text-gray-400 text-center">
            Showing {filtered.length} of {stats.total} leads · Auto-refreshes every 60 seconds
          </p>
        )}
      </div>
    </div>
  );
}
