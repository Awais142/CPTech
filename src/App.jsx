import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import Toolbar from "./Components/Toolbar";
import Navbar from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import WhoWeAre from "./Components/WhoWeAre";
import OurVision from "./Components/OurVision";
import ProductSlider from "./Components/ProductSlider";
import CompanyVideo from "./Components/CompanyVideo";
import CustomerReviews from "./Components/CustomerReviews";
import HayatiQuokkaPro from "./Pages/HayatiQuokkaPro";
import AgeVerifier from "./Components/AgeVerifier";
import ParallexVideoSection from "./Components/ParallexVideoSection";
import VideoSlider from "./Components/VideoSlider";

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
      <Toolbar />
      <Navbar />
      <HeroSlider />
      <CompanyVideo />
      <WhoWeAre />
      <VideoSlider />
      <ParallexVideoSection />
      <CustomerReviews />
      <OurVision />
      <ProductSlider />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AgeVerifier />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HayatiQuokkaPro" element={<HayatiQuokkaPro />} />
      </Routes>
    </Router>
  );
}

export default App;
