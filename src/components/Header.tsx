import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Global', href: '/global' },
  { label: 'Wellness', href: '/wellness' },
  { label: 'Talent', href: '/talent' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 py-5 flex items-center justify-between'>
        <Link
          to='/'
          className='font-display text-3xl tracking-wider text-foreground'
        >
          ALTITUDE GROUP
        </Link>

        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className='text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 font-body font-medium'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className='md:hidden text-foreground'
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden'
          >
            <div className='px-6 pb-6 pt-2'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className='block py-3 text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors font-body'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
