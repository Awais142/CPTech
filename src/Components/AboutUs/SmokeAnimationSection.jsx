import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const SmokeAnimationSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Update Framer Motion's scroll values
    lenis.on("scroll", ({ scroll }) => {
      window.scrollY = scroll;
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smokeTexts = [
    {
      text: "Breathe In Innovation",
      className:
        "text-[56px] md:text-[96px] font-bold mb-12 tracking-tight drop-shadow-2xl max-w-[1000px] mx-auto",
    },
    {
      text: "CP Tech creates moments where technology meets tranquility, crafting experiences that elevate your senses.",
      className:
        "text-[28px] md:text-[42px] font-medium leading-relaxed drop-shadow-lg max-w-[1200px] mx-auto",
    },
    {
      text: "Every puff is a journey through carefully blended flavors, designed to awaken your taste buds and soothe your soul.",
      className:
        "text-[28px] md:text-[42px] font-medium leading-relaxed drop-shadow-lg max-w-[1200px] mx-auto",
    },
    {
      text: "Like smoke rising effortlessly, our innovations flow seamlessly into your lifestyle, bringing satisfaction with every breath.",
      className:
        "text-[28px] md:text-[42px] font-medium leading-relaxed drop-shadow-lg max-w-[1200px] mx-auto",
    },
    {
      text: "Experience the perfect balance of cutting-edge technology and pure enjoyment, where every moment is crafted for your pleasure.",
      className:
        "text-[28px] md:text-[42px] font-medium leading-relaxed drop-shadow-lg max-w-[1200px] mx-auto",
    },
  ];

  const createTextTransform = (startPoint, endPoint) => ({
    opacity: useTransform(
      scrollYProgress,
      [startPoint, startPoint + 0.15, endPoint - 0.15, endPoint],
      [0, 1, 1, 0]
    ),
    y: useTransform(
      scrollYProgress,
      [startPoint, startPoint + 0.15, endPoint - 0.15, endPoint],
      [100, 0, 0, -100]
    ),
    scale: useTransform(
      scrollYProgress,
      [startPoint, startPoint + 0.15, endPoint - 0.15, endPoint],
      [0.8, 1, 1, 0.8]
    ),
    // Add smoke-like floating effect
    x: useTransform(
      scrollYProgress,
      [startPoint, startPoint + 0.3, endPoint - 0.3, endPoint],
      [-20, 0, 0, 20]
    ),
    rotate: useTransform(
      scrollYProgress,
      [startPoint, startPoint + 0.2, endPoint - 0.2, endPoint],
      [-2, 0, 0, 2]
    ),
  });

  // Create sequential animations
  const textTransforms = smokeTexts.map((_, index) => {
    const sectionLength = 1 / smokeTexts.length;
    const startPoint = index * sectionLength;
    const endPoint = startPoint + sectionLength;
    return createTextTransform(startPoint, endPoint);
  });

  // Smoke particle animations
  const smokeParticles = Array.from({ length: 15 }, (_, i) => {
    const delay = i * 0.5;
    const duration = 8 + Math.random() * 4;
    const startX = Math.random() * 100;
    const startY = 100 + Math.random() * 20;
    
    return {
      id: i,
      delay,
      duration,
      startX,
      startY,
      size: 20 + Math.random() * 40,
    };
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900"
      style={{ height: `${smokeTexts.length * 120}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Smoke Background */}
        <div className="absolute inset-0">
          {/* Smoke-like gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-blue-500/60"></div>
          
          {/* Animated Smoke Particles */}
          {smokeParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/60 to-purple-400/60 blur-xl"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.startX}%`,
                top: `${particle.startY}%`,
              }}
              animate={{
                y: [-100, -window.innerHeight - 100],
                x: [0, (Math.random() - 0.5) * 200],
                scale: [1, 2, 0.5],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="w-full max-w-[90%] 2xl:max-w-[1400px] mx-auto px-6 text-center text-white">
            {smokeTexts.map((item, i) => (
              <motion.p
                key={i}
                className={`absolute w-full left-0 right-0 mx-auto ${item.className}`}
                style={{
                  opacity: textTransforms[i].opacity,
                  y: textTransforms[i].y,
                  scale: textTransforms[i].scale,
                  x: textTransforms[i].x,
                  rotate: textTransforms[i].rotate,
                }}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {item.text}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Additional Smoke Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-gradient-to-r from-blue-300/40 to-purple-300/40 rounded-full blur-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                delay: i * 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmokeAnimationSection;
