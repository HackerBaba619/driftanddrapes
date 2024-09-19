import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the subscription logic (e.g., API call)
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg text-gray-700 mb-6">
          Join our mailing list to receive the latest updates and exclusive offers.
        </p>
        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <strong>Thank you for subscribing!</strong>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full md:w-1/3 px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none focus:border-gray-600"
              required
            />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
