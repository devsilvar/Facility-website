import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Specialist in',
      subtitle: 'hydroponic hybrid football turf technology',
      tagline: 'Industry Leaders Since 2010',
      description:
        'Building world-class sports facilities with innovative, sustainable, and high-performance solutions for professional teams and communities alike.',
      image: '/work9.webp',
    },
    {
      id: 2,
      title: 'Revolutionary',
      subtitle: 'eco-friendly sports surface solutions',
      tagline: 'FIFA Approved Technology',
      description:
        'Our patented hybrid hydroponic systems reduce water usage by 70% while maintaining professional-grade playing surfaces year-round.',
      image: '/work3.webp',
    },
    {
      id: 3,
      title: 'Specialist in',
      subtitle: 'hydroponic hybrid football turf technology',
      tagline: 'Industry Leaders Since 2010',
      description:
        'Building world-class sports facilities with innovative, sustainable, and high-performance solutions for professional teams and communities alike.',
      image: '/work3.webp',
    },
    {
      id: 4,
      title: 'Specialist in',
      subtitle: 'hydroponic hybrid football turf technology',
      tagline: 'Industry Leaders Since 2010',
      description:
        'Building world-class sports facilities with innovative, sustainable, and high-performance solutions for professional teams and communities alike.',
      image: '/work3.webp',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const benefits = ['FIFA Approved', 'Eco-Friendly', '10+ Year Lifespan'];

  return (
    <div className='relative w-full mt-28 h-screen overflow-hidden'>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className='w-[100vw] h-full object-cover object-center'
          />

          {/* Refined Green Overlay */}
          {/* <div className='absolute inset-0 bg-gradient-to-br from-green-800/50 via-green-600/40 to-emerald-400/30 z-10' /> */}

          <div className='absolute inset-0 bg-black/40 backdrop-brightness-[0.8] z-10' />

          {/* Background pattern */}
          {/* <div className='absolute inset-0 opacity-10 z-20'>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDEuNWE0LjUgNC41IDAgMDA0LjUtNC41IDQuNSA0LjUgMCAwMC00LjUtNC41SDM2di0xLjVjMC05Ljk0IDguMDYtMTggMTgtMThWMEw1NCA5VjBjLTkuOTQgMC0xOCA4LjA2LTE4IDE4aC0xLjVhNC41IDQuNSAwIDAwLTQuNSA0LjUgNC41IDQuNSAwIDAwNC41IDQuNUgzNnYxLjVjMCA5Ljk0LTguMDYgMTgtMTggMThWNDZjOS45NCAwIDE4LTguMDYgMTgtMThoMS41YTQuNSA0LjUgMCAwMDQuNS00LjUgNC41IDQuNSAwIDAwLTQuNS00LjVIMzZ2LTEuNWMwLTkuOTQgOC4wNi0xOCAxOC0xOFY0NWwtMTgtOVY0NWM5Ljk0IDAgMTgtOC4wNiAxOC0xOGgxLjVhNC41IDQuNSAwIDAwNC41LTQuNSA0LjUgNC41IDAgMDAtNC41LTQuNUw1NCAzNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] bg-repeat"></div>
          </div> */}

          {/* Content container - centered */}
          <div className='absolute inset-0 flex items-center justify-center z-30'>
            <div className='container mx-auto px-6 py-12'>
              {/* Centered Text Content */}
              <div className='max-w-3xl mx-auto text-center space-y-6'>
                <div className='flex items-center justify-center'>
                  <span className='bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide'>
                    {slide.tagline}
                  </span>
                  <div className='ml-3 flex space-x-1'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className='w-4 h-4 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    ))}
                  </div>
                </div>

                <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-xl'>
                  <span className='inline-block transform transition-all duration-500 hover:scale-105'>
                    {slide.title}
                  </span>
                  <br />
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300 inline-block transform transition-all duration-500 hover:scale-105'>
                    {slide.subtitle}
                  </span>
                </h1>

                {/* <p className='text-lg md:text-xl text-green-50/90 mx-auto drop-shadow-md'>
                  {slide.description}
                </p> */}

                <div className='pt-2'>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <button className=' px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2 group'>
                      Get Free Consultation
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </button>
                    <button className='px-6 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 flex items-center justify-center gap-2'>
                      View Our Projects
                    </button>
                  </div>
                </div>

                <div className='flex items-center justify-center gap-6 pt-6'>
                  {benefits.map((benefit, index) => (
                    <div key={index} className='flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-emerald-400' />
                      <span className='text-white text-sm'>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-emerald-600/40 hover:bg-emerald-600/60 rounded-full p-2 text-white'
      >
        <ChevronLeft className='w-6 h-6' />
      </button>

      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-emerald-600/40 hover:bg-emerald-600/60 rounded-full p-2 text-white'
      >
        <ChevronRight className='w-6 h-6' />
      </button>

      {/* Dots indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-emerald-400 w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
