import React, { useState } from 'react';
import { PlusCircle, Sparkles, X, Brain, CheckCircle2, ArrowRight, FileText, Calendar, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { api } from '../services/api';

export default function RetainMeetingModal({ isOpen, onClose, onRetainedSuccess }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('March 1, 2026');
  const [notes, setNotes] = useState('');
  const [attendee, setAttendee] = useState('Priya');
  const [isRetaining, setIsRetaining] = useState(false);
  const [stepStatus, setStepStatus] = useState('');

  if (!isOpen) return null;

  const prefillOption1 = () => {
    setTitle("InfoSec Debrief with Priya");
    setDate("March 1, 2026");
    setAttendee("Priya");
    setNotes("Quick 20-min sync with Priya. She reviewed the SOC2 Type II report and confirmed our security compliance review is officially APPROVED and signed off! However, she asked that we guarantee 24/7 dedicated Slack channel support and 99.99% uptime SLA in the contract.");
  };

  const prefillOption2 = () => {
    setTitle("Commercial Alignment with John");
    setDate("March 5, 2026");
    setAttendee("John");
    setNotes("John checked in: confirmed board approval for annual upfront billing! He reiterated he wants the executable agreement ready for signature during our scheduled March 10 call.");
  };

  const handleRetain = async (e) => {
    e.preventDefault();
    if (!notes.trim()) return;

    setIsRetaining(true);
    setStepStatus("1. Retaining transcript into Hindsight ingestion queue...");

    setTimeout(async () => {
      setStepStatus("2. Extracting World facts, Experiences & Observations...");
      
      try {
        const res = await api.retainNewMeeting({
          title: title || "Ad-hoc Sync",
          date,
          notes,
          attendees: [attendee]
        });

        setTimeout(() => {
          setStepStatus("3. Running Hindsight Reflect: Consolidating mental models...");
          
          setTimeout(() => {
            setIsRetaining(false);
            confetti({
              particleCount: 70,
              spread: 60,
              origin: { y: 0.6 }
            });
            if (onRetainedSuccess) onRetainedSuccess(res);
            onClose();
          }, 800);
        }, 800);
      } catch (err) {
        console.error(err);
        setIsRetaining(false);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl glass-panel border border-[#EAE3D5] bg-[#FAF7F2] shadow-2xl p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D5]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#E4F2E8] text-[#15803D] flex items-center justify-center border border-[#A7D4B3]">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1C2B21]">Retain New Meeting to Hindsight</h3>
              <p className="text-xs text-[#5F5342]">Ingest notes or transcripts to update agent memory</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#7E6F58] hover:text-[#1C2B21] hover:bg-[#F4EFE6]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Demo Quick-Fills */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-[#5F5342] uppercase tracking-wider">
            Quick 1-Click Demo Scenarios (For Live Pitch):
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={prefillOption1}
              className="px-3 py-1.5 rounded-xl bg-[#E4F2E8] hover:bg-[#CBE5D3] border border-[#A7D4B3] text-[#15803D] text-xs font-bold text-left transition-colors shadow-sm"
            >
              ⚡ Scenario A: Priya approves SOC2 Security Review
            </button>
            <button
              type="button"
              onClick={prefillOption2}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#EAE3D5] text-[#1C2B21] text-xs font-bold text-left transition-colors shadow-sm"
            >
              ⚡ Scenario B: John confirms Board Sign-Off
            </button>
          </div>
        </div>

        <form onSubmit={handleRetain} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1C2B21]">Meeting Title</label>
              <input
                type="text"
                placeholder="e.g. InfoSec Check-in"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#EAE3D5] text-xs text-[#1C2B21] focus:outline-none focus:border-[#15803D] shadow-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1C2B21]">Meeting Date</label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#EAE3D5] text-xs text-[#1C2B21] focus:outline-none focus:border-[#15803D] shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#1C2B21] flex items-center justify-between">
              <span>Transcript or Meeting Notes (Input to Hindsight)</span>
              <span className="text-[10px] text-[#15803D] font-bold">Extracts World, Experiences, Observations & Opinions</span>
            </label>
            <textarea
              rows={4}
              placeholder="Paste raw transcript or bullet notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 rounded-xl bg-white border border-[#EAE3D5] text-xs text-[#1C2B21] placeholder-[#9E8D72] focus:outline-none focus:border-[#15803D] font-sans leading-relaxed shadow-sm"
            />
          </div>

          {isRetaining && (
            <div className="p-3.5 rounded-xl bg-[#E4F2E8] border border-[#A7D4B3] text-[#15803D] text-xs font-bold flex items-center gap-2.5 animate-pulse shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-mono">{stepStatus}</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end gap-2.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#5F5342] border border-[#EAE3D5] text-xs font-bold shadow-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isRetaining || !notes.trim()}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold shadow-md shadow-emerald-900/15 flex items-center gap-1.5 disabled:opacity-50"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
              <span>{isRetaining ? "Ingesting to Hindsight..." : "Retain to Hindsight (Ingest & Reflect)"}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
