import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import HeroSection from "../Components/GlobalPresence/HeroSection";
import InteractiveGlobe from "../Components/GlobalPresence/InteractiveGlobe";
import CountriesGrid from "../Components/GlobalPresence/CountriesGrid";
import StatsSection from "../Components/GlobalPresence/StatsSection";
import { countries } from "../Components/GlobalPresence/CountriesData";

const GlobalPresence = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      <HeroSection />
      <InteractiveGlobe countries={countries} />
      <CountriesGrid countries={countries} />
      <StatsSection />
    </div>
  );
};

export default GlobalPresence;
