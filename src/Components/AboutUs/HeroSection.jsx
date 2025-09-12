import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBgWeb from "../../assets/images/herobgweb.jpg";
import heroBgMobile from "../../assets/images/herobgmobile.jpg";

const HeroSection = () => {
  const containerRef = useRef(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Hero section animation
  const heroY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section ref={containerRef} className="floor-container h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={heroBgWeb}
          alt="CP Tech"
          className="hidden md:block w-full h-full object-cover opacity-70"
        />
        <img
          src={heroBgMobile}
          alt="CP Tech"
          className="block md:hidden w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 px-4 w-full max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
        Innovating for a better tomorrow.
        </h1>
      </motion.div>
    </section>
  );
};

export default HeroSection;
