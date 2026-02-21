export interface Job {
  id: string;
  title: string;
  location: string;
  workModel: string;
  salaryCurrency: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    location: "London, UK",
    workModel: "Hybrid",
    salaryCurrency: "GBP",
    description:
      "Join a leading fintech company as a Senior Software Engineer, building scalable platforms that power millions of transactions daily.",
    responsibilities: [
      "Lead development of microservices architecture",
      "Mentor and guide junior engineers",
      "Collaborate with product and design teams",
      "Drive technical decisions and code reviews",
    ],
    requirements: [
      "5+ years of software engineering experience",
      "Strong proficiency in TypeScript and Node.js",
      "Experience with cloud platforms (AWS/GCP)",
      "Excellent communication skills",
    ],
  },
  {
    id: "2",
    title: "VP of Marketing",
    location: "New York, USA",
    workModel: "On-site",
    salaryCurrency: "USD",
    description:
      "Lead the marketing function for a high-growth SaaS company, driving brand awareness, demand generation, and revenue growth.",
    responsibilities: [
      "Define and execute global marketing strategy",
      "Build and manage a high-performing marketing team",
      "Drive pipeline and revenue targets",
      "Oversee brand positioning and communications",
    ],
    requirements: [
      "10+ years in B2B marketing leadership",
      "Proven track record of scaling marketing teams",
      "Experience with SaaS or technology companies",
      "Strong analytical and strategic thinking skills",
    ],
  },
  {
    id: "3",
    title: "Creative Director",
    location: "Dubai, UAE",
    workModel: "Remote",
    salaryCurrency: "USD",
    description:
      "Shape the creative vision for a global advertising agency, leading campaigns for premium brands across multiple markets.",
    responsibilities: [
      "Lead creative strategy and campaign development",
      "Direct multi-disciplinary creative teams",
      "Present concepts to C-level clients",
      "Ensure brand consistency across all touchpoints",
    ],
    requirements: [
      "8+ years in creative leadership roles",
      "Award-winning portfolio across multiple mediums",
      "Experience managing teams of 10+",
      "Strong client relationship management",
    ],
  },
  {
    id: "4",
    title: "Chief Financial Officer",
    location: "Singapore",
    workModel: "On-site",
    salaryCurrency: "SGD",
    description:
      "Serve as CFO for an expanding private equity-backed company, overseeing all financial operations and strategic planning.",
    responsibilities: [
      "Oversee financial planning and analysis",
      "Lead fundraising and investor relations",
      "Manage risk and compliance frameworks",
      "Drive strategic financial decision-making",
    ],
    requirements: [
      "15+ years of finance leadership experience",
      "CPA/CFA qualification preferred",
      "PE or VC-backed company experience",
      "Strong stakeholder management skills",
    ],
  },
];
