import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Toolbar from "./Components/Toolbar";
import Navbar from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import ProductSlider from "./Components/ProductSlider";
import CompanyVideo from "./Components/CompanyVideo";
import CustomerReviews from "./Components/CustomerReviews";
import Footer from "./Components/Footer";
import GoToTop from "./Components/GoToTop";
import CPFifteenK from "./Pages/CPFifteenK";
import CPTwist from "./Pages/CPTwist";
import AllProducts from "./Pages/AllProducts";
import AgeVerifier from "./Components/AgeVerifier";
import ParallexVideoSection from "./Components/ParallexVideoSection";
import VideoSlider from "./Components/VideoSlider";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
// Main Home Page Component
const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSlider />
      <ProductSlider />
      <CompanyVideo />
      <VideoSlider />
      <ParallexVideoSection />
      <CustomerReviews />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AgeVerifier />
      <Toolbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/cp-15k" element={<CPFifteenK />} />
        <Route path="/cp-twist" element={<CPTwist />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
      <GoToTop />
    </Router>
  );
}

export default App;
