import React from "react";
import { motion } from "framer-motion";

const CountriesGrid = ({ countries }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Global Network
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From our home base in Pakistan to major markets worldwide, we're
            building a global community of innovation and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{country.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {country.name}
                  </h3>
                  <p className="text-gray-300">{country.stats.market} Market</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{country.description}</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400">
                    {country.stats.partners}
                  </div>
                  <div className="text-sm text-gray-400">Partners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">
                    {country.stats.established}
                  </div>
                  <div className="text-sm text-gray-400">Since</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-gray-400">Coverage</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesGrid;

