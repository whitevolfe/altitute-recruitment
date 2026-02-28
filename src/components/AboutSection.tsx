import ScrollReveal from '@/components/ScrollReveal';
import { Linkedin } from 'lucide-react';

const founders = [
  {
    name: 'Charitha Malalasekera',
    title: 'Co-Founder',
    bio: [
      'Charitha Malalasekera is the Co-Founder of Altitude Group and a strategic leader with regional experience across MENA and European markets.',
      'With an academic Function in Animation and Business, Charitha brings a structured, systems-oriented perspective to leadership and operational execution. His background reflects a disciplined approach shaped by technical precision and commercial acumen.',
      'Charitha is recognized for his empathy, clear communication and strong client management capabilities, enabling him to build trusted partnerships and navigate complex stakeholder landscapes with confidence and discretion.',
      'In 2025, he co-founded Altitude Group, transitioning from corporate leadership into entrepreneurship with a clear focus on building institutions grounded in structure, accountability and long-term sustainability. His leadership philosophy is rooted in discipline, strategic foresight and frameworks designed to endure.',
    ],
    initials: 'C',
    image: '/brandlogos/Charitha.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/charitha-malalasekera-2386811b7/',
  },
  {
    name: 'Natlie',
    title: 'Co-Founder',
    bio: [
      'Natlie is the Co-Founder of Altitude Group and a strategic leader with over 12 years of corporate experience across European, US and Asian markets.',
      'She began her professional career immediately after completing school, building her trajectory within structured, performance-driven environments and working alongside mid-sized and blue-chip organizations. Her background has shaped a commercially disciplined, globally informed approach to leadership, execution and long-term value creation.',
      'In 2025, she made the decision to step away from the traditional corporate path and co-found Altitude Group. Launching the business while navigating early motherhood reinforced her operational rigor, resilience and uncompromising standards. The experience strengthened a leadership philosophy grounded in accountability, precision and endurance.',
      'Natlie is recognized for her strategic clarity, decisive execution and commitment to building institutions designed for sustained performance.',
      'Her mandate is simple: lead with conviction, build with structure and create lasting impact.',
    ],
    initials: 'N',
    image: '/brandlogos/Natlie.jpg.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/natlie-jackson/',
  },
];

const AboutSection = () => {
  return (
    <section id='about' className='section-padding'>
      <div className='max-w-7xl mx-auto'>
        <ScrollReveal>
          <p className='text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body'>
            Who We Are
          </p>
          <h2 className='text-4xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-foreground mb-8'>
            About Altitude Group
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed max-w-3xl mb-20'>
            Altitude Group connects high-performing professionals with leading
            global businesses. We specialise in executive search, C-suite
            hiring, and industry-specific recruitment across tech, finance,
            marketing, PR and creative sectors.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className='text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10 font-body'>
            Leadership
          </p>
        </ScrollReveal>

        <div className='grid md:grid-cols-2 gap-8'>
          {founders.map((founder, i) => (
            <ScrollReveal key={founder.name} delay={0.25 + i * 0.1}>
              <div className='bg-card border border-border p-8 md:p-10 group hover:border-foreground/20 transition-colors duration-500'>
                {founder.image ? (
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className='w-40 h-40 rounded-full object-cover mb-6'
                  />
                ) : (
                  <div className='w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6'>
                    <span className='font-display text-3xl text-foreground'>
                      {founder.initials}
                    </span>
                  </div>
                )}
                <h3 className='font-display text-2xl tracking-wide text-foreground mb-1'>
                  {founder.name}
                </h3>
                <p className='text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-body'>
                  {founder.title}
                </p>
                {Array.isArray(founder.bio) ? (
                  founder.bio.map((para, idx) => (
                    <p
                      key={idx}
                      className='text-muted-foreground font-body font-light leading-relaxed mb-6'
                    >
                      {para}
                    </p>
                  ))
                ) : (
                  <p className='text-muted-foreground font-body font-light leading-relaxed mb-6'>
                    {founder.bio}
                  </p>
                )}
                <a
                  href={founder.linkedinUrl}
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

export default AboutSection;
