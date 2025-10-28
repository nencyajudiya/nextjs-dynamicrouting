// nextjs-dynamicrouting/src/app/products/page.js
import ProductCard from './components/ProductCard';
import { products } from './data';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-8 px-6 sm:px-10"> 
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        🛍️ Our Products
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
