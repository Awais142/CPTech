import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const InteractiveGlobe = ({ countries }) => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const { scrollYProgress } = useScroll({
    target: null,
    offset: ["start end", "end start"],
  });

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
              <p className="text-gray-600 mb-4">{hoveredCountry.description}</p>
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
  );
};

export default InteractiveGlobe;
