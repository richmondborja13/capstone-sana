'use client';

import React, { useState } from 'react';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 lg:px-12 border-b border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <select className="bg-transparent border border-gray-300 rounded-lg px-3 py-1.5 outline-none text-gray-700 cursor-pointer hover:border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-right pr-8 bg-[length:16px_16px]">
            <option value="english">English</option>
            <option value="tagalog">Tagalog</option>
          </select>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-gray-600">Already have an account?</span>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700">
            Log in
          </button>
        </div>
      </div>

      {/* Main Content - Blue Section and Form Side by Side */}
      <div className="flex-1 flex items-center justify-center overflow-y-auto p-6">
        <div className="flex items-center rounded-lg overflow-hidden shadow-lg border border-gray-200">
          {/* Left Side - Blue Section */}
          <div className="hidden lg:flex lg:w-64 h-[650px] relative bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 overflow-hidden">
            {/* Separator line */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20"></div>
          </div>

          {/* Right Side - Form Card */}
          <div className="w-full lg:w-[550px] h-[650px] bg-white flex flex-col p-6 lg:p-8 overflow-y-auto">
            {/* Signup Form */}
            <form className="space-y-3 flex-1 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  onBlur={(e) => {
                    if (e.target.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                      setEmailError('Please enter a valid email address');
                    } else {
                      setEmailError('');
                    }
                  }}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-gray-900 text-sm placeholder:text-gray-400 ${
                    emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'
                  }`}
                  placeholder="you@example.com"
                  required
                />
                {emailError && (
                  <p className="mt-1 text-xs text-red-600">{emailError}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError('');
                  }}
                  onBlur={(e) => {
                    if (e.target.value && e.target.value.length < 8) {
                      setPasswordError('Password must be at least 8 characters long');
                    } else {
                      setPasswordError('');
                    }
                  }}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-gray-900 text-sm placeholder:text-gray-400 ${
                    passwordError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'
                  }`}
                  placeholder="Create a password"
                  required
                />
                {passwordError && (
                  <p className="mt-1 text-xs text-red-600">{passwordError}</p>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
                  />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    I agree to HouseofUs's{' '}
                    <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                  </span>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
                  />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    I accept HouseofUs's use of my data for the service and everything else described in the{' '}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and{' '}
                    <a href="#" className="text-blue-600 hover:underline">Data Processing Agreement</a>
                  </span>
                </label>
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                disabled={!termsAccepted || !privacyAccepted}
                className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mt-2 text-sm"
              >
                Create my free account
              </button>

              {/* OR Divider */}
              <div className="relative flex items-center my-3">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-3 text-xs text-gray-500 bg-white">OR</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-2">
                <button
                  type="button"
                  disabled
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg transition-colors text-gray-400 font-medium text-sm cursor-not-allowed opacity-60"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign up with Google
                </button>

                <button
                  type="button"
                  disabled
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg transition-colors text-gray-400 font-medium text-sm cursor-not-allowed opacity-60"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Sign up with Facebook
                </button>
              </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

