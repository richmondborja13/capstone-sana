'use client';

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navItems = [
    { label: 'Home', targetId: 'home' },
    { label: 'About Us', targetId: 'about' },
    { label: 'Service', targetId: 'service' },
    { label: 'Testimonial', targetId: 'testimonial' },
    { label: 'Contact', targetId: 'contact' },
  ];

  return (
    <header className="relative bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="text-2xl font-bold text-gray-800">Logo Demo</div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                const el = document.getElementById(item.targetId);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`group relative pb-1 transition-colors ${
                activeIndex === index ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>{item.label}</span>
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${
                  activeIndex === index ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </nav>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Sign up
        </button>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 -z-10"></div>
    </header>
  );
};

export default Header;


