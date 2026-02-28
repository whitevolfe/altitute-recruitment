import Header from '@/components/Header';
import WellnessSection from '@/components/WellnessSection';
import Footer from '@/components/Footer';

const Wellness = () => {
  return (
    <div className='min-h-screen bg-white text-black'>
      <Header />
      <main>
        <WellnessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Wellness;
