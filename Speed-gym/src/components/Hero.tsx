import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          className="w-full h-full object-cover"
          alt="Gym supplements"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transform Your <span className="text-red-500 animate-pulse">Performance</span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Elite supplements for exceptional results. Scientifically formulated to elevate your fitness journey.
          </p>
          <div className="flex space-x-4">
            <button className="bg-red-500 text-white px-8 py-3 rounded-md font-semibold flex items-center hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              View Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}