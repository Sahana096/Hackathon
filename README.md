# RecallMeet 🧠
### AI Pre-Meeting Intelligence Agent Powered by Persistent Hindsight Memory

> **Vectorize Hindsight Hackathon Project**  
> *"AI Agents That Learn Using Hindsight"*  
> **Problem Statement:** Product & Strategy — Meeting Prep Agent  
> **Core Superpower:** Turns meeting amnesia into continuous relationship intelligence across 4 Hindsight memory networks.

---

## 🎯 The Problem: Meeting Amnesia

In real B2B sales and executive workflows, account managers and sales reps waste hours digging through CRM notes, email threads, and meeting transcripts before every call. 

Standard LLMs suffer from **meeting amnesia**:
- Without persistent memory, an agent generates **generic discovery fluff** ("Review customer needs", "Discuss high-level pricing").
- It forgets that John is the sole economic decision maker.
- It forgets that Priya joined on Feb 8 as Head of InfoSec and requested SOC2 Type II compliance reports.
- It forgets that John agreed to annual billing to get a discount.
- It fails to alert you that **Priya's pending security sign-off is the only blocker** preventing John from executing the contract!

---

## 💡 The Solution: RecallMeet

**RecallMeet** is an executive pre-meeting intelligence co-pilot built on **Vectorize Hindsight**. Rather than treating conversations as throwaway prompt context, RecallMeet retains, reflects, and recalls memories across interactions.

### 🌟 The "Before vs. After" WOW Moment:
| Aspect | Memory OFF (Standard AI Chatbot) | Memory ON (RecallMeet + Hindsight) |
|---|---|---|
| **Meeting Context** | Disconnected; treats meeting as Day 1 | Synthesizes 4 prior meetings (Jan 10 – Feb 22) |
| **Stakeholder Awareness** | Knows only the calendar invite name | Maps John (Economic Buyer) & Priya (InfoSec Gatekeeper) |
| **Open Commitments** | 0 tracked | ⚠️ Alerts on Priya's SOC2 review & John's contract |
| **Key Questions** | Generic: *"What are your goals for this quarter?"* | Tactical: *"Has InfoSec completed the SOC2 review?"* |
| **Proposed Agenda** | Boilerplate introductions & feature pitch | Tailored 5-step agenda focused on clearing the security blocker |

---

## 🧠 Vectorize Hindsight Architecture in RecallMeet

RecallMeet aligns directly with the official Hindsight memory architecture across **3 Operations** and **4 Memory Networks**:

```text
       ┌────────────────────────────────────────────────────────┐
       │             Raw Meeting Notes / Transcripts            │
       └───────────────────────────┬────────────────────────────┘
                                   │
                                   ▼
             1. RETAIN (Entity Resolution & Extraction)
                                   │
        ┌──────────────┬───────────┴───────────┬──────────────┐
        ▼              ▼                       ▼              ▼
   🌍 WORLD       📜 EXPERIENCES         🔬 OBSERVATIONS   💭 OPINIONS
   (Entities)     (Episodic Logs)         (Learned Gates)   (Preferences)
   • John (Buyer) • Jan 10 Call           • <30d Rollout    • Annual Billing (98%)
   • Priya (Sec)  • SOC2 Docs Promised    • Security Block  • Wants Contract Mar 10
        │              │                       │              │
        └──────────────┴───────────┬───────────┴──────────────┘
                                   │
                                   ▼
            2. REFLECT (Consolidation of Mental Models)
                                   │
                                   ▼
            3. RECALL (Multi-Strategy Hybrid Retrieval)
                 Dense Vector + BM25 + Graph + Temporal
                                   │
                                   ▼
         ⚡ LLM Synthesis (Groq llama-3.3-70b / Local Engine)
                                   │
                                   ▼
            Executive Pre-Meeting Briefing & Blocker Alerts
```

### The 4 Hindsight Memory Banks:
1. **World Bank (Facts & Entities):** Objective knowledge graph facts about stakeholders, organizational roles, and competitor benchmarks (Competitor X quoted 15% discount).
2. **Experiences Bank (Episodic History):** Chronological log of meeting interactions, fulfilled commitments, and promises made.
3. **Observations Bank (Derived Patterns & Blockers):** Synthesized business constraints (e.g. Acme requires go-live in under 30 days; Priya's security sign-off is pending).
4. **Opinions Bank (Beliefs & Preferences):** Evaluated preferences with confidence ratings (John's finance team mandates annual billing: 98% confidence).

---

## 🚀 Quick Start (Running Locally)

### Prerequisites:
- Node.js 18+ installed

### 1. Clone & Install
```bash
git clone https://github.com/your-username/recallmeet.git
cd recallmeet
npm install
```

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(RecallMeet runs completely offline with its high-fidelity deterministic engine out of the box. Adding a free Groq API key unlocks live `llama-3.3-70b-versatile` generation).*

### 3. Launch the Application
Run both backend API and frontend Vite server with a single command:
```bash
npm run dev
```

- **Frontend Application:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:3001](http://localhost:3001)

---

## 🎭 The 60-Second Hackathon Pitch Script (For Judges)

1. **Step 1: Set the Stage (10s)**
   - Open [http://localhost:5173](http://localhost:5173).
   - *"Every sales rep experiences meeting amnesia. Sarah is meeting with Acme Technologies today for the 5th time, but normal AI treats it like meeting #1."*
2. **Step 2: Show the Failure with Memory OFF (15s)**
   - Toggle **Memory OFF** in the navbar.
   - Click **"Prepare Me for This Meeting"**.
   - *"Look at the output: 'Review customer needs', 'Discuss pricing'. It has no idea who Priya is, that annual billing was already agreed upon, or what was promised."*
3. **Step 3: The WOW Moment with Memory ON (20s)**
   - Toggle **Memory ON**.
   - Click **"Prepare Me for This Meeting"**.
   - *"Boom! Instantly, Hindsight recalls 12 cross-meeting memories across all 4 memory networks: John is the economic buyer, Priya is the InfoSec lead, and there are two critical open commitments."*
   - Point out the ⚠️ alert: Priya's SOC2 review is still pending!
4. **Step 4: Interactive Live Ingestion (15s)**
   - Click **"+ Ingest Note"** in the top navbar.
   - Click **"Scenario A: Priya approves SOC2"** and click **"Retain to Hindsight"**.
   - *"Watch Hindsight Retain, Extract, and Reflect. The blocker vanishes, and the briefing automatically adapts to close the contract!"*

---

## 🛠️ Tech Stack & Implementation Details

- **Memory Layer:** Vectorize Hindsight (`@vectorize-io/hindsight-client` architecture with 4 memory networks: World, Experiences, Observations, Opinions).
- **LLM Engine:** Groq Cloud API (`llama-3.3-70b-versatile` / `qwen/qwen3-32b`) + deterministic fallback engine.
- **Backend:** Node.js, Express, RESTful memory endpoints (`/api/hindsight/retain`, `/api/memory`, `/api/demo/prepare`).
- **Frontend:** React 18, Vite, Tailwind CSS, Lucide Icons, Canvas Confetti.

---

## 🏆 Hackathon Judging Criteria Alignment

- **Innovation (30%):** Transcends basic conversation summarization into an executive briefing co-pilot with continuous entity and commitment tracking.
- **Use of Hindsight Memory (25%):** Memory is the central differentiator. Implements Hindsight's Retain, Recall, and Reflect across the 4 canonical memory networks with live before/after comparison.
- **Technical Implementation (20%):** Robust Express API, Groq OpenAI-compatible streaming interface, and zero-failure deterministic fallback.
- **User Experience (15%):** Ultra-polished dark-mode interface, interactive 7-step presentation mode, visual memory banks, and 1-click test scenarios.
- **Real-World Impact (10%):** Solves an authentic $50+/month enterprise problem for account managers, executives, and customer-facing teams.

---

## 🎁 Sponsor Credits
- Hindsight Cloud Promo Code: `MEMHACK99` ($50 free credits on [ui.hindsight.vectorize.io](https://ui.hindsight.vectorize.io))
- Built with ❤️ for the Vectorize Hindsight Hackathon.
