import React, { useState } from 'react';
import { Key, Sparkles, X, Check, ExternalLink, Zap, Shield, HelpCircle } from 'lucide-react';
import { api } from '../services/api';

export default function SettingsModal({ isOpen, onClose, onSaveSuccess }) {
  const [groqKey, setGroqKey] = useState('');
  const [hindsightKey, setHindsightKey] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [savedStatus, setSavedStatus] = useState(null);

  if (!isOpen) return null;

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const res = await api.updateSettings({
        groqApiKey: groqKey,
        hindsightApiKey: hindsightKey
      });
      if (res && res.success) {
        setSavedStatus("Settings updated successfully!");
        if (onSaveSuccess) onSaveSuccess(res);
        setTimeout(() => {
          setSavedStatus(null);
          onClose();
        }, 1200);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-2xl glass-panel border border-[#EAE3D5] bg-[#FAF7F2] shadow-2xl p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D5]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#E4F2E8] text-[#15803D] flex items-center justify-center border border-[#A7D4B3]">
              <Key className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#1C2B21]">LLM & Hindsight Configuration</h3>
              <p className="text-xs text-[#5F5342]">Configure live API providers or use built-in engine</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#7E6F58] hover:text-[#1C2B21] hover:bg-[#F4EFE6]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Promo code badge */}
        <div className="p-3.5 rounded-xl bg-[#E4F2E8] border border-[#A7D4B3] text-xs text-[#15803D] space-y-1 shadow-sm">
          <div className="flex items-center gap-1.5 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Hackathon Sponsor Promo Code</span>
          </div>
          <p className="text-[11px] text-[#2E693F]">
            Use promo code <span className="font-mono font-bold text-[#15803D] px-1.5 py-0.5 rounded bg-white border border-[#A7D4B3]">MEMHACK99</span> on <a href="https://ui.hindsight.vectorize.io" target="_blank" rel="noreferrer" className="underline font-bold text-[#15803D] inline-flex items-center gap-0.5">Hindsight Cloud <ExternalLink className="w-2.5 h-2.5" /></a> for $50 in free memory credits!
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Groq Key Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#1C2B21] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                Groq API Key (Optional)
              </span>
              <a
                href="https://groq.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-[#15803D] hover:underline font-bold flex items-center gap-0.5"
              >
                Get free key <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </label>
            <input
              type="password"
              placeholder="gsk_..."
              value={groqKey}
              onChange={(e) => setGroqKey(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE3D5] text-xs text-[#1C2B21] placeholder-[#9E8D72] focus:outline-none focus:border-[#15803D] font-mono shadow-sm"
            />
            <p className="text-[10px] text-[#7E6F58]">
              Enables live ultra-fast LLM generation using <strong className="text-[#1C2B21]">llama-3.3-70b-versatile</strong>. If empty, the high-fidelity demo engine is used.
            </p>
          </div>

          {/* Hindsight Cloud API Key Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#1C2B21] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#15803D]" />
                Hindsight Cloud API Key (Optional)
              </span>
              <a
                href="https://ui.hindsight.vectorize.io"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-[#15803D] hover:underline font-bold flex items-center gap-0.5"
              >
                Console <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </label>
            <input
              type="password"
              placeholder="hs_..."
              value={hindsightKey}
              onChange={(e) => setHindsightKey(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE3D5] text-xs text-[#1C2B21] placeholder-[#9E8D72] focus:outline-none focus:border-[#15803D] font-mono shadow-sm"
            />
            <p className="text-[10px] text-[#7E6F58]">
              Connects to hosted Hindsight Cloud instances. By default, RecallMeet uses the embedded Vectorize Hindsight Persistent Engine for offline zero-latency demo guarantees.
            </p>
          </div>

          {savedStatus && (
            <div className="p-2.5 rounded-lg bg-[#E4F2E8] border border-[#A7D4B3] text-[#15803D] text-xs font-bold flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>{savedStatus}</span>
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
              disabled={isSaving}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold shadow-md shadow-emerald-900/15 flex items-center gap-1.5"
            >
              {isSaving ? "Saving..." : "Apply Settings"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
