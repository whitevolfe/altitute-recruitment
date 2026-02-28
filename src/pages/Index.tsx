import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandLogosSection from '@/components/BrandLogosSection';
import AboutSection from '@/components/AboutSection';
import GlobalCommunitySection from '@/components/GlobalCommunitySection';
import GlobalSection from '@/components/GlobalSection';
import WellnessSection from '@/components/WellnessSection';
import JobsSection from '@/components/JobsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TradingRevolutionSection from '@/components/TradingRevolutionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <HeroSection />
        <BrandLogosSection />
        {/* <AboutSection /> */}
        <GlobalCommunitySection />
        {/* <GlobalSection /> */}
        {/* <WellnessSection /> */}
        {/* <JobsSection /> */}
        <TestimonialsSection />
        <TradingRevolutionSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
