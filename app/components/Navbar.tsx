import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Drift & Drape</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-black transition">Home</Link>
          <Link href="/shop" className="text-gray-600 hover:text-black transition">Shop</Link>
          <Link href="/about" className="text-gray-600 hover:text-black transition">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black transition">Contact</Link>
        </div>
        <div className="text-gray-800 hover:text-black transition">
          <Link href="/cart">🛒</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
