import React from 'react';

export const CTA = () => {
  return (
    <>
      {/* CTA Section */}
      <div className='bg-gray-50 py-3 sm:py-24' id='quote'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl sm:text-4xl font-bold text-center mb-8'>
            Transform Your Vision into Reality
          </h2>
          <p className='text-lg text-gray-700 text-center mb-12'>
            Our team of experts is here to help you design and construct a
            world-class sport facility that meets your needs and exceeds your
            expectations.
          </p>
        </div>
        <div className='mt-6 max-w-3xl mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 sm:p-10 text-center text-white shadow-lg'>
          <h3 className='text-2xl sm:text-3xl font-bold mb-4'>
            Ready to Build Your Sport Facility?
          </h3>
          <p className='text-green-100 mb-8 max-w-2xl mx-auto'>
            Let our team of experts help you design and construct a world-class
            sport facility that meets your needs and exceeds your expectations.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a
              href='#'
              className='px-6 py-3 bg-white text-green-700 rounded-lg font-medium hover:bg-green-50 transition-colors'
            >
              Request a Consultation
            </a>
            <a
              href='#'
              className='px-6 py-3 bg-green-800 text-white rounded-lg font-medium hover:bg-green-900 transition-colors'
            >
              Download Our Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
