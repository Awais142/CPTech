import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PracticeMakesPerfect = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const practiceTexts = [
    {
      text: "Practice Makes Perfect",
      className: "text-4xl md:text-6xl font-bold"
    },
    {
      text: "CP Tech is more than a good wish; it's a commitment rooted in solid ground as we believe all greatness comes from little steps.",
      className: "text-xl md:text-2xl"
    },
    {
      text: "Seeking progress and excellence prompts us to achieve self-breakthroughs continuously.",
      className: "text-xl md:text-2xl"
    },
    {
      text: "We believe that product innovation comes from users' perspectives and brings them excellent experiences.",
      className: "text-xl md:text-2xl"
    },
    {
      text: "We believe that a bright future is based on a series of sustainable choices. CP Tech will always be the pioneer of better lifestyles.",
      className: "text-xl md:text-2xl"
    }
  ];

  // Create transforms for each text
  const textTransforms = practiceTexts.map((_, i) => {
    const start = i / practiceTexts.length;
    const end = (i + 1) / practiceTexts.length;
    
    return {
      opacity: useTransform(scrollYProgress, 
        [start, start + 0.1, end - 0.1, end],
        [0, 1, 1, 0]
      ),
      y: useTransform(scrollYProgress,
        [start, start + 0.5, end],
        [100, 0, -100]
      )
    };
  });

  return (
    <section 
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden"
      style={{ height: `${practiceTexts.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full">
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="w-full max-w-4xl px-4 text-center text-white">
            {practiceTexts.map((item, i) => (
              <motion.div 
                key={i}
                className={`${item.className} ${i > 0 ? 'mt-8' : ''}`}
                style={{
                  opacity: textTransforms[i].opacity,
                  y: textTransforms[i].y,
                  position: i > 0 ? 'relative' : 'static',
                  willChange: 'opacity, transform'
                }}
              >
                {item.text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeMakesPerfect;
