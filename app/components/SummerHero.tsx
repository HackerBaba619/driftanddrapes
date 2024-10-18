// components/SummerHero.tsx

const SummerHero = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-summer-pattern bg-cover bg-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: 'url("/images/summer-background.jpg")' }}>
        </div>
  
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold text-white leading-tight">
            Summer Vibes Collection
          </h1>
          <p className="mt-4 text-xl text-white font-light">
            Unleash your style this summer with our hottest picks!
          </p>
          <button className="mt-6 px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-all">
            Shop the Collection
          </button>
        </div>
      </section>
    );
  };
  
  export default SummerHero;
  