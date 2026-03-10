import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

const AltitudeTrinityPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main className='section-padding'>
        <div className='max-w-4xl mx-auto '>
          <ScrollReveal>
            <h1 className='text-4xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-black mb-6 '>
              The Altitude Trinity
            </h1>
            <p className='text-xs tracking-[0.3em] uppercase text-black mb-8 font-body'>
              Triple Pillar Methodology
            </p>
          </ScrollReveal>

          <div className='space-y-8'>
            <ScrollReveal delay={0.1}>
              <section>
                <p className='text-black font-body font-light text-lg leading-relaxed mb-2'>
                  To retain high-performing talent by strengthening the mental,
                  physical, and leadership foundations that sustain long-term
                  performance. Altitude Wellness protects organizations from
                  burnout-driven attrition, restores workforce productivity, and
                  ensures teams remain resilient, engaged, and capable, even in
                  high pressure environments.
                </p>
                {/* <p className='text-muted-foreground font-body font-light text-lg leading-relaxed'>
                  Our mission is to empower organizations with turnkey solutions
                  that protect and enhance their most valuable asset—their
                  people—through scientifically grounded, practically applicable
                  methodologies that deliver measurable, sustainable results.
                </p> */}
              </section>
            </ScrollReveal>

            {/* <ScrollReveal delay={0.2}>
              <section>
                <p className='text-black font-body font-light text-lg leading-relaxed mb-4'>
                  <p>
                    Employer brand positioning : Signal to top-tier talent that
                    your organization invests in long-term human mastery.
                  </p>
                  <p>
                    Performance optimization : Shift teams from presenteeism to
                    peak operational state.{' '}
                  </p>
                  <p>
                    Desision integrity : Protect cognitive reserves in
                    leadership during high-stakes periods.
                  </p>

                  <p>
                    Talent retention : Reduce the high financial and cultural
                    cost of burnout-driven attrition.
                  </p>
                </p>
              </section>
            </ScrollReveal> */}
            <ScrollReveal delay={0.2}>
              <section>
                <h2 className='text-2xl md:text-3xl font-body font-semibold text-black mb-6'>
                  Structure
                </h2>
                <div className='space-y-8'>
                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-black mb-3'>
                      Phase 1: Strategic Consultation
                    </h3>
                    <p className='text-black font-body font-light leading-relaxed mb-3'>
                      A focused discovery conversation with leadership to
                      identify organizational pressure points, workforce
                      challenges, and productivity risks. This ensures the
                      program addresses real operational needs rather than
                      generic wellness themes.
                    </p>
                  </div>

                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-black mb-3'>
                      Phase 2: Workforce Insight Mapping
                    </h3>
                    <p className='text-black font-body font-light leading-relaxed mb-3'>
                      Altitude Wellness evaluates key dynamics such as employee
                      stress indicators, leadership expectations, team
                      structure, and workplace performance pressures to
                      determine the most relevant intervention areas.
                    </p>
                  </div>

                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-black mb-3'>
                      Phase 3: Trinity Program Design
                    </h3>
                    <p className='text-black font-body font-light leading-relaxed mb-3'>
                      The session structure is strategically designed around the
                      Altitude Trinity methodology, integrating psychological
                      resilience, physical regulation, and executive-level
                      strategic clarity to create a balanced performance
                      framework.
                    </p>
                  </div>

                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-black mb-3'>
                      Phase 4: Expert Customization
                    </h3>
                    <p className='text-black font-body font-light leading-relaxed mb-3'>
                      Each certified specialist refines their segment to align
                      with the organization's industry environment, workforce
                      profile, and leadership culture.
                    </p>
                  </div>
                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-black mb-3'>
                      Phase 5: Operational Coordination
                    </h3>
                    <p className='text-black font-body font-light leading-relaxed mb-3'>
                      Altitude Wellness manages all logistical planning
                      including scheduling, session preparation, and speaker
                      coordination to ensure a seamless corporate experience.
                    </p>
                  </div>
                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-black mb-3'>
                      Phase 6: High-Impact Delivery
                    </h3>
                    <p className='text-black font-body font-light leading-relaxed mb-3'>
                      A professionally executed three-hour experience where each
                      expert delivers a focused one-hour session, providing
                      clear and practical strategies employees can immediately
                      apply.
                    </p>
                  </div>
                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-black mb-3'>
                      Phase 7: Continued Development Options
                    </h3>
                    <p className='text-black font-body font-light leading-relaxed mb-3'>
                      Organizations may extend the impact through optional
                      follow-up initiatives such as executive coaching,
                      leadership advisory sessions, or advanced wellness
                      engagements.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <section>
                <h2 className='text-2xl md:text-3xl font-body font-semibold text-black mb-6'>
                  Session Benefits
                </h2>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='border border-border p-6 rounded-lg'>
                    <h3 className='text-lg font-body font-semibold text-black mb-3'>
                      Individual Benefits
                    </h3>
                    <ul className='text-black font-body font-light leading-relaxed space-y-2'>
                      <li>• Stronger mental resilience</li>
                      <li>• Improved focus and energy</li>
                      <li>• Clearer decision-making</li>
                      <li>• Greater self-awareness</li>
                      <li>• Sustainable performance</li>
                    </ul>
                  </div>

                  <div className=' border border-border p-6 rounded-lg'>
                    <h3 className='text-lg font-body font-semibold text-black mb-3'>
                      Team Benefits
                    </h3>
                    <ul className='text-black font-body font-light leading-relaxed space-y-2'>
                      <li>• Stronger workplace collaboration</li>
                      <li>• Higher employee engagement</li>
                      <li>• Reduced burnout and workplace stress</li>
                      <li>• Improved team dynamics</li>
                      <li>• More productive work environments</li>
                    </ul>
                  </div>
                </div>
                {/* <div className='flex items-center justify-center'>
                  <h1 className='text-black font-body font-bold text-lg leading-relaxed mt-10'>
                    “Together, we can unlock new pathways to health,
                    empowerment, and connection—one step at a time”
                    <p>-Rangi Fernando</p>
                  </h1>
                </div> */}
              </section>
            </ScrollReveal>

            {/* <ScrollReveal delay={0.4}>
              <section>
                <h2 className='text-2xl md:text-3xl font-body font-semibold text-black mb-6'>
                  Session Benefits
                </h2>
                <div className='space-y-4'>
                  <div className='text-black font-body font-light text-lg leading-relaxed mb-4'>
                    <p className='text-black font-body font-light leading-relaxed'>
                      - Strengthens workforce performance by aligning
                      psychological resilience, physical wellbeing,& strategic
                      clarity.
                    </p>
                    <p className='text-black font-body font-light leading-relaxed'>
                      - Equips employees with practical tools to manage stress,
                      pressure, and workplace demands.
                    </p>
                    <p className='text-black font-body font-light leading-relaxed'>
                      - Enhances focus, decision-making, and cognitive
                      performance across teams.
                    </p>
                    <p className='text-black font-body font-light leading-relaxed'>
                      - Elevates employee engagement, morale, and organizational
                      culture.
                    </p>
                    <p className='text-black font-body font-light leading-relaxed'>
                      - Delivers high-impact insights from three
                      industry-recognized experts in a single experience.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal> */}
            <ScrollReveal delay={0.3}>
              <section>
                <div className='space-y-6'>
                  <div className='flex items-center justify-center'>
                    <p className='text-black font-body font-light italic leading-relaxed ml-6'>
                      Your workforce is your greatest asset. Strengthen it!
                    </p>
                  </div>

                  <div>
                    <div className='flex alignitems-center justify-center'>
                      <Button
                        variant='hero'
                        size='lg'
                        asChild
                        className='bg-black text-white '
                      >
                        <a href='mailto:wellness@altitudetalent.com.lk?subject=Book an Altitude Wellness Session'>
                          Book an Altitude Wellness Session
                        </a>
                      </Button>
                    </div>
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
