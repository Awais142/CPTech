import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const ValuesSection = () => {
  const sectionRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const thirdImageRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  // Use window scroll for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  
  // Check if section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1, 0.5, 0.9, 1]
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.target === sectionRef.current) {
          setIsInView(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Parallax effect - Y position animation - subtle parallax effect
  const taglineY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100]
  );

  // No scale animation - keep text readable

  // Image opacity animations based on scroll progress
  const firstImageOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.35, 0.4],
    [0, 1, 1, 0]
  );
  
  const secondImageOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.55, 0.6],
    [0, 1, 1, 0]
  );
  
  const thirdImageOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.75, 0.8],
    [0, 1, 1, 0]
  );

  // Image Y position animations
  const firstImageY = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.35, 0.4],
    [50, 0, 0, -50]
  );
  
  const secondImageY = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.55, 0.6],
    [50, 0, 0, -50]
  );
  
  const thirdImageY = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.75, 0.8],
    [50, 0, 0, -50]
  );
  // Assets
  const enjoyImg =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
  const reliableImg =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";;
  const experienceImg =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
  ;

  // Values section data
  const values = [
    {
      title: "ENJOY",
      description:
        "At CP Tech, we see life as a beautiful journey to be savored and enjoyed. That's why we believe that our products are not just tools, but an innovative lifestyle that brings joy, inspiration and empowerment.",
      image: enjoyImg,
    },
    {
      title: "RELIABLE",
      description:
        "We prioritize users in everything we do. With a user-driven philosophy and innovative R&D, we are committed to providing products of both high quality and great performance.",
      image: reliableImg,
    },
    {
      title: "EXPERIENCE",
      description:
        "We present users with a distinct experience, sharing an interactive and companionable journey. With CP Tech, embrace a brand new lifestyle and unlock new levels of imagination.",
      image: experienceImg,
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="min-h-[400vh] bg-white relative"
      style={{
        position: 'relative',
      }}
    >
      {/* Fixed background tagline - only visible when ValuesSection is in view */}
      <motion.div
        style={{
          opacity: isInView ? 1 : 0, // 100% opacity
          y: taglineY,
        }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-0" // Lower z-index
      >
        <div className="text-center px-4">
          <p className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text" >
            CP Your Life,
          </p>
          <p className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
            Live It Right.
          </p>
        </div>
      </motion.div>
      
      {/* Content overlay with progressive images */}
      <div className="relative z-10 min-h-[400vh]">
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Left side - First Image (ENJOY) */}
            <div className="flex items-center justify-center">
              <motion.div
                ref={firstImageRef}
                style={{
                  opacity: firstImageOpacity,
                  y: firstImageY,
                }}
                className="relative w-full h-96 md:h-[600px] rounded-xl overflow-hidden group z-100" // Higher z-index
              >
                <img
                  src={values[0].image}
                  alt={values[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-4">
                      {values[0].title}
                    </h3>
                    <p className="text-gray-200">{values[0].description}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white text-4xl font-bold">
                  {values[0].title}
                </div>
              </motion.div>
            </div>

            {/* Right side - Second and Third Images */}
            <div className="space-y-8 flex flex-col justify-center">
              {/* Second Image (RELIABLE) */}
              <motion.div
                ref={secondImageRef}
                style={{
                  opacity: secondImageOpacity,
                  y: secondImageY,
                }}
                className="relative h-48 md:h-[290px] rounded-xl overflow-hidden group z-100" // Higher z-index
              >
                <img
                  src={values[1].image}
                  alt={values[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {values[1].title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {values[1].description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-white text-2xl font-bold">
                  {values[1].title}
                </div>
              </motion.div>

              {/* Third Image (EXPERIENCE) */}
              <motion.div
                ref={thirdImageRef}
                style={{
                  opacity: thirdImageOpacity,
                  y: thirdImageY,
                }}
                className="relative h-48 md:h-[290px] rounded-xl overflow-hidden group z-20" // Higher z-index
              >
                <img
                  src={values[2].image}
                  alt={values[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {values[2].title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {values[2].description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-white text-2xl font-bold">
                  {values[2].title}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
