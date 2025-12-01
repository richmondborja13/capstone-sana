import React from 'react';

const Hero: React.FC = () => {
  return (
    <main id="home" className="relative min-h-screen lg:h-screen">
      <div className="grid lg:grid-cols-2 min-h-screen lg:h-full">
        <div className="flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 lg:px-12 relative">
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 opacity-20">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: 'radial-gradient(circle, #9CA3AF 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            ></div>
          </div>

          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              Smart Way to Find a <span className="text-blue-600">Modern Home</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut Lorem ipsum dolor sit amet.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search Your Home"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                />
              </div>
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="relative bg-blue-600 flex items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-0 lg:h-full">
          <div className="absolute inset-0 bg-blue-600"></div>

          <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-8">
            <div className="w-full max-w-md h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="grid grid-cols-4 gap-2 p-4 h-full">
                  {Array.from({ length: 16 }).map((_, i) => {
                    const heights = [75, 85, 70, 90, 80, 65, 95, 75, 85, 70, 90, 80, 65, 95, 75, 85];
                    return (
                      <div
                        key={i}
                        className="bg-blue-200 rounded-sm opacity-80"
                        style={{ height: `${heights[i]}%`, animationDelay: `${i * 0.1}s` }}
                      ></div>
                    );
                  })}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-700"></div>
                <div className="absolute top-0 left-0 right-0 h-4 bg-gray-600"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-200 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;


