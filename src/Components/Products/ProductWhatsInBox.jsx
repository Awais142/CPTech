import React, { useEffect, useRef } from "react";

// Import image
import whatsInBoxImage from "../../assets/product-images/first-product-images/whatinthebox.png";

const ProductWhatsInBox = () => {
  const titleRef = useRef(null);
  const listRef = useRef(null);

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

    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(30px)";
      titleRef.current.style.transition =
        "opacity 0.8s ease-out, transform 0.8s ease-out";
      observer.observe(titleRef.current);
    }

    if (listRef.current) {
      listRef.current.style.opacity = "0";
      listRef.current.style.transform = "translateY(30px)";
      listRef.current.style.transition =
        "opacity 0.8s ease-out, transform 0.8s ease-out";
      observer.observe(listRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (listRef.current) observer.unobserve(listRef.current);
    };
  }, []);

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-black mb-4"
          >
            Hayati® Quokka Packing List
          </h2>
        </div>

        {/* Content - Image on left, text on right */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={whatsInBoxImage}
              alt="What's in the Box - Hayati Quokka Lite"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full lg:w-1/2">
            <div ref={listRef} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                Hayati® Quokka Lite (TPD)
              </h3>

              <ul className="space-y-4 text-lg md:text-xl text-gray-800">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>1 x Hayati® Quokka Lite Device 1100 mAh</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>1 x Hayati® Quokka Refillable Pod (0.8 Ω)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>1 x User Manual</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <span>1 x Exquisite Card</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductWhatsInBox;
