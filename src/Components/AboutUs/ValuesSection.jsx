import React from "react";

const ValuesSection = () => {
  // Assets
  const enjoyImg =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
  const reliableImg =
    "https://images.unsplash.com/photo-1522071820081-009c5fdc7b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
  const experienceImg =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

  // Values section data
  const values = [
    {
      title: "ENJOY",
      description:
        "At CP Tech, we see life as a beautiful journey to be savored and enjoyed. That's why we believe that our products are not just tools, but an innovative lifestyle that brings joy, inspiration and empowerment.",
      image: enjoyImg,
    },
    {
      title: "RELIABLE",
      description:
        "We prioritize users in everything we do. With a user-driven philosophy and innovative R&D, we are committed to providing products of both high quality and great performance.",
      image: reliableImg,
    },
    {
      title: "EXPERIENCE",
      description:
        "We present users with a distinct experience, sharing an interactive and companionable journey. With CP Tech, embrace a brand new lifestyle and unlock new levels of imagination.",
      image: experienceImg,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Enjoy */}
          <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden group">
            <img
              src={values[0].image}
              alt={values[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  {values[0].title}
                </h3>
                <p className="text-gray-200">{values[0].description}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white text-4xl font-bold">
              {values[0].title}
            </div>
          </div>

          {/* Right side - Reliable and Experience */}
          <div className="space-y-8">
            <div className="relative h-48 md:h-[290px] rounded-xl overflow-hidden group">
              <img
                src={values[1].image}
                alt={values[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {values[1].title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {values[1].description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 text-white text-2xl font-bold">
                {values[1].title}
              </div>
            </div>

            <div className="relative h-48 md:h-[290px] rounded-xl overflow-hidden group">
              <img
                src={values[2].image}
                alt={values[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {values[2].title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {values[2].description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 text-white text-2xl font-bold">
                {values[2].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
