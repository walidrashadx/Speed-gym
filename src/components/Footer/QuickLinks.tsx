import React from 'react';

export default function QuickLinks() {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-400">
        <li><a href="#" className="hover:text-red-500 transition-colors duration-200">About Us</a></li>
        <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Products</a></li>
        <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Special Offers</a></li>
        <li><a href="#" className="hover:text-red-500 transition-colors duration-200">Contact</a></li>
      </ul>
    </div>
  );
}