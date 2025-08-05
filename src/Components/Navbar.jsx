// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Product", dropdown: true },
  { label: "Our Brand", dropdown: true },
  { label: "Verify Product" },
  { label: "Media Packs" },
  { label: "Moment" },
  { label: "What's Hayati®" },
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/10 border-b border-white/20 shadow-2xl' 
          : 'bg-gradient-to-br from-[#5b0eb0] to-[#1f63db]'
      }`}
      style={{
        background: isScrolled 
          ? 'linear-gradient(135deg, rgba(91, 14, 176, 0.1), rgba(31, 99, 219, 0.1))' 
          : 'linear-gradient(135deg, #5b0eb0, #1f63db) !important'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 drop-shadow-lg" />
          <span className="font-extrabold text-2xl tracking-widest drop-shadow text-white">HAYATI</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-base font-semibold">
          {navLinks.map((link, idx) => (
            <li key={idx} className="relative group cursor-pointer hover:text-cyan-200 transition-colors duration-300">
              {link.label}
              {link.dropdown && <span className="ml-1 text-xs">▼</span>}
              {link.dropdown && (
                <div className="absolute left-0 top-8 hidden group-hover:block backdrop-blur-md bg-white/20 border border-white/30 rounded-lg shadow-2xl min-w-[120px] py-2 px-3 text-sm font-normal text-white">
                  <span className="block py-1 px-2 hover:bg-white/20 rounded transition-colors duration-200">Option 1</span>
                  <span className="block py-1 px-2 hover:bg-white/20 rounded transition-colors duration-200">Option 2</span>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Icons + Mobile Toggle */}
        <div className="flex items-center gap-4 text-xl">
          <button className="hover:text-cyan-200 transition-colors duration-300 p-2 rounded-full hover:bg-white/10">
            <FaSearch />
          </button>
          <button className="hover:text-cyan-200 transition-colors duration-300 p-2 rounded-full hover:bg-white/10">
            <FaUser />
          </button>
          <button className="hover:text-cyan-200 transition-colors duration-300 p-2 rounded-full hover:bg-white/10">
            <FaShoppingCart />
          </button>
          <button
            className="md:hidden ml-2 hover:text-cyan-200 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`md:hidden px-6 pb-4 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-md bg-white/10 border-t border-white/20' 
            : 'bg-gradient-to-b from-[#5b0eb0] to-[#1f63db]'
        }`}>
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            {navLinks.map((link, idx) => (
              <li key={idx} className="cursor-pointer hover:text-cyan-200 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10">
                {link.label}
                {link.dropdown && <span className="ml-1 text-xs">▼</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
