import React from 'react';
import { 
  Globe, 
  History, 
  Lightbulb, 
  HeartHandshake, 
  ArrowDown, 
  ArrowRight, 
  Sparkles, 
  Database, 
  Cpu, 
  Layers, 
  CheckCircle2,
  GitBranch,
  ShieldCheck
} from 'lucide-react';

export default function HindsightArchitectureView({ memories = [] }) {
  const worldCount = memories.filter(m => m.hindsightBank === 'World').length;
  const experiencesCount = memories.filter(m => m.hindsightBank === 'Experiences').length;
  const observationsCount = memories.filter(m => m.hindsightBank === 'Observations').length;
  const opinionsCount = memories.filter(m => m.hindsightBank === 'Opinions').length;

  return (
    <div className="rounded-2xl glass-panel border border-[#EAE3D5] bg-white p-6 sm:p-8 space-y-8 shadow-md shadow-emerald-950/5">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE3D5] pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3] mb-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Vectorize Hindsight Core Engine</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1C2B21] tracking-tight">
            How Hindsight Memory Works in RecallMeet
          </h3>
          <p className="text-xs sm:text-sm text-[#5F5342] mt-1">
            Agents that learn rather than forget: Retain → Recall → Reflect across 4 distinct memory networks.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-3 py-1.5 rounded-xl bg-[#E4F2E8] border border-[#A7D4B3] text-[#15803D] text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            4 Active Networks
          </span>
        </div>
      </div>

      {/* 3 Operations Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Retain */}
        <div className="p-4 rounded-xl bg-[#F3F9F5] border border-[#CBE5D3] relative shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
              Operation 1
            </span>
            <span className="text-xs font-mono text-[#15803D] font-bold">RETAIN</span>
          </div>
          <h4 className="text-sm font-bold text-[#1C2B21] mb-1">Ingest & Entity Resolution</h4>
          <p className="text-xs text-[#5F5342] leading-relaxed">
            Ingests conversation notes and raw meeting transcripts. Extracts atomic facts, maps entities (John, Priya, Acme), and categorizes them into memory banks.
          </p>
        </div>

        {/* Recall */}
        <div className="p-4 rounded-xl bg-[#F3F9F5] border border-[#CBE5D3] relative shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
              Operation 2
            </span>
            <span className="text-xs font-mono text-[#15803D] font-bold">RECALL</span>
          </div>
          <h4 className="text-sm font-bold text-[#1C2B21] mb-1">Multi-Strategy Hybrid Retrieval</h4>
          <p className="text-xs text-[#5F5342] leading-relaxed">
            Combines semantic dense vector search, BM25 keyword matching, entity graph traversal, and temporal decay to surface only high-impact contextual memories.
          </p>
        </div>

        {/* Reflect */}
        <div className="p-4 rounded-xl bg-[#F3F9F5] border border-[#CBE5D3] relative shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
              Operation 3
            </span>
            <span className="text-xs font-mono text-[#15803D] font-bold">REFLECT</span>
          </div>
          <h4 className="text-sm font-bold text-[#1C2B21] mb-1">Mental Model Consolidation</h4>
          <p className="text-xs text-[#5F5342] leading-relaxed">
            Consolidates cross-meeting patterns over time. Updates agent opinions, adjusts confidence scores, resolves completed commitments, and refines briefing synthesis.
          </p>
        </div>
      </div>

      {/* The 4 Hindsight Memory Banks */}
      <div className="space-y-4 pt-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#5F5342] flex items-center gap-2">
          <Database className="w-4 h-4 text-[#15803D]" />
          <span>The 4 Hindsight Memory Networks</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* 1. World */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#CBE5D3] space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-[#E4F2E8] text-[#15803D] flex items-center justify-center font-bold">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-[#15803D]">{worldCount || 3} facts</span>
            </div>
            <h5 className="text-sm font-bold text-[#1C2B21]">World Bank</h5>
            <p className="text-[11px] text-[#5F5342] leading-relaxed">
              Objective entity graph: John is Decision Maker, Priya is Tech Lead, Competitor X cited.
            </p>
            <div className="pt-1">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-[#15803D] border border-[#A7D4B3] font-semibold">
                Ground Truth Entities
              </span>
            </div>
          </div>

          {/* 2. Experiences */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#CBE5D3] space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-[#E4F2E8] text-[#15803D] flex items-center justify-center font-bold">
                <History className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-[#15803D]">{experiencesCount || 3} memories</span>
            </div>
            <h5 className="text-sm font-bold text-[#1C2B21]">Experiences Bank</h5>
            <p className="text-[11px] text-[#5F5342] leading-relaxed">
              Episodic event log: Sarah's promised pricing timeline, Priya's request for SOC2 docs.
            </p>
            <div className="pt-1">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-[#15803D] border border-[#A7D4B3] font-semibold">
                Episodic Timeline
              </span>
            </div>
          </div>

          {/* 3. Observations */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-amber-300 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold border border-amber-200">
                <Lightbulb className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-800">{observationsCount || 3} insights</span>
            </div>
            <h5 className="text-sm font-bold text-[#1C2B21]">Observations Bank</h5>
            <p className="text-[11px] text-[#5F5342] leading-relaxed">
              Derived patterns & blockers: Implementation speed &lt;30 days is strict; security review pending.
            </p>
            <div className="pt-1">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-amber-800 border border-amber-300 font-semibold">
                Inferred Blockers
              </span>
            </div>
          </div>

          {/* 4. Opinions */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#16A34A] space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-[#E4F2E8] text-[#15803D] flex items-center justify-center font-bold">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-[#15803D]">{opinionsCount || 3} beliefs</span>
            </div>
            <h5 className="text-sm font-bold text-[#1C2B21]">Opinions Bank</h5>
            <p className="text-[11px] text-[#5F5342] leading-relaxed">
              Evaluated preferences with confidence: Mandates annual billing (98% conf), wants MSA on March 10.
            </p>
            <div className="pt-1">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-[#15803D] border border-[#A7D4B3] font-semibold">
                Weighted Preferences
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
