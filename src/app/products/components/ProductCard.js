// nextjs-dynamicrouting/src/app/products/components/ProductCard.js
'use client';

import Link from 'next/link';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

export default function ProductCard({ product }) {
  const handleAddToCart = () => {
    alert(`As ${product.title} is added to your cart`);
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
      
      {/* Product Image */}
      <div className="relative bg-gray-50 flex justify-center items-center h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-black transition">
            {product.title}
          </h3>

          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-bold text-black">${product.price}</p>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold text-gray-800">
                {product.rating.rate}
              </span>
              <span className="text-gray-500">
                ({product.rating.count})
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 text-center py-2.5 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center w-12 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-all duration-300"
            title="Add to Cart"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
