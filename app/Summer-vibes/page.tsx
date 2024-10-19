'use client'; // Required for Next.js App Router

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Define Product Type
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
}

// Hardcoded Summer Vibes Products
const products: Product[] = [
  { id: 1, name: "White Summer T-Shirt", category: "T-Shirts", price: "$25" },
  { id: 2, name: "Printed Beach Dress", category: "Dresses", price: "$45" },
  { id: 3, name: "Straw Sun Hat", category: "Accessories", price: "$15" },
  { id: 4, name: "Floral Maxi Dress", category: "Dresses", price: "$60" },
  { id: 5, name: "Sunglasses", category: "Accessories", price: "$20" },
  { id: 6, name: "Linen Casual Shirt", category: "T-Shirts", price: "$30" },
  { id: 7, name: "Cotton Summer Shorts", category: "T-Shirts", price: "$35" },
  { id: 8, name: "Striped Beach Towels", category: "Accessories", price: "$12" },
  { id: 9, name: "Woven Sandals", category: "Accessories", price: "$40" },
  { id: 10, name: "Floral Bikini", category: "Dresses", price: "$50" },
  { id: 11, name: "Flip Flops", category: "Accessories", price: "$10" },
  { id: 12, name: "Boho Crop Top", category: "T-Shirts", price: "$28" },
  { id: 13, name: "Printed Kaftan", category: "Dresses", price: "$55" },
  { id: 14, name: "Tie-dye Scarf", category: "Accessories", price: "$18" },
  { id: 15, name: "Cotton Wrap Skirt", category: "Dresses", price: "$32" },
  { id: 16, name: "Hawaiian Shirt", category: "T-Shirts", price: "$38" },
  { id: 17, name: "Fringe Crossbody Bag", category: "Accessories", price: "$65" },
  { id: 18, name: "Beach Sarong", category: "Accessories", price: "$22" },
  { id: 19, name: "Swim Trunks", category: "T-Shirts", price: "$29" },
  { id: 20, name: "Sunset Print Dress", category: "Dresses", price: "$48" },
  { id: 21, name: "Aviator Sunglasses", category: "Accessories", price: "$25" },
  { id: 22, name: "Wicker Picnic Basket", category: "Accessories", price: "$50" },
  { id: 23, name: "Summer Mesh Top", category: "T-Shirts", price: "$42" },
  { id: 24, name: "Beach Blanket", category: "Accessories", price: "$35" },
  { id: 25, name: "Tropical Print Swimwear", category: "Dresses", price: "$58" }
];

const SummerVibes: React.FC = () => {
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
              key={product.id}
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
