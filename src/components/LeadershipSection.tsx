import ScrollReveal from '@/components/ScrollReveal';
import { Linkedin } from 'lucide-react';

const founders = [
  {
    name: 'Charitha',
    title: 'Co-Founder',
    bio: "With deep expertise in executive search and strategic talent acquisition, Charitha drives Altitude Group's vision to connect exceptional leaders with transformative opportunities across global markets.",
    initials: 'C',
  },
  {
    name: 'Natlie',
    title: 'Co-Founder',
    bio: 'Natlie brings a wealth of experience in international recruitment and client partnerships, ensuring Altitude Group delivers premium, tailored hiring solutions to industry-leading organisations worldwide.',
    initials: 'N',
  },
];

const LeadershipSection = () => {
  return (
    <section className='section-padding'>
      <div className='max-w-7xl mx-auto'>
        <ScrollReveal>
          <p className='text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10 font-body'>
            Leadership
          </p>
        </ScrollReveal>

        <div className='grid md:grid-cols-2 gap-8'>
          {founders.map((founder, i) => (
            <ScrollReveal key={founder.name} delay={0.1 + i * 0.1}>
              <div className='bg-card border border-border p-8 md:p-10 group hover:border-foreground/20 transition-colors duration-500'>
                <div className='w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6'>
                  <span className='font-display text-3xl text-foreground'>
                    {founder.initials}
                  </span>
                </div>
                <h3 className='font-display text-2xl tracking-wide text-foreground mb-1'>
                  {founder.name}
                </h3>
                <p className='text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body'>
                  {founder.title}
                </p>
                <p className='text-muted-foreground font-body font-light leading-relaxed mb-6'>
                  {founder.bio}
                </p>
                <a
                  href='#'
                  className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
