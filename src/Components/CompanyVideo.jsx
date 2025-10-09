import React, { useRef, useState, useEffect, memo, useCallback } from "react";
import videoSrc from "../assets/companyvideo.mp4";

const CompanyVideo = memo(() => {
  const videoRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) {
      document.addEventListener("keydown", handleEsc);
    } else {
      document.removeEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [modalOpen]);

  return (
    <section className="w-full bg-black">
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background video - landscape, covers area, high quality */}
        <video
          ref={videoRef}
          src={isVisible ? videoSrc : undefined}
          className="w-full h-full object-cover brightness-90"
          autoPlay={isVisible}
          loop
          muted
          playsInline
          preload={isVisible ? "auto" : "none"}
          style={{ filter: "contrast(1.1) saturate(1.1)" }}
        />
        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-end justify-center pb-10 pointer-events-none">
          <button
            className="pointer-events-auto px-8 py-3 bg-purple-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-800 transition-all duration-200 flex items-center gap-2"
            onClick={() => setModalOpen(true)}
            style={{ zIndex: 2 }}
          >
            WATCH VIDEO
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25m0 0A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25v13.5A2.25 2.25 0 0010.5 21h3a2.25 2.25 0 002.25-2.25V15"
              />
            </svg>
          </button>
        </div>
        {/* Modal */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalOpen(false);
            }}
          >
            <div className="relative max-w-[400px] w-[90vw] aspect-[9/16] bg-black rounded-xl shadow-2xl flex items-center justify-center">
              <video
                src={videoSrc}
                className="w-full h-full object-contain rounded-xl"
                controls
                autoPlay
                playsInline
                preload="auto"
                style={{ background: "#000" }}
              />
              <button
                className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black/90 rounded-full w-10 h-10 flex items-center justify-center z-10"
                onClick={() => setModalOpen(false)}
                aria-label="Close video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

export default CompanyVideo;
