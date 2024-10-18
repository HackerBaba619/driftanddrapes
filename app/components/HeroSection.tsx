import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-100">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-75"
      style={{ backgroundImage: 'url("/app/media/pexels-elizaveta-mitenkova-123876428-9951634.jpg")' }} // Updated to absolute path
    ></div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-lg">
          Elevate Your Wardrobe
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Discover the art of minimalist fashion.
        </p>
        <button className="mt-6 px-8 py-4 bg-black text-white font-semibold rounded-md shadow-lg hover:bg-black transition duration-300">
          Shop Now
        </button>
        {/* Additional Call to Action */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">Join us and explore timeless styles!</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
