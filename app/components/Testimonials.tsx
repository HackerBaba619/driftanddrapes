import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: "I absolutely love my new wardrobe! The minimalist designs are exactly what I was looking for.",
    name: "Alice Johnson",
    position: "Fashion Blogger",
  },
  {
    id: 2,
    quote: "Drift & Drape has transformed my style. The quality is unmatched!",
    name: "Michael Smith",
    position: "Entrepreneur",
  },
  {
    id: 3,
    quote: "Finally, a brand that understands minimalist fashion! Highly recommended.",
    name: "Sarah Lee",
    position: "Graphic Designer",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <p className="text-lg italic text-gray-700">""</p>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
