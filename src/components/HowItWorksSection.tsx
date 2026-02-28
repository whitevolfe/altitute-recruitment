import ScrollReveal from '@/components/ScrollReveal';
import { FileText, Search, Users, Plane } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Requirement Submission',
    description:
      'Employers submit their workforce requirements with detailed job specifications and expectations.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Candidate Screening',
    description:
      'Our recruitment team carefully screens, verifies, and shortlists qualified candidates.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Interview & Selection',
    description:
      'We coordinate interviews, assessments, and employer evaluations to finalize selections.',
  },
  {
    number: '04',
    icon: Plane,
    title: 'Deployment',
    description:
      'Successful candidates complete documentation and are deployed in full compliance with international regulations.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className='section-padding bg-black relative overflow-hidden'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-6xl font-display tracking-wide text-white mb-6'>
              How It Works
            </h2>
            <p className='text-xl text-white/80 font-body max-w-3xl mx-auto leading-relaxed'>
              A streamlined and transparent recruitment process designed for
              efficiency and compliance.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline for desktop */}
        <div className='hidden lg:block relative'>
          {/* Connecting line */}
          <div className='absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600'></div>

          <div className='grid grid-cols-4 gap-8'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={index * 0.15}>
                  <div className='group relative'>
                    {/* Step circle */}
                    <div className='flex justify-center mb-8'>
                      <div className='relative'>
                        <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                          {step.number}
                        </div>
                        <div className='absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300'>
                          <Icon size={16} className='text-blue-600' />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className='bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-white/10'>
                      <h3 className='text-xl font-display font-semibold text-white mb-3 text-center'>
                        {step.title}
                      </h3>
                      <p className='text-white/80 font-body leading-relaxed text-center'>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Vertical stacked for mobile/tablet */}
        <div className='lg:hidden space-y-8'>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={index * 0.15}>
                <div className='group flex items-start gap-6'>
                  {/* Step number and icon */}
                  <div className='flex-shrink-0'>
                    <div className='relative'>
                      <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                        {step.number}
                      </div>
                      <div className='absolute -top-1 -right-1 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300'>
                        <Icon size={12} className='text-blue-600' />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='flex-1 bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/10'>
                    <h3 className='text-lg font-display font-semibold text-white mb-2'>
                      {step.title}
                    </h3>
                    <p className='text-white/80 font-body leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
