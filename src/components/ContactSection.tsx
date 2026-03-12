import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';

const WEB3FORMS_KEY = '26c0c484-0f08-44f4-9b53-85677e50cfd5';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', 'New Contact from Altitude Group Website');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact' className='py-20 bg-black relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#080808] to-[#000000]'>
        <div className="absolute inset-0 bg-[url('/space-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6'>
        {/* Heading */}
        <ScrollReveal>
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-foreground mb-16'>
              Contact Us
            </h2>
          </div>
        </ScrollReveal>

        <div className='grid lg:grid-cols-2 gap-20'>
          {/* Contact Form */}
          <ScrollReveal delay={0.1}>
            {success ? (
              <div className='flex items-center justify-center h-full'>
                <div className='text-center'>
                  <h3 className='font-display text-3xl text-foreground mb-3'>
                    Message Sent
                  </h3>
                  <p className='text-muted-foreground font-body font-light'>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-5 max-w-2xl'>
                <input
                  type='hidden'
                  name='to'
                  value='talent@altitudetalent.com.lk'
                />

                <input type='checkbox' name='botcheck' className='hidden' />

                <div>
                  <label className='block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body'>
                    Name *
                  </label>
                  <input
                    name='name'
                    required
                    className='w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors'
                  />
                </div>

                <div>
                  <label className='block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body'>
                    Email *
                  </label>
                  <input
                    name='email'
                    type='email'
                    required
                    className='w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors'
                  />
                </div>

                <div>
                  <label className='block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body'>
                    Company
                  </label>
                  <input
                    name='company'
                    className='w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors'
                  />
                </div>

                <div>
                  <label className='block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body'>
                    Message *
                  </label>
                  <textarea
                    name='message'
                    required
                    rows={5}
                    className='w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors resize-none'
                  />
                </div>

                <Button
                  type='submit'
                  variant='hero'
                  size='lg'
                  className='w-full'
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <div className='space-y-8'>
              {/* Talent */}
              <div className='mt-9'>
                <h3 className='font-body text-xl tracking-wide text-foreground mb-4'>
                  ALTITUDE TALENT
                </h3>

                <a
                  href='mailto:talent@altitudetalent.com.lk'
                  className='flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body'
                >
                  <Mail size={18} strokeWidth={1.5} />
                  talent@altitudetalent.com.lk
                </a>

                <div className='space-x-6 mt-6'>
                  <a
                    href='https://www.linkedin.com/company/altitudetalent'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-muted-foreground hover:text-foreground'
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href='https://www.instagram.com/altitude_talent/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-muted-foreground hover:text-foreground'
                  >
                    <Instagram size={18} />
                  </a>

                  <a
                    href='https://web.facebook.com/recruiteraltitudetalent'
                    className='inline-flex items-center text-muted-foreground hover:text-foreground'
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>

              {/* Wellness */}
              <div>
                <h3 className='font-body text-xl tracking-wide text-foreground mb-4'>
                  ALTITUDE WELLNESS
                </h3>

                <a
                  href='mailto:wellness@altitudetalent.com.lk'
                  className='flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body'
                >
                  <Mail size={18} strokeWidth={1.5} />
                  wellness@altitudetalent.com.lk
                </a>

                <div className='space-x-6 mt-6'>
                  <a
                    href='https://www.linkedin.com/company/altitude-wellness-srilanka/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-muted-foreground hover:text-foreground'
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href='https://www.instagram.com/altitudewellness_sl/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-muted-foreground hover:text-foreground'
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
