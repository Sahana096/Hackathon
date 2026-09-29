import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Building2, 
  MessageSquare, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  Brain, 
  ArrowRight,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import MemoryTimeline from '../components/MemoryTimeline';

export default function MeetingsPage({ onNavigateToPrepare }) {
  const [expandedMeetingId, setExpandedMeetingId] = useState("meeting-4");

  const meetings = [
    {
      id: "meeting-1",
      number: "Meeting 1",
      date: "January 10, 2026",
      title: "Initial Discovery & Intro Call",
      type: "Introductory Discovery",
      contact: "John",
      contactRole: "VP of Operations / Decision Maker",
      duration: "45 mins",
      summary: "Acme expressed high initial interest in the platform. Pricing concerns emerged after John referenced Competitor X offering a 15% discount. John established that he is the sole economic decision maker.",
      keyPoints: [
        "Acme interested in product for cross-team workflow automation",
        "Pricing concern raised regarding enterprise tier cost",
        "Competitor X mentioned as providing alternative 15% discount",
        "John is decision maker with sole signing authority",
        "Sarah promised pricing information and ROI breakdown"
      ],
      commitments: [
        { owner: "Sarah", text: "Send pricing structure & ROI calculations", status: "Fulfilled" }
      ],
      extractedMemories: [
        "John — Decision Maker",
        "Pricing Concern (Competitor X)",
        "Sarah Promised Pricing Information"
      ],
      quote: "John: 'I like what I see, but pricing will be key. Competitor X is quoting us a 15% lower entry point, and I sign the checks here.'"
    },
    {
      id: "meeting-2",
      number: "Meeting 2",
      date: "January 24, 2026",
      title: "Pricing Review & Implementation Scoping",
      type: "Solution Review",
      contact: "John",
      contactRole: "VP of Operations / Decision Maker",
      duration: "40 mins",
      summary: "Pricing information was reviewed. John indicated that Acme's finance department mandates annual upfront billing rather than monthly to capture discounts. However, implementation timeline is a strict concern—they need go-live in under 30 days.",
      keyPoints: [
        "Pricing information sent and reviewed",
        "Annual billing preferred by Acme's finance department",
        "Implementation time is a major concern (<30 days required)",
        "John enthusiastic about capabilities",
        "Sarah promised concrete 30-day implementation roadmap"
      ],
      commitments: [
        { owner: "Sarah", text: "Deliver 30-day accelerated implementation roadmap", status: "Fulfilled" }
      ],
      extractedMemories: [
        "Annual Billing Preferred",
        "Implementation Concern (<30 days)",
        "Sarah Promised Implementation Timeline"
      ],
      quote: "John: 'Annual billing works best for our finance team if the discount makes sense. However, our team cannot tolerate a 3-month rollout—we need this live in under 30 days.'"
    },
    {
      id: "meeting-3",
      number: "Meeting 3",
      date: "February 8, 2026",
      title: "Technical Review & InfoSec Due Diligence",
      type: "Technical Review",
      contact: "John & Priya",
      contactRole: "John (VP Ops), Priya (Head of InfoSec)",
      duration: "55 mins",
      summary: "Sarah presented the 30-day timeline which satisfied John. However, Priya joined as Technical Lead and raised strict security requirements. She requested SOC2 Type II reports, encryption specs, and security compliance whitepapers before technical sign-off.",
      keyPoints: [
        "30-day implementation roadmap approved by John",
        "Priya introduced as Technical Lead and Head of InfoSec",
        "Security concerns raised: encryption at rest, SOC2 Type II",
        "Priya requested complete compliance documentation before sign-off",
        "Sarah promised security documentation package to Priya"
      ],
      commitments: [
        { owner: "Sarah", text: "Provide SOC2 Type II reports and security documentation to Priya", status: "Delivered (Review Pending)" }
      ],
      extractedMemories: [
        "Priya — Technical Lead",
        "Security Concern (SOC2 Type II)",
        "Sarah Promised Security Documentation"
      ],
      quote: "Priya: 'From an engineering standpoint the API looks clean, but InfoSec requires SOC2 Type II reports and data sovereignty verification before I can sign off.'"
    },
    {
      id: "meeting-4",
      number: "Meeting 4",
      date: "February 22, 2026",
      title: "Pre-Contract Alignment & Commercial Scope",
      type: "Commercial Alignment",
      contact: "John",
      contactRole: "VP of Operations / Decision Maker",
      duration: "35 mins",
      summary: "John confirmed that pricing hurdles have been cleared via the annual billing terms. However, Priya's security review is still pending. Implementation speed remains important, and John requested the final executable agreement ready for the March 10 meeting.",
      keyPoints: [
        "Pricing mostly accepted based on annual billing discount",
        "Security review is still pending on Priya's end",
        "Implementation time remains a top priority (<30 days)",
        "John requested final proposal and executable Master Services Agreement",
        "Security documentation needs follow-up with Priya"
      ],
      commitments: [
        { owner: "Sarah", text: "Follow up with Priya on pending security review", status: "Open / High Priority" },
        { owner: "Sarah", text: "Prepare final executable agreement with annual billing", status: "Open / Critical" }
      ],
      extractedMemories: [
        "Pricing Mostly Accepted",
        "Security Review Pending (Priya)",
        "Implementation Time Remains Important",
        "Final Proposal Pending (John requested)"
      ],
      quote: "John: 'We are aligned on the annual pricing numbers. But Priya's security review is still pending on our end, and I need the final formal proposal before we can execute.'"
    }
  ];

  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE3D5] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3] mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Meeting History & Timeline</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C2B21] tracking-tight">
            Interactions with Acme Technologies
          </h1>
          <p className="text-sm text-[#5F5342] mt-1">
            4 prior sessions retained by Hindsight to build continuous relationship intelligence.
          </p>
        </div>

        <button
          onClick={onNavigateToPrepare}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold shadow-md shadow-emerald-900/15 transition-all self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
          <span>Prepare March 10 Meeting</span>
        </button>
      </div>

      {/* Target Upcoming Meeting Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#E4F2E8] border border-[#A7D4B3] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-[#15803D] border border-[#A7D4B3] flex items-center justify-center font-bold shadow-sm">
            ✨
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#15803D]">
                Upcoming Target Meeting
              </span>
              <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-white text-[#15803D] border border-[#A7D4B3]">
                Closing Call
              </span>
            </div>
            <h3 className="text-base font-bold text-[#1C2B21]">
              Meeting 5 · March 10, 2026 · 10:00 AM
            </h3>
            <p className="text-xs text-[#5F5342]">
              Objective: Clear Priya's pending security sign-off and execute John's requested annual agreement.
            </p>
          </div>
        </div>

        <button
          onClick={onNavigateToPrepare}
          className="px-4 py-2 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#15803D] border border-[#A7D4B3] text-xs font-bold transition-all whitespace-nowrap shadow-sm"
        >
          Generate Pre-Meeting Briefing →
        </button>
      </div>

      {/* Meetings Accordion List */}
      <div className="space-y-4">
        {meetings.map((meeting) => {
          const isExpanded = expandedMeetingId === meeting.id;

          return (
            <div
              key={meeting.id}
              className={`rounded-2xl glass-panel border transition-all duration-200 overflow-hidden ${
                isExpanded 
                  ? 'border-[#16A34A] bg-[#F3F9F5] shadow-md shadow-emerald-950/10' 
                  : 'border-[#EAE3D5] bg-white hover:border-[#A7D4B3]'
              }`}
            >
              {/* Header Bar */}
              <div
                onClick={() => setExpandedMeetingId(isExpanded ? null : meeting.id)}
                className="p-5 flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                    isExpanded ? 'bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]' : 'bg-[#FAF7F2] text-[#5F5342]'
                  }`}>
                    #{meeting.id.split('-')[1]}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-[#15803D]">
                        {meeting.date}
                      </span>
                      <span className="text-[#DED5C3]">•</span>
                      <span className="text-xs text-[#5F5342] font-semibold">
                        {meeting.type}
                      </span>
                      <span className="text-[#DED5C3]">•</span>
                      <span className="text-xs text-[#7E6F58]">
                        {meeting.duration}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#1C2B21] mt-0.5">
                      {meeting.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
                    {meeting.extractedMemories.length} Memories Learned
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-[#15803D]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#7E6F58]" />
                  )}
                </div>
              </div>

              {/* Expanded Details Body */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-[#CBE5D3] space-y-4">
                  
                  {/* Summary */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#5F5342] mb-1">
                      Meeting Summary
                    </p>
                    <p className="text-xs sm:text-sm text-[#1C2B21] leading-relaxed">
                      {meeting.summary}
                    </p>
                  </div>

                  {/* Verbatim Quote Snippet */}
                  <div className="p-3.5 rounded-xl bg-white border border-[#CBE5D3] text-xs text-[#5F5342] italic shadow-sm">
                    "{meeting.quote}"
                  </div>

                  {/* Key Points & Extracted Memories */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    
                    {/* Key Discussions */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5F5342]">
                        Key Points Discussed
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#1C2B21]">
                        {meeting.keyPoints.map((kp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-1.5 shrink-0" />
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Extracted Memories */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#15803D] flex items-center gap-1.5">
                        <Brain className="w-3.5 h-3.5" />
                        <span>Hindsight Memories Extracted</span>
                      </p>
                      <div className="space-y-1.5">
                        {meeting.extractedMemories.map((mem, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#CBE5D3] text-xs font-bold text-[#15803D] shadow-sm"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                            <span>{mem}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Commitments Made */}
                  {meeting.commitments && meeting.commitments.length > 0 && (
                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5">
                        Action Items & Commitments
                      </p>
                      <div className="space-y-1.5">
                        {meeting.commitments.map((com, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-950 font-medium"
                          >
                            <span><strong>{com.owner}:</strong> {com.text}</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-amber-900 border border-amber-300">
                              {com.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Embedded Chronological Memory Timeline */}
      <div className="pt-8 border-t border-[#EAE3D5]">
        <MemoryTimeline />
      </div>

    </div>
  );
}
