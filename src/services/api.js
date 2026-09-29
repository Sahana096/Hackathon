// Frontend API client for RecallMeet

export const api = {
  /**
   * Health check
   */
  async getHealth() {
    try {
      const res = await fetch('/api/health');
      if (!res.ok) throw new Error('Health check failed');
      return await res.json();
    } catch (e) {
      console.warn('API health check error, using client fallback', e);
      return { 
        status: 'fallback', 
        hindsightProvider: 'Vectorize Hindsight Persistent Memory (Engine)',
        groqConfigured: false
      };
    }
  },

  /**
   * Get historical and upcoming meetings
   */
  async getMeetings() {
    try {
      const res = await fetch('/api/meetings');
      if (!res.ok) throw new Error('Failed to fetch meetings');
      return await res.json();
    } catch (e) {
      console.warn('API error fetching meetings, fallback', e);
      return null;
    }
  },

  /**
   * Get memory store, 4 banks, and timeline
   */
  async getMemory() {
    try {
      const res = await fetch('/api/memory');
      if (!res.ok) throw new Error('Failed to fetch memory');
      return await res.json();
    } catch (e) {
      console.warn('API error fetching memory, fallback', e);
      return null;
    }
  },

  /**
   * Prepare meeting with Memory OFF or ON
   */
  async prepareMeeting(memoryEnabled = true, meetingId = 'meeting-upcoming') {
    try {
      const res = await fetch('/api/demo/prepare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memoryEnabled, meetingId })
      });
      if (!res.ok) throw new Error('Failed to prepare meeting');
      return await res.json();
    } catch (e) {
      console.warn('API error preparing meeting, using fallback response', e);
      return null;
    }
  },

  /**
   * Load history into memory (Retain 4 meetings)
   */
  async loadHistory() {
    try {
      const res = await fetch('/api/demo/load-history', { method: 'POST' });
      if (!res.ok) throw new Error('Failed to load history');
      return await res.json();
    } catch (e) {
      console.warn('API error loading history', e);
      return null;
    }
  },

  /**
   * Retain a new meeting transcript or quick note
   */
  async retainNewMeeting(meetingData) {
    try {
      const res = await fetch('/api/hindsight/retain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(meetingData)
      });
      if (!res.ok) throw new Error('Failed to retain meeting');
      return await res.json();
    } catch (e) {
      console.warn('API error retaining meeting', e);
      return null;
    }
  },

  /**
   * Update runtime settings (Groq / Hindsight API keys)
   */
  async updateSettings(settings) {
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });
      if (!res.ok) throw new Error('Failed to update settings');
      return await res.json();
    } catch (e) {
      console.warn('API error updating settings', e);
      return null;
    }
  },

  /**
   * Reset memory
   */
  async resetDemo() {
    try {
      const res = await fetch('/api/demo/reset', { method: 'POST' });
      if (!res.ok) throw new Error('Failed to reset demo');
      return await res.json();
    } catch (e) {
      console.warn('API error resetting demo', e);
      return null;
    }
  }
};
