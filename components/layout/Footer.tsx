import React from 'react';

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Title Demo</h3>
            <p className="text-gray-600 mb-6 max-w-sm">
              Find your house much faster!
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Mobile</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Help/FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Affiliates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4">More</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Airlinefees</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Airline</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Low fare tips</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          {/* Discover our app - Centered */}
          <div className="flex justify-center mb-8">
              <div className="text-center">
                <p className="text-gray-800 font-medium mb-2">Discover our app</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button className="bg-black text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.353 2.353a1 1 0 010 1.414l-2.353 2.353a1 1 0 01-1.414 0l-2.353-2.353a1 1 0 010-1.414l2.353-2.353a1 1 0 011.414 0z"/>
                    </svg>
                    <span className="text-sm">GET IT ON Google Play</span>
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span className="text-sm">Available on the Apple Store</span>
                  </button>
              </div>
            </div>
          </div>

          {/* Subscribe Section - Centered */}
          <div className="flex justify-center mb-8">
            <div className="max-w-xl w-full">
              <div className="bg-purple-100 rounded-3xl p-5 sm:p-6 relative overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute -top-2 -left-2 w-5 h-5 bg-purple-300 rounded-lg rotate-45"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-pink-300 rounded-lg rotate-12"></div>
                <div className="absolute top-1/2 -right-3 w-3 h-3 bg-indigo-300 rounded-lg rotate-45"></div>
                
                <div className="text-center relative z-10">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                    Subscribe to get information, latest news and other interesting offers about Cobham
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                    <div className="flex-1 relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder-gray-400 text-sm sm:text-base bg-white"
                      />
                    </div>
                    <button className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium whitespace-nowrap text-sm sm:text-base">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 relative">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm text-center sm:text-left mb-4 sm:mb-0">All rights reserved@titledemo.co</p>
              
              {/* Social Media Buttons - Bottom Right */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-bold text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;


