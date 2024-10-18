// 'use client';
// import React from 'react';
// // import { useCart } from '../components/CartContext';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const CartPage: React.FC = () => {
//   const { cartItems, removeFromCart } = useCart();

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />
//       <div className="container mx-auto p-8">
//         <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//         {cartItems.length === 0 ? (
//           <p className="text-lg">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-4">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
//                 <div>
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">{item.price}</p>
//                   <p className="text-gray-500">Quantity: {item.quantity}</p>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CartPage;
