'use client';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { CartProvider, useCart } from '../components/CartContext';

// Define the ProductType interface
interface ProductType {
  id: number;
  name: string;
  category: string;
  price: string;
}

// ProductCard component
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

// WinterVibes component with hardcoded data
const WinterVibes: React.FC = () => {
  const products: ProductType[] = [
    { id: 1, name: 'Cozy Knit Sweater', category: 'Sweaters', price: '$50' },
    { id: 2, name: 'Winter Parka Jacket', category: 'Jackets', price: '$120' },
    { id: 3, name: 'Fleece Lined Leggings', category: 'Bottoms', price: '$35' },
    { id: 4, name: 'Chunky Scarves', category: 'Accessories', price: '$25' },
    { id: 5, name: 'Thermal Gloves', category: 'Accessories', price: '$15' },
    { id: 6, name: 'Wool Beanie', category: 'Accessories', price: '$20' },
    { id: 7, name: 'Long Sleeve Turtleneck', category: 'Tops', price: '$40' },
    { id: 8, name: 'Puffer Vest', category: 'Jackets', price: '$75' },
    { id: 9, name: 'Plaid Flannel Shirt', category: 'Tops', price: '$35' },
    { id: 10, name: 'Knee-High Boots', category: 'Footwear', price: '$90' },
    { id: 11, name: 'Thermal Underwear', category: 'Bottoms', price: '$30' },
    { id: 12, name: 'Cable Knit Mittens', category: 'Accessories', price: '$18' },
    { id: 13, name: 'Faux Fur Jacket', category: 'Jackets', price: '$150' },
    { id: 14, name: 'Lounge Joggers', category: 'Bottoms', price: '$40' },
    { id: 15, name: 'Warm Hoodie', category: 'Sweaters', price: '$55' },
    { id: 16, name: 'Down Fill Jacket', category: 'Jackets', price: '$160' },
    { id: 17, name: 'Patterned Wool Socks', category: 'Accessories', price: '$10' },
    { id: 18, name: 'Thermal Boots', category: 'Footwear', price: '$85' },
    { id: 19, name: 'Insulated Gloves', category: 'Accessories', price: '$22' },
    { id: 20, name: 'Pajama Set', category: 'Loungewear', price: '$45' },
    { id: 21, name: 'Winter Skirt', category: 'Bottoms', price: '$55' },
    { id: 22, name: 'Chunky Knit Blanket', category: 'Accessories', price: '$65' },
    { id: 23, name: 'Snow Pants', category: 'Bottoms', price: '$70' },
    { id: 24, name: 'Flannel Pajama Pants', category: 'Loungewear', price: '$30' },
    { id: 25, name: 'Winter Scarf Set', category: 'Accessories', price: '$28' },
  ];
    // Add more hardcoded products as needed


  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <section className="relative w-full h-[50vh] bg-gradient-to-r from-blue-400 to-gray-200 flex items-center justify-center">
          <div className="relative text-center">
            <h1 className="text-6xl font-bold text-gray-900 drop-shadow-md">Winter Vibes</h1>
            <p className="mt-4 text-xl text-black drop-shadow-sm">Stay warm and stylish this winter</p>
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-lg hover:bg-blue-400 transition">
              Shop Now
            </button>
          </div>
        </section>

        {/* Product Grid */}
        <section className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Pagination */}
        <section className="flex justify-center py-8">
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)} className="mx-2 px-4 py-2 bg-gray-300 text-gray-900 rounded-md">
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
            <button onClick={() => handlePageChange(currentPage + 1)} className="mx-2 px-4 py-2 bg-gray-300 text-gray-900 rounded-md">
              Next
            </button>
          )}
        </section>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default WinterVibes;
