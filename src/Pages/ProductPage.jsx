import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaShare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BsStars, BsCheckCircle } from "react-icons/bs";
import Lenis from "@studio-freight/lenis";
import products from "../data/products.json";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("features");

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Find product by ID
  useEffect(() => {
    const foundProduct = products.all.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-gradient-cyan-purple text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  // Mock color/flavor options for demonstration
  const colorOptions = [
    { name: "Classic Black", color: "bg-black", image: product?.image },
    {
      name: "Pearl White",
      color: "bg-white border-2 border-gray-300",
      image: product?.image,
    },
    { name: "Ocean Blue", color: "bg-cyan-400", image: product?.image },
    { name: "Royal Purple", color: "bg-purple-400", image: product?.image },
  ];

  // Mock product images for slider
  const productImages = [
    product?.image,
    product?.image,
    product?.image,
    product?.image,
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-cyan-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-cyan-custom transition-colors mb-8"
        >
          <FaArrowLeft />
          Back to Products
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image Slider */}
          <div className="space-y-6">
            <div className="relative aspect-square bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center overflow-hidden">
              <img
                src={productImages[currentImageIndex]}
                alt={product.name}
                className="max-w-full max-h-full object-contain transition-all duration-500"
              />

              {/* Slider Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
              >
                <FaChevronRight className="text-gray-600" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square bg-white rounded-xl shadow-md p-4 cursor-pointer transition-all duration-300 ${
                    currentImageIndex === index
                      ? "ring-2 ring-cyan-custom shadow-lg"
                      : "hover:shadow-lg"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Product Header */}
            <div>
              {product.isNew && (
                <div className="inline-flex items-center gap-2 bg-gradient-cyan-purple text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
                  <BsStars className="text-xs" />
                  NEW
                </div>
              )}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-cyan-custom">
                  ${product.price}
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <BsStars key={star} className="text-yellow-400 text-sm" />
                  ))}
                  <span className="text-gray-600 ml-2">(4.8)</span>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color/Flavor Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Available Variants
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {colorOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedColor === index
                        ? "border-cyan-custom bg-cyan-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full ${option.color}`}
                      ></div>
                      <span className="font-medium text-gray-900">
                        {option.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Share Button */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-full font-medium text-gray-700 hover:border-cyan-custom hover:text-cyan-custom transition-all duration-300">
                <FaShare />
                Share Product
              </button>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: "features", label: "Features" },
                { id: "specifications", label: "Specifications" },
                { id: "whats-included", label: "What's Included" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 font-semibold text-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-cyan-custom border-b-2 border-cyan-custom bg-cyan-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "features" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <BsCheckCircle className="text-cyan-custom text-xl mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">
                        Dimensions
                      </span>
                      <span className="text-gray-900">120 x 45 x 15 mm</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">Weight</span>
                      <span className="text-gray-900">85g</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">
                        Battery Capacity
                      </span>
                      <span className="text-gray-900">1500mAh</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">
                        Charging Time
                      </span>
                      <span className="text-gray-900">45 minutes</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">
                        Power Output
                      </span>
                      <span className="text-gray-900">15W</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">
                        Material
                      </span>
                      <span className="text-gray-900">Aluminum Alloy</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">
                        Warranty
                      </span>
                      <span className="text-gray-900">2 Years</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">SKU</span>
                      <span className="text-gray-900">
                        CP-{product.id.toString().padStart(3, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "whats-included" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.whatsInBox.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <BsCheckCircle className="text-green-500 text-xl" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
