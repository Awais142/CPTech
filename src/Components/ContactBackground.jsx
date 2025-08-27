import React from "react";
import { motion } from "framer-motion";

const Blob = ({ style, animateProps }) => (
  <motion.div
    className="absolute rounded-full filter blur-3xl opacity-50"
    style={style}
    animate={animateProps}
  />
);

const ContactBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
      <Blob
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          left: "-250px",
          background: "rgba(65, 201, 226, 0.5)", // Vibrant Cyan
        }}
        animateProps={{
          x: [0, 50, -30, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.9, 1],
          rotate: [0, 10, -5, 0],
          transition: {
            duration: 25,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
      />
      <Blob
        style={{
          width: "500px",
          height: "500px",
          bottom: "-150px",
          right: "-200px",
          background: "rgba(128, 90, 213, 0.5)", // Vibrant Purple
        }}
        animateProps={{
          x: [0, -40, 20, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.05, 0.95, 1],
          rotate: [0, -8, 12, 0],
          transition: {
            duration: 30,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
      />
       <Blob
        style={{
          width: "450px",
          height: "450px",
          top: "15%",
          right: "5%",
          background: "rgba(255, 105, 180, 0.4)", // Vibrant Pink
        }}
        animateProps={{
          x: [0, 20, -20, 0],
          y: [0, -30, 30, 0],
          transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
};

export default ContactBackground;
