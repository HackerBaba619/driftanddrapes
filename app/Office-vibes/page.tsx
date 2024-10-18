"use client";
// app/office-vibes/page.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Dummy data to mimic 50+ products
const products = [
  { id: 1, name: 'Tailored Blazer', category: 'Blazers', price: '$85' },
  { id: 2, name: 'Chic Pencil Skirt', category: 'Skirts', price: '$50' },
  { id: 3, name: 'Classic White Shirt', category: 'Shirts', price: '$30' },
  { id: 4, name: 'Dress Pants', category: 'Pants', price: '$60' },
  { id: 5, name: 'Leather Briefcase', category: 'Accessories', price: '$120' },
  { id: 6, name: 'Smartwatch', category: 'Accessories', price: '$200' },
  { id: 7, name: 'Office Tote Bag', category: 'Accessories', price: '$45' },
  { id: 8, name: 'Stylish Flats', category: 'Shoes', price: '$40' },
  { id: 9, name: 'Formal Shoes', category: 'Shoes', price: '$70' },
  { id: 10, name: 'Silk Tie', category: 'Accessories', price: '$25' },
  { id: 11, name: 'Office Dress', category: 'Dresses', price: '$75' },
  { id: 12, name: 'Sweater Vest', category: 'Sweaters', price: '$35' },
  { id: 13, name: 'Knit Cardigan', category: 'Sweaters', price: '$55' },
  { id: 14, name: 'Classic Pencil Dress', category: 'Dresses', price: '$80' },
  { id: 15, name: 'Blouse', category: 'Shirts', price: '$35' },
  // Add more products as needed...
];

// Pagination logic
const itemsPerPage = 10;

const OfficeStyles: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100">
        < Navbar />
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gradient-to-r from-gray-300 to-blue-200 flex items-center justify-center">
        <div className="relative text-center">
          <h1 className="text-5xl font-bold text-gray-900">Office Styles Collection</h1>
          <p className="mt-4 text-xl text-gray-700">Dress for success with our chic collection.</p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-md shadow-lg hover:bg-black transition">
            Explore Now
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="bg-gray-200 h-40 mb-4 rounded-lg">
                {/* Placeholder for Product Image */}
                <span className="text-gray-500 block text-center pt-16">Image</span>
              </div>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-teal-500 font-semibold">{product.price}</p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-black transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="flex justify-center py-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? 'bg-black text-white'
                : 'bg-gray-300 text-gray-900'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default OfficeStyles;
