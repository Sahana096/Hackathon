export const historicalMeetings = [
  {
    id: "meeting-1",
    date: "2026-01-10",
    displayDate: "January 10",
    title: "Initial Discovery & Intro Call",
    company: "Acme Technologies",
    accountManager: "Sarah",
    contact: "John",
    contactRole: "VP of Operations / Decision Maker",
    meetingType: "Introductory Discovery",
    duration: "45 mins",
    status: "Completed",
    keyPoints: [
      "Acme is highly interested in platform capabilities to automate cross-team workflows.",
      "Pricing concern raised: John asked about tier scaling and mentioned strict Q1 budget limits.",
      "Competitor X mentioned as having pitched an entry-level package at a 15% lower entry point.",
      "John confirmed he is the sole economic decision maker for this procurement.",
      "Sarah promised to send itemized pricing options and ROI calculations."
    ],
    commitments: [
      { owner: "Sarah", text: "Send detailed pricing information & ROI calculator", status: "Fulfilled Jan 12" }
    ],
    memoriesExtracted: [
      "John — Decision Maker",
      "Pricing Concern (Competitor X mentioned)",
      "Sarah promised pricing information"
    ],
    rawSnippet: "John: 'I like what I see, but pricing will be key. Competitor X is already quoting us a 15% discount, and I sign the checks here.' Sarah: 'Understood, John. I will put together a complete pricing package tailored for your volume.'"
  },
  {
    id: "meeting-2",
    date: "2026-01-24",
    displayDate: "January 24",
    title: "Pricing Review & Deployment Scoping",
    company: "Acme Technologies",
    accountManager: "Sarah",
    contact: "John",
    contactRole: "VP of Operations / Decision Maker",
    meetingType: "Solution Review",
    duration: "40 mins",
    status: "Completed",
    keyPoints: [
      "Sarah reviewed the pricing information sent after Meeting 1.",
      "Annual billing preferred: John indicated their finance committee prefers annual upfront billing to capture discounts.",
      "Implementation time is a major concern: Acme needs rapid rollout with zero disruption to daily ops.",
      "John remains enthusiastic and expressed strong interest in moving forward if timelines match.",
      "Sarah promised to outline a concrete 30-day implementation roadmap."
    ],
    commitments: [
      { owner: "Sarah", text: "Deliver 30-day implementation timeline & resource requirements", status: "Fulfilled Jan 28" }
    ],
    memoriesExtracted: [
      "Annual Billing Preferred",
      "Implementation Concern (Needs fast rollout)",
      "Sarah promised implementation timeline"
    ],
    rawSnippet: "John: 'Annual billing works best for our finance team if the discount makes sense. However, our team cannot tolerate a 3-month rollout—we need this live in under 30 days.' Sarah: 'I will prepare an accelerated 30-day onboarding plan.'"
  },
  {
    id: "meeting-3",
    date: "2026-02-08",
    displayDate: "February 8",
    title: "Technical Review & Security Due Diligence",
    company: "Acme Technologies",
    accountManager: "Sarah",
    contact: "John",
    contactRole: "VP of Operations",
    additionalAttendees: ["Priya"],
    meetingType: "Technical Due Diligence",
    duration: "55 mins",
    status: "Completed",
    keyPoints: [
      "Sarah presented the 30-day implementation timeline, which met John's timeline requirements.",
      "Priya joined the meeting as Acme's Technical Lead and Head of InfoSec.",
      "Security concerns raised: Priya questioned encryption protocols, SOC2 Type II compliance, and API authentication.",
      "Priya requested full security documentation and compliance audit reports before technical sign-off.",
      "Sarah promised to deliver complete security documentation to Priya."
    ],
    commitments: [
      { owner: "Sarah", text: "Provide SOC2 Type II audit, architecture diagram, and security whitepaper", status: "Pending Follow-up" }
    ],
    memoriesExtracted: [
      "Priya — Technical Lead",
      "Security Concern (SOC2 compliance & encryption)",
      "Sarah promised security documentation"
    ],
    rawSnippet: "Priya: 'From an engineering standpoint the API looks clean, but InfoSec requires SOC2 Type II reports and data sovereignty verification before I can sign off.' Sarah: 'I will send our comprehensive security documentation directly to you.'"
  },
  {
    id: "meeting-4",
    date: "2026-02-22",
    displayDate: "February 22",
    title: "Pre-Contract Alignment & Final Scope",
    company: "Acme Technologies",
    accountManager: "Sarah",
    contact: "John",
    contactRole: "VP of Operations / Decision Maker",
    meetingType: "Commercial Alignment",
    duration: "35 mins",
    status: "Completed",
    keyPoints: [
      "Pricing mostly accepted based on the annual billing structure.",
      "Security review is still pending: Priya's team has not yet completed reviewing the compliance package.",
      "Implementation time remains a top priority: Acme wants to launch immediately upon contract execution.",
      "John asked for the final proposal and executable Master Services Agreement (MSA).",
      "Security documentation needs follow-up with Priya to ensure no blockers remain."
    ],
    commitments: [
      { owner: "Sarah", text: "Follow up with Priya on pending security review", status: "Open / High Priority" },
      { owner: "Sarah", text: "Prepare and deliver Final Proposal with annual billing schedule", status: "Open / Critical" }
    ],
    memoriesExtracted: [
      "Pricing mostly accepted",
      "Security Review Pending (Priya)",
      "Implementation time remains important",
      "Final Proposal Pending (John requested)"
    ],
    rawSnippet: "John: 'We are aligned on the annual pricing numbers. But Priya's security review is still pending on our end, and I need the final formal proposal before we can execute.' Sarah: 'I will follow up with Priya and have the final proposal ready for our next sync.'"
  }
];

export const upcomingMeeting = {
  id: "meeting-upcoming",
  date: "2026-03-10",
  displayDate: "March 10 · 10:00 AM",
  title: "Acme Technologies – March 10 – 10:00 AM",
  company: "Acme Technologies",
  accountManager: "Sarah",
  contact: "John",
  contactRole: "Decision Maker",
  meetingType: "Sales Follow-up",
  location: "Zoom Video Room #842-192-334",
  objective: "Address pending security review, present final proposal, and secure agreement on annual contract."
};
