import Header from '@/components/Header';
import JobsSection from '@/components/JobsSection';
import Footer from '@/components/Footer';

const Talent = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main>
        <JobsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Talent;
