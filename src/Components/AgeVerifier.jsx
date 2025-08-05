import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const AgeVerifier = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasVerified, setHasVerified] = useState(false);

  useEffect(() => {
    // Check if user has already verified their age
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
      // Redirect to a "not old enough" page or show message
      alert("You must be 21 or older to access this site.");
      // Optionally redirect to a different page
      // window.location.href = "/age-restriction";
    }
  };

  if (hasVerified || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <FaTimes size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="font-extrabold text-3xl tracking-widest bg-gradient-to-r from-[#5b0eb0] to-[#1f63db] bg-clip-text text-transparent">
            CP Tech
          </span>
        </div>

        {/* Age Verification Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Age Verification Required
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            You must be 21 years of age or older to access this website. By
            entering this site, you confirm that you are of legal age to
            purchase tobacco products in your jurisdiction.
          </p>

          <div className="bg-gradient-to-r from-[#5b0eb0] to-[#1f63db] p-0.5 rounded-lg mb-6">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-700 font-medium">
                This website contains age-restricted content and products.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleAgeVerification(true)}
            className="w-full bg-gradient-to-r from-[#5b0eb0] to-[#1f63db] text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            I am 21 or older
          </button>

          <button
            onClick={() => handleAgeVerification(false)}
            className="w-full bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          >
            I am under 21
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-6 leading-relaxed">
          By clicking "I am 21 or older", you acknowledge that you are of legal
          age and agree to our terms of service and privacy policy.
        </p>
      </div>
    </div>
  );
};

export default AgeVerifier;
