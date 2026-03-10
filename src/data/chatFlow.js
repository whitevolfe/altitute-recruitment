const chatFlow = {
  start: {
    message: 'Welcome to Altitude Global 👋 How can I help you?',
    options: [
      { label: 'Altitude Talent', next: 'talent' },
      { label: 'Altitude Wellness', next: 'wellness' },
    ],
  },

  talent: {
    message: 'What would you like to know about Altitude Talent?',
    options: [
      { label: 'What does Altitude Talent do?', next: 'talentWhat' },
      { label: 'What positions do you recruit for?', next: 'talentPositions' },
      { label: 'What career paths do you recruit for?', next: 'talentPaths' },
      { label: 'How long does hiring usually take?', next: 'talentTime' },
      {
        label: 'Do candidates have to pay to apply through Altitude Talent?',
        next: 'talentFees',
      },
      { label: 'Do you recruit only in Sri Lanka?', next: 'talentLocation' },
      {
        label: 'Can you help us hire multiple employees at once?',
        next: 'talentMultiple',
      },
      {
        label:
          'What makes Altitude Talent different from other recruitment agencies?',
        next: 'talentDifferent',
      },
      {
        label: 'Can you help with confidential hiring?',
        next: 'talentConfidential',
      },
      {
        label: "I'm a candidate. How do I apply for jobs?",
        next: 'talentApply',
      },
      {
        label: 'How do companies start working with Altitude Talent?',
        next: 'talentStart',
      },
    ],
  },

  wellness: {
    message: 'What would you like to know about Altitude Wellness?',
    options: [
      { label: 'What is Altitude Wellness?', next: 'wellnessWhat' },
      { label: 'What is the Altitude Trinity?', next: 'wellnessTrinity' },
      {
        label: 'Who are the experts delivering the sessions?',
        next: 'wellnessExperts',
      },
      {
        label: 'How long is an Altitude Wellness program?',
        next: 'wellnessDuration',
      },
      {
        label: 'What topics are covered in the sessions?',
        next: 'wellnessTopics',
      },
      {
        label: 'How many employees can attend a session?',
        next: 'wellnessCapacity',
      },
      {
        label: 'Is the program suitable for leadership teams?',
        next: 'wellnessLeadership',
      },
      {
        label: 'Can sessions be customized for our organization?',
        next: 'wellnessCustom',
      },
      { label: 'Where do the sessions take place?', next: 'wellnessLocation' },
      {
        label: 'How can we book an Altitude Wellness session?',
        next: 'wellnessBook',
      },
    ],
  },

  talentWhat: {
    message:
      'Altitude Talent helps companies hire the right people by providing recruitment, talent sourcing, and workforce advisory services.',
    options: [{ label: 'Back to Talent Menu', next: 'talent' }],
  },

  talentPositions: {
    message:
      'We recruit across a range of roles including executive, managerial, specialist, and operational positions.',
    options: [{ label: 'Back to Talent Menu', next: 'talent' }],
  },

  talentPaths: {
    message:
      'We recruit for Software engineering, Finance, HR, Marketing, Advertising and Business Development.',
    options: [{ label: 'Back to Talent Menu', next: 'talent' }],
  },

  talentTime: {
    message:
      'Most roles are filled within 2–6 weeks, depending on the seniority and specialization of the position.',
    options: [{ label: 'Back to Talent Menu', next: 'talent' }],
  },

  talentFees: {
    message:
      'No. Candidates never pay any fees. Our services are paid for by the hiring company.',
    options: [{ label: 'Back to Talent Menu', next: 'talent' }],
  },

  talentLocation: {
    message:
      'Our primary focus is Sri Lanka, but we also support companies with regional and international talent searches when required.',
    options: [{ label: 'Back to Talent Menu', next: 'talent' }],
  },

  talentMultiple: {
    message:
      'Yes. We frequently support organizations with team expansion and large-scale hiring projects.',
    options: [{ label: 'Back to Talent Menu', next: 'talent' }],
  },

  talentDifferent: {
    message:
      'We focus on quality placements, strategic hiring, and long-term fit, rather than high-volume recruitment.',
    options: [{ label: 'Back to Talent Menu', next: 'talent' }],
  },

  talentConfidential: {
    message:
      'Yes. We manage confidential and executive-level searches with strict discretion.',
    options: [{ label: 'Back to Talent Menu', next: 'talent' }],
  },

  talentApply: {
    message:
      'You can submit your CV to our email talent@altitudetalent.com.lk and our team will reach out if a suitable opportunity is available.',
    options: [{ label: 'Back to Talent Menu', next: 'talent' }],
  },

  talentStart: {
    message:
      'You can contact us through our website or request a consultation, and we will arrange a call to discuss your hiring requirement in detail.',
    options: [{ label: 'Back to Talent Menu', next: 'talent' }],
  },

  wellnessWhat: {
    message:
      'Altitude Wellness is a corporate wellbeing experience designed to improve employee performance, resilience, and productivity.',
    options: [{ label: 'Back to Wellness Menu', next: 'wellness' }],
  },

  wellnessTrinity: {
    message:
      'The Altitude Trinity is our signature methodology that brings together three expert-led sessions in one program covering mental, physical, and strategic wellbeing.',
    options: [{ label: 'Back to Wellness Menu', next: 'wellness' }],
  },

  wellnessExperts: {
    message:
      'Each session is delivered by industry-recognized, certified professionals specializing in psychology, movement and physical wellbeing, and executive coaching.',
    options: [{ label: 'Back to Wellness Menu', next: 'wellness' }],
  },

  wellnessDuration: {
    message:
      'The program runs for three hours, with three separate one-hour expert sessions.',
    options: [{ label: 'Back to Wellness Menu', next: 'wellness' }],
  },

  wellnessTopics: {
    message:
      'The program focuses on: Psychological resilience, Physical regulation and movement, and Strategic clarity and leadership mindset.',
    options: [{ label: 'Back to Wellness Menu', next: 'wellness' }],
  },

  wellnessCapacity: {
    message:
      'Each session is designed for up to 50 participants to maintain quality engagement.',
    options: [{ label: 'Back to Wellness Menu', next: 'wellness' }],
  },

  wellnessLeadership: {
    message:
      'Yes. Altitude Wellness works for both leadership groups and broader employee teams.',
    options: [{ label: 'Back to Wellness Menu', next: 'wellness' }],
  },

  wellnessCustom: {
    message:
      'Yes. The program can be tailored to match your company’s culture, workforce challenges, and leadership goals.',
    options: [{ label: 'Back to Wellness Menu', next: 'wellness' }],
  },

  wellnessLocation: {
    message:
      'Sessions can be conducted at your office or at a venue arranged by your organization.',
    options: [{ label: 'Back to Wellness Menu', next: 'wellness' }],
  },

  wellnessBook: {
    message:
      'You can contact us through the website to schedule a consultation and secure a session date or you can email us at wellness@altitudetalent.com.lk and we will be in touch with you.',
    options: [{ label: 'Back to Wellness Menu', next: 'wellness' }],
  },

  country: {
    message: 'Which country are you looking for?',
    options: [
      { label: 'Dubai', next: 'category' },
      { label: 'Qatar', next: 'category' },
      { label: 'Saudi Arabia', next: 'category' },
    ],
  },

  country: {
    message: 'Which country are you looking for?',
    options: [
      { label: 'Dubai', next: 'category' },
      { label: 'Qatar', next: 'category' },
      { label: 'Saudi Arabia', next: 'category' },
    ],
  },

  category: {
    message: 'Select job category',
    options: [
      { label: 'Driver', next: 'driverJob' },
      { label: 'Construction', next: 'constructionJob' },
      { label: 'Hospitality', next: 'hospitalityJob' },
      { label: 'Healthcare', next: 'healthcareJob' },
      { label: 'Engineering', next: 'engineeringJob' },
    ],
  },

  driverJob: {
    message:
      'Driver jobs available in your selected country. We have opportunities for car drivers, truck drivers, and delivery drivers.',
    actions: ['apply', 'whatsapp', 'meeting'],
  },

  constructionJob: {
    message:
      'Construction jobs available including site supervisors, laborers, electricians, and engineers.',
    actions: ['apply', 'whatsapp', 'meeting'],
  },

  hospitalityJob: {
    message:
      'Hospitality jobs available including hotel staff, restaurant workers, and customer service roles.',
    actions: ['apply', 'whatsapp', 'meeting'],
  },

  healthcareJob: {
    message:
      'Healthcare jobs available including nurses, caregivers, and medical assistants.',
    actions: ['apply', 'whatsapp', 'meeting'],
  },

  engineeringJob: {
    message:
      'Engineering jobs available including civil engineers, mechanical engineers, and project managers.',
    actions: ['apply', 'whatsapp', 'meeting'],
  },

  meeting: {
    message:
      'Book a meeting with our recruiter to discuss available opportunities.',
    actions: ['calendly'],
  },

  contact: {
    message: 'How would you like to contact us?',
    options: [
      { label: 'WhatsApp', next: 'whatsappDirect' },
      { label: 'Email', next: 'emailForm' },
      { label: 'Call Us', next: 'callInfo' },
    ],
  },

  whatsappDirect: {
    message:
      'Connect with our recruitment team directly on WhatsApp for immediate assistance.',
    actions: ['whatsapp'],
  },

  emailForm: {
    message: "Send us a message and we'll get back to you soon.",
    actions: ['cvForm'],
  },

  callInfo: {
    message:
      'Our office hours are Monday to Friday, 9 AM to 6 PM. Call us at +94 7XXXXXXXX for immediate assistance.',
    actions: ['whatsapp'],
  },
};

export default chatFlow;
