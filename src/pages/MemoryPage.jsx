import React, { useState } from 'react';
import { 
  Database, 
  Brain, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  User, 
  Building2, 
  Shield, 
  CreditCard, 
  Clock, 
  Filter,
  Code2,
  Globe,
  History,
  Lightbulb,
  HeartHandshake,
  PlusCircle
} from 'lucide-react';
import HindsightArchitectureView from '../components/HindsightArchitectureView';

export default function MemoryPage({ 
  memories, 
  memoryLoaded, 
  onNavigateToPrepare,
  onOpenRetainModal 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBank, setSelectedBank] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showJsonView, setShowJsonView] = useState(false);

  const banks = ['All', 'World', 'Experiences', 'Observations', 'Opinions'];
  const categories = ['All', 'Stakeholder', 'Commercial', 'Technical', 'Compliance', 'Risk', 'Commitment'];

  const filteredMemories = (memories || []).filter(m => {
    const matchesSearch = 
      m.fact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.fullStatement.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.entity.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBank = selectedBank === 'All' || m.hindsightBank === selectedBank;
    const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
    return matchesSearch && matchesBank && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE3D5] pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3] mb-2">
            <Database className="w-3.5 h-3.5" />
            <span>Hindsight Knowledge Graph & 4 Networks</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1C2B21] tracking-tight">
            Hindsight Persistent Memory Store
          </h1>
          <p className="text-sm text-[#5F5342] mt-1">
            Browse memories extracted across World, Experiences, Observations, and Opinions banks.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          <button
            onClick={onOpenRetainModal}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#E4F2E8] hover:bg-[#CBE5D3] text-[#15803D] border border-[#A7D4B3] text-xs font-bold transition-all shadow-sm"
          >
            <PlusCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>+ Ingest Note</span>
          </button>

          <button
            onClick={() => setShowJsonView(!showJsonView)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#5F5342] border border-[#EAE3D5] text-xs font-bold transition-colors shadow-sm"
          >
            <Code2 className="w-4 h-4 text-[#15803D]" />
            <span>{showJsonView ? 'Cards View' : 'Inspect JSON'}</span>
          </button>

          <button
            onClick={onNavigateToPrepare}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold shadow-md shadow-emerald-900/15 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
            <span>Test Briefing</span>
          </button>
        </div>
      </div>

      {/* 4 Hindsight Memory Banks Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        
        {/* World */}
        <button
          onClick={() => setSelectedBank(selectedBank === 'World' ? 'All' : 'World')}
          className={`p-4 rounded-2xl glass-panel border text-left transition-all ${
            selectedBank === 'World' ? 'border-[#15803D] bg-[#E4F2E8] ring-1 ring-[#15803D]' : 'border-[#EAE3D5] bg-white hover:bg-[#FAF7F2]'
          }`}
        >
          <div className="flex items-center justify-between text-[#15803D] mb-1">
            <span className="text-xs font-bold">World Bank</span>
            <Globe className="w-4 h-4" />
          </div>
          <p className="text-2xl font-black text-[#1C2B21]">
            {(memories || []).filter(m => m.hindsightBank === 'World').length}
          </p>
          <span className="text-[11px] text-[#5F5342]">Entities & Facts</span>
        </button>

        {/* Experiences */}
        <button
          onClick={() => setSelectedBank(selectedBank === 'Experiences' ? 'All' : 'Experiences')}
          className={`p-4 rounded-2xl glass-panel border text-left transition-all ${
            selectedBank === 'Experiences' ? 'border-[#15803D] bg-[#E4F2E8] ring-1 ring-[#15803D]' : 'border-[#EAE3D5] bg-white hover:bg-[#FAF7F2]'
          }`}
        >
          <div className="flex items-center justify-between text-[#15803D] mb-1">
            <span className="text-xs font-bold">Experiences Bank</span>
            <History className="w-4 h-4" />
          </div>
          <p className="text-2xl font-black text-[#1C2B21]">
            {(memories || []).filter(m => m.hindsightBank === 'Experiences').length}
          </p>
          <span className="text-[11px] text-[#5F5342]">Episodic History</span>
        </button>

        {/* Observations */}
        <button
          onClick={() => setSelectedBank(selectedBank === 'Observations' ? 'All' : 'Observations')}
          className={`p-4 rounded-2xl glass-panel border text-left transition-all ${
            selectedBank === 'Observations' ? 'border-amber-500 bg-amber-50 ring-1 ring-amber-500' : 'border-[#EAE3D5] bg-white hover:bg-[#FAF7F2]'
          }`}
        >
          <div className="flex items-center justify-between text-amber-700 mb-1">
            <span className="text-xs font-bold">Observations Bank</span>
            <Lightbulb className="w-4 h-4" />
          </div>
          <p className="text-2xl font-black text-[#1C2B21]">
            {(memories || []).filter(m => m.hindsightBank === 'Observations').length}
          </p>
          <span className="text-[11px] text-[#5F5342]">Derived Blockers</span>
        </button>

        {/* Opinions */}
        <button
          onClick={() => setSelectedBank(selectedBank === 'Opinions' ? 'All' : 'Opinions')}
          className={`p-4 rounded-2xl glass-panel border text-left transition-all ${
            selectedBank === 'Opinions' ? 'border-[#15803D] bg-[#E4F2E8] ring-1 ring-[#15803D]' : 'border-[#EAE3D5] bg-white hover:bg-[#FAF7F2]'
          }`}
        >
          <div className="flex items-center justify-between text-[#15803D] mb-1">
            <span className="text-xs font-bold">Opinions Bank</span>
            <HeartHandshake className="w-4 h-4" />
          </div>
          <p className="text-2xl font-black text-[#1C2B21]">
            {(memories || []).filter(m => m.hindsightBank === 'Opinions').length}
          </p>
          <span className="text-[11px] text-[#5F5342]">Weighted Beliefs</span>
        </button>

      </div>

      {/* Stakeholder Map Card */}
      <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-[#EAE3D5] bg-white space-y-4 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#5F5342] flex items-center gap-2">
          <User className="w-4 h-4 text-[#15803D]" />
          <span>Extracted Stakeholder Graph (Entity Resolution)</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#CBE5D3] flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E4F2E8] text-[#15803D] font-bold flex items-center justify-center shrink-0">
              J
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-[#1C2B21]">John</h4>
                <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
                  Decision Maker
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-white text-[#15803D] border border-[#CBE5D3]">
                  World Bank
                </span>
              </div>
              <p className="text-xs text-[#5F5342] mt-1 leading-relaxed">
                VP of Operations at Acme Technologies. Has sole economic signing authority. Mandated annual billing (98% confidence) and requested final contract for March 10.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#CBE5D3] flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E4F2E8] text-[#15803D] font-bold flex items-center justify-center shrink-0">
              P
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-[#1C2B21]">Priya</h4>
                <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
                  Technical Lead
                </span>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-white text-[#15803D] border border-[#CBE5D3]">
                  World Bank
                </span>
              </div>
              <p className="text-xs text-[#5F5342] mt-1 leading-relaxed">
                Head of InfoSec at Acme Technologies. Joined evaluation on Feb 8. Critical gatekeeper reviewing SOC2 Type II compliance reports.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#7E6F58]" />
          <input
            type="text"
            placeholder="Search memories, facts, entities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-[#EAE3D5] text-xs sm:text-sm text-[#1C2B21] placeholder-[#9E8D72] focus:outline-none focus:border-[#15803D] shadow-sm"
          />
        </div>

        {/* Bank & Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {banks.map((bank) => (
            <button
              key={bank}
              onClick={() => setSelectedBank(bank)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors shadow-sm ${
                selectedBank === bank
                  ? 'bg-[#15803D] text-white shadow-sm'
                  : 'bg-white text-[#5F5342] hover:text-[#1C2B21] border border-[#EAE3D5]'
              }`}
            >
              {bank === 'All' ? 'All Banks' : bank}
            </button>
          ))}
        </div>
      </div>

      {/* JSON View or Cards View */}
      {showJsonView ? (
        <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE3D5] overflow-x-auto shadow-sm">
          <pre className="font-mono text-xs text-[#15803D] leading-relaxed">
            {JSON.stringify(filteredMemories, null, 2)}
          </pre>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredMemories.map((mem) => (
            <div
              key={mem.id}
              className={`p-4 rounded-xl glass-panel border transition-all duration-200 flex flex-col justify-between ${
                mem.isCoreRetrieved 
                  ? 'border-[#A7D4B3] bg-white hover:bg-[#FAF7F2] shadow-sm' 
                  : 'border-[#EAE3D5] bg-white hover:bg-[#FAF7F2]'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      mem.hindsightBank === 'World' ? 'bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]' :
                      mem.hindsightBank === 'Experiences' ? 'bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]' :
                      mem.hindsightBank === 'Observations' ? 'bg-amber-50 text-amber-800 border border-amber-300' :
                      'bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]'
                    }`}>
                      {mem.hindsightBank || mem.category}
                    </span>

                    <span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-[#FAF7F2] text-[#5F5342]">
                      {mem.category}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#7E6F58]">
                    {mem.meetingDate}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[#1C2B21] flex items-center gap-1.5">
                  {mem.isCoreRetrieved && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
                  )}
                  <span>{mem.fact}</span>
                </h4>

                <p className="text-xs text-[#5F5342] leading-relaxed">
                  {mem.fullStatement}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#EAE3D5] flex items-center justify-between text-[11px] text-[#5F5342]">
                <span>Entity: <strong className="text-[#1C2B21]">{mem.entity}</strong></span>
                <span className="font-mono text-[#15803D] font-bold">{mem.confidence || '98%'} Conf</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Architecture Deep Dive */}
      <div className="pt-6">
        <HindsightArchitectureView memories={memories} />
      </div>

    </div>
  );
}
