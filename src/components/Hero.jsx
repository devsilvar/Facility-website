import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Animation for ball rotation
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(rotationInterval);
    };
  }, []);

  return (
    <div
      className='relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900'
      id='hero'
    >
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDEuNWE0LjUgNC41IDAgMDA0LjUtNC41IDQuNSA0LjUgMCAwMC00LjUtNC41SDM2di0xLjVjMC05Ljk0IDguMDYtMTggMTgtMThWMEw1NCA5VjBjLTkuOTQgMC0xOCA4LjA2LTE4IDE4aC0xLjVhNC41IDQuNSAwIDAwLTQuNSA0LjUgNC41IDQuNSAwIDAwNC41IDQuNUgzNnYxLjVjMCA5Ljk0LTguMDYgMTgtMTggMThWNDZjOS45NCAwIDE4LTguMDYgMTgtMThoMS41YTQuNSA0LjUgMCAwMDQuNS00LjUgNC41IDQuNSAwIDAwLTQuNS00LjVIMzZ2LTEuNWMwLTkuOTQgOC4wNi0xOCAxOC0xOFY0NWwtMTgtOVY0NWM5Ljk0IDAgMTgtOC4wNiAxOC0xOGgxLjVhNC41IDQuNSAwIDAwNC41LTQuNSA0LjUgNC41IDAgMDAtNC41LTQuNUw1NCAzNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      {/* Hero Content */}
      <div
        className='container mx-auto px-6 py-24 mt-10 lg:px-8 lg:py-32'
        id='Hero'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-6 z-10'>
            <div className='flex items-center'>
              <span className='bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide'>
                Industry Leaders Since 2010
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

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight'>
              <span className='inline-block transform transition-all duration-500 hover:scale-105'>
                Specialist in
              </span>
              <br />
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300 inline-block transform transition-all duration-500 hover:scale-105'>
                hydroponic hybrid
                <br />
                football turf technology
              </span>
            </h1>

            <p className='text-lg md:text-xl text-green-50/90 max-w-lg'>
              Building world-class sports facilities with innovative,
              sustainable, and high-performance solutions for professional teams
              and communities alike.
            </p>

            <div className='pt-2'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2 group'>
                  Get Free Consultation
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </button>
                <button className='px-6 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 flex items-center justify-center gap-2'>
                  View Our Projects
                </button>
              </div>
            </div>

            <div className='flex items-center gap-6 pt-6'>
              {['FIFA Approved', 'Eco-Friendly', '10+ Year Lifespan'].map(
                (benefit, index) => (
                  <div key={index} className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5 text-emerald-400' />
                    <span className='text-white text-sm'>{benefit}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Column - New Jaw-Dropping Football Design */}
          <div className='relative z-10 flex justify-center'>
            {/* Main circular stadium-like container */}
            <div className='relative w-full max-w-xl aspect-square rounded-full bg-gradient-to-br from-green-700/40 to-emerald-900/40 backdrop-blur-md p-8 border border-white/10 shadow-2xl overflow-hidden group'>
              {/* Field lines overlay */}
              <div className='absolute inset-8 rounded-full border-2 border-white/30 flex items-center justify-center'>
                <div className='w-1/2 h-1/2 rounded-full border-2 border-white/30'></div>
                <div className='absolute top-1/2 w-full h-px bg-white/30'></div>
                <div className='absolute left-1/2 w-px h-full bg-white/30'></div>
              </div>

              {/* Turf texture overlay */}
              <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmFzcyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQiIGhlaWdodD0iNCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDkwKSI+PHBhdGggZD0iTTIgMCBMMCAyIiBzdHJva2U9IiMwMEEwMDAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYXNzKSIvPjwvc3ZnPg==')]"></div>

              {/* Spinning football */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div
                  className='w-2/5 aspect-square transform transition-transform duration-1000 group-hover:scale-125'
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  {/* Soccer Ball SVG */}
                  <svg
                    viewBox='0 0 200 200'
                    className='w-full h-full filter drop-shadow-2xl'
                  >
                    <defs>
                      <radialGradient
                        id='ballGrad'
                        cx='50%'
                        cy='40%'
                        r='50%'
                        fx='20%'
                        fy='20%'
                      >
                        <stop offset='0%' stopColor='white' />
                        <stop offset='80%' stopColor='#e0e0e0' />
                        <stop offset='100%' stopColor='#c0c0c0' />
                      </radialGradient>
                    </defs>
                    <circle cx='100' cy='100' r='95' fill='url(#ballGrad)' />
                    <path
                      d='M100,10 L130,40 L120,80 L80,80 L70,40 Z'
                      fill='black'
                    />
                    <path
                      d='M170,60 L160,100 L120,120 L120,80 L130,40 Z'
                      fill='black'
                    />
                    <path d='M30,60 L70,40 L80,80 L40,100 Z' fill='black' />
                    <path
                      d='M10,110 L40,100 L80,120 L60,160 L30,150 Z'
                      fill='black'
                    />
                    <path
                      d='M170,140 L140,190 L100,190 L60,160 L80,120 L120,120 L160,100 Z'
                      fill='black'
                    />
                  </svg>
                </div>

                {/* Glow effect */}
                <div className='absolute w-full h-full rounded-full bg-green-500/20 blur-3xl animate-pulse'></div>
              </div>

              {/* Water droplets animation */}
              <div className='absolute inset-0'>
                {Array.from({ length: 15 }).map((_, i) => (
                  <div
                    key={i}
                    className='absolute w-2 h-2 rounded-full bg-blue-400/70 animate-bounce'
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1 + Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Tech overlay */}
              <div className='absolute -right-12 -bottom-12 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-green-500/30 rounded-full backdrop-blur-sm flex items-center justify-center animate-pulse'>
                <div className='text-xs text-white/80 font-mono transform rotate-45 whitespace-nowrap'>
                  HYDROPONIC SYSTEM
                </div>
              </div>
            </div>

            {/* Stats badge */}
            <div className='absolute -right-4 lg:-right-12 top-1/2 bg-white rounded-lg shadow-xl p-4 transform rotate-3 hover:rotate-0 transition-all duration-300'>
              <div className='text-green-800 font-bold text-xl'>150+</div>
              <div className='text-gray-600 text-sm'>Projects Worldwide</div>
            </div>

            {/* Technology badge */}
            <div className='absolute -left-4 lg:-left-12 bottom-1/4 bg-emerald-700 rounded-lg shadow-xl p-3 transform -rotate-6 hover:rotate-0 transition-all duration-300'>
              <div className='text-white font-bold text-sm'>Hybrid Tech</div>
              <div className='flex items-center gap-1'>
                <div className='h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse'></div>
                <div className='text-emerald-200 text-xs'>
                  Active Water System
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce'>
        <span className='text-sm font-medium mb-1'>Scroll Down</span>
        <ChevronDown className='w-5 h-5' />
      </div>
    </div>
  );
}
