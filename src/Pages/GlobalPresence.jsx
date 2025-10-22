import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaUsers,
  FaShippingFast,
  FaAward,
} from "react-icons/fa";

const GlobalPresence = () => {
  const containerRef = useRef(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Countries data
  const countries = [
    {
      id: "uk",
      name: "United Kingdom",
      flag: "🇬🇧",
      position: { x: 48, y: 25 },
      stats: {
        partners: "15+",
        established: "2022",
        market: "Premium",
      },
      description: "Leading the European market with premium vaping solutions",
    },
    {
      id: "spain",
      name: "Spain",
      flag: "🇪🇸",
      position: { x: 45, y: 35 },
      stats: {
        partners: "12+",
        established: "2023",
        market: "Growing",
      },
      description: "Expanding rapidly across the Iberian Peninsula",
    },
    {
      id: "uae",
      name: "UAE",
      flag: "🇦🇪",
      position: { x: 58, y: 40 },
      stats: {
        partners: "8+",
        established: "2023",
        market: "Luxury",
      },
      description: "Serving the luxury market in the Middle East",
    },
    {
      id: "usa",
      name: "United States",
      flag: "🇺🇸",
      position: { x: 20, y: 30 },
      stats: {
        partners: "25+",
        established: "2021",
        market: "Major",
      },
      description: "Our largest market with nationwide distribution",
    },
    {
      id: "pakistan",
      name: "Pakistan",
      flag: "🇵🇰",
      position: { x: 55, y: 45 },
      stats: {
        partners: "20+",
        established: "2020",
        market: "Home",
      },
      description: "Our home base and manufacturing hub",
    },
  ];

  // Animation values
  const globeY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const globeOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const globeScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.8]
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20"></div>
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Global Presence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
          >
            Connecting the world through innovative vaping technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <FaGlobe className="text-cyan-400" />
              <span>5 Countries</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <FaUsers className="text-purple-400" />
              <span>80+ Partners</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <FaShippingFast className="text-cyan-400" />
              <span>Global Shipping</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Globe Section */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div
          style={{
            y: globeY,
            opacity: globeOpacity,
            scale: globeScale,
          }}
          className="relative w-full max-w-4xl mx-auto"
        >
          {/* Globe Container */}
          <div className="relative w-full aspect-square max-w-2xl mx-auto">
            {/* Globe Background */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-full h-full rounded-full bg-gradient-to-br from-blue-500/20 to-green-500/20 border-2 border-cyan-400/30 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Globe Pattern */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 via-green-600/30 to-blue-600/30"></div>

              {/* Grid Lines */}
              <div className="absolute inset-0 rounded-full">
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px bg-cyan-400/20"
                    style={{ top: `${(i + 1) * 12.5}%` }}
                  />
                ))}
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute h-full w-px bg-cyan-400/20"
                    style={{ left: `${(i + 1) * 12.5}%` }}
                  />
                ))}
              </div>

              {/* Country Markers */}
              {countries.map((country, index) => (
                <motion.div
                  key={country.id}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${country.position.x}%`,
                    top: `${country.position.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={() => setHoveredCountry(country)}
                  onHoverEnd={() => setHoveredCountry(null)}
                >
                  {/* Pulsing Dot */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                  />

                  {/* Ripple Effect */}
                  <motion.div
                    animate={{ scale: [1, 3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-4 h-4 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Country Info Panel */}
            {hoveredCountry && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl max-w-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{hoveredCountry.flag}</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {hoveredCountry.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {hoveredCountry.description}
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-cyan-600">
                      {hoveredCountry.stats.partners}
                    </div>
                    <div className="text-gray-500">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-purple-600">
                      {hoveredCountry.stats.established}
                    </div>
                    <div className="text-gray-500">Since</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-600">
                      {hoveredCountry.stats.market}
                    </div>
                    <div className="text-gray-500">Market</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Countries Grid Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Global Network
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From our home base in Pakistan to major markets worldwide, we're
              building a global community of innovation and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {country.name}
                    </h3>
                    <p className="text-gray-300">
                      {country.stats.market} Market
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{country.description}</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">
                      {country.stats.partners}
                    </div>
                    <div className="text-sm text-gray-400">Partners</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">
                      {country.stats.established}
                    </div>
                    <div className="text-sm text-gray-400">Since</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">Coverage</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl font-bold text-cyan-400 mb-2"
              >
                5
              </motion.div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl font-bold text-purple-400 mb-2"
              >
                80+
              </motion.div>
              <div className="text-gray-300">Partners</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl font-bold text-green-400 mb-2"
              >
                4
              </motion.div>
              <div className="text-gray-300">Years</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl font-bold text-yellow-400 mb-2"
              >
                24/7
              </motion.div>
              <div className="text-gray-300">Support</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPresence;
