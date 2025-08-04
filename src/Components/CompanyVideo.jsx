import React, { useRef, useState } from "react";
import videoSrc from "../assets/companyvideo.mp4";

const CompanyVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // Handle mouse movement over video area
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Play or pause video
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Show/hide play button on hover
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="w-full bg-black flex justify-center items-center py-0 md:py-10">
      <div
        className="relative w-full aspect-video overflow-hidden group"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isHovering ? "none" : "auto" }}
      >
        {/* Blurred background video for portrait effect */}
        <video
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover object-center blur-lg scale-110 z-0"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          tabIndex={-1}
        />
        {/* Main video, portrait, centered and covered */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="relative z-10 w-full h-full object-cover object-center rounded-xl shadow-xl"
          controls={false}
        />
        {/* Animated Play/Pause Button Follows Cursor */}
        {isHovering && (
          <button
            className="absolute z-20 w-20 h-20 bg-white/90 text-blue-700 font-bold text-lg rounded-full flex items-center justify-center shadow-lg border-4 border-blue-600 animate-fade-in-up hover:scale-110 transition-transform duration-200 select-none"
            style={{
              left: cursor.x,
              top: cursor.y,
              transform: "translate(-50%, -50%)",
              pointerEvents: "auto",
            }}
            onClick={handlePlayPause}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        )}
        {/* Overlay to capture click events for play/pause */}
        <div
          className="absolute inset-0 z-10 cursor-none"
          onClick={handlePlayPause}
          style={{ background: "transparent" }}
        />
      </div>
    </section>
  );
};

export default CompanyVideo;
