import React from 'react';
import { 
  Building2, 
  Calendar, 
  Clock, 
  User, 
  Briefcase, 
  Sparkles, 
  ArrowRight,
  ShieldAlert,
  FileCheck2,
  Video
} from 'lucide-react';

export default function UpcomingMeetingCard({ 
  onPrepare, 
  isPreparing, 
  memoryEnabled 
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl glass-panel border border-[#EAE3D5] p-6 sm:p-8 bg-white/90 shadow-xl shadow-emerald-950/5">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#E4F2E8]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left Side: Meeting Details */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Upcoming Meeting
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF7F2] text-[#5F5342] border border-[#EAE3D5]">
              <Briefcase className="w-3.5 h-3.5 text-[#7E6F58]" />
              Sales Follow-up
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
              <Video className="w-3.5 h-3.5" />
              Zoom Confirmed
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C2B21] tracking-tight flex items-center gap-3">
              <Building2 className="w-7 h-7 text-[#15803D] shrink-0" />
              <span>Acme Technologies</span>
            </h2>
            <p className="text-[#5F5342] text-sm sm:text-base mt-1">
              Final pre-contract alignment and technical sign-off review.
            </p>
          </div>

          {/* Key metadata grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE3D5]">
              <Calendar className="w-4 h-4 text-[#15803D] shrink-0" />
              <div>
                <p className="text-[11px] text-[#7E6F58] font-medium">Date & Time</p>
                <p className="text-xs sm:text-sm font-bold text-[#1C2B21]">March 10 · 10:00 AM</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE3D5]">
              <User className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <p className="text-[11px] text-[#7E6F58] font-medium">Primary Contact</p>
                <p className="text-xs sm:text-sm font-bold text-[#1C2B21]">
                  John <span className="text-[10px] text-[#15803D] font-normal">(Decision Maker)</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#EAE3D5] col-span-2 sm:col-span-1">
              <Clock className="w-4 h-4 text-teal-600 shrink-0" />
              <div>
                <p className="text-[11px] text-[#7E6F58] font-medium">Account Manager</p>
                <p className="text-xs sm:text-sm font-bold text-[#1C2B21]">Sarah</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Big CTA Button */}
        <div className="flex flex-col items-center sm:items-end justify-center gap-3">
          <button
            id="prepare-meeting-btn"
            onClick={onPrepare}
            disabled={isPreparing}
            className={`w-full sm:w-auto relative group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-base sm:text-lg transition-all transform active:scale-95 shadow-lg ${
              memoryEnabled
                ? 'bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white shadow-emerald-900/20 hover:shadow-emerald-900/35 hover:-translate-y-0.5'
                : 'bg-[#EAE3D5] hover:bg-[#DED5C3] text-[#5F5342] shadow-sm'
            }`}
          >
            {isPreparing ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Synthesizing Intelligence...</span>
              </>
            ) : (
              <>
                <Sparkles className={`w-5 h-5 ${memoryEnabled ? 'text-emerald-200 animate-spin-slow' : 'text-[#7E6F58]'}`} />
                <span>Prepare Me for This Meeting</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-[12px] text-[#7E6F58] text-center sm:text-right">
            Mode:{' '}
            <span className={`font-bold ${memoryEnabled ? 'text-[#15803D]' : 'text-[#7E6F58]'}`}>
              {memoryEnabled ? 'Personalized (Hindsight Memory)' : 'Generic (Memory OFF)'}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}
