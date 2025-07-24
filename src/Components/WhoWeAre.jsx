import React, { useRef, useEffect } from "react";

const WhoWeAre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
        }
      },
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-zinc-950 to-black py-24 px-6 text-white opacity-0 transition-opacity duration-1000 animate-fade-in-up"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-7">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
            Who We Are
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            At <span className="text-teal-400 font-semibold">Hayati Vapor</span>, we’re more than just vapor —
            we’re a lifestyle. Our journey began with a passion to redefine
            vaping culture by blending design, innovation, and flavor into a
            bold identity.
          </p>
          <p className="text-gray-400">
            From our high-performance disposables to our sustainable design
            philosophy, we believe vaping should be smooth, stylish, and
            satisfying. Our mission? Simple — to elevate your experience.
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-teal-300">We innovate, we care, we connect.</span> Our community is at the heart of everything we do, and we’re committed to providing the safest, most enjoyable vaping journey possible.
          </p>
          <div className="flex gap-6 mt-6">
            <div className="flex flex-col items-center">
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36" className="animate-float-slow">
                <circle cx="18" cy="18" r="16" fill="#14b8a6" opacity="0.15" />
                <path d="M12 24c0-4 6-4 6-8s-6-4-6-8" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-xs mt-2 text-teal-300">Smooth Vapor</span>
            </div>
            <div className="flex flex-col items-center">
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36" className="animate-float-fast">
                <rect x="8" y="8" width="20" height="20" rx="6" fill="#eab308" opacity="0.18" />
                <path d="M18 12v8l4 2" stroke="#eab308" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-xs mt-2 text-yellow-400">Innovation</span>
            </div>
            <div className="flex flex-col items-center">
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36" className="animate-float-medium">
                <ellipse cx="18" cy="18" rx="16" ry="10" fill="#22d3ee" opacity="0.14" />
                <path d="M12 18h12M18 12v12" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-xs mt-2 text-cyan-300">Sustainability</span>
            </div>
            <div className="flex flex-col items-center">
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36" className="animate-float-slow">
                <circle cx="18" cy="18" r="16" fill="#f472b6" opacity="0.13" />
                <path d="M12 18l6 6 6-6" stroke="#f472b6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-xs mt-2 text-pink-300">Community</span>
            </div>
          </div>
          <button className="mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-600 transition rounded-full text-white font-semibold shadow-md">
            Learn More
          </button>
        </div>
        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          <img
            src="https://images.unsplash.com/photo-1609172328739-d2a5c67a0e92"
            alt="Vape product"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out z-10"
          />
          {/* Animated SVG background */}
          <svg className="absolute -top-10 -right-10 w-32 h-32 opacity-30 animate-spin-slow" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="#14b8a6" strokeWidth="6" strokeDasharray="8 12" />
          </svg>
        </div>
      </div>
      {/* Decorative SVG at the bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-16 md:h-24 opacity-20" viewBox="0 0 1440 320"><path fill="#14b8a6" fillOpacity="0.3" d="M0,224L80,218.7C160,213,320,203,480,208C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </section>
  );
};

export default WhoWeAre;
