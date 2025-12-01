import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonial" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Testimonials</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              What people say
              <br />
              about Us.
            </h2>
            <div className="flex space-x-2 sm:space-x-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative z-10">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg sm:text-xl">MT</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-600 text-center mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
              </blockquote>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">Mike Taylor</h3>
                <p className="text-gray-500 text-sm">Lahore, Pakistan</p>
              </div>
            </div>

            <div className="absolute top-12 sm:top-16 left-2 sm:left-4 right-2 sm:right-4 bg-white rounded-2xl shadow-md p-4 sm:p-6 z-0 opacity-60">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-bold text-xs sm:text-sm">CT</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Chris Thomas</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">CEO of Red Button</p>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-2 sm:space-y-4 hidden sm:flex">
              <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


