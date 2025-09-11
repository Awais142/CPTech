// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import lightLogo from "../assets/cp-light-logo.png";
import img15k1 from "../assets/images/15K1.png";
import imgflowbar25k from "../assets/images/Flowbar25k.png";
import imgcrystalcp600 from "../assets/images/crystalcp600.png";
import imgcrystalpro600 from "../assets/images/crystalpro600.png";


// Use imported product images
const products = [
  {
    name: "CP® 15K Pro",
    image: img15k1,
    isNew: true,
    link: "/product/1",
  },
  {
    name: "CP® Flow Bar 25K",
    image: imgflowbar25k,
    isNew: true,
    link: "/product/2",
  },
  {
    name: "CP® Crystal CP 600",
    image: imgcrystalcp600,
    isNew: true,
    link: "/product/3",
  },
  {
    name: "CP® Crystal Pro 600",
    image: imgcrystalpro600,
    isNew: true,
    link: "/product/4",
  },
];

const navLinks = [
  { label: "Product", dropdown: true },
  { label: "What's CP Tech", link: "/about" },
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
          ? "backdrop-blur-md bg-black/20 border-b border-cyan-custom/20 shadow-2xl"
          : "bg-gradient-cyan-purple"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link to="/" className="no-underline text-inherit">
          <img src={lightLogo} alt="CP Tech Logo" className="h-12" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-base font-semibold">
          <li className="relative group cursor-pointer hover:text-cyan-custom transition-all duration-300 text-white/90 hover:scale-105">
            <Link to="/" className="no-underline text-inherit">
              Home
            </Link>
          </li>
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="relative group hover:text-cyan-custom transition-all duration-300 text-white/90 hover:scale-105"
            >
              {link.label === 'Product' ? (
                <Link to="/products" className="no-underline text-inherit cursor-pointer flex items-center gap-1">
                  {link.label}
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              ) : link.link ? (
                <Link to={link.link} className="no-underline text-inherit cursor-pointer">
                  {link.label}
                </Link>
              ) : (
                <span className="cursor-pointer">{link.label}</span>
              )}
              {link.dropdown && link.label === "Product" && (
                <div className="absolute left-0 top-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-md bg-white/95 border border-gray-200 rounded-xl shadow-2xl min-w-[700px] py-6 px-6 text-sm font-normal group-hover/dropdown:block">
                  <div className="grid grid-cols-4 gap-6">
                    {products.map((product, idx) => (
                      <Link
                        to={product.link}
                        key={idx}
                        className="group/item cursor-pointer no-underline"
                      >
                        <div className="relative overflow-hidden rounded-lg bg-gray-100 p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
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
                    <Link to="/products" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-cyan-custom hover:text-cyan-600 transition-colors no-underline">
                      View All Products <FaChevronRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              )}
            </li>
          ))}
          <li className="relative group cursor-pointer hover:text-cyan-custom transition-all duration-300 text-white/90 hover:scale-105">
            <Link to="/contact" className="no-underline text-inherit">
              Contact
            </Link>
          </li>
        </ul>

        {/* Actions + Mobile Toggle */}
        <div className="flex items-center gap-4 text-xl">
          <button className="text-white/90 hover:text-cyan-custom transition-colors duration-300 p-2 rounded-full hover:bg-cyan-custom/10">
            <FaSearch />
          </button>
          <a 
            href="https://calendly.com/seemal-thecptech/30min?month=2025-08"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full bg-cyan-custom/20 hover:bg-cyan-custom/30 text-white text-sm font-semibold border border-cyan-custom/30 transition-colors no-underline"
          >
            Book Now
          </a>
          <button
            className="md:hidden ml-2 text-white/90 hover:text-cyan-custom transition-colors duration-300 p-2 rounded-full hover:bg-cyan-custom/10"
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
              ? "backdrop-blur-md bg-black/20 border-t border-cyan-custom/20"
              : "bg-gradient-cyan-purple"
          }`}
        >
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            <li className="cursor-pointer text-white/90 hover:text-cyan-custom transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-cyan-custom/10">
              <Link to="/" className="no-underline text-inherit">
                Home
              </Link>
            </li>
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="cursor-pointer text-white/90 hover:text-cyan-custom transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-cyan-custom/10"
              >
                {link.label}
              </li>
            ))}
            <li className="cursor-pointer text-white/90 hover:text-cyan-custom transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-cyan-custom/10">
              <Link to="/contact" className="no-underline text-inherit">
                Contact
              </Link>
            </li>
          </ul>
          <a 
            href="https://calendly.com/seemal-thecptech/30min?month=2025-08"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-cyan-custom/20 hover:bg-cyan-custom/30 text-white text-base font-semibold border border-cyan-custom/30 transition-colors no-underline"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
