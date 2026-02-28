import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className='py-24 bg-black relative overflow-hidden'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

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
