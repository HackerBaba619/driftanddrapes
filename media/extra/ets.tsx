
"use client";
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useCart } from '../components/CartContext'; // Adjust the import path

// Define the ProductType interface
interface ProductType {
  id: number;
  name: string;
  category: string;
  price: string;
}

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <div className="bg-gray-200 h-40 mb-4 rounded-lg flex items-center justify-center">
        <span className="text-gray-500 text-lg">Image</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
      <p className="text-gray-700">{product.category}</p>
      <p className="text-blue-600 font-semibold">{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

const products: ProductType[] = [
  // ... your product list here
];

const categories = ['Sweaters', 'Jackets', 'Bottoms', 'Footwear', 'Accessories', 'Loungewear'];

const WinterCollection: React.FC = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to first page on category change
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="relative w-full h-[50vh] bg-gradient-to-r from-blue-400 to-gray-200 flex items-center justify-center">
        <div className="relative text-center">
          <h1 className="text-6xl font-bold text-gray-900 drop-shadow-md">Winter Collection</h1>
          <p className="mt-4 text-xl text-black drop-shadow-sm">Stay warm and stylish this winter</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-lg hover:bg-blue-400 transition">
            Shop Now
          </button>
        </div>
      </section>

      <section className="px-8 py-4 bg-white shadow-md sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Product Categories</h2>
          <select
            className="border border-gray-300 rounded-lg p-2 shadow-sm"
            defaultValue="all"
            onChange={handleCategoryChange}
          >
            <option value="all">All Products</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="flex justify-center py-8">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="mx-2 px-4 py-2 bg-gray-300 text-gray-900 rounded-md"
          >
            Previous
          </button>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'}`}
          >
            {index + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="mx-2 px-4 py-2 bg-gray-300 text-gray-900 rounded-md"
          >
            Next
          </button>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default WinterCollection;
