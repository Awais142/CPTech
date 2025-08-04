import React, { useEffect, useRef } from "react";

const ProductHeading = () => {
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

    // Set initial styles and observe elements
    [titleRef.current, subtitleRef.current].forEach((ref) => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.transform = "translateY(30px)";
        ref.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(ref);
      }
    });

    return () => {
      [titleRef.current, subtitleRef.current].forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-12 bg-white/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-black mb-4"
        >
          Hayati® Quokka Lite
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-black font-normal"
        >
          Dare To Be Yourself
        </p>
      </div>
    </section>
  );
};

export default ProductHeading;
