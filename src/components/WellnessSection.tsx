import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'The Altitude Trinity',
    subtitle: 'Triple Pillar Methodology',
    desc: 'High-impact intervention model built on a Triple-Pillar Framework integrating:',
    features: [
      'Psychologist – Clinical Insight',
      'Wellness Coach – Physical Exercise',
      'Executive Coach – Strategic Leadership Reinforcement',
    ],
    closingText:
      'By addressing performance from clinical, biological, and strategic dimensions within one condensed engagement, organizations receive a turnkey solution to protect their most valuable asset — their people.',
    route: '/packages/altitude-trinity',
  },
  {
    name: 'Movement Therapy by Rangi Fernando',
    subtitle: 'Resilience through Movement',
    desc: 'A guided corporate wellness experience designed to restore, regulate, and strengthen through intentional movement.',
    features: [
      'A Quick Boost',
      'Self-Discovery & Awareness',
      'Practical Resilience Tools',
      'Team Cohesion',
      'Stress Relief & Emotional Release',
    ],
    closingText:
      'Sustained performance is not built on pressure alone, but on a body and mind that are regularly restored.',
    route: '/packages/movement-therapy',
  },
];

const WellnessSection = () => {
  return (
    <section id='wellness' className='section-padding'>
      <div className='max-w-7xl mx-auto'>
        <ScrollReveal>
          <p className='text-4xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-black mb-6'>
            Altitude Wellness
          </p>
          <h2 className='text-xs tracking-[0.3em] uppercase text-black mb-4 font-body'>
            Corporate Wellbeing
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className='text-black font-body font-light text-lg leading-relaxed mb-3'>
            We believe high performance starts with wellbeing. Our wellness
            division delivers tailored programmes that support employee health,
            reduce burnout, and create thriving workplace cultures.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className='text-black font-body font-light text-lg leading-relaxed mb-3'>
            Through years of engagement with both candidates and corporate
            leaders, a consistent theme emerged: performance expectations were
            rising, yet structured and impactful wellbeing strategies were
            largely absent.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className='text-black font-body font-light text-lg leading-relaxed mb-3'>
            In response, Altitude Wellness was formed as a premier corporate
            wellness platform built on a high impact proprietary Three Pillar
            Methodology.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className='text-black font-body font-light text-lg leading-relaxed mb-3'>
            The program integrates psychology, practical wellness and leadership
            insight frameworks to help organizations build resilient,
            high-performing teams. Its approach is structured, measurable and
            designed for lasting impact.
          </p>
        </ScrollReveal>

        <br />

        <div className='grid md:grid-cols-2 gap-8'>
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={0.15 + i * 0.1}>
              <div className='border border-border p-8 md:p-10 flex flex-col h-full hover:border-foreground/20 transition-colors duration-500'>
                <h3 className='font-body font-bold text-2xl tracking-wide text-black px-4 py-2 mb-3'>
                  {pkg.name}
                </h3>
                <p className='text-xs tracking-[0.2em] uppercase text-black mb-3 font-body'>
                  {pkg.subtitle}
                </p>
                <p className='text-black font-body font-light mb-6'>
                  {pkg.desc}
                </p>
                <ul className='space-y-3 mb-6 flex-1'>
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className='flex items-start gap-3 text-sm text-black font-body'
                    >
                      <Check size={16} className='text-black mt-0.5 shrink-0' />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className='text-black font-body font-light text-sm mb-8'>
                  {pkg.closingText}
                </p>
                <Button size='lg' className='border-border text-black' asChild>
                  <a href={pkg.route}>Explore Package</a>
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
