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
      className="relative bg-gradient-to-b from-zinc-950 to-black py-24 px-6 text-white opacity-0 transition-opacity duration-1000 animate-fade-in-up overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-7">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
            Who We Are
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            At <span className="text-teal-400 font-semibold">Hayati Vapor</span>
            , we’re more than just vapor — we’re a lifestyle. Our journey began
            with a passion to redefine vaping culture by blending design,
            innovation, and flavor into a bold identity.
          </p>
          <p className="text-gray-400">
            From our high-performance disposables to our sustainable design
            philosophy, we believe vaping should be smooth, stylish, and
            satisfying. Our mission? Simple — to elevate your experience.
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-teal-300">
              We innovate, we care, we connect.
            </span>{" "}
            Our community is at the heart of everything we do, and we’re
            committed to providing the safest, most enjoyable vaping journey
            possible.
          </p>
          <button className="mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-600 transition rounded-full text-white font-semibold shadow-md">
            Learn More
          </button>
        </div>
        {/* Right Side - Animated SVG Smoke Effect */}
        <div className="md:w-1/2 flex justify-center items-center relative min-h-[320px] w-full">
          <svg viewBox="0 0 400 400" width="340" height="340" className="z-10">
            <defs>
              <linearGradient id="smoke1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="smoke2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f3f4f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* First smoke wisp */}
            <path fill="url(#smoke1)">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M60,320 Q120,200 200,320 T340,320 V400 H60Z;
                        M80,320 Q140,180 220,320 T360,320 V400 H80Z;
                        M60,320 Q120,200 200,320 T340,320 V400 H60Z"
              />
              <animate
                attributeName="opacity"
                values="0.7;0.4;0.7"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>
            {/* Second smoke wisp */}
            <path fill="url(#smoke2)" opacity="0.5">
              <animate
                attributeName="d"
                dur="14s"
                repeatCount="indefinite"
                values="M120,340 Q180,240 260,340 T380,340 V400 H120Z;
                        M140,340 Q200,220 280,340 T400,340 V400 H140Z;
                        M120,340 Q180,240 260,340 T380,340 V400 H120Z"
              />
              <animate
                attributeName="opacity"
                values="0.5;0.2;0.5"
                dur="14s"
                repeatCount="indefinite"
              />
            </path>
            {/* Third smoke wisp, smaller and higher */}
            <path fill="url(#smoke1)" opacity="0.3">
              <animate
                attributeName="d"
                dur="12s"
                repeatCount="indefinite"
                values="M180,260 Q200,180 240,260 T320,260 V400 H180Z;
                        M200,260 Q220,160 260,260 T340,260 V400 H200Z;
                        M180,260 Q200,180 240,260 T320,260 V400 H180Z"
              />
              <animate
                attributeName="opacity"
                values="0.3;0.1;0.3"
                dur="12s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
