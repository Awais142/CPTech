import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import img15k1 from "../assets/15K1.jpg";
import img15k2 from "../assets/15K2.jpg";
import img15k3 from "../assets/15K3.jpg";
import img25k1 from "../assets/25kTwis1.jpg";
import img25k2 from "../assets/25kTwist2.jpg";
import img25k3 from "../assets/25kTwist3.jpg";

const products = [
  {
    name: "CP® 15K ",
    image: img15k1,
    isNew: true,
  },
  {
    name: "CP® 15K 2",
    image: img15k2,
    isNew: true,
  },
  {
    name: "CP® 15K 3",
    image: img15k3,
    isNew: true,
  },
  {
    name: "CP® 25K Twist 1",
    image: img25k1,
    isNew: true,
  },
  {
    name: "CP® 25K Twist 2",
    image: img25k2,
    isNew: true,
  },
  {
    name: "CP® 25K Twist 3",
    image: img25k3,
    isNew: true,
  },
  {
    name: "CP® 15K ",
    image: img15k1,
    isNew: true,
  },
  {
    name: "CP® 15K 2",
    image: img15k2,
    isNew: true,
  },
  {
    name: "CP® 15K 3",
    image: img15k3,
    isNew: true,
  },
  {
    name: "CP® 25K Twist 1",
    image: img25k1,
    isNew: true,
  },
  {
    name: "CP® 25K Twist 2",
    image: img25k2,
    isNew: true,
  },
  {
    name: "CP® 25K Twist 3",
    image: img25k3,
    isNew: true,
  },
];

const ProductSlider = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (current) {
      // Calculate scroll amount based on card width plus gap
      const cardWidth = window.innerWidth >= 768 ? 340 : 240; // md breakpoint
      const gap = window.innerWidth >= 768 ? 32 : 24; // gap-8 = 32px, gap-6 = 24px
      const scrollAmount = cardWidth + gap;

      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full overflow-x-hidden py-20 bg-gradient-to-b from-gray-50 to-blue-50 min-h-[520px] md:min-h-[700px] flex flex-col justify-center">
      <div className="w-full md:max-w-[90%] xl:max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12 relative py-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-32 bg-gradient-to-r from-violet-200/20 via-cyan-200/20 to-violet-200/20 blur-3xl -z-10"></div>
          <div className="flex items-center gap-3 mb-2">
            <BsStars className="text-2xl md:text-3xl text-cyan-500 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-indigo-500 to-purple-600 relative tracking-wide leading-normal">
              CP TECH Products
            </h2>
            <BsStars className="text-2xl md:text-3xl text-cyan-500 animate-pulse" />
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full mb-4"></div>
          <button className="text-indigo-600 hover:text-purple-600 font-medium flex items-center gap-2 mx-auto group transition-all duration-300">
            Learn More{" "}
            <FaChevronRight className="inline-block group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        {/* Navigation Container with buttons outside */}
        <div className="relative flex items-center">
          {/* Left Arrow - Completely outside */}
          <button
            onClick={() => scroll("left")}
            className="flex-shrink-0 bg-white/95 backdrop-blur-sm shadow-2xl p-3 md:p-4 rounded-full hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-110 cursor-pointer group border border-gray-200 z-30 mr-4"
            aria-label="Scroll Left"
          >
            <FaChevronLeft className="text-lg md:text-xl text-cyan-600 group-hover:text-purple-600 transition-colors duration-300" />
          </button>

          {/* Product Cards Container */}
          <div className="flex-1 relative overflow-hidden">
            <div
              ref={sliderRef}
              className="product-slider-scrollbar flex gap-6 md:gap-8 overflow-x-auto scroll-smooth px-4 py-8 snap-x snap-mandatory"
              style={{
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="min-w-[200px] max-w-[240px] md:min-w-[300px] md:max-w-[340px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-4 md:p-8 flex flex-col items-center snap-center group relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex-shrink-0"
                >
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                      NEW
                    </span>
                  )}
                  <div className="relative w-full h-48 md:h-72 mb-6 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow - Completely outside */}
          <button
            onClick={() => scroll("right")}
            className="flex-shrink-0 bg-white/95 backdrop-blur-sm shadow-2xl p-3 md:p-4 rounded-full hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-110 cursor-pointer group border border-gray-200 z-30 ml-4"
            aria-label="Scroll Right"
          >
            <FaChevronRight className="text-lg md:text-xl text-cyan-600 group-hover:text-purple-600 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
