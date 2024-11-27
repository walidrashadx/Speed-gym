import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import SpecialOffer from './components/SpecialOffer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedProducts />
        <SpecialOffer />
      </main>
      <Footer />
    </div>
  );
}

export default App;