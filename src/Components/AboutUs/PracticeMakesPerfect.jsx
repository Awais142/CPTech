import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PracticeMakesPerfect = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const practiceTexts = [
    {
      text: "Practice Makes Perfect",
      className:
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-12 tracking-tight drop-shadow-2xl max-w-[1000px] mx-auto",
    },
    {
      text: "CP Tech is more than a good wish; it's a commitment rooted in solid ground as we believe all greatness comes from little steps.",
      className:
        "text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed drop-shadow-lg max-w-[1200px] mx-auto",
    },
    {
      text: "Seeking progress and excellence prompts us to achieve self-breakthroughs continuously.",
      className:
        "text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed drop-shadow-lg max-w-[1200px] mx-auto",
    },
    {
      text: "We believe that product innovation comes from users' perspectives and brings them excellent experiences.",
      className:
        "text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed drop-shadow-lg max-w-[1200px] mx-auto",
    },
    {
      text: "We believe that a bright future is based on a series of sustainable choices. CP Tech will always be the pioneer of better lifestyles.",
      className:
        "text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed drop-shadow-lg max-w-[1200px] mx-auto",
    },
  ];

  const createTextTransform = (startPoint, endPoint) => ({
    opacity: useTransform(
      scrollYProgress,
      [startPoint, startPoint + 0.1, endPoint - 0.1, endPoint],
      [0, 1, 1, 0]
    ),
    y: useTransform(
      scrollYProgress,
      [startPoint, startPoint + 0.1, endPoint - 0.1, endPoint],
      [50, 0, 0, -50]
    ),
    scale: useTransform(
      scrollYProgress,
      [startPoint, startPoint + 0.1, endPoint - 0.1, endPoint],
      [0.9, 1, 1, 0.9]
    ),
  });

  // Create sequential animations
  const textTransforms = practiceTexts.map((_, index) => {
    const sectionLength = 1 / practiceTexts.length;
    const startPoint = index * sectionLength;
    const endPoint = startPoint + sectionLength;
    return createTextTransform(startPoint, endPoint);
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black"
      style={{ height: `${practiceTexts.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Smoke Background */}
        <div className="absolute inset-0">
          {/* Smoke-like gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 via-purple-500/80 to-cyan-500/80"></div>

          {/* Animated Smoke Particles */}
          {Array.from({ length: 8 }, (_, i) => {
            const delay = i * 0.3;
            const duration = 5 + Math.random() * 2;
            const startX = Math.random() * 100;
            const startY = 100 + Math.random() * 20;
            const size = 25 + Math.random() * 50;

            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-cyan-400/80 to-purple-400/80 blur-xl"
                style={{
                  width: size,
                  height: size,
                  left: `${startX}%`,
                  top: `${startY}%`,
                }}
                animate={{
                  y: [-80, -window.innerHeight - 80],
                  x: [0, (Math.random() - 0.5) * 200],
                  scale: [1, 2.5, 0.3],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: duration,
                  delay: delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}

          {/* Additional Smoke Effect Overlay */}
          {Array.from({ length: 5 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40 bg-gradient-to-r from-cyan-300/60 to-purple-300/60 rounded-full blur-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.2, 0.6, 0.2],
                x: [0, (Math.random() - 0.5) * 120],
                y: [0, (Math.random() - 0.5) * 120],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                delay: i * 0.4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="w-full max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 text-center text-white">
            {practiceTexts.map((item, i) => (
              <motion.p
                key={i}
                className={`absolute w-full left-0 right-0 mx-auto ${item.className}`}
                style={{
                  opacity: textTransforms[i].opacity,
                  y: textTransforms[i].y,
                  scale: textTransforms[i].scale,
                }}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {item.text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeMakesPerfect;
