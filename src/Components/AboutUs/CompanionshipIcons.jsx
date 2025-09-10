import React from "react";
import { motion } from "framer-motion";

const HeartIcon = ({ className = "" }) => (
  <motion.svg
    className={className}
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <motion.path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="currentColor"
      className="text-cyan-400"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
  </motion.svg>
);

const ConnectionIcon = ({ className = "" }) => (
  <motion.svg
    className={className}
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ rotate: -180 }}
    animate={{ rotate: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <motion.circle
      cx="12"
      cy="12"
      r="3"
      fill="currentColor"
      className="text-purple-400"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    />
    <motion.circle
      cx="6"
      cy="6"
      r="2"
      fill="currentColor"
      className="text-cyan-400"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    />
    <motion.circle
      cx="18"
      cy="6"
      r="2"
      fill="currentColor"
      className="text-cyan-400"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    />
    <motion.circle
      cx="6"
      cy="18"
      r="2"
      fill="currentColor"
      className="text-cyan-400"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    />
    <motion.circle
      cx="18"
      cy="18"
      r="2"
      fill="currentColor"
      className="text-cyan-400"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    />
    <motion.line
      x1="12"
      y1="12"
      x2="6"
      y2="6"
      stroke="currentColor"
      className="text-purple-400"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    />
    <motion.line
      x1="12"
      y1="12"
      x2="18"
      y2="6"
      stroke="currentColor"
      className="text-purple-400"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1.6 }}
    />
    <motion.line
      x1="12"
      y1="12"
      x2="6"
      y2="18"
      stroke="currentColor"
      className="text-purple-400"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1.8 }}
    />
    <motion.line
      x1="12"
      y1="12"
      x2="18"
      y2="18"
      stroke="currentColor"
      className="text-purple-400"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 2 }}
    />
  </motion.svg>
);

const GrowthIcon = ({ className = "" }) => (
  <motion.svg
    className={className}
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <motion.path
      d="M12 2L12 22"
      stroke="currentColor"
      className="text-cyan-400"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    />
    <motion.path
      d="M8 6L12 2L16 6"
      stroke="currentColor"
      className="text-purple-400"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
    <motion.circle
      cx="12"
      cy="8"
      r="2"
      fill="currentColor"
      className="text-cyan-400"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    />
    <motion.circle
      cx="12"
      cy="14"
      r="2.5"
      fill="currentColor"
      className="text-purple-400"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    />
    <motion.circle
      cx="12"
      cy="20"
      r="3"
      fill="currentColor"
      className="text-cyan-400"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1.4 }}
    />
  </motion.svg>
);

const ShieldIcon = ({ className = "" }) => (
  <motion.svg
    className={className}
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 0, rotate: -45 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    <motion.path
      d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
      stroke="currentColor"
      className="text-purple-400"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 0.7 }}
    />
    <motion.path
      d="M9 12L11 14L15 10"
      stroke="currentColor"
      className="text-cyan-400"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    />
  </motion.svg>
);

export { HeartIcon, ConnectionIcon, GrowthIcon, ShieldIcon };
