import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Dumbbell } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2 group">
                <Dumbbell className="h-8 w-8 text-red-500 transform transition-transform group-hover:rotate-12" />
                <span className="font-bold text-xl">Speed Gym</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Supplements</a>
                <a href="#" className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Offers</a>
                <a href="#" className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Nutrition</a>
                <a href="#" className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="relative p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors duration-200">Supplements</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors duration-200">Offers</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors duration-200">Nutrition</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors duration-200">About</a>
          </div>
        </div>
      )}
    </nav>
  );
}