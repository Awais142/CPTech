// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

// Import product images
const products = [
  {
    name: "CP 15K Pro",
    image: "/images/15k1.png",
    isNew: true,
    link: "/CP15k",
  },
  {
    name: "CP 15K Elite",
    image: "/images/15k2.png",
    isNew: true,
    link: "/CP15k",
  },
  {
    name: "CP Twist Pro",
    image: "/images/twist1.png",
    isNew: true,
    link: "/CPTwist",
  },
  {
    name: "CP Twist Elite",
    image: "/images/twist2.png",
    isNew: true,
    link: "/CPTwist",
  },
];

const navLinks = [
  { label: "Product", dropdown: true },
  { label: "Our Brand", dropdown: true },
  { label: "What's CP Tech" },
  { label: "Support", dropdown: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-black/95 border-b border-cyan-400/20 shadow-2xl"
          : "bg-gradient-to-b from-gray-900 via-gray-800 to-black"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-indigo-900/10 to-purple-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-24 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-2xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
            CP TECH
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-base font-semibold">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="relative group cursor-pointer hover:text-cyan-400 transition-colors duration-300 text-gray-300"
            >
              {link.label}
              {/* Dropdown kept but without arrow icon */}
              {link.dropdown && link.label === "Product" && (
                <>
                  {/* Invisible bridge to prevent gap - extended height and better positioning */}
                  <div className="absolute left-0 w-full h-4 top-full" />
                  <div className="absolute left-0 top-full pt-4 hidden group-hover:block">
                    <div className="backdrop-blur-md bg-white/95 border border-gray-200 rounded-xl shadow-2xl min-w-[700px] py-6 px-6 text-sm font-normal">
                      <div className="grid grid-cols-4 gap-6">
                        {products.map((product, idx) => (
                          <Link
                            to={product.link}
                            key={idx}
                            className="group/item cursor-pointer no-underline"
                          >
                            <div className="relative overflow-hidden rounded-lg bg-gray-100 p-4 transition-all duration-300 hover:shadow-md">
                              {product.isNew && (
                                <span className="absolute top-2 right-2 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                  NEW
                                </span>
                              )}
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-32 object-contain mb-3 transform transition-transform duration-300 group-hover/item:scale-105"
                              />
                              <div className="text-center">
                                <h3 className="text-gray-800 font-medium text-sm">
                                  {product.name}
                                </h3>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 text-center">
                        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-cyan-600 hover:text-purple-600 transition-colors">
                          View All Products{" "}
                          <FaChevronRight className="text-xs" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {link.dropdown && link.label !== "Product" && (
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-lg shadow-2xl min-w-[160px] py-2 px-3 text-sm font-normal text-white">
                    <span className="block py-1 px-2 hover:bg-white/10 rounded transition-colors duration-200">
                      Option 1
                    </span>
                    <span className="block py-1 px-2 hover:bg-white/10 rounded transition-colors duration-200">
                      Option 2
                    </span>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Actions + Mobile Toggle */}
        <div className="flex items-center gap-4 text-xl">
          <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-cyan-400/10">
            <FaSearch />
          </button>
          <button className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-white text-sm font-semibold border border-cyan-400/20 transition-all duration-300 backdrop-blur-sm">
            Book Now
          </button>
          <button
            className="md:hidden ml-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-cyan-400/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={`md:hidden px-6 pb-5 transition-all duration-500 relative ${
            isScrolled
              ? "backdrop-blur-md bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-black/95 border-t border-cyan-400/20"
              : "bg-gradient-to-b from-gray-800 to-black"
          }`}
        >
          {/* Background Effects for Mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-indigo-900/10 to-purple-900/10"></div>

          <div className="relative z-10">
            <ul className="flex flex-col gap-4 text-lg font-semibold">
              {navLinks.map((link, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-cyan-400/10"
                >
                  {link.label}
                </li>
              ))}
            </ul>
            <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-white text-base font-semibold border border-cyan-400/20 transition-all duration-300 backdrop-blur-sm">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
