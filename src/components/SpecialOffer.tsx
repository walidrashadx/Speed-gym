import React from 'react';
import { Timer, Zap } from 'lucide-react';

export default function SpecialOffer() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2 animate-fade-in-left">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-yellow-400 animate-pulse" />
              <h2 className="text-3xl font-bold">Ultimate Performance Bundle</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Elevate your workout with our premium stack: Elite Whey Protein, Pre-Workout Extreme, and Advanced BCAAs!
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <Timer className="h-6 w-6 text-red-500 animate-spin-slow" />
              <div className="text-xl font-semibold">Limited Time Offer</div>
            </div>
            <div className="flex space-x-4">
              <span className="text-3xl font-bold text-red-500">$99.99</span>
              <span className="text-xl text-gray-400 line-through self-end">$142.99</span>
            </div>
            <button className="mt-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-md font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
              Claim Offer
            </button>
          </div>
          <div className="md:w-1/2 animate-fade-in-right">
            <img
              src="https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Supplement Bundle"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}