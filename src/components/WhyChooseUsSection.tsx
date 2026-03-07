import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Eye, Globe, Users, Zap, User } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Strategic Talent Acquisition',
    description:
      'We approach recruitment as a strategic business function, ensuring every hire supports long-term organizational growth.',
  },
  {
    icon: Eye,
    title: 'Precision Sourcing Methodology',
    description:
      'Our targeted sourcing approach identifies high-caliber candidates who align with both the role and the company culture.',
  },
  {
    icon: Globe,
    title: 'Specialized Industry Expertise',
    description:
      'We focus on key sectors including Software Engineering, Finance, Legal, and Advertising, enabling deeper market insight and stronger candidate networks.',
  },
  {
    icon: Users,
    title: 'High-Quality Candidate Experience',
    description:
      'We maintain professionalism, transparency, and confidentiality throughout the hiring process, strengthening employer brand.',
  },
  {
    icon: Zap,
    title: 'Efficient Hiring Process',
    description:
      'Our structured recruitment process reduces time-to-hire while maintaining rigorous candidate evaluation standards.',
  },
  {
    icon: User,
    title: 'Founder-Led Commitment',
    description:
      'Every engagement benefits from direct founder oversight, ensuring accountability, attention to detail, and exceptional service.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className='section-padding bg-black relative overflow-hidden'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#080808] to-[#000000]'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-6xl font-body tracking-wide text-white mb-6'>
              Why Choose Us
            </h2>
            <p className='text-xl text-white/80 font-body max-w-5xl mx-auto leading-relaxed'>
              Trusted by global employers and professionals for ethical,
              transparent, and efficient recruitment solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <ScrollReveal key={point.title} delay={index * 0.1}>
                <div className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full'>
                  <div className='flex flex-col items-center text-center h-full'>
                    <div className='mb-6 p-4 bg-blue-50/20 rounded-full group-hover:bg-blue-100/30 transition-colors duration-300'>
                      <Icon
                        size={32}
                        className='text-blue-400 group-hover:scale-110 transition-transform duration-300'
                      />
                    </div>
                    <h3 className='text-xl font-body font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors'>
                      {point.title}
                    </h3>
                    <p className='text-white/80 font-body leading-relaxed flex-1'>
                      {point.description}
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

export default WhyChooseUsSection;
