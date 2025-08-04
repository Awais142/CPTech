import React from "react";
import {
  FaBatteryFull,
  FaThermometerHalf,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

const ProductFeatures = ({ features = [] }) => {
  const defaultFeatures = [
    {
      icon: <FaBatteryFull className="w-8 h-8" />,
      title: "Long Battery Life",
      description:
        "Up to 24 hours of continuous use with our advanced battery technology.",
    },
    {
      icon: <FaThermometerHalf className="w-8 h-8" />,
      title: "Temperature Control",
      description:
        "Precise temperature control for the perfect vaping experience every time.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Safety Features",
      description:
        "Multiple safety mechanisms to ensure safe and reliable operation.",
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Smart Technology",
      description:
        "Advanced sensors and smart features for optimal performance.",
    },
  ];

  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes our product stand out from the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
