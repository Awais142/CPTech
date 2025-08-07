import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Royalty-free sample videos (Pexels)
  const videos = [
    {
      id: 1,
      videoUrl: "https://player.vimeo.com/external/449845264.sd.mp4?s=6e1c9f3d6c8a7c9f3d6c8a7c9f3d6c8a7c9f3d6c&profile_id=139&oauth2_token_id=57447761",
      title: "Nature Waterfall",
    },
    {
      id: 2,
      videoUrl: "https://player.vimeo.com/external/454986381.sd.mp4?s=2e8a7c9f3d6c8a7c9f3d6c8a7c9f3d6c8a7c9f3d&profile_id=139&oauth2_token_id=57447761",
      title: "Mountain Sunset",
    },
    {
      id: 3,
      videoUrl: "https://player.vimeo.com/external/458779584.sd.mp4?s=6e1c9f3d6c8a7c9f3d6c8a7c9f3d6c8a7c9f3d6c&profile_id=139&oauth2_token_id=57447761",
      title: "Forest Stream",
    },
    {
      id: 4,
      videoUrl: "https://player.vimeo.com/external/469332024.sd.mp4?s=6e1c9f3d6c8a7c9f3d6c8a7c9f3d6c8a7c9f3d6c&profile_id=139&oauth2_token_id=57447761",
      title: "City Time Lapse",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="relative w-full h-[70vh] max-h-[800px] overflow-hidden rounded-xl shadow-2xl bg-black">
      {/* Slides container - horizontal carousel */}
      <div className="flex h-full w-full items-center justify-center transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 60}vw)` }}>
        {videos.map((video, idx) => {
          const isActive = idx === activeIndex;
          const isPrev = idx === activeIndex - 1;
          const isNext = idx === activeIndex + 1;
          return (
            <div
              key={video.id}
              className={`mx-4 flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500 border
                ${isActive ? 'w-[64vw] h-[64vh] scale-105 z-30 shadow-2xl border-4 border-purple-400 bg-black' :
                  'w-[26vw] h-[34vh] scale-90 z-10 opacity-40 border-2 border-gray-800 bg-[#181818]'}
                ${isPrev || isNext ? 'opacity-80' : 'opacity-30'}
              `}
              style={{ boxShadow: isActive ? '0 8px 32px 0 rgba(80,0,200,0.25)' : undefined }}
            >
              <video
                src={video.videoUrl}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="https://dummyimage.com/600x800/222/fff.png&text=Video+Preview"
                style={{ background: '#111' }}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 flex items-center justify-center transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 flex items-center justify-center transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white w-6"
                : "bg-white bg-opacity-50 hover:bg-opacity-70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
