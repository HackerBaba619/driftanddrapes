import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    text: 'I love the minimalist design of the clothes! They are perfect for any occasion.',
    image: '/images/testimonial1.jpg', // Placeholder image
  },
  {
    id: 2,
    name: 'John Smith',
    text: 'The quality is amazing, and the customer service was excellent!',
    image: '/images/testimonial2.jpg', // Placeholder image
  },
  {
    id: 3,
    name: 'Emily Johnson',
    text: 'I always get compliments when I wear Drift & Drape. Highly recommend!',
    image: '/images/testimonial3.jpg', // Placeholder image
  },
  {
    id: 4,
    name: 'Michael Brown',
    text: 'The fit is perfect and the materials are top-notch. I’ll be back for more!',
    image: '/images/testimonial4.jpg', // Placeholder image
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white border rounded-lg shadow-lg p-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <h3 className="mt-2 font-semibold text-gray-800">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
