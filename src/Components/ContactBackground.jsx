import React from "react";
import { motion } from "framer-motion";

const Blob = ({ style, animateProps }) => (
  <motion.div
    className="absolute rounded-full filter blur-[120px] opacity-70"
    style={style}
    animate={animateProps}
  />
);

const ContactBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
      <Blob
        style={{
          width: "700px",
          height: "700px",
          top: "-250px",
          left: "-300px",
          background: "rgba(173, 216, 230, 0.6)", // Light Blue
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
          width: "400px",
          height: "400px",
          bottom: "-100px",
          right: "-150px",
          background: "rgba(10, 120, 180, 0.5)",
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
          width: "300px",
          height: "300px",
          top: "20%",
          right: "10%",
          background: "rgba(150, 20, 80, 0.4)",
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
