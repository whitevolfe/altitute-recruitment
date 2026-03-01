import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    id: '1',
    question: 'How do I submit a recruitment request?',
    answer:
      "Employers can submit their requirements online using our secure form. We'll guide you through every step.",
  },
  {
    id: '2',
    question: 'Do you provide pre-screened candidates?',
    answer:
      'Yes, all candidates are carefully screened, verified, and matched to employer requirements.',
  },
  {
    id: '3',
    question: 'Is your recruitment process ethical and compliant?',
    answer:
      'Absolutely. We follow Sri Lankan government regulations and international employment standards.',
  },
  {
    id: '4',
    question: 'Can candidates apply for overseas jobs?',
    answer:
      'Yes, candidates can apply online and receive guidance on documentation, interviews, and placement.',
  },
  {
    id: '5',
    question: 'What industries do you serve?',
    answer:
      'IT, Healthcare, Construction, Hospitality, Engineering, and more. We cover all major sectors.',
  },
  {
    id: '6',
    question: 'Do you offer post-placement support?',
    answer:
      'Yes, we provide ongoing follow-up and assistance to both employers and candidates.',
  },
  {
    id: '7',
    question: 'Are your services transparent in fees?',
    answer:
      'Yes, all charges are clearly communicated upfront with no hidden costs.',
  },
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<string[]>(['1']);

  const handleValueChange = (value: string[]) => {
    // Limit to 1-2 open items
    if (value.length <= 2) {
      setOpenItems(value);
    }
  };

  return (
    <section className='py-24 bg-black relative overflow-hidden'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-6'>
        <ScrollReveal>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-display font-bold text-white mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-white/80 font-body leading-relaxed max-w-2xl mx-auto'>
              Get quick answers to the most common queries from employers and
              candidates.
            </p>
          </div>
        </ScrollReveal>

        <div className='space-y-4'>
          {faqItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <Accordion
                type='multiple'
                value={openItems}
                onValueChange={handleValueChange}
                className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'
              >
                <AccordionItem value={item.id} className='border-0'>
                  <AccordionTrigger className='px-8 py-6 hover:bg-gray-50 transition-colors duration-200 group [&>svg]:hidden'>
                    <span className='text-left text-lg font-semibold text-gray-900 font-body'>
                      {item.question}
                    </span>
                    <div className='flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white group-hover:bg-blue-700 transition-colors duration-200'>
                      {openItems.includes(item.id) ? (
                        <Minus className='w-4 h-4' />
                      ) : (
                        <Plus className='w-4 h-4' />
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='px-8 pb-6'>
                    <p className='text-gray-700 font-body leading-relaxed'>
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
