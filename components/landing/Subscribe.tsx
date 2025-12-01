import React from 'react';

const Subscribe: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-purple-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-300 rounded-lg rotate-45"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-300 rounded-lg rotate-12"></div>
        <div className="absolute top-1/2 -right-8 w-6 h-6 bg-indigo-300 rounded-lg rotate-45"></div>

        <div className="absolute top-8 right-8 flex flex-col space-y-2">
          <div className="w-4 h-4 bg-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-500 text-xs">+</span>
          </div>
          <div className="w-4 h-4 bg-orange-400 rounded flex items-center justify-center">
            <span className="text-white text-xs">+</span>
          </div>
          <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
            <span className="text-white text-xs">+</span>
          </div>
          <div className="w-4 h-4 bg-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-500 text-xs">+</span>
          </div>
        </div>

        <div className="bg-purple-200 rounded-3xl p-12 relative">
          <div className="absolute top-6 right-6 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
            </svg>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 max-w-2xl mx-auto">
              Subscribe to get information, latest news and other interesting offers about Cobham
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                />
              </div>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;


