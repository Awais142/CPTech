import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import PracticeMakesPerfect from "../Components/AboutUs/PracticeMakesPerfect";
import CompanionshipSection from "../Components/AboutUs/CompanionshipSection";
import FinalSloganSection from "../Components/AboutUs/FinalSloganSection";

// Assets
const heroBg =
  "https://images.unsplash.com/photo-1522071820081-009c5fdc7b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80";
const enjoyImg =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const reliableImg =
  "https://images.unsplash.com/photo-1522071820081-009c5fdc7b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const experienceImg =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
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

  // Hero section animation
  const heroY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Values section data
  const values = [
    {
      title: "ENJOY",
      description:
        "At CP Tech, we see life as a beautiful journey to be savored and enjoyed. That's why we believe that our products are not just tools, but an innovative lifestyle that brings joy, inspiration and empowerment.",
      image: enjoyImg,
    },
    {
      title: "RELIABLE",
      description:
        "We prioritize users in everything we do. With a user-driven philosophy and innovative R&D, we are committed to providing products of both high quality and great performance.",
      image: reliableImg,
    },
    {
      title: "EXPERIENCE",
      description:
        "We present users with a distinct experience, sharing an interactive and companionable journey. With CP Tech, embrace a brand new lifestyle and unlock new levels of imagination.",
      image: experienceImg,
    },
  ];

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

  // Team members data
  const teamMembers = [
    {
      name: "Zaheer Mansha",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Visionary leader with 15+ years of experience in the industry.",
    },
    {
      name: "Uzair Rizwan",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Technology expert with a passion for innovation and problem-solving.",
    },
    {
      name: "Fakhir Ahmed",
      role: "Lead Designer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Creative mind behind our award-winning product designs.",
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
      {/* Hero Section */}
      <section className="floor-container h-screen relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="CP Tech"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 px-4 w-full max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Keep Exploring the Frontiers of a Better World.
          </h1>
        </motion.div>
      </section>
      {/* Values Section - Enjoy, Reliable, Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Enjoy */}
            <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden group">
              <img
                src={values[0].image}
                alt={values[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {values[0].title}
                  </h3>
                  <p className="text-gray-200">{values[0].description}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white text-4xl font-bold">
                {values[0].title}
              </div>
            </div>

            {/* Right side - Reliable and Experience */}
            <div className="space-y-8">
              <div className="relative h-48 md:h-[290px] rounded-xl overflow-hidden group">
                <img
                  src={values[1].image}
                  alt={values[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {values[1].title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {values[1].description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-white text-2xl font-bold">
                  {values[1].title}
                </div>
              </div>

              <div className="relative h-48 md:h-[290px] rounded-xl overflow-hidden group">
                <img
                  src={values[2].image}
                  alt={values[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {values[2].title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {values[2].description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 text-white text-2xl font-bold">
                  {values[2].title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Practice Makes Perfect Section */}
      <PracticeMakesPerfect />
      <FinalSloganSection />
      <CompanionshipSection />
      {/* Team Section */}
      <section className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind our success, dedicated to excellence in
              every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl bg-white shadow-lg"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-cyan-300 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-200">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape our culture and drive our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We embrace creativity and are constantly exploring new ideas to push boundaries.",
                icon: "💡",
              },
              {
                title: "Integrity",
                description:
                  "We conduct our business with honesty, transparency, and ethical practices.",
                icon: "🤝",
              },
              {
                title: "Excellence",
                description:
                  "We strive for the highest standards in everything we do, delivering quality without compromise.",
                icon: "✨",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
