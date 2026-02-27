const BrandLogosSection = () => {
  // Path starts from /public automatically
  const logos1 = [
    '/brandlogos/1.svg',
    '/brandlogos/2.svg',
    '/brandlogos/3.svg',
    // '/brandlogos/4.svg',
    '/brandlogos/20.svg',
  ];

  // const logos2 = [
  //   '/brandlogos/8.svg',
  //   '/brandlogos/9.svg',
  //   '/brandlogos/10.svg',
  //   '/brandlogos/11.svg',
  // ];

  return (
    <section className='bg-black-gradient py-16'>
      <div className='container mx-auto px-4'>
        {/* First marquee */}
        <div className='flex overflow-hidden mb-8'>
          <div className='flex animate-marquee-left'>
            {logos1.map((logo, index) => (
              <div key={index} className='flex-shrink-0 mx-4'>
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  className='h-16 w-60'
                />
              </div>
            ))}
            {logos1.map((logo, index) => (
              <div key={`dup-${index}`} className='flex-shrink-0 mx-4'>
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  className='h-16 w-60'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second marquee */}
        {/* <div className='flex overflow-hidden'>
          <div className='flex animate-marquee-right'>
            {logos2.map((logo, index) => (
              <div key={index} className='flex-shrink-0 mx-4'>
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 6}`}
                  className='h-16 w-60'
                />
              </div>
            ))}
            {logos2.map((logo, index) => (
              <div key={`dup-${index}`} className='flex-shrink-0 mx-4'>
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 6}`}
                  className='h-16 w-60'
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default BrandLogosSection;
