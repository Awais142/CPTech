"use client";

import { useEffect, useState, useRef } from "react";

import brandVideo from "../assets/brand_video.mp4";

export default function MultiStageHero({
  heading = "CP TECH",
  videoSrc = brandVideo, // Properly imported video
  posterSrc = "/generic-video-poster.png",
  texts = [
    "CP Tech International premium vape",
    "engineering, iconic design, and",
    "flavours tuned for every market",
  ],
  linkHref = "/about",
  linkText = "VIEW MORE",
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const containerHeight = containerRef.current.offsetHeight;

        const scrolled = Math.max(0, -rect.top);
        const maxScroll = containerHeight - windowHeight;
        const progress = maxScroll > 0 ? Math.min(1, scrolled / maxScroll) : 0;

        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stage logic
  const showHeading = scrollProgress < 0.5;
  const showVideo = scrollProgress >= 0.3;
  const showText = scrollProgress >= 0.55;

  // Heading calculations
  const headingScale = 1 + (scrollProgress / 0.3) * 6;
  const headingOpacity =
    scrollProgress < 0.4 ? 1 : Math.max(0, 1 - (scrollProgress - 0.4) / 0.1);

  // Video calculations
  const videoOpacity =
    scrollProgress > 0.3 ? Math.min(1, (scrollProgress - 0.3) / 0.2) : 0;

  // Text calculations
  const textContainerOpacity = showText ? 1 : 0;

  const getTextOpacity = (index) => {
    if (scrollProgress < 0.55) return 0;

    const baseOpacity = 0.5;
    const activeOpacity = 1;
    const lineScrollDuration = 0.1;
    const lineFadeOutDuration = 0.1;

    const textSectionStart = 0.6;
    const lineActiveStart = textSectionStart + index * lineScrollDuration;

    const currentLineProgress =
      (scrollProgress - lineActiveStart) / lineScrollDuration;

    if (scrollProgress < lineActiveStart) {
      return baseOpacity;
    } else if (currentLineProgress >= 0 && currentLineProgress < 1) {
      return baseOpacity + (activeOpacity - baseOpacity) * currentLineProgress;
    } else {
      const fadeOutProgress =
        (scrollProgress - (lineActiveStart + lineScrollDuration)) /
        lineFadeOutDuration;
      return Math.max(
        baseOpacity,
        activeOpacity - (activeOpacity - baseOpacity) * fadeOutProgress
      );
    }
  };

  const handleVideoCanPlayThrough = () => {
    console.log("Video can play through! It should be visible now.");
  };

  const handleVideoError = (e) => {
    console.error("Video loading error:", e);
    console.error("Video source:", videoSrc);
    console.error("Error code:", e.target.error.code);
    console.error("Error message:", e.target.error.message);
  };

  return (
    <section
      className="relative w-full bg-black"
      style={{ height: "300vh" }}
      ref={containerRef}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Stage 1: Heading with video-in-text effect */}
        <div
          className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-500 heading-mask-container"
          style={{
            opacity: showHeading ? 1 : 0,
            pointerEvents: showHeading ? "auto" : "none",
            background: "#fff",
          }}
        >
          <div
            className="blend-hero-section"
            style={{
              position: "relative",
              width: "100vw",
              height: "100vh",
              background: "#fff",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={posterSrc}
              className="blend-hero-video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
              }}
              src={videoSrc}
            />
            <h1
              className="blend-hero-heading"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                margin: 0,
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: `20vw`,
                lineHeight: "100vh",
                textTransform: "uppercase",
                textAlign: "center",
                background: "#fff",
                mixBlendMode: "screen",
                zIndex: 2,
                transform: `scale(${headingScale})`,
                opacity: headingOpacity,
                pointerEvents: "none",
                userSelect: "none",
                letterSpacing: "-0.05em",
              }}
            >
              {heading}
            </h1>
            <style jsx>{`
              @import url("https://fonts.googleapis.com/css?family=Montserrat:800&display=swap");
              .blend-hero-section {
                background: #fff;
                width: 100vw;
                height: 100vh;
                overflow: hidden;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .blend-hero-video {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: 1;
              }
              .blend-hero-heading {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                margin: 0;
                font-family: "Montserrat", sans-serif !important;
                font-weight: 800 !important;
                font-size: 20vw;
                line-height: 100vh;
                text-transform: uppercase;
                text-align: center;
                background: #fff;
                mix-blend-mode: screen;
                z-index: 2;
                pointer-events: none;
                user-select: none;
                letter-spacing: -0.05em;
                transition: transform 0.3s, opacity 0.3s;
              }
              @media (max-width: 1024px) {
                .blend-hero-heading {
                  font-size: 13vw;
                }
              }
              @media (max-width: 768px) {
                .blend-hero-heading {
                  font-size: 16vw;
                }
              }
              @media (max-width: 480px) {
                .blend-hero-heading {
                  font-size: 20vw;
                }
              }
            `}</style>
          </div>
        </div>

        {/* Stage 2: Video Background */}
        <div
          className="absolute inset-0 z-20 transition-opacity duration-1000"
          style={{
            opacity: videoOpacity,
            pointerEvents: showVideo ? "auto" : "none",
          }}
        >
          {/* Temporarily removed gradient and overlay to isolate video */}
          <video
            className="absolute inset-0 w-full h-full object-cover bg-red-500" // Added red background for debugging
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
            poster={posterSrc}
            onCanPlayThrough={handleVideoCanPlayThrough}
            onError={handleVideoError}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Stage 3: Text Over Video */}
        <div
          className="absolute inset-0 flex items-center justify-center z-40 transition-opacity duration-1000"
          style={{
            opacity: textContainerOpacity,
            pointerEvents: showText ? "auto" : "none",
          }}
        >
          <div className="max-w-5xl mx-auto px-8 text-center">
            <div className="space-y-2">
              <p
                className="hero-text-paragraph"
                style={{
                  opacity: getTextOpacity(0),
                }}
              >
                <span className="hero-text-bold">CP Tech</span> International—
                <br />
                premium vape
              </p>
              <p
                className="hero-text-paragraph"
                style={{
                  opacity: getTextOpacity(1),
                }}
              >
                engineering, iconic design, and
              </p>
              <p
                className="hero-text-paragraph"
                style={{
                  opacity: getTextOpacity(2),
                }}
              >
                flavours tuned for{" "}
                <span className="hero-text-bold">every market</span>
              </p>
              <div className="pt-8">
                <a
                  href={linkHref}
                  className="inline-block px-8 py-3 text-white text-lg font-medium tracking-wider border border-white/50 hover:bg-white hover:text-black transition-all duration-300 ease-out backdrop-blur-sm"
                  style={{
                    opacity: scrollProgress > 0.85 ? 1 : 0,
                  }}
                >
                  {linkText}
                </a>
              </div>
            </div>
          </div>
          <style jsx>{`
            .hero-text-paragraph {
              font-family: "Montserrat", sans-serif !important;
              font-weight: 600 !important;
              color: #fff;
              margin: 0;
              line-height: 1.1;
              text-align: left;
              font-size: 6vw;
              letter-spacing: -0.5px;
            }
            .hero-text-bold {
              font-weight: 600 !important;
              font-family: "Montserrat", sans-serif !important;
              letter-spacing: -0.5px;
            }
            @media (min-width: 1280px) {
              .hero-text-paragraph {
                font-size: 58.34px;
                text-align: left;
              }
            }
            @media (max-width: 1024px) {
              .hero-text-paragraph {
                font-size: 6vw;
                text-align: left;
              }
            }
            @media (max-width: 768px) {
              .hero-text-paragraph {
                font-size: 7vw;
                text-align: left;
              }
            }
            @media (max-width: 480px) {
              .hero-text-paragraph {
                font-size: 8vw;
                text-align: left;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
