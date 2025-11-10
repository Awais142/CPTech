import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { countriesData } from "../data/countriesData";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import img15k1 from "../assets/images/15K1.png";
import imgflowbar25k from "../assets/images/Flowbar25k.png";
import imgcrystalcp600 from "../assets/images/crystalcp600.png";
import imgcrystalpro600 from "../assets/images/crystalpro600.png";

// Product image mapping
const productImages = {
  1: img15k1,
  2: imgflowbar25k,
  3: imgcrystalcp600,
  4: imgcrystalpro600,
};

const CountryPage = () => {
  const { countrySlug } = useParams();
  const [imageError, setImageError] = useState(false);

  // Find country data by slug
  const country = Object.values(countriesData).find(
    (c) => c.slug === countrySlug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setImageError(false); // Reset image error when country changes
  }, [countrySlug]);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Country Not Found</h1>
          <p className="text-gray-400">
            The country page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // Use Pexels image from country data, fallback gracefully if not available
  const countryImage = country.image || null;

  // Format price with currency
  const formatPrice = (price) => {
    const symbol = country.currencySymbol || "$";
    // For PKR, don't add decimals
    if (country.currency === "PKR") {
      return `${symbol}${price.toLocaleString()}`;
    }
    return `${symbol}${price.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section with Country Image */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 px-6">
            <div className="text-6xl md:text-8xl mb-4">{country.flag}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {country.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              CP Tech International
            </p>
          </div>
        </div>
        {/* Country Image Background from Pexels */}
        {countryImage && !imageError && (
          <div className="absolute inset-0 opacity-30">
            <img
              src={countryImage}
              alt={`${country.name} landscape`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => {
                setImageError(true);
              }}
            />
          </div>
        )}
      </section>

      {/* Highlights Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
            {country.name} Highlights
          </h2>
          <div className="prose prose-invert max-w-none">
            {country.highlights.split("\n").map(
              (paragraph, idx) =>
                paragraph.trim() && (
                  <p
                    key={idx}
                    className="text-gray-300 text-lg leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                )
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      {country.products && country.products.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
              Our Products in {country.name}
            </h2>
            <p className="text-gray-400 text-lg">
              Available in {country.currency} ({country.currencySymbol})
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {country.products.map((product) => (
              <div
                key={product.id}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 hover:-translate-y-2"
              >
                {/* Product Image */}
                <div className="relative h-56 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={productImages[product.id] || product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300 z-10 relative"
                    onError={(e) => {
                      e.target.src = product.image;
                    }}
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-2xl transition-all duration-300"></div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Price</p>
                      <p className="text-3xl font-bold text-cyan-400">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-400 px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 group/btn"
                    >
                      <FaShoppingCart className="text-sm" />
                      <span className="hidden sm:inline">View</span>
                      <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Information Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
          Contact Information
        </h2>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {country.officeName}
                </h3>
                <p className="text-gray-300">{country.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-2xl flex-shrink-0" />
              <a
                href={`tel:${country.phone}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {country.phone}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl flex-shrink-0" />
              <a
                href={`mailto:${country.email}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {country.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
            Find Us on Map
          </h2>
          <p className="text-gray-400 text-lg">
            Visit our office location in {country.name}
          </p>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cyan-400/20 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
          {/* Map Container */}
          <div className="relative w-full h-[500px] md:h-[600px]">
            {/* Google Maps Embed */}
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                country.address
              )}&output=embed&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title={`${country.name} Office Location`}
            />
            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Map Info Footer */}
          <div className="bg-white/5 backdrop-blur-md border-t border-white/10 p-5">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                <div>
                  <p className="text-white font-semibold">
                    {country.officeName}
                  </p>
                  <p className="text-gray-400 text-sm">{country.address}</p>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  country.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-400/30 rounded-full text-cyan-400 font-semibold transition-all duration-300 hover:scale-105"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      {country.events && country.events.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
            Other Events
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {country.events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <FaCalendarAlt className="text-cyan-400 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-300">{event.description}</p>
                    <button className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CountryPage;

