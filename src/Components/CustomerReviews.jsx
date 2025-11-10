import React, { useState, useEffect, memo } from "react";
import { BsStars, BsQuote } from "react-icons/bs";

const CustomerReviews = memo(() => {
  const reviews = [
    {
      id: 1,
      name: "Alex Thompson",
      handle: "@VapeEnthusiast",
      comment:
        "The CP® 15K Pro is absolutely incredible! The battery life lasts me all day and the flavor quality is unmatched. Best purchase I've made this year!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      verified: true,
      product: "CP® 15K Pro",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      handle: "@CloudChaser",
      comment:
        "Just got the CP® Flow Bar 25K and I'm blown away! The draw is so smooth and the 25K puffs really do last. Highly recommend to anyone looking for quality!",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      verified: true,
      product: "CP® Flow Bar 25K",
    },
    {
      id: 3,
      name: "James Wilson",
      handle: "@VapeReviewer",
      comment:
        "CP® Crystal CP 600 has become my daily driver. The crystal clear design is stunning and the performance is top-notch. Great value for money!",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      verified: true,
      product: "CP® Crystal CP 600",
    },
    {
      id: 4,
      name: "Emma Davis",
      handle: "@VapeLover",
      comment:
        "The CP® Crystal Pro 600 is a game changer! Premium build quality, excellent flavor production, and it looks absolutely beautiful. Worth every penny!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      verified: true,
      product: "CP® Crystal Pro 600",
    },
    {
      id: 5,
      name: "Michael Brown",
      handle: "@TechVaper",
      comment:
        "I've tried many devices, but the CP® 15K Pro stands out. Fast charging, long-lasting battery, and incredible flavor. This is what quality looks like!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      verified: true,
      product: "CP® 15K Pro",
    },
    {
      id: 6,
      name: "Olivia Martinez",
      handle: "@VapeQueen",
      comment:
        "CP® Flow Bar 25K exceeded all my expectations! The flavor is rich and consistent throughout all 25K puffs. Best disposable I've ever used!",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      verified: true,
      product: "CP® Flow Bar 25K",
    },
    {
      id: 7,
      name: "David Lee",
      handle: "@VapePro",
      comment:
        "CP® Crystal CP 600 delivers exceptional performance. The airflow control is perfect and the flavor intensity is amazing. Highly satisfied customer!",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      verified: true,
      product: "CP® Crystal CP 600",
    },
    {
      id: 8,
      name: "Sophia Garcia",
      handle: "@VapeStyle",
      comment:
        "The CP® Crystal Pro 600 is absolutely stunning! Not only does it look premium, but the performance is outstanding. Perfect for both beginners and pros!",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      verified: true,
      product: "CP® Crystal Pro 600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("customer-reviews");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="customer-reviews"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BsStars className="text-2xl text-cyan-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Customer Reviews
            </h2>
            <BsStars className="text-2xl text-cyan-400 animate-pulse" />
          </div>
          <div className="h-1 w-24 bg-gradient-cyan-purple rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about CP Tech products
          </p>
        </div>

        {/* Main Review Display */}
        <div className="relative">
          {/* Featured Review Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-cyan-100">
              <BsQuote className="text-6xl" />
            </div>

            {/* Review Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <img
                  src={reviews[currentIndex].avatar}
                  alt={reviews[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-cyan-200"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {reviews[currentIndex].name}
                    </h3>
                    {reviews[currentIndex].verified && (
                      <span className="bg-cyan-100 text-cyan-600 text-xs font-semibold px-2 py-1 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-cyan-600 font-medium">
                    {reviews[currentIndex].handle}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <BsStars key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Badge */}
              {reviews[currentIndex].product && (
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                    {reviews[currentIndex].product}
                  </span>
                </div>
              )}

              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                "{reviews[currentIndex].comment}"
              </blockquote>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-cyan-600 hover:bg-cyan-50 transition-all duration-300 transform hover:scale-110"
              aria-label="Previous review"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-cyan-purple scale-125"
                      : "bg-gray-300 hover:bg-cyan-300"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-cyan-600 hover:bg-cyan-50 transition-all duration-300 transform hover:scale-110"
              aria-label="Next review"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default CustomerReviews;
