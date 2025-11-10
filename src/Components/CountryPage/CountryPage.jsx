import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countriesData } from "../../data/countriesData";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

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

      {/* Contact Information Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
          Find Us on Map
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
