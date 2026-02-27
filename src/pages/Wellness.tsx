import { useState } from 'react';
import Header from '@/components/Header';
import WellnessSection from '@/components/WellnessSection';
import Footer from '@/components/Footer';

const Wellness = () => {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className='min-h-screen bg-white text-black'>
      <Header />
      <main>
        <WellnessSection />

        {/* Business Proposal PDF Section */}
        <section className='section-padding bg-gray-50'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-display font-bold text-black mb-4'>
                Business Proposal
              </h2>
              <p className='text-gray-700 mb-6'>
                Click below to view our comprehensive business proposal.
              </p>
              {!showPDF && (
                <button
                  onClick={() => setShowPDF(true)}
                  className='inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors'
                >
                  View Wellness Business Proposal
                </button>
              )}
            </div>
            {showPDF && (
              <div className='bg-white p-4 rounded-lg shadow-lg'>
                <iframe
                  src='/Altitude Wellness - Business Proposal.pdf'
                  width='100%'
                  height='800px'
                  style={{ border: 'none' }}
                  title='Altitude Wellness Business Proposal'
                >
                  Your browser does not support PDFs. Please download the PDF to
                  view it:{' '}
                  <a href='/Altitude Wellness - Business Proposal.pdf'>
                    Download PDF
                  </a>
                </iframe>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Wellness;
