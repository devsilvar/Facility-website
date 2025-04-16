import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Calendar, Shield, Users } from 'lucide-react';

export default function AboutUsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Images for the slider
  const images = [
    '/wiin.webp',
    '/work1.webp', // Stadium construction
    '/work5.webp', // Team wor5king on turf
    '/work12.webp', // Close-up of hydroponic system
    '/work15.webp', // Completed facility
    '',
  ];

  // Timeline data
  const timelineData = [
    {
      year: '2003',
      event: 'Founded in partnership with FIFA-certified companies',
    },
    { year: '2010', event: 'Completed 50th international sports facility' },
    { year: '2015', event: 'Pioneered hybrid hydroponic turf technology' },
    { year: '2023', event: 'Reached 150+ completed projects worldwide' },
  ];

  return (
    <section className='py-24 bg-white relative overflow-hidden' id='about'>
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60'></div>
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full translate-x-1/3 translate-y-1/3'></div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-sm font-semibold tracking-wider text-green-600 uppercase'>
            Who We Are
          </h2>
          <h3 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            About Us
          </h3>
          <div className='h-1 w-24 bg-green-500 mx-auto mt-6 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Left column - About text */}
          <div className='space-y-8'>
            <div className='prose prose-lg max-w-none'>
              <p className='text-xl font-medium text-gray-900 leading-relaxed'>
                Monimichelle Sports Facility Construction Ltd is a premier,
                one-stop sports facility developer. We are an independent
                company established over 20 years ago in partnership with top
                FIFA-certified companies, renowned as FIFA PREFERRED producers
                of football turf.
              </p>

              <p className='text-gray-600 mt-4'>
                Our expertise spans across design, construction, and maintenance
                of world-class sports facilities, with a special focus on our
                revolutionary hydroponic hybrid football turf technology that
                combines sustainability with exceptional performance.
              </p>
            </div>

            {/* Stats row */}
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-100'>
              {[
                {
                  icon: <Calendar className='w-6 h-6 text-green-500' />,
                  value: '20+',
                  label: 'Years Experience',
                },
                {
                  icon: <Award className='w-6 h-6 text-green-500' />,
                  value: '150+',
                  label: 'Projects Completed',
                },
                {
                  icon: <Shield className='w-6 h-6 text-green-500' />,
                  value: '100%',
                  label: 'FIFA Certified',
                },
                {
                  icon: <Users className='w-6 h-6 text-green-500' />,
                  value: '50+',
                  label: 'Expert Team',
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className='text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300'
                >
                  <div className='flex justify-center'>{stat.icon}</div>
                  <div className='mt-2 font-bold text-2xl text-gray-900'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-gray-500'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Image slider */}
          <div className='relative h-full flex flex-col'>
            {/* Main image slider */}
            <div
              className='relative overflow-hidden rounded-xl shadow-2xl aspect-w-4 aspect-h-3 bg-gray-100'
              style={{ height: '400px' }}
              ref={slidesRef}
            >
              {/* Image slides */}
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === activeSlide
                      ? 'opacity-100 translate-x-0'
                      : index < activeSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img
                    src={src}
                    alt={`Our sports facility project ${index + 1}`}
                    className='object-cover w-full h-full rounded-xl'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl'></div>

                  {/* Caption for each image */}
                  <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                    <h4 className='font-bold text-xl'>
                      {index === 0 && 'Stadium Construction Excellence'}
                      {index === 1 && 'Expert Team at Work'}
                      {index === 2 && 'Innovative Hydroponic Systems'}
                      {index === 3 && 'World-Class Finished Facilities'}
                    </h4>
                    <p className='text-white/80 text-sm'>
                      {index === 0 &&
                        'Building state-of-the-art sports venues globally'}
                      {index === 1 &&
                        'Our specialized technicians ensuring perfect installation'}
                      {index === 2 &&
                        'Close-up of our proprietary turf technology'}
                      {index === 3 &&
                        'The finished product ready for professional play'}
                    </p>
                  </div>
                </div>
              ))}

              {/* Slider controls */}
              <div className='absolute bottom-3 right-3 flex space-x-2'>
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeSlide
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Three small images below */}
            <div className='grid grid-cols-3 gap-4 mt-4'>
              {[0, 1, 2].map((thumbIndex) => (
                <div
                  key={thumbIndex}
                  className={`aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 ${
                    activeSlide === thumbIndex
                      ? 'ring-2 ring-green-500 ring-offset-2 scale-105'
                      : 'hover:scale-105'
                  }`}
                  onClick={() => setActiveSlide(thumbIndex)}
                >
                  <img
                    src={images[thumbIndex]}
                    alt={`Thumbnail ${thumbIndex + 1}`}
                    className='object-cover w-full h-full'
                  />
                </div>
              ))}
            </div>

            {/* Certification badges */}
            <div className='absolute -right-12 -top-12 w-32 h-32 flex items-center justify-center'>
              <div className='relative w-full h-full animate-spin-slow'>
                <div className='absolute inset-0 rounded-full border-4 border-dashed border-green-200'></div>
              </div>
              <div className='absolute bg-white shadow-lg rounded-full w-24 h-24 flex items-center justify-center p-2'>
                <div className='text-center'>
                  <div className='text-xs font-semibold text-green-800'>
                    FIFA
                  </div>
                  <div className='text-xs text-green-600'>PREFERRED</div>
                  <div className='text-xs font-bold text-green-800'>
                    PRODUCER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical background element */}
      <div className='absolute left-0 right-0 bottom-0 h-64 bg-gradient-to-t from-green-50 to-transparent -z-10'></div>
      {/* Timeline */}
      <div className='pt-8 border-t border-gray-100'>
        <h4 className='text-lg text-center font-semibold text-gray-900 mb-6'>
          Our Journey
        </h4>
        <div className='flex flex-col items-center max-w-md mx-auto mb-10'>
          {timelineData.map((item, index) => (
            <div key={index} className='flex w-full mb-4'>
              <div className='flex flex-col items-center mr-4'>
                <div className='rounded-full bg-green-500 w-8 h-8 flex items-center justify-center text-white font-bold text-sm'>
                  {index + 1}
                </div>
                {index < timelineData.length - 1 && (
                  <div className='h-16 w-px bg-green-200 my-1'></div>
                )}
              </div>
              <div className='pt-1'>
                <span className='text-green-600 font-bold block'>
                  {item.year}
                </span>
                <p className='text-gray-700'>{item.event}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-8'>
          <button className='inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors group'>
            Learn More About Our Technology
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>
      </div>
    </section>
  );
}
