import React from 'react';
import Newsletter from './Newsletter';
import QuickLinks from './QuickLinks';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4">Speed Gym</h3>
            <p className="text-gray-400">
              Elite supplements for peak performance.
            </p>
          </div>
          <QuickLinks />
          <Newsletter />
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Eng.Walid Rashad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}