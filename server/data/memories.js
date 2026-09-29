export const hindsightMemoryBanks = [
  {
    id: "world",
    name: "World Bank (Facts & Entities)",
    description: "Objective knowledge graph facts regarding stakeholders, companies, and market competitors.",
    color: "from-blue-600 to-cyan-500",
    badge: "World",
    icon: "Globe"
  },
  {
    id: "experiences",
    name: "Experiences Bank (Episodic History)",
    description: "Chronological meeting interactions, agreements made, and commitments recorded.",
    color: "from-purple-600 to-indigo-500",
    badge: "Experiences",
    icon: "History"
  },
  {
    id: "observations",
    name: "Observations Bank (Derived Insights)",
    description: "Synthesized business patterns, security gates, blockers, and organizational requirements.",
    color: "from-amber-600 to-orange-500",
    badge: "Observations",
    icon: "Lightbulb"
  },
  {
    id: "opinions",
    name: "Opinions Bank (Beliefs & Preferences)",
    description: "Evaluated customer preferences, billing models, and commercial priorities with confidence weights.",
    color: "from-emerald-600 to-teal-500",
    badge: "Opinions",
    icon: "HeartHandshake"
  }
];

export const initialMemories = [
  {
    id: "mem-1",
    fact: "John — Decision Maker",
    fullStatement: "John confirmed he is the primary economic decision maker at Acme Technologies with sole signing authority.",
    category: "Stakeholder",
    hindsightBank: "World",
    entity: "John",
    relatedMeetingId: "meeting-1",
    meetingDate: "January 10",
    isCoreRetrieved: true,
    relevanceScore: 0.99,
    confidence: "99%",
    icon: "UserCheck"
  },
  {
    id: "mem-2",
    fact: "Pricing Concern",
    fullStatement: "Acme raised initial pricing concerns and cited Competitor X offering an entry-level package at 15% lower starting cost.",
    category: "Commercial",
    hindsightBank: "Observations",
    entity: "Acme Technologies",
    relatedMeetingId: "meeting-1",
    meetingDate: "January 10",
    isCoreRetrieved: true,
    relevanceScore: 0.94,
    confidence: "95%",
    icon: "DollarSign"
  },
  {
    id: "mem-3",
    fact: "Competitor X Benchmarked",
    fullStatement: "Competitor X was evaluated by Acme as an alternative solution for basic workflow automation.",
    category: "Competitive",
    hindsightBank: "World",
    entity: "Competitor X",
    relatedMeetingId: "meeting-1",
    meetingDate: "January 10",
    isCoreRetrieved: false,
    relevanceScore: 0.88,
    confidence: "92%",
    icon: "ShieldAlert"
  },
  {
    id: "mem-4",
    fact: "Sarah Promised Pricing Information",
    fullStatement: "Sarah committed to delivering itemized pricing breakdown with ROI metrics within 48 hours.",
    category: "Commitment",
    hindsightBank: "Experiences",
    entity: "Sarah",
    relatedMeetingId: "meeting-1",
    meetingDate: "January 10",
    isCoreRetrieved: false,
    relevanceScore: 0.82,
    confidence: "96%",
    icon: "CalendarCheck"
  },
  {
    id: "mem-5",
    fact: "Annual Billing Preferred",
    fullStatement: "John indicated their finance department mandates annual upfront billing rather than monthly recurring billing to leverage volume discounts.",
    category: "Commercial",
    hindsightBank: "Opinions",
    entity: "John",
    relatedMeetingId: "meeting-2",
    meetingDate: "January 24",
    isCoreRetrieved: true,
    relevanceScore: 0.97,
    confidence: "98%",
    icon: "CreditCard"
  },
  {
    id: "mem-6",
    fact: "Implementation Concern",
    fullStatement: "Implementation timeline is a critical priority for Acme; team cannot tolerate delays and requires go-live in under 30 days.",
    category: "Technical",
    hindsightBank: "Observations",
    entity: "Acme Technologies",
    relatedMeetingId: "meeting-2",
    meetingDate: "January 24",
    isCoreRetrieved: true,
    relevanceScore: 0.95,
    confidence: "97%",
    icon: "Clock"
  },
  {
    id: "mem-7",
    fact: "Sarah Promised Implementation Timeline",
    fullStatement: "Sarah promised to create a customized 30-day milestone onboarding schedule.",
    category: "Commitment",
    hindsightBank: "Experiences",
    entity: "Sarah",
    relatedMeetingId: "meeting-2",
    meetingDate: "January 24",
    isCoreRetrieved: false,
    relevanceScore: 0.85,
    confidence: "94%",
    icon: "CalendarCheck"
  },
  {
    id: "mem-8",
    fact: "Priya — Technical Lead",
    fullStatement: "Priya joined Acme's procurement review as Technical Lead and Head of Information Security.",
    category: "Stakeholder",
    hindsightBank: "World",
    entity: "Priya",
    relatedMeetingId: "meeting-3",
    meetingDate: "February 8",
    isCoreRetrieved: true,
    relevanceScore: 0.98,
    confidence: "99%",
    icon: "Shield"
  },
  {
    id: "mem-9",
    fact: "Security Documentation Requested",
    fullStatement: "Priya formally requested SOC2 Type II reports, cloud encryption architecture, and security compliance whitepapers.",
    category: "Compliance",
    hindsightBank: "Experiences",
    entity: "Priya",
    relatedMeetingId: "meeting-3",
    meetingDate: "February 8",
    isCoreRetrieved: false,
    relevanceScore: 0.91,
    confidence: "97%",
    icon: "FileText"
  },
  {
    id: "mem-10",
    fact: "Pricing Mostly Accepted",
    fullStatement: "John confirmed that the negotiated annual billing package has overcome previous pricing hurdles and is accepted by finance.",
    category: "Commercial",
    hindsightBank: "Opinions",
    entity: "John",
    relatedMeetingId: "meeting-4",
    meetingDate: "February 22",
    isCoreRetrieved: false,
    relevanceScore: 0.93,
    confidence: "96%",
    icon: "CheckCircle2"
  },
  {
    id: "mem-11",
    fact: "Security Review Pending",
    fullStatement: "Priya and the InfoSec team have not yet concluded the technical security review; awaiting final sign-off.",
    category: "Risk",
    hindsightBank: "Observations",
    entity: "Priya",
    relatedMeetingId: "meeting-4",
    meetingDate: "February 22",
    isCoreRetrieved: true,
    relevanceScore: 0.99,
    confidence: "99%",
    icon: "AlertTriangle"
  },
  {
    id: "mem-12",
    fact: "Final Proposal Pending",
    fullStatement: "John requested the final formal proposal and executable Master Services Agreement (MSA) for sign-off during the March 10 meeting.",
    category: "Commercial",
    hindsightBank: "Opinions",
    entity: "John",
    relatedMeetingId: "meeting-4",
    meetingDate: "February 22",
    isCoreRetrieved: true,
    relevanceScore: 0.99,
    confidence: "99%",
    icon: "FileCheck"
  }
];

export const memoryTimelineEvents = [
  {
    id: "timeline-1",
    date: "January 10",
    icon: "🧠",
    title: "Pricing concern learned",
    description: "John identified as decision maker. Competitor X referenced at 15% discount.",
    tags: ["Pricing", "Decision Maker", "Competitor X"],
    hindsightBank: "World & Observations"
  },
  {
    id: "timeline-2",
    date: "January 24",
    icon: "🧠",
    title: "Annual billing preference learned",
    description: "Finance mandates annual billing. Implementation time flagged as strict constraint (<30 days).",
    tags: ["Annual Billing", "Timeline"],
    hindsightBank: "Opinions & Observations"
  },
  {
    id: "timeline-3",
    date: "February 8",
    icon: "🧠",
    title: "Priya identified as technical lead",
    description: "Priya joined evaluation. Demanded SOC2 compliance & security architecture docs.",
    tags: ["Priya", "Security", "Compliance"],
    hindsightBank: "World & Experiences"
  },
  {
    id: "timeline-4",
    date: "February 22",
    icon: "🧠",
    title: "Security review still pending",
    description: "Commercial pricing accepted. Security review still blocking sign-off. John wants final proposal.",
    tags: ["Pending Review", "Final Proposal"],
    hindsightBank: "Observations & Opinions"
  },
  {
    id: "timeline-5",
    date: "March 10",
    icon: "✨",
    title: "Memories combined into personalized preparation",
    description: "Sarah enters the meeting fully briefed on Priya's security gate and John's final contract request.",
    tags: ["AI Synthesis", "Contextual Advantage"],
    hindsightBank: "Hindsight Multi-Bank Recall",
    isHighlight: true
  }
];
