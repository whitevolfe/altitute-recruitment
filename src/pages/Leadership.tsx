import Header from '@/components/Header';
import LeadershipSection from '@/components/LeadershipSection';
import Footer from '@/components/Footer';

const Leadership = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <LeadershipSection />
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;
