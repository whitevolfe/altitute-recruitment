import Header from '@/components/Header';
import AltitudeGroupSection from '@/components/AltitudeGroupSection';
import Footer from '@/components/Footer';

const AltitudeGroup = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <AltitudeGroupSection />
      </main>
      <Footer />
    </div>
  );
};

export default AltitudeGroup;
