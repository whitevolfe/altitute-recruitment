import ScrollReveal from '@/components/ScrollReveal';
import NumberCounter from '@/components/NumberCounter';

const TradingRevolutionSection = () => {
  return (
    <section className='min-h-[50vh] bg-black relative overflow-hidden'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#080808] to-[#000000]'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 py-15'>
        <div className='grid lg:grid-cols-2 gap-16 items-center min-h-[50vh]'>
          {/* Left side - Large headline */}
          <ScrollReveal>
            <h2 className='text-3xl text-left px-10 ml-9 md:text-3xl lg:text-4xl font-body text-white leading-tight max-w-1xl'>
              Revolutionizing Human Capital and Corporate Performance Advisory
            </h2>
          </ScrollReveal>

          {/* Right side - Statistics cards */}
          <ScrollReveal delay={0.2}>
            <div className='flex justify-center'>
              <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-2xl w-full'>
                {/* Card 1 */}
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:transform hover:scale-105 transition-all duration-300'>
                  <NumberCounter
                    target={2000}
                    label='CANDIDATES'
                    duration={2000}
                    delay={100}
                  />
                </div>

                {/* Card 2 */}
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:transform hover:scale-105 transition-all duration-300'>
                  <NumberCounter
                    target={50}
                    label='CLIENTS'
                    duration={1500}
                    delay={200}
                  />
                </div>

                {/* Card 3 */}
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:transform hover:scale-105 transition-all duration-300'>
                  <NumberCounter
                    target={98}
                    label='RETENTION RATE'
                    duration={1800}
                    delay={300}
                    decimals={0}
                    suffix='%'
                  />
                </div>

                {/* Card 4 - Highlight */}
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:transform hover:scale-105 transition-all duration-300'>
                  <NumberCounter
                    target={50}
                    label='PLACEMENTS'
                    duration={1600}
                    delay={400}
                  />
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
