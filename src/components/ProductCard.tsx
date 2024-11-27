import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  discount?: number;
  rating: number;
}

export default function ProductCard({ name, price, image, discount, rating }: ProductCardProps) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        {discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            {discount && (
              <span className="text-sm text-gray-500 line-through mr-2">${price.toFixed(2)}</span>
            )}
            <span className="text-xl font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
          </div>
          <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}