import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className='py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden'>
      {/* Animated background effects */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 animate-pulse'></div>
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000'></div>
      <div className='absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000'></div>

      <div className='relative z-10 max-w-4xl mx-auto px-6 text-center'>
        <ScrollReveal>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight'>
            Looking to Hire Top Sri Lankan Talent?
          </h2>
          <p className='text-xl md:text-2xl text-blue-100 font-body font-light leading-relaxed mb-12 max-w-3xl mx-auto'>
            Partner with us today and gain access to skilled, screened, and
            globally competitive professionals.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <Button
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 group'
              asChild
            >
              <a href='#contact' className='flex items-center gap-2'>
                Submit Your Requirement
                <ArrowRight
                  size={20}
                  className='group-hover:translate-x-1 transition-transform'
                />
              </a>
            </Button>

            <Button
              variant='outline'
              size='lg'
              className='border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300 group'
              asChild
            >
              <a href='#contact' className='flex items-center gap-2'>
                <Phone size={20} />
                Contact Our Team
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CallToActionSection;
