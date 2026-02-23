import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrandLogosSection from '@/components/BrandLogosSection';
import AboutSection from '@/components/AboutSection';
import GlobalSection from '@/components/GlobalSection';
import WellnessSection from '@/components/WellnessSection';
import JobsSection from '@/components/JobsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <HeroSection />
        <BrandLogosSection />
        <AboutSection />
        <GlobalSection />
        <WellnessSection />
        <JobsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
