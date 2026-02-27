import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Wellness Essentials',
    desc: 'Foundation programme for employee wellbeing and retention.',
    features: [
      'Employee wellbeing assessments',
      'Stress management workshops',
      'Mental health first aid training',
      'Monthly wellness newsletters',
      'Quarterly wellness reports',
    ],
  },
  {
    name: 'Wellness Premium',
    desc: 'Comprehensive corporate wellbeing transformation programme.',
    features: [
      'Everything in Essentials',
      '1-on-1 executive coaching',
      'Custom wellness strategy',
      'On-site wellness events',
      'Dedicated wellness consultant',
      'Annual wellbeing audit',
    ],
  },
];

const WellnessSection = () => {
  return (
    <section id='wellness' className='section-padding'>
      <div className='max-w-7xl mx-auto'>
        <ScrollReveal>
          <p className='text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body'>
            Altitude Wellness
          </p>
          <h2 className='text-4xl md:text-6xl font-display tracking-wide text-foreground mb-6'>
            Corporate Wellbeing
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed max-w-3xl mb-7'>
            We believe high performance starts with wellbeing. Our wellness
            division delivers tailored programmes that support employee health,
            reduce burnout, and create thriving workplace cultures.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed max-w-3xl mb-7'>
            Through years of engagement with both candidates and corporate
            leaders, a consistent theme emerged: performance expectations were
            rising, yet structured and impactful wellbeing strategies were
            largely absent.
          </p>
        </ScrollReveal>
        <br />
        <ScrollReveal delay={0.15}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed max-w-3xl mb-7'>
            In response, Altitude Wellness was formed as a premier corporate
            wellness platform built on a high impact proprietary Three Pillar
            Methodology.
          </p>
        </ScrollReveal>
        <br />
        <ScrollReveal delay={0.15}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed max-w-3xl mb-7'>
            The program integrates psychology, practical wellness and leadership
            insight frameworks to help organizations build resilient,
            high-performing teams. Its approach is structured, measurable and
            designed for lasting impact.
          </p>
        </ScrollReveal>
        <div className='grid md:grid-cols-2 gap-8'>
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={0.15 + i * 0.1}>
              <div className='bg-card border border-border p-8 md:p-10 flex flex-col h-full hover:border-foreground/20 transition-colors duration-500'>
                <h3 className='font-display text-2xl tracking-wide text-foreground mb-3'>
                  {pkg.name}
                </h3>
                <p className='text-muted-foreground font-body font-light mb-8'>
                  {pkg.desc}
                </p>
                <ul className='space-y-3 mb-10 flex-1'>
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className='flex items-start gap-3 text-sm text-muted-foreground font-body'
                    >
                      <Check
                        size={16}
                        className='text-foreground mt-0.5 shrink-0'
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-border text-foreground hover:bg-accent'
                  asChild
                >
                  <a href='#contact'>Get Started</a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;
