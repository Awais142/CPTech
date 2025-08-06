import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "@Vaping 101",
      comment:
        "Wow! Fast auto-draw response and versatile DTL to MTL performance",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "@Vaping With Vic",
      comment: "Great flavor with similar quality to disposables from XLIM GO",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "@GrimmGreen",
      comment: "OXVA Xlim Pro and Pro SQ are goooooooooooooooooooooooood!",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "@Matt From SMM",
      comment: "Excellent flavor and an easy-to-use for a smooth experience.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "@Fakir Liquid Squad",
      comment:
        "OXVA XLIM CLASSIC EDITION is simple, timeless design combined with excellent flavor performance",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "@Dampf Wolke",
      comment:
        "XLIM SE offers cost-effective and eco-friendly alternative to disposable e-cigarettes",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "@FV Vape Show",
      comment: "XLIM SE's superior flavor and airflow control",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "@VapeMaster",
      comment: "Incredible battery life and smooth airflow control",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CUSTOMER COMMENTS
          </h2>
        </div>

        {/* First Row - Moving Left */}
        <div className="flex animate-scroll-left mb-6 -ml-4">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-80 md:w-96 mx-4 bg-[#1E1E1E] hover:bg-[#2C2C2C] rounded-lg py-4 px-5 shadow-md cursor-pointer transition-all duration-300 ease-in-out flex items-center"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-white font-semibold text-sm">
                  @{review.name}
                </p>
                <p className="text-gray-300 text-sm mt-1 leading-snug">
                  "{review.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Moving Right */}
        <div className="flex animate-scroll-right">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-80 md:w-96 mx-4 bg-[#1E1E1E] hover:bg-[#2C2C2C] rounded-lg py-4 px-5 shadow-md cursor-pointer transition-all duration-300 ease-in-out flex items-center"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-white font-semibold text-sm">
                  @{review.name}
                </p>
                <p className="text-gray-300 text-sm mt-1 leading-snug">
                  "{review.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
