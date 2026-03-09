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
      </div>
    </footer>
  );
};

export default Footer;
