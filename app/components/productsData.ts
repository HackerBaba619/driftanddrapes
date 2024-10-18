// data/productsData.ts

export const summerProducts = [
    { id: 1, name: 'White Summer T-Shirt', category: 'T-Shirts', price: '$25', image: 'url1' },
    // Add more summer products...
  ];
  
  export const winterProducts = [
    { id: 1, name: 'Cozy Winter Jacket', category: 'Jackets', price: '$100', image: 'url2' },
    // Add more winter products...
  ];
  
  export const officeProducts = [
    { id: 1, name: 'Formal Office Shirt', category: 'Shirts', price: '$50', image: 'url3' },
    // Add more office products...
  ];
  
  // Combine all products into one array
  export const allProducts = [...summerProducts, ...winterProducts, ...officeProducts];
  