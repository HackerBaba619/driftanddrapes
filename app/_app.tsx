// app/_app.tsx
import React from 'react';
import { AppProps } from 'next/app'; // Import AppProps from next/app
// import { CartProvider } from './components/CartContext'; // Adjust the import path as necessary
import '../styles/globals.css'; // Import your global styles

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    
      <Component {...pageProps} />
   
  );
};

export default MyApp;
