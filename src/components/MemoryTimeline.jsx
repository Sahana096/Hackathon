import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Clock, CheckCircle2, ChevronRight, Brain } from 'lucide-react';

export default function MemoryTimeline({ activeEventId, onSelectEvent }) {
  const [visibleItems, setVisibleItems] = useState(0);

  const timelineEvents = [
    {
      id: "timeline-1",
      date: "January 10",
      icon: "🧠",
      title: "Pricing concern learned",
      subtitle: "Meeting 1 · Initial Discovery",
      description: "John identified as sole decision maker. Competitor X referenced at 15% discount. Sarah promised pricing breakdown.",
      tags: ["Pricing Concern", "Decision Maker", "Competitor X"],
      status: "Ingested",
      badgeColor: "bg-[#E4F2E8] text-[#15803D] border-[#A7D4B3]"
    },
    {
      id: "timeline-2",
      date: "January 24",
      icon: "🧠",
      title: "Annual billing preference learned",
      subtitle: "Meeting 2 · Pricing & Scoping",
      description: "Finance mandates annual upfront billing. Implementation time flagged as strict constraint (<30 days).",
      tags: ["Annual Billing", "Implementation <30d"],
      status: "Ingested",
      badgeColor: "bg-[#E4F2E8] text-[#15803D] border-[#A7D4B3]"
    },
    {
      id: "timeline-3",
      date: "February 8",
      icon: "🧠",
      title: "Priya identified as technical lead",
      subtitle: "Meeting 3 · Architecture Review",
      description: "Priya joined evaluation. Demanded SOC2 compliance & security architecture docs before approval.",
      tags: ["Priya (Tech Lead)", "Security Docs Requested"],
      status: "Ingested",
      badgeColor: "bg-[#E4F2E8] text-[#15803D] border-[#A7D4B3]"
    },
    {
      id: "timeline-4",
      date: "February 22",
      icon: "🧠",
      title: "Security review still pending",
      subtitle: "Meeting 4 · Commercial Alignment",
      description: "Pricing accepted. Security review still pending. John requested final executable contract for next meeting.",
      tags: ["Security Review Pending", "Final Proposal Needed"],
      status: "Ingested",
      badgeColor: "bg-amber-500/10 text-amber-800 border-amber-300"
    },
    {
      id: "timeline-5",
      date: "March 10",
      icon: "✨",
      title: "Memories combined into personalized preparation",
      subtitle: "Upcoming Meeting · Sales Follow-up",
      description: "Sarah enters the call knowing Priya's pending security approval is the gating item and John wants to sign the annual proposal.",
      tags: ["AI Synthesis", "Contextual Advantage"],
      status: "Target Meeting",
      isHighlight: true,
      badgeColor: "bg-[#E4F2E8] text-[#15803D] border-[#A7D4B3]"
    }
  ];

  // Staggered animation when loading
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev < timelineEvents.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="space-y-6 pt-4">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3] mb-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Temporal Evolution</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1C2B21] tracking-tight">
            Memory Timeline
          </h3>
          <p className="text-xs sm:text-sm text-[#5F5342]">
            How the agent accumulated intelligence across 59 days of interactions.
          </p>
        </div>

        <span className="text-xs font-mono px-3 py-1 rounded-full bg-white border border-[#EAE3D5] text-[#5F5342] font-semibold self-start sm:self-auto shadow-sm">
          5 Chronological Touchpoints
        </span>
      </div>

      {/* Timeline items */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#A7D4B3] before:via-emerald-500 before:to-emerald-700">
        {timelineEvents.map((evt, idx) => {
          const isVisible = idx < visibleItems;
          const isSelected = activeEventId === evt.id;

          return (
            <div
              key={evt.id}
              className={`relative transition-all duration-500 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {/* Timeline Bullet Node */}
              <div 
                className={`absolute -left-[30px] sm:-left-[35px] top-1.5 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-sm sm:text-base border-2 shadow-sm transition-transform ${
                  evt.isHighlight
                    ? 'bg-gradient-to-tr from-emerald-600 to-teal-600 border-white text-white scale-110 shadow-emerald-700/30 animate-pulse'
                    : 'bg-white border-[#A7D4B3] text-[#15803D]'
                }`}
              >
                <span>{evt.icon}</span>
              </div>

              {/* Event Card */}
              <div
                onClick={() => onSelectEvent && onSelectEvent(evt)}
                className={`p-4 sm:p-5 rounded-2xl glass-panel border transition-all duration-200 cursor-pointer ${
                  evt.isHighlight
                    ? 'bg-[#F3F9F5] border-2 border-[#16A34A] shadow-md shadow-emerald-950/10'
                    : 'bg-white border-[#EAE3D5] hover:border-[#A7D4B3] hover:bg-[#FAF7F2] shadow-sm'
                } ${isSelected ? 'ring-2 ring-emerald-500' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-[#15803D]">
                      {evt.date}
                    </span>
                    <span className="text-[#CBE5D3]">•</span>
                    <span className="text-xs text-[#5F5342] font-semibold">
                      {evt.subtitle}
                    </span>
                  </div>

                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border self-start sm:self-auto ${evt.badgeColor}`}>
                    {evt.status}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#1C2B21] mt-1.5 tracking-tight flex items-center gap-2">
                  <span>{evt.title}</span>
                  {evt.isHighlight && (
                    <Sparkles className="w-4 h-4 text-emerald-600 animate-spin-slow" />
                  )}
                </h4>

                <p className="text-xs sm:text-sm text-[#5F5342] mt-1 leading-relaxed">
                  {evt.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {evt.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-[#FAF7F2] border border-[#EAE3D5] text-[#5F5342]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
