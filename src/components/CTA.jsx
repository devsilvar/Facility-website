import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, Send } from 'lucide-react';

export const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    preferredContact: 'email',
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after submission (optional)
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        preferredContact: 'email',
        terms: false,
      });
    }, 5000);
  };

  const projectTypes = [
    'Grass Field',
    'Artificial Turf',
    'Stadium',
    'Training Complex',
    'Sports Court',
    'Swimming Pool',
    'Athletic Track',
    'Other',
  ];

  const budgetRanges = [
    'Under $100,000',
    '$100,000 - $500,000',
    '$500,000 - $1 million',
    '$1 million - $5 million',
    '$5 million - $10 million',
    'Over $10 million',
    'Not sure yet',
  ];

  const timelineOptions = [
    'Immediate (1-3 months)',
    'Short-term (3-6 months)',
    'Medium-term (6-12 months)',
    'Long-term (1-2 years)',
    'Planning phase only',
    'Not sure yet',
  ];

  return (
    <div className='bg-gray-50 py-12 sm:py-20' id='consultation'>
      <div className='container mx-auto px-4 max-w-5xl'>
        <h2 className='text-3xl sm:text-4xl font-bold text-center mb-4'>
          Request Your Consultation
        </h2>
        <p className='text-lg text-gray-700 text-center mb-6 max-w-3xl mx-auto'>
          Our experts will help you design and construct a world-class sport
          facility that meets your requirements and exceeds your expectations.
        </p>

        <div className='flex items-center justify-center gap-2 text-green-700 mb-10'>
          <Clock className='w-5 h-5' />
          <p className='font-medium'>
            We respond to all consultation requests within 24 hours
          </p>
        </div>

        <div className='bg-white rounded-xl shadow-md p-8 mb-10'>
          {submitted ? (
            <div className='text-center py-10'>
              <div className='mb-4 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full'>
                <CheckCircle className='w-8 h-8 text-green-600' />
              </div>
              <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                Thank You!
              </h3>
              <p className='text-gray-600 max-w-md mx-auto'>
                Your consultation request has been submitted successfully. Our
                team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Personal Information */}
                <div className='space-y-6'>
                  <h3 className='text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2'>
                    Your Information
                  </h3>

                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Full Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500'
                      placeholder='John Smith'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Email Address <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500'
                      placeholder='your@email.com'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Phone Number <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500'
                      placeholder='+1 (555) 123-4567'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Organization/Company
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500'
                      placeholder='Your Organization'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Preferred Contact Method
                    </label>
                    <div className='flex space-x-4'>
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='email-contact'
                          name='preferredContact'
                          value='email'
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className='h-4 w-4 text-green-600 focus:ring-green-500'
                        />
                        <label
                          htmlFor='email-contact'
                          className='ml-2 text-sm text-gray-700'
                        >
                          Email
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='phone-contact'
                          name='preferredContact'
                          value='phone'
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className='h-4 w-4 text-green-600 focus:ring-green-500'
                        />
                        <label
                          htmlFor='phone-contact'
                          className='ml-2 text-sm text-gray-700'
                        >
                          Phone
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className='space-y-6'>
                  <h3 className='text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2'>
                    Project Details
                  </h3>

                  <div>
                    <label
                      htmlFor='projectType'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Project Type <span className='text-red-500'>*</span>
                    </label>
                    <select
                      id='projectType'
                      name='projectType'
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500'
                    >
                      <option value='' disabled>
                        Select project type
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor='budget'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Budget Range
                    </label>
                    <select
                      id='budget'
                      name='budget'
                      value={formData.budget}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500'
                    >
                      <option value='' disabled>
                        Select budget range
                      </option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor='timeline'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Project Timeline
                    </label>
                    <select
                      id='timeline'
                      name='timeline'
                      value={formData.timeline}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500'
                    >
                      <option value='' disabled>
                        Select timeline
                      </option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor='description'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Project Description{' '}
                      <span className='text-red-500'>*</span>
                    </label>
                    <textarea
                      id='description'
                      name='description'
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={5}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500'
                      placeholder='Please describe your project and any specific requirements or questions you have.'
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className='pt-4 border-t border-gray-200'>
                <div className='flex items-start mb-6'>
                  <div className='flex items-center h-5'>
                    <input
                      id='terms'
                      name='terms'
                      type='checkbox'
                      checked={formData.terms}
                      onChange={handleChange}
                      required
                      className='h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded'
                    />
                  </div>
                  <label htmlFor='terms' className='ml-2 text-sm text-gray-600'>
                    I agree to the privacy policy and consent to be contacted
                    regarding my project inquiry.{' '}
                    <span className='text-red-500'>*</span>
                  </label>
                </div>

                <button
                  type='submit'
                  className='w-full md:w-auto px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-colors flex items-center justify-center'
                >
                  <Send className='w-5 h-5 mr-2' />
                  Submit Consultation Request
                </button>
              </div>
            </form>
          )}
        </div>

        <div className='bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white shadow-md'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
            <div>
              <h3 className='text-xl font-bold mb-2'>
                Need Immediate Assistance?
              </h3>
              <p className='text-green-100'>
                Our team is available to answer quick questions.
              </p>
            </div>
            <div className='flex flex-wrap gap-4'>
              <a
                href='tel:+1234567890'
                className='px-5 py-2 bg-white text-green-700 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                Call Us
              </a>
              <a
                href='mailto:info@sportscompany.com'
                className='px-5 py-2 bg-green-800 text-white rounded-lg font-medium hover:bg-green-900 transition-colors flex items-center'
              >
                <svg
                  className='w-5 h-5 mr-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
