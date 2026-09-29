import React from 'react';
import { 
  Building2, 
  User, 
  Calendar, 
  AlertTriangle, 
  CheckCircle2, 
  ListOrdered, 
  HelpCircle, 
  Sparkles, 
  Clock, 
  ShieldAlert, 
  FileText,
  BadgeAlert,
  History,
  FileCheck
} from 'lucide-react';
import HindsightChecklist from './HindsightChecklist';

export default function MeetingPreparationView({ preparation, memoryEnabled, onViewAllMemories }) {
  if (!preparation) {
    return (
      <div className="rounded-2xl glass-panel border border-[#EAE3D5] p-8 text-center bg-white/90 shadow-sm">
        <Sparkles className="w-8 h-8 text-[#15803D] mx-auto animate-pulse" />
        <h4 className="text-lg font-bold text-[#1C2B21] mt-3">Ready to Prepare</h4>
        <p className="text-sm text-[#5F5342] mt-1 max-w-md mx-auto">
          Click the <span className="text-[#15803D] font-bold">"Prepare Me for This Meeting"</span> button above to generate briefing notes with your selected memory mode.
        </p>
      </div>
    );
  }

  // --- MEMORY OFF VIEW ---
  if (!memoryEnabled || preparation.mode === 'MEMORY_OFF') {
    return (
      <div className="rounded-2xl glass-panel border border-[#EAE3D5] p-6 sm:p-8 bg-[#FDFCF9] shadow-md space-y-6">
        {/* Header Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#EAE3D5]">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#F4EFE6] text-[#7E6F58] border border-[#DED5C3]">
              <History className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#7E6F58]">
                Mode: Disconnected Context
              </span>
              <h3 className="text-xl font-bold text-[#1C2B21] tracking-tight">
                Generic AI Preparation
              </h3>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F4EFE6] text-[#7E6F58] border border-[#DED5C3] self-start sm:self-auto">
            Memory OFF
          </span>
        </div>

        {/* Warning callout: explains why it is generic */}
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-900 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-950">Zero Historical Awareness:</strong> The agent does not know that Sarah met with Acme 4 times before. It does not know Priya exists, that annual billing was chosen, or that SOC2 security documentation is blocking the deal.
          </div>
        </div>

        {/* Meeting Preparation generic bullets */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-[#5F5342] uppercase tracking-wider">
            Meeting Preparation
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(preparation.preparationItems || [
              "Review customer needs",
              "Discuss pricing",
              "Discuss implementation",
              "Discuss next steps"
            ]).map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#EAE3D5] text-[#1C2B21] text-sm font-semibold shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[#9E8D72]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Generic Agenda */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold text-[#5F5342] uppercase tracking-wider flex items-center gap-2">
            <ListOrdered className="w-4 h-4 text-[#7E6F58]" />
            <span>Standard Recommended Agenda</span>
          </h4>
          <ol className="space-y-2 text-sm text-[#1C2B21] bg-white p-4 rounded-xl border border-[#EAE3D5] shadow-sm">
            {(preparation.recommendedAgenda || [
              "1. Introductions and meeting goals",
              "2. Review customer requirements",
              "3. High-level pricing discussion",
              "4. Implementation overview",
              "5. Next steps and wrap-up"
            ]).map((step, idx) => (
              <li key={idx} className="flex items-center gap-2 text-[#5F5342]">
                <span className="font-mono text-[#9E8D72] text-xs font-bold">{idx + 1}.</span>
                <span>{step.replace(/^\d+\.\s*/, '')}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Generic Questions */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold text-[#5F5342] uppercase tracking-wider flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#7E6F58]" />
            <span>Generic Discovery Questions</span>
          </h4>
          <div className="space-y-2">
            {(preparation.suggestedQuestions || [
              "What are your primary goals for this quarter?",
              "What is your timeline for making a decision?",
              "Do you have any questions about our pricing?"
            ]).map((q, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#EAE3D5] text-xs sm:text-sm text-[#5F5342] italic shadow-sm">
                "{q}"
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 text-center text-xs text-[#7E6F58]">
          Label: <strong className="text-[#1C2B21]">Generic AI Preparation</strong> · No previous memories accessed
        </div>
      </div>
    );
  }

  // --- MEMORY ON VIEW (Personalized Preparation using Hindsight) ---
  return (
    <div className="rounded-2xl glass-panel border border-[#A7D4B3] p-6 sm:p-8 bg-[#F3F9F5] shadow-xl shadow-emerald-950/5 space-y-6">
      
      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#CBE5D3]">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-900/15">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-[#15803D]">
              Personalized Intelligence Briefing
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#1C2B21] tracking-tight">
              Powered by Persistent Memory
            </h3>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3] self-start sm:self-auto flex items-center gap-1.5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Hindsight Memory Active
        </span>
      </div>

      {/* Prominent Hindsight Checklist */}
      <HindsightChecklist 
        memories={preparation.hindsightChecklist}
        providerName={preparation.memoryProvider}
        onViewAllMemories={onViewAllMemories}
      />

      {/* Meeting Snapshot */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold text-[#15803D] uppercase tracking-wider flex items-center gap-2">
          <Building2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Meeting Snapshot</span>
        </h4>
        <div className="p-4 rounded-xl bg-white border border-[#CBE5D3] grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-sm">
          <div>
            <p className="text-[11px] text-[#7E6F58] font-medium">Company</p>
            <p className="text-sm font-bold text-[#1C2B21]">Acme Technologies</p>
          </div>
          <div>
            <p className="text-[11px] text-[#7E6F58] font-medium">Contact & Role</p>
            <p className="text-sm font-bold text-[#15803D]">John — Decision Maker</p>
          </div>
          <div>
            <p className="text-[11px] text-[#7E6F58] font-medium">Meeting Purpose</p>
            <p className="text-sm font-bold text-[#1C2B21]">Sales Follow-up</p>
          </div>
        </div>
      </div>

      {/* Open Commitments with ⚠ Alert format */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span>Open Commitments (Requires Sarah's Action)</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 shadow-sm">
            <span className="text-xl">⚠</span>
            <div>
              <p className="text-sm font-bold text-amber-950">Security documentation</p>
              <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                Priya requested SOC2 Type II reports and security whitepaper on Feb 8. Verify review status before asking for signature.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 shadow-sm">
            <span className="text-xl">⚠</span>
            <div>
              <p className="text-sm font-bold text-amber-950">Final proposal</p>
              <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                John requested the final executable agreement with annual billing terms ready for sign-off during this March 10 call.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stakeholders */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold text-[#15803D] uppercase tracking-wider flex items-center gap-2">
          <User className="w-4 h-4 text-emerald-600" />
          <span>Stakeholders</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-white border border-[#CBE5D3] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E4F2E8] text-[#15803D] font-bold flex items-center justify-center text-xs">
                J
              </div>
              <div>
                <p className="text-sm font-bold text-[#1C2B21]">John</p>
                <p className="text-xs text-[#5F5342]">VP of Operations</p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
              Decision Maker
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#CBE5D3] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E4F2E8] text-[#15803D] font-bold flex items-center justify-center text-xs">
                P
              </div>
              <div>
                <p className="text-sm font-bold text-[#1C2B21]">Priya</p>
                <p className="text-xs text-[#5F5342]">Head of InfoSec</p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
              Technical Lead
            </span>
          </div>
        </div>
      </div>

      {/* Previous Discussions */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold text-[#15803D] uppercase tracking-wider flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald-600" />
          <span>Previous Discussions</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-3 rounded-xl bg-white border border-[#CBE5D3] flex items-start gap-2.5 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#1C2B21]">
              <strong>Pricing concern was discussed</strong>
              <p className="text-[#5F5342] text-xs mt-0.5">Competitor X 15% discount resolved via annual contract terms.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#CBE5D3] flex items-start gap-2.5 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#1C2B21]">
              <strong>Annual billing was preferred</strong>
              <p className="text-[#5F5342] text-xs mt-0.5">Finance mandate specified by John for volume savings.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#CBE5D3] flex items-start gap-2.5 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#1C2B21]">
              <strong>Implementation time remains important</strong>
              <p className="text-[#5F5342] text-xs mt-0.5">Strict &lt;30-day go-live milestone schedule accepted by Sarah.</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#CBE5D3] flex items-start gap-2.5 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#1C2B21]">
              <strong>Security review is still pending</strong>
              <p className="text-[#5F5342] text-xs mt-0.5">Priya's technical team has not yet completed sign-off.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold text-[#15803D] uppercase tracking-wider flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-emerald-600" />
          <span>Suggested Questions (High-Impact Tactical)</span>
        </h4>
        <div className="space-y-2">
          {[
            "Has the technical team completed the security review?",
            "Are there remaining implementation concerns?",
            "Would you like to finalize the annual pricing proposal?"
          ].map((q, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#CBE5D3] text-xs sm:text-sm font-semibold text-[#1C2B21] flex items-center gap-3 shadow-sm">
              <span className="w-6 h-6 rounded-lg bg-[#E4F2E8] text-[#15803D] text-xs font-bold flex items-center justify-center shrink-0">
                Q{idx+1}
              </span>
              <span>"{q}"</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Agenda */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-bold text-[#5F5342] uppercase tracking-wider flex items-center gap-2">
          <ListOrdered className="w-4 h-4 text-[#15803D]" />
          <span>Recommended Agenda</span>
        </h4>
        <div className="p-4 rounded-xl bg-white border border-[#CBE5D3] shadow-sm">
          <ol className="space-y-2 text-xs sm:text-sm text-[#1C2B21]">
            {[
              "1. Security review status",
              "2. Implementation timeline",
              "3. Final proposal",
              "4. Annual billing",
              "5. Next steps"
            ].map((step, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#E4F2E8] text-[#15803D] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="font-bold text-[#1C2B21]">{step.replace(/^\d+\.\s*/, '')}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Final Provenance Label */}
      <div className="pt-2 text-center text-xs text-[#5F5342] border-t border-[#CBE5D3]">
        Label: <strong className="text-[#15803D]">Powered by Persistent Memory</strong> · 4 Historical Meetings Synthesized
      </div>
    </div>
  );
}
