// app/page.tsx or pages/index.tsx (depending on your folder structure)
'use client';
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedCollection from './components/FeaturedCollection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext'; 
import { AppProps } from 'next/app';
import ProductList from './components/ProductList';

const Home: React.FC<AppProps> = () => {
  return (
    <div><CartProvider >
      
        <Navbar />
        <HeroSection />
        <FeaturedCollection />
        <ProductList />
        <Testimonials />
        <Newsletter />
        <Footer />
      
    </CartProvider></div>
  );
};

export default Home;
