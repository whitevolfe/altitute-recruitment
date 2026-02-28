import ScrollReveal from '@/components/ScrollReveal';

const AltitudeGroupSection = () => {
  return (
    <section className='section-padding'>
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
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed '>
            Altitude Group is a Human Capital and Corporate Performance Advisory
            firm founded by Charitha Malalasekera and Natlie Jackson, each
            bringing over 12 years of corporate leadership experience within
            structured, high-performance environments
          </p>
        </ScrollReveal>
        <br />
        <ScrollReveal delay={0.15}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed '>
            The Group was established to address a fundamental business reality:
            organizations cannot scale sustainably without strategic talent
            alignment and performance resilience operating in tandem.
          </p>
        </ScrollReveal>
        <br />

        <ScrollReveal delay={0.15}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed '>
            Altitude Group launched with Altitude Talent, a strategic executive
            search and talent advisory practice delivering high-impact
            placements across software engineering, finance, legal, marketing
            and executive leadership. The firm operates with a consultative,
            outcome-driven model, ensuring that every hire is aligned with
            long-term business strategy, cultural integrity and operational
            scalability.
          </p>
        </ScrollReveal>
        <br />
        <ScrollReveal delay={0.15}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed '>
            Through extensive engagement with corporate stakeholders and
            professionals, the founders identified a systemic gap, increasing
            performance demands without structured, measurable wellbeing
            frameworks to sustain them. In response, Altitude Wellness was
            established as a premier corporate performance and wellness platform
            built on a proprietary Three Pillar Methodology. The program
            integrates psychology, practical performance guidance and leadership
            strategy to optimize performance and high retention.
          </p>
        </ScrollReveal>
        <br />

        <ScrollReveal delay={0.15}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed '>
            Altitude Group operates at the convergence of executive search and
            corporate performance sustainability.
          </p>
        </ScrollReveal>
        <br />
        <ScrollReveal delay={0.15}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed '>
            It exists to deliver more than growth.
          </p>
        </ScrollReveal>
        <br />
        <ScrollReveal delay={0.15}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed '>
            It exists to build organizations that are strategically aligned,
            operationally resilient and designed for optimized performance.
          </p>
        </ScrollReveal>
      </div>
      <br />
    </section>
  );
};

export default AltitudeGroupSection;
