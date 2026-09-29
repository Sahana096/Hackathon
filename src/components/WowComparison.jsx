import React from 'react';
import { 
  Sparkles, 
  XCircle, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight,
  User,
  Clock,
  ListOrdered
} from 'lucide-react';

export default function WowComparison() {
  return (
    <section className="space-y-6 pt-4">
      
      {/* Title & Subtitle */}
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>The Core Innovation</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#1C2B21] tracking-tight">
          Same Meeting. Different Preparation.
        </h2>
        <p className="text-sm sm:text-base text-[#5F5342]">
          Observe what happens when an AI agent has zero memory versus persistent cross-meeting intelligence.
        </p>
      </div>

      {/* Side-by-Side Comparison Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        {/* LEFT COLUMN: Memory OFF (Generic) */}
        <div className="rounded-2xl glass-panel border border-[#EAE3D5] p-6 sm:p-7 bg-white shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-5">
            {/* Column Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D5]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E6F58]">
                  Standard AI (No Memory)
                </span>
                <h3 className="text-xl font-bold text-[#5F5342] flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-[#9E8D72]" />
                  <span>Memory OFF</span>
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#F4EFE6] text-[#7E6F58] border border-[#DED5C3]">
                Generic
              </span>
            </div>

            {/* Preparation Summary */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-[#7E6F58] uppercase tracking-wider">
                Meeting Preparation
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5F5342]">
                <li className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#EAE3D5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E8D72]" />
                  <span>Review customer needs</span>
                </li>
                <li className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#EAE3D5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E8D72]" />
                  <span>Discuss pricing</span>
                </li>
                <li className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#EAE3D5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E8D72]" />
                  <span>Discuss implementation</span>
                </li>
                <li className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#EAE3D5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E8D72]" />
                  <span>Discuss next steps</span>
                </li>
              </ul>
            </div>

            {/* Questions Asked */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-[#7E6F58] uppercase tracking-wider">
                Suggested Questions
              </p>
              <div className="space-y-1.5 text-xs text-[#7E6F58] italic bg-[#FAF7F2] p-3 rounded-xl border border-[#EAE3D5]">
                <p>"What are your primary goals for this quarter?"</p>
                <p>"What is your timeline for making a decision?"</p>
                <p>"Do you have any questions about our pricing?"</p>
              </div>
            </div>

            {/* Deficiencies Callout */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-900 space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>The Failure of Meeting Amnesia:</span>
              </p>
              <p className="text-[11px] text-amber-800 leading-relaxed">
                Normal AI treats Meeting #5 exactly like Meeting #1. It asks basic discovery questions, ignores that John is the economic buyer, and doesn't know that Priya's security review is holding up the deal.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#EAE3D5] text-center text-xs text-[#7E6F58]">
            Result: <strong className="text-[#5F5342]">Reps appear unprepared & unorganized</strong>
          </div>
        </div>

        {/* RIGHT COLUMN: Memory ON (RecallMeet + Hindsight) */}
        <div className="rounded-2xl glass-panel border-2 border-[#16A34A] p-6 sm:p-7 bg-[#F3F9F5] shadow-xl shadow-emerald-950/10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-5 relative z-10">
            {/* Column Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#A7D4B3]">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803D]">
                  Powered by Hindsight Memory
                </span>
                <h3 className="text-xl font-bold text-[#1C2B21] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#15803D]" />
                  <span>Memory ON</span>
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3] shadow-sm">
                Personalized
              </span>
            </div>

            {/* Core Hindsight Checklist */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-[#15803D] uppercase tracking-wider">
                Recalled Context & Commitments
              </p>
              <ul className="space-y-1.5 text-xs text-[#1C2B21]">
                <li className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#CBE5D3] shadow-sm">
                  <span className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                    John — Decision Maker
                  </span>
                  <span className="text-[10px] text-[#5F5342]">Sole economic buyer</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#CBE5D3] shadow-sm">
                  <span className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                    Priya — Technical Lead
                  </span>
                  <span className="text-[10px] text-[#5F5342]">InfoSec sign-off</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#CBE5D3] shadow-sm">
                  <span className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                    Annual Billing Mandated
                  </span>
                  <span className="text-[10px] text-[#15803D] font-bold">98% confidence</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-950 font-bold">
                  <span className="flex items-center gap-2">
                    <span className="text-amber-600">⚠</span>
                    Security Review Pending
                  </span>
                  <span className="text-[10px] text-amber-800">Critical Deal Blocker</span>
                </li>
              </ul>
            </div>

            {/* Tactical Closing Questions */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-[#15803D] uppercase tracking-wider">
                High-Impact Tactical Questions
              </p>
              <div className="space-y-1.5 text-xs text-[#1C2B21] font-semibold bg-white p-3 rounded-xl border border-[#CBE5D3] shadow-sm">
                <p className="text-[#15803D]">"Has Priya's technical team completed the security review?"</p>
                <p>"Are there remaining implementation timeline concerns before rollout?"</p>
                <p>"Would you like to finalize and execute the annual pricing proposal today?"</p>
              </div>
            </div>

            {/* Superpower Callout */}
            <div className="p-3.5 rounded-xl bg-[#E4F2E8] border border-[#A7D4B3] text-xs text-[#15803D] space-y-1 shadow-sm">
              <p className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>The Superpower of Persistent Memory:</span>
              </p>
              <p className="text-[11px] text-[#2E693F] leading-relaxed">
                RecallMeet gives the rep an executive unfair advantage: entering the room knowing the exact blockers, stakeholders, and next steps needed to close the deal.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#A7D4B3] text-center text-xs text-[#15803D]">
            Result: <strong className="text-[#15803D]">Executive-level prep that closes contracts faster</strong>
          </div>
        </div>

      </div>

    </section>
  );
}
