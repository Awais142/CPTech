import React from "react";

const ProductBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>

      {/* Vape device silhouettes */}
      <div className="absolute top-20 left-10 w-32 h-64 opacity-5">
        <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 rounded-full transform rotate-12"></div>
      </div>

      <div className="absolute top-40 right-20 w-24 h-48 opacity-5">
        <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 rounded-full transform -rotate-6"></div>
      </div>

      <div className="absolute bottom-40 left-1/4 w-28 h-56 opacity-5">
        <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 rounded-full transform rotate-3"></div>
      </div>

      {/* Smoke/cloud effects */}
      <div className="absolute top-1/3 right-1/3 w-64 h-32 opacity-3">
        <div className="w-full h-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-xl"></div>
      </div>

      <div className="absolute bottom-1/3 left-1/3 w-48 h-24 opacity-3">
        <div className="w-full h-full bg-gradient-to-r from-pink-200 to-orange-200 rounded-full blur-xl"></div>
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-2">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `,
            backgroundSize: "400px 400px, 300px 300px, 500px 500px",
            backgroundPosition: "0 0, 100px 100px, 200px 200px",
          }}
        ></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProductBackground;
