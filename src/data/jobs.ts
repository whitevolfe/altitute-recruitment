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
    id: '1',
    title: 'Associate Technical Lead (React, React Native)',
    location: 'Colombo',
    workModel: 'Onsite',
    salaryCurrency: 'USD',
    description: '',
    responsibilities: [
      'Lead the React / React Native engineering team and shape the frontend architecture across apps and shared packages in our TurboRepo.',
      'Review, refactor, and enforce high code quality, consistency standards and proper state and hydration management.',
      'Collaborate closely with backend, AI/ML, and IoT teams to deliver fast, reliable, and data-rich experiences.',
      'Drive performance optimization, release stability, and a culture of measurable excellence (crash rates, release cadence, code quality).',
      'Mentor and level up junior engineers improving their execution.',
      'Ensure UI designs are executable technically and improve release cadence.',
      'Own the full lifecycle of the mobile build process using EAS, Fastlane, and related CI/CD tools.',
    ],
    requirements: [
      '4+ years of experience building React or React Native apps at production scale.',
      '2+ years in a lead or senior role with team mentorship responsibilities.',
      'Deep understanding of component design, state management, and performance optimization.',
      'Comfortable balancing hands-on execution with architectural planning.',
      'Strong eye for clean code, scalable systems, and developer velocity.',
      'You think like an engineer first, not a pixel pusher but you care enough to make it look good.',
      'Provide feedback and ideas constructively, backed by technical reasoning.',
    ],
  },
  {
    id: '2',
    title: 'Associate Technical Lead (Python, Django)',
    location: 'Colombo',
    workModel: 'On-site',
    salaryCurrency: 'USD',
    description: '',
    responsibilities: [
      'Build and maintain backend services in Python (Django + DRF) and Rust (Actix, Tokio, Pingora).',
      'Implement and optimize APIs, async job queues, and data pipelines for IoT telemetry, ML inference, and analytics ingestion.',
      'Work closely with AI/ML and IoT teams to connect edge inference, GStreamer-based video analytics, and cloud aggregation.',
      'Collaborate on backend architecture focusing on real, tested improvements, not endless diagrams.',
      'Improve system reliability, tracing, and performance monitoring with Prometheus Posthog and Sentry and structured metrics.',
      'Mentor and guide junior backend engineers; keep standards high and delivery predictable.',
    ],
    requirements: [
      '4+ years building and scaling backend systems in production.',
      '2+ years in a senior or lead capacity with proven ownership of delivery.',
      'Strong experience with Python + Django/DRF, and working familiarity with Rust (Actix / Tokio).',
      'Understanding of async task systems, data processing, and API design.',
      'Practical experience integrating AI models or analytics pipelines.',
      'Bonus: experience working with GStreamer for video or audio streams.',
      'Basic fluency with Cloudfl are tooling (Tunnels, Argo).',
      'Excellent debugging instincts and the ability to make performance improvements that actually matter.',
    ],
  },
  {
    id: '3',
    title: 'Technical Lead (Golang)',
    location: '',
    workModel: 'Hybrid',
    salaryCurrency: 'USD',
    description: '',
    responsibilities: [
      'Build and maintain components from design to production.',
      ' Help drive squad priorities and progress; escalate blockers.',
      'Enforce code quality, scalability, and observability.',
      'Make day-to-day technical decisions and trade-offs.',
      'Ensure accurate estimates and on-spec delivery.',
      'Assist with agile ceremonies including standup, Refinement, Sprint planning, Retrospectives and Demos.',
    ],
    requirements: [
      'Advanced commercial experience with Go as backend language.',
      'Advanced commercial experience with SQL (PostgresQL ideally)',
      'Experience managing teams of 10+',
      'Commercial experience with GCP.',
    ],
  },
  {
    id: '4',
    title: 'Corporate Lawyer',
    location: 'Rajagiriya',
    workModel: 'On-site',
    salaryCurrency: 'LKR',
    description: '',
    responsibilities: [
      'Corporate agreements & negotiations.',
      'Conveyancing & property law.',
      'Company secretarial & compliance services.',
      'Intellectual property & trademark protection.',
      'Legal advisory for leading corporate entities.',
    ],
    requirements: [
      'Possess strong written and verbal communication skills in English and demonstrate expertise in corporate legal matters.',
      'Minimum 5 years of working experience in corporate law.',
      'Strong experience in company secretarial work and regulatory compliance.',
      'Proven ability to draft high-level commercial contracts across various industries.',
      'Excellent client communication and negotiation skills.',
      'Must hold a notarial license to practice in Colombo in the English language.',
    ],
  },
];
