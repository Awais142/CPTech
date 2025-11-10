import React, { useEffect, useState, Suspense, lazy, memo } from "react";
import Lenis from "@studio-freight/lenis";

// Lazy load components
const HeroSlider = lazy(() => import("./HeroSlider"));
const ProductSlider = lazy(() => import("./ProductSlider"));
const CompanyVideo = lazy(() => import("./CompanyVideo"));
const CustomerReviews = lazy(() => import("./CustomerReviews"));
const ParallexVideoSection = lazy(() => import("./ParallexVideoSection"));
// const VideoSlider = lazy(() => import("./VideoSlider"));

// Loading components
const HeroLoader = () => (
  <div className="h-screen bg-gradient-to-b from-gray-50 to-cyan-50 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading amazing content...</p>
    </div>
  </div>
);

const SectionLoader = ({
  height = "h-32",
  bg = "bg-gradient-to-b from-gray-50 to-cyan-50",
}) => <div className={`${height} ${bg} animate-pulse`}></div>;

const LazyHomePage = memo(() => {
  const [loadedSections, setLoadedSections] = useState({
    hero: false,
    products: false,
    video: false,
    // videoSlider: false,
    parallax: false,
    reviews: false,
  });

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

  // Progressive loading with delays
  useEffect(() => {
    const timeouts = [
      setTimeout(
        () => setLoadedSections((prev) => ({ ...prev, hero: true })),
        0
      ),
      setTimeout(
        () => setLoadedSections((prev) => ({ ...prev, products: true })),
        500
      ),
      setTimeout(
        () => setLoadedSections((prev) => ({ ...prev, video: true })),
        1000
      ),
      // setTimeout(
      //   () => setLoadedSections((prev) => ({ ...prev, videoSlider: true })),
      //   1500
      // ),
      setTimeout(
        () => setLoadedSections((prev) => ({ ...prev, parallax: true })),
        2000
      ),
      setTimeout(
        () => setLoadedSections((prev) => ({ ...prev, reviews: true })),
        2500
      ),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Load immediately */}
      <Suspense fallback={<HeroLoader />}>
        <HeroSlider />
      </Suspense>

      {/* Product Slider - Load after 500ms */}
      {loadedSections.products ? (
        <Suspense fallback={<SectionLoader height="h-96" />}>
          <ProductSlider />
        </Suspense>
      ) : (
        <SectionLoader height="h-96" />
      )}

      {/* Company Video - Load after 1s */}
      {loadedSections.video ? (
        <Suspense fallback={<SectionLoader height="h-screen" bg="bg-black" />}>
          <CompanyVideo />
        </Suspense>
      ) : (
        <SectionLoader height="h-screen" bg="bg-black" />
      )}

      {/* Video Slider - Load after 1.5s */}
      {/* {loadedSections.videoSlider ? (
        <Suspense
          fallback={
            <SectionLoader
              height="h-96"
              bg="bg-gradient-to-b from-gray-50 to-blue-100"
            />
          }
        >
          <VideoSlider />
        </Suspense>
      ) : (
        <SectionLoader
          height="h-96"
          bg="bg-gradient-to-b from-gray-50 to-blue-100"
        />
      )} */}

      {/* Parallax Video Section - Load after 2s */}
      {loadedSections.parallax ? (
        <Suspense fallback={<SectionLoader height="h-screen" bg="bg-black" />}>
          <ParallexVideoSection />
        </Suspense>
      ) : (
        <SectionLoader height="h-screen" bg="bg-black" />
      )}

      {/* Customer Reviews - Load after 2.5s */}
      {loadedSections.reviews ? (
        <Suspense fallback={<SectionLoader height="h-64" bg="bg-white" />}>
          <CustomerReviews />
        </Suspense>
      ) : (
        <SectionLoader height="h-64" bg="bg-white" />
      )}
    </div>
  );
});

LazyHomePage.displayName = "LazyHomePage";

export default LazyHomePage;
