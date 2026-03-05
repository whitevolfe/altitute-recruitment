import ScrollReveal from '@/components/ScrollReveal';

const TradingRevolutionSection = () => {
  return (
    <section className='min-h-screen bg-black relative overflow-hidden'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#080808] to-[#000000]'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 py-20'>
        <div className='grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]'>
          {/* Left side - Large headline */}
          <ScrollReveal>
            <h2 className='text-5xl md:text-5xl lg:text-5xl font-body text-white leading-tight max-w-1xl'>
              Revolutionizing Human Capital and Corporate Performance Advisory
            </h2>
          </ScrollReveal>

          {/* Right side - Statistics cards */}
          <ScrollReveal delay={0.2}>
            <div className='flex justify-center'>
              <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-2xl w-full'>
                {/* Card 1 */}
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:transform hover:scale-105 transition-all duration-300'>
                  {/* <p className='text-white/70 text-sm uppercase tracking-wider mb-2'>
                  WE ARE
                </p> */}
                  <h3 className='text-3xl font-bold font-body flex justify-center text-white mb-3'>
                    Candidates
                  </h3>
                  <p className='text-white/360 flex justify-center text-xl leading-relaxed'>
                    2000+
                  </p>
                </div>

                {/* Card 2 */}
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:transform hover:scale-105 transition-all duration-300'>
                  <h3 className='text-3xl font-bold font-body flex justify-center text-white mb-2'>
                    Clients
                  </h3>
                  <p className='text-white/360 text-xl flex justify-center leading-relaxed'>
                    50+
                  </p>
                </div>

                {/* Card 3 */}
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:transform hover:scale-105 transition-all duration-300'>
                  <h3 className='text-3xl font-bold flex justify-center font-body text-white mb-2'>
                    Retention Rate
                  </h3>
                  {/* <p className='text-white/70 text-sm uppercase tracking-wider mb-1'>
                  TALENTS RETAINED
                </p> */}
                  <p className='text-white/360 text-xl flex justify-center leading-relaxed'>
                    98%
                  </p>
                </div>

                {/* Card 4 - Highlight */}
                <div className='bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-2xl p-4 hover:transform hover:scale-105 transition-all duration-300'>
                  <h3 className='text-3xl font-bold font-body flex justify-center text-white mb-2'>
                    Placements
                  </h3>
                  <p className='text-white/3600 text-xl flex justify-center leading-relaxed'>
                    50+
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TradingRevolutionSection;
