import ScrollReveal from '@/components/ScrollReveal';

const AltitudeGroupSection = () => {
  return (
    <section className='section-padding'>
      <div className='max-w-7xl mx-auto'>
        <ScrollReveal>
          <p className='text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body'>
            Who We Are
          </p>
          <h2 className='text-4xl md:text-6xl font-display tracking-wide text-foreground mb-8'>
            About Altitude Group
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className='text-muted-foreground font-body font-light text-lg leading-relaxed max-w-3xl'>
            Altitude Group connects high-performing professionals with leading
            global businesses. We specialise in executive search, C-suite
            hiring, and industry-specific recruitment across tech, finance,
            marketing, PR and creative sectors.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AltitudeGroupSection;
