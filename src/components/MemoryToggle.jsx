import React from 'react';
import { Brain, Sparkles, AlertCircle, CheckCircle2, History } from 'lucide-react';

export default function MemoryToggle({ memoryEnabled, onToggle }) {
  return (
    <div className="rounded-2xl glass-panel border border-[#EAE3D5] p-5 sm:p-6 bg-white/90 shadow-md shadow-emerald-950/5 transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        
        {/* Header & Explanatory Text */}
        <div className="space-y-1 max-w-lg">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#15803D]" />
            <h3 className="text-base sm:text-lg font-bold text-[#1C2B21] tracking-tight">
              Memory Mode
            </h3>
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
              memoryEnabled 
                ? 'bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]' 
                : 'bg-[#F4EFE6] text-[#7E6F58] border border-[#DED5C3]'
            }`}>
              {memoryEnabled ? 'ON (Hindsight Enabled)' : 'OFF (Zero Context)'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#5F5342]">
            {memoryEnabled ? (
              <span>
                Agent accesses <strong className="text-[#1C2B21]">4 past meetings</strong> & <strong className="text-[#15803D]">12+ persistent memories</strong> to tailor the briefing.
              </span>
            ) : (
              <span>
                Agent ignores past interactions and outputs standard, generic discovery questions.
              </span>
            )}
          </p>
        </div>

        {/* Large Interactive Toggle Switch */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <span className={`text-xs sm:text-sm font-bold transition-colors ${!memoryEnabled ? 'text-[#1C2B21]' : 'text-[#9E8D72]'}`}>
            OFF
          </span>

          <button
            id="memory-mode-toggle"
            role="switch"
            aria-checked={memoryEnabled}
            onClick={() => onToggle(!memoryEnabled)}
            className={`relative inline-flex h-11 w-20 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
              memoryEnabled 
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md shadow-emerald-700/25' 
                : 'bg-[#DED5C3] hover:bg-[#CFC3AC]'
            }`}
          >
            <span className="sr-only">Toggle Persistent Memory</span>
            <span
              className={`pointer-events-none flex items-center justify-center h-10 w-10 transform rounded-full bg-white shadow-md ring-0 transition duration-300 ease-in-out ${
                memoryEnabled ? 'translate-x-9 text-emerald-600' : 'translate-x-0 text-[#7E6F58]'
              }`}
            >
              {memoryEnabled ? (
                <Sparkles className="w-5 h-5 text-emerald-600" />
              ) : (
                <History className="w-5 h-5 text-[#7E6F58]" />
              )}
            </span>
          </button>

          <span className={`text-xs sm:text-sm font-bold transition-colors ${memoryEnabled ? 'text-[#15803D]' : 'text-[#9E8D72]'}`}>
            ON
          </span>
        </div>

      </div>
    </div>
  );
}
