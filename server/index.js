import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { historicalMeetings, upcomingMeeting } from './data/meetings.js';
import { hindsightService } from './services/hindsightService.js';
import { PreparationService } from './services/preparationService.js';
import { groqService } from './services/groqService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize memory layer with demo seed by default so it's ready out-of-the-box
hindsightService.loadHistory();

/**
 * Health check
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'RecallMeet AI Pre-Meeting Intelligence Backend',
    hindsightProvider: hindsightService.provider,
    memoryLoaded: hindsightService.isLoaded,
    groqConfigured: groqService.isConfigured(),
    groqModel: groqService.model
  });
});

/**
 * GET /api/meetings
 * Returns historical meetings and upcoming meeting
 */
app.get('/api/meetings', (req, res) => {
  res.json({
    historical: [...historicalMeetings, ...hindsightService.customMeetings],
    upcoming: upcomingMeeting,
    totalHistorical: historicalMeetings.length + hindsightService.customMeetings.length
  });
});

/**
 * GET /api/memory
 * Returns current memories, 4 banks, and timeline
 */
app.get('/api/memory', (req, res) => {
  const memoryData = hindsightService.getMemories();
  res.json(memoryData);
});

/**
 * POST /api/demo/load-history
 * Seeds the 4 meetings into Hindsight memory layer
 */
app.post('/api/demo/load-history', async (req, res) => {
  try {
    const result = await hindsightService.loadHistory();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message, fallback: "Used in-memory store" });
  }
});

/**
 * POST /api/demo/reset
 * Clears memory to simulate Step 1 (fresh agent with no memory)
 */
app.post('/api/demo/reset', (req, res) => {
  const result = hindsightService.reset();
  res.json(result);
});

/**
 * POST /api/hindsight/retain
 * Ingests a new meeting transcript or notes and extracts memories dynamically
 */
app.post('/api/hindsight/retain', async (req, res) => {
  try {
    const { title, date, notes, transcript, attendees } = req.body;
    const result = await hindsightService.retainNewMeeting({
      title,
      date,
      notes,
      transcript,
      attendees
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/settings
 * Configures API keys dynamically for Groq and Hindsight
 */
app.post('/api/settings', (req, res) => {
  const { groqApiKey, hindsightApiKey } = req.body;
  
  if (typeof groqApiKey === 'string') {
    groqService.setApiKey(groqApiKey.trim());
  }
  if (typeof hindsightApiKey === 'string') {
    hindsightService.setApiKey(hindsightApiKey.trim());
  }

  res.json({
    success: true,
    groqConfigured: groqService.isConfigured(),
    groqModel: groqService.model,
    hindsightProvider: hindsightService.provider
  });
});

/**
 * POST /api/demo/prepare
 * Generates meeting preparation with memory OFF or ON
 */
app.post('/api/demo/prepare', async (req, res) => {
  try {
    const { memoryEnabled = true, meetingId = 'meeting-upcoming' } = req.body;
    const preparation = await PreparationService.prepareMeeting({ memoryEnabled, meetingId });
    res.json(preparation);
  } catch (error) {
    console.error("Preparation error:", error);
    // Graceful fallback to guarantee demo reliability without crash
    res.json({
      mode: req.body?.memoryEnabled ? "MEMORY_ON" : "MEMORY_OFF",
      label: req.body?.memoryEnabled ? "Powered by Persistent Memory (Fallback)" : "Generic AI Preparation",
      isPersonalized: !!req.body?.memoryEnabled,
      fallbackUsed: true,
      error: "LLM or Network error, fallback generated successfully",
      meetingSnapshot: {
        company: "Acme Technologies",
        contact: req.body?.memoryEnabled ? "John — Decision Maker" : "John",
        meetingType: "Sales Follow-up",
        date: "March 10 · 10:00 AM"
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`RecallMeet Backend running on http://localhost:${PORT}`);
  console.log(`Persistent Memory Layer: ${hindsightService.provider}`);
  console.log(`Groq LLM Status: ${groqService.isConfigured() ? "Connected (" + groqService.model + ")" : "Available via Settings modal"}`);
});
