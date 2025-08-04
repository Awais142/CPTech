import React from "react";
import Toolbar from "../Components/Toolbar";
import Navbar from "../Components/Navbar";
import ProductHero from "../Components/Products/ProductHero";
import ProductFeatures from "../Components/Products/ProductFeatures";

const HayatiQuokkaPro = () => {
  return (
    <div className="min-h-screen bg-white">
      <Toolbar />
      <Navbar />
      <ProductHero
        productName="Hayati Quokka Pro"
        productTagline="Premium Performance, Unmatched Experience"
        productDescription="Experience the next generation of vaping technology with our flagship device."
        heroImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&w=800"
      />
      <ProductFeatures />
      {/* Additional sections will be added here */}
    </div>
  );
};

export default HayatiQuokkaPro;
