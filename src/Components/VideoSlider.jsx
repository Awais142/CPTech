import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Videos + posters to match reference structure (autoplay-friendly, muted)
  const videos = [
    {
      id: 1,
      title: "XLIM PRO 2 DNA Version",
      cta: "Learn more >",
      poster:
        "https://cdn.shopify.com/s/files/1/0584/6709/0582/files/20250527-181020.png?v=1748340645",
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/4dab659e59b2447687c77786bd689447.mp4",
    },
    {
      id: 2,
      title: "XLIM SQ PRO 2",
      cta: "Learn more >",
      poster:
        "https://cdn.shopify.com/s/files/1/0502/8033/3505/files/20250507-103438.jpg?v=1746585298",
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/39cae2e08cc041a9b8fe63daa014a854.mp4",
    },
    {
      id: 3,
      title: "NeXLIM",
      cta: "Learn more >",
      poster:
        "https://cdn.shopify.com/s/files/1/0502/8033/3505/files/Nexlim.avif?v=1738995518",
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/2a9ccd49c42340ce8e13afea50cd9eea.mp4",
    },
    {
      id: 4,
      title: "OXVA 5TH ANNIVERSARY",
      cta: "Learn more >",
      poster:
        "https://cdn.shopify.com/s/files/1/0502/8033/3505/files/5TH.avif?v=1738995518",
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/e617d3d452ef4433a76de4839c7f8f37.mp4",
    },
    {
      id: 5,
      title: "UNITECH 2.0",
      cta: "Learn more >",
      poster:
        "https://cdn.shopify.com/s/files/1/0502/8033/3505/files/Unitech_2.0.avif?v=1738995518",
      videoUrl:
        "https://cdn.shopify.com/videos/c/o/v/59fe882d2be942c1b2f9eafd5cb5280c.mp4",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Layout math to mimic reference (3 visible equal slides with small gap)
  const SLIDE_VW = 33; // each slide ~ one third of viewport width
  const GAP_VW = 2; // gap between slides (vw)
  const STEP_VW = SLIDE_VW + GAP_VW; // distance to move per slide
  const CENTER_PAD_VW = 50 - SLIDE_VW / 2; // leading/trailing spacer to center first/last

  return (
    <div className="relative w-full h-[68vh] max-h-[820px] overflow-hidden rounded-[18px] bg-[#0b0b0b] px-2 sm:px-6">
      {/* Slides container - horizontal carousel */}
      <div
        className="flex h-full w-full items-center justify-center transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(calc(-${
            activeIndex * STEP_VW
          }vw + ${CENTER_PAD_VW}vw))`,
        }}
      >
        {/* Leading spacer so the first slide can be centered */}
        <div
          className="flex-shrink-0"
          style={{ width: `calc(${CENTER_PAD_VW}vw)` }}
        />
        {videos.map((video, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={video.id}
              className={`relative flex-shrink-0 overflow-hidden transition-all duration-500 rounded-[18px] border bg-black/20`}
              style={{
                width: `calc(${SLIDE_VW}vw)`,
                height: `calc(60vh)`,
                marginLeft: `calc(${GAP_VW / 2}vw)`,
                marginRight: `calc(${GAP_VW / 2}vw)`,
                opacity: isActive ? 1 : 0.85,
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              <video
                src={video.videoUrl}
                poster={video.poster}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              {/* Gradient and texts overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/40" />
              <div
                className={`absolute top-6 left-1/2 -translate-x-1/2 text-center transition-opacity ${
                  isActive ? "opacity-100" : "opacity-80"
                }`}
              >
                <h3 className="text-white/95 font-extrabold tracking-tight text-lg sm:text-xl md:text-2xl drop-shadow-md whitespace-nowrap">
                  {video.title}
                </h3>
                <p className="mt-1 text-white/85 text-xs md:text-sm font-semibold">
                  {video.cta}
                </p>
              </div>
            </div>
          );
        })}
        {/* Trailing spacer so the last slide can be centered */}
        <div
          className="flex-shrink-0"
          style={{ width: `calc(${CENTER_PAD_VW}vw)` }}
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="w-6 h-6"
        >
          <path
            d="M15 18l-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="w-6 h-6"
        >
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white w-6"
                : "bg-white/50 w-2 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSlider;
