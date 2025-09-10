import React from "react";
import { motion } from "framer-motion";
import { HeartIcon, ConnectionIcon, GrowthIcon, ShieldIcon } from "./CompanionshipIcons";

const CompanionshipSection = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
          >
            Join the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600"> CP Tech</span>
            <br />Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto"
          >
            Experience the perfect blend of innovation, quality, and satisfaction. CP Tech is more than just vaping – it's a lifestyle choice for those who demand excellence.
          </motion.p>
        </div>

        {/* Animated Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <HeartIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">Crafted with the finest ingredients</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <ConnectionIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600 text-sm">Connect with fellow enthusiasts</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <GrowthIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">Leading vaping technology</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <ShieldIcon />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
            <p className="text-gray-600 text-sm">Your protection is our priority</p>
          </motion.div>
        </div>

        {/* Enhanced Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-md rounded-xl p-6 border border-gray-200 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Discover Flavor</h3>
            </div>
            <p className="text-gray-700">
              Explore our extensive range of premium e-liquids, each meticulously crafted to deliver an unparalleled vaping experience with rich, authentic flavors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-md rounded-xl p-6 border border-gray-200 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Advanced Devices</h3>
            </div>
            <p className="text-gray-700">
              Experience cutting-edge vaping technology with our innovative devices, designed for performance, reliability, and exceptional vapor production.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-md rounded-xl p-6 border border-gray-200 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Elevate Your Journey</h3>
            </div>
            <p className="text-gray-700">
              Join thousands of satisfied vapers who have made CP Tech their trusted companion. Elevate your vaping journey with quality you can count on.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer">
            <span className="text-lg font-semibold">Start Your Journey</span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanionshipSection;
