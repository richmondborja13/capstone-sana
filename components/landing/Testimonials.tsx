import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonial" className="py-16 px-6 lg:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Testimonials</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 leading-tight">
              What people say
              <br />
              about Us.
            </h2>
            <div className="flex space-x-3">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">MT</span>
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-600 text-center mb-6 leading-relaxed">
                "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
              </blockquote>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Mike Taylor</h3>
                <p className="text-gray-500">Lahore, Pakistan</p>
              </div>
            </div>

            <div className="absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-md p-6 z-0 opacity-60">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">CT</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Chris Thomas</h4>
                  <p className="text-gray-500 text-sm">CEO of Red Button</p>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-4">
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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


