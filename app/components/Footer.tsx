import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-lg font-bold">Drift & Drape</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/about" className="hover:underline">About</a>
            <a href="/shop" className="hover:underline">Shop</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Drift & Drape. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
