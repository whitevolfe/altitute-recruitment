import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const testimonials = [
  {
    quote:
      'Altitude Group transformed our hiring process. They found us exceptional C-suite talent that has driven our company forward in ways we never imagined.',
    name: 'Sarah Mitchell',
    company: 'TechVenture Capital',
    initials: 'SM',
  },
  {
    quote:
      "The team's understanding of the creative industry is unmatched. They placed three senior leaders who perfectly aligned with our company culture and vision.",
    name: 'James Chen',
    company: 'Apex Creative Agency',
    initials: 'JC',
  },
  {
    quote:
      "Working with Altitude was seamless. Their global reach and deep network gave us access to talent pools we couldn't reach on our own.",
    name: 'Amara Okafor',
    company: 'Meridian Finance Group',
    initials: 'AO',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section
      id='testimonials'
      className='py-24 bg-black relative overflow-hidden'
    >
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-6'>
        <ScrollReveal>
          <p className='text-xs tracking-[0.3em] uppercase text-white/70 mb-4 font-body'>
            Testimonials
          </p>
          <h2 className='text-4xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-white mb-16'>
            What Clients Say
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className='relative'>
            <Quote size={40} className='text-white/30 mb-6' strokeWidth={1} />

            <div className='min-h-[200px] flex flex-col justify-center'>
              <p className='text-xl md:text-2xl text-white font-body font-light leading-relaxed mb-8'>
                "{t.quote}"
              </p>

              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center'>
                  <span className='font-display text-lg text-white'>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className='text-white font-body font-medium'>{t.name}</p>
                  <p className='text-sm text-white/70 font-body'>{t.company}</p>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4 mt-10'>
              <button
                onClick={prev}
                className='w-10 h-10 border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors'
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className='w-10 h-10 border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors'
              >
                <ChevronRight size={18} />
              </button>

              <div className='flex gap-2 ml-4'>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
