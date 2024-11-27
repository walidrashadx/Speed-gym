import React from 'react';

export default function Newsletter() {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
      <h3 className="text-xl font-bold mb-4">Newsletter</h3>
      <p className="text-gray-400 mb-4">
        Subscribe for exclusive offers and updates.
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-r-md hover:from-red-600 hover:to-red-700 transition-colors duration-200">
          Subscribe
        </button>
      </div>
    </div>
  );
}