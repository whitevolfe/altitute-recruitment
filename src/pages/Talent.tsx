import Header from '@/components/Header';
import JobsSection from '@/components/JobsSection';
import Footer from '@/components/Footer';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CallToActionSection from '@/components/CallToActionSection';
import GlobalCommunitySection from '@/components/GlobalCommunitySection';
import ScrollReveal from '@/components/ScrollReveal';

const Talent = () => {
  return (
    <div className='min-h-screen bg-black relative overflow-hidden'>
      {/* Background image with overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
        <div className='absolute inset-0 bg-[url("/space-bg.jpg")] bg-cover bg-center opacity-10'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40'></div>
      </div>

      <div className='relative z-10'>
        <Header />

        <main>
          <JobsSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Talent;
