import React, { useState, useEffect } from "react";
import img1 from "../assets/banner1.png";
import img2 from "../assets/banner2.png";
import img3 from "../assets/banner3.png";

const images = [
  { url: img1, alt: "Teamwork meeting" },
  { url: img2, alt: "Modern workspace" },
  { url: img3, alt: "Creative brainstorming" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Image background layer with fade animation */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img.url}
            alt={img.alt}
            className="w-full h-full object-cover"
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
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full z-30 cursor-pointer"
        aria-label="Previous"
      >
        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full z-30 cursor-pointer"
        aria-label="Next"
      >
        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
              current === idx ? "bg-blue-500 border-blue-500" : "bg-white/50 border-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
