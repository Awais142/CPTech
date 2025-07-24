// src/components/Navbar.jsx
import React, { useState } from "react";
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

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10 drop-shadow-lg" />
          <span className="font-extrabold text-2xl tracking-widest drop-shadow">HAYATI</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-base font-semibold">
          {navLinks.map((link, idx) => (
            <li key={idx} className="relative group cursor-pointer hover:text-cyan-100">
              {link.label}
              {link.dropdown && <span className="ml-1 text-xs">▼</span>}
              {link.dropdown && (
                <div className="absolute left-0 top-8 hidden group-hover:block bg-white text-blue-700 rounded shadow-md min-w-[120px] py-2 px-3 text-sm font-normal">
                  <span className="block py-1 px-2 hover:bg-blue-50 rounded">Option 1</span>
                  <span className="block py-1 px-2 hover:bg-blue-50 rounded">Option 2</span>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Icons + Mobile Toggle */}
        <div className="flex items-center gap-4 text-xl">
          <button className="hover:text-cyan-200">
            <FaSearch />
          </button>
          <button className="hover:text-cyan-200">
            <FaUser />
          </button>
          <button className="hover:text-cyan-200">
            <FaShoppingCart />
          </button>
          <button
            className="md:hidden ml-2 hover:text-cyan-200"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-700 via-blue-500 to-cyan-400 px-6 pb-4">
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            {navLinks.map((link, idx) => (
              <li key={idx} className="cursor-pointer hover:text-cyan-100">
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
