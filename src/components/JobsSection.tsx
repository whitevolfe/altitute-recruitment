import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Monitor, DollarSign, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { jobs } from '@/data/jobs';
import GlobalCommunitySection from './GlobalCommunitySection';

const JobsSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id='careers' className='section-padding bg-card'>
      <div className='max-w-4xl mx-auto'>
        <ScrollReveal>
          <p className='text-xs uppercase text-foreground mb-4 font-body'>
            Altitude Talent
          </p>
          <br />

          <GlobalCommunitySection />

          {/* <p className='text-muted-foreground'>
            Altitude Talent The Group’s first initiative, Altitude Talent, was
            launched as a strategic executive search and talent advisory firm
            dedicated to supporting organizations in Sri Lanka in securing
            high-impact professionals. The firm has successfully placed talent
            across: • Software Engineering • Finance • Legal • Marketing •
            Executive Leadership Altitude Talent goes beyond transactional
            recruitment. It partners closely with organizations to understand
            their culture, long-term objectives and growth trajectory, ensuring
            that every placement is strategically aligned with business vision.
          </p> */}
          <br />

          <h2 className='text-4xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-foreground mb-16'>
            Open Vacancies
          </h2>
        </ScrollReveal>

        <div className='space-y-3'>
          {jobs.map((job, i) => (
            <ScrollReveal key={job.id} delay={0.05 + i * 0.05}>
              <div className='border border-border bg-background'>
                <button
                  onClick={() => setOpenId(openId === job.id ? null : job.id)}
                  className='w-full px-6 md:px-8 py-6 flex items-center justify-between text-left group'
                >
                  <div className='flex-1'>
                    <h3 className='font-display text-xl md:text-2xl tracking-wide text-foreground mb-2'>
                      {job.title}
                    </h3>
                    <div className='flex flex-wrap gap-4 text-xs text-muted-foreground font-body'>
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
                    className={`text-muted-foreground transition-transform duration-300 shrink-0 ml-4 ${
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
                      <div className='px-6 md:px-8 pb-8 border-t border-border pt-6'>
                        <p className='text-muted-foreground font-body font-light mb-6'>
                          {job.description}
                        </p>

                        <h4 className='text-xs tracking-[0.2em] uppercase text-foreground mb-3 font-body font-semibold'>
                          Responsibilities
                        </h4>
                        <ul className='list-disc list-inside space-y-1.5 text-sm text-muted-foreground font-body font-light mb-6'>
                          {job.responsibilities.map((r) => (
                            <li key={r}>{r}</li>
                          ))}
                        </ul>

                        <h4 className='text-xs tracking-[0.2em] uppercase text-foreground mb-3 font-body font-semibold'>
                          Requirements
                        </h4>
                        <ul className='list-disc list-inside space-y-1.5 text-sm text-muted-foreground font-body font-light mb-8'>
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
      </div>
    </section>
  );
};

export default JobsSection;
