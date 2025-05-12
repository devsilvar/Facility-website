import { useState, useEffect } from 'react';
import {
  Linkedin,
  Twitter,
  Mail,
  Award,
  Globe,
  TrendingUp,
  Users,
  Briefcase,
} from 'lucide-react';

export default function ExclusiveCEOProfile() {
  const [isVisible, setIsVisible] = useState(false);

  // Animation on scroll
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed');
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CEO Data
  const ceo = {
    name: 'Michael Reynolds',
    title: 'Chief Executive Officer & Founder',
    image: '/ohzi.jpg',
    quote:
      '"Our mission is to revolutionize sports facilities across Africa, creating world-class venues that inspire athletic excellence."',
    bio: 'With over 20 years of experience in sports facility development, Michael Reynolds has personally overseen the construction of more than 50 professional stadiums worldwide. His groundbreaking vision for innovative, sustainable sporting venues has transformed how athletes perform and fans experience the game.',
    longBio:
      "A visionary in sports infrastructure, Michael founded Monimichelle with the dream of elevating African sports facilities to global standards. His pioneering work in hydroponic hybrid turf technology has earned international recognition, bringing FIFA-certified quality to stadiums across the continent. Under his leadership, Monimichelle has grown from a small startup to Nigeria's premier sports facility developer with projects spanning multiple countries.",
    achievements: [
      'Pioneered revolutionary hybrid turf technology',
      'Completed over 150 professional sports facilities',
      'FIFA Preferred Producer certification',
      'African Sports Innovation Award 2022',
      'Named "Top 50 Infrastructure Leaders" by African Business Review',
    ],
    expertise: [
      'Stadium Design',
      'Sports Facility Innovation',
      'Project Management',
      'Sustainable Construction',
      'Athletic Performance Optimization',
    ],
    stats: [
      { icon: <Globe className='w-6 h-6' />, value: '15+', label: 'Countries' },
      {
        icon: <Briefcase className='w-6 h-6' />,
        value: '20+',
        label: 'Years Experience',
      },
      {
        icon: <TrendingUp className='w-6 h-6' />,
        value: '50+',
        label: 'Major Stadiums',
      },
      {
        icon: <Users className='w-6 h-6' />,
        value: '150+',
        label: 'Total Projects',
      },
    ],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'michael@monimichelle.com',
    },
  };

  return (
    <section className='relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-green-900 to-gray-900'>
      {/* Abstract Background Elements */}
      <div className='absolute top-0 right-0 w-full h-full overflow-hidden opacity-10'>
        <div className='absolute -top-20 -right-20 w-96 h-96 bg-green-400 rounded-full blur-3xl'></div>
        <div className='absolute top-1/3 left-1/4 w-64 h-64 bg-green-300 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent'></div>
        <div className="absolute inset-0 bg-[url('/pattern-grid.png')] opacity-5"></div>
      </div>

      {/* Diagonal Line Accents */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -left-40 w-80 h-80 border-t-2 border-l-2 border-green-500/20 rounded-tl-full'></div>
        <div className='absolute top-1/4 -right-20 w-40 h-40 border-2 border-green-500/20 rounded-full'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Prestigious Title Section with Animation */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='inline-flex items-center justify-center mb-4'>
            <div className='h-px w-8 bg-green-400'></div>
            <span className='mx-3 text-green-400 uppercase text-sm tracking-widest font-medium'>
              Visionary Leadership
            </span>
            <div className='h-px w-8 bg-green-400'></div>
          </div>
          <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>
            <span className='block'>CEO</span>
            <span className='text-green-400'>Monimichelle</span>
          </h2>
          <div className='h-1 w-48 bg-green-500 mx-auto mt-6 mb-8'></div>
          <p className='text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed'>
            Meet the pioneer revolutionizing sports infrastructure across Africa
            with world-class facility development and groundbreaking turf
            technology
          </p>
        </div>

        {/* CEO Showcase - Hero Section */}
        <div
          className={`relative mb-24 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-black/30 backdrop-blur-sm border border-white/10 shadow-2xl'>
            {/* CEO Image Section - Left Side */}
            <div className='lg:w-5/12 relative'>
              {/* Executive Badge */}
              <div className='absolute top-6 left-6 z-20 flex items-center space-x-2 bg-green-500/90 text-white py-2 px-4 rounded-full backdrop-blur-sm shadow-lg transform -rotate-3'>
                <Award className='w-5 h-5' />
                <span className='font-semibold text-sm uppercase tracking-wider'>
                  Founder & CEO
                </span>
              </div>

              {/* Profile Image with Special Effects */}
              <div className='relative h-full min-h-[400px]'>
                {/* Spotlight Effect */}

                {/* CEO Image */}
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className='w-full  object-cover object-center'
                />

                {/* Bottom Gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>

                {/* Signature Element */}
                <div className='absolute bottom-8 left-8 right-8'>
                  <div className='flex items-end justify-between'>
                    <div>
                      <h3 className='text-4xl font-bold text-white mb-2 drop-shadow-lg'>
                        {ceo.name}
                      </h3>
                      <p className='text-green-300 text-xl font-medium'>
                        {ceo.title}
                      </p>
                    </div>
                    <img
                      src='/signature.png'
                      alt='Signature'
                      className='h-16 opacity-90'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Info Section - Right Side */}
            <div className='lg:w-7/12 p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-gray-900 to-black'>
              {/* Achievements & Expertise Section */}
              <div className='grid md:grid-cols-2 gap-8 mb-8'>
                {/* Achievements */}
                <div>
                  <h4 className='text-xl font-bold text-white mb-4 flex items-center'>
                    <span className='w-8 h-1 bg-green-500 mr-3'></span>
                    Key Achievements
                  </h4>
                  <ul className='space-y-2'>
                    {ceo.achievements.map((achievement, index) => (
                      <li key={index} className='flex items-start'>
                        <div className='mt-1 mr-2 text-green-400'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                            <polyline points='22 4 12 14.01 9 11.01'></polyline>
                          </svg>
                        </div>
                        <span className='text-gray-300'>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className='text-xl font-bold text-white mb-4 flex items-center'>
                    <span className='w-8 h-1 bg-green-500 mr-3'></span>
                    Areas of Expertise
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {ceo.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className='px-3 py-1 bg-green-900/50 text-green-300 border border-green-500/30 rounded-full text-sm'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact & Social */}
              <div className='mt-auto pt-6 border-t border-green-900/30 flex flex-wrap items-center justify-between'>
                <div className='flex space-x-3'>
                  <a
                    href={ceo.social.linkedin}
                    className='p-3 rounded-full bg-white/5 hover:bg-green-900/50 text-gray-400 hover:text-green-400 transition-colors border border-white/10 hover:border-green-500/50'
                  >
                    <Linkedin className='w-5 h-5' />
                  </a>
                  <a
                    href={ceo.social.twitter}
                    className='p-3 rounded-full bg-white/5 hover:bg-green-900/50 text-gray-400 hover:text-green-400 transition-colors border border-white/10 hover:border-green-500/50'
                  >
                    <Twitter className='w-5 h-5' />
                  </a>
                  <a
                    href={`mailto:${ceo.social.email}`}
                    className='p-3 rounded-full bg-white/5 hover:bg-green-900/50 text-gray-400 hover:text-green-400 transition-colors border border-white/10 hover:border-green-500/50'
                  >
                    <Mail className='w-5 h-5' />
                  </a>
                </div>
                <a
                  href='#contact'
                  className='mt-4 sm:mt-0 inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-green-500/20 group'
                >
                  Connect with Michael
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='ml-2 transform group-hover:translate-x-1 transition-transform'
                  >
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                    <polyline points='12 5 19 12 12 19'></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
