import React from "react";

// Import images
import specificationsWeb from "../../assets/product-images/first-product-images/specificationsweb.png";
import specificationsMobile from "../../assets/product-images/first-product-images/specificationsmobile.png";

const ProductSpecifications = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="w-full px-4">
        {/* Specifications Images */}
        <div className="flex justify-center">
          {/* Desktop Image */}
          <img
            src={specificationsWeb}
            alt="Product Specifications - Desktop"
            className="hidden md:block w-full h-auto object-contain"
          />

          {/* Mobile Image */}
          <img
            src={specificationsMobile}
            alt="Product Specifications - Mobile"
            className="block md:hidden w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSpecifications;
