const chatFlow = {
  start: {
    message: 'Welcome to Altitude Global Recruitment 👋 How can I help you?',
    options: [
      { label: 'Find Job', next: 'country' },
      { label: 'Book Meeting', next: 'meeting' },
      { label: 'Contact Us', next: 'contact' },
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
