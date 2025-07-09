import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './components/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';
import ProjectGallery from './pages/WorkGallery';
import { useState } from 'react';

function App() {
  const [showPaymentModal, setShowPaymentModal] = useState(true); // Set to true to show modal

  const PaymentModal = () => {
    if (!showPaymentModal) return null;

    return (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm'>
        <div className='bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 p-8 text-center relative '>
          {/* Warning Icon */}
          <div className='mb-6'>
            <div className='mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center'>
              <svg
                className='w-8 h-8 text-red-600'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            ⚠️ SITE ACCESS BLOCKED
          </h2>

          {/* Message */}
          <div className='mb-6'>
            <p className='text-gray-700 mb-4 text-lg'>
              Your access to this website has been suspended due to{' '}
              <strong>outstanding payment</strong>.
            </p>
            <p className='text-gray-600 mb-4'>
              Kindly make payments to restore full access to all features and
              content.
            </p>
            <div className='bg-red-50 border border-red-200 rounded-lg p-4 mb-4'>
              <p className='text-red-600 text-sm mt-1'>
                Account suspended since: [5th May 2023]
              </p>
            </div>
          </div>

          {/* Action Buttons */}

          {/* Small print */}
          <p className='text-xs text-gray-500 mt-6'>Questions? Contact us</p>

          {/* Remove this button in production - only for testing */}
        </div>

        {/* Pulsing effect overlay */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute inset-0 bg-red-500 opacity-5 animate-ping'></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<ProjectGallery />} />
        <Route path='/details' element={<ProjectDetails />} />
      </Routes>
      <Footer />

      {/* Payment Modal - This will overlay everything */}
      {/* <PaymentModal /> */}
    </>
  );
}

export default App;
