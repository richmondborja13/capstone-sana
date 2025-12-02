import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-gradient-to-r from-[#fef9f0] to-[#fff5e6] relative">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We are here for you, contact us at <span className="text-orange-500">anytime</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have any questions about our services or just want to talk with us? Please reach out.
          </p>
        </div>

        {/* Contact Method Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Chat Now Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Chat Now</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-6">Right from this website</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
              Start chat
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Email Us Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-4">From your email app</p>
            <a href="mailto:support@doormat.ca" className="text-gray-800 font-medium text-sm sm:text-base hover:text-orange-500 transition-colors">
              support@doormat.ca
            </a>
          </div>

          {/* Call or Text Us Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-pink-100 flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Call or text us</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-4">From your phone</p>
            <a href="tel:+16474923515" className="text-gray-800 font-medium text-sm sm:text-base hover:text-orange-500 transition-colors">
              +1 (647) 492-3515
            </a>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            We'll get back to you as soon as possible. Our team is available 8am-6pm on weekdays.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


