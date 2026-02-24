const BrandLogosSection = () => {
  // Path starts from /public automatically
  const logos1 = Array.from(
    { length: 15 },
    (_, i) => `/brandlogos/brandlogoimg${i + 1}.png`,
  );

  const logos2 = Array.from(
    { length: 15 },
    (_, i) => `/brandlogos/brandlogoimg${i + 16}.png`,
  );

  return (
    <section className='bg-black py-16'>
      <div className='container mx-auto px-4'>
        {/* First marquee */}
        <div className='flex overflow-hidden mb-8'>
          <div className='flex animate-marquee-left'>
            {logos1.map((logo, index) => (
              <div key={index} className='flex-shrink-0 mx-4'>
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  className='h-16 w-auto'
                />
              </div>
            ))}
            {logos1.map((logo, index) => (
              <div key={`dup-${index}`} className='flex-shrink-0 mx-4'>
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  className='h-16 w-auto'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second marquee */}
        <div className='flex overflow-hidden'>
          <div className='flex animate-marquee-right'>
            {logos2.map((logo, index) => (
              <div key={index} className='flex-shrink-0 mx-4'>
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 16}`}
                  className='h-16 w-auto'
                />
              </div>
            ))}
            {logos2.map((logo, index) => (
              <div key={`dup-${index}`} className='flex-shrink-0 mx-4'>
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 16}`}
                  className='h-16 w-auto'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogosSection;
