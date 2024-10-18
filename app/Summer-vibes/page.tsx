// app/Summer-vibes/page.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Product {
  _id: string;
  name: string;
  category: string;
  price: string;
}

const fetchProducts = async () => {
  const response = await fetch('http://localhost:3000/api/products/Summer-vibes');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

const SummerVibes = async () => {
  const products: Product[] = await fetchProducts();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-r from-yellow-400 to-orange-300 flex items-center justify-center">
        <div className="relative text-center">
          <h1 className="text-6xl font-bold text-gray-900 drop-shadow-md">Summer Vibes Collection</h1>
          <p className="mt-4 text-xl text-black drop-shadow-sm">Feel the summer breeze in style</p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-medium rounded-md shadow-lg hover:bg-yellow-400 transition">
            Explore Now
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <div className="bg-gray-200 h-40 mb-4 rounded-lg flex items-center justify-center">
                {/* Placeholder for Product Image */}
                <span className="text-gray-500 text-lg">Image</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
              <p className="text-gray-700">{product.category}</p>
              <p className="text-yellow-600 font-semibold">{product.price}</p>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-400 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SummerVibes;
