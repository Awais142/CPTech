import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);

  // Royalty-free videos from Pexels
  const videos = [
    {
      id: 1,
      videoUrl:
        "https://player.vimeo.com/external/577981929.sd.mp4?s=7f9ee1f8ec1e5376027e4a6d1d05d573681b2e7e&profile_id=164&oauth2_token_id=57447761",
      title: "Ocean Waves",
    },
    {
      id: 2,
      videoUrl:
        "https://player.vimeo.com/external/454986381.sd.mp4?s=2e8a7c9f3d6c8a7c9f3d6c8a7c9f3d6c8a7c9f3d&profile_id=139&oauth2_token_id=57447761",
      title: "Mountain Sunset",
    },
    {
      id: 3,
      videoUrl:
        "https://player.vimeo.com/external/458779584.sd.mp4?s=6e1c9f3d6c8a7c9f3d6c8a7c9f3d6c8a7c9f3d6c&profile_id=139&oauth2_token_id=57447761",
      title: "Forest Stream",
    },
    {
      id: 4,
      videoUrl:
        "https://player.vimeo.com/external/469332024.sd.mp4?s=6e1c9f3d6c8a7c9f3d6c8a7c9f3d6c8a7c9f3d6c&profile_id=139&oauth2_token_id=57447761",
      title: "City Time Lapse",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      videoRefs.current[activeIndex]?.pause();
    } else {
      videoRefs.current[activeIndex]?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-[70vh] max-h-[800px] overflow-hidden rounded-xl shadow-2xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 opacity-90 z-0"></div>

      {/* Slides container */}
      <div className="relative h-full w-full flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Video element - always visible but paused when not "playing" */}
            <video
              ref={(el) => (videoRefs.current[activeIndex] = el)}
              src={videos[activeIndex].videoUrl}
              className="w-full h-full object-cover"
              controls={false}
              onEnded={() => setIsPlaying(false)}
              muted
              loop
              playsInline
            />

            {/* Play button overlay - only shown when video is paused */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center cursor-pointer group bg-black bg-opacity-30"
              >
                <div className="relative">
                  {/* Pulsing circle animation */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.3, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-white opacity-60"
                  ></motion.div>

                  {/* Play button */}
                  <div className="relative w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10 text-white ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
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
            onClick={() => {
              setActiveIndex(index);
              setIsPlaying(false);
            }}
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
