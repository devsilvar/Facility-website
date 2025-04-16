import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      {/* Top Footer Section with Contact Info */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Company Info */}
          <div>
            <h3 className='text-xl font-bold mb-6 text-green-400'>
              Sport Facility Construction LTD
            </h3>
            <p className='text-gray-300 mb-6'>
              Building world-class sports facilities that inspire athletic
              excellence and community engagement.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-green-400 transition-colors'
              >
                <Facebook className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-green-400 transition-colors'
              >
                <Twitter className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-green-400 transition-colors'
              >
                <Instagram className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-green-400 transition-colors'
              >
                <Linkedin className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className='text-xl font-bold mb-6 text-green-400'>
              Contact Us
            </h3>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <Phone className='w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0' />
                <div>
                  <p className='text-sm text-gray-400'>Call Us</p>
                  <a
                    href='tel:+2348166605077'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    +234 816 660 5077
                  </a>
                </div>
              </div>
              <div className='flex items-start'>
                <Mail className='w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0' />
                <div>
                  <p className='text-sm text-gray-400'>Email</p>
                  <a
                    href='mailto:info@monimichelle.com'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    info@monimichelle.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h3 className='text-xl font-bold mb-6 text-green-400'>
              Our Location
            </h3>
            <div className='flex items-start'>
              <MapPin className='w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0' />
              <div>
                <p className='text-sm text-gray-400'>Address</p>
                <address className='not-italic text-gray-300'>
                  Monimichelle House 3,
                  <br />
                  Legion Close Off Imgbi Road
                  <br />
                  Yenegoa Bayelsa, Yenagoa,
                  <br />
                  562101 Nigeria
                </address>
              </div>
            </div>
            <div className='mt-4'>
              <a
                href='#'
                className='inline-flex items-center text-green-400 hover:text-green-300 transition-colors group'
              >
                <span>Get Directions</span>
                <ExternalLink className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold mb-6 text-green-400'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight className='w-4 h-4 mr-2 text-green-400 group-hover:translate-x-1 transition-transform' />
                  <span>Our Projects</span>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight className='w-4 h-4 mr-2 text-green-400 group-hover:translate-x-1 transition-transform' />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight className='w-4 h-4 mr-2 text-green-400 group-hover:translate-x-1 transition-transform' />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight className='w-4 h-4 mr-2 text-green-400 group-hover:translate-x-1 transition-transform' />
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors flex items-center group'
                >
                  <ArrowRight className='w-4 h-4 mr-2 text-green-400 group-hover:translate-x-1 transition-transform' />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='bg-gray-800 py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-6 md:mb-0'>
              <h4 className='text-xl font-bold text-white'>
                Subscribe to Our Newsletter
              </h4>
              <p className='text-gray-400 mt-1'>
                Stay updated with our latest projects and insights
              </p>
            </div>
            <div className='w-full md:w-auto'>
              <form className='flex flex-col sm:flex-row gap-3'>
                <input
                  type='email'
                  placeholder='Your email address'
                  className='px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500'
                />
                <button
                  type='submit'
                  className='px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='bg-gray-950 py-6'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Sport Facility Construction LTD. All
            rights reserved.
          </p>
          <div className='mt-4 md:mt-0 flex space-x-6'>
            <a href='#' className='text-gray-400 hover:text-white text-sm'>
              Privacy Policy
            </a>
            <a href='#' className='text-gray-400 hover:text-white text-sm'>
              Terms of Service
            </a>
            <a href='#' className='text-gray-400 hover:text-white text-sm'>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
