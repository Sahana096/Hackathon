import React from 'react';
import { 
  Brain, 
  Sparkles, 
  Calendar, 
  Database, 
  Presentation, 
  RotateCcw,
  CheckCircle2,
  ToggleLeft,
  ToggleRight,
  Zap,
  Settings,
  PlusCircle
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  memoryEnabled, 
  setMemoryEnabled,
  memoryLoaded,
  onReset,
  isResetting,
  onOpenSettings,
  onOpenRetainModal,
  groqActive = false
}) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Zap },
    { id: 'meetings', label: 'Meetings', icon: Calendar, badge: '4' },
    { id: 'memory', label: 'Hindsight Memory', icon: Database, badge: memoryLoaded ? '12+' : '0' },
    { id: 'demo-mode', label: 'Demo Mode', icon: Presentation, isSpecial: true }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#EAE3D5] bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Agent Tagline */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-700/20">
              <Brain className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-[#1C2B21]">
                  RecallMeet
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase rounded-full bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3]">
                  Hindsight Agent
                </span>
              </div>
              <p className="text-[11px] text-[#5F5342] hidden sm:block">
                AI Pre-Meeting Intelligence with Persistent Cross-Call Memory
              </p>
            </div>
          </div>

          {/* Nav Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? item.isSpecial
                        ? 'bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-md shadow-emerald-900/15'
                        : 'bg-[#E4F2E8] text-[#15803D] border border-[#A7D4B3] shadow-sm'
                      : item.isSpecial
                        ? 'text-emerald-800 hover:text-emerald-900 hover:bg-[#E4F2E8]/60'
                        : 'text-[#5F5342] hover:text-[#1C2B21] hover:bg-[#F4EFE6]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? (item.isSpecial ? 'text-white' : 'text-[#15803D]') : 'text-[#7E6F58]'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-[#CBE5D3] text-[#15803D] font-bold' : 'bg-[#EAE3D5] text-[#5F5342]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {item.isSpecial && !isActive && (
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Controls: Ingest Button, Memory Toggle, Settings & Reset */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Ingest Notes Quick Button */}
            <button
              onClick={onOpenRetainModal}
              title="Retain new meeting notes into Hindsight memory"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E4F2E8] hover:bg-[#CBE5D3] border border-[#A7D4B3] text-[#15803D] text-xs font-bold transition-colors shadow-sm"
            >
              <PlusCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>+ Ingest Note</span>
            </button>

            {/* Quick Memory Toggle */}
            <button
              onClick={() => setMemoryEnabled(!memoryEnabled)}
              title={memoryEnabled ? "Switch to Memory OFF (Generic)" : "Switch to Memory ON (Personalized)"}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all shadow-sm ${
                memoryEnabled
                  ? 'bg-[#E4F2E8] text-[#15803D] border-[#A7D4B3] hover:bg-[#CBE5D3]'
                  : 'bg-[#F4EFE6] text-[#7E6F58] border-[#DED5C3] hover:text-[#1C2B21]'
              }`}
            >
              {memoryEnabled ? (
                <>
                  <ToggleRight className="w-4 h-4 text-emerald-600" />
                  <span>Memory ON</span>
                </>
              ) : (
                <>
                  <ToggleLeft className="w-4 h-4 text-[#9E8D72]" />
                  <span>Memory OFF</span>
                </>
              )}
            </button>

            {/* Settings Button (Groq / Hindsight keys) */}
            <button
              onClick={onOpenSettings}
              title="Configure Groq LLM & Hindsight Cloud Keys"
              className="p-2 rounded-xl bg-white hover:bg-[#F4EFE6] text-[#5F5342] hover:text-[#1C2B21] border border-[#DED5C3] transition-colors relative shadow-sm"
            >
              <Settings className="w-3.5 h-3.5" />
              {groqActive && (
                <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
            </button>

            {/* Reset Button */}
            <button
              onClick={onReset}
              disabled={isResetting}
              title="Reset Demo to Step 1 (Empty Memory)"
              className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-white hover:bg-[#F4EFE6] text-[#7E6F58] hover:text-[#1C2B21] border border-[#DED5C3] transition-colors flex items-center gap-1 text-xs font-semibold shadow-sm"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${isResetting ? 'animate-spin text-emerald-600' : ''}`} />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
