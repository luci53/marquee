// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-6 px-6 rounded-b-3xl shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Marquee Business</h1>
        <nav>
          <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#testimonials" className="hover:text-gray-400">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
