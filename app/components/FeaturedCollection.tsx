import React from 'react';

const FeaturedCollection: React.FC = () => {
  // Sample product data (you can replace this with actual data or fetch from an API)
  const products = [
    {
      id: 1,
      name: 'Minimalist T-Shirt',
      price: '$29.99',
      image: '/images/product1.jpg', // Placeholder image
    },
    {
      id: 2,
      name: 'Classic Denim Jacket',
      price: '$89.99',
      image: '/images/product2.jpg', // Placeholder image
    },
    {
      id: 3,
      name: 'Elegant Dress',
      price: '$79.99',
      image: '/images/product3.jpg', // Placeholder image
    },
    {
      id: 4,
      name: 'Stylish Sneakers',
      price: '$59.99',
      image: '/images/product4.jpg', // Placeholder image
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
