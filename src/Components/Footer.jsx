import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { countriesList, countriesData } from "../data/countriesData";

const Footer = () => {
  const productLinks = [
    { name: "CP® 15K Pro", link: "/product/1" },
    { name: "CP® Flow Bar 25K", link: "/product/2" },
    { name: "CP® Crystal CP 600", link: "/product/3" },
    { name: "CP® Crystal Pro 600", link: "/product/4" },
  ];

  const companyLinks = [
    { name: "What's CP Tech", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Global Presence", link: "/global-presence" },
    { name: "Contact Us", link: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", link: "#" },
    { name: "Terms of Service", link: "#" },
    { name: "Cookie Policy", link: "#" },
    { name: "Age Verification", link: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-indigo-900/10 to-purple-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <BsStars className="text-2xl text-cyan-custom animate-pulse" />
                <h2 className="text-2xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                  CP TECH
                </h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future of vaping technology with innovative
                crystal pro devices. Experience premium quality, cutting-edge
                design, and exceptional performance.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-gray-300">
                  <FaMapMarkerAlt className="text-cyan-custom mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    {countriesData.uk.address}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaPhone className="text-cyan-custom flex-shrink-0" />
                  <a
                    href={`tel:${countriesData.uk.phone}`}
                    className="text-sm hover:text-cyan-custom transition-colors"
                  >
                    {countriesData.uk.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaEnvelope className="text-cyan-custom flex-shrink-0" />
                  <a
                    href={`mailto:${countriesData.uk.email}`}
                    className="text-sm hover:text-cyan-custom transition-colors"
                  >
                    {countriesData.uk.email}
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4">
                {[
                  { icon: FaFacebookF, color: "hover:text-blue-400" },
                  { icon: FaTwitter, color: "hover:text-sky-400" },
                  { icon: FaInstagram, color: "hover:text-pink-400" },
                  { icon: FaLinkedinIn, color: "hover:text-blue-500" },
                  { icon: FaYoutube, color: "hover:text-red-400" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products Section */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-cyan-custom to-purple-custom rounded-full"></span>
                Products
              </h3>
              <ul className="space-y-3">
                {productLinks.map((product, idx) => (
                  <li key={idx}>
                    <Link
                      to={product.link}
                      className="text-gray-300 hover:text-cyan-custom transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-cyan-custom to-purple-custom rounded-full"></span>
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.link}
                      className="text-gray-300 hover:text-cyan-custom transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Countries Section */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-cyan-custom to-purple-custom rounded-full"></span>
                Countries
              </h3>
              <ul className="space-y-3">
                {countriesList.map((country, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/country/${country.slug}`}
                      className="text-gray-300 hover:text-cyan-custom transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="text-lg">{country.flag || "🌍"}</span>
                      <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {country.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 p-8 bg-gradient-cyan-purple/20 backdrop-blur-sm rounded-2xl border border-cyan-custom/10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-custom to-purple-custom">
                Stay Updated with CP Tech
              </h3>
              <p className="text-gray-300 mb-6">
                Be the first to know about new products, exclusive offers, and
                industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-cyan-custom/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-custom transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-gradient-cyan-purple hover:from-cyan-600 hover:to-purple-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-custom/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-400 text-sm text-center lg:text-left">
                © 2024 CP Tech. All rights reserved. | Designed with innovation
                in mind.
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                {legalLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.link}
                    className="text-gray-400 hover:text-cyan-custom text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
