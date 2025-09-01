import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Toolbar from "../Components/Toolbar";
import Navbar from "../Components/Navbar";
import ProductHero from "../Components/Products/ProductHero";
import ProductHeading from "../Components/Products/ProductHeading";
import ProductFeaturesSection from "../Components/Products/ProductFeaturesSection";
import ProductColorSlider from "../Components/Products/ProductColorSlider";
import ProductBiggerBattery from "../Components/Products/ProductBiggerBattery";
import ProductCompatibility from "../Components/Products/ProductCompatibility";
import ProductSpecifications from "../Components/Products/ProductSpecifications";
import ProductWhatsInBox from "../Components/Products/ProductWhatsInBox";
import ProductFeatures from "../Components/Products/ProductFeatures";
import ProductBackground from "../Components/Products/ProductBackground";

const CPTwist = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative">
      <ProductBackground />
      <div className="relative z-10">
        <ProductHero />
        <ProductHeading />
        <ProductFeaturesSection />
        <ProductColorSlider />
        <ProductBiggerBattery />
        <ProductCompatibility />
        <ProductSpecifications />
        <ProductWhatsInBox />
        <ProductFeatures />
      </div>
    </div>
  );
};

export default CPTwist;
