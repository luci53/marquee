import React from 'react';
export default function Hero() {
    return (
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('1.jpg')" }}>
        <div className="flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 p-4">
          <h2 className="text-5xl font-bold mb-4">Stylish Marquees for Every Occasion</h2>
          <p className="text-xl mb-6">Providing top-quality marquee solutions for events across London</p>
          <a href="#services" className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg">Explore Services</a>
        </div>
      </section>
    );
  }
  