import { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ChevronRight,
} from 'lucide-react';
import YouTube from 'react-youtube';

// This is a placeholder component that simulates react-youtube
// In a real implementation, you would import YouTube from 'react-youtube'
// and use the actual component with its API
// const YouTube = ({
//   videoId,
//   opts,
//   onReady,
//   onPlay,
//   onPause,
//   onEnd,
//   className,
// }) => {
//   // Simulating the YouTube player functionality
//   return (
//     <div className={`relative ${className}`}>
//       <iframe
//         className='w-full h-full rounded-xl'
//         src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&${new URLSearchParams(
//           opts.playerVars
//         ).toString()}`}
//         title='YouTube video player'
//         frameBorder='0'
//         allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

export default function VideoFeatureSection() {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const progressInterval = useRef(null);

  const [relatedVideos] = useState([
    'Why Quality Pitches Matter for Player Development',
    'The Impact of Stadium Design on Team Performance',
    'Modern Football Facilities: What Makes Them World-Class',
  ]);

  // Animation effect for the headline
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // YouTube player options
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
    },
  };

  // Handle player ready event
  const onReady = (event) => {
    setPlayer(event.target);
    setDuration(event.target.getDuration());
  };

  // Play/pause video handler
  const togglePlay = () => {
    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }

    setIsPlaying(!isPlaying);
  };

  // Mute/unmute video handler
  const toggleMute = () => {
    if (!player) return;

    if (isMuted) {
      player.unMute();
    } else {
      player.mute();
    }

    setIsMuted(!isMuted);
  };

  // Set up progress tracking
  useEffect(() => {
    if (isPlaying && player) {
      progressInterval.current = setInterval(() => {
        const currentTime = player.getCurrentTime();
        const videoProgress = (currentTime / duration) * 100;
        setProgress(videoProgress);
      }, 1000);
    } else {
      clearInterval(progressInterval.current);
    }

    return () => {
      clearInterval(progressInterval.current);
    };
  }, [isPlaying, player, duration]);

  // Handle video state changes
  const onStateChange = (event) => {
    // YouTube states: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
    if (event.data === 1) {
      setIsPlaying(true);
    } else if (event.data === 2) {
      setIsPlaying(false);
    } else if (event.data === 0) {
      setIsPlaying(false);
      setProgress(0);
    }
  };

  // Handle seeking in progress bar
  const handleProgressBarClick = (e) => {
    if (!player) return;

    const progressBar = e.currentTarget;
    const pos =
      (e.pageX - progressBar.getBoundingClientRect().left) /
      progressBar.offsetWidth;
    const seekTime = duration * pos;

    player.seekTo(seekTime);
    setProgress(pos * 100);
  };

  return (
    <section
      className='py-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden'
      id='featured'
    >
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-20'>
        <svg
          className='w-full h-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <defs>
            <pattern
              id='grid'
              width='8'
              height='8'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M 8 0 L 0 0 0 8'
                fill='none'
                stroke='white'
                strokeWidth='0.5'
                opacity='0.3'
              ></path>
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#grid)'></rect>
        </svg>
      </div>

      {/* Ball decoration */}
      <div className='absolute -top-16 -right-16 w-64  bg-white/5 rounded-full blur-xl'></div>
      <div className='absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-12'>
          <div className='mb-3'>
            <span className='inline-block bg-white/10 backdrop-blur-sm text-emerald-300 px-4 py-1 rounded-full text-sm font-semibold'>
              FEATURED INSIGHTS
            </span>
          </div>

          <h2 className='text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight overflow-hidden'>
            <span className='block relative'>
              <span
                className={`inline-block transition-transform duration-1000 ${
                  animationComplete ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                Video
              </span>
            </span>
          </h2>

          <div className='h-1 w-24 bg-emerald-400 mx-auto mt-6 rounded-full'></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start'>
          {/* Main video content - Takes up 2/3 */}
          <div className='lg:col-span-2 '>
            <div
              className='relative rounded-2xl overflow-hidden shadow-2xl group'
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Video overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none'></div>

              {/* Play button overlay (shown when not playing) */}
              {!isPlaying && (
                <div className='absolute inset-0 flex items-center justify-center z-20'>
                  <button
                    className='w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-emerald-400'
                    onClick={togglePlay}
                  >
                    <Play className='w-10 h-10 text-white fill-current' />
                  </button>
                </div>
              )}

              {/* YouTube video player integration */}
              <div className='aspect-w-16 aspect-h-9'>
                <YouTube
                  videoId='9WqGMvujjfo' // Example video ID - Replace with your actual video ID
                  opts={opts}
                  onReady={onReady}
                  onStateChange={onStateChange}
                  className='w-full h-96'
                />
              </div>

              {/* Video title overlay */}
              <div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
                <h3 className='text-xl md:text-2xl font-bold text-white'>
                  Why Home-based Players Cannot Make Super Eagles List by Ebi
                  Egbe
                </h3>
                <div className='flex items-center mt-2'>
                  <div className='w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center'>
                    <span className='text-white font-bold'>EE</span>
                  </div>
                  <div className='ml-3'>
                    <p className='text-white text-sm font-medium'>Ebi Egbe</p>
                    <p className='text-gray-300 text-xs'>
                      CEO, Monimichelle Sports Facility Construction
                    </p>
                  </div>
                </div>
              </div>

              {/* Custom video controls */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4 transform transition-all duration-300 ${
                  isHovering
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-full opacity-0'
                } z-30`}
              >
                <div className='flex items-center justify-between'>
                  <button className='text-white' onClick={togglePlay}>
                    {isPlaying ? (
                      <Pause className='w-5 h-5' />
                    ) : (
                      <Play className='w-5 h-5' />
                    )}
                  </button>

                  <div
                    className='flex-1 mx-4 cursor-pointer'
                    onClick={handleProgressBarClick}
                  >
                    <div className='h-1 w-full bg-white/30 rounded-full'>
                      <div
                        className='h-full bg-emerald-400 rounded-full'
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className='flex items-center space-x-3'>
                    <button className='text-white' onClick={toggleMute}>
                      {isMuted ? (
                        <VolumeX className='w-5 h-5' />
                      ) : (
                        <Volume2 className='w-5 h-5' />
                      )}
                    </button>
                    <button
                      className='text-white'
                      onClick={() => player?.getIframe().requestFullscreen()}
                    >
                      <Maximize className='w-5 h-5' />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video description */}
            <div className='mt-6 p-6 bg-white/10 backdrop-blur-sm rounded-xl'>
              <p className='text-white/90'>
                In this insightful video, Ebi Egbe, CEO of Monimichelle Sports
                Facility Construction LTD, discusses why home-based Nigerian
                players struggle to make the Super Eagles roster. He highlights
                how poor quality facilities and playing surfaces affect player
                development and technical abilities, limiting their
                competitiveness at international levels.
              </p>

              <div className='mt-4 flex flex-wrap gap-2'>
                {[
                  'Sports Development',
                  'Football Infrastructure',
                  'Player Performance',
                  'Nigerian Football',
                ].map((tag, index) => (
                  <span
                    key={index}
                    className='inline-block px-3 py-1 bg-white/5 text-emerald-300 rounded-full text-xs'
                  >
                    #{tag.toLowerCase().replace(/\s/g, '')}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar - Takes up 1/3 */}
          <div className='space-y-8'>
            <div className='p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10'>
              <h3 className='text-xl font-bold text-white mb-4'>
                Why Quality Matters
              </h3>

              <ul className='space-y-5'>
                {[
                  'Proper facilities improve technical skills by 40%',
                  'FIFA-standard pitches reduce injury rates by 60%',
                  'Professional facilities attract international scouts',
                  'Quality training grounds enhance player development',
                ].map((point, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1'>
                      <span className='text-white font-bold text-xs'>
                        {index + 1}
                      </span>
                    </div>
                    <p className='ml-3 text-white/80'>{point}</p>
                  </li>
                ))}
              </ul>

              <button className='w-full mt-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2'>
                Get a Consultation
                <ChevronRight className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated dots background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className='absolute w-2 h-2 rounded-full bg-emerald-400/30'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
              animation: 'float infinite linear',
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -50px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  );
}
