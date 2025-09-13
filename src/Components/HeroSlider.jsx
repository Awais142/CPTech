import React, { useState, useEffect } from "react";
import mobile15K from "../assets/images/Banner Images/THE CP 15K Mobile Banner.webp";
import desktop15K from "../assets/images/Banner Images/THE CP 15K Web Banner.webp";
import mobileTwist from "../assets/images/Banner Images/THE CP TWIST Mobile Banner.webp";
import desktopTwist from "../assets/images/Banner Images/THE CP TWIST Web Banner.webp";

const slides = [
  { 
    mobile: mobile15K, 
    desktop: desktop15K, 
    alt: "THE CP 15K Banner" 
  },
  { 
    mobile: mobileTwist, 
    desktop: desktopTwist, 
    alt: "THE CP TWIST Banner" 
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Image background layer with fade animation */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Mobile image */}
          <img
            src={slide.mobile}
            alt={slide.alt}
            className="md:hidden w-full h-full object-cover"
          />
          {/* Desktop image */}
          <img
            src={slide.desktop}
            alt={slide.alt}
            className="hidden md:block w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Text + CTA
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 text-white z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          New Chapter <br /> New Classic
        </h1>
        <p className="text-2xl md:text-3xl font-medium drop-shadow-sm">
          CP Tech Pro Max+
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-bold rounded-full shadow hover:bg-blue-100 transition">
          Learn More
        </button>
      </div> */}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex-shrink-0 bg-white/70 backdrop-blur-sm shadow-2xl w-12 h-12 rounded-full hover:bg-gradient-to-r hover:from-cyan-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-125 cursor-pointer group border border-gray-200 z-30 flex items-center justify-center"
        aria-label="Previous"
      >
        <svg className="w-8 h-8. text-cyan-600 group-hover:text-purple-600 transition-colors duration-300" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z"/>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex-shrink-0 bg-white/70 backdrop-blur-sm shadow-2xl w-12 h-12 rounded-full hover:bg-gradient-to-r hover:from-cyan-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-125 cursor-pointer group border border-gray-200 z-30 flex items-center justify-center"
        aria-label="Next"
      >
        <svg className="w-8 h-8 text-cyan-600 group-hover:text-purple-600 transition-colors duration-300" viewBox="0 0 24 24" style={{transform: 'scaleX(-1)'}}>
          <path fill="currentColor" d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z"/>
        </svg>
      </button>

      {/* Pagination dots with gradient */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === idx 
                ? "w-6 bg-gradient-to-r from-cyan-500 to-purple-500" 
                : "w-2 bg-white/50 hover:bg-gradient-to-r hover:from-cyan-400/70 hover:to-purple-400/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
