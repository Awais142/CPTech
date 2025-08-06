import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "@GrimmGreen",
      comment: "OXVA Xlim Pro and Pro SQ are goooooooooooooooooooooooood!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "@Matt From SMM",
      comment:
        "Excellent flavor and an easy-to-use menu for a smooth experience.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "@El Mono Vapeador",
      comment: "Very nice! 1600mAh battery with excellent vapor production",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "@SAINT SKINNY",
      comment: "Stylish design with unique color gradients and patterns",
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
      name: "@VapeMaster",
      comment: "Incredible battery life and smooth airflow control",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "@CloudChaser",
      comment: "Best flavor production I've experienced in a pod system",
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
        <div className="mb-8">
          <div className="flex animate-scroll-left">
            {/* Duplicate reviews for seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-80 md:w-96 mx-4 bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm mb-2">
                      {review.name}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Right */}
        <div>
          <div className="flex animate-scroll-right">
            {/* Duplicate reviews for seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-80 md:w-96 mx-4 bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm mb-2">
                      {review.name}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
