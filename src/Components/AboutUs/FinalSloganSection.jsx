import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FinalSloganSection = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Scale animation: starts small, continuously zooms in, then disappears
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0.8, 3, 0]
  );

  // Opacity animation: fades in, stays visible, then fades out
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 1],
    [0, 1, 1, 0]
  );

  // Y position animation: slight upward movement during zoom
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [30, -20, -100]
  );

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <motion.div 
        className="relative z-10 text-center w-full max-w-4xl mx-auto px-4"
        style={{ 
          scale,
          opacity,
          y
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight"
        >
          Elevate Your Vibe,
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 leading-tight"
        >
          CP Tech Yourself.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default FinalSloganSection;
