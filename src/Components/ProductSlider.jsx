import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
      const scrollAmount = current.offsetWidth * 0.7;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full overflow-x-hidden py-16 bg-gray-50 min-h-[520px] md:min-h-[600px] flex flex-col justify-center">
      <div className="w-full md:max-w-6xl mx-auto px-2 md:px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
            Hayati® Products
          </h2>
          <button className="text-blue-600 hover:underline font-medium flex items-center gap-1 mx-auto">
            Learn More <FaChevronRight className="inline-block" />
          </button>
        </div>
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-blue-100 transition hidden md:block"
            aria-label="Scroll Left"
          >
            <FaChevronLeft className="text-2xl text-blue-600" />
          </button>

          {/* Product Cards */}
          <div
            ref={sliderRef}
            className="product-slider-scrollbar flex gap-4 md:gap-6 overflow-x-auto scroll-smooth px-2 md:px-8 py-4 snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {products.map((product, idx) => (
              <div
                key={idx}
                className="min-w-[170px] max-w-[200px] md:min-w-[280px] md:max-w-[320px] bg-white rounded-2xl shadow-lg p-3 md:p-7 flex flex-col items-center snap-center group relative hover:scale-105 transition-transform duration-300"
              >
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-fade-in-up">
                    NEW
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-40 md:w-44 md:h-64 object-contain mb-4 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-base md:text-lg font-semibold text-gray-800 text-center mb-2">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-blue-100 transition hidden md:block"
            aria-label="Scroll Right"
          >
            <FaChevronRight className="text-2xl text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
