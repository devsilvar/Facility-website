import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  CheckCircle,
  Clock,
  Users,
  Share2,
} from 'lucide-react';

export default function ProjectDetails({ projectId = 2, onBack }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  // Simulated data fetch
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const projectData = {
        2: {
          id: 2,
          title: 'Abuja FC Training Complex',
          location: 'Abuja, Nigeria',
          category: 'fields',
          summary:
            'Elite training facility with six FIFA-standard football pitches and integrated performance analytics technology.',
          keyFeatures: [
            'Six FIFA-standard natural grass pitches',
            'Climate-controlled indoor pitch',
            'Advanced drainage system',
            'Integrated analytics system',
            'Sports science center with hydrotherapy',
          ],
          client: 'Abuja Football Club & Nigerian Football Federation',
          completed: 'September 2022',
          duration: '24 months',
          value: '$42 million',
          keyAchievements: [
            'Designed comprehensive water recycling system capturing 95% of used water',
            'Implemented modular construction approach',
            'Developed customizable analytics dashboard',
            'Completed 3 weeks ahead of schedule',
          ],
          testimonial: {
            quote:
              'This facility has transformed our ability to develop players at every level.',
            author: 'Coach Ibrahim Musa',
            position: 'Technical Director, Abuja FC',
          },
          team: {
            lead: 'Eng. Funmi Adeyemi',
            members: 120,
            partners: [
              'SportsField Analytics',
              'Pitch Perfect Turf',
              'PerformTech Systems',
            ],
          },
          awards: [
            '2022 Sports Technology Integration Award',
            'International Training Ground Certification',
          ],
          images: ['/work2.webp', '/wor11.webp', '/work3.webp', '/work5.webp'],
        },
      };

      if (projectId && projectData[projectId]) {
        setProject(projectData[projectId]);
      } else {
        console.error('Project not found');
      }
      setLoading(false);
    }, 500);
  }, [projectId]);

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-green-700'></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center p-4'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
          Project Not Found
        </h2>
        <p className='text-gray-600 mb-8'>
          The project you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={onBack}
          className='flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors'
        >
          <ArrowLeft className='mr-2 w-5 h-5' />
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* Hero Section */}
      <div className='relative h-[600px] w-full overflow-hidden'>
        <img
          src={project.images[activeImage]}
          alt={project.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent'></div>
        <div className='absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white'>
          <button
            onClick={onBack}
            className='flex items-center mb-6 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-black/50 transition-colors'
          >
            <ArrowLeft className='mr-2 w-5 h-5' />
            Back to Projects
          </button>
          <h1 className='text-3xl md:text-5xl font-bold mb-2'>
            {project.title}
          </h1>
          <div className='flex flex-wrap gap-4 mb-2'>
            <span className='inline-flex items-center px-3 py-1 bg-green-600/90 text-white rounded-full text-sm font-medium capitalize'>
              {project.category}
            </span>
            <span className='inline-flex items-center px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm'>
              <MapPin className='w-4 h-4 mr-1' />
              {project.location}
            </span>
            <span className='inline-flex items-center px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm'>
              <Calendar className='w-4 h-4 mr-1' />
              Completed {project.completed}
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className='bg-white py-4 px-4 shadow-md sticky top-0 z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex overflow-x-auto space-x-4 pb-2'>
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`flex-shrink-0 h-16 w-24 md:h-20 md:w-32 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === index
                    ? 'border-green-600 shadow-lg'
                    : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} - View ${index + 1}`}
                  className='w-full h-full object-cover'
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Column - Essential Project Info */}
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-xl shadow-md p-6 mb-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                Project Overview
              </h2>
              <p className='text-gray-700 text-lg mb-6'>{project.summary}</p>

              {/* Two Main Sections */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                {/* Key Features */}
                <div className='bg-gray-50 p-5 rounded-lg'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                    Key Features
                  </h3>
                  <ul className='space-y-2'>
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} className='flex items-start'>
                        <CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0 mt-1' />
                        <span className='ml-3 text-gray-600'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Achievements */}
                <div className='bg-gray-50 p-5 rounded-lg'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                    Key Achievements
                  </h3>
                  <ul className='space-y-2'>
                    {project.keyAchievements.map((achievement, index) => (
                      <li key={index} className='flex items-start'>
                        <CheckCircle className='w-5 h-5 text-green-600 flex-shrink-0 mt-1' />
                        <span className='ml-3 text-gray-600'>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className='border-l-4 border-green-600 pl-6 my-6'>
                  <p className='text-gray-700 italic text-lg mb-2'>
                    "{project.testimonial.quote}"
                  </p>
                  <div>
                    <p className='font-semibold text-gray-800'>
                      {project.testimonial.author}
                    </p>
                    <p className='text-gray-600 text-sm'>
                      {project.testimonial.position}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Quick Facts */}
          <div>
            <div className='bg-white rounded-xl shadow-md p-6 sticky top-28'>
              <h2 className='text-xl font-bold text-gray-800 mb-4'>
                Project Details
              </h2>

              <div className='space-y-3 mb-6'>
                <div className='flex justify-between pb-2 border-b border-gray-100'>
                  <span className='text-gray-600'>Client:</span>
                  <span className='text-gray-900 font-medium'>
                    {project.client}
                  </span>
                </div>
                <div className='flex justify-between pb-2 border-b border-gray-100'>
                  <span className='text-gray-600'>Category:</span>
                  <span className='text-gray-900 font-medium capitalize'>
                    {project.category}
                  </span>
                </div>
                <div className='flex justify-between pb-2 border-b border-gray-100'>
                  <span className='text-gray-600'>Completion:</span>
                  <span className='text-gray-900 font-medium'>
                    {project.completed}
                  </span>
                </div>
                <div className='flex justify-between pb-2 border-b border-gray-100'>
                  <span className='text-gray-600'>Duration:</span>
                  <span className='text-gray-900 font-medium'>
                    {project.duration}
                  </span>
                </div>
                <div className='flex justify-between pb-2 border-b border-gray-100'>
                  <span className='text-gray-600'>Project Value:</span>
                  <span className='text-gray-900 font-medium'>
                    {project.value}
                  </span>
                </div>
              </div>

              {/* Project Team - Simplified */}
              <div className='mb-6'>
                <h3 className='font-semibold text-gray-800 mb-2 flex items-center'>
                  <Users className='w-5 h-5 mr-2 text-blue-500' />
                  Project Team
                </h3>
                <div className='bg-blue-50 p-4 rounded-lg'>
                  <p className='text-gray-900'>
                    <span className='text-gray-600'>Lead:</span>{' '}
                    {project.team.lead}
                  </p>
                  <p className='text-gray-900'>
                    <span className='text-gray-600'>Team Size:</span>{' '}
                    {project.team.members}
                  </p>
                </div>
              </div>

              {/* Awards - Simplified */}
              {project.awards && project.awards.length > 0 && (
                <div className='mb-6'>
                  <h3 className='font-semibold text-gray-800 mb-2'>Awards</h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.awards.map((award, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 bg-yellow-50 text-yellow-700 rounded-lg text-sm'
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className='mt-6 space-y-3'>
                <button className='w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium'>
                  Request Consultation
                </button>
                <button className='w-full py-3 px-4 border border-green-600 text-green-700 rounded-lg hover:bg-green-100 transition-colors font-medium flex items-center justify-center'>
                  <Share2 className='w-4 h-4 mr-2' />
                  Share Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
