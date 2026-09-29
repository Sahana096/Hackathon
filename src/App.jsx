import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import MeetingsPage from './pages/MeetingsPage';
import MemoryPage from './pages/MemoryPage';
import DemoModePage from './pages/DemoModePage';
import SettingsModal from './components/SettingsModal';
import RetainMeetingModal from './components/RetainMeetingModal';
import { api } from './services/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [memoryEnabled, setMemoryEnabled] = useState(true);
  const [memoryLoaded, setMemoryLoaded] = useState(true);
  const [isPreparing, setIsPreparing] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [preparation, setPreparation] = useState(null);
  const [memories, setMemories] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  
  // Modals
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isRetainModalOpen, setIsRetainModalOpen] = useState(false);
  const [groqActive, setGroqActive] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Initial load
  useEffect(() => {
    const initData = async () => {
      try {
        const health = await api.getHealth();
        if (health && health.groqConfigured) {
          setGroqActive(true);
        }

        const memData = await api.getMemory();
        if (memData) {
          setMemories(memData.memories || []);
          setMemoryLoaded(memData.isLoaded);
        }

        const meetData = await api.getMeetings();
        if (meetData) {
          setMeetings(meetData.historical || []);
        }

        // Auto-generate initial briefing for immediate WOW effect
        const prep = await api.prepareMeeting(true);
        if (prep) {
          setPreparation(prep);
        }
      } catch (e) {
        console.error("Initialization error:", e);
      }
    };

    initData();
  }, []);

  // When memoryEnabled changes, re-run preparation if already prepared
  const handleToggleMemory = async (newState) => {
    setMemoryEnabled(newState);
    setIsPreparing(true);
    try {
      const updatedPrep = await api.prepareMeeting(newState);
      if (updatedPrep) {
        setPreparation(updatedPrep);
      }
      showToast(newState ? "🌿 Hindsight Memory Enabled: Personalized Briefing Loaded" : "⚠️ Memory Disabled: Generic Preparation Mode");
    } finally {
      setIsPreparing(false);
    }
  };

  // Prepare button clicked
  const handlePrepareMeeting = async (overrideMemoryState = null) => {
    const memState = overrideMemoryState !== null ? overrideMemoryState : memoryEnabled;
    setIsPreparing(true);
    try {
      const updatedPrep = await api.prepareMeeting(memState);
      if (updatedPrep) {
        setPreparation(updatedPrep);
      }
      showToast(memState ? "✨ Personalized briefing synthesized from Hindsight memory networks!" : "⚡ Generic briefing generated (Zero previous context)");
      
      // Smooth scroll to results
      const el = document.getElementById('preparation-results-section');
      if (el && activeTab === 'dashboard') {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } finally {
      setIsPreparing(false);
    }
  };

  // Load History
  const handleLoadHistory = async () => {
    const res = await api.loadHistory();
    if (res) {
      setMemoryLoaded(true);
      const memData = await api.getMemory();
      if (memData) setMemories(memData.memories || []);
      showToast("🎉 4 Meetings and 12 Contextual Memories Ingested into Hindsight!");
    }
  };

  // Reset Demo
  const handleResetDemo = async () => {
    setIsResetting(true);
    try {
      await api.resetDemo();
      setMemoryLoaded(false);
      setMemoryEnabled(false);
      const updatedPrep = await api.prepareMeeting(false);
      setPreparation(updatedPrep);
      const memData = await api.getMemory();
      if (memData) setMemories(memData.memories || []);
      showToast("🔄 Demo reset to Step 1 (Empty Memory)");
    } finally {
      setIsResetting(false);
    }
  };

  // Handle successful retain of new meeting notes
  const handleRetainedSuccess = async (result) => {
    const memData = await api.getMemory();
    if (memData) {
      setMemories(memData.memories || []);
      setMemoryLoaded(true);
    }
    const meetData = await api.getMeetings();
    if (meetData) {
      setMeetings(meetData.historical || []);
    }
    // Re-run personalized preparation to demonstrate real-time learning!
    const updatedPrep = await api.prepareMeeting(true);
    if (updatedPrep) {
      setPreparation(updatedPrep);
    }
    showToast(`🌿 Hindsight Retain & Reflect complete! Updated briefing generated.`);
  };

  const handleSettingsSaveSuccess = (settingsRes) => {
    if (settingsRes.groqConfigured) {
      setGroqActive(true);
      showToast(`⚡ Groq LLM Active (${settingsRes.groqModel})`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C2B21] flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/95 border border-emerald-300 text-xs sm:text-sm font-semibold text-[#1C2B21] shadow-xl shadow-emerald-900/10 backdrop-blur-md">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        memoryEnabled={memoryEnabled}
        setMemoryEnabled={handleToggleMemory}
        memoryLoaded={memoryLoaded}
        onReset={handleResetDemo}
        isResetting={isResetting}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenRetainModal={() => setIsRetainModalOpen(true)}
        groqActive={groqActive}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'dashboard' && (
          <DashboardPage
            memoryEnabled={memoryEnabled}
            setMemoryEnabled={handleToggleMemory}
            preparation={preparation}
            isPreparing={isPreparing}
            onPrepare={() => handlePrepareMeeting()}
            onViewAllMemories={() => setActiveTab('memory')}
            onNavigateToTab={setActiveTab}
            onOpenRetainModal={() => setIsRetainModalOpen(true)}
            memories={memories}
          />
        )}

        {activeTab === 'meetings' && (
          <MeetingsPage
            onNavigateToPrepare={() => {
              setActiveTab('dashboard');
              handlePrepareMeeting(true);
            }}
          />
        )}

        {activeTab === 'memory' && (
          <MemoryPage
            memories={memories}
            memoryLoaded={memoryLoaded}
            onNavigateToPrepare={() => {
              setActiveTab('dashboard');
              handlePrepareMeeting(true);
            }}
            onOpenRetainModal={() => setIsRetainModalOpen(true)}
          />
        )}

        {activeTab === 'demo-mode' && (
          <DemoModePage
            memoryEnabled={memoryEnabled}
            setMemoryEnabled={handleToggleMemory}
            memoryLoaded={memoryLoaded}
            onLoadHistory={handleLoadHistory}
            onPrepareMeeting={handlePrepareMeeting}
            preparation={preparation}
            onReset={handleResetDemo}
          />
        )}
      </main>

      {/* Modern Cream & Light Green Footer */}
      <footer className="border-t border-[#EAE3D5] bg-[#F4EFE6]/80 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5F5342]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#1C2B21]">RecallMeet</span>
            <span>•</span>
            <span>AI Pre-Meeting Intelligence Agent</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-white border border-[#DED5C3] text-[11px] text-[#2E693F] font-semibold">
              Persistent Memory Engine: <strong className="text-emerald-700">Vectorize Hindsight</strong>
            </span>
            <span className="text-[#B8A88E]">|</span>
            <span className="text-[#5F5342]">Retain → Recall → Reflect</span>
          </div>
        </div>
      </footer>

      {/* Settings Modal (Groq & Hindsight Keys) */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSaveSuccess={handleSettingsSaveSuccess}
      />

      {/* Retain New Meeting Modal */}
      <RetainMeetingModal
        isOpen={isRetainModalOpen}
        onClose={() => setIsRetainModalOpen(false)}
        onRetainedSuccess={handleRetainedSuccess}
      />

    </div>
  );
}
