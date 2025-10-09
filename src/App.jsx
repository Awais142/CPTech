import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Toolbar from "./Components/Toolbar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import GoToTop from "./Components/GoToTop";
import CPFifteenK from "./Pages/CPFifteenK";
import CPTwist from "./Pages/CPTwist";
import AllProducts from "./Pages/AllProducts";
import ProductPage from "./Pages/ProductPage";
import AgeVerifier from "./Components/AgeVerifier";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import LazyHomePage from "./Components/LazyHomePage";
// Use the optimized LazyHomePage component
const HomePage = LazyHomePage;

function App() {
  return (
    <Router>
      <AgeVerifier />
      <Toolbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductPage />} />
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
