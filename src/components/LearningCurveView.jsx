import React, { useState } from 'react';
import { TrendingUp, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LearningCurveView() {
  const [selectedMeetingIndex, setSelectedMeetingIndex] = useState(4); // Default to Meeting 5 (March 10)

  const progressionData = [
    {
      session: "Meeting 1",
      date: "Jan 10",
      title: "Initial Discovery",
      memoriesKnown: 3,
      personalizationLevel: 20,
      briefingStyle: "Generic Discovery",
      knownFacts: [
        "Met John for the first time",
        "Discovered he has signing authority",
        "Learned Acme is looking at Competitor X (-15%)"
      ],
      sampleQuestion: "What are your high-level goals for this quarter?"
    },
    {
      session: "Meeting 2",
      date: "Jan 24",
      title: "Pricing & Scoping",
      memoriesKnown: 6,
      personalizationLevel: 45,
      briefingStyle: "Basic Personalization",
      knownFacts: [
        "John revealed finance mandates annual billing",
        "Learned strict timeline requirement: must launch <30 days",
        "Sarah promised custom deployment schedule"
      ],
      sampleQuestion: "Does our proposed 30-day timeline meet your internal rollout schedule?"
    },
    {
      session: "Meeting 3",
      date: "Feb 8",
      title: "Technical Review",
      memoriesKnown: 9,
      personalizationLevel: 70,
      briefingStyle: "Contextual Stakeholder Mapping",
      knownFacts: [
        "Priya joined as Head of InfoSec / Technical Lead",
        "Priya questioned SOC2 Type II and encryption protocols",
        "Sarah committed to deliver security documentation"
      ],
      sampleQuestion: "Priya, have you reviewed our SOC2 compliance package and data residency specs?"
    },
    {
      session: "Meeting 4",
      date: "Feb 22",
      title: "Pre-Contract Alignment",
      memoriesKnown: 12,
      personalizationLevel: 90,
      briefingStyle: "High-Conviction Strategic Alignment",
      knownFacts: [
        "Commercial terms & annual discount accepted by John",
        "Security review flagged as sole remaining blocker",
        "John requested final executable agreement for next call"
      ],
      sampleQuestion: "Is InfoSec sign-off complete so John can execute the annual contract today?"
    },
    {
      session: "Meeting 5 (Upcoming)",
      date: "Mar 10",
      title: "Closing Call",
      memoriesKnown: 12,
      personalizationLevel: 100,
      briefingStyle: "Executive Superpower Briefing",
      knownFacts: [
        "Combines all 12 persistent memories across 4 past sessions",
        "Alerts Sarah on unresolved SOC2 sign-off blocker with Priya",
        "Primes Sarah to present the final annual agreement to John"
      ],
      sampleQuestion: "Has Priya cleared the security review, and are we ready to execute the annual agreement?"
    }
  ];

  const current = progressionData[selectedMeetingIndex];

  return (
    <div className="rounded-2xl glass-panel border border-[#EAE3D5] bg-white p-6 sm:p-8 space-y-6 shadow-md shadow-emerald-950/5">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE3D5] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3] mb-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Learning Progression Engine</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1C2B21] tracking-tight">
            How RecallMeet Gets Smarter Over Time
          </h3>
          <p className="text-xs sm:text-sm text-[#5F5342] mt-1">
            Watch the agent evolve from a generic chatbot into an executive-level co-pilot across 5 meetings.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-xs font-bold text-[#15803D] bg-[#E4F2E8] px-3 py-1.5 rounded-xl border border-[#A7D4B3]">
            {current.personalizationLevel}% Context Saturation
          </span>
        </div>
      </div>

      {/* Stepper Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
        {progressionData.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedMeetingIndex(idx)}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              selectedMeetingIndex === idx
                ? 'bg-[#E4F2E8] border-2 border-[#16A34A] shadow-md shadow-emerald-900/10 text-[#1C2B21]'
                : 'bg-[#FAF7F2] border-[#EAE3D5] text-[#7E6F58] hover:text-[#1C2B21] hover:bg-[#F4EFE6]'
            }`}
          >
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="font-bold">{item.session}</span>
              <span className="text-[#15803D] font-bold">{item.personalizationLevel}%</span>
            </div>
            <p className="text-xs font-bold text-[#1C2B21] mt-1 truncate">{item.title}</p>
            <p className="text-[10px] text-[#7E6F58] mt-0.5">{item.date}</p>
          </button>
        ))}
      </div>

      {/* Detailed Card for Selected Step */}
      <div className="p-5 rounded-2xl bg-[#F3F9F5] border border-[#A7D4B3] grid grid-cols-1 md:grid-cols-2 gap-6 shadow-sm">
        
        {/* Left Column: Memory Knowledge State */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
              Agent Knowledge State ({current.memoriesKnown} Memories)
            </span>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white border border-[#CBE5D3] text-[#15803D] font-bold shadow-sm">
              {current.briefingStyle}
            </span>
          </div>

          <div className="space-y-2">
            {current.knownFacts.map((fact, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-[#CBE5D3] text-xs font-medium text-[#1C2B21] shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Briefing Question Comparison */}
        <div className="space-y-3 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2E693F]">
              Synthesized Tactical Question
            </span>
            <div className="mt-2 p-4 rounded-xl bg-white border border-[#A7D4B3] text-xs sm:text-sm font-semibold text-[#15803D] italic shadow-sm">
              "{current.sampleQuestion}"
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#CBE5D3] text-[11px] text-[#5F5342] flex items-center justify-between shadow-sm">
            <span>Progressive Hindsight Consolidation:</span>
            <strong className="text-[#15803D]">
              {selectedMeetingIndex === 0 ? "Cold Start (Zero Prior Memory)" : `${selectedMeetingIndex * 25}% Deeper Contextual Accuracy`}
            </strong>
          </div>
        </div>

      </div>

    </div>
  );
}
