// components/SummerProductList.tsx

const SummerProductList = () => {
    const summerProducts = [
      { id: 1, name: 'Sunglasses', price: '$25', image: '/images/sunglasses.jpg' },
      { id: 2, name: 'Summer Hat', price: '$35', image: '/images/summer-hat.jpg' },
      { id: 3, name: 'Beach Towel', price: '$15', image: '/images/beach-towel.jpg' },
      { id: 4, name: 'Flip Flops', price: '$10', image: '/images/flip-flops.jpg' },
      // Add more products
    ];
  
    return (
      <section className="py-12 px-6 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-10">Summer Essentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {summerProducts.map(product => (
            <div key={product.id} className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <p className="text-lg text-gray-700 mt-2">{product.price}</p>
              <button className="mt-4 bg-pink-500 text-white p-3 rounded-md hover:bg-pink-600 transition-all">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SummerProductList;
  