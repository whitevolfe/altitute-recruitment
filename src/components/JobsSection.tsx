import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Monitor, DollarSign, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { jobs } from '@/data/jobs';
import GlobalCommunitySection from './GlobalCommunitySection';
import WhyChooseUsSection from './WhyChooseUsSection';
import HowItWorksSection from './HowItWorksSection';
import ConsultationModal from './ConsultationModal';

const JobsSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id='careers'
      className='section-padding bg-black relative overflow-hidden'
    >
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#080808] to-[#000000]'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-6xl ml-20 '>
        <ScrollReveal>
          <p className='text-3xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-white mb-5'>
            Altitude Talent
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className='max-w-6xl ml-1 space-y-4'>
            <p className='text-white/80 font-body font-light text-lg text-lg leading-relaxed'>
              The Group's first initiative, Altitude Talent, was launched as a
              strategic executive search and talent advisory firm dedicated to
              supporting organizations in Sri Lanka in securing high-impact
              professionals.
            </p>

            <p className='text-white/80 font-body font-light text-lg text-lg leading-relaxed'>
              The firm has successfully placed talent across:
            </p>

            <ul className='list-disc list-inside space-y-2 text-white/80 font-body font-light text-lg '>
              <li>Software Engineering</li>
              <li>Finance</li>
              <li>Legal</li>
              <li>Marketing</li>
              <li>Executive Leadership</li>
            </ul>

            <p className='text-white/80 font-body font-light text-lg leading-relaxed'>
              Altitude Talent goes beyond transactional recruitment. It partners
              closely with organizations to understand their culture, long-term
              objectives, and growth trajectory, ensuring that every placement
              is strategically aligned with business vision.
            </p>
          </div>
        </ScrollReveal>
      </div>
      <WhyChooseUsSection />
      <HowItWorksSection />
      {/* <GlobalCommunitySection /> */}

      <div className='relative z-10 max-w-4xl mx-auto'>
        <ScrollReveal delay={0.2}>
          <div className='text-center mt-20'>
            <h2 className='text-5xl md:text-5xl font-body font-medium tracking-[0.2em] uppercase text-white mb-16'>
              Open Vacancies
            </h2>
          </div>
        </ScrollReveal>
        <div className='mx-auto max-w-4xl'>
          <div className='space-y-3'>
            {jobs.map((job, i) => (
              <ScrollReveal key={job.id} delay={0.05 + i * 0.05}>
                <div className='border border-white/10 bg-white/5 backdrop-blur-sm'>
                  <button
                    onClick={() => setOpenId(openId === job.id ? null : job.id)}
                    className='w-full px-6 md:px-8 py-6 flex items-center justify-between text-left group'
                  >
                    <div className='flex-1'>
                      <h3 className='font-body text-xl md:text-2xl tracking-wide text-white mb-2'>
                        {job.title}
                      </h3>
                      <div className='flex flex-wrap gap-4 text-xs text-white/70 font-body'>
                        <span className='flex items-center gap-1.5'>
                          <MapPin size={13} /> {job.location}
                        </span>
                        <span className='flex items-center gap-1.5'>
                          <Monitor size={13} /> {job.workModel}
                        </span>
                        <span className='flex items-center gap-1.5'>
                          <DollarSign size={13} /> {job.salaryCurrency}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-white/70 transition-transform duration-300 shrink-0 ml-4 ${
                        openId === job.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openId === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='overflow-hidden'
                      >
                        <div className='px-6 md:px-8 pb-8 border-t border-white/10 pt-6'>
                          <p className='text-white/80 font-body font-light mb-6'>
                            {job.description}
                          </p>

                          <h4 className='text-xs tracking-[0.2em] uppercase text-white mb-3 font-body font-semibold'>
                            Responsibilities
                          </h4>
                          <ul className='list-disc list-inside space-y-1.5 text-sm text-white/70 font-body font-light mb-6'>
                            {job.responsibilities.map((r) => (
                              <li key={r}>{r}</li>
                            ))}
                          </ul>

                          <h4 className='text-xs tracking-[0.2em] uppercase text-white mb-3 font-body font-semibold'>
                            Requirements
                          </h4>
                          <ul className='list-disc list-inside space-y-1.5 text-sm text-white/70 font-body font-light mb-8'>
                            {job.requirements.map((r) => (
                              <li key={r}>{r}</li>
                            ))}
                          </ul>

                          <Button variant='hero' size='lg' asChild>
                            <a href='mailto:talent@altitudetalent.com.lk?subject=Job Application'>
                              Apply Now
                            </a>
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className='mt-10 flex items-center justify-center'>
            <Button variant='hero' size='lg'>
              Hire With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
