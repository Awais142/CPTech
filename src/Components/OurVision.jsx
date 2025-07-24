import React, { useRef, useEffect } from "react";

function OurVision() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
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
      id="our-vision"
      className="relative py-28 bg-gray-950 text-white px-6 md:px-16 overflow-hidden opacity-0 transition-opacity duration-1000 animate-fade-in-up"
    >
      {/* Decorative animated SVG blobs */}
      <svg className="absolute -top-16 left-10 w-48 h-48 opacity-30 animate-float-slow z-0" viewBox="0 0 200 200" fill="none">
        <path d="M54.8,-59.2C70.2,-49.7,80.2,-29.2,78.6,-10.6C77,8,63.7,24.6,50.4,38.9C37.2,53.2,24,65.1,7.9,67.6C-8.2,70.1,-27.3,63.2,-40.8,51.3C-54.3,39.4,-62.2,22.6,-63.3,6.1C-64.3,-10.5,-58.5,-26.7,-47.6,-36.9C-36.7,-47.1,-20.8,-51.4,-3.1,-50.1C14.7,-48.8,29.4,-41.8,54.8,-59.2Z" fill="#00f2aa"/>
      </svg>
      <svg className="absolute -top-10 left-1/4 w-36 h-36 opacity-20 animate-float-medium z-0" viewBox="0 0 200 200" fill="none">
        <ellipse cx="100" cy="100" rx="80" ry="50" fill="#eab308" />
      </svg>
      <svg className="absolute top-1/3 right-10 w-32 h-32 opacity-20 animate-float-fast z-0" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" fill="#f472b6" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-full h-24 opacity-10 z-0 animate-float-medium" viewBox="0 0 1440 320"><path fill="#14b8a6" fillOpacity="0.5" d="M0,224L80,218.7C160,213,320,203,480,208C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
          Our Vision
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
          At <span className="text-teal-400 font-semibold">Vapora</span>, we're redefining vaping culture with a focus on purity, experience, and bold innovation. Our goal is to provide a safe, stylish, and elevated journey for all adults who choose vapor over smoke.
        </p>
        <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          We envision a world where technology, taste, and responsibility blend seamlessly. Our commitment is to empower adults to make informed choices, foster a vibrant community, and champion sustainability in everything we do.
        </p>
        {/* Animated icons row */}
        <div className="flex justify-center gap-10 mt-8 mb-8 flex-wrap">
          <div className="flex flex-col items-center">
            {/* Purity: Water droplet icon */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="animate-float-slow">
              <ellipse cx="24" cy="30" rx="12" ry="10" fill="#14b8a6" opacity="0.18" />
              <path d="M24 8C24 8 16 22 16 28C16 34 24 40 24 40C24 40 32 34 32 28C32 22 24 8 24 8Z" stroke="#14b8a6" strokeWidth="2" fill="#14b8a6" fillOpacity="0.4"/>
            </svg>
            <span className="text-xs mt-2 text-teal-300">Purity</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Innovation: Light bulb icon */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="animate-float-fast">
              <circle cx="24" cy="24" r="20" fill="#eab308" opacity="0.12" />
              <path d="M24 14a8 8 0 0 1 8 8c0 3.5-2.5 6.5-4 8v3a2 2 0 0 1-4 0v-3c-1.5-1.5-4-4.5-4-8a8 8 0 0 1 8-8Z" stroke="#eab308" strokeWidth="2" fill="#eab308" fillOpacity="0.5"/>
              <line x1="24" y1="36" x2="24" y2="38" stroke="#eab308" strokeWidth="2"/>
            </svg>
            <span className="text-xs mt-2 text-yellow-400">Innovation</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Sustainability: Leaf icon */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="animate-float-medium">
              <ellipse cx="24" cy="24" rx="20" ry="12" fill="#22d3ee" opacity="0.14" />
              <path d="M12 36C20 20 36 12 36 12C36 12 28 28 12 36Z" stroke="#22d3ee" strokeWidth="2" fill="#22d3ee" fillOpacity="0.5"/>
            </svg>
            <span className="text-xs mt-2 text-cyan-300">Sustainability</span>
          </div>
          <div className="flex flex-col items-center">
            {/* Community: People icon */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="animate-float-slow">
              <ellipse cx="24" cy="24" rx="20" ry="12" fill="#f472b6" opacity="0.13" />
              <circle cx="24" cy="20" r="4" stroke="#f472b6" strokeWidth="2" fill="#f472b6" fillOpacity="0.6"/>
              <circle cx="16" cy="26" r="3" stroke="#f472b6" strokeWidth="1.5" fill="#f472b6" fillOpacity="0.4"/>
              <circle cx="32" cy="26" r="3" stroke="#f472b6" strokeWidth="1.5" fill="#f472b6" fillOpacity="0.4"/>
            </svg>
            <span className="text-xs mt-2 text-pink-300">Community</span>
          </div>
        </div>
        <button className="mt-4 px-8 py-3 bg-teal-500 hover:bg-teal-600 transition rounded-full text-white font-semibold shadow-md">
          Join the Movement
        </button>
      </div>
    </section>
  );
}

export default OurVision;
