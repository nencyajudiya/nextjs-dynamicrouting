// nextjs-dynamicrouting/src/app/products/[id]/page.js
'use client';

import { useRouter, useParams } from 'next/navigation';
import { products } from '../data';
import { FaArrowLeft, FaShoppingCart, FaStar } from 'react-icons/fa';

export default function ProductDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">Product not found</h2>
        <button
          onClick={() => router.push('/products')}
          className="flex items-center gap-2 px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          <FaArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`${product.title} has been added to your cart.`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      {/* Top Navigation: Back + Cart */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-10">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 bg-white shadow-md border rounded-lg hover:bg-gray-100 transition"
        >
          <FaArrowLeft className="text-gray-700" /> Back
        </button>

        <button
          onClick={() => router.push('/cart')}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          <FaShoppingCart /> Cart
        </button>
      </div>

      {/* Product Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 rounded-xl p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>

          <div className="flex items-center mb-3">
            <FaStar className="text-yellow-400 mr-2" />
            <span className="font-semibold text-gray-800">{product.rating.rate}</span>
            <span className="text-sm text-gray-500 ml-2">
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-black mb-8">${product.price}</p>

          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-3 bg-black text-white py-3 px-6 rounded-lg hover:scale-105 hover:bg-gray-800 transition-transform shadow-md"
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
