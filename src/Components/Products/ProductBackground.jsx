import React from "react";

const ProductBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>

      {/* Vape device silhouettes (static with depth) */}
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
      <div className="absolute top-1/3 right-1/3 w-64 h-32 animate-pulseSlow opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-24 animate-pulseSlow opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-pink-200 to-orange-200 rounded-full blur-3xl"></div>
      </div>

      {/* Animated vape icon floating - Bigger and with working animations */}
      <div className="absolute left-[15%] top-[70%] w-16 h-16 animate-float-diagonal opacity-40">
        <img
          src="src\assets\product-images\first-product-images\icon-1.png"
          alt="Vape"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute right-[20%] top-[30%] w-20 h-20 animate-float-horizontal opacity-50">
        <img
          src="src\assets\product-images\first-product-images\icon-2.png"
          alt="Vape"
          className="w-full h-full object-contain"
        />
      </div>

      {/* SVG smoke animation */}
      <svg
        className="absolute top-1/4 left-1/2 animate-smoke-float opacity-10"
        width="200"
        height="200"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" fill="url(#smokeGradient)" />
        <defs>
          <radialGradient id="smokeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ccc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5">
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
