"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const imageData = [
  {
    id: 1,
    title: "ENJOY",
    description: "At CP Tech, we see life as a beautiful journey to be savored and enjoyed. That's why we believe that our products are not just tools, but an innovative lifestyle that brings joy, inspiration and empowerment.",
    image: "/src/assets/images/herobgweb.jpg",
  },
  {
    id: 2,
    title: "RELIABLE",
    description: "We prioritize users in everything we do. With a user-driven philosophy and innovative R&D, we are committed to providing products of both high quality and great performance.",
    image: "/src/assets/images/herobgweb.jpg",
  },
  {
    id: 3,
    title: "EXPERIENCE",
    description: "We present users with a distinct experience, sharing an interactive and companionable journey. With CP Tech, embrace a brand new lifestyle and unlock new levels of imagination.",
    image: "/src/assets/images/herobgweb.jpg",
  },
]

export default function ScrollImageGallery() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Tagline opacity: full -> 30% -> full
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [1, 0.3, 0.3, 1])

  // First image: 20-35% fade in, 35-65% visible, starts fading as second appears
  const image1Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.4, 0.55], [0, 1, 1, 0])
  const image1Y = useTransform(scrollYProgress, [0.2, 0.35], [300, 0])

  // Second image: 40-55% fade in, 55-75% visible, starts fading as third appears
  const image2Opacity = useTransform(scrollYProgress, [0.4, 0.55, 0.6, 0.75], [0, 1, 1, 0])
  const image2Y = useTransform(scrollYProgress, [0.4, 0.55], [300, 0])

  // Third image: 60-75% fade in, 75-90% visible, 90-100% fade out
  const image3Opacity = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1], [0, 1, 1, 0])
  const image3Y = useTransform(scrollYProgress, [0.6, 0.75], [300, 0])

  // Debug scroll percentage
  const scrollPercentage = useTransform(scrollYProgress, (value) => Math.round(value * 100))

  // Active image indicator
  const getActiveImage = (progress) => {
    if (progress >= 0.2 && progress < 0.4) return 1
    if (progress >= 0.4 && progress < 0.6) return 2
    if (progress >= 0.6 && progress < 0.9) return 3
    return 0
  }

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-white overflow-hidden">
      {/* Background Tagline */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: taglineOpacity }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-center bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
          Vibes in,
          <br />
          Every Puff.
        </h1>
      </motion.div>

      {/* Images Container */}
      <div className="fixed inset-0 z-20">
        {/* First Image - Bottom Left */}
        <motion.div
          className="absolute bottom-8 left-8 w-[600px] h-[400px] md:w-[800px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
          style={{
            opacity: image1Opacity,
            y: image1Y,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={imageData[0].image || "/placeholder.svg"}
            alt={imageData[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{imageData[0].title}</h3>
            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {imageData[0].description}
            </p>
          </div>
        </motion.div>

        {/* Second Image - Bottom Right */}
        <motion.div
          className="absolute bottom-8 right-8 w-[600px] h-[400px] md:w-[800px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
          style={{
            opacity: image2Opacity,
            y: image2Y,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={imageData[1].image || "/placeholder.svg"}
            alt={imageData[1].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{imageData[1].title}</h3>
            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {imageData[1].description}
            </p>
          </div>
        </motion.div>

        {/* Third Image - Center */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[600px] h-[400px] md:w-[800px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
          style={{
            opacity: image3Opacity,
            y: image3Y,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={imageData[2].image || "/placeholder.svg"}
            alt={imageData[2].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{imageData[2].title}</h3>
            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {imageData[2].description}
            </p>
          </div>
        </motion.div>
      </div>


      {/* Debug Scroll Percentage */}
      <motion.div className="fixed bottom-6 right-6 z-30 bg-black/80 text-white px-3 py-2 rounded-lg font-mono text-sm">
        <motion.span style={{ color: scrollPercentage }}>
          {scrollPercentage.get()}%
        </motion.span>
      </motion.div>
    </div>
  )
}
