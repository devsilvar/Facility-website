import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Search } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Hero', href: '#hero', id: 'hero' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Featured', href: '#featured', id: 'featured' },
    { name: 'Work', href: '#work', id: 'work' },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top contact bar */}
      <div className='bg-green-800 text-white py-2 px-4'>
        <div className='max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm'>
          <div className='flex items-center space-x-4'>
            <a
              href='tel:+2348166605077'
              className='flex items-center hover:text-green-200 transition-colors'
            >
              <Phone className='w-4 h-4 mr-1' />
              <span>+234 816 660 5077</span>
            </a>
            <a
              href='mailto:info@monimichelle.com'
              className='flex items-center hover:text-green-200 transition-colors'
            >
              <Mail className='w-4 h-4 mr-1' />
              <span>info@monimichelle.com</span>
            </a>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <a href='#' className='hover:text-green-200 transition-colors'>
              Careers
            </a>
            <a href='#' className='hover:text-green-200 transition-colors'>
              News
            </a>
            <a href='#' className='hover:text-green-200 transition-colors'>
              FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a href='#' className='flex items-center'>
              <div className='h-10 w-10 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold text-xl mr-2'>
                {/* Monimichelle */}
              </div>
              <div
                className={`font-bold text-xl transition-all duration-300 ${
                  isScrolled ? 'text-green-800' : 'text-white'
                }`}
              >
                Monimichelle
                <span className='text-green-600'> Construction LTD</span>
              </div>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden lg:flex items-center space-x-1'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 relative ${
                  isScrolled
                    ? 'text-gray-700 hover:text-green-600'
                    : 'text-white hover:text-green-300'
                } ${
                  activeSection === link.id
                    ? isScrolled
                      ? 'text-green-600'
                      : 'text-green-300'
                    : ''
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-green-500'></span>
                )}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className='hidden lg:flex items-center space-x-3'>
            <button className='p-2 rounded-full hover:bg-green-100 transition-colors'>
              <Search className='w-5 h-5 text-gray-600' />
            </button>
            <a
              href='#quote'
              className='px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors'
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden flex items-center'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled
                  ? 'hover:bg-gray-100 text-gray-600'
                  : 'hover:bg-green-700/20 text-white'
              }`}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - with smooth slide-in animation */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 transform bg-white shadow-xl w-64 transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='h-full overflow-y-auto'>
          <div className='flex justify-between items-center p-4 border-b border-gray-200'>
            <div className='font-bold text-lg text-green-800'>Menu</div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className='p-2 rounded-md text-gray-500 hover:bg-gray-100'
              aria-label='Close menu'
            >
              <X className='w-5 h-5' />
            </button>
          </div>

          <div className='py-3 px-2 space-y-1'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className='pt-4 pb-2 px-4'>
              <a
                href='#quote'
                onClick={() => setIsMenuOpen(false)}
                className='block w-full text-center py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors'
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40'
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Hero background overlay - only visible when not scrolled */}
      {!isScrolled && (
        <div className='absolute inset-0 -z-10 bg-gradient-to-b from-green-900/90 to-transparent h-full w-full'>
          <div className='absolute inset-0 bg-green-900/50'></div>
        </div>
      )}
    </header>
  );
}
