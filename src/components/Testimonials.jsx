import React from 'react';
export default function Testimonials() {
    return (
      <section id="testimonials" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">What Our Clients Say</h3>
          <div className="flex flex-col items-center space-y-8">
            <blockquote className="max-w-lg p-4 bg-white shadow-md rounded-lg">
              <p>"The marquee for our wedding was absolutely stunning. Thank you for making our day so special!"</p>
              <footer className="mt-2">- Emily & John</footer>
            </blockquote>
            <blockquote className="max-w-lg p-4 bg-white shadow-md rounded-lg">
              <p>"Professional, timely, and beautiful setup. Couldn't have asked for more for our corporate event."</p>
              <footer className="mt-2">- London Tech Expo</footer>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
  