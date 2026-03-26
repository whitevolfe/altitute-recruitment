import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Monitor, DollarSign, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import GlobalCommunitySection from './GlobalCommunitySection';
import WhyChooseUsSection from './WhyChooseUsSection';
import HowItWorksSection from './HowItWorksSection';

const JobsSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH FROM SHEETDB API
  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/uacz70f8qnbb4')
      .then((res) => res.json())
      .then((data) => {
        console.log('API DATA:', data); // DEBUG

        const formattedJobs = data.map((job: any) => ({
          id: job.id,
          title: job.title,
          location: job.location,
          workModel: job.workModel,
          salaryCurrency: job.salaryCurrency,
          description: job.description,

          responsibilities: job.responsibilities
            ? job.responsibilities.split('||').map((i: string) => i.trim())
            : [],

          requirements: job.requirements
            ? job.requirements.split('||').map((i: string) => i.trim())
            : [],
        }));

        console.log('FORMATTED:', formattedJobs); // DEBUG

        setJobs(formattedJobs);
        setLoading(false);
      })
      .catch((err) => {
        console.error('ERROR:', err);
        setLoading(false);
      });
  }, []);

  // ⏳ LOADING STATE
  if (loading) {
    return <div className='text-white text-center py-20'>Loading jobs...</div>;
  }

  return (
    <section id='careers' className='py-20 bg-black relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#080808] to-[#000000]'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      {/* Intro */}
      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        <ScrollReveal>
          <h2 className='text-3xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-white mb-8'>
            Altitude Talent
          </h2>
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

      {/* Open Vacancies */}
      <div className='relative z-10 max-w-4xl mx-auto mt-20'>
        <ScrollReveal delay={0.2}>
          <div id='open-vacancies' className='text-center'>
            <h2 className='text-5xl font-body font-medium tracking-[0.2em] uppercase text-white mb-16'>
              Open Vacancies
            </h2>
          </div>
        </ScrollReveal>

        <div className='space-y-3'>
          {jobs.length === 0 ? (
            <p className='text-white text-center'>No jobs available</p>
          ) : (
            jobs.map((job, i) => (
              <ScrollReveal key={job.id || i} delay={0.05 + i * 0.05}>
                <div className='border border-white/10 bg-white/5 backdrop-blur-sm'>
                  <button
                    onClick={() => setOpenId(openId === job.id ? null : job.id)}
                    className='w-full px-6 md:px-8 py-6 flex items-center justify-between text-left'
                  >
                    <div className='flex-1'>
                      <h3 className='font-body text-xl md:text-2xl tracking-wide text-white mb-2'>
                        {job.title || 'No Title'}
                      </h3>

                      <div className='flex flex-wrap gap-4 text-xs text-white/70 font-body'>
                        <span className='flex items-center gap-1.5'>
                          <MapPin size={13} /> {job.location || 'N/A'}
                        </span>

                        <span className='flex items-center gap-1.5'>
                          <Monitor size={13} /> {job.workModel || 'N/A'}
                        </span>

                        <span className='flex items-center gap-1.5'>
                          <DollarSign size={13} /> {job.salaryCurrency || 'N/A'}
                        </span>
                      </div>
                    </div>

                    <ChevronDown
                      size={20}
                      className={`text-white/70 transition-transform duration-300 ${
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
                            {job.responsibilities.map(
                              (r: string, index: number) => (
                                <li key={index}>{r}</li>
                              ),
                            )}
                          </ul>

                          <h4 className='text-xs tracking-[0.2em] uppercase text-white mb-3 font-body font-semibold'>
                            Requirements
                          </h4>

                          <ul className='list-disc list-inside space-y-1.5 text-sm text-white/70 font-body font-light mb-8'>
                            {job.requirements.map(
                              (r: string, index: number) => (
                                <li key={index}>{r}</li>
                              ),
                            )}
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
            ))
          )}
        </div>

        <div className='mt-10 flex items-center justify-center'>
          <Button variant='hero' size='lg'>
            <a href='mailto:talent@altitudetalent.com.lk?subject=Job Application'>
              Hire With Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
