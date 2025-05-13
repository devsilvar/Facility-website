import { useState, useEffect, useRef } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  X,
  Info,
  Heart,
  Download,
  Share2,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
// Projects data
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
    photographer: 'Oluwaseun Adeyemi',
    details:
      'Project completed in 14 months with eco-friendly materials and renewable energy systems.',
    tags: ['Stadium', 'Hybrid Grass', 'Modern'],
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
    photographer: 'Chike Okonkwo',
    details:
      'Features state-of-the-art player monitoring systems and recovery facilities.',
    tags: ['Training', 'FIFA Standard', 'Analytics'],
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
    photographer: 'Adebayo Johnson',
    details: 'Hosted three national championships since completion.',
    tags: ['Athletics', 'IAAF', 'Competition'],
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
    photographer: 'Amara Eze',
    details:
      'Features advanced lighting for night tournaments and media broadcast facilities.',
    tags: ['Tennis', 'Clay Court', 'Tournament'],
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
    photographer: 'Ibrahim Musa',
    details: 'Provides free access to youth programs and community events.',
    tags: ['Community', 'Multi-sport', 'Recreation'],
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
    photographer: 'Ngozi Okoro',
    details:
      'Features rainwater harvesting and solar energy systems for sustainability.',
    tags: ['Stadium', 'Retractable', 'International'],
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
    photographer: 'Emmanuel Effiong',
    details: 'Used as a training base for Olympic athletes and national teams.',
    tags: ['Track', 'Performance', 'Training'],
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
    photographer: 'Osaro Igbinedion',
    details: 'Features custom acoustics design for optimal crowd atmosphere.',
    tags: ['Basketball', 'Arena', 'Professional'],
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
    photographer: 'Funmi Adekoya',
    details: 'Developed 14 professional players since opening.',
    tags: ['Academy', 'Youth', 'Development'],
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
    photographer: 'Musa Ibrahim',
    details: 'Can transform between configurations in under 24 hours.',
    tags: ['Multi-purpose', 'Convertible', 'Events'],
  },
  {
    id: 11,
    title: 'Owerri Swimming Complex',
    location: 'Owerri, Nigeria',
    category: 'courts',
    description:
      'Olympic-standard swimming facility with eight competition lanes and spectator capacity of 1,500.',
    image: '/wor11.webp',
    year: '2017',
    photographer: 'Chioma Nwosu',
    details: 'Features advanced water filtration and heating systems.',
    tags: ['Swimming', 'Olympic', 'Competition'],
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
    photographer: 'Daniel Gyang',
    details: 'Located at 1,300m elevation for altitude training benefits.',
    tags: ['Altitude', 'Training', 'Elite'],
  },
];

export default function ProjectGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLiked, setIsLiked] = useState(Array(projects.length).fill(false));
  const [isLoading, setIsLoading] = useState(false);

  const toggleLike = (index) => {
    const newLiked = [...isLiked];
    newLiked[index] = !newLiked[index];
    setIsLiked(newLiked);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const openImage = (index) => {
    setSelectedIndex(index);
    setIsLoading(true);
    const img = new Image();
    img.src = projects[index].image;
    img.onload = () => {
      setIsLoading(false);
    };
  };

  const closeImage = () => {
    setSelectedIndex(null);
    setIsZoomed(false);
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      const nextIndex = (selectedIndex + 1) % projects.length;
      openImage(nextIndex);
    }
  };

  const goToPrev = () => {
    if (selectedIndex !== null) {
      const prevIndex = (selectedIndex - 1 + projects.length) % projects.length;
      openImage(prevIndex);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === 'Escape') {
          closeImage();
        } else if (e.key === 'ArrowRight') {
          goToNext();
        } else if (e.key === 'ArrowLeft') {
          goToPrev();
        } else if (e.key === 'i') {
          setIsInfoOpen(!isInfoOpen);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, isInfoOpen]);

  const currentProject =
    selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <div className='container mx-auto px-4 py-8 my-40'>
      {/* Gallery Grid */}
      <h3 className='text-3xl font-bold mb-20 text-center'>Gallery Section</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className='group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105'
            onClick={() => openImage(index)}
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-90'
              loading='lazy'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
              <div>
                <h3 className='text-white font-bold text-lg'>
                  {project.title}
                </h3>
                <p className='text-green-300 text-sm'>{project.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'>
          {/* Close button */}
          <button
            onClick={closeImage}
            className='absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 z-50 hover:bg-green-600 transition-colors'
            aria-label='Close'
          >
            <X className='w-6 h-6' />
          </button>

          {/* Main image container */}
          <div className='relative w-full max-w-6xl h-full max-h-[90vh] flex items-center justify-center'>
            {isLoading && (
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin' />
              </div>
            )}

            <div
              className={`relative transition-all duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              } ${isZoomed ? 'cursor-zoom-out scale-125' : 'cursor-zoom-in'}`}
              onClick={toggleZoom}
            >
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className='max-w-full max-h-[80vh] object-contain rounded'
              />
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrev}
              className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-green-600 transition-colors z-40'
              aria-label='Previous image'
            >
              <ChevronLeft className='w-8 h-8' />
            </button>
            <button
              onClick={goToNext}
              className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-green-600 transition-colors z-40'
              aria-label='Next image'
            >
              <ChevronRight className='w-8 h-8' />
            </button>
          </div>

          {/* Info panel */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 transition-transform duration-500 ease-in-out z-40 ${
              isInfoOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className='max-w-6xl mx-auto'>
              <div className='flex items-end justify-between mb-4'>
                <div>
                  <span className='inline-block px-3 py-1 bg-green-500 text-white text-xs font-medium uppercase tracking-wider rounded-full mb-2'>
                    {currentProject.category}
                  </span>
                  <h2 className='text-4xl font-bold text-white mb-1'>
                    {currentProject.title}
                  </h2>
                  <p className='text-green-300 text-lg'>
                    {currentProject.location} • {currentProject.year}
                  </p>
                </div>
                <div className='flex items-center space-x-4'>
                  <span className='text-gray-400 text-sm'>
                    {selectedIndex + 1} / {projects.length}
                  </span>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='col-span-2'>
                  <p className='text-gray-300 text-lg mb-4'>
                    {currentProject.description}
                  </p>
                  <p className='text-gray-400'>{currentProject.details}</p>
                </div>
                <div className='space-y-4'>
                  <div>
                    <h4 className='text-gray-400 uppercase text-xs font-medium tracking-wider mb-1'>
                      Photographer
                    </h4>
                    <p className='text-white'>{currentProject.photographer}</p>
                  </div>
                  <div>
                    <h4 className='text-gray-400 uppercase text-xs font-medium tracking-wider mb-1'>
                      Tags
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {currentProject.tags.map((tag, i) => (
                        <span
                          key={i}
                          className='px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className='absolute top-4 left-4 flex items-center space-x-3 z-50'>
            <button
              onClick={() => toggleLike(selectedIndex)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isLiked[selectedIndex]
                  ? 'bg-red-600 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              } transition-all`}
              aria-label='Like image'
            >
              <Heart
                className={`w-5 h-5 ${
                  isLiked[selectedIndex] ? 'fill-white' : ''
                }`}
              />
            </button>

            <button
              onClick={toggleZoom}
              className='w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all'
              aria-label='Zoom image'
            >
              {isZoomed ? (
                <ZoomOut className='w-5 h-5' />
              ) : (
                <ZoomIn className='w-5 h-5' />
              )}
            </button>

            <button
              onClick={() => setIsInfoOpen(!isInfoOpen)}
              className={`w-10 h-10 rounded-full ${
                isInfoOpen
                  ? 'bg-green-600 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              } flex items-center justify-center transition-all`}
              aria-label='Toggle info panel'
            >
              <Info className='w-5 h-5' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
