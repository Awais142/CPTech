import React from "react";

// Import local images
import heroImageWeb from "../../assets/product-images/first-product-images/firstheroimageweb.jpg";
import heroImageMobile from "../../assets/product-images/first-product-images/firstiheroimagemobile.jpg";

const ProductHero = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      {/* Full width image */}
      <div className="w-full h-full bg-white">
        {/* Desktop Image */}
        <img
          src={heroImageWeb}
          alt="Hayati Quokka Lite - Desktop"
          className="hidden md:block w-full h-full object-contain object-center"
        />
        {/* Mobile Image */}
        <img
          src={heroImageMobile}
          alt="Hayati Quokka Lite - Mobile"
          className="block md:hidden w-full h-full object-contain object-center"
        />
      </div>
    </section>
  );
};

export default ProductHero;
