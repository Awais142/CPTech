import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Footer from "../Components/Footer";
import heroImg from "../assets/25kTwis1.jpg";
import ContactBackground from "../Components/ContactBackground";
import { FaLightbulb, FaShieldAlt, FaBriefcase } from "react-icons/fa";

const ContactUs = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const lenis = new Lenis();
    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success"); // purely visual for now
  };
  return (
    <div className="min-h-screen text-gray-800 relative">
      <ContactBackground />
      <div className="relative z-10">
        {/* Section 1: Left text, right image */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <span className="inline-block text-xs tracking-widest font-semibold text-gray-500 border border-gray-200 rounded-full px-3 py-1 mb-4">
                Get in touch
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                We’re here to help you with CP Tech
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                Questions about products, support, or collaboration? Our team is ready
                to assist. Share your details and we’ll reach back shortly.
              </p>
              <ul className="space-y-4 text-gray-600 mb-8">
                <li className="flex items-start gap-4">
                  <FaLightbulb className="text-cyan-500 mt-1 flex-shrink-0" size={20} />
                  <span>Expert guidance on CP 15K and Twist series</span>
                </li>
                <li className="flex items-start gap-4">
                  <FaShieldAlt className="text-purple-500 mt-1 flex-shrink-0" size={20} />
                  <span>Warranty and after-sales support</span>
                </li>
                <li className="flex items-start gap-4">
                  <FaBriefcase className="text-pink-500 mt-1 flex-shrink-0" size={20} />
                  <span>Business and distribution inquiries</span>
                </li>
              </ul>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gray-800 hover:bg-black text-white transition-colors font-semibold"
              >
                Contact form below
              </a>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gray-500/10 blur-3xl rounded-3xl"></div>
              <img
                src={heroImg}
                alt="Contact CP Tech"
                className="w-full h-auto rounded-2xl border border-gray-200 shadow-2xl object-cover"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Contact form */}
        <section id="contact-form" className="max-w-7xl mx-auto px-6 pb-24">
          <div className="bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-6 md:p-10 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Contact form</h2>
            <p className="text-gray-500 mb-8">
              Fill out the form and our team will get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="px-4 py-3 rounded-xl bg-white/80 border border-gray-300 outline-none focus:ring-2 ring-blue-400"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="px-4 py-3 rounded-xl bg-white/80 border border-gray-300 outline-none focus:ring-2 ring-blue-400"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 555 123 4567"
                  className="px-4 py-3 rounded-xl bg-white/80 border border-gray-300 outline-none focus:ring-2 ring-blue-400"
                />
              </div>

              <div className="flex flex-col md:col-span-2">
                <label htmlFor="message" className="text-sm text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  placeholder="How can we help you?"
                  className="px-4 py-3 rounded-xl bg-white/80 border border-gray-300 outline-none focus:ring-2 ring-blue-400 resize-y"
                ></textarea>
              </div>

              <div className="md:col-span-2 flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-800 hover:bg-black text-white transition-colors font-semibold"
                >
                  Submit
                </button>

                {status === "success" && (
                  <span className="text-sm text-green-400">
                    Thanks! We’ll be in touch.
                  </span>
                )}
              </div>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;