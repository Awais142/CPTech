import { useState, useEffect, useRef, memo, useCallback } from "react";

const VideoSlider = memo(() => {
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

  const BUFFER_SIZE = 2;
  const loopedVideos = [
    ...videos.slice(-BUFFER_SIZE),
    ...videos,
    ...videos.slice(0, BUFFER_SIZE),
  ];

  const [activeIndex, setActiveIndex] = useState(BUFFER_SIZE);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  }, [isTransitioning]);

  const handlePaginationClick = useCallback((index) => {
    setIsTransitioning(true);
    setActiveIndex(index + BUFFER_SIZE);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (!isTransitioning) return;

    const handleTransitionEnd = () => {
      if (activeIndex === videos.length + BUFFER_SIZE) {
        setActiveIndex(BUFFER_SIZE);
        setIsTransitioning(false);
      } else if (activeIndex === BUFFER_SIZE - 1) {
        setActiveIndex(videos.length + BUFFER_SIZE - 1);
        setIsTransitioning(false);
      } else {
        setIsTransitioning(false);
      }
    };

    const timer = setTimeout(handleTransitionEnd, 500); // Transition duration

    return () => clearTimeout(timer);
  }, [activeIndex, videos.length]);

  // Layout math for desktop (3 visible equal slides with small gap)
  const SLIDE_VW = 33; // each slide ~ one third of viewport width
  const GAP_VW = 2; // gap between slides (vw)
  const STEP_VW = SLIDE_VW + GAP_VW; // distance to move per slide
  const CENTER_PAD_VW = 50 - SLIDE_VW / 2; // leading/trailing spacer to center first/last

  return (
    <div className="relative w-full h-[68vh] max-h-[820px] overflow-hidden rounded-[18px] bg-gradient-to-b from-gray-50 to-blue-100 px-2 sm:px-6">
      {/* Background decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-48 bg-gradient-to-r from-violet-200/30 via-cyan-200/30 to-violet-200/30 blur-3xl -z-10 animate-pulse"></div>

      {/* Slides container - horizontal carousel */}
      <div
        ref={sliderRef}
        className="flex h-full w-full items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateX(calc(-${
            activeIndex * STEP_VW
          }vw + ${CENTER_PAD_VW}vw))`,
          transition: `transform ${
            isTransitioning ? "0.5s ease-in-out" : "0s"
          }`,
        }}
      >
        {/* Leading spacer so the first slide can be centered */}
        <div
          className="flex-shrink-0"
          style={{ width: `calc(${CENTER_PAD_VW}vw)` }}
        />
        {loopedVideos.map((video, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={`${video.id}-${idx}`}
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
                src={isVisible ? video.videoUrl : undefined}
                poster={video.poster}
                className="w-full h-full object-cover"
                autoPlay={isVisible && isActive}
                muted
                loop
                playsInline
                preload={isVisible ? "metadata" : "none"}
              />
              {/* Gradient and texts overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
              <div
                className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-center transition-opacity w-full px-4 ${
                  isActive ? "opacity-100" : "opacity-80"
                }`}
              >
                <h3 className="text-white font-bold tracking-tight text-lg sm:text-xl drop-shadow-lg whitespace-nowrap">
                  {video.title}
                </h3>
                <button className="mt-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">
                  {video.cta}
                </button>
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

      {/* Navigation arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 flex-shrink-0 bg-white/70 backdrop-blur-sm shadow-2xl w-12 h-12 rounded-full hover:bg-gradient-to-r hover:from-cyan-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-125 cursor-pointer group border border-gray-200 z-30 items-center justify-center"
        aria-label="Previous"
      >
        <svg
          className="w-8 h-8 text-cyan-600 group-hover:text-purple-600 transition-colors duration-300"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 flex-shrink-0 bg-white/70 backdrop-blur-sm shadow-2xl w-12 h-12 rounded-full hover:bg-gradient-to-r hover:from-cyan-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-125 cursor-pointer group border border-gray-200 z-30 items-center justify-center"
        aria-label="Next"
      >
        <svg
          className="w-8 h-8 text-cyan-600 group-hover:text-purple-600 transition-colors duration-300"
          viewBox="0 0 24 24"
          style={{ transform: "scaleX(-1)" }}
        >
          <path
            fill="currentColor"
            d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z"
          />
        </svg>
      </button>

      {/* Mobile Navigation - Show on mobile only */}
      <div className="md:hidden flex justify-center items-center gap-4 mt-4">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-cyan-600 hover:bg-cyan-50 transition-all duration-300 disabled:opacity-50"
          aria-label="Previous video"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Pagination dots */}
        <div className="flex gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              disabled={isTransitioning}
              className={`h-2 rounded-full transition-all duration-300 ${
                index ===
                (activeIndex - BUFFER_SIZE + videos.length) % videos.length
                  ? "w-6 bg-gradient-to-r from-cyan-500 to-purple-500"
                  : "w-2 bg-white/50 hover:bg-gradient-to-r hover:from-cyan-400/70 hover:to-purple-400/70"
              } disabled:cursor-not-allowed`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-cyan-600 hover:bg-cyan-50 transition-all duration-300 disabled:opacity-50"
          aria-label="Next video"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Pagination dots - Hidden on mobile */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 space-x-2 z-40">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index ===
              (activeIndex - BUFFER_SIZE + videos.length) % videos.length
                ? "w-6 bg-gradient-to-r from-cyan-500 to-purple-500"
                : "w-2 bg-white/50 hover:bg-gradient-to-r hover:from-cyan-400/70 hover:to-purple-400/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

export default VideoSlider;
