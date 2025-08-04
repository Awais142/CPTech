import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import color images
import blackImage from "../../assets/product-images/first-product-images/colors/black.png";
import whiteImage from "../../assets/product-images/first-product-images/colors/white.png";
import orangeImage from "../../assets/product-images/first-product-images/colors/orange.png";
import purpleImage from "../../assets/product-images/first-product-images/colors/purple.png";
import cyanImage from "../../assets/product-images/first-product-images/colors/cyan.png";
import skyImage from "../../assets/product-images/first-product-images/colors/sky.png";

const ProductColorSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const colors = [
    { name: "Black", image: blackImage, color: "bg-black" },
    { name: "White", image: whiteImage, color: "bg-white" },
    { name: "Orange", image: orangeImage, color: "bg-orange-500" },
    { name: "Purple", image: purpleImage, color: "bg-purple-500" },
    { name: "Cyan", image: cyanImage, color: "bg-cyan-500" },
    { name: "Sky", image: skyImage, color: "bg-sky-500" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % colors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + colors.length) % colors.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const titleRef = document.querySelector(".color-slider-title");
    if (titleRef) {
      titleRef.style.opacity = "0";
      titleRef.style.transform = "translateY(30px)";
      titleRef.style.transition =
        "opacity 0.8s ease-out, transform 0.8s ease-out";
      observer.observe(titleRef);
    }

    return () => {
      if (titleRef) observer.unobserve(titleRef);
    };
  }, []);

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12 color-slider-title">
          Lite Version-Bursting with Energy
        </h2>

        {/* Product Display */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-200/80 hover:bg-gray-300 rounded-full p-3 shadow-lg transition-all duration-300"
            aria-label="Previous color"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-200/80 hover:bg-gray-300 rounded-full p-3 shadow-lg transition-all duration-300"
            aria-label="Next color"
          >
            <FaChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Product Images Container */}
          <div className="relative overflow-hidden rounded-2xl h-[600px] md:h-[700px] bg-transparent">
            <div
              ref={containerRef}
              className="flex h-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transitionDuration: "0ms",
              }}
            >
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center items-center p-4 md:p-8 h-full"
                >
                  {/* Single device image */}
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={color.image}
                      alt={`${color.name} Quokka Lite`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Color Swatches - Absolute positioned at bottom */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30">
              <div className="bg-gray-200/80 backdrop-blur-sm rounded-full px-6 py-3 flex gap-3 items-center shadow-lg">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                      currentIndex === index
                        ? "border-black scale-110"
                        : "border-gray-300 hover:border-gray-500"
                    } ${color.color}`}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductColorSlider;
