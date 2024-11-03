import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 px-6 rounded-b-3xl shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Marquee Business</h1>
        
        {/* Toggle button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:flex md:space-x-6`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0">
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

