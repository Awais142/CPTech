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
          ? "backdrop-blur-md bg-black/20 border-b border-white/10 shadow-2xl"
          : "bg-gradient-to-b from-[#0b0b0b] via-[#0e0e0e] to-[#151515]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-2xl tracking-widest text-white">
            CP TECH
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-base font-semibold">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="relative group cursor-pointer hover:text-gray-200 transition-colors duration-300 text-white/90"
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
                                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
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
          <button className="text-white/90 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/10">
            <FaSearch />
          </button>
          <button className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/15 transition-colors">
            Book Now
          </button>
          <button
            className="md:hidden ml-2 text-white/90 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className={`md:hidden px-6 pb-5 transition-all duration-500 ${
            isScrolled
              ? "backdrop-blur-md bg-black/20 border-t border-white/10"
              : "bg-[#0b0b0b]"
          }`}
        >
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="cursor-pointer text-white/90 hover:text-white transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
              >
                {link.label}
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-base font-semibold border border-white/15 transition-colors">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
