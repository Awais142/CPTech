import React from "react";
import HeroSection from "../Components/AboutUs/HeroSection";
import ValuesSection from "../Components/AboutUs/ValuesSection";
import PracticeMakesPerfect from "../Components/AboutUs/PracticeMakesPerfect";
import CompanionshipSection from "../Components/AboutUs/CompanionshipSection";
import FinalSloganSection from "../Components/AboutUs/FinalSloganSection";
import TeamSection from "../Components/AboutUs/TeamSection";

const AboutUs = () => {
  return (
    <div className="about-page">
      <HeroSection />
      <ValuesSection />
      <PracticeMakesPerfect />
      <FinalSloganSection />
      <CompanionshipSection />
    </div>
  );
};

export default AboutUs;
