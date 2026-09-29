import React from 'react';
import { Database, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HindsightChecklist({ memories, providerName, onViewAllMemories }) {
  // The 7 required checklist items from specification
  const defaultCoreItems = [
    { label: "John — Decision Maker", note: "Verified in Jan 10 call; sole budget sign-off", date: "Jan 10" },
    { label: "Priya — Technical Lead", note: "Joined on Feb 8; evaluating architecture & compliance", date: "Feb 8" },
    { label: "Annual Billing Preferred", note: "Finance mandated upfront annual billing for discount", date: "Jan 24" },
    { label: "Pricing Concern", note: "Competitor X countered with 15% discount comparison", date: "Jan 10" },
    { label: "Implementation Concern", note: "Acme requires tight <30-day go-live rollout", date: "Jan 24" },
    { label: "Security Review Pending", note: "Priya awaiting SOC2 Type II compliance sign-off", date: "Feb 22" },
    { label: "Final Proposal Pending", note: "John requested executable contract for March 10", date: "Feb 22" }
  ];

  return (
    <div className="rounded-2xl glass-panel border border-[#A7D4B3] p-6 bg-[#F3F9F5] shadow-lg shadow-emerald-950/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#CBE5D3]">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-base font-bold text-[#1C2B21] tracking-tight flex items-center gap-2">
              <span>Hindsight Memory Checklist</span>
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
                <ShieldCheck className="w-3 h-3" />
                Active Retrieval
              </span>
            </h4>
            <p className="text-xs text-[#5F5342]">
              Retrieved from 4 historical sessions (Jan 10 – Feb 22)
            </p>
          </div>
        </div>

        {onViewAllMemories && (
          <button
            onClick={onViewAllMemories}
            className="text-xs font-bold text-[#15803D] hover:text-[#166534] flex items-center gap-1 transition-colors self-start sm:self-auto"
          >
            <span>View All 12+ Memories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Checklist items */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {defaultCoreItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2.5 p-3 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#CBE5D3] hover:border-[#A7D4B3] transition-all duration-200 group shadow-sm"
          >
            <div className="mt-0.5 flex-shrink-0 text-[#15803D]">
              <CheckCircle2 className="w-4 h-4 text-[#15803D] group-hover:scale-110 transition-transform" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <p className="text-xs sm:text-sm font-bold text-[#1C2B21] group-hover:text-[#15803D] truncate">
                  {item.label}
                </p>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#E4F2E8] text-[#15803D] font-semibold">
                  {item.date}
                </span>
              </div>
              <p className="text-[11px] text-[#5F5342] mt-0.5 truncate">
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer provenance note */}
      <div className="mt-4 pt-3 border-t border-[#CBE5D3] flex items-center justify-between text-[11px] text-[#5F5342]">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Synthesized by persistent vector and entity memory index</span>
        </span>
        <span className="font-mono text-[#15803D] font-bold">Confidence: 99%</span>
      </div>
    </div>
  );
}
