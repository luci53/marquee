import React from 'react';
export default function Services() {
    return (
      <section id="services" className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Wedding Marquees</h4>
              <p>Elegant and customizable marquees for weddings of any size.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Corporate Events</h4>
              <p>Professional marquee setups for conferences, trade shows, and more.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Private Parties</h4>
              <p>Perfect for birthdays, anniversaries, and other celebrations.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  