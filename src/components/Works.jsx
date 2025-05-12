import { useState } from 'react';
import { ChevronRight, ChevronLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OurWorks() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 6;

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'stadiums', name: 'Stadiums' },
    { id: 'fields', name: 'Sports Fields' },
    { id: 'tracks', name: 'Running Tracks' },
    { id: 'courts', name: 'Sports Courts' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Lagos National Stadium',
      location: 'Lagos, Nigeria',
      category: 'stadiums',
      description:
        'A 60,000-seat national stadium featuring hybrid grass technology and advanced drainage systems for year-round playability.',
      image: '/work1.webp',
      year: '2023',
    },
    {
      id: 2,
      title: 'Abuja FC Training Complex',
      location: 'Abuja, Nigeria',
      category: 'fields',
      description:
        'Elite training facility with six FIFA-standard football pitches and integrated performance analytics technology.',
      image: '/work2.webp',
      year: '2022',
    },
    {
      id: 3,
      title: 'Ibadan Athletics Track',
      location: 'Ibadan, Nigeria',
      category: 'tracks',
      description:
        'IAAF-certified 400m running track with specialized sprint lanes and advanced timing systems.',
      image: '/work3.webp',
      year: '2021',
    },
    {
      id: 4,
      title: 'Port Harcourt Tennis Complex',
      location: 'Port Harcourt, Nigeria',
      category: 'courts',
      description:
        'Professional tennis facility featuring six clay courts and four hard courts with spectator seating for 2,000 people.',
      image: '/work18.webp',
      year: '2021',
    },
    {
      id: 5,
      title: 'Kano Community Sports Center',
      location: 'Kano, Nigeria',
      category: 'fields',
      description:
        'Multi-sport facility serving local communities with football fields, basketball courts, and recreational spaces.',
      image: '/work5.webp',
      year: '2020',
    },
    {
      id: 6,
      title: 'Enugu International Stadium',
      location: 'Enugu, Nigeria',
      category: 'stadiums',
      description:
        '35,000-seat stadium with retractable roof and specialized lighting systems for international broadcasts.',
      image: '/work6.webp',
      year: '2019',
    },
    {
      id: 7,
      title: 'Calabar Training Track',
      location: 'Calabar, Nigeria',
      category: 'tracks',
      description:
        'High-performance athletics track with specialized surface technology for optimal performance and injury prevention.',
      image: '/work7.webp',
      year: '2019',
    },
    {
      id: 8,
      title: 'Benin City Basketball Arena',
      location: 'Benin City, Nigeria',
      category: 'courts',
      description:
        'State-of-the-art basketball facility with climate control and specialized hardwood flooring for professional competitions.',
      image: '/work8.webp',
      year: '2018',
    },
    {
      id: 9,
      title: 'Akure Academy Football Complex',
      location: 'Akure, Nigeria',
      category: 'fields',
      description:
        'Youth development facility featuring three specialized training pitches and performance monitoring systems.',
      image: '/work9.webp',
      year: '2018',
    },
    {
      id: 10,
      title: 'Kaduna Multi-Sport Stadium',
      location: 'Kaduna, Nigeria',
      category: 'stadiums',
      description:
        'Versatile 25,000-seat facility designed to host football, athletics, and cultural events with rapid conversion systems.',
      image: '/work10.webp',
      year: '2017',
    },
    {
      id: 11,
      title: 'Owerri Swimming Complex',
      location: 'Owerri, Nigeria',
      category: 'courts',
      description:
        'Olympic-standard swimming facility with eight competition lanes and spectator capacity of 1,500.',
      image: '/work11.webp',
      year: '2017',
    },
    {
      id: 12,
      title: 'Jos High-Altitude Training Track',
      location: 'Jos, Nigeria',
      category: 'tracks',
      description:
        'Specialized high-altitude training facility for elite athletes with integrated performance monitoring technology.',
      image: '/work12.webp',
      year: '2016',
    },
  ];

  // Filter projects by category
  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  // Pagination handlers
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8' id='work'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <span className='inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4'>
            Our Portfolio
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Featured Projects
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Explore our world-class sport facilities built across Nigeria and
            beyond. Each project represents our commitment to excellence and
            innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-3 mb-10'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentPage(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className='bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'
            >
              <div className='relative overflow-hidden h-64'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300'></div>
                <div className='absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                  <div className='flex items-center justify-between'>
                    <span className='text-white font-medium'>
                      {project.location}
                    </span>
                    <span className='px-3 py-1 rounded-full bg-white/20 text-white text-sm backdrop-blur-sm'>
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-4'>{project.description}</p>
                <div className='flex justify-between items-center'>
                  <span className='inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium capitalize'>
                    {project.category}
                  </span>
                  <Link
                    className='inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors group'
                    to='/details'
                  >
                    View Project
                    <ExternalLink className='ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className='flex justify-center items-center mt-12 space-x-4'>
            <button
              onClick={goToPrevPage}
              className='p-2 rounded-full border border-gray-300 hover:bg-green-50 transition-colors'
              disabled={currentPage === 0}
            >
              <ChevronLeft className='w-5 h-5 text-gray-600' />
            </button>
            <div className='text-gray-700'>
              Page {currentPage + 1} of {totalPages}
            </div>
            <button
              onClick={goToNextPage}
              className='p-2 rounded-full border border-gray-300 hover:bg-green-50 transition-colors'
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className='w-5 h-5 text-gray-600' />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
