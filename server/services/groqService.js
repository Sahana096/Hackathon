import dotenv from 'dotenv';
dotenv.config();

/**
 * Service for Groq LLM inference
 * Uses standard Groq OpenAI-compatible Chat Completions API
 */
export class GroqService {
  constructor() {
    this.apiKey = process.env.GROQ_API_KEY || null;
    this.model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";
    this.apiUrl = "https://api.groq.com/openai/v1/chat/completions";
  }

  setApiKey(key) {
    this.apiKey = key;
  }

  isConfigured() {
    return Boolean(this.apiKey && this.apiKey.trim().length > 0);
  }

  /**
   * Generates meeting preparation briefing using Groq
   */
  async generateBriefing({ meeting, memoryContext, memoryEnabled = true }) {
    if (!this.isConfigured()) {
      return null;
    }

    try {
      const systemPrompt = memoryEnabled
        ? `You are RecallMeet, an executive AI pre-meeting intelligence agent powered by Hindsight persistent memory.
You synthesize past meeting memories into high-conviction pre-meeting briefings for Sarah (Account Manager) before her upcoming call with Acme Technologies.
Always prioritize unresolved blockers, open commitments, key stakeholders, and actionable tactical questions.
Output must be strictly valid JSON matching this schema:
{
  "summary": "1-2 sentence executive briefing",
  "openCommitments": [{"label": "Commitment title", "detail": "Specific details with dates", "urgency": "Critical|High|Medium"}],
  "stakeholders": [{"name": "Name", "role": "Role", "description": "Key interest and influence"}],
  "previousDiscussions": [{"topic": "Topic", "detail": "Context learned"}],
  "suggestedQuestions": ["High-impact question 1", "Question 2", "Question 3"],
  "recommendedAgenda": ["1. Topic 1", "2. Topic 2", "3. Topic 3", "4. Topic 4", "5. Next steps"]
}`
        : `You are an AI meeting assistant with ZERO access to past conversation history (Memory is OFF).
Generate a standard, generic sales discovery preparation for an upcoming meeting.
Output must be strictly valid JSON matching this schema:
{
  "summary": "Generic sales meeting preparation",
  "preparationItems": ["Review customer needs", "Discuss pricing", "Discuss implementation", "Discuss next steps"],
  "suggestedQuestions": ["Generic question 1", "Generic question 2", "Generic question 3"],
  "recommendedAgenda": ["1. Introductions", "2. Requirements review", "3. Pricing discussion", "4. Implementation overview", "5. Next steps"]
}`;

      const userPrompt = memoryEnabled
        ? `UPCOMING MEETING:
Company: ${meeting.company}
Contact: ${meeting.contact}
Type: ${meeting.meetingType}
Date: ${meeting.displayDate}
Objective: ${meeting.objective || "Finalize contract"}

RECALLED HINDSIGHT MEMORIES ACROSS PAST 4 SESSIONS:
${JSON.stringify(memoryContext, null, 2)}

Synthesize a sharp, personalized briefing for Sarah.`
        : `UPCOMING MEETING:
Company: ${meeting.company}
Contact: ${meeting.contact}
Type: ${meeting.meetingType}
Date: ${meeting.displayDate}
(Notice: You have no prior memory or history of this account)`;

      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
          ],
          response_format: { type: "json_object" },
          temperature: 0.2,
          max_tokens: 1024
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.warn("Groq API error response:", errorText);
        return null;
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) return null;

      return JSON.parse(content);
    } catch (err) {
      console.warn("Groq generation failed, falling back to deterministic synthesis:", err.message);
      return null;
    }
  }

  /**
   * Dynamically extracts Hindsight memories from a new meeting transcript
   */
  async extractMemoriesFromTranscript(transcript) {
    if (!this.isConfigured()) {
      return null;
    }

    try {
      const prompt = `You are the Hindsight Memory Extraction Engine.
Analyze the following meeting transcript/notes and extract structured memories into the 4 Hindsight memory categories:
1. World (Facts about entities and companies)
2. Experiences (Episodic meeting events and interactions)
3. Observations (Inferred business requirements and blockers)
4. Opinions (Beliefs, stances, and preferences with confidence scores)

Transcript:
"${transcript}"

Output valid JSON only:
{
  "extractedMemories": [
    {
      "fact": "Short punchy label (e.g., SOC2 Review Approved)",
      "fullStatement": "Complete factual statement",
      "category": "Stakeholder|Commercial|Technical|Compliance|Risk|Commitment",
      "hindsightBank": "World|Experiences|Observations|Opinions",
      "entity": "Primary entity name",
      "confidence": "98%",
      "relevanceScore": 0.95
    }
  ],
  "commitments": [
    {
      "owner": "Person name",
      "text": "Specific commitment statement",
      "urgency": "High|Critical|Medium"
    }
  ]
}`;

      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: "system", content: "You extract structured memories for Hindsight memory banks. Return JSON only." },
            { role: "user", content: prompt }
          ],
          response_format: { type: "json_object" },
          temperature: 0.1
        })
      });

      if (!response.ok) return null;
      const data = await response.json();
      return JSON.parse(data.choices?.[0]?.message?.content);
    } catch (err) {
      console.warn("Groq extraction error:", err.message);
      return null;
    }
  }
}

export const groqService = new GroqService();
