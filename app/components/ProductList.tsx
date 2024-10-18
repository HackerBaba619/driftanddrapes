// import React, { useState, useEffect } from 'react';

// // Combine all products from Summer, Winter, and Office vibes
// const allProducts = [
//   // Summer Products
//   { id: 1, name: 'White Summer T-Shirt', category: 'T-Shirts', price: '$25', image: '/images/summer1.jpg' },
//   { id: 2, name: 'Printed Beach Dress', category: 'Dresses', price: '$45', image: '/images/summer2.jpg' },
//   // Add more summer products...

//   // Winter Products
//   { id: 11, name: 'Winter Coat', category: 'Jackets', price: '$150', image: '/images/winter1.jpg' },
//   { id: 12, name: 'Woolen Scarf', category: 'Accessories', price: '$25', image: '/images/winter2.jpg' },
//   // Add more winter products...

//   // Office Products
//   { id: 21, name: 'Formal Shirt', category: 'Shirts', price: '$40', image: '/images/office1.jpg' },
//   { id: 22, name: 'Leather Briefcase', category: 'Accessories', price: '$120', image: '/images/office2.jpg' },
//   // Add more office products...
// ];

// // Function to randomly select products
// const getRandomProducts = (num: number) => {
//   const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, num); // Select `num` random products
// };

// // const ProductList: React.FC = () => {
// //   const [featuredProducts, setFeaturedProducts] = useState<unknown[]>([]);

//   useEffect(() => {
//     const products = getRandomProducts(12); // Pick 12 random products
//     setFeaturedProducts(products); // Set selected products on the client-side
//   }, []);

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {featuredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
//                 <p className="text-gray-600 mt-2">{product.category}</p>
//                 <p className="text-teal-500 font-semibold">{product.price}</p>
//                 <button className="mt-4 px-4 py-2 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-500 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default ProductList;
