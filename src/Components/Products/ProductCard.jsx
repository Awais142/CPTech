import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col border border-gray-100 hover:border-gray-200">
      {/* Image Container */}
      <div className="relative pt-[100%] bg-white overflow-hidden">
        {/* Badge - Now inside image container but positioned absolutely */}
        {product.isNew && (
          <div className="absolute top-2 right-2 z-10">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md inline-block">
              NEW
            </span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col border-t border-gray-100">
        <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2 h-12">
          {product.name}
        </h3>
        
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          
          <button 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic here
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default ProductCard;