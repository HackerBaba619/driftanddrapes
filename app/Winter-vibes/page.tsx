'use client'; // Required for Next.js App Router

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
}

const WinterVibes: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Added error state

  const fetchProducts = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const res = await fetch('/api/winter');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data.products);
    } catch (error: unknown) {
      console.error('Error fetching winter products:', error);
      setError('Failed to fetch products.'); // Set error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
        <div className="relative text-center">
          <h1 className="text-6xl font-bold text-white drop-shadow-md">Winter Vibes Collection</h1>
          <p className="mt-4 text-xl text-white drop-shadow-sm">Embrace the winter chill in style</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-lg hover:bg-blue-400 transition">
            Explore Now
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p> // Display error message
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <div className="bg-gray-200 h-40 mb-4 rounded-lg flex items-center justify-center">
                  {/* Placeholder for Product Image */}
                  <span className="text-gray-500 text-lg">Image</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                <p className="text-gray-700">{product.category}</p>
                <p className="text-blue-600 font-semibold">$ {product.price}</p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default WinterVibes;
