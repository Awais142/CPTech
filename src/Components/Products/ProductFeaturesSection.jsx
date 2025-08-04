import React, { useEffect, useRef } from "react";

// Import local images
import featureImage1Web from "../../assets/product-images/first-product-images/featuresctionimage-1web.jpg";
import featureImage1Mobile from "../../assets/product-images/first-product-images/featuresctionimage-1mobile.jpg";
import featureImage2Web from "../../assets/product-images/first-product-images/featuresctionimage-2web.jpg";
import featureImage2Mobile from "../../assets/product-images/first-product-images/featuresctionimage-2mobile.jpg";
import featureImage3Web from "../../assets/product-images/first-product-images/featuresctionimage-3web.jpg";
import featureImage3Mobile from "../../assets/product-images/first-product-images/featuresctionimage-3mobile.jpg";

const ProductFeaturesSection = () => {
  const textRefs = useRef([]);

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

    textRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.transform = "translateY(30px)";
        ref.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(ref);
      }
    });

    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="lg:max-w-[1920px] mx-auto lg:px-[120px] px-[14px] lg:pt-[69px] py-[40px] lg:pb-[110px] flex justify-between lg:gap-[30px] gap-[10px] [&>*]:object-cover flex-wrap lg:flex-nowrap [&>*]:lg:rounded-[20px] [&>*]:rounded-[8px] [&>*]:overflow-hidden [&>*]:h-full [&>*]:transition-['width'] [&>*]:duration-500 [&>*]:text-center leading-[1.28]">
      {/* First Feature Card */}
      <div className="aspect-[1.735] lg:aspect-[1.285714] w-full lg:flex-1 bg-gray-300 relative">
        <div className="w-full absolute lg:top-0 left-0 xxl:px-[40px] xxl:pt-[36px] lg:px-[20px] lg:pt-[20px] pt-[20px] px-[14px] pb-[14px] transition-opacity duration-300">
          <h2
            ref={(el) => (textRefs.current[0] = el)}
            className="lg:text-[22px] text-white xxl:text-[28px] text-[16px] font-[700] scroll-animation-text animated"
          >
            Unique Hayati® Quokka RGB Indicator Light
          </h2>
        </div>
        <picture>
          <source srcSet={featureImage1Web} media="(min-width: 1024px)" />
          <img
            src={featureImage1Mobile}
            alt="RGB Indicator Light"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Second Feature Card */}
      <div className="aspect-[0.768181] lg:aspect-[1.285714] w-[calc(50%-5px)] lg:flex-1 bg-gray-300 relative">
        <div className="w-full absolute lg:top-0 left-0 xxl:px-[40px] xxl:pt-[36px] lg:px-[20px] lg:pt-[20px] pt-[20px] px-[14px] pb-[14px] transition-opacity duration-300">
          <div
            ref={(el) => (textRefs.current[1] = el)}
            className="lg:text-[22px] text-white xxl:text-[28px] text-[16px] font-[700] scroll-animation-text animated"
          >
            Adjustable Airflow for Personalized Experience
          </div>
        </div>
        <picture>
          <source srcSet={featureImage2Web} media="(min-width: 1024px)" />
          <img
            src={featureImage2Mobile}
            alt="Adjustable Airflow"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Third Feature Card */}
      <div className="aspect-[0.768181] lg:aspect-[1.285714] w-[calc(50%-5px)] lg:flex-1 bg-gray-300 relative">
        <div className="w-full absolute lg:top-0 left-0 xxl:px-[40px] xxl:pt-[36px] lg:px-[20px] lg:pt-[20px] pt-[20px] px-[14px] pb-[14px] transition-opacity duration-300">
          <div
            ref={(el) => (textRefs.current[2] = el)}
            className="lg:text-[22px] text-white xxl:text-[28px] text-[16px] font-[700] scroll-animation-text animated"
          >
            1100mAh Large Battery
          </div>
        </div>
        <picture>
          <source srcSet={featureImage3Web} media="(min-width: 1024px)" />
          <img
            src={featureImage3Mobile}
            alt="Large Battery"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
    </section>
  );
};

export default ProductFeaturesSection;
