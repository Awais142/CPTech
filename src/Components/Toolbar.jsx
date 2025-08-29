import React from "react";

const Toolbar = () => {
  const warningText = (
    <span className="inline-block text-xs md:text-sm font-medium tracking-wide mx-16">
      <span className="font-semibold">WARNING:</span> These products are not risk
      free and provide nicotine, which is addictive. Only for use by adults.
    </span>
  );

  return (
    <div className="w-full bg-red-100 text-red-900 overflow-hidden py-2 border-b border-red-200 shadow-sm">
      <div className="marquee-container flex whitespace-nowrap">
        <div className="marquee-content animate-scroll-left flex-shrink-0">
          {warningText}
          {warningText}
          {warningText}
          {warningText}
        </div>
        <div className="marquee-content animate-scroll-left flex-shrink-0" aria-hidden="true">
          {warningText}
          {warningText}
          {warningText}
          {warningText}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
