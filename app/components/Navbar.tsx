
// components/Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Drift & Drapes
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/Summer-vibes" className="text-gray-700 hover:text-gray-900">
            Summer Vibes
          </Link>
          <Link href="/Winter-vibes" className="text-gray-700 hover:text-gray-900">
            Winter Vibes
          </Link>
          <Link href="/Office-vibes" className="text-gray-700 hover:text-gray-900">
            Office Vibes
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/CartPage" className="text-gray-700 hover:text-gray-900">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
