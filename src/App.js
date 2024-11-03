import React from 'react';
import 'swiper/css';  // Main Swiper CSS
import './index.css';


import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel"; 



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Carousel />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
