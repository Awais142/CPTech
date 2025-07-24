import React from "react";
import Toolbar from "./Components/Toolbar";
import Navbar from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toolbar />
      <Navbar />
      <HeroSlider />
    </div>
  );
}

export default App;
