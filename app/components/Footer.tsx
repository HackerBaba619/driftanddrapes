import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="text-center md:text-left">
            <Image src="/images/logo.png" alt="Drift & Drape Logo" width={150} height={50} />
            <p className="mt-4 text-gray-400">Your destination for minimalist fashion.</p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mt-2">
                <a href="/shop" className="hover:text-white transition">Shop</a>
              </li>
              <li className="mt-2">
                <a href="/about" className="hover:text-white transition">About Us</a>
              </li>
              <li className="mt-2">
                <a href="/contact" className="hover:text-white transition">Contact</a>
              </li>
              <li className="mt-2">
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/facebook-icon.png" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/instagram-icon.png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/twitter-icon.png" alt="Twitter" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Drift & Drape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
