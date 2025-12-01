import React from 'react';

const MostPicked: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-gray-500 text-xs sm:text-sm mb-2">Top Picks</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Most Picked</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center relative">
          {/* Card 1 */}
          <div className="bg-white rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_14px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300 w-full max-w-[420px] mx-auto">
            <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543348750-466b55f32f76?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8 min-h-[120px] sm:min-h-[140px] flex flex-col justify-between">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Rome, Italy</h3>
                <span className="text-lg sm:text-xl font-semibold text-gray-600">$5,42k</span>
              </div>
              <div className="flex items-center text-gray-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12l20-8-8 20-2-8-8-4z"/></svg>
                <span className="text-sm sm:text-base text-gray-600">10 Days Trip</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_14px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300 w-full max-w-[420px] mx-auto">
            <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8 min-h-[120px] sm:min-h-[140px] flex flex-col justify-between">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">London, UK</h3>
                <span className="text-lg sm:text-xl font-semibold text-gray-600">$4.2k</span>
              </div>
              <div className="flex items-center text-gray-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12l20-8-8 20-2-8-8-4z"/></svg>
                <span className="text-sm sm:text-base text-gray-600">12 Days Trip</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_14px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300 w-full max-w-[420px] mx-auto sm:col-span-2 lg:col-span-1">
            <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8 min-h-[120px] sm:min-h-[140px] flex flex-col justify-between">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Full Europe</h3>
                <span className="text-lg sm:text-xl font-semibold text-gray-600">$15k</span>
              </div>
              <div className="flex items-center text-gray-500">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12l20-8-8 20-2-8-8-4z"/></svg>
                <span className="text-sm sm:text-base text-gray-600">28 Days Trip</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-0 w-40 h-40 opacity-10 overflow-hidden pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,20 Q30,10 40,20 Q50,30 60,20 Q70,10 80,20 Q90,30 80,40 Q70,50 80,60 Q90,70 80,80 Q70,90 60,80 Q50,70 40,80 Q30,90 20,80 Q10,70 20,60 Q10,50 20,40 Q10,30 20,20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-400"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MostPicked;


