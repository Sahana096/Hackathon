import React from 'react';
import { Sparkles, Brain, CheckCircle2, ArrowRight, PlusCircle, Calendar, Database, Presentation } from 'lucide-react';
import UpcomingMeetingCard from '../components/UpcomingMeetingCard';
import MemoryToggle from '../components/MemoryToggle';
import MeetingPreparationView from '../components/MeetingPreparationView';

export default function DashboardPage({
  memoryEnabled,
  setMemoryEnabled,
  preparation,
  isPreparing,
  onPrepare,
  onViewAllMemories,
  onNavigateToTab,
  onOpenRetainModal
}) {
  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      
      {/* Clean, Focused Hero Section */}
      <div className="text-center space-y-2 pt-2 sm:pt-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Persistent Hindsight Memory Layer</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-[#1C2B21] tracking-tight leading-tight">
          Your AI remembers every conversation.
        </h1>

        <p className="text-sm sm:text-base text-[#5F5342] max-w-xl mx-auto">
          Prepare for your next meeting using everything learned from previous interactions.
        </p>
      </div>

      {/* 1. Target Upcoming Meeting */}
      <UpcomingMeetingCard
        onPrepare={onPrepare}
        isPreparing={isPreparing}
        memoryEnabled={memoryEnabled}
      />

      {/* 2. Interactive Memory Mode Toggle */}
      <MemoryToggle
        memoryEnabled={memoryEnabled}
        onToggle={setMemoryEnabled}
      />

      {/* 3. Pre-Meeting Intelligence Output (Main Briefing) */}
      <div id="preparation-results-section" className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#5F5342] flex items-center gap-2">
            <Brain className="w-4 h-4 text-[#15803D]" />
            <span>Pre-Meeting Intelligence Output</span>
          </h3>
          {preparation && (
            <span className="text-xs font-mono text-[#7E6F58] font-bold bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#EAE3D5]">
              {preparation.llmEngine || "Generated in 142ms"}
            </span>
          )}
        </div>

        <MeetingPreparationView
          preparation={preparation}
          memoryEnabled={memoryEnabled}
          onViewAllMemories={onViewAllMemories}
        />
      </div>

      {/* 4. Clean Quick-Access Hub to other systematic pages */}
      <div className="pt-6 border-t border-[#EAE3D5]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Link to Meetings */}
          <button
            onClick={() => onNavigateToTab('meetings')}
            className="p-4 rounded-2xl glass-panel border border-[#EAE3D5] bg-white hover:border-[#A7D4B3] hover:bg-[#F3F9F5] text-left transition-all group shadow-sm"
          >
            <div className="w-8 h-8 rounded-xl bg-[#E4F2E8] text-[#15803D] flex items-center justify-center font-bold mb-2">
              <Calendar className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-[#1C2B21] group-hover:text-[#15803D] flex items-center justify-between">
              <span>Meeting History & Timeline</span>
              <ArrowRight className="w-4 h-4 text-[#9E8D72] group-hover:text-[#15803D] group-hover:translate-x-0.5 transition-all" />
            </h4>
            <p className="text-xs text-[#5F5342] mt-1">
              Browse 4 prior sessions and the 59-day relationship timeline.
            </p>
          </button>

          {/* Link to Memory */}
          <button
            onClick={() => onNavigateToTab('memory')}
            className="p-4 rounded-2xl glass-panel border border-[#EAE3D5] bg-white hover:border-[#A7D4B3] hover:bg-[#F3F9F5] text-left transition-all group shadow-sm"
          >
            <div className="w-8 h-8 rounded-xl bg-[#E4F2E8] text-[#15803D] flex items-center justify-center font-bold mb-2">
              <Database className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-[#1C2B21] group-hover:text-[#15803D] flex items-center justify-between">
              <span>Hindsight 4 Memory Banks</span>
              <ArrowRight className="w-4 h-4 text-[#9E8D72] group-hover:text-[#15803D] group-hover:translate-x-0.5 transition-all" />
            </h4>
            <p className="text-xs text-[#5F5342] mt-1">
              Inspect World, Experiences, Observations, and Opinions networks.
            </p>
          </button>

          {/* Link to Demo Mode */}
          <button
            onClick={() => onNavigateToTab('demo-mode')}
            className="p-4 rounded-2xl glass-panel border border-[#EAE3D5] bg-white hover:border-[#A7D4B3] hover:bg-[#F3F9F5] text-left transition-all group shadow-sm"
          >
            <div className="w-8 h-8 rounded-xl bg-[#E4F2E8] text-[#15803D] flex items-center justify-center font-bold mb-2">
              <Presentation className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-[#1C2B21] group-hover:text-[#15803D] flex items-center justify-between">
              <span>Pitch Mode & Comparison</span>
              <ArrowRight className="w-4 h-4 text-[#9E8D72] group-hover:text-[#15803D] group-hover:translate-x-0.5 transition-all" />
            </h4>
            <p className="text-xs text-[#5F5342] mt-1">
              Side-by-side WOW comparison & 5-meeting learning curve.
            </p>
          </button>

        </div>
      </div>

    </div>
  );
}
