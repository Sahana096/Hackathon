import React, { useState } from 'react';
import { 
  Presentation, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Brain, 
  Database, 
  CheckCircle2, 
  AlertTriangle, 
  Play, 
  RotateCcw,
  Zap,
  Building2,
  Calendar,
  User,
  ShieldCheck,
  ToggleLeft,
  ToggleRight,
  TrendingUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import HindsightChecklist from '../components/HindsightChecklist';
import WowComparison from '../components/WowComparison';
import LearningCurveView from '../components/LearningCurveView';

export default function DemoModePage({
  memoryEnabled,
  setMemoryEnabled,
  memoryLoaded,
  onLoadHistory,
  onPrepareMeeting,
  preparation,
  onReset
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);
  const [isPreparingMarch10, setIsPreparingMarch10] = useState(false);

  // Trigger confetti for Step 3 WOW moment
  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Step 2 Action: Load Meeting History
  const handleLoadHistory = async () => {
    setIsLoadingHistory(true);
    await onLoadHistory();
    setTimeout(() => {
      setIsLoadingHistory(false);
      setCurrentStep(3);
      triggerCelebration();
    }, 1200);
  };

  // Step 4 Action: Prepare March 10 Meeting
  const handlePrepareMarch10 = async () => {
    setIsPreparingMarch10(true);
    setMemoryEnabled(true);
    await onPrepareMeeting(true);
    setTimeout(() => {
      setIsPreparingMarch10(false);
      setCurrentStep(5);
    }, 600);
  };

  // Step 6 Action: Toggle Memory OFF
  const handleToggleMemoryOff = async () => {
    setMemoryEnabled(false);
    await onPrepareMeeting(false);
  };

  // Step 7 Action: Toggle Memory ON
  const handleToggleMemoryOn = async () => {
    setMemoryEnabled(true);
    await onPrepareMeeting(true);
    triggerCelebration();
  };

  const steps = [
    { num: 1, title: "No Memory", desc: "Fresh agent with zero context" },
    { num: 2, title: "Load History", desc: "Ingest 4 historical meetings" },
    { num: 3, title: "Memories Learned", desc: "4 meetings, 12 memories" },
    { num: 4, title: "Prepare Meeting", desc: "Initiate March 10 intelligence" },
    { num: 5, title: "Personalized Briefing", desc: "Hindsight memory synthesis" },
    { num: 6, title: "Memory OFF", desc: "Observe generic degradation" },
    { num: 7, title: "Memory ON", desc: "Side-by-side WOW comparison" }
  ];

  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE3D5] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3] mb-2">
            <Presentation className="w-3.5 h-3.5" />
            <span>Interactive Pitch & Evaluation Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C2B21] tracking-tight">
            Guided 7-Step Hackathon Walkthrough
          </h1>
          <p className="text-sm text-[#5F5342] mt-1">
            Follow this 7-step sequence to deliver a 60-second pitch to hackathon judges.
          </p>
        </div>

        <button
          onClick={() => {
            onReset();
            setCurrentStep(1);
          }}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#5F5342] border border-[#EAE3D5] text-xs font-bold self-start sm:self-auto shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#15803D]" />
          <span>Restart Pitch Flow</span>
        </button>
      </div>

      {/* Stepper Progress Bar */}
      <div className="p-4 rounded-2xl glass-panel border border-[#EAE3D5] bg-white overflow-x-auto shadow-sm">
        <div className="flex items-center justify-between min-w-[650px] gap-2">
          {steps.map((s, idx) => {
            const isCompleted = currentStep > s.num;
            const isCurrent = currentStep === s.num;

            return (
              <div
                key={s.num}
                onClick={() => setCurrentStep(s.num)}
                className={`flex-1 flex flex-col items-center text-center cursor-pointer p-2.5 rounded-xl transition-all ${
                  isCurrent 
                    ? 'bg-[#E4F2E8] border border-[#A7D4B3] shadow-sm' 
                    : 'hover:bg-[#FAF7F2]'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  isCompleted 
                    ? 'bg-[#15803D] text-white' 
                    : isCurrent 
                      ? 'bg-gradient-to-tr from-emerald-700 to-teal-700 text-white shadow-md shadow-emerald-900/15' 
                      : 'bg-[#F4EFE6] text-[#7E6F58]'
                }`}>
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : s.num}
                </div>
                <span className={`text-xs font-bold mt-1.5 ${isCurrent ? 'text-[#15803D]' : 'text-[#7E6F58]'}`}>
                  STEP {s.num}
                </span>
                <span className="text-[11px] text-[#5F5342] line-clamp-1">
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage for Selected Step */}
      <div className="rounded-2xl glass-panel border border-[#EAE3D5] p-6 sm:p-10 bg-white shadow-lg shadow-emerald-950/5 relative min-h-[420px] flex flex-col justify-between">
        
        {/* STEP 1: Agent has no memory */}
        {currentStep === 1 && (
          <div className="space-y-6 text-center max-w-xl mx-auto py-8">
            <div className="w-16 h-16 rounded-2xl bg-[#FAF7F2] text-[#7E6F58] flex items-center justify-center mx-auto border border-[#EAE3D5]">
              <Brain className="w-8 h-8 text-[#9E8D72]" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4EFE6] text-[#7E6F58]">
                Step 1 of 7
              </span>
              <h2 className="text-3xl font-extrabold text-[#1C2B21]">
                Agent has no memory
              </h2>
              <p className="text-[#5F5342] text-sm">
                At baseline, LLMs start every interaction from scratch. The agent has zero knowledge of the 4 prior meetings Sarah had with Acme Technologies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE3D5] text-xs text-[#5F5342] text-left space-y-1">
              <p>• Memory Status: <strong className="text-rose-600 font-bold">Empty (0 stored)</strong></p>
              <p>• Contextual Retrieval: <strong className="text-[#7E6F58]">Disabled</strong></p>
              <p>• Knowledge of Priya / SOC2: <strong className="text-rose-600 font-bold">Unknown</strong></p>
            </div>

            <button
              onClick={() => setCurrentStep(2)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm shadow-md shadow-emerald-900/15 transition-all"
            >
              <span>Next: Ingest Historical Meetings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Load Meeting History */}
        {currentStep === 2 && (
          <div className="space-y-6 text-center max-w-xl mx-auto py-8">
            <div className="w-16 h-16 rounded-2xl bg-[#E4F2E8] text-[#15803D] flex items-center justify-center mx-auto border border-[#A7D4B3]">
              <Database className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E4F2E8] text-[#15803D]">
                Step 2 of 7
              </span>
              <h2 className="text-3xl font-extrabold text-[#1C2B21]">
                Load Meeting History
              </h2>
              <p className="text-[#5F5342] text-sm">
                Ingest 4 historical sessions (Jan 10, Jan 24, Feb 8, Feb 22) into Hindsight's persistent memory layer.
              </p>
            </div>

            <div className="pt-4">
              <button
                id="load-history-btn"
                onClick={handleLoadHistory}
                disabled={isLoadingHistory}
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-base shadow-lg shadow-emerald-900/20 transition-all transform hover:-translate-y-0.5"
              >
                {isLoadingHistory ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Indexing 4 Meetings into Hindsight...</span>
                  </>
                ) : (
                  <>
                    <Database className="w-5 h-5 text-emerald-200" />
                    <span>Load Meeting History</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            {isLoadingHistory && (
              <div className="space-y-2 max-w-md mx-auto text-left text-xs text-[#15803D] pt-2 animate-pulse font-medium">
                <p>✓ Ingesting Jan 10 (Intro & Pricing Concern)...</p>
                <p>✓ Ingesting Jan 24 (Annual Billing Preference)...</p>
                <p>✓ Ingesting Feb 8 (Priya identified as Technical Lead)...</p>
                <p>✓ Ingesting Feb 22 (Security review pending & Final proposal)...</p>
              </div>
            )}
          </div>
        )}

        {/* STEP 3: 4 meetings remembered, 12 important memories learned */}
        {currentStep === 3 && (
          <div className="space-y-6 text-center max-w-2xl mx-auto py-6">
            <div className="w-16 h-16 rounded-2xl bg-[#E4F2E8] text-[#15803D] flex items-center justify-center mx-auto border border-[#A7D4B3]">
              <Sparkles className="w-8 h-8 text-emerald-600" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E4F2E8] text-[#15803D]">
                Step 3 of 7 · Ingestion Complete
              </span>
              <h2 className="text-3xl font-extrabold text-[#1C2B21]">
                Knowledge Layer Active
              </h2>
            </div>

            {/* Required prominent display: 4 meetings remembered, 12 important memories learned */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#CBE5D3] text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-[#15803D]">4</div>
                <p className="text-sm font-bold text-[#1C2B21] mt-1">meetings remembered</p>
                <p className="text-xs text-[#5F5342] mt-0.5">Jan 10, Jan 24, Feb 8, Feb 22</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#CBE5D3] text-center shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-[#15803D]">12</div>
                <p className="text-sm font-bold text-[#1C2B21] mt-1">important memories learned</p>
                <p className="text-xs text-[#5F5342] mt-0.5">Entities, constraints, and commitments</p>
              </div>
            </div>

            <button
              onClick={() => setCurrentStep(4)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm shadow-md shadow-emerald-900/15 transition-all"
            >
              <span>Next: Prepare March 10 Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 4: Button: Prepare March 10 Meeting */}
        {currentStep === 4 && (
          <div className="space-y-6 text-center max-w-xl mx-auto py-8">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E4F2E8] text-[#15803D]">
                Step 4 of 7
              </span>
              <h2 className="text-3xl font-extrabold text-[#1C2B21]">
                Upcoming Meeting Detected
              </h2>
              <p className="text-[#5F5342] text-sm">
                Sarah has a high-stakes call with Acme Technologies on <strong className="text-[#1C2B21]">March 10 at 10:00 AM</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D5] text-left space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1C2B21] text-base">Acme Technologies</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#E4F2E8] text-[#15803D]">Sales Follow-up</span>
              </div>
              <p className="text-xs text-[#5F5342]">
                Contact: <strong className="text-[#1C2B21]">John (Decision Maker)</strong> · Account Manager: <strong className="text-[#1C2B21]">Sarah</strong>
              </p>
            </div>

            <div>
              <button
                id="demo-prepare-march10-btn"
                onClick={handlePrepareMarch10}
                disabled={isPreparingMarch10}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-base shadow-lg shadow-emerald-900/20 transition-all transform hover:-translate-y-0.5"
              >
                {isPreparingMarch10 ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Synthesizing March 10 Intelligence...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-emerald-200" />
                    <span>Prepare March 10 Meeting</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: Show personalized briefing */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EAE3D5]">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E4F2E8] text-[#15803D]">
                  Step 5 of 7 · Personalized Intelligence
                </span>
                <h2 className="text-2xl font-extrabold text-[#1C2B21] mt-1">
                  Personalized Meeting Briefing
                </h2>
              </div>

              <button
                onClick={() => setCurrentStep(6)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F4EFE6] text-[#1C2B21] border border-[#EAE3D5] text-xs font-bold transition-colors self-start sm:self-auto shadow-sm"
              >
                <span>Next: Compare with Memory OFF</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Render Hindsight Checklist and Key Sections */}
            <HindsightChecklist memories={preparation?.hindsightChecklist} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-950 space-y-1 shadow-sm">
                <p className="font-bold flex items-center gap-1.5 text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Open Commitments:</span>
                </p>
                <p>⚠ <strong>Security documentation:</strong> Follow up with Priya regarding SOC2 report</p>
                <p>⚠ <strong>Final proposal:</strong> Deliver executable annual contract to John</p>
              </div>

              <div className="p-4 rounded-xl bg-[#E4F2E8] border border-[#A7D4B3] text-xs text-[#15803D] space-y-1 shadow-sm">
                <p className="font-bold flex items-center gap-1.5 text-[#15803D]">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Suggested Questions:</span>
                </p>
                <p className="italic">"Has the technical team completed the security review?"</p>
                <p className="italic">"Would you like to finalize the annual pricing proposal?"</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: Toggle Memory OFF -> Show generic briefing */}
        {currentStep === 6 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EAE3D5]">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-700">
                  Step 6 of 7 · Memory Toggle OFF
                </span>
                <h2 className="text-2xl font-extrabold text-[#1C2B21] mt-1">
                  Generic AI Preparation (Memory OFF)
                </h2>
              </div>

              <button
                onClick={() => setCurrentStep(7)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 text-white text-xs font-bold shadow-md shadow-emerald-900/15 transition-all self-start sm:self-auto"
              >
                <span>Next: Re-enable Memory ON</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE3D5]">
              <span className="text-sm font-bold text-[#1C2B21]">Toggle Memory State:</span>
              <button
                onClick={handleToggleMemoryOff}
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white text-[#7E6F58] border border-[#DED5C3] text-xs font-bold shadow-sm"
              >
                <ToggleLeft className="w-4 h-4 text-[#9E8D72]" />
                <span>Memory is OFF</span>
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D5] space-y-4 shadow-sm">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-[#7E6F58]">Output</span>
                <h3 className="text-lg font-bold text-[#1C2B21]">Meeting Preparation</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#5F5342]">
                <li className="p-2.5 rounded-lg bg-white border border-[#EAE3D5]">• Review customer needs</li>
                <li className="p-2.5 rounded-lg bg-white border border-[#EAE3D5]">• Discuss pricing</li>
                <li className="p-2.5 rounded-lg bg-white border border-[#EAE3D5]">• Discuss implementation</li>
                <li className="p-2.5 rounded-lg bg-white border border-[#EAE3D5]">• Discuss next steps</li>
              </ul>
              <p className="text-xs text-rose-600 font-semibold italic pt-2">
                Notice: All specific context about Priya, SOC2, annual billing, and competitor pricing is completely lost.
              </p>
            </div>
          </div>
        )}

        {/* STEP 7: Toggle Memory ON -> Show personalized briefing again & WOW comparison */}
        {currentStep === 7 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EAE3D5]">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E4F2E8] text-[#15803D]">
                  Step 7 of 7 · The WOW Comparison
                </span>
                <h2 className="text-2xl font-extrabold text-[#1C2B21] mt-1">
                  Memory ON: Full Personalized Intelligence
                </h2>
              </div>

              <button
                onClick={handleToggleMemoryOn}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 text-white text-xs font-bold shadow-md shadow-emerald-900/15 self-start sm:self-auto"
              >
                <ToggleRight className="w-4 h-4 text-emerald-200" />
                <span>Memory is ON</span>
              </button>
            </div>

            {/* WOW MOMENT Comparison */}
            <WowComparison />
          </div>
        )}

        {/* Bottom Presenter Controls: Prev / Next */}
        <div className="mt-8 pt-6 border-t border-[#EAE3D5] flex items-center justify-between text-xs text-[#5F5342]">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#F4EFE6] text-[#1C2B21] border border-[#EAE3D5] disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous Step</span>
          </button>

          <span className="font-mono font-bold text-[#7E6F58]">
            Step {currentStep} of {steps.length}
          </span>

          <button
            onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
            disabled={currentStep === steps.length}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#F4EFE6] text-[#1C2B21] border border-[#EAE3D5] disabled:opacity-40 disabled:pointer-events-none transition-colors shadow-sm"
          >
            <span>Next Step</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Systematic Learning Progression Section on Demo Mode */}
      <div className="pt-6 border-t border-[#EAE3D5]">
        <LearningCurveView />
      </div>

    </div>
  );
}
