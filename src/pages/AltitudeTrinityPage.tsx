import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const AltitudeTrinityPage = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main className='section-padding'>
        <div className='max-w-4xl mx-auto'>
          <ScrollReveal>
            <h1 className='text-4xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-foreground mb-6'>
              The Altitude Trinity
            </h1>
            <p className='text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16 font-body'>
              Triple Pillar Methodology
            </p>
          </ScrollReveal>

          <div className='space-y-16'>
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className='text-2xl md:text-3xl font-display font-semibold text-foreground mb-6'>
                  The Mission
                </h2>
                <p className='text-muted-foreground font-body font-light text-lg leading-relaxed mb-4'>
                  The Altitude Trinity represents our commitment to holistic
                  human performance optimization. By integrating clinical
                  psychology, physical wellness coaching, and strategic
                  leadership development, we create comprehensive interventions
                  that address the complete spectrum of human performance
                  factors.
                </p>
                <p className='text-muted-foreground font-body font-light text-lg leading-relaxed'>
                  Our mission is to empower organizations with turnkey solutions
                  that protect and enhance their most valuable asset—their
                  people—through scientifically grounded, practically applicable
                  methodologies that deliver measurable, sustainable results.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <section>
                <h2 className='text-2xl md:text-3xl font-display font-semibold text-foreground mb-6'>
                  The Business Imperative
                </h2>
                <p className='text-muted-foreground font-body font-light text-lg leading-relaxed mb-4'>
                  In today's hyper-competitive business environment,
                  organizational success is increasingly dependent on human
                  performance optimization. The traditional approach of focusing
                  solely on strategic and operational excellence is insufficient
                  when human capital represents the primary competitive
                  differentiator.
                </p>
                <p className='text-muted-foreground font-body font-light text-lg leading-relaxed mb-4'>
                  Research consistently demonstrates that employee wellbeing
                  directly correlates with productivity, innovation, and
                  retention. However, fragmented wellness approaches often fail
                  to address the interconnected nature of clinical, biological,
                  and strategic performance factors.
                </p>
                <p className='text-muted-foreground font-body font-light text-lg leading-relaxed'>
                  The Altitude Trinity bridges this gap by providing integrated,
                  evidence-based interventions that simultaneously address
                  mental health, physical wellness, and leadership effectiveness
                  within a single, cohesive framework.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <section>
                <h2 className='text-2xl md:text-3xl font-display font-semibold text-foreground mb-6'>
                  The Process
                </h2>
                <div className='space-y-6'>
                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-display font-semibold text-foreground mb-3'>
                      Phase 1: Clinical Assessment & Foundation Building
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed'>
                      Our licensed psychologist conducts comprehensive
                      assessments to establish baseline mental health metrics
                      and identify organizational stress patterns. This phase
                      establishes the clinical foundation for all subsequent
                      interventions.
                    </p>
                  </div>

                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-display font-semibold text-foreground mb-3'>
                      Phase 2: Physical Wellness Integration
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed'>
                      Certified wellness coaches design personalized physical
                      wellness programs that complement clinical insights,
                      focusing on sustainable lifestyle changes that enhance
                      cognitive function and emotional regulation.
                    </p>
                  </div>

                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-display font-semibold text-foreground mb-3'>
                      Phase 3: Leadership Reinforcement
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed'>
                      Executive coaches work with leadership teams to integrate
                      wellness principles into organizational culture, ensuring
                      sustainable implementation and long-term performance
                      optimization.
                    </p>
                  </div>

                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-display font-semibold text-foreground mb-3'>
                      Phase 4: Integration & Sustainment
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed'>
                      Comprehensive follow-up programs ensure lasting change
                      through ongoing support, measurement, and adjustment based
                      on real-world organizational dynamics.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <section>
                <h2 className='text-2xl md:text-3xl font-display font-semibold text-foreground mb-6'>
                  Terms & Conditions
                </h2>
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-display font-semibold text-foreground mb-2'>
                      Program Duration
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed'>
                      The Altitude Trinity program spans 12 weeks with flexible
                      scheduling to accommodate organizational needs and time
                      zone considerations.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-lg font-display font-semibold text-foreground mb-2'>
                      Confidentiality
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed'>
                      All participant information is treated with the highest
                      level of confidentiality in accordance with international
                      privacy standards and professional ethical guidelines.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-lg font-display font-semibold text-foreground mb-2'>
                      Customization
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed'>
                      Programs are tailored to specific organizational cultures,
                      industry requirements, and participant needs while
                      maintaining evidence-based methodological integrity.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-lg font-display font-semibold text-foreground mb-2'>
                      Measurement & Reporting
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed'>
                      Comprehensive pre- and post-program assessments provide
                      measurable outcomes and ROI documentation for
                      organizational stakeholders.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AltitudeTrinityPage;
