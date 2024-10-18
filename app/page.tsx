// app/page.tsx or pages/index.tsx (depending on your folder structure)
'use client';
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedCollection from './components/FeaturedCollection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import { AppProps } from 'next/app';


const Home: React.FC<AppProps> = () => {
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
