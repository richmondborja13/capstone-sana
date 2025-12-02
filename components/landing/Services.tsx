import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="service" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto w-full py-6 sm:py-12">
        <div className="mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            We are here to help you
            <br className="hidden sm:block" />
            sell no matter what
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-100">
              <div className="aspect-[4/5] w-full bg-[url('/window.svg')] bg-cover bg-center opacity-10"></div>
              <div className="absolute inset-2 sm:inset-4 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-10 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[380px] bg-white rounded-2xl shadow-xl p-3 sm:p-4 lg:p-5">
              <div className="mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm text-gray-500">Konoha Apartment -</p>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Studio Room</h4>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                <span>Uchiha Sasuke</span>
                <span>Konoha, Japan</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <img alt="avatar" src="https://i.pravatar.cc/64" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover" />
                  <span className="text-gray-700 text-xs sm:text-sm">Shinobi</span>
                </div>
                <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap">
                  Value my house
                </button>
              </div>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-0">
            <div className="absolute -top-6 sm:-top-10 right-0 text-blue-400/60">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h4v10H5V9a2 2 0 0 1 2-2Zm10 0h4v10h-6V9a2 2 0 0 1 2-2Z"/></svg>
            </div>

            <div className="flex items-center gap-2 text-blue-600 font-medium mb-3 sm:mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 text-blue-600">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
              </span>
              <span className="text-xs sm:text-sm">FULLY RECOMMENDED</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6">
              No. 1 Best Real Estate
              <br />
              In The World
            </h2>

            <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="mt-1 inline-flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17l-5 3 1.9-5.9L4 9l6-.2L12 3l2 5.8 6 .2-4.9 5.1L17 20z"/></svg>
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">High-Quality</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Market-leading firms pass the vetting process that disqualifies 80% of those that seek membership.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="mt-1 inline-flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-yellow-50 text-yellow-600 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z"/></svg>
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Wide Connections</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Our local expertise is matched by our global reach, 550 Leading RE Partners with 4,600 offices assist.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <span className="mt-1 inline-flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-pink-50 text-pink-600 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21a9 9 0 1 1 9-9h-4a5 5 0 1 0-5 5Z"/></svg>
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Independence</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">We are a local company rooted in the Hudson Valley and Catskills Market. We bring.</p>
                </div>
              </li>
            </ul>

            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm sm:text-base">
              Learn More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5l7 7-7 7v-4H4v-6h9V5z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


