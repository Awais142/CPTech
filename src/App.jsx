import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Toolbar from "./Components/Toolbar";
import Navbar from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import WhoWeAre from "./Components/WhoWeAre";
import OurVision from "./Components/OurVision";

function App() {
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
      <WhoWeAre />
      <HeroSlider />
      <WhoWeAre />
      <OurVision />
    </div>
  );
}

export default App;
