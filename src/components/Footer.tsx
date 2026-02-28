import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-black border-t border-white/10 px-6 md:px-12 lg:px-20 py-12'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
        <div>
          <p className='font-body text-xl tracking-wider text-white'>
            ALTITUDE GROUP
          </p>
          <p className='text-xs text-white/70 font-body mt-1'>
            © {new Date().getFullYear()} Altitude Group. All rights reserved.
          </p>
        </div>

        <div className='flex items-center gap-6'>
          <a
            href=' https://www.linkedin.com/company/altitudetalent'
            className='text-white/70 hover:text-white transition-colors'
          >
            <Linkedin size={18} />
          </a>
          <a
            href='mailto:talent@altitudetalent.com.lk'
            className='text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors font-body'
          >
            talent@altitudetalent.com.lk
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
