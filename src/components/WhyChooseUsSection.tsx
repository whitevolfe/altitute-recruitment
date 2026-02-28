import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Eye, Globe, Users, Zap } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Ethical Recruitment',
    description:
      'Committed to legal compliance, candidate safety, and responsible hiring practices across all international placements.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description:
      'Clear communication, documented procedures, and full visibility throughout the recruitment lifecycle.',
  },
  {
    icon: Globe,
    title: 'Global Employer Network',
    description:
      'Strong partnerships with reputable employers across multiple countries and industries.',
  },
  {
    icon: Users,
    title: 'Skilled Sri Lankan Workforce',
    description:
      'Access to a highly trained, adaptable, and globally competitive talent pool.',
  },
  {
    icon: Zap,
    title: 'Fast Screening & Placement',
    description:
      'Efficient shortlisting and streamlined coordination to reduce hiring timelines.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className='section-padding bg-white relative overflow-hidden'>
      {/* Subtle background effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-gray-50/20'></div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-6xl font-display tracking-wide text-gray-900 mb-6'>
              Why Choose Us
            </h2>
            <p className='text-xl text-gray-600 font-body max-w-4xl mx-auto leading-relaxed'>
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
                <div className='group bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full'>
                  <div className='flex flex-col items-center text-center h-full'>
                    <div className='mb-6 p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300'>
                      <Icon
                        size={32}
                        className='text-blue-600 group-hover:scale-110 transition-transform duration-300'
                      />
                    </div>
                    <h3 className='text-xl font-display font-semibold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors'>
                      {point.title}
                    </h3>
                    <p className='text-gray-600 font-body leading-relaxed flex-1'>
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
