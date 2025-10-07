import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShoppingCart, FaHeart, FaShare } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Lenis from "@studio-freight/lenis";
import products from "../data/products.json";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

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

  // Mock color options for demonstration
  const colorOptions = [
    { name: "Black", color: "bg-black" },
    { name: "White", color: "bg-white border-2 border-gray-300" },
    { name: "Cyan", color: "bg-cyan-400" },
    { name: "Purple", color: "bg-purple-400" },
  ];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} view ${i}`}
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

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Choose Color
              </h3>
              <div className="flex gap-3">
                {colorOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === index
                        ? "border-cyan-custom scale-110"
                        : "border-gray-300 hover:border-gray-400"
                    } ${option.color}`}
                    title={option.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quantity
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-cyan-custom transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-cyan-custom transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-cyan-purple text-white py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <FaShoppingCart />
                  Add to Cart
                </button>
                <button className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-cyan-custom transition-colors">
                  <FaHeart className="text-gray-600" />
                </button>
                <button className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-cyan-custom transition-colors">
                  <FaShare className="text-gray-600" />
                </button>
              </div>
              <button className="w-full bg-white text-cyan-custom border-2 border-cyan-custom py-4 rounded-full font-semibold text-lg hover:bg-cyan-custom hover:text-white transition-all duration-300">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <div className="w-2 h-2 bg-cyan-custom rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Product Information
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">
                    {product.category.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">SKU:</span>
                  <span className="font-medium">
                    CP-{product.id.toString().padStart(3, "0")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability:</span>
                  <span className="font-medium text-green-600">In Stock</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">
                    Free shipping on orders over $100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
