import { hindsightService } from './hindsightService.js';
import { upcomingMeeting } from '../data/meetings.js';
import { groqService } from './groqService.js';

export class PreparationService {
  /**
   * Generates meeting preparation based on memory toggle
   * @param {Object} options
   * @param {boolean} options.memoryEnabled
   * @param {string} options.meetingId
   */
  static async prepareMeeting({ memoryEnabled = true, meetingId = "meeting-upcoming" } = {}) {
    const meeting = upcomingMeeting;

    if (!memoryEnabled) {
      // MEMORY OFF: Generic AI Preparation
      // Check if Groq can generate generic output
      if (groqService.isConfigured()) {
        const groqGeneric = await groqService.generateBriefing({
          meeting,
          memoryContext: [],
          memoryEnabled: false
        });
        if (groqGeneric) {
          return {
            mode: "MEMORY_OFF",
            label: "Generic AI Preparation",
            memoryBadge: "Memory OFF",
            isPersonalized: false,
            memoryProvider: "None (Memory Disabled)",
            llmEngine: `Groq (${groqService.model})`,
            meetingSnapshot: {
              company: meeting.company,
              contact: meeting.contact,
              meetingType: meeting.meetingType,
              date: meeting.displayDate,
              accountManager: meeting.accountManager
            },
            preparationItems: groqGeneric.preparationItems || [
              "Review customer needs",
              "Discuss pricing",
              "Discuss implementation",
              "Discuss next steps"
            ],
            previousDiscussions: [],
            openCommitments: [],
            stakeholders: [],
            suggestedQuestions: groqGeneric.suggestedQuestions || [
              "What are your primary goals for this quarter?",
              "What is your timeline for making a decision?",
              "Do you have any questions about our pricing?"
            ],
            recommendedAgenda: groqGeneric.recommendedAgenda || [
              "1. Introductions and meeting goals",
              "2. Review customer requirements",
              "3. High-level pricing discussion",
              "4. Implementation overview",
              "5. Next steps and wrap-up"
            ],
            hindsightChecklist: [],
            reasoningSteps: [
              "Step 1: Input parsed (Upcoming meeting with John at Acme Technologies)",
              "Step 2: Memory mode is OFF — bypassing persistent context layer",
              "Step 3: Standard generic sales template applied",
              "Step 4: Output generated with zero previous meeting context"
            ]
          };
        }
      }

      // Default deterministic generic preparation
      return {
        mode: "MEMORY_OFF",
        label: "Generic AI Preparation",
        memoryBadge: "Memory OFF",
        isPersonalized: false,
        memoryProvider: "None (Memory Disabled)",
        llmEngine: "Standard Inference (Zero Memory)",
        meetingSnapshot: {
          company: meeting.company,
          contact: meeting.contact,
          meetingType: meeting.meetingType,
          date: meeting.displayDate,
          accountManager: meeting.accountManager
        },
        preparationItems: [
          "Review customer needs",
          "Discuss pricing",
          "Discuss implementation",
          "Discuss next steps"
        ],
        previousDiscussions: [],
        openCommitments: [],
        stakeholders: [],
        suggestedQuestions: [
          "What are your primary goals for this quarter?",
          "What is your timeline for making a decision?",
          "Do you have any questions about our pricing?"
        ],
        recommendedAgenda: [
          "1. Introductions and meeting goals",
          "2. Review customer requirements",
          "3. High-level pricing discussion",
          "4. Implementation overview",
          "5. Next steps and wrap-up"
        ],
        hindsightChecklist: [],
        reasoningSteps: [
          "Step 1: Input parsed (Upcoming meeting with John at Acme Technologies)",
          "Step 2: Memory mode is OFF — bypassing persistent context layer",
          "Step 3: Standard generic sales template applied",
          "Step 4: Output generated with zero previous meeting context"
        ]
      };
    }

    // MEMORY ON: Powered by Persistent Memory (Hindsight)
    if (!hindsightService.isLoaded) {
      await hindsightService.loadHistory();
    }

    const memoryRetrieval = hindsightService.retrieveRelevantMemories({
      company: meeting.company,
      contact: meeting.contact,
      meetingType: meeting.meetingType
    });

    const isSecurityApproved = memoryRetrieval.allRetrieved.some(m => 
      m.fact.toLowerCase().includes("approved")
    );

    // If Groq is configured, attempt live Groq synthesis with recalled memories
    if (groqService.isConfigured()) {
      const groqBriefing = await groqService.generateBriefing({
        meeting,
        memoryContext: memoryRetrieval.coreChecklist,
        memoryEnabled: true
      });

      if (groqBriefing) {
        return {
          mode: "MEMORY_ON",
          label: "Powered by Persistent Memory",
          memoryBadge: "Memory ON · Hindsight Active",
          isPersonalized: true,
          memoryProvider: memoryRetrieval.provider,
          llmEngine: `Groq (${groqService.model})`,
          meetingSnapshot: {
            company: meeting.company,
            contact: "John — Decision Maker",
            secondaryContact: "Priya — Technical Lead",
            meetingType: meeting.meetingType,
            date: meeting.displayDate,
            accountManager: meeting.accountManager
          },
          hindsightChecklist: memoryRetrieval.coreChecklist,
          allRetrievedMemories: memoryRetrieval.allRetrieved,
          banksSummary: memoryRetrieval.banksSummary,
          previousDiscussions: groqBriefing.previousDiscussions || [
            {
              topic: "Pricing concern was discussed",
              detail: "Competitor X pitch countered; pricing resolved via annual billing volume discounts (Jan 10, Jan 24, Feb 22)."
            },
            {
              topic: "Annual billing was preferred",
              detail: "Finance mandate verified by John; annual contract ready for closing (Jan 24, Feb 22)."
            },
            {
              topic: "Implementation time remains important",
              detail: "Acme requires tight under-30-day go-live milestone schedule (Jan 24, Feb 8)."
            },
            {
              topic: isSecurityApproved ? "Security review officially completed" : "Security review is still pending",
              detail: isSecurityApproved ? "Priya confirmed SOC2 clearance." : "SOC2 & architecture docs requested by Priya on Feb 8; pending formal sign-off."
            }
          ],
          openCommitments: groqBriefing.openCommitments || memoryRetrieval.openCommitments.map(c => ({
            label: c.item,
            detail: c.detail,
            urgency: c.urgency
          })),
          stakeholders: groqBriefing.stakeholders || [
            {
              name: "John",
              role: "Decision Maker",
              description: "VP of Operations. Economic buyer, wants final proposal and annual billing executed."
            },
            {
              name: "Priya",
              role: "Technical Lead",
              description: isSecurityApproved ? "Head of InfoSec. Successfully cleared compliance requirements." : "Head of InfoSec. Evaluates technical compliance and security sign-off."
            }
          ],
          suggestedQuestions: groqBriefing.suggestedQuestions || [
            isSecurityApproved ? "Shall we attach Priya's security sign-off addendum to the final MSA?" : "Has the technical team completed the security review?",
            "Are there remaining implementation concerns?",
            "Would you like to finalize the annual pricing proposal?"
          ],
          recommendedAgenda: groqBriefing.recommendedAgenda || [
            isSecurityApproved ? "1. Confirm security sign-off approval" : "1. Security review status",
            "2. Implementation timeline",
            "3. Final proposal",
            "4. Annual billing",
            "5. Next steps"
          ],
          reasoningSteps: [
            "Step 1: Queried Hindsight Memory Graph across 4 Banks (World, Experiences, Observations, Opinions)",
            `Step 2: Recalled ${memoryRetrieval.count} relevant memories with hybrid vector/graph ranking`,
            "Step 3: Synthesized live briefing via Groq LLM grounded strictly on recalled facts",
            "Step 4: Outputted high-leverage closing questions and open blocker alerts"
          ]
        };
      }
    }

    // High-conviction deterministic synthesis (Fast & 100% reliable)
    return {
      mode: "MEMORY_ON",
      label: "Powered by Persistent Memory",
      memoryBadge: "Memory ON · Hindsight Active",
      isPersonalized: true,
      memoryProvider: memoryRetrieval.provider,
      llmEngine: "Hindsight Intelligence Synthesis Engine",
      meetingSnapshot: {
        company: meeting.company,
        contact: "John — Decision Maker",
        secondaryContact: "Priya — Technical Lead",
        meetingType: meeting.meetingType,
        date: meeting.displayDate,
        accountManager: meeting.accountManager
      },
      hindsightChecklist: memoryRetrieval.coreChecklist,
      allRetrievedMemories: memoryRetrieval.allRetrieved,
      banksSummary: memoryRetrieval.banksSummary,
      previousDiscussions: [
        {
          topic: "Pricing concern was discussed",
          detail: "Competitor X pitch countered; pricing resolved via annual billing volume discounts (Jan 10, Jan 24, Feb 22)."
        },
        {
          topic: "Annual billing was preferred",
          detail: "Finance mandate verified by John; annual contract ready for closing (Jan 24, Feb 22)."
        },
        {
          topic: "Implementation time remains important",
          detail: "Acme requires tight under-30-day go-live milestone schedule (Jan 24, Feb 8)."
        },
        {
          topic: isSecurityApproved ? "Security review officially completed" : "Security review is still pending",
          detail: isSecurityApproved 
            ? "Priya verified SOC2 compliance package and completed security review." 
            : "SOC2 & architecture docs requested by Priya on Feb 8; formal sign-off pending before signature (Feb 22)."
        }
      ],
      openCommitments: memoryRetrieval.openCommitments.map(c => ({
        label: c.item,
        detail: c.detail,
        urgency: c.urgency
      })),
      stakeholders: [
        {
          name: "John",
          role: "Decision Maker",
          description: "VP of Operations. Economic buyer, wants final proposal and annual billing executed."
        },
        {
          name: "Priya",
          role: "Technical Lead",
          description: isSecurityApproved 
            ? "Head of InfoSec. Compliance cleared; ready for implementation kickoff." 
            : "Head of InfoSec. Evaluates technical compliance and security sign-off."
        }
      ],
      suggestedQuestions: [
        isSecurityApproved 
          ? "Shall we attach Priya's security sign-off addendum to the final MSA?" 
          : "Has the technical team completed the security review?",
        "Are there remaining implementation concerns?",
        "Would you like to finalize the annual pricing proposal?"
      ],
      recommendedAgenda: [
        isSecurityApproved ? "1. Confirm security sign-off approval" : "1. Security review status",
        "2. Implementation timeline",
        "3. Final proposal",
        "4. Annual billing",
        "5. Next steps"
      ],
      reasoningSteps: [
        "Step 1: Queried Hindsight Memory Graph across 4 Banks (World, Experiences, Observations, Opinions)",
        `Step 2: Recalled ${memoryRetrieval.count} cross-meeting memories across prior sessions`,
        `Step 3: Tracked unresolved blockers: ${isSecurityApproved ? "Security review resolved" : "Priya's security sign-off pending"} & John's contract request`,
        "Step 4: Synthesized high-conviction pre-meeting intelligence for Sarah"
      ]
    };
  }
}
