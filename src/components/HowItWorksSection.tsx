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
      <div className='absolute inset-0 bg-gradient-to-b from-[#080808] to-[#000000]'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        <ScrollReveal>
          <div className='mb-16'>
            <p className='text-white/60 text-xs tracking-[0.3em] uppercase font-body mb-4'>
              OUR PROCESS <span className='text-white/40'>—</span>
            </p>
            <h2 className='text-5xl md:text-7xl font-body font-bold text-white mb-8'>
              How it works, step by step
            </h2>
            <div className='border-t border-white/20 w-full'></div>
          </div>
        </ScrollReveal>

        {/* Timeline for desktop */}
        <div className='hidden lg:block relative'>
          {/* Connecting line */}
          <div className='absolute top-12 left-0 right-0 h-px bg-white/10'></div>

          <div className='grid grid-cols-4 gap-8'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={index * 0.15}>
                  <div className='group relative pt-8'>
                    {/* Step indicator */}
                    <div className='flex items-center gap-3 mb-4'>
                      <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                      <span className='text-green-400 text-sm font-bold tracking-widest uppercase'>
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className='text-xl font-body font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 flex items-center gap-2'>
                        <Icon size={16} className='text-white/40' />
                        {step.title}
                      </h3>
                      <p className='text-white/70 font-body leading-relaxed'>
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
                <div className='group'>
                  {/* Step indicator */}
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                    <span className='text-green-400 text-sm font-bold tracking-widest uppercase'>
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className='text-xl font-display font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 flex items-center gap-2'>
                      <Icon size={16} className='text-white/40' />
                      {step.title}
                    </h3>
                    <p className='text-white/70 font-body leading-relaxed'>
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
