import { useState, useEffect } from 'react';
import {
  Award,
  Calendar,
  Shield,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function AboutUsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Navigation functions
  const goToPrev = () => {
    setActiveSlide((prev) => (prev - 1 + 4) % 4);
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % 4);
  };

  // Images for the slider
  const images = ['/wiin.webp', '/work1.webp', '/work5.webp', '/work12.webp'];

  // Stats data
  const stats = [
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
    <section
      className='py-24 bg-gradient-to-b from-white to-green-50'
      id='about'
    >
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-0'>
          <h2 className='text-green-600 font-semibold text-sm tracking-wider uppercase'>
            Who We Are
          </h2>
          <h3 className='mt-2 text-4xl font-bold text-gray-900'>About</h3>
          <div className='h-1 w-24 bg-green-500 mx-auto mt-2 rounded-full'></div>
        </div>

        {/* Enhanced Featured image slider with navigation arrows */}

        {/* Main content */}
        <div className='grid md:grid-cols-1 gap-16 items-start py-20 px-6 md:px-16 bg-white'>
          {/* Left: About Content */}
          <div className='space-y-6 text-center'>
            <h2 className='text-4xl md:text-5xl mb-10 font-extrabold text-gray-900 leading-tight'>
              Trusted Leaders in Sports Facility Construction
            </h2>
            <div className='mb-20 relative overflow-hidden rounded-2xl shadow-2xl aspect-video group'>
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === activeSlide
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                >
                  {/* Enhanced image with zoom effect */}
                  <div className='absolute inset-0 overflow-hidden'>
                    <img
                      src={src}
                      alt={`Our sports facility ${index + 1}`}
                      className='object-cover w-full h-full transform scale-100 group-hover:scale-110 transition-transform duration-7000'
                    />
                  </div>

                  {/* Color overlay for better text visibility */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                  {/* Enhanced image captions with animated reveal */}
                  <div className='absolute bottom-0 left-0 right-0 p-8 transform translate-y-0 transition-all duration-500'>
                    <h4 className='text-white text-3xl font-bold mb-2 shadow-text'>
                      {index === 0 && 'World-Class Stadium Design'}
                      {index === 1 && 'Professional Construction Process'}
                      {index === 2 && 'Expert Team Implementation'}
                      {index === 3 && 'Innovative Turf Technology'}
                    </h4>
                    <p className='text-white/90 mt-2 max-w-2xl text-lg shadow-text'>
                      {index === 0 &&
                        'Our FIFA-certified facilities meet international standards for professional sports competitions'}
                      {index === 1 &&
                        'Precision engineering and meticulous construction for optimal athletic performance'}
                      {index === 2 &&
                        'Specialized technicians ensuring perfect installation and ongoing maintenance'}
                      {index === 3 &&
                        'Revolutionary hydroponic hybrid football turf that blends sustainability with performance'}
                    </p>
                  </div>
                </div>
              ))}

              {/* Left Arrow Navigation Button */}
              <button
                onClick={goToPrev}
                className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/70 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110'
                aria-label='Previous slide'
              >
                <ChevronLeft className='w-8 h-8' />
              </button>

              {/* Right Arrow Navigation Button */}
              <button
                onClick={goToNext}
                className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/70 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110'
                aria-label='Next slide'
              >
                <ChevronRight className='w-8 h-8' />
              </button>

              {/* Enhanced slider indicators */}
              <div className='absolute bottom-6 left-0 right-0 flex justify-center space-x-4'>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`transition-all duration-500 hover:scale-125 ${
                      index === activeSlide
                        ? 'w-12 h-2 bg-green-500 rounded-full'
                        : 'w-2 h-2 bg-white/70 rounded-full'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Enhanced FIFA badge with improved hover animation */}
              <div className='absolute top-6 right-6 bg-white rounded-full shadow-xl p-4 w-24 h-24 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 z-10 border-2 border-green-500'>
                <div className='text-center'>
                  <div className='text-sm font-semibold text-green-800'>
                    FIFA
                  </div>
                  <div className='text-xs text-green-600'>PREFERRED</div>
                  <div className='text-xs font-bold text-green-800'>
                    PRODUCER
                  </div>
                </div>
              </div>
            </div>

            <p className='text-lg text-gray-700 leading-relaxed mt-20'>
              Monimichelle Sports Facility Construction Ltd is a premier,
              one-stop developer of world-class sports infrastructure. With over
              20 years of experience and partnerships with top FIFA-certified
              firms, we turn visions into elite sports environments.
            </p>

            <p className='text-base text-gray-600 leading-relaxed'>
              We specialize in design, construction, and maintenance of advanced
              sports systems, including our patented hydroponic hybrid football
              turf — a game-changer in sustainability and high-performance play.
            </p>

            <div className='pt-6'>
              <button className='group inline-flex items-center px-6 py-4 bg-green-600 hover:bg-green-700 text-white text-base font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg'>
                Schedule a Free Consultation
                <ArrowRight className='ml-2 w-5 h-5 transition-transform group-hover:translate-x-1' />
              </button>
            </div>
          </div>

          {/* Right: Stats */}
          <div className='grid grid-cols-4 gap-6'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='text-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
              >
                <div className='flex justify-center mb-4'>
                  <div className='bg-green-100 p-4 rounded-full'>
                    {stat.icon}
                  </div>
                </div>
                <div className='text-3xl font-bold text-gray-900'>
                  {stat.value}
                </div>
                <div className='text-sm text-gray-600 mt-2'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add some custom styles for text shadow */}
      <style jsx>{`
        .shadow-text {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
