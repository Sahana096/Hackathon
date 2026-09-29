# Hackathon Project Submission: RecallMeet

## 📌 Project Overview
- **Project Name:** RecallMeet
- **Tagline:** The AI Pre-Meeting Intelligence Agent Powered by Persistent Hindsight Memory
- **Problem Statement Track:** Product & Strategy — Meeting Prep Agent
- **Repository URL:** [https://github.com/your-username/recallmeet](https://github.com/your-username/recallmeet)
- **Live Demo / Video URL:** [Insert Loom/YouTube Video Link]
- **Core Technology:** Vectorize Hindsight Persistent Memory + Groq Cloud LLM

---

## 💡 The Business Problem & Motivation
In B2B sales, account management, and strategic consulting, professionals conduct dozens of meetings across long multi-month deal cycles. Before each sync, reps spend 30 to 60 minutes scrambling across disorganized CRM logs, Google Docs, Slack messages, and call recordings trying to recall:
- Who attended previous calls and what were their hidden concerns?
- What pricing structure was verbally agreed to?
- What action items did we promise to deliver?
- What unresolved compliance or security blockers remain open?

Standard LLMs suffer from **meeting amnesia**. Because context is ephemeral, standard AI assistants ask generic questions ("What are your goals?") that frustrate enterprise clients and make account managers look unprepared.

**RecallMeet solves this completely.** By leveraging **Vectorize Hindsight**, RecallMeet acts as a continuous pre-meeting intelligence partner that retains cross-meeting memories, reflects on emerging deal patterns, and recalls critical commitments right before the call.

---

## 🧠 How Hindsight Memory is Used (25% Judging Criterion)

RecallMeet implements the official Hindsight memory paradigm across **3 Core Operations** and **4 Memory Networks**:

### 1. The 3 Core Operations
- **Retain:** Whenever a call concludes, RecallMeet ingests transcripts and raw notes through Hindsight's ingestion layer. It performs entity resolution (`John`, `Priya`, `Competitor X`) and converts conversational context into durable atomic facts.
- **Recall:** When preparing for an upcoming meeting, RecallMeet queries the Hindsight Memory Store using a hybrid retrieval strategy (combining dense vector semantics, BM25 keyword matching, entity graph traversal, and temporal decay) to prioritize high-conviction deal factors.
- **Reflect:** As new meetings occur, Hindsight runs background reflection to consolidate mental models—updating buyer preferences (e.g. annual billing preference confidence: 98%), detecting blocker resolution (e.g. SOC2 approval), and pruning stale hypotheses.

### 2. The 4 Hindsight Memory Networks
RecallMeet organizes memories into the 4 canonical Hindsight networks:
1. **World Bank (Facts & Entities):** Objective facts regarding account entities, roles, and competitors (e.g. John has sole signing authority; Priya is Head of InfoSec; Competitor X pitched at 15% discount).
2. **Experiences Bank (Episodic History):** Chronological log of agreements and commitments (e.g. Sarah promised 30-day implementation roadmap on Jan 24; Priya requested SOC2 whitepaper on Feb 8).
3. **Observations Bank (Derived Insights & Blockers):** Synthesized business constraints (e.g. Acme requires under-30-day go-live; Priya's security sign-off is the sole blocker preventing contract execution).
4. **Opinions Bank (Beliefs & Preferences with Confidence):** Learned customer preferences and commercial models (e.g. Mandates annual billing over monthly: 98% confidence).

---

## 🌟 The "Before vs. After" WOW Moment

RecallMeet features an interactive side-by-side comparison and live toggle:
- **Memory OFF (Generic AI):** Generates boilerplate discovery ("Review customer needs", "Discuss pricing"). Has zero historical awareness of the previous 4 meetings.
- **Memory ON (RecallMeet + Hindsight):** Instantly outputs an executive briefing with:
  - **7 Core Hindsight Checklist Items**
  - **Open Commitments Alert (⚠️):** Highlights that Priya's SOC2 compliance review is pending before John can sign the contract.
  - **Stakeholder Graph:** John (Decision Maker) vs Priya (Technical Gatekeeper).
  - **Tactical Closing Questions:** Tailored specifically to address the pending security review and annual billing terms.

---

## 🏗️ Technical Architecture
- **Persistent Memory Layer:** Vectorize Hindsight architecture (`@vectorize-io/hindsight-client` compatible REST API and high-fidelity embedded engine).
- **LLM Provider:** Groq Cloud (`llama-3.3-70b-versatile` / `qwen/qwen3-32b`) for ultra-low latency response synthesis.
- **Backend:** Node.js, Express, dynamic memory ingestion (`/api/hindsight/retain`), memory recall (`/api/memory`), and briefing generation (`/api/demo/prepare`).
- **Frontend:** React 18, Vite, Tailwind CSS, Lucide Icons, Canvas Confetti.
- **Interactive Pitch Mode:** Built-in 7-step guided presentation mode designed for 60-second hackathon evaluations.
- **Zero-Failure Fallback:** Embedded deterministic Hindsight engine ensures the live demo and recording never stutter or crash even without internet or API keys.

---

## 📈 Real-World Impact & Value
- **Target Audience:** Account Executives, Customer Success Managers, Sales Engineers, and Founders.
- **Willingness to Pay:** B2B teams regularly pay $50–$100/user/month for sales enablement tools (Gong, Clay). RecallMeet provides proactive, personalized meeting intelligence that prevents deal slip and accelerates closing times.
