import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import { Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE'; // Replace with your Web3Forms access key

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
    <section id='contact' className='section-padding bg-card '>
      <div className='max-w-7xl mx-auto '>
        <ScrollReveal>
          <p className='text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body'>
            Get In Touch
          </p>
          <h2 className='text-4xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-foreground mb-16'>
            Contact Us
          </h2>
        </ScrollReveal>

        <div className='grid lg:grid-cols-2 gap-16'>
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
              <form onSubmit={handleSubmit} className='space-y-5'>
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

          <ScrollReveal delay={0.2}>
            <div className='space-y-8'>
              <div>
                <h3 className='font-display text-xl tracking-wide text-foreground mb-4'>
                  Contact Details
                </h3>
                <div className='space-y-6'>
                  <a
                    href='mailto:talent@altitudetalent.com.lk'
                    className='flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body'
                  >
                    <Mail size={18} strokeWidth={1.5} />
                    talent@altitudetalent.com.lk
                  </a>
                  <div className='flex items-center gap-3 text-muted-foreground font-body'>
                    <MapPin size={18} strokeWidth={1.5} />
                    Sri Lanka
                  </div>
                </div>
              </div>

              <div>
                <h3 className='font-display text-xl tracking-wide text-foreground mb-4'>
                  Connect
                </h3>
                <div className='space-x-6'>
                  <a
                    href='https://www.linkedin.com/company/altitudetalent'
                    className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body'
                  >
                    <Linkedin size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href='https://www.instagram.com/altitude_talent/'
                    className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body'
                  >
                    <Instagram size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href='https://web.facebook.com/recruiteraltitudetalent'
                    className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body'
                  >
                    <Facebook size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              {/* <div className='border-t border-border pt-8'>
                <h3 className='font-display text-xl tracking-wide text-foreground mb-4'>
                  Our Reach
                </h3>
                <div className='grid grid-cols-3 gap-6'>
                  <div>
                    <p className='font-display text-3xl text-foreground'>6+</p>
                    <p className='text-xs text-muted-foreground font-body mt-1'>
                      Industries Served
                    </p>
                  </div>
                  <div>
                    <p className='font-display text-3xl text-foreground'>50+</p>
                    <p className='text-xs text-muted-foreground font-body mt-1'>
                      Clients Placed
                    </p>
                  </div>
                  <div>
                    <p className='font-display text-3xl text-foreground'>10+</p>
                    <p className='text-xs text-muted-foreground font-body mt-1'>
                      Countries Covered
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
