import { Quote } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    quote:
      'I can confidently say that they are highly dedicated to their work and truly one of the best. I look forward to working with them long-term.',
    name: 'Operations Manager',
    initials: 'OM',
  },

  {
    quote:
      ' I highly recommend Natlie, Charitha. They have been invaluable to our hiring success, and I look forward to continuing our work together.',
    name: 'Country Director',
    // company: 'Meridian Finance Group',
    initials: 'CD',
  },
  {
    quote:
      'I can confidently recommend Natlie and Charitha based on my experience with them during a recent recruitment opportunity. From the outset they are both friendly, helpful and consistently professional.',
    name: 'Senior Legal Counsel',
    // company: 'Meridian Finance Group',
    initials: 'SLC',
  },
  {
    quote:
      'We have been working with them on Rec2Rec in Sri Lanka and have found them to be professional, responsive, and open to feedback. We look forward to a long and prosperous partnership with AT.',
    name: 'Founder & CEO',
    // company: 'Meridian Finance Group',
    initials: 'FC',
  },

  {
    quote:
      'Even after the hiring goal was successfully achieved, they continued to keep in touch, which speaks volumes about their relationship-driven approach. Thank you Charitha and Natlie!',
    name: 'Vice President of Engineering Delivery',
    // company: 'Meridian Finance Group',
    initials: 'VE',
  },
  {
    quote: `What truly sets them apart is their considerate and personalized approach. Beyond the formal aspects of recruitment, they demonstrate genuine care for candidates' comfort, confidence, and long-term career development.`,
    name: 'Senior Business Analyst',
    // company: 'Meridian Finance Group',
    initials: 'SA',
  },
  {
    quote:
      'From our very first conversation, they were proactive, personable, and genuinely invested in finding the right fit. I would highly recommend Charitha and Natlie to anyone looking for recruiters who are efficient, supportive, and truly committed to achieving the best outcomes.',
    name: 'Senior Corporate Lawyer',
    // company: 'Meridian Finance Group',
    initials: 'SL',
  },
  {
    quote:
      'Charitha and Natlie from Altitude Talent are in a league of their own. They are genuine professionals who go above and beyond and will always be my first recommendation in the industry!',
    name: 'Head of Business Development',
    // company: 'Meridian Finance Group',
    initials: 'HD',
  },

  {
    quote: `Their friendly approach and clear communication made everything smooth and stress free. I truly appreciate their dedication and professionalism. Highly recommended!`,
    name: 'Senior Software Engineer',
    // company: 'Meridian Finance Group',
    initials: 'SSE',
  },

  {
    quote:
      'They were incredibly proactive throughout my entire job search process, ensuring I was well-prepared for every interview step. They are a true asset to anyone looking to hire!',
    name: 'Lead Technical Consultant',
    // company: 'Meridian Finance Group',
    initials: 'LTC',
  },
  {
    quote: `Thanks to their professionalism and care, the entire experience felt smooth and positive. I highly recommend Altitude Talent to any candidate or company looking for a dedicated, insightful, and trustworthy recruiting partner.`,
    name: 'Product Manager',
    // company: 'Meridian Finance Group',
    initials: 'PM',
  },
  {
    quote: `They made the entire process from job search to onboarding smooth and hassle-free. Their professionalism, clear communication, and support were outstanding. I wish you both continued success!`,
    name: 'Senior Sales Executive',
    // company: 'Meridian Finance Group',
    initials: 'SSE',
  },
  {
    quote: `Charitha and Natlie helped me find the perfect role, and I couldn’t be happier. I highly recommend working with them. The best doors open when the right people knock.`,
    name: 'SEO Specialist',
    // company: 'Meridian Finance Group',
    initials: 'SS',
  },
  {
    quote: `Charitha and Natlie are two of the best Recruiters I have ever met. They go above and beyond to support the process of recruitment. I recommend Charitha and Natlie as an asset to any organization.`,
    name: 'Senior Recruitment Lead',
    // company: 'Meridian Finance Group',
    initials: 'SRL',
  },
  {
    quote: `I deeply appreciate the effort they put into making the experience smooth while maintaining confidentiality. I wholeheartedly recommend their services to anyone looking for a reliable and professional recruitment experience.`,
    name: 'Head of Finance',
    // company: 'Meridian Finance Group',
    initials: 'HOF',
  },
  {
    quote: `They were extremely professional, knowledgeable and helped me to find a great professional opportunity. They helped me navigate the process very skillfully and instilled high confidence throughout.`,
    name: 'Vice President ',
    // company: 'Meridian Finance Group',
    initials: 'VP',
  },
  {
    quote: `I have been in the Advertising & Marketing field for over 19 years and have worked with various recruiters from reputable recruiting agencies. I can say without a doubt, Charitha and Natlie are two of the most supportive, attentive, and empathetic recruiters I have ever worked with.`,
    name: 'Account Director',
    // company: 'Meridian Finance Group',
    initials: 'AD',
  },
  {
    quote: `Natlie and Charitha are exceptional at what they do. Without a doubt, two of the most outstanding recruiters that I have had the chance to collaborate with.`,
    name: 'Social Media Manager',
    // company: 'Meridian Finance Group',
    initials: 'SMM',
  },
  {
    quote: `Well done on what you have both done with Altitude. Always destined for greater things!`,
    name: 'Co-Founder',
    // company: 'Meridian Finance Group',
    initials: 'CF',
  },
  {
    quote: `Its rare to find recruiters that you can genuinely work with and Charitha and Natlie are those two of those rare ones`,
    name: 'Head of Talent Acquisition',
    // company: 'Meridian Finance Group',
    initials: 'HTA',
  },
  {
    quote: `They entered an industry with an influx of recruitment agencies and made their mark in less than a year. That tells me they are a force to be reckoned with.`,
    name: 'Vice President of Engineering',
    // company: 'Meridian Finance Group',
    initials: 'VPE',
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id='testimonials'
      className='py-0 bg-black relative overflow-hidden'
    >
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#080808] to-[#000000]'>
        <div className="absolute inset-0 bg-[url('/space-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-6'>
        <ScrollReveal>
          <p className='text-xs tracking-[0.3em] uppercase text-white/70 mt-4 mb-4 font-body'></p>
          <h2 className='text-2xl sm:text-3xl md:text-6xl font-body font-medium tracking-[0.1em] md:tracking-[0.2em] uppercase text-white mb-10 md:mb-16 text-center'>
            Testimonials
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className='w-full'
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent className='-ml-2 md:-ml-4'>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className='pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3'
                >
                  <div className='h-full p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors'>
                    <Quote
                      size={24}
                      className='text-white/30 mb-4'
                      strokeWidth={1}
                    />

                    <p className='text-sm md:text-base text-white font-body font-light leading-relaxed mb-6 line-clamp-6'>
                      "{testimonial.quote}"
                    </p>

                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0'>
                        <span className='font-display text-sm text-white'>
                          {testimonial.initials}
                        </span>
                      </div>
                      <div className='min-w-0'>
                        <p className='text-white font-body font-medium text-sm truncate'>
                          {testimonial.name}
                        </p>
                        {/* <p className='text-xs text-white/70 font-body truncate'>
                          {testimonial.company}
                        </p> */}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-2 text-white border-white/30 hover:bg-white/10 hover:text-white' />
            <CarouselNext className='right-2 text-white border-white/30 hover:bg-white/10 hover:text-white' />
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
