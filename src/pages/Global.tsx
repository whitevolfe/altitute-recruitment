import Header from '@/components/Header';
import GlobalSection from '@/components/GlobalSection';
import Footer from '@/components/Footer';

const Global = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <GlobalSection />
      </main>
      <Footer />
    </div>
  );
};

export default Global;
