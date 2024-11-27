import React from 'react';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const products = [
    {
      name: "Elite Whey Protein ISO",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      discount: 15,
      rating: 5
    },
    {
      name: "Pre-Workout Extreme",
      price: 44.99,
      image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4
    },
    {
      name: "Advanced BCAA Complex",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1579758682665-55e8d2193c8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      discount: 20,
      rating: 4
    },
    {
      name: "Pure Creatine Elite",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1579758629741-03dd57247a74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}