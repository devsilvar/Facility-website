import { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Linkedin,
  Twitter,
  Mail,
} from 'lucide-react';

export default function TeamMembers() {
  const [selectedMember, setSelectedMember] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'Michael Reynolds',
      title: 'Chief Executive Officer & Founder',
      image: '/ohzi.jpg',
      bio: 'With over 20 years of experience in sports facility development, Michael has overseen the construction of more than 50 professional stadiums worldwide. His vision for innovative, sustainable sporting venues has transformed how athletes perform and fans experience the game.',
      expertise: [
        'Stadium Design',
        'Project Management',
        'Sustainable Construction',
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@sportfacility.com',
      },
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'Chief Operations Officer',
      image: '/api/placeholder/500/500',
      bio: 'Former Olympic athlete with expertise in designing functional training facilities that meet the highest performance standards. Sarah ensures every project delivers maximum athletic functionality while maintaining aesthetic excellence.',
      expertise: [
        'Athletic Performance',
        'Facility Operations',
        'Team Leadership',
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@sportfacility.com',
      },
    },
    {
      id: 3,
      name: 'David Okonkwo',
      title: 'Chief Technical Officer',
      image: '/api/placeholder/500/500',
      bio: 'David brings 15 years of engineering excellence to every project, specializing in cutting-edge technology integration for modern sports facilities. His innovations in structural design have set new industry standards for safety and efficiency.',
      expertise: ['Engineering', 'Technology Integration', 'Structural Design'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@sportfacility.com',
      },
    },
    {
      id: 4,
      name: 'Amina Bello',
      title: 'Head of Architecture',
      image: '/api/placeholder/500/500',
      bio: "Award-winning architect with a passion for creating spaces that blend functionality with striking aesthetics. Amina's designs harmonize with natural surroundings while maximizing spatial efficiency for optimal athletic performance.",
      expertise: [
        'Architectural Design',
        'Sustainable Building',
        'Space Optimization',
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'amina@sportfacility.com',
      },
    },
    {
      id: 5,
      name: 'Emmanuel Adeyemi',
      title: 'Project Director',
      image: '/api/placeholder/500/500',
      bio: 'Emmanuel oversees all project execution with meticulous attention to detail. His background in construction management ensures every project is delivered on time and within budget while exceeding quality expectations.',
      expertise: ['Project Management', 'Quality Control', 'Client Relations'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emmanuel@sportfacility.com',
      },
    },
    {
      id: 6,
      name: 'Grace Nwafor',
      title: 'Financial Director',
      image: '/api/placeholder/500/500',
      bio: "With a keen eye for financial planning and resource allocation, Grace ensures the company's financial health while maximizing value for clients. Her strategic approach has been instrumental in the company's growth and success.",
      expertise: [
        'Financial Strategy',
        'Budget Management',
        'Investment Planning',
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'grace@sportfacility.com',
      },
    },
  ];

  const nextMember = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSelectedMember((prev) => (prev + 1) % teamMembers.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevMember = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setSelectedMember(
        (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const currentMember = teamMembers[selectedMember];
  const isFounder = selectedMember === 0;

  return (
    <section
      className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50 overflow-hidden'
      id='team'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <span className='inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4'>
            Our Team
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Meet the Experts
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            The passionate professionals behind Nigeria's premier sport facility
            construction company
          </p>
        </div>

        {/* Featured Team Member Showcase */}
        <div className='relative mb-24'>
          {/* Background Elements */}
          <div className='absolute -top-16 -right-16 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl'></div>
          <div className='absolute -bottom-20 -left-20 w-80 h-80 bg-green-200 rounded-full opacity-30 blur-3xl'></div>

          <div className='relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden'>
            <div className='flex flex-col lg:flex-row'>
              {/* Image Section */}
              <div className='lg:w-1/2 relative'>
                <div className='absolute inset-0 bg-gradient-to-tr from-green-900 to-green-500 opacity-90 mix-blend-multiply'></div>
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className='w-full h-full object-cover object-center'
                  style={{ minHeight: '500px' }}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent'></div>

                {/* Member Navigation Controls */}
                <div className='absolute bottom-6 left-6 right-6 flex justify-between'>
                  <div>
                    <span className='text-white/80 text-sm'>
                      {selectedMember + 1} of {teamMembers.length}
                    </span>
                  </div>
                  <div className='flex space-x-2'></div>
                </div>

                {/* Member Name Overlay */}
                <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                  {isFounder && (
                    <span className='inline-block px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium mb-3'>
                      Founder
                    </span>
                  )}
                  <h3 className='text-3xl font-bold mb-1'>
                    {currentMember.name}
                  </h3>
                  <p className='text-green-100 text-lg'>
                    {currentMember.title}
                  </p>
                </div>
              </div>

              {/* Info Section */}
              <div className='lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between'>
                <div>
                  <div
                    className={`mb-8 transition-opacity duration-300 ${
                      isAnimating ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <h4 className='text-2xl font-bold text-gray-800 mb-4'>
                      About {currentMember.name}
                    </h4>
                    <p className='text-gray-600 mb-6'>{currentMember.bio}</p>

                    <div className='mt-6'>
                      <h5 className='text-sm font-semibold text-gray-800 uppercase tracking-wider mb-3'>
                        Expertise
                      </h5>
                      <div className='flex flex-wrap gap-2'>
                        {currentMember.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className='px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm'
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className='flex items-center justify-between border-t border-gray-200 pt-6 mt-auto'>
                  <div className='flex space-x-4'>
                    <a
                      href={currentMember.social.linkedin}
                      className='p-2 rounded-full bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 transition-colors'
                    >
                      <Linkedin className='w-5 h-5' />
                    </a>
                    <a
                      href={currentMember.social.twitter}
                      className='p-2 rounded-full bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 transition-colors'
                    >
                      <Twitter className='w-5 h-5' />
                    </a>
                    <a
                      href={`mailto:${currentMember.social.email}`}
                      className='p-2 rounded-full bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 transition-colors'
                    >
                      <Mail className='w-5 h-5' />
                    </a>
                  </div>
                  <a
                    href='#'
                    className='text-green-600 hover:text-green-700 font-medium flex items-center group'
                  >
                    Full Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
