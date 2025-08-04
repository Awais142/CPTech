import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Toolbar from "../Components/Toolbar";
import Navbar from "../Components/Navbar";
import ProductHero from "../Components/Products/ProductHero";
import ProductHeading from "../Components/Products/ProductHeading";
import ProductFeaturesSection from "../Components/Products/ProductFeaturesSection";
import ProductFeatures from "../Components/Products/ProductFeatures";
import ProductBackground from "../Components/Products/ProductBackground";

const HayatiQuokkaPro = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative">
      <ProductBackground />
      <div className="relative z-10">
        <Toolbar />
        <Navbar />
        <ProductHero />
        <ProductHeading />
        <ProductFeaturesSection />
        <ProductFeatures />
        {/* Additional sections will be added here */}
      </div>
    </div>
  );
};

export default HayatiQuokkaPro;
