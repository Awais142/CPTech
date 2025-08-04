import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const ProductHero = ({
  productName,
  productTagline,
  productDescription,
  heroImage,
}) => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">
      {/* Background with large faded text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl md:text-9xl font-bold text-gray-200 opacity-30 select-none">
          {productName}
        </h1>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between w-full">
          {/* Left side - Product info */}
          <div className="flex-1 text-left">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-800 leading-tight">
              {productName}
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-gray-600 mt-4">
              {productTagline}
            </p>
            <p className="text-lg text-gray-500 mt-6 max-w-md">
              {productDescription}
            </p>
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          {/* Right side - Product image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <img
                src={heroImage}
                alt={productName}
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/40"
              />
              {/* Product badge */}
              <div className="absolute -bottom-4 -right-4 bg-gray-800 text-white px-4 py-2 rounded-lg font-bold">
                PRO
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        <a
          href="#"
          className="bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition"
        >
          <FaFacebook className="w-5 h-5 text-blue-600" />
        </a>
        <a
          href="#"
          className="bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition"
        >
          <FaInstagram className="w-5 h-5 text-pink-500" />
        </a>
        <a
          href="#"
          className="bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition"
        >
          <FaWhatsapp className="w-5 h-5 text-green-500" />
        </a>
        <a
          href="#"
          className="bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition"
        >
          <FaYoutube className="w-5 h-5 text-red-500" />
        </a>
        <a
          href="#"
          className="bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition"
        >
          <FaTiktok className="w-5 h-5 text-black" />
        </a>
        <a
          href="#"
          className="bg-white rounded-full p-3 shadow-lg hover:bg-blue-50 transition"
        >
          <FaTwitter className="w-5 h-5 text-blue-400" />
        </a>
      </div>
    </section>
  );
};

export default ProductHero;
