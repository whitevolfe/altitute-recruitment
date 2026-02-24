import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WEB3FORMS_KEY = '26c0c484-0f08-44f4-9b53-85677e50cfd5';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', 'Free Consultation Request');
    formData.append('from_name', formData.get('name') as string);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) setSuccess(true);
    } catch {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4'
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          className='bg-card border border-border w-full max-w-lg max-h-[90vh] overflow-y-auto p-8'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex items-start justify-between mb-8'>
            <div>
              <h3 className='font-display text-2xl tracking-wide text-foreground'>
                Book a Free Consultation
              </h3>
              <p className='text-sm text-muted-foreground font-body mt-1'>
                Let's discuss how we can help scale your business
              </p>
            </div>
            <button
              onClick={onClose}
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              <X size={20} />
            </button>
          </div>

          {success ? (
            <div className='text-center py-10'>
              <h4 className='font-display text-2xl text-foreground mb-3'>
                Consultation Request Submitted
              </h4>
              <p className='text-muted-foreground font-body font-light'>
                Thank you for your interest. We'll be in touch shortly to
                schedule your consultation.
              </p>
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
                  Full Name *
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
                  Phone *
                </label>
                <input
                  name='phone'
                  type='tel'
                  required
                  className='w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors'
                />
              </div>

              <div>
                <label className='block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body'>
                  Company Name
                </label>
                <input
                  name='company'
                  className='w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors'
                />
              </div>

              <div>
                <label className='block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body'>
                  Industry
                </label>
                <select
                  name='industry'
                  className='w-full bg-background border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-foreground/40 transition-colors'
                >
                  <option value=''>Select Industry</option>
                  <option value='Technology'>Technology</option>
                  <option value='Finance'>Finance</option>
                  <option value='PR'>PR</option>
                  <option value='Advertising'>Advertising</option>
                  <option value='Marketing'>Marketing</option>
                  <option value='Creative'>Creative</option>
                  <option value='Other'>Other</option>
                </select>
              </div>

              <div>
                <label className='block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 font-body'>
                  Message
                </label>
                <textarea
                  name='message'
                  rows={4}
                  placeholder='Tell us about your hiring needs or partnership goals...'
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
                {loading ? 'Submitting...' : 'Book Consultation'}
              </Button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ConsultationModal;
