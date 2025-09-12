import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import HeroSection from "../Components/AboutUs/HeroSection";
import ValuesSection from "../Components/AboutUs/ValuesSection";
import PracticeMakesPerfect from "../Components/AboutUs/PracticeMakesPerfect";
import CompanionshipSection from "../Components/AboutUs/CompanionshipSection";
import FinalSloganSection from "../Components/AboutUs/FinalSloganSection";
import TeamSection from "../Components/AboutUs/TeamSection";

// Assets
const philosophyImg =
  "https://dbh4s5ja0maaw.cloudfront.net/about/product_philosophy.jpg";
const sustainableImg =
  "https://dbh4s5ja0maaw.cloudfront.net/about/sustainable_exploration.jpg";
const companionshipImg =
  "https://dbh4s5ja0maaw.cloudfront.net/about/companionship_img.jpg";

const AboutUs = () => {
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Philosophy data
  const philosophies = [
    {
      title: "Product Philosophy",
      description:
        "There is no established formula for achieving excellence; it requires a balance of multiple variables. After conducting extensive research and accumulated experience, we've discovered our direction. We spare no effort to keep moving forward and continuously developing our performance standards.",
      image: philosophyImg,
    },
    {
      title: "Sustainable Exploration",
      description:
        "As CP Tech grows, our exploration and protection of the environment and society continue. We actively seek environmentally friendly materials and sustainable practices to pursue a harmonious balance between technology and nature.",
      image: sustainableImg,
    },
  ];


  // Auto-rotate philosophy slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % philosophies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="about-page">
      <HeroSection />
      <ValuesSection />
      <PracticeMakesPerfect />
      <FinalSloganSection />
      <CompanionshipSection />
      <TeamSection />
    </div>
  );
};

export default AboutUs;
