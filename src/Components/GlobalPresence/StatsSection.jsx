import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      number: "5",
      label: "Countries",
      color: "text-cyan-400",
      delay: 0.1,
    },
    {
      number: "80+",
      label: "Partners",
      color: "text-purple-400",
      delay: 0.2,
    },
    {
      number: "4",
      label: "Years",
      color: "text-green-400",
      delay: 0.3,
    },
    {
      number: "24/7",
      label: "Support",
      color: "text-yellow-400",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className={`text-5xl font-bold ${stat.color} mb-2`}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
