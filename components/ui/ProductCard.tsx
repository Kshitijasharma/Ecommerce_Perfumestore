
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Perfume } from '@/public/lib/types';
import { useCartStore, useWishlistStore } from '@/public/lib/store';

interface ProductCardProps {
  perfume: Perfume;
}

export default function ProductCard({ perfume }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCartStore();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();

  const handleAddToCart = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    addToCart(perfume);
    setIsLoading(false);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(perfume.id)) {
      removeFromWishlist(perfume.id);
    } else {
      addToWishlist(perfume);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative">
        <Link href={`/products/${perfume.id}`}>
          <img
            src={perfume.image}
            alt={perfume.name}
            className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <i className={`ri-heart-${isInWishlist(perfume.id) ? 'fill text-red-500' : 'line text-gray-600'} text-lg`}></i>
          </div>
        </button>
        <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700">
          {perfume.category}
        </div>
      </div>

      <div className="p-4">
        <Link href={`/products/${perfume.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-gray-700 transition-colors">
            {perfume.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2">{perfume.brand}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 flex items-center justify-center">
                <i className={`ri-star-${i < Math.floor(perfume.rating) ? 'fill text-yellow-400' : 'line text-gray-300'} text-sm`}></i>
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({perfume.rating})</span>
        </div>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {perfume.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${perfume.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isLoading || perfume.stock === 0}
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 whitespace-nowrap"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Adding...</span>
              </>
            ) : (
              <>
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-shopping-cart-line text-sm"></i>
                </div>
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>

        {perfume.stock < 10 && perfume.stock > 0 && (
          <p className="text-sm text-orange-600 mt-2">
            Only {perfume.stock} left in stock!
          </p>
        )}
        
        {perfume.stock === 0 && (
          <p className="text-sm text-red-600 mt-2">Out of stock</p>
        )}
      </div>
    </div>
  );
}
