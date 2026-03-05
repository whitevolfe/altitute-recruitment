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
            <p className='text-xs tracking-[0.3em] uppercase text-black mb-16 font-body'>
              Triple Pillar Methodology
            </p>
          </ScrollReveal>

          <div className='space-y-16'>
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className='text-2xl md:text-3xl font-body font-semibold text-black mb-6'>
                  The Mission
                </h2>
                <p className='text-black font-body font-light text-lg leading-relaxed mb-4'>
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

            <ScrollReveal delay={0.2}>
              <section>
                <h2 className='text-2xl md:text-3xl font-body font-semibold text-black mb-6'>
                  The Business Imperative
                </h2>
                <p className='text-black font-body font-light text-lg leading-relaxed mb-4'>
                  <p>
                    EMPLOYER BRAND POSITIONING : Signal to top-tier talent that
                    your organization invests in long-term human mastery.
                  </p>
                  <p>
                    PERFORMANCE OPTIMIZATION : Shift teams from presenteeism to
                    peak operational state.{' '}
                  </p>
                  <p>
                    DECISION INTEGRITY : Protect cognitive reserves in
                    leadership during high-stakes periods.
                  </p>

                  <p>
                    TALENT RETENTION : Reduce the high financial and cultural
                    cost of burnout-driven attrition.
                  </p>
                </p>
                {/* <p className='text-muted-foreground font-body font-light text-lg leading-relaxed mb-4'>
                  Research consistently demonstrates that employee wellbeing
                  directly correlates with productivity, innovation, and
                  retention. However, fragmented wellness approaches often fail
                  to address the interconnected nature of clinical, biological,
                  and strategic performance factors.
                </p> */}
                {/* <p className='text-muted-foreground font-body font-light text-lg leading-relaxed'>
                  The Altitude Trinity bridges this gap by providing integrated,
                  evidence-based interventions that simultaneously address
                  mental health, physical wellness, and leadership effectiveness
                  within a single, cohesive framework.
                </p> */}
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
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
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <section>
                <h2 className='text-2xl md:text-3xl font-body font-semibold text-black mb-6'>
                  The Process
                </h2>
                <div className='space-y-6'>
                  <div className='border-l-4 border-secondary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-black mb-3'>
                      Requirement Submission
                    </h3>
                    <p className='text-black font-body font-light leading-relaxed'>
                      Employers submit their workforce requirements with
                      detailed job specifications and expectations.
                    </p>
                  </div>

                  <div className='border-l-4 border-secondary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-black mb-3'>
                      Candidate Screening
                    </h3>
                    <p className='text-black font-body font-light leading-relaxed'>
                      Our recruitment team carefully screens, verifies, and
                      shortlists qualified candidates.
                    </p>
                  </div>

                  <div className='border-l-4 border-secondary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-black mb-3'>
                      Interview & Selection
                    </h3>
                    <p className='text-black font-body font-light leading-relaxed'>
                      We coordinate interviews, assessments, and employer
                      evaluations to finalize selections.
                    </p>
                  </div>

                  <div className='border-l-4 border-secondary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-black mb-3'>
                      Deployment
                    </h3>
                    <p className='text-black font-body font-light leading-relaxed'>
                      Successful candidates complete documentation and are
                      deployed in full compliance with international
                      regulations.
                    </p>
                  </div>

                  <div>
                    <p className='text-black font-body font-light leading-relaxed ml-6'>
                      Your workforce is your greatest asset. Strengthen it!
                    </p>
                  </div>

                  <div>
                    <Button variant='hero' size='lg' asChild>
                      <a href='mailto:wellness@altitudetalent.com.lk?subject=Book an Altitude Wellness Session'>
                        Book an Altitude Wellness Session
                      </a>
                    </Button>

                    {isOpen && (
                      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                        <div className='bg-white p-6 rounded-lg max-w-md w-full mx-4'>
                          <h3 className='text-lg font-semibold mb-4'>
                            Speak to a Talent Partner
                          </h3>
                          <form
                            action='https://api.web3forms.com/submit'
                            method='POST'
                            className='space-y-4'
                            onSubmit={() => setIsOpen(false)}
                          >
                            <input
                              type='hidden'
                              name='access_key'
                              value='26c0c484-0f08-44f4-9b53-85677e50cfd5'
                            />
                            <input
                              type='hidden'
                              name='subject'
                              value='New Talent Partner Inquiry'
                            />
                            <input
                              type='hidden'
                              name='from_name'
                              value='Altitude Talent Website'
                            />
                            <input
                              type='hidden'
                              name='to'
                              value='your-email@example.com'
                            />

                            <div>
                              <label
                                htmlFor='name'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Name
                              </label>
                              <input
                                type='text'
                                id='name'
                                name='name'
                                required
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                              />
                            </div>

                            <div>
                              <label
                                htmlFor='email'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Email
                              </label>
                              <input
                                type='email'
                                id='email'
                                name='email'
                                required
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                              />
                            </div>

                            <div>
                              <label
                                htmlFor='company'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Company
                              </label>
                              <input
                                type='text'
                                id='company'
                                name='company'
                                required
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                              />
                            </div>

                            <div>
                              <label
                                htmlFor='message'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Message
                              </label>
                              <textarea
                                id='message'
                                name='message'
                                rows={4}
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                              ></textarea>
                            </div>

                            <div className='flex space-x-2'>
                              <Button
                                type='submit'
                                variant='hero'
                                className='flex-1'
                              >
                                Submit
                              </Button>
                              <Button variant='hero' size='lg' asChild>
                                <a href='mailto:wellness@altitudetalent.com.lk?subject=Book an Altitude Wellness Session'>
                                  Book an Altitude Wellness Session
                                </a>
                              </Button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}
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
