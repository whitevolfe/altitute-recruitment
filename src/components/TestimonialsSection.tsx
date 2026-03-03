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
      'I have had the pleasure of working with Charitha and Natlie through external partnerships. They are incredibly professional, polite, and a joy to work with. They pay close attention to every detail, take the time to understand business needs, and provide clear clarifications. Their positive attitude consistently stands out. I can confidently say that they are highly dedicated to their work and truly one of the best. I look forward to working with them long-term.',
    company: 'Operations Manager',
    initials: 'OM',
  },

  {
    quote:
      'I can confidently recommend Natlie and Charitha based on my experience with them during a recent recruitment opportunity. From the outset they are both friendly, helpful and consistently professional.',
    name: 'Senior Legal Counsel',
    company: 'Meridian Finance Group',
    initials: 'SC',
  },
  {
    quote:
      'I highly recommend Natlie and Charitha, the Founders of Altitude Talent. We have been working with them on Rec2Rec in Sri Lanka and have found them to be professional, responsive, and open to feedback. We look forward to a long and prosperous partnership with AT.',
    name: 'Founder & CEO',
    // company: 'Meridian Finance Group',
    initials: 'FC',
  },
  {
    quote:
      'Charitha and Natlie demonstrated a high level of professionalism and commitment throughout the engagement. Even after the goal was successfully achieved, they continued to keep in touch, which speaks volumes about their relationship-driven approach. Thank you Charitha and Natlie!',
    name: 'Vice President of Engineering Delivery',
    // company: 'Meridian Finance Group',
    initials: 'VD',
  },

  {
    quote:
      'I had the pleasure of working with Charitha and Natlie during my recent job search and I can confidently say they are two of the most professional and supportive recruiters I have met. They were incredibly helpful throughout the entire process, always responsive, transparent, and genuinely caring. Their friendly approach and clear communication made everything smooth and stress free. I truly appreciate their dedication and professionalism. Highly recommended!',
    name: 'Senior Software Engineer',
    // company: 'Meridian Finance Group',
    initials: 'SE',
  },
  {
    quote:
      'I highly recommend Charitha and Natlie as recruiters. They were incredibly proactive throughout my entire job search process, ensuring I was well-prepared for every interview step. Their regular follow-ups were not just check-ins; they were valuable touchpoints that provided clarity and kept me motivated. Thanks to their dedication and support, I successfully landed a great role. They are a true asset to any candidate and companys looking to hire!',
    name: 'Lead Technical Consultant',
    // company: 'Meridian Finance Group',
    initials: 'LC',
  },
  {
    quote:
      'I had the pleasure of working with Charitha and Natlie when they reached out to me about a new opportunity, and I am incredibly grateful for their support throughout the process. From our first conversation, Charitha was proactive, transparent, and genuinely focused on understanding my experience and goals. Natlie kept me informed at every step and offered thoughtful guidance on interview preparation. Thanks to their professionalism and care, the entire experience felt smooth and positive. I highly recommend Altitude Talent to any candidate or company looking for a dedicated, insightful, and trustworthy recruiting partner.',
    name: 'Product Manager',
    // company: 'Meridian Finance Group',
    initials: 'PM',
  },
  {
    quote:
      'I am truly grateful to Charitha and Natlie for helping me land my new career. They made the entire process from job search to onboarding smooth and hassle-free. Their professionalism, clear communication, and support were outstanding. Thank you, Charitha and Natlie, I wish you both continued success!',
    name: 'Senior Sales Executive',
    // company: 'Meridian Finance Group',
    initials: 'SSE',
  },

  {
    quote:
      'Charitha and Natlie are two of the best Recruiters I have ever met. The approach they have on candidates and their ability to provide a service thats beyond a regular recruiter is admirable. They go above and beyond to support the process of recruitment and check on both the candidate ,client requirements very well, a rare scenario in the recruitment space. I recommend Charitha and Natlie as an asset to any organization. Wishing them the best of luck!',
    name: 'Senior Recruitment Lead',
    // company: 'Meridian Finance Group',
    initials: 'SRL',
  },

  {
    quote:
      'Charitha and Natlie were an absolute pleasure to work with, and I highly recommend them. They were extremely professional, knowledgeable and helped me to find a great professional opportunity. They helped me navigate the process very skillfully and instilled high confidence throughout.',
    name: 'Vice President ',
    // company: 'Meridian Finance Group',
    initials: 'VP',
  },
  {
    quote:
      'I have been in the Advertising & Marketing field for over 19 years and have worked with various recruiters from reputable recruiting agencies. However, I can say without a doubt, Charitha and Natlie are two of the most supportive, attentive, and empathetic recruiters I have ever worked with. In this line of work, it is very important to possess humane qualities, the knowledge and ability to listen and understand candidates & I am sure the same applies to when dealing with employers. Throughout my professional experience with them, they have shown to be the embodiment of all these qualities.',
    name: 'Account Director  ',
    // company: 'Meridian Finance Group',
    initials: 'AD',
  },
  {
    quote:
      'Natlie and Charitha are exceptional at what they do. They maintain consistent communication and keep you well-informed throughout the recruitment journey. Their proactive approach to addressing inquiries and swift response time truly sets them apart. Without a doubt, two of the most outstanding recruiters that I have had the chance to collaborate with.',
    name: 'Account Director  ',
    // company: 'Meridian Finance Group',
    initials: 'Social Media Manager',
  },
  {
    quote:
      "I have had the pleasure of working closely with Natlie and Charitha, the founders of Altitude Talent, and I can confidently say they are among the most dedicated and professional recruiters we've partnered with.  As a team, they take the time to genuinely understand our business, our culture, and the specific requirements of each role. What sets them apart is the initiative they take throughout the entire process and from clarifying our expectations, to refining the candidate profile, to going above and beyond to source the right people, even for highly specialised or challenging positions. Their communication is always clear, proactive, and honest, and they consistently deliver candidates who are well-screened, aligned, and ready to add value from day one. Their partnership-driven approach makes the recruitment process smooth, efficient, and truly collaborative.  I highly recommend Natlie, Charitha, and Altitude Talent to any organisation seeking recruiters who combine professionalism, commitment, and a genuine passion for connecting the right talent with the right opportunities. They have been invaluable to our hiring success, and I look forward to continuing our work together.",
    name: 'Country Director',
    // company: 'Apex Creative Agency',
    initials: 'CD',
  },
  {
    quote:
      'I had the pleasure of working with Charitha and Natlie throughout my recent recruitment process, and I can confidently say that they are among the most professional, approachable, and genuinely supportive recruiters I have encountered. From our very first interaction, they took the time to thoroughly explain the role including responsibilities, expectations, and overall scope ensuring that I had a clear understanding and felt fully confident before proceeding.  They provided timely updates, constructive feedback, and were always available to address any questions or concerns.  What truly sets them apart is their considerate and personalized approach. Beyond the formal aspects of recruitment, they demonstrate genuine care for candidates comfort, confidence, and long-term career development. Their insights and support are not only professional but also meaningful, reflecting a level of dedication that is rare and deeply appreciated. I would highly recommend Charitha, Natlie and Altitude Talent to anyone seeking a recruiter who is responsive, supportive, and sincerely committed to helping candidates find the right opportunities in their career journey.',
    name: 'Senior Business Analyst',
    // company: 'Meridian Finance Group',
    initials: 'SA',
  },
  {
    quote:
      'I had the absolute pleasure of working with Charitha and Natlie for my recruitment process and I can confidently say they are two of the most efficient and professional recruiters I have ever come across. From our very first conversation, they were proactive, personable, and genuinely invested in finding the right fit, not just for the client, but also for me as a candidate. They gave me the confidence and preparation I needed to face interviews successfully, offering valuable insights and encouragement throughout the process. Their communication was exceptional and they were always available when I needed advice or clarification, consistently following up every step of the way.  What truly stood out was their thoughtful guidance during the negotiation stage. Their advice helped me navigate the process with clarity and confidence. It’s rare to find people who combine such professionalism with a genuinely caring approach. I would highly recommend Charitha and Natlie to anyone looking for recruiters who are efficient, supportive, and truly committed to achieving the best outcomes for both candidate and client.',
    name: 'Senior Corporate Lawyer',
    // company: 'Meridian Finance Group',
    initials: 'SL',
  },
  {
    quote:
      'I had the pleasure of working with Charitha and Natlie from Altitude Talent, and I can confidently say they are in a league of their own. Both are incredibly professional and deeply committed to the well-being of the recruits, while at the same time balancing the best interests of their clients, which is something thats often easier said than done. What sets them apart is their professionalism, integrity, drive, and transparency. They made sure I was always comfortable, informed, and confident throughout the entire process, demonstrating a level of care and communication rarely seen in recruitment today. Their industry experience and deep understanding of people and organisations shine through in every interaction. They take the time to understand each candidates potential and every clients needs, ensuring lasting matches built on trust and alignment. I would wholeheartedly recommend Charitha and Natlie to anyone seeking career guidance or looking to hire exceptional talent. They are genuine professionals who go above and beyond and will always be my first recommendation in the industry. I wish them all the best!',
    name: 'Head of Business Development',
    // company: 'Meridian Finance Group',
    initials: 'HD',
  },
  {
    quote:
      'I met Charitha and Natlie as a client for an opportunity that I was interested in, and I am pleased to recommend them both for their exceptional professionalism. Throughout my experience with them, they demonstrated a level of courtesy, transparency, and attentiveness that truly set them apart from others in the industry.  Unlike my previous experiences with other recruiters, they ensured that I was well-informed at every stage of the process. Their proactive communication and genuine care made a significant difference, and I deeply appreciate the effort they put into making the experience smooth while maintaining confidentiality. I have no doubt that their skills and work ethic will contribute greatly to the success of Altitude Talent, the company they founded. I wish them and their company continued growth and success, and I wholeheartedly recommend their services to anyone looking for a reliable and professional recruitment experience.',
    name: 'Head of Finance',
    // company: 'Meridian Finance Group',
    initials: 'HOF',
  },
  {
    quote:
      'I had the pleasure of working with Charitha and Natlie when they reached out to me about a new opportunity, and I am incredibly grateful for their support throughout the process. From our first conversation, Charitha was proactive, transparent, and genuinely focused on understanding my experience and goals. Natlie kept me informed at every step and offered thoughtful guidance on interview preparation. Thanks to their professionalism and care, the entire experience felt smooth and positive. I highly recommend Altitude Talent to any candidate or company looking for a dedicated, insightful, and trustworthy recruiting partner.',
    name: 'Product Manager',
    // company: 'Meridian Finance Group',
    initials: 'PM',
  },
  {
    quote:
      'Charitha and Natlie helped me find the perfect role, and I couldnt be happier. They really took the time to understand my skills and what I actually wanted to do in my role. Every step of the process was smooth, thanks to their clear communication and constant support. What I appreciate most is how trustworthy and supportive they are. It felt like having someone in my corner who truly wanted the best for me. Charitha is a solid guy with a great heart. With his and Natlie’s expertise, it’s easy to see why Altitude Talent will shine. They arent just great at matching people with jobs, they are great at matching people with the right jobs. I highly recommend working with them. The best doors open when the right people knock.',
    name: 'SEO Specialist',
    // company: 'Meridian Finance Group',
    initials: 'SS',
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id='testimonials'
      className='py-24 bg-black relative overflow-hidden'
    >
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
        <div className="absolute inset-0 bg-[url('/space-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-6'>
        <ScrollReveal>
          <p className='text-xs tracking-[0.3em] uppercase text-white/70 mb-4 font-body'>
            Testimonials
          </p>
          <h2 className='text-4xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-white mb-16'>
            What Clients Say
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

                    <p className='text-sm md:text-base text-white font-body font-light leading-relaxed mb-6 line-clamp-4'>
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
                        <p className='text-xs text-white/70 font-body truncate'>
                          {testimonial.company}
                        </p>
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
