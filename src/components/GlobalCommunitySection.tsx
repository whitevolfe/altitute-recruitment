import { motion } from 'framer-motion';

const countries = [
  { name: 'Software Engineering', rotate: 2 },
  { name: 'Finance', rotate: -3 },
  { name: 'Legal', rotate: 1 },
  { name: 'Advertising', rotate: -2 },
  { name: 'Business Development', rotate: 3 },
  { name: 'Human Resources', rotate: -1 },
  // { name: 'Canada', flag: '🇨🇦', rotate: 2 },
  // { name: 'Singapore', flag: '🇸🇬', rotate: -3 },
  // { name: 'Netherlands', flag: '🇳🇱', rotate: 1 },
  // { name: 'Switzerland', flag: '🇨🇭', rotate: -2 },
  // { name: 'Sweden', flag: '🇸🇪', rotate: 3 },
  // { name: 'Norway', flag: '🇳🇴', rotate: -1 },
];

const GlobalCommunitySection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: (custom: { y: number; x: number; rotate: number }) => ({
      opacity: 0,
      y: custom.y,
      x: custom.x,
      rotate: custom.rotate,
      scale: 0.8,
    }),
    visible: (custom: { finalRotate: number }) => ({
      opacity: 1,
      y: 0,
      x: 0,
      rotate: custom.finalRotate,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 14,
        mass: 0.8,
      },
    }),
  };

  return (
    <section className='py-6 bg-black relative overflow-hidden'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#080808] to-[#000000]'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-white mb-4'>
            Careers
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-wrap justify-center gap-4'
        >
          {countries.map((country, index) => {
            const randomY = Math.random() * (-200 + 400) - 400; // -400 to -200
            const randomX = Math.random() * (150 + 150) - 150; // -150 to 150
            const randomRotate = Math.random() * (15 + 15) - 15; // -15 to 15
            const finalRotate = Math.random() * (8 + 8) - 8; // -8 to 8
            return (
              <motion.div
                key={country.name}
                custom={{
                  y: randomY,
                  x: randomX,
                  rotate: randomRotate,
                  finalRotate,
                }}
                variants={itemVariants}
                drag
                dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                whileDrag={{ scale: 1.1, zIndex: 10 }}
                className='inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing'
              >
                <span className='font-medium'>{country.name}</span>
              </motion.div>
            );
          })}

          <motion.div
          // custom={{
          //   y: Math.random() * (-200 + 400) - 400,
          //   x: Math.random() * (150 + 150) - 150,
          //   rotate: Math.random() * (15 + 15) - 15,
          //   finalRotate: Math.random() * (8 + 8) - 8,
          // }}
          // variants={itemVariants}
          // drag
          // dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
          // whileHover={{ scale: 1.05, rotate: 0 }}
          // whileDrag={{ scale: 1.1, zIndex: 10 }}
          // className='inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-5 py-2.5 shadow-sm cursor-grab active:cursor-grabbing'
          >
            {/* <span className='font-medium'>156+ more</span> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCommunitySection;
