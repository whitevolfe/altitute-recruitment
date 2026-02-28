import ScrollReveal from '@/components/ScrollReveal';

const TradingRevolutionSection = () => {
  return (
    <section className='min-h-screen bg-black relative overflow-hidden'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 py-20'>
        <div className='grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]'>
          {/* Left side - Large headline */}
          <ScrollReveal>
            <h2 className='text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight max-w-2xl'>
              Revolutionizing the Career
            </h2>
          </ScrollReveal>

          {/* Right side - Statistics cards */}
          <ScrollReveal delay={0.2}>
            <div className='grid grid-cols-2 gap-6'>
              {/* Card 1 */}
              <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300'>
                <p className='text-white/70 text-sm uppercase tracking-wider mb-2'>
                  WE ARE
                </p>
                <h3 className='text-3xl font-bold text-white mb-3'>
                  ALTITUDE GROUP
                </h3>
                <p className='text-white/80 text-sm leading-relaxed'>
                  Trusted global recruitment partner for ethical, compliant, and
                  quality placements worldwide.
                </p>
              </div>

              {/* Card 2 */}
              <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300'>
                <h3 className='text-3xl font-bold text-white mb-2'>
                  50+ Placements
                </h3>
                <p className='text-white/80 text-sm leading-relaxed'>
                  We search and analysts driving career success.
                </p>
              </div>

              {/* Card 3 */}
              <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300'>
                <h3 className='text-4xl font-bold text-white mb-2'>98%</h3>
                <p className='text-white/70 text-sm uppercase tracking-wider mb-1'>
                  TALENTS RETAINED
                </p>
                <p className='text-white/80 text-sm leading-relaxed'>
                  Unmatched retention through exceptional experiences.
                </p>
              </div>

              {/* Card 4 - Highlight */}
              <div className='bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  Connecting 2000+ Candidates
                </h3>
                <p className='text-white/90 text-sm leading-relaxed'>
                  Establishing the most diverse Skilled Candidates across the
                  globe.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom metrics row */}
        <ScrollReveal delay={0.4}>
          <div className='mt-20 pt-16 border-t border-white/10'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
              <div>
                <h4 className='text-white/70 text-sm uppercase tracking-wider mb-2'>
                  Candidates
                </h4>
                <p className='text-3xl font-bold text-white'>2000+</p>
              </div>
              <div>
                <h4 className='text-white/70 text-sm uppercase tracking-wider mb-2'>
                  TRUSTED BY NATIONS
                </h4>
                <p className='text-3xl font-bold text-white'>170+</p>
              </div>
              <div>
                <h4 className='text-white/70 text-sm uppercase tracking-wider mb-2'>
                  CLIENTS
                </h4>
                <p className='text-3xl font-bold text-white'>50+</p>
              </div>
              <div className='col-span-2 md:col-span-1'>
                <h4 className='text-white/70 text-sm uppercase tracking-wider mb-3'>
                  MISSION & VISION
                </h4>
                <p className='text-white/80 text-sm leading-relaxed'>
                  To revolutionize global Recruitment Service with cutting-edge
                  technology and seamless user experiences.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TradingRevolutionSection;
