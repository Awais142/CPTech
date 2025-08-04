import React, { useEffect, useRef } from "react";

// Import images
import biggerBatteryWeb from "../../assets/product-images/first-product-images/BiggerBatteryWeb.jpg";
import biggerBatteryMobile from "../../assets/product-images/first-product-images/BiggerBatteryMobile.jpg";

const ProductBiggerBattery = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

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

    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = "0";
      subtitleRef.current.style.transform = "translateY(30px)";
      subtitleRef.current.style.transition =
        "opacity 0.8s ease-out, transform 0.8s ease-out";
      observer.observe(subtitleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
    };
  }, []);

  return (
    <section className="py-20 bg-transparent">
      {/* Desktop Version - Full Width */}
      <div className="hidden md:block relative w-full">
        <img
          src={biggerBatteryWeb}
          alt="1100mAh Large Battery - Desktop"
          className="w-full h-auto object-cover"
        />
        {/* Absolute positioned text for desktop */}
        <div className="absolute top-72 left-16 transform -translate-y-1/2 z-10">
          <h2 ref={titleRef} className="text-4xl font-bold text-black mb-2">
            1100mAh Large Battery
          </h2>
          <p ref={subtitleRef} className="text-xl text-black font-normal">
            No Battery Anxiety
          </p>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden relative w-full">
        <img
          src={biggerBatteryMobile}
          alt="1100mAh Large Battery - Mobile"
          className="w-full h-auto object-cover"
        />
        {/* Absolute positioned text for mobile */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
          <h2 ref={titleRef} className="text-2xl font-bold text-black mb-2">
            1100mAh Large Battery
          </h2>
          <p ref={subtitleRef} className="text-lg text-black font-normal">
            No Battery Anxiety
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductBiggerBattery;
