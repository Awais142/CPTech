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

const Footer = () => {
  const productLinks = [
    { name: "CP® 15K Pro", link: "/CP15k" },
    { name: "CP® 15K Elite", link: "/CP15k" },
    { name: "CP® Twist Pro", link: "/CPTwist" },
    { name: "CP® Twist Elite", link: "/CPTwist" },
  ];

  const companyLinks = [
    { name: "About Us", link: "#" },
    { name: "Our Vision", link: "#" },
    { name: "What's CP Tech", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Press & Media", link: "#" },
  ];

  const supportLinks = [
    { name: "Customer Support", link: "#" },
    { name: "User Manual", link: "#" },
    { name: "Warranty", link: "#" },
    { name: "Returns & Exchanges", link: "#" },
    { name: "FAQ", link: "#" },
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
                <BsStars className="text-2xl text-cyan-400 animate-pulse" />
                <h2 className="text-2xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                  CP TECH
                </h2>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future of vaping technology with innovative
                crystal pro devices. Experience premium quality, cutting-edge
                design, and exceptional performance.
              </p>

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
                <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></span>
                Products
              </h3>
              <ul className="space-y-3">
                {productLinks.map((product, idx) => (
                  <li key={idx}>
                    <Link
                      to={product.link}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
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
                <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></span>
                Company
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.link}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Contact Section */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></span>
                Support
              </h3>
              <ul className="space-y-3 mb-8">
                {supportLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.link}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-300">
                  <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    123 Tech Street, Innovation City, TC 12345
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaPhone className="text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">support@cptech.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-900/20 via-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
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
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
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
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
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
