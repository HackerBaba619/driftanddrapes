'use client';
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedCollection from './components/FeaturedCollection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedCollection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
