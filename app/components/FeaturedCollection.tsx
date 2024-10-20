import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

const collections = [
  {
    id: 1,
    title: 'Summer Vibes',
    description: 'Lightweight styles for sunny days.',
    image: '/images/collection1.jpg',
    link: "/Summer-vibes"
  },
  {
    id: 2,
    title: 'Winter Essentials',
    description: 'Cozy outfits for chilly weather.',
    image: '/images/collection2.jpg',
    link: "/Winter-vibes"
  },
  {
    id: 3,
    title: 'Office Styles',
    description: 'Chic looks for professional settings.',
    image: '/images/collection3.jpg',
    link: "/Office-vibes"
  },
];

const FeaturedCollection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-black mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={collection.image}
                alt={collection.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">{collection.title}</h3>
                <p className="text-gray-600 mt-2">{collection.description}</p>
                <Link href={collection.link} passHref>
                  <span className="mt-4 inline-block px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-black transition cursor-pointer">
                    View Collection
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
