import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandLogosSection from '@/components/BrandLogosSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AboutSection from '@/components/AboutSection';
import GlobalCommunitySection from '@/components/GlobalCommunitySection';
import GlobalSection from '@/components/GlobalSection';
import WellnessSection from '@/components/WellnessSection';
import JobsSection from '@/components/JobsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TradingRevolutionSection from '@/components/TradingRevolutionSection';
import CallToActionSection from '@/components/CallToActionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <HeroSection />
        <BrandLogosSection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        {/* <AboutSection /> */}
        {/* <GlobalCommunitySection /> */}
        {/* <GlobalSection /> */}
        {/* <WellnessSection /> */}
        {/* <JobsSection /> */}
        <TestimonialsSection />
        <TradingRevolutionSection />
        <CallToActionSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
