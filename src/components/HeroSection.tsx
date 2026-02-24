import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ConsultationModal from './ConsultationModal';
import heroVideo from '@/assets/hero-video1.mp4';

const HeroSection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      <video
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 w-full h-full object-cover'
      >
        <source src={heroVideo} type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-background/40' />

      <div className='relative z-10 text-center max-w-5xl mx-auto px-6'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className='text-5xl md:text-7xl lg:text-8xl font-display leading-[0.95] text-foreground mb-6 tracking-wide'
        >
          Connecting Top-Tier Talent with Leading Global Companies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className='text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-body font-light'
        >
          Scaling businesses across Tech, Finance, PR, Advertising, Marketing &
          Creative.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='flex flex-col sm:flex-row gap-4 justify-center'
        >
          <Button variant='hero' size='lg' asChild>
            <a href='#careers'>View Open Roles</a>
          </Button>
          <Button
            variant='hero-outline'
            size='lg'
            onClick={() => setIsConsultationModalOpen(true)}
          >
            Partner With Us
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2'
      >
        <div className='w-px h-12 bg-foreground/30 animate-pulse' />
      </motion.div>

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
