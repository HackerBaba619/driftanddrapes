import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75"
        style={{ backgroundImage: 'url("/images/hero-background.jpg")' }} // Placeholder image
      ></div>
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Elevate Your Wardrobe
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover the art of minimalist fashion.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-md shadow-lg hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
