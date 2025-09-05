import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const PracticeMakesPerfect = () => {
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

  const practiceTexts = [
    {
      text: "Practice Makes Perfect",
      className:
        "text-[56px] md:text-[96px] font-bold mb-12 tracking-tight drop-shadow-2xl max-w-[1000px] mx-auto",
    },
    {
      text: "CP Tech is more than a good wish; it's a commitment rooted in solid ground as we believe all greatness comes from little steps.",
      className:
        "text-[28px] md:text-[42px] font-medium leading-relaxed drop-shadow-lg max-w-[1200px] mx-auto",
    },
    {
      text: "Seeking progress and excellence prompts us to achieve self-breakthroughs continuously.",
      className:
        "text-[28px] md:text-[42px] font-medium leading-relaxed drop-shadow-lg max-w-[1200px] mx-auto",
    },
    {
      text: "We believe that product innovation comes from users' perspectives and brings them excellent experiences.",
      className:
        "text-[28px] md:text-[42px] font-medium leading-relaxed drop-shadow-lg max-w-[1200px] mx-auto",
    },
    {
      text: "We believe that a bright future is based on a series of sustainable choices. CP Tech will always be the pioneer of better lifestyles.",
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
      style={{ height: `${practiceTexts.length * 120}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://dbh4s5ja0maaw.cloudfront.net/about/practice_makes_perfect.mp4"
              type="video/mp4"
            />
          </video>
          {/* Add gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="w-full max-w-[90%] 2xl:max-w-[1400px] mx-auto px-6 text-center text-white">
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
