import React, { useState, useEffect } from "react";

const AgeVerifier = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasVerified, setHasVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (!verified) {
      setIsVisible(true);
    } else {
      setHasVerified(true);
    }
  }, []);

  const handleAgeVerification = (isOver21) => {
    if (isOver21) {
      localStorage.setItem("ageVerified", "true");
      setHasVerified(true);
      setIsVisible(false);
    } else {
      alert("You must be 21 or older to access this site.");
    }
  };

  if (hasVerified || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
      {/* Animated Blob Background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        {/* Main gradient blob */}
        <div className="absolute w-[900px] h-[900px] bg-gradient-to-br from-[#5b0eb0] to-[#1f63db] opacity-60 rounded-full blur-3xl animate-blob1 left-[-300px] top-[-200px]" />
        {/* Secondary blob for depth */}
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-br from-[#1f63db] to-[#5b0eb0] opacity-40 rounded-full blur-3xl animate-blob2 right-[-250px] bottom-[-150px]" />
        {/* Red accent blob for vibrancy */}
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#ff003c] to-[#ff6a00] opacity-30 rounded-full blur-3xl animate-blob3 right-[-200px] top-[60%]" />
      </div>
      {/* Modal Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-6 py-16 rounded-3xl text-center">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          AGE VERIFICATION
        </h1>
        <p className="text-white text-base md:text-lg font-medium mb-6 max-w-xl">
          To use the CP Tech website you must be at least 21 years old or above.
          <br />
          Please verify your age before entering the site.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mb-8 w-full justify-center">
          <button
            onClick={() => handleAgeVerification(false)}
            className="flex-1 border border-white text-white font-semibold py-3 md:py-4 rounded-full text-lg md:text-xl hover:bg-white/10 transition-all duration-200"
          >
            Under 21
          </button>
          <button
            onClick={() => handleAgeVerification(true)}
            className="flex-1 border border-white text-white font-semibold py-3 md:py-4 rounded-full text-lg md:text-xl hover:bg-white/10 transition-all duration-200"
          >
            I am 21+
          </button>
        </div>
        <p className="text-white text-sm md:text-base font-semibold mt-2">
          WARNING: This product contains nicotine. Nicotine is an addictive
          chemical.
        </p>
      </div>
      {/* Keyframes for blob animation */}
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1, 0.9) translate(40px, 30px); }
          66% { transform: scale(0.95, 1.05) translate(-30px, -20px); }
        }
        @keyframes blob2 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          25% { transform: scale(1.05, 0.95) translate(-20px, 40px); }
          50% { transform: scale(0.9, 1.1) translate(30px, -30px); }
          75% { transform: scale(1.1, 1) translate(-40px, 20px); }
        }
        @keyframes blob3 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.2, 0.8) translate(-60px, 40px); }
        }
        .animate-blob1 { animation: blob1 16s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 22s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 18s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default AgeVerifier;
