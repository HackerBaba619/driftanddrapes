import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCollection from '../components/FeaturedCollection';
// Other imports...

const SummerVibes: React.FC = () => {
  const featuredRef = useRef<HTMLDivElement | null>(null);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection scrollToFeatured={scrollToFeatured} />
      {/* Other sections... */}

      <div ref={featuredRef}>
        <FeaturedCollection />
      </div>

      {/* Other sections like Footer... */}
    </div>
  );
};

export default SummerVibes;
