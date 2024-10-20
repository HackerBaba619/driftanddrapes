// SummerVibes.tsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Define your Product interface
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
}

const ProductComponent: React.FC<{ product: Product }> = ({ product }) => {
  const handleAddToCart = async () => {
    await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: product.id }), // Send product ID to the cart
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-1">
      <div className="bg-gray-200 h-40 mb-4 rounded-lg flex items-center justify-center">
        <span className="text-gray-500 text-lg">Image</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
      <p className="text-gray-700">{product.category}</p>
      <p className="text-yellow-600 font-semibold">{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-400 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

const SummerVibes: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/summer');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products.');
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
      {/* Your Hero Section Here */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductComponent key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default SummerVibes;
