// components/ClientCarousel.js

import React from 'react';

// Define your logo image paths. Use placeholder URLs for demonstration.
// In a real project, use imported images or actual CDN paths.
const clientLogos = [
  { src: 'https://fastly.picsum.photos/id/503/200/300.jpg?hmac=NvjgwV94HmYqnTok1qtlPsDxdf197x8fsWy5yheKlGg', alt: 'Client Logo 1' },
  { src: 'https://fastly.picsum.photos/id/729/200/200.jpg?hmac=hCw_uurY9O39ITS0MMk7fNNdWPaY20TzXz2NTAkEslU', alt: 'Client Logo 2' },
  { src: 'https://fastly.picsum.photos/id/872/200/200.jpg?hmac=m0AwAUFkEiEz2KW58n6a5RVkKaClHNylfppYjE3a0v4', alt: 'Client Logo 3' },
  { src: 'https://fastly.picsum.photos/id/372/200/200.jpg?hmac=QFGGlcWGNWBK0oDD1jghIaCvGIFU5iJJcd2VhF5oH6o', alt: 'Client Logo 4' },
  // Add more logos here for a better loop effect
  { src: 'https://fastly.picsum.photos/id/927/200/200.jpg?hmac=8gJRiqNVrPAFPg0IyGTTYxaPJBSoLOVg4elvGEPV30M', alt: 'Client Logo 5' },
];

// Component to render a single set of logos
const LogoSet = ({logos}) => (
    // Set a minimum width for the container to ensure logos don't stack too early on large screens
    <div className="flex max-w-[1440px] flex-shrink-0 justify-around items-center w-full min-w-max space-x-12 sm:space-x-16 md:space-x-20 lg:space-x-24">
        {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 opacity-50 hover:opacity-100 transition duration-300">
                <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    // Responsive sizing for logos
                    className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto object-contain"
                />
            </div>
        ))}
    </div>
);


const ClientCarousel = () => {
  // Duplicate the logos to ensure a seamless loop
  const logosToDisplay = [...clientLogos, ...clientLogos]; 

  return (
    // Ensure the container is full width and has responsive padding
    <section className="bg-white py-10 md:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main layout: Heading on the left, Carousel on the right/bottom */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          
          {/* Heading */}
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-1/4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 whitespace-nowrap">
              Clients include:
            </h2>
          </div>

          {/* Carousel Wrapper */}
          <div className="flex w-full lg:w-3/4 overflow-hidden relative">
            
            {/* The Scrolling Track */}
            <div 
              className="flex whitespace-nowrap animate-scroll-left w-full min-w-max"
              // Inline style for the animation property. 
              // 'scroll-left' keyframes must be defined in globals.css.
              style={{
                  animation: 'scroll-left 40s linear infinite',
              }}
            >
              {/* Render the duplicated logo sets */}
              <LogoSet logos={logosToDisplay} />
              <LogoSet logos={logosToDisplay} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;